import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/footer";
import Button from "../../components/ui/Button";

const observatoryTeam = [
  { name: "Garvit Gupta", role: "Observatory Head", image: "" },
  { name: "Diksha Dutta", role: "Co-Head", image: "" },
  { name: "Raghav Sharma", role: "Astro Research Lead", image: "" },
  { name: "Sneha Verma", role: "Event Coordinator", image: "" },
];

const ObservatoryPage = () => {
  const [location, setLocation] = useState({
    latitude: null,
    longitude: null,
    name: "Loading...",
  });
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [manualInput, setManualInput] = useState("");

  useEffect(() => {
    detectLocation();
  }, []);

  const detectLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (pos) => {
          const { latitude, longitude } = pos.coords;
          await reverseGeocode(latitude, longitude);
          fetchPlanets(latitude, longitude);
        },
        async () => {
          // Default to Kurukshetra if user blocks location
          const lat = 29.9695, lon = 76.8783;
          await reverseGeocode(lat, lon);
          fetchPlanets(lat, lon);
        }
      );
    } else {
      setError("Geolocation not supported.");
      setLoading(false);
    }
  };

  const reverseGeocode = async (lat, lon) => {
    try {
      const res = await fetch(
        `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`
      );
      const data = await res.json();
      setLocation({
        latitude: lat,
        longitude: lon,
        name:
          data.address?.city ||
          data.address?.town ||
          data.address?.village ||
          data.address?.state ||
          "Unknown Location",
      });
    } catch (err) {
      console.error("Reverse geocode failed:", err);
      setLocation({ latitude: lat, longitude: lon, name: "Unknown Location" });
    }
  };

  const handleManualLocation = async () => {
    if (!manualInput) return;
    try {
      setLoading(true);
      const res = await fetch(
        `https://nominatim.openstreetmap.org/search?city=${manualInput}&format=json&limit=1`
      );
      const data = await res.json();
      if (data.length > 0) {
        const { lat, lon, display_name } = data[0];
        setLocation({
          latitude: parseFloat(lat),
          longitude: parseFloat(lon),
          name: display_name.split(",")[0],
        });
        fetchPlanets(lat, lon);
      } else {
        setError("City not found. Try again!");
        setLoading(false);
      }
    } catch (err) {
      console.error(err);
      setError("Failed to fetch city coordinates.");
      setLoading(false);
    }
  };

  const fetchPlanets = async (lat, lon) => {
    try {
      const res = await fetch(
        `https://api.visibleplanets.dev/v3?latitude=${lat}&longitude=${lon}`
      );
      const data = await res.json();
      setPlanets(data.data || []);
    } catch (err) {
      console.error("Error fetching planet data:", err);
      setError("Failed to load visible planet data.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <section className="py-20 px-6 md:px-16 bg-black text-center">
        <motion.h1
          className="text-5xl font-extrabold text-white mb-4"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Observatory <span className="text-blue-400">Team</span>
        </motion.h1>
        <p className="text-white/80 max-w-3xl mx-auto text-lg">
          Stargazing & research division of Antariksh Society — exploring the
          cosmos and bringing astronomy closer to everyone 🌌
        </p>
      </section>

      <section className="py-10 px-6 md:px-16 bg-black/80 backdrop-blur-sm mx-4 md:mx-16 rounded-3xl">
        <h2 className="text-3xl text-white font-bold text-center mb-6">
          🌍 Your Sky Location
        </h2>

        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
          <input
            type="text"
            placeholder="Enter city name (e.g. Delhi)"
            className="px-4 py-2 rounded-lg border border-blue-400 bg-black/50 text-white w-full md:w-1/3"
            value={manualInput}
            onChange={(e) => setManualInput(e.target.value)}
          />
          <Button variant="primary" onClick={handleManualLocation}>
            Update Location
          </Button>
        </div>

        <p className="text-center text-white/70 mt-6">
          Showing visible planets for:{" "}
          <span className="text-blue-400 font-semibold">
            {location.name || "Unknown"}
          </span>
        </p>
      </section>
      <section className="py-16 px-6 md:px-16 bg-black">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-10">
          🔭 Visible Planets in Your Sky
        </h2>

        {loading ? (
          <p className="text-center text-white/70">Loading celestial data...</p>
        ) : error ? (
          <p className="text-center text-red-400">{error}</p>
        ) : planets.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {planets.map((planet, i) => (
              <motion.div
                key={i}
                className="bg-black/60 p-6 rounded-2xl text-center text-white hover:scale-105 transition-all border border-blue-500/30"
              >
                <h3 className="text-2xl font-bold text-blue-300 mb-2">
                  {planet.name}
                </h3>
                <p className="text-white/80">
                  Altitude: {planet.altitude.toFixed(1)}° | Azimuth:{" "}
                  {planet.azimuth.toFixed(1)}°
                </p>
                <p className="text-yellow-300">
                  Brightness (Magnitude): {planet.magnitude}
                </p>
                <p className="text-white/70 mt-1">
                  Constellation: {planet.constellation}
                </p>
              </motion.div>
            ))}
          </div>
        ) : (
          <p className="text-center text-white/70">
            No planets visible above the horizon right now.
          </p>
        )}
      </section>


      <section className="py-16 px-6 md:px-16 bg-black/90 text-white text-center">
        <h2 className="text-3xl font-bold mb-6">🧠 Understanding Planet Data</h2>
        <div className="max-w-4xl mx-auto text-left space-y-4 text-white/80 leading-relaxed">
          <p>
            🌠 <strong>Altitude:</strong> How high the planet is above the
            horizon. If it’s <span className="text-blue-400">positive</span>,
            it’s visible in the sky. If it’s{" "}
            <span className="text-red-400">negative</span>, it’s below the
            horizon (not visible right now).
          </p>
          <p>
            🧭 <strong>Azimuth:</strong> The direction in the sky measured from
            north (0°) through east (90°), south (180°), and west (270°). It
            tells you *where* to look.
          </p>
          <p>
            💡 <strong>Magnitude:</strong> The planet’s brightness — smaller
            numbers mean brighter objects. Negative magnitudes (like -3.0) are
            *extremely bright*, like Venus or Jupiter!
          </p>
          <p>
            ✨ <strong>Constellation:</strong> The background constellation the
            planet is currently near, helping you identify it among the stars.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-6 md:px-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
          Meet the Postholders
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {observatoryTeam.map((member, i) => (
            <motion.div
              key={i}
              className="flex flex-col items-center text-white bg-black/60 p-4 rounded-2xl hover:shadow-blue-400/30 transition"
            >
              <img
                src={
                  member.image ||
                  "https://cdn-icons-png.flaticon.com/512/149/149071.png"
                }
                alt={member.name}
                className="w-20 h-20 rounded-full border-2 border-blue-400 mb-2"
              />
              <h4 className="font-semibold text-lg">{member.name}</h4>
              <p className="text-blue-300 text-sm">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </section>

<section className="relative py-20 px-6 md:px-16 text-center bg-gradient-to-b from-[#01010f] via-[#02021a] to-[#01010f] overflow-hidden">
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.2),transparent_70%)] blur-2xl -z-10"></div>

  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className="max-w-4xl mx-auto flex flex-col items-center space-y-8"
  >

    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-cosmic-glow drop-shadow-[0_0_20px_rgba(59,130,246,0.4)]">
       Be Part of Our Next Observation Session
    </h2>


    <p className="text-white/80 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
      Join our journey through the stars! Check out upcoming events in the{" "}
      <span className="text-cyan-300 font-semibold">Events</span> section or
      subscribe below to get regular updates on observation sessions, celestial
      phenomena, and more.
    </p>


    <div className="flex flex-row justify-center items-center gap-4 w-full sm:w-auto mt-4">
      <Button
        variant="primary"
        size="lg"
        onClick={() => (window.location.href = "/events")}
        className="w-full sm:w-auto px-8 py-3 font-semibold shadow-[0_0_15px_rgba(59,130,246,0.6)] hover:shadow-[0_0_25px_rgba(59,130,246,0.9)] transition-all"
      >
        View Upcoming Events
      </Button>
      <br />
    </div>
  </motion.div>
</section>


      <Footer />
    </>
  );
};

export default ObservatoryPage;

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/footer";
import { FaRocket } from "react-icons/fa";

const LaunchPadPage = () => {
  const [allLaunches, setAllLaunches] = useState([]);
  const [visibleLaunches, setVisibleLaunches] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const VISIBLE_COUNT = 5;

  useEffect(() => {
    const fetchLaunches = async () => {
      try {
        const res = await fetch(
          "https://ll.thespacedevs.com/2.0.0/launch/upcoming/?limit=20"
        );
        const data = await res.json();
        const results = data.results || [];
        setAllLaunches(results);
        setVisibleLaunches(results.slice(0, VISIBLE_COUNT));
      } catch (err) {
        console.error("Error fetching launches:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchLaunches();
  }, []);

  const handleNext = () => {
    if (startIndex + VISIBLE_COUNT < allLaunches.length) {
      const newIndex = startIndex + 1;
      setStartIndex(newIndex);
      setVisibleLaunches(allLaunches.slice(newIndex, newIndex + VISIBLE_COUNT));
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      const newIndex = startIndex - 1;
      setStartIndex(newIndex);
      setVisibleLaunches(allLaunches.slice(newIndex, newIndex + VISIBLE_COUNT));
    }
  };

  return (
    <>
      <Navbar />

      {/* HEADER */}
      <section className="relative py-24 px-6 md:px-16 text-center bg-gradient-to-b from-[#01010f] via-[#02021c] to-[#000010] overflow-hidden">
        {/* floating background particles */}
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(30,58,138,0.25)_0%,transparent_70%)]"></div>
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          {[...Array(30)].map((_, i) => (
            <motion.span
              key={i}
              className="absolute w-1 h-1 bg-cyan-400/50 rounded-full"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                opacity: 0.5,
              }}
              animate={{
                y: [Math.random() * window.innerHeight, Math.random() * window.innerHeight],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 6 + Math.random() * 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        <motion.h1
          className="text-5xl md:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-500 mb-6 drop-shadow-[0_0_15px_rgba(59,130,246,0.6)]"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          🚀 Upcoming Launch Timeline
        </motion.h1>
        <motion.p
          className="text-white/80 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Witness humanity’s next steps into space — explore all upcoming rocket
          launches around the world in real time.
        </motion.p>
      </section>

      {/* TIMELINE */}
      <section className="relative py-24 px-6 md:px-16 bg-[#02021a] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.15),transparent_60%)]"></div>
        {loading ? (
          <div className="flex justify-center items-center h-[60vh]">
            <p className="text-white text-xl animate-pulse">Fetching launches...</p>
          </div>
        ) : (
          <div className="relative max-w-6xl mx-auto">
            {/* central glowing line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-[3px] bg-gradient-to-b from-blue-500 via-cyan-400 to-purple-600 rounded-full blur-[0.5px] h-full shadow-[0_0_25px_rgba(59,130,246,0.8)]"></div>

            {visibleLaunches.map((launch, idx) => {
              const isLeft = idx % 2 === 0;
              return (
                <motion.div
                  key={launch.id}
                  className={`relative flex flex-col items-center mb-20 ${
                    isLeft ? "md:items-start" : "md:items-end"
                  }`}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  {/* Connecting Line Glow */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 top-0 w-[2px] bg-gradient-to-b from-cyan-400 to-transparent h-10"></div>

                  <div
                    className={`w-full md:w-5/12 z-10 ${
                      isLeft ? "md:text-left md:pr-10" : "md:text-left md:pl-10"
                    }`}
                  >
                    <motion.div
                      whileHover={{ scale: 1.03, rotateX: 5 }}
                      className="bg-gradient-to-br from-[#0b1120] to-[#111a2e] p-6 rounded-2xl border border-white/10 backdrop-blur-lg hover:border-cyan-400/30 transition-all duration-300 shadow-[0_0_25px_rgba(59,130,246,0.25)]"
                    >
                      <h3 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400 mb-2">
                        {launch.name}
                      </h3>
                      <p className="text-white/80 mb-1">
                        <span className="font-medium text-cyan-300">Date:</span>{" "}
                        {new Date(launch.net).toLocaleString()}
                      </p>
                      <p className="text-white/80 mb-1">
                        <span className="font-medium text-cyan-300">Rocket:</span>{" "}
                        {launch.rocket?.configuration?.name || "Unknown"}
                      </p>
                      <p className="text-white/80">
                        <span className="font-medium text-cyan-300">Location:</span>{" "}
                        {launch.pad?.name || "Unknown"}
                      </p>
                    </motion.div>
                  </div>

                  {/* Rocket marker */}
<motion.div
  className="absolute left-1/2 transform -translate-x-1/2 bg-gradient-to-br from-blue-400 to-cyan-400 w-14 h-14 rounded-full flex justify-center items-center shadow-[0_0_20px_rgba(59,130,246,0.9)] text-2xl"
  whileHover={{ scale: 1.2, rotate: 10 }}
  transition={{ type: "spring", stiffness: 200 }}
>
  <FaRocket className="text-white text-3xl" />
</motion.div>
                </motion.div>
              );
            })}

            {/* navigation buttons */}
            <div className="flex justify-center items-center gap-6 mt-10">
              {startIndex > 0 && (
                <motion.button
                  onClick={handlePrev}
                  whileHover={{ scale: 1.15, y: -2 }}
                  className="bg-gradient-to-r from-blue-600 to-cyan-400 text-black font-bold rounded-full p-4 md:p-5 shadow-lg hover:shadow-[0_0_20px_rgba(59,130,246,0.8)] transition-all"
                >
                  ↑
                </motion.button>
              )}
              <motion.button
                onClick={handleNext}
                whileHover={{ scale: 1.15, y: 2 }}
                className="bg-gradient-to-r from-blue-600 to-cyan-400 text-black font-bold rounded-full p-4 md:p-5 shadow-lg hover:shadow-[0_0_20px_rgba(59,130,246,0.8)] transition-all"
              >
                ↓
              </motion.button>
            </div>
          </div>
        )}
      </section>

      <Footer />
    </>
  );
};

export default LaunchPadPage;

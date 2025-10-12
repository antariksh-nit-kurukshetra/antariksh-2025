import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/footer";

// Sample Event Data
const upcomingEvents = [
  {
    title: "Astrohunt",
    date: "Oct 20, 2025",
    description: "Solve astronomy clues in this thrilling team treasure hunt.",
    image: "https://res.cloudinary.com/doejabjai/image/upload/v1759938895/ChatGPT_Image_Oct_8_2025_09_24_20_PM_pkmux6.png",
    route: "/events/astrohunt",
  },
  {
    title: "Astroarena",
    date: "Oct 22, 2025",
    description: "Squid Game inspired elimination event with cosmic twist.",
    image: "https://res.cloudinary.com/doejabjai/image/upload/v1759938217/ChatGPT_Image_Oct_8_2025_08_34_09_PM_uzbdsw.png",
    route: "/events/astroarena",
  },
];

const techspardhaEvents = [
  {
    title: "Robotics Challenge",
    date: "Nov 5, 2025",
    description: "Build and program robots to complete tasks efficiently.",
    image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    route: "/events/robotics-challenge",
  },
  {
    title: "Coding Marathon",
    date: "Nov 6, 2025",
    description: "Solve real-world problems in a 24-hour hackathon.",
    image: "https://cdn-icons-png.flaticon.com/512/1055/1055687.png",
    route: "/events/coding-marathon",
  },
];

const workshops = [
  {
    title: "Telescope Making",
    date: "Oct 28, 2025",
    description: "Learn to craft your own telescope from scratch.",
    image: "https://cdn-icons-png.flaticon.com/512/2932/2932672.png",
    route: "/events/telescope-workshop",
  },
  {
    title: "Astro Photography",
    date: "Nov 1, 2025",
    description: "Capture the stars with your own camera setup.",
    image: "https://cdn-icons-png.flaticon.com/512/2922/2922263.png",
    route: "/events/astro-photography",
  },
];

// Star Background Component
const StarBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let w = window.innerWidth;
    let h = window.innerHeight;
    canvas.width = w;
    canvas.height = h;

    const stars = Array.from({ length: 5000 }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      z: Math.random() * 1000,
    }));

    const drawStars = () => {
      ctx.clearRect(0, 0, w, h);
      stars.forEach((s) => {
        const x = (s.x - w / 2) / (s.z * 0.001) + w / 2;
        const y = (s.y - h / 2) / (s.z * 0.001) + h / 2;
        const brightness = 1 - s.z / 1000;
        ctx.fillStyle = `rgba(255,255,255,${brightness})`;
        ctx.fillRect(x, y, 1, 1);
        s.z -= 2;
        if (s.z <= 0) s.z = 1000;
      });
      requestAnimationFrame(drawStars);
    };
    drawStars();

    const handleResize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w;
      canvas.height = h;
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 -z-10" />;
};

const EventsPage = () => {
  const navigate = useNavigate();

  const renderEventSection = (title, events) => (
    <section className="py-16 px-6 md:px-20">
      <motion.h2
        className="text-3xl md:text-5xl font-extrabold text-white text-center mb-12 drop-shadow-lg"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {title}
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {events.map((event, i) => (
          <motion.div
            key={i}
            className="bg-white/10 backdrop-blur-md rounded-3xl p-6 flex flex-col justify-between shadow-lg hover:shadow-blue-400/50 cursor-pointer transform transition-all hover:scale-105"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: i * 0.1 }}
            onClick={() => navigate(event.route)}
          >
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-48 md:h-56 object-cover rounded-2xl mb-4"
            />
            <div className="flex flex-col gap-2">
              <h3 className="text-2xl font-bold text-white">{event.title}</h3>
              <p className="text-white/70 text-sm">{event.date}</p>
              <p className="text-white/80">{event.description}</p>
            </div>
            <motion.button
              className="mt-4 px-6 py-2 rounded-full bg-blue-400 text-white font-semibold shadow-lg hover:shadow-blue-500/50 transition-transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                e.stopPropagation();
                navigate(event.route);
              }}
            >
              Know More
            </motion.button>
          </motion.div>
        ))}
      </div>
    </section>
  );

  return (
    <>
      <Navbar />
      <StarBackground />

      {/* Hero Section */}
      <section className="relative py-20 px-6 md:px-20 text-center overflow-hidden">
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold text-white mb-4 drop-shadow-lg"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Explore <span className="text-blue-400">Events</span>
        </motion.h1>
        <motion.p
          className="max-w-3xl text-white/80 text-lg md:text-xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Discover upcoming events, competitions, workshops, and more. Click on an event to
          learn more and participate!
        </motion.p>
      </section>

      {/* Sections */}
      {renderEventSection("Upcoming Events", upcomingEvents)}
      {renderEventSection("Techspardha Events", techspardhaEvents)}
      {renderEventSection("Workshops & Learning", workshops)}

      {/* CTA / Newsletter Section */}
      <section className="py-20 px-6 md:px-20 text-center bg-white/5 backdrop-blur-md rounded-3xl mx-4 md:mx-20 my-16">
        <motion.h2
          className="text-3xl md:text-5xl font-extrabold text-white mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Join Our Newsletter
        </motion.h2>
        <motion.p
          className="text-white/80 mb-6 max-w-xl mx-auto"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Stay updated on all events, workshops, and exclusive content from Antariksh Society.
        </motion.p>
        <motion.button
          className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-blue-400 text-white font-semibold shadow-lg hover:shadow-purple-500/50 transition-transform hover:scale-105"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
        >
          Subscribe Now
        </motion.button>
      </section>

      <Footer />
    </>
  );
};

export default EventsPage;

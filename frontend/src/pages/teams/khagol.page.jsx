import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/footer";

export default function KhagolQuizzingPage() {
  const members = [
    { name: "Rahul Gupta", role: "Team Lead", img: "/assets/team/rahul.jpg" },
    { name: "Sneha Patel", role: "Quiz Coordinator", img: "/assets/team/sneha.jpg" },
    { name: "Aryan Mehta", role: "Research Head", img: "/assets/team/aryan.jpg" },
    { name: "Riya Sharma", role: "Creative Writer", img: "/assets/team/riya.jpg" },
  ];

  const missions = [
    {
      title: "Cosmic Trivia",
      desc: "Weekly challenges decoding mysteries of galaxies, planets, and physics.",
      icon: "🌌",
    },
    {
      title: "AstroLeague",
      desc: "Inter-college battle of brains where only the brightest stars shine.",
      icon: "🚀",
    },
    {
      title: "The Space Riddle",
      desc: "Mind-bending quiz puzzles inspired by celestial wonders.",
      icon: "🪐",
    },
  ];

  useEffect(() => {

    const canvas = document.getElementById("starfield");
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const stars = Array.from({ length: 150 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      z: Math.random() * 0.9 + 0.1,
    }));

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      stars.forEach((s) => {
        s.x -= 0.3 * s.z;
        if (s.x < 0) s.x = canvas.width;
        const size = 1.5 * s.z;
        ctx.fillStyle = `rgba(200,255,255,${s.z})`;
        ctx.beginPath();
        ctx.arc(s.x, s.y, size, 0, 2 * Math.PI);
        ctx.fill();
      });
      requestAnimationFrame(animate);
    };
    animate();
  }, []);

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      <Navbar />

      {/* Animated Starfield */}
      <canvas id="starfield" className="absolute top-0 left-0 w-full h-full z-0"></canvas>

      {/* Nebula Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-violet-900/40 via-black/80 to-black opacity-90 z-0 blur-2xl"></div>

      {/* Hero Section */}
      <section className="relative z-10 flex flex-col items-center justify-center text-center pt-32 pb-24 px-6">
        <motion.h1
          className="text-6xl md:text-7xl font-extrabold bg-gradient-to-r from-cyan-400 to-violet-400 text-transparent bg-clip-text drop-shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Khagol Quizzing Team
        </motion.h1>
        <motion.p
          className="mt-6 max-w-2xl text-gray-300 text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Where curiosity meets cosmos. We decode the secrets of the universe — one quiz at a time.
        </motion.p>
      </section>

      {/* Missions Section */}
      <section className="relative z-10 px-6 md:px-16 py-16">
        <motion.h2
          className="text-4xl font-bold text-center mb-10 text-cyan-400"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Our Space Missions 🚀
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {missions.map((m, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05, rotateY: 10 }}
              className="p-6 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-violet-500/10 border border-cyan-400/20 backdrop-blur-md shadow-xl hover:border-cyan-400/40"
            >
              <div className="text-5xl mb-4">{m.icon}</div>
              <h3 className="text-2xl font-semibold text-cyan-300 mb-3">{m.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{m.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="relative z-10 px-6 md:px-16 py-20">
        <motion.h2
          className="text-4xl font-bold text-center mb-10 text-violet-400"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Meet Our Space Explorers 🌠
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 justify-items-center">
          {members.map((m, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-black/40 to-cyan-500/10 border border-cyan-400/20 rounded-2xl p-6 text-center backdrop-blur-md shadow-lg hover:border-cyan-400/40 transition"
            >
              <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-2 border-cyan-400/40">
                <img
                  src={m.img}
                  alt={m.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold text-cyan-300">{m.name}</h3>
              <p className="text-sm text-gray-400">{m.role}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Join Section */}
      <section className="relative z-10 text-center py-24 px-6 bg-gradient-to-t from-cyan-900/20 to-transparent">
        <motion.h3
          className="text-3xl font-bold text-cyan-400 mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          Ready to Join the Orbit?
        </motion.h3>
        <motion.p
          className="text-gray-400 mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Challenge your cosmic IQ — the stars are waiting!
        </motion.p>
        <motion.a
          href="/contact"
          whileHover={{ scale: 1.1 }}
          className="inline-block bg-cyan-500 hover:bg-cyan-400 text-black font-semibold px-8 py-3 rounded-full shadow-lg transition"
        >
          Join the Orbit 🌌
        </motion.a>
      </section>

      <Footer />
    </div>
  );
}

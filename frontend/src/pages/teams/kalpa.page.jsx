import React from "react";
import { motion } from "framer-motion";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/footer";
import Button from "../../components/ui/Button"; // import button

const kalpaTeam = [
  { name: "Raghvi Gupta", role: "Kalpa Head", image: "" },
  { name: "Bhavya Arya", role: "Co-Head", image: "" },
  { name: "Archit Chhajed", role: "Editor", image: "" },
  { name: "Kartik Saraswat", role: "Content Lead", image: "" },
];

const KalpaPage = () => {
  return (
    <>
      <Navbar />

      {/* Hero / Intro */}
      <section className="relative py-20 px-6 md:px-16 flex flex-col items-center text-center">
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold text-white mb-4 drop-shadow-lg"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Kalpa <span className="text-blue-400">Magazine</span>
        </motion.h1>
        <motion.p
          className="max-w-3xl text-white/90 text-lg md:text-xl leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          The official astronomy & astrophysics magazine of Antariksh Society, NIT Kurukshetra.
          Dive into the cosmos through articles, insights, and creative expressions by our passionate team.
        </motion.p>
      </section>

      {/* What is Kalpa */}
      <section className="py-16 px-6 md:px-16 flex flex-col md:flex-row items-center gap-10 bg-black/80 backdrop-blur-sm rounded-3xl mx-4 md:mx-16">
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt="Kalpa Magazine"
            className="w-full max-w-md mx-auto rounded-2xl shadow-xl"
          />
        </motion.div>
        <motion.div
          className="md:w-1/2 flex flex-col gap-4"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">What is Kalpa?</h2>
          <p className="text-white/80 text-lg leading-relaxed">
            Kalpa is a monthly publication by the Antariksh Society that covers the latest in
            astronomy, astrophysics, space technology, and cosmic phenomena. We aim to inspire
            students and enthusiasts to explore the universe creatively.
          </p>
        </motion.div>
      </section>

      {/* What we do */}
      <section className="py-16 px-6 md:px-16 bg-black/80 backdrop-blur-sm rounded-3xl mx-4 md:mx-16">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-white text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          What We Do
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Articles",
              desc: "Insightful articles on astronomy, space missions, and cosmic phenomena.",
              icon: "📝",
            },
            {
              title: "Creative Illustrations",
              desc: "Astro-art, infographics, and visual storytelling to make space fun and accessible.",
              icon: "🎨",
            },
            {
              title: "Research Updates",
              desc: "Summaries of recent discoveries, ISRO updates, and student research projects.",
              icon: "🔭",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="bg-black/60 backdrop-blur-md p-6 rounded-2xl flex flex-col items-center text-center shadow-lg hover:shadow-blue-400/50 transition-transform transform hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
            >
              <div className="text-5xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
              <p className="text-white/70">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Postholders */}
      <section className="py-16 px-6 md:px-16">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-white text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Meet the Postholders
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {kalpaTeam.map((member, i) => (
            <motion.div
              key={i}
              className="flex flex-col items-center text-white bg-black/60 backdrop-blur-lg rounded-2xl p-4 shadow-lg hover:shadow-blue-400/30 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
            >
              <div className="w-20 h-20 mb-2">
                <img
                  src={member.image || "https://cdn-icons-png.flaticon.com/512/149/149071.png"}
                  alt={member.name}
                  className="w-full h-full rounded-full object-cover border-2 border-blue-400"
                />
              </div>
              <h4 className="font-semibold text-lg">{member.name}</h4>
              <p className="text-blue-300 text-sm">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Instagram CTA */}
      <section className="py-16 px-6 md:px-16 flex flex-col items-center text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-white mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Follow Us on Instagram
        </motion.h2>
        <motion.p
          className="text-white/80 mb-6 max-w-xl"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Get the latest updates, sneak peeks, and behind-the-scenes from Kalpa Magazine.
        </motion.p>
        <Button
          variant="primary"
          size="lg"
          onClick={() => window.open("https://www.instagram.com/antariksh_nitkkr/?hl=en", "_blank")}
          className="animate-pulse"
        >
          Visit Instagram
        </Button>
      </section>

      <Footer />
    </>
  );
};

export default KalpaPage;

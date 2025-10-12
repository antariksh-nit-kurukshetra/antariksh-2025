import React from "react";
import { motion } from "framer-motion";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/footer";
import Button from "../../components/ui/Button";

const discussionTeam = [
  { name: "Raghvi Gupta", role: "Discussion Head", image: "" },
  { name: "Bhavya Arya", role: "Coordinator", image: "" },
  { name: "Archit Chhajed", role: "Concept Lead", image: "" },
  { name: "Kartik Saraswat", role: "Social Media & Updates", image: "" },
];

const discussionTopics = [
  {
    title: "Black Holes",
    desc: "Exploring the mysteries of black holes, event horizons, and singularities.",
  },
  {
    title: "Exoplanets",
    desc: "Understanding newly discovered planets beyond our solar system.",
  },
  {
    title: "Space Missions",
    desc: "Discussing recent ISRO, NASA, and SpaceX missions.",
  },
  {
    title: "Astrophysics Phenomena",
    desc: "Concept discussions on gravitational waves, dark matter, and cosmic events.",
  },
];

const DiscussionPage = () => {
  return (
    <div className="bg-black min-h-screen font-mono">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-24 px-6 md:px-16 flex flex-col items-center text-center bg-black/30 backdrop-blur-md rounded-3xl mx-4 md:mx-16">
        <motion.h1
          className="text-5xl md:text-7xl font-extrabold text-white mb-6 drop-shadow-lg"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Khagol <span className="text-green-400">Discussion</span>
        </motion.h1>
        <motion.p
          className="max-w-3xl text-white/90 text-lg md:text-xl leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Regular discussions on fascinating astronomy concepts! Join the team to learn, debate, and explore cosmic mysteries every week.
        </motion.p>
      </section>

      {/* What We Do */}
      <section className="py-20 px-6 md:px-16 bg-black/30 backdrop-blur-md rounded-3xl mx-4 md:mx-16">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-white text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our Discussions
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {discussionTopics.map((topic, i) => (
            <motion.div
              key={i}
              className="bg-black/30 backdrop-blur-md p-6 rounded-2xl flex flex-col items-center text-center shadow-lg hover:shadow-green-400/50 transition-transform transform hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
            >
              <h3 className="text-xl font-bold text-white mb-2">{topic.title}</h3>
              <p className="text-white/70">{topic.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Postholders */}
      <section className="py-20 px-6 md:px-16 bg-black/30 backdrop-blur-md rounded-3xl mx-4 md:mx-16">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-white text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Meet the Team
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {discussionTeam.map((member, i) => (
            <motion.div
              key={i}
              className="flex flex-col items-center text-white bg-black/30 backdrop-blur-md rounded-2xl p-4 shadow-lg hover:shadow-green-400/30 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
            >
              <div className="w-24 h-24 mb-3">
                <img
                  src={member.image || "https://cdn-icons-png.flaticon.com/512/149/149071.png"}
                  alt={member.name}
                  className="w-full h-full rounded-full object-cover border-2 border-green-400"
                />
              </div>
              <h4 className="font-semibold text-lg">{member.name}</h4>
              <p className="text-green-300 text-sm">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 md:px-16 flex flex-col items-center text-center bg-black/30 backdrop-blur-md rounded-3xl mx-4 md:mx-16">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-white mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Join the Discussions!
        </motion.h2>
        <motion.p
          className="text-white/80 mb-6 max-w-xl"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Follow us to get updates on discussion sessions, new topics, and interactive debates.
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
    </div>
  );
};

export default DiscussionPage;

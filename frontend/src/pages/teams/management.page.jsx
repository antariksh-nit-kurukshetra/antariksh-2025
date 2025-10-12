import React from "react";
import { motion } from "framer-motion";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/footer";
import Button from "../../components/ui/Button";

const managementTeam = [
  { name: "Garvit Gupta", role: "President", image: "" },
  { name: "Diksha Dutta", role: "Vice President", image: "" },
  { name: "Raghvi Gupta", role: "Sponsorship Head", image: "" },
  { name: "Bhavya Arya", role: "Events Coordinator", image: "" },
];

const ManagementSponsorshipPage = () => {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-24 px-6 md:px-16 flex flex-col items-center text-center">
        <motion.h1
          className="text-5xl md:text-7xl font-extrabold text-white mb-6 drop-shadow-lg"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Management & <span className="text-yellow-400">Sponsorship</span>
        </motion.h1>
        <motion.p
          className="max-w-3xl text-white/90 text-lg md:text-xl leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          The backbone of Antariksh — our Management & Sponsorship team ensures that every event
          is executed flawlessly and partners are engaged effectively. From planning to funding,
          we make the vision happen.
        </motion.p>
      </section>

      {/* What We Do */}
      <section className="py-20 px-6 md:px-16 bg-black/80 backdrop-blur-sm rounded-3xl mx-4 md:mx-16">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-white text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our Responsibilities
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Event Planning",
              desc: "Plan and coordinate events seamlessly from start to finish.",
              icon: "📅",
            },
            {
              title: "Sponsorship & Partnerships",
              desc: "Engage with sponsors and partners to fund and promote events.",
              icon: "🤝",
            },
            {
              title: "Operations & Logistics",
              desc: "Handle operations, logistics, and smooth execution of all activities.",
              icon: "📦",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="bg-black/60 backdrop-blur-md p-6 rounded-2xl flex flex-col items-center text-center shadow-lg hover:shadow-yellow-400/50 transition-transform transform hover:scale-105"
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
      <section className="py-20 px-6 md:px-16">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-white text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Meet the Team
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {managementTeam.map((member, i) => (
            <motion.div
              key={i}
              className="flex flex-col items-center text-white bg-black/60 backdrop-blur-lg rounded-2xl p-4 shadow-lg hover:shadow-yellow-400/30 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
            >
              <div className="w-24 h-24 mb-3">
                <img
                  src={member.image || "https://cdn-icons-png.flaticon.com/512/149/149071.png"}
                  alt={member.name}
                  className="w-full h-full rounded-full object-cover border-2 border-yellow-400"
                />
              </div>
              <h4 className="font-semibold text-lg">{member.name}</h4>
              <p className="text-yellow-300 text-sm">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call-to-action */}
      <section className="py-20 px-6 md:px-16 flex flex-col items-center text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-white mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Join or Connect With Us
        </motion.h2>
        <motion.p
          className="text-white/80 mb-6 max-w-xl"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Interested in management, event coordination, or sponsorship opportunities? Reach out and be part of our growing team.
        </motion.p>
        <Button
          variant="primary"
          size="lg"
          onClick={() => window.open("https://www.instagram.com/antariksh_nitkkr/?hl=en", "_blank")}
          className="animate-pulse"
        >
          Contact / Instagram
        </Button>
      </section>

      <Footer />
    </>
  );
};

export default ManagementSponsorshipPage;

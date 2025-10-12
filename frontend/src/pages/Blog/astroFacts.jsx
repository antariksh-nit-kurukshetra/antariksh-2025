import React from "react";
import { motion } from "framer-motion";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/footer";


const astroFacts = [
  {
    title: "The Sun's Size",
    description:
      "The Sun contains 99.86% of the mass of our Solar System. Its diameter is about 1.39 million km, 109 times that of Earth.",
    link: "https://solarsystem.nasa.gov/solar-system/sun/overview/",
  },
  {
    title: "Black Holes",
    description:
      "Black holes are regions of spacetime where gravity is so strong that nothing—not even light—can escape. They form from collapsing massive stars.",
    link: "https://www.nationalgeographic.com/science/article/black-holes-facts",
  },
  {
    title: "The Largest Volcano",
    description:
      "Olympus Mons on Mars is the largest volcano in the solar system, standing 22 km high, almost three times the height of Mount Everest.",
    link: "https://mars.nasa.gov/resources/2275/olympus-mons/",
  },
  {
    title: "Neutron Stars",
    description:
      "Neutron stars are incredibly dense. A sugar-cube-sized amount of neutron-star material would weigh about a billion tons on Earth.",
    link: "https://www.nasa.gov/audience/forstudents/5-8/features/nasa-knows/what-is-a-neutron-star-58.html",
  },
  {
    title: "Exoplanets",
    description:
      "There are over 5,500 confirmed exoplanets. Some of them could potentially host life depending on their distance from their star.",
    link: "https://exoplanets.nasa.gov/",
  },
  {
    title: "The Age of the Universe",
    description:
      "The universe is approximately 13.8 billion years old according to observations from the cosmic microwave background.",
    link: "https://www.nasa.gov/feature/goddard/2018/nasa-s-planck-mission-reveals-new-view-of-cosmic-microwave-background",
  },
  {
    title: "Galaxies",
    description:
      "There are over 2 trillion galaxies in the observable universe, each containing millions or even billions of stars.",
    link: "https://www.esa.int/Science_Exploration/Space_Science/Hubble_s_galaxy_census_reveals_universe_has_more_than_2_trillion_galaxies",
  },
];

const AstroFactsPage = () => {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-20 px-6 md:px-20 flex flex-col items-center text-center overflow-hidden">
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold text-white mb-4 drop-shadow-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Astro <span className="text-blue-400">Facts</span>
        </motion.h1>
        <motion.p
          className="max-w-3xl text-white/80 text-lg md:text-xl leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Discover amazing facts about the universe, stars, planets, and cosmic phenomena.
          Explore, learn, and fuel your curiosity about space.
        </motion.p>
      </section>

      {/* Facts Grid */}
      <section className="py-16 px-6 md:px-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {astroFacts.map((fact, i) => (
          <motion.div
            key={i}
            className="bg-white/10 backdrop-blur-md rounded-3xl p-6 shadow-lg hover:shadow-blue-400/50 transition-transform transform hover:scale-105 cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: i * 0.1 }}
          >
            <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{fact.title}</h3>
            <p className="text-white/70 mb-4">{fact.description}</p>
            <a
              href={fact.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 font-semibold hover:underline"
            >
              Learn More →
            </a>
          </motion.div>
        ))}
      </section>

      {/* Fun CTA */}
      <section className="py-16 px-6 md:px-20 text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-white mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Stay Curious!
        </motion.h2>
        <motion.p
          className="text-white/70 max-w-2xl mx-auto mb-6"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Space is vast and full of mysteries. Keep exploring, and let the universe inspire you.
        </motion.p>
        <motion.a
          href="https://solarsystem.nasa.gov/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-blue-400 text-white font-semibold shadow-lg hover:shadow-purple-500/50 transition-transform hover:scale-105"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
        >
          Explore NASA →
        </motion.a>
      </section>

      <Footer />
    </>
  );
};

export default AstroFactsPage;

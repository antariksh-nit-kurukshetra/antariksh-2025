import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaGithub,
} from "react-icons/fa";

const footerSections = {
  Explore: [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Events", path: "/events" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
    { name: "Launchpad", path: "/launchpad" },
  ],
  Teams: [
    { name: "Core Management", path: "/teams/core-management" },
    { name: "Design & Media", path: "/teams/design-media" },
    { name: "Web & Tech", path: "/teams/web-tech" },
    { name: "Discussion", path: "/teams/discussion" },
    { name: "Kalpa", path: "/teams/kalpa" },
    { name: "Observatory", path: "/teams/observatory" },
    { name: "Newsletter", path: "/teams/newsletter" },
    { name: "Khagol Quizzing", path: "/teams/khagol" },
  ],
  Blog: [
    { name: "All Articles", path: "/blog" },
    { name: "Space Explorations", path: "/blog/space" },
    { name: "Astro Facts", path: "/blog/facts" },
  ],
};

export default function Footer() {
  return (
    <footer className="relative w-full text-gray-200 border-t border-white/10 bg-white/5 backdrop-blur-2xl overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(74,222,128,0.1)_0%,transparent_70%)] blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 py-16">
        {/* Top section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-14 mb-12">
          {/* Brand section */}
          <div className="flex flex-col gap-5">
            <motion.img
              src="/logo512.png"
              alt="Antariksh Logo"
              className="h-20 w-auto rounded-2xl"
              animate={{
                scale: [1, 1.05, 1],
                filter: [
                  "drop-shadow(0px 0px 10px rgba(74,222,128,0.3))",
                  "drop-shadow(0px 0px 20px rgba(74,222,128,0.6))",
                  "drop-shadow(0px 0px 10px rgba(74,222,128,0.3))",
                ],
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
            <p className="text-gray-300 text-sm leading-relaxed max-w-xs">
              Antariksh — igniting curiosity, fostering innovation, and exploring
              the cosmos through creativity, technology, and teamwork.
            </p>


            <div className="flex gap-5 mt-2">
              {[
                { Icon: FaGithub, color: "hover:text-gray-300", href: "https://github.com/antariksh-nit-kurukshetra" },
                { Icon: FaInstagram, color: "hover:text-pink-400", href: "https://www.instagram.com/antariksh_nitkkr/" },
                { Icon: FaLinkedin, color: "hover:text-blue-400", href: "https://www.linkedin.com/company/antariksh-nit-kurukshetra?originalSubdomain=in" },
                { Icon: FaYoutube, color: "hover:text-red-500", href: "https://youtube.com/" },
              ].map(({ Icon, color, href }, i) => (
                <motion.a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2 }}
                  className={`text-gray-400 transition ${color}`}
                >
                  <Icon size={22} />
                </motion.a>
              ))}
            </div>
          </div>


          {Object.entries(footerSections).map(([section, links]) => (
            <div key={section}>
              <h3 className="text-lg font-bold text-white mb-4 tracking-wide">
                {section}
              </h3>
              <ul className="flex flex-col gap-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-gray-400 hover:text-blue-400 transition duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8" />


        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <motion.div
            className="bg-white/5 backdrop-blur-md p-6 rounded-2xl hover:bg-white/10 transition"
            whileHover={{ scale: 1.02 }}
          >
            <h4 className="text-xl font-bold text-blue-400 mb-2"> Upcoming Event</h4>
            <p className="text-sm text-gray-300 mb-4">
              <strong>Astrohunt:</strong> Solve cosmic clues and uncover secrets among the stars!
            </p>
            <Link
              to="/events"
              className="text-blue-400 hover:underline text-sm font-semibold"
            >
              Explore Events →
            </Link>
          </motion.div>

          <motion.div
            className="bg-white/5 backdrop-blur-md p-6 rounded-2xl hover:bg-white/10 transition"
            whileHover={{ scale: 1.02 }}
          >
            <h4 className="text-xl font-bold text-blue-400 mb-2">Meet Our Teams</h4>
            <p className="text-sm text-gray-300 mb-4">
              From Design to Web Tech, meet the brilliant minds shaping Antariksh’s galaxy.
            </p>
            <Link
              to="/about"
              className="text-blue-400 hover:underline text-sm font-semibold"
            >
              Meet the Teams →
            </Link>
          </motion.div>

          <motion.div
            className="bg-white/5 backdrop-blur-md p-6 rounded-2xl hover:bg-white/10 transition"
            whileHover={{ scale: 1.02 }}
          >
            <h4 className="text-xl font-bold text-blue-400 mb-2"> Featured Blog</h4>
            <p className="text-sm text-gray-300 mb-4">
              "The Mysteries of Space" — by Rahul Gupta. Journey through the stars and beyond.
            </p>
            <Link
              to="/blog/the-mysteries-of-space"
              className="text-blue-400 hover:underline text-sm font-semibold"
            >
              Read Blog →
            </Link>
          </motion.div>
        </div>

        <div className="border-t border-white/10 mt-10 mb-6" />

        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 gap-4">
          <p>© {new Date().getFullYear()} Antariksh. All rights reserved.</p>
          <p className="text-gray-500">
            Built with 💫 by <span className="text-green-400">Web & Tech Team</span>
          </p>
        </div>
      </div>

      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400/30 via-transparent to-green-400/30 blur-md" />
    </footer>
  );
}

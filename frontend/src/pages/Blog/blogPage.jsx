import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/footer";

const blogPosts = [
  {
    id: 1,
    title: "Exploring the Infinite: Humanity’s Journey into Space",
    author: "Rahul Gupta",
    date: "October 2025",
    image:
      "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=1000&q=80",
    tag: "Space Exploration",
    excerpt:
      "From the first rocket to interplanetary dreams — discover how humanity’s curiosity has driven us to reach for the stars.",
    content:
      "Humanity’s fascination with the night sky is as old as civilization itself. From ancient astronomers charting constellations to modern scientists sending probes beyond the solar system, our quest to explore space reflects our endless curiosity. With every mission — from Sputnik to Chandrayaan to Artemis — we push the boundaries of what’s possible. Space is not just our final frontier; it’s a mirror reflecting our desire to know who we are and where we come from.",
  },
];

const BlogPage = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-black min-h-screen font-mono text-gray-200 relative overflow-hidden">
      <Navbar />
      <div className="absolute inset-0 bg-gradient-to-b from-green-400/10 via-transparent to-black blur-3xl pointer-events-none" />

      {/* Hero Section */}
      <section className="relative py-24 px-6 md:px-16 text-center">
        <motion.h1
          className="text-5xl md:text-7xl font-extrabold text-white mb-4 drop-shadow-lg"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Antariksh <span className="text-green-400">Blog</span>
        </motion.h1>
        <motion.p
          className="max-w-3xl mx-auto text-gray-400 text-lg md:text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Dive into stories, ideas, and discoveries that expand your cosmic imagination.
        </motion.p>
      </section>

      {/* Blog Grid */}
      <section className="relative py-16 px-6 md:px-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogPosts.map((post, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="bg-white/10 backdrop-blur-2xl rounded-3xl overflow-hidden shadow-lg hover:shadow-green-400/30 border border-white/10 transition-transform transform hover:-translate-y-2 cursor-pointer"
              onClick={() => navigate(`/blog/${post.id}`)}
            >
              <div className="relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-52 object-cover"
                />
                <span className="absolute top-3 right-3 bg-green-500/80 text-black text-xs px-3 py-1 rounded-full">
                  {post.tag}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2 hover:text-green-400 transition">
                  {post.title}
                </h3>
                <p className="text-gray-400 text-sm mb-3">
                  By {post.author} — {post.date}
                </p>
                <p className="text-gray-300 text-base">{post.excerpt}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPage;

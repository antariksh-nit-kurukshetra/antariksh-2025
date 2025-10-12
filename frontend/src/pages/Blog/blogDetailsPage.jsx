import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
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
    content: `Humanity’s fascination with the night sky is as old as civilization itself. 
From ancient astronomers who mapped the stars to modern scientists sending spacecrafts into the vast unknown, our story is one of discovery and ambition.

Every rocket launched, every rover landed, and every telescope aimed at the heavens brings us closer to understanding the grand design of the cosmos.

From Yuri Gagarin’s first orbit to India’s Chandrayaan and beyond, the dream of space exploration unites us. 
It reminds us that even in an infinite universe — curiosity is our greatest power.`,
  },
];

const BlogDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = blogPosts.find((p) => p.id === parseInt(id));

  if (!post) {
    return (
      <div className="bg-black text-gray-300 min-h-screen flex items-center justify-center">
        <p>Blog not found.</p>
      </div>
    );
  }

  return (
    <div className="bg-black min-h-screen text-gray-200 font-mono relative overflow-hidden">
      <Navbar />
      <div className="absolute inset-0 bg-gradient-to-b from-green-400/10 via-transparent to-black blur-3xl pointer-events-none" />

      <motion.div
        className="max-w-4xl mx-auto px-6 py-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <button
          onClick={() => navigate(-1)}
          className="mb-6 text-green-400 hover:text-green-300 transition"
        >
          ← Back
        </button>

        <motion.h1
          className="text-4xl md:text-5xl font-bold text-white mb-4"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {post.title}
        </motion.h1>

        <p className="text-gray-400 mb-8">
          By {post.author} • {post.date}
        </p>

        <div className="overflow-hidden rounded-3xl mb-8">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-80 object-cover rounded-3xl"
          />
        </div>

        <motion.div
          className="bg-white/10 backdrop-blur-2xl p-8 rounded-3xl border border-white/10 text-gray-300 leading-relaxed text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {post.content.split("\n").map((para, i) => (
            <p key={i} className="mb-4">
              {para}
            </p>
          ))}
        </motion.div>
      </motion.div>

      <Footer />
    </div>
  );
};

export default BlogDetailsPage;

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/footer";
import Button from "../../components/ui/Button";

const API_URL = "https://api.spaceflightnewsapi.net/v4/articles/";
const PAGE_SIZE = 30; // articles per page

const SpaceExplorationsPage = () => {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [totalCount, setTotalCount] = useState(0);

  const fetchArticles = async (pageNumber) => {
    try {
      setLoading(true);
      const offset = (pageNumber - 1) * PAGE_SIZE;
      const res = await fetch(
        `${API_URL}?is_featured=true&limit=${PAGE_SIZE}&offset=${offset}`
      );
      const data = await res.json();

      if (data.results) {
        setArticles(data.results);
        setTotalCount(data.count || 0);
      } else {
        setArticles([]);
        setError("No articles found.");
      }
    } catch (err) {
      console.error(err);
      setError("Failed to fetch articles.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchArticles(page);
  }, [page]);

  const totalPages = Math.ceil(totalCount / PAGE_SIZE);

  return (
    <>
      <Navbar />

      {/* Header */}
      <section className="py-20 px-6 md:px-16 text-center bg-gradient-to-b from-[#000011] via-[#000020] to-[#000011]">
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-4"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Space Explorations
        </motion.h1>
        <motion.p
          className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Discover the latest news, missions, and events from humanity’s journey
          into space. Stay updated with featured spaceflight articles curated
          from top sources.
        </motion.p>
      </section>

      {/* Articles Grid */}
      <section className="py-20 px-6 md:px-16 bg-[#000011]/90 backdrop-blur-sm min-h-[80vh]">
        {loading ? (
          <p className="text-white text-center text-lg animate-pulse">
            Loading articles...
          </p>
        ) : error ? (
          <p className="text-red-400 text-center text-lg">{error}</p>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {articles.map((article) => (
                <motion.div
                  key={article.id}
                  className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl overflow-hidden shadow-[0_0_15px_rgba(59,130,246,0.3)] hover:shadow-[0_0_25px_rgba(59,130,246,0.6)] transition-all duration-300 flex flex-col"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <img
                    src={article.image_url || "/placeholder.png"}
                    alt={article.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="font-semibold text-lg text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-300 mb-2">
                      {article.title}
                    </h3>
                    <p className="text-white/80 text-sm flex-1">
                      {article.summary.length > 150
                        ? article.summary.slice(0, 150) + "..."
                        : article.summary}
                    </p>
                    <p className="text-white/60 text-xs mt-2">
                      Source: {article.news_site} |{" "}
                      {new Date(article.published_at).toLocaleDateString()}
                    </p>
                    <div className="mt-4">
                      <Button
                        variant="primary"
                        size="sm"
                        onClick={() => window.open(article.url, "_blank")}
                        className="w-full"
                      >
                        Read More
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Pagination Controls */}
            <div className="flex justify-center items-center gap-4 mt-12">
              <Button
                variant="primary"
                size="lg"
                onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                disabled={page === 1}
              >
                Previous
              </Button>
              <span className="text-white/70 text-lg">
                Page {page} of {totalPages}
              </span>
              <Button
                variant="primary"
                size="lg"
                onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
                disabled={page === totalPages}
              >
                Next
              </Button>
            </div>
          </>
        )}
      </section>

      <Footer />
    </>
  );
};

export default SpaceExplorationsPage;

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const NAV_HEIGHT = 96;

//add more link here
const navItems = [
  { name: "Home", path: "/" },
  { name: "Events", path: "/events" },
  { name: "Gallery", path: "/gallery" },
  { name: "Contact", path: "/contact" },
  { name: "About Us", path: "/about" },
];

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const panelVariants = {
  hidden: { y: -20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { staggerChildren: 0.05 } },
};

const linkVariants = {
  hidden: { y: -10, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const toggleRef = useRef(null);
  const panelRef = useRef(null);
  const previousActiveRef = useRef(null);

  // Scroll detection
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close on route change
  useEffect(() => setOpen(false), [location.pathname]);

  // Close menu if resized to desktop
  useEffect(() => {
    const mql = window.matchMedia("(min-width: 768px)");
    const handler = (e) => e.matches && setOpen(false);
    mql.addEventListener?.("change", handler);
    return () => mql.removeEventListener?.("change", handler);
  }, []);

  // Prevent body scroll when open
  useEffect(() => {
    const original = document.documentElement.style.getPropertyValue("overflow");
    document.documentElement.style.overflow = open ? "hidden" : original || "";
    return () => (document.documentElement.style.overflow = original || "");
  }, [open]);

  // Focus trap + escape
  useEffect(() => {
    if (!open) return;
    previousActiveRef.current = document.activeElement;

    const focusableSelector = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';
    const container = panelRef.current;
    const focusable = container ? Array.from(container.querySelectorAll(focusableSelector)) : [];
    if (focusable.length) focusable[0].focus();

    const handleKey = (e) => {
      if (e.key === "Escape") setOpen(false);
      if (e.key === "Tab") {
        const focusableNow = container ? Array.from(container.querySelectorAll(focusableSelector)) : [];
        if (focusableNow.length === 0) return;
        const first = focusableNow[0];
        const last = focusableNow[focusableNow.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [open]);

  // Click outside closes
  useEffect(() => {
    if (!open) return;
    const handler = (e) => {
      const panel = panelRef.current;
      const toggle = toggleRef.current;
      if (!panel) return;
      if (panel.contains(e.target)) return;
      if (toggle && toggle.contains(e.target)) return;
      setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [open]);

  return (
    <header className="relative ">
      {/* Navbar container */}
      <motion.nav
        initial={{ y: -12, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-gray-900/85 backdrop-blur-md border-b border-white/10 shadow-sm"
            : "bg-transparent"
        }`}
        style={{ WebkitBackdropFilter: scrolled ? "blur(6px)" : undefined }}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          {/* ✅ Flex layout with logo + links in separate divs */}
          <div className="flex justify-between md:justify-around items-center h-24 md:h-28">
            {/* Logo */}
        <div className="flex-shrink-0">
          <Link to="/" className="flex justify-center items-center gap-10">
            <motion.img
              src="/logo512.png"
              alt="Antariksh Logo"
              animate={{
                scale: [1, 1.04, 1],
                y: [0, -4, 0],
                filter: [
                  "drop-shadow(0px 0px 12px rgba(59,130,246,0.5))",
                  "drop-shadow(0px 0px 24px rgba(59,130,246,0.9))",
                  "drop-shadow(0px 0px 12px rgba(59,130,246,0.5))",
                ],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              whileHover={{
                scale: 1.15,
                rotate: 3,
                filter:
                  "drop-shadow(0px 0px 30px rgba(96,165,250,1)) brightness(1.15)",
              }}
              className="h-40 md:h-50 lg:h-60 w-auto rounded-3xl transition-all duration-500"
            />
          </Link>
        </div>
            {/* Desktop Nav */}
            <div className="hidden md:flex items-center justify-around gap-12">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.07 * i, duration: 0.35 }}
                >
                  <Link
                    to={item.path}
                    className={`text-lg font-semibold transition-colors duration-150 ${
                      location.pathname === item.path
                        ? "text-white"
                        : "text-gray-300 hover:text-white"
                    }`}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden">
              <button
                ref={toggleRef}
                aria-controls="mobile-menu"
                aria-expanded={open}
                aria-label={open ? "Close menu" : "Open menu"}
                onClick={() => setOpen((v) => !v)}
                className="inline-flex items-center justify-center p-2 rounded-lg text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/30"
              >
                <svg
                  className="w-8 h-8"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  {open ? (
                    <path d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden flex items-start justify-center px-4 pt-28"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={overlayVariants}
          >
            <motion.div
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
              onClick={() => setOpen(false)}
              variants={overlayVariants}
            />
            <motion.div
              ref={panelRef}
              id="mobile-menu"
              role="dialog"
              aria-modal="true"
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-md mx-auto bg-gray-900/95 rounded-2xl shadow-2xl ring-1 ring-white/6 overflow-hidden"
              variants={panelVariants}
            >
              <div className="px-6 py-6 flex flex-col space-y-4">
                {navItems.map((it) => (
                  <motion.div key={it.name} variants={linkVariants}>
                    <Link
                      to={it.path}
                      onClick={() => setOpen(false)}
                      className="block text-lg font-semibold text-gray-200 hover:text-white px-3 py-3 rounded-lg transition-colors"
                    >
                      {it.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div style={{ height: NAV_HEIGHT }} aria-hidden />
    </header>
  );
}

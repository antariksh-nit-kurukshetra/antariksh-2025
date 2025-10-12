import React, { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars, useTexture, Html } from "@react-three/drei";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/footer";
import SlidingBackground from "../components/layout/RotatingBackground";
import { motion, AnimatePresence } from "framer-motion";

// --- Event Data ---
const events = [
  {
    id: 1,
    title: "Astrohunt",
    date: "10th October 2025",
    description: "Team-based treasure hunt where teams solve astronomy-related clues to reach the final destination.",
    image: "https://res.cloudinary.com/doejabjai/image/upload/v1759938895/ChatGPT_Image_Oct_8_2025_09_24_20_PM_pkmux6.png",
    details: "Team-based event (2-3 members). In this event there will be a prelims for treasure hunt, where teams have to solve clues related to astronomy to find the next location and finally reach the final location as fast as they can. After clearing the prelims, they will enter the final round which will be a webhunt, where the team has to solve clues on their computer through the internet, enter their answers, and solve all the questions as fast as they can.",
  },
  {
    id: 2,
    title: "Astroarena",
    date: "11th October 2025",
    description: "A Squid Game-inspired team event with space-themed elimination challenges.",
    image: "https://res.cloudinary.com/doejabjai/image/upload/v1759938217/ChatGPT_Image_Oct_8_2025_08_34_09_PM_uzbdsw.png",
    details: "Team-based event (2-3 members) inspired by Squid Games, where each round will be an elimination round. After passing through multiple rounds, one team finally wins the game. Each round is designed with a fun astro twist, making the competition engaging and challenging.",
  },
  {
    id: 3,
    title: "Prakshepan",
    date: "12th October 2025",
    description: "Design and launch your own water bottle rocket with creativity and precision.",
    image: "https://res.cloudinary.com/doejabjai/image/upload/v1759938564/ChatGPT_Image_Oct_8_2025_09_18_54_PM_m8fkfa.png",
    details: "Team-based Water Bottle Rocket event (2-3 members). In the prelims, teams have to bring their designs and materials for their rockets and present their ideas. The best concepts will advance to the final round, where teams will actually build and launch their rockets. They will be judged on flight time, distance covered, and their ability to keep a payload (an egg) safe.",
  },
  {
    id: 4,
    title: "Zathura",
    date: "12th October 2025",
    description: "Two-round event blends astrohunt with a space-themed board game for an unforgettable experience!",
    image: "https://res.cloudinary.com/doejabjai/image/upload/v1759938564/ChatGPT_Image_Oct_8_2025_09_18_54_PM_m8fkfa.png",
    details: "",
  },
  {
    id: 5,
    title: "Zathura",
    date: "12th October 2025",
    description: "Two-round event blends astrohunt with a space-themed board game for an unforgettable experience!",
    image: "https://res.cloudinary.com/doejabjai/image/upload/v1759938564/ChatGPT_Image_Oct_8_2025_09_18_54_PM_m8fkfa.png",
    details: "",
  },
];

// --- Rotating Earth Component ---
function Earth() {
  const earthRef = useRef();
  const [texture] = useTexture(["/earth_texture.jpg"]);

  useFrame(() => {
    earthRef.current.rotation.y += 0.002;
  });

  return (
    <mesh ref={earthRef} position={[0, 0, 0]}>
      <sphereGeometry args={[4.0, 64, 64]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
}

// --- Floating Card Component ---
function FloatingCard({ event, index, totalEvents, position, onClick }) {
  const ref = useRef();
  const [hover, setHover] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Floating animation only for non-mobile
  useFrame(({ clock }) => {
    if (!isMobile) {
      const t = clock.getElapsedTime();
      ref.current.position.y = position[1] + Math.sin(t * 0.8) * 0.3;
    }
  });

  // Mobile stacked positions
  const finalPosition = isMobile
    ? [
        0, // center X
        3 - index * 2, // vertical stacking
        -2, // slightly in front
      ]
    : position;

  return (
    <group ref={ref} position={finalPosition} onClick={() => onClick(event)}>
      <mesh
        onPointerOver={() => !isMobile && setHover(true)}
        onPointerOut={() => !isMobile && setHover(false)}
      >
        <meshStandardMaterial
          color={hover ? "#2563eb" : "#0f172a"}
          transparent
          opacity={0.85}
          emissive={hover ? "#3b82f6" : "#000"}
          emissiveIntensity={hover ? 0.6 : 0.2}
        />
      </mesh>
      <Html zIndexRange={[0, 10]}>
        <div onClick={() => onClick(event)}>
          <HtmlCard event={event} />
        </div>
      </Html>
    </group>
  );
}

// --- HTML Overlay for Event Info ---
function HtmlCard({ event }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9, y: 10 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="absolute bg-gray-800/90 text-white text-center p-3 rounded-xl border border-blue-400 shadow-md w-48 cursor-pointer select-none backdrop-blur-sm"
      style={{ transform: "translate(-50%, -50%)", pointerEvents: "auto", zIndex: 20 }}
    >
      {event.image && (
        <motion.img
          src={event.image}
          alt={event.title}
          className="w-full h-24 object-cover rounded-lg mb-2 border border-blue-500/30"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        />
      )}
      <p className="text-sm font-bold text-blue-300">{event.title}</p>
      <p className="text-xs text-gray-300">{event.date}</p>
      <p className="text-xs text-gray-400 mt-1">{event.description}</p>
    </motion.div>
  );
}

// --- Event Details Modal ---
function EventDetailsModal({ event, onClose }) {
  return (
    <AnimatePresence>
      {event && (
        <motion.div
          key="modal"
          className="fixed inset-0 z-40 flex items-center justify-center bg-black/70 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <motion.div
            className="bg-gray-900 text-white p-6 rounded-2xl w-[90%] sm:w-[500px] border border-blue-500 shadow-lg"
            initial={{ scale: 0.8, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 30 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <h2 className="text-xl font-bold text-blue-400 mb-2">{event.title}</h2>
            <p className="text-sm text-gray-300 mb-1">{event.date}</p>
            <p className="text-sm text-gray-400 mb-4">{event.details}</p>
            <button
              onClick={onClose}
              className="mt-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-medium"
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// --- Main Page ---
export default function EventPage() {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const positions = [
    [6, 8, -4],
    [-6, 4, 4],
    [5, 3, 5],
    [-5, 2, -5],
    [0, 3, 6],
  ];

  return (
    <>
      <Navbar />
      <div className="fixed inset-0 -z-10 overflow-hidden bg-black">
        <SlidingBackground />
      </div>

      {/* --- Desktop 3D Layout --- */}
      {!isMobile && (
        <section className="w-full h-screen">
          <Canvas camera={{ position: [0, 3, 12], fov: 60 }}>
            <ambientLight intensity={4.0} />
            <pointLight position={[10, 10, 10]} intensity={2} />
            <Stars
              radius={100}
              depth={80}
              count={5000}
              factor={4}
              saturation={0}
              fade
              speed={1}
            />
            <Earth />
            {events.map((event, i) => (
              <FloatingCard
                key={event.id}
                event={event}
                index={i}
                totalEvents={events.length}
                position={positions[i]}
                onClick={setSelectedEvent}
              />
            ))}
            <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.3} />
          </Canvas>
        </section>
      )}

      {/* --- Mobile Layout (Stacked Cards) --- */}
      {isMobile && (
        <section className="flex flex-col items-center w-full min-h-screen px-4 py-6 space-y-6 bg-black/80 backdrop-blur-sm">
          {events.map((event) => (
            <motion.div
              key={event.id}
              onClick={() => setSelectedEvent(event)}
              className="bg-gray-800/90 text-white text-center p-4 rounded-2xl border border-blue-400 shadow-lg w-full max-w-sm cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-32 object-cover rounded-lg mb-3 border border-blue-500/30"
              />
              <h3 className="text-lg font-bold text-blue-300">{event.title}</h3>
              <p className="text-xs text-gray-300">{event.date}</p>
              <p className="text-sm text-gray-400 mt-1">{event.description}</p>
              <button className="mt-3 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white text-sm">
                Know More
              </button>
            </motion.div>
          ))}
        </section>
      )}

      <EventDetailsModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />
      <Footer />
    </>
  );
}
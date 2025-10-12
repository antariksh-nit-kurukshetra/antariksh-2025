import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Button from '../ui/Button';

const homepageEvents = [
  {
    title: "Astrohunt",
    description: "Team-based treasure hunt where teams solve astronomy-related clues to reach the final destination.",
    image: "https://res.cloudinary.com/doejabjai/image/upload/v1759938895/ChatGPT_Image_Oct_8_2025_09_24_20_PM_pkmux6.png",
    details: "Team-based event (2-3 members). In this event there will be a prelims for treasure hunt, where teams have to solve clues related to astronomy to find the next location and finally reach the final location as fast as they can. After clearing the prelims, they will enter the final round which will be a webhunt, where the team has to solve clues on their computer through the internet, enter their answers, and solve all the questions as fast as they can.",
  },
  {
    title: "Astroarena",
    description: "A Squid Game-inspired team event with space-themed elimination challenges.",
    image: "https://res.cloudinary.com/doejabjai/image/upload/v1759938217/ChatGPT_Image_Oct_8_2025_08_34_09_PM_uzbdsw.png",
    details: "Team-based event (2-3 members) inspired by Squid Games, where each round will be an elimination round. After passing through multiple rounds, one team finally wins the game. Each round is designed with a fun astro twist, making the competition engaging and challenging.",
  },
  {
    title: "Prakshepan",
    description: "Design and launch your own water bottle rocket with creativity and precision.",
    image: "https://res.cloudinary.com/doejabjai/image/upload/v1759938564/ChatGPT_Image_Oct_8_2025_09_18_54_PM_m8fkfa.png",
    details: "Team-based Water Bottle Rocket event (2-3 members). In the prelims, teams have to bring their designs and materials for their rockets and present their ideas. The best concepts will advance to the final round, where teams will actually build and launch their rockets. They will be judged on flight time, distance covered, and their ability to keep a payload (an egg) safe.",
  },
];

const galleryImages = [
  "https://res.cloudinary.com/doejabjai/image/upload/v1759935972/WhatsApp_Image_2025-10-08_at_8.33.05_PM_ndfoov.jpg",
  "https://res.cloudinary.com/doejabjai/image/upload/v1759583989/WhatsApp_Image_2025-09-21_at_3.44.01_PM_rpprlw.jpg",
  "https://res.cloudinary.com/doejabjai/image/upload/v1759583989/WhatsApp_Image_2025-09-21_at_3.44.01_PM_rpprlw.jpg",
  "https://res.cloudinary.com/doejabjai/image/upload/v1759938219/WhatsApp_Image_2025-10-08_at_8.33.07_PM_mzzarb.jpg",

];

const Teams = [
  {
    name: "Kalpaa - Facts & Research",
    description:
      "The knowledge hub of Antariksh — curating cosmic facts, astrophysics insights, and deep-space research pieces.",
    image:
      "https://res.cloudinary.com/doejabjai/image/upload/v1760206069/Gemini_Generated_Image_cf8c0kcf8c0kcf8c_mvbs3z.png",
    link: "/teams/kalpa",
  },
  {
    name: "Observatory - Stargazing & Exploration",
    description:
      "From telescopes to night sky sessions — the team that connects Antariksh members directly with the universe.",
    image:
      "https://res.cloudinary.com/doejabjai/image/upload/v1760206305/Gemini_Generated_Image_qrklj6qrklj6qrkl_ikqoi0.png",
    link: "/teams/observatory",
  },
  {
    name: "Newsletter - Cosmic Digest",
    description:
      "The storytellers of Antariksh — bringing monthly updates, cosmic news, and exclusive club features.",
    image:
      "https://res.cloudinary.com/doejabjai/image/upload/v1760206448/Gemini_Generated_Image_v9hfksv9hfksv9hf_zo95nr.png",
    link: "/teams/newsletter",
  },
  {
    name: "Web & Tech - Digital Frontier",
    description:
      "Developers and tech wizards behind Antariksh’s digital presence — from websites to automation and AI.",
    image:
      "https://res.cloudinary.com/doejabjai/image/upload/v1760206070/Gemini_Generated_Image_rfm126rfm126rfm1_1_hujpy3.png",
    link: "/teams/web",
  },
  {
    name: "Design & Media - Visual Universe",
    description:
      "The creative artists and designers crafting Antariksh’s visual identity, posters, and event media.",
    image:
      "https://res.cloudinary.com/doejabjai/image/upload/v1760206072/Gemini_Generated_Image_clkgoclkgoclkgoc_plusik.png",
    link: "/teams/design",
  },
  {
    name: "Khagol - Quiz & Engagement",
    description:
      "The mind challengers — organizing quizzes, games, and interactive events to keep curiosity alive.",
    image:
      "https://res.cloudinary.com/doejabjai/image/upload/v1760206069/Gemini_Generated_Image_jfamkajfamkajfam_ymoxoo.png",
    link: "/teams/khagol",
  },
];



const HomeSections = () => {
  const navigate = useNavigate();
  const [selectedEvent, setSelectedEvent] = useState(null);

  return (
    <div className="relative w-full overflow-hidden">


      {/* --- Society and   Culture Section --- */}
      <section className="relative py-20 md:py-40 px-6 md:px-20 flex flex-col items-center text-center overflow-hidden ">
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-blue-900/40 via-black/70 to-black/90"
          animate={{ opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Rings which is around there  */}
        <motion.div
          className="absolute w-[500px] h-[500px] border border-blue-400/30 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute w-[800px] h-[800px] border border-blue-400/10 rounded-full"
          animate={{ rotate: -360 }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
        />

        {/* Floating Rocket */}
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 64 64"
          className="w-24 h-24 mb-10 text-blue-400 z-10 drop-shadow-[0_0_15px_rgba(59,130,246,0.6)]"
          fill="currentColor"
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 3, ease: "easeInOut", repeat: Infinity }}
        >
          <path d="M32 2c-3 3-6 10-6 18s3 15 6 18c3-3 6-10 6-18S35 5 32 2zm0 24a6 6 0 110-12 6 6 0 010 12z" />
          <path d="M27 43c-1 4-2 8-2 10 0 4 2 6 7 6s7-2 7-6c0-2-1-6-2-10h-10z" />
          <path d="M25 35l-5 4c-5-2-9-2-11 1 3 1 6 3 8 5 2 3 3 6 3 8 3-2 4-6 5-11l4-5zm14 0l5 4c5-2 9-2 11 1-3 1-6 3-8 5-2 3-3 6-3 8-3-2-4-6-5-11l-4-5z" />
        </motion.svg>

        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-white mb-6 z-10 tracking-wide"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          Culture at <span className="text-blue-400">Antariksh</span>
        </motion.h2>

        <motion.p
          className="max-w-3xl text-lg md:text-xl text-white/80 leading-relaxed z-10 font-light"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          The vibrant community of <span className="text-blue-400 font-semibold">NIT Kurukshetra</span> stands at
          the intersection of technology and tradition. Here, ideas ignite and cultures converge — from
          innovation clubs to space societies, every student fuels the spirit of <em>Antariksh</em> through
          creativity, collaboration, and cosmic curiosity.
        </motion.p>
        <motion.div
          className="mt-12 w-1/2 h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent rounded-full"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        />
        <motion.div
          className="absolute bottom-10 left-1/2 w-3 h-3 bg-blue-400 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.8)]"
          animate={{ y: [0, -20, 0], x: [0, 5, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-10 right-1/2 w-2 h-2 bg-blue-300 rounded-full shadow-[0_0_6px_rgba(147,197,253,0.6)]"
          animate={{ y: [0, -15, 0], x: [0, -5, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
      </section>

      


{/* --- About Section --- */}
<motion.section
  className="relative py-12 md:py-20 px-6 md:px-20 flex flex-col md:flex-row items-center gap-10"
  initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  viewport={{ once: true }}
>
  <motion.div
    className="md:w-1/2 flex justify-center"
    initial={{ opacity: 0, x: -60 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 1 }}
  >
    <img
      src="https://blog.olivierlarose.com/_next/image?url=%2Fmedias%2Ftutorials%2F3d-earth%2Fcolor.jpg&w=3840&q=75"
      alt="Antariksh Intro"
      className="w-full max-w-sm md:max-w-lg rounded-3xl shadow-[0_0_25px_rgba(59,130,246,0.3)]"
    />
  </motion.div>

  <motion.div
    className="md:w-1/2 bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-10 shadow-xl flex flex-col gap-4"
    initial={{ opacity: 0, x: 60 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 1 }}
  >
    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
      About <span className="text-blue-400">Antariksh</span>
    </h2>
    <p className="text-white/80 text-lg md:text-xl leading-relaxed">
      Antariksh is the ultimate cosmic experience – combining events, workshops, and live performances 
      that bring the universe closer to you. Explore, learn, and celebrate the wonders of space with us.
    </p>
    <Button variant="primary" size="md" onClick={() => navigate('/about')}>
      Know More
    </Button>
  </motion.div>
</motion.section>


      {/* --- Events Section-- don't change you can make changes in resources --- */}
      <motion.section
        className="px-6 md:px-5 bg-black/40 backdrop-blur-sm py-5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-5xl font-extrabold text-white text-center mb-12 drop-shadow-lg">
          Featured <span className="text-blue-400">Events</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {homepageEvents.map((event, i) => (
            <motion.div
              key={event.title}
              className="bg-white/10 backdrop-blur-md rounded-3xl p-6 flex flex-col justify-between shadow-xl hover:scale-105 hover:shadow-2xl transition-transform duration-300 cursor-pointer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              viewport={{ once: true }}
              onClick={() => setSelectedEvent(event)}
            >
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-48 md:h-56 object-cover rounded-2xl mb-4"
              />
              <h3 className="text-2xl font-bold text-white mb-2">{event.title}</h3>
              <p className="text-white/80 mb-4">{event.description}</p>
              <Button variant="primary" size="md">
                Know More
              </Button>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Button
            variant="secondary"
            size="lg"
            onClick={() => navigate('/events')}
          >
            See More Events →
          </Button>
        </div>
      </motion.section>

      {/* --- Gallery Section -don't change you can make changes in resources --- */}
<motion.section
className="py-5 my-5 md:py-20 px-6 md:px-20 relative"
initial={{ opacity: 0, y: 80 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 1 }}
viewport={{ once: true }}
>
<div className="absolute inset-0 m-4 bg-blue-400/5 rounded-2xl z-0 pointer-events-none shadow-lg"></div>

<h2 className="text-3xl md:text-5xl font-extrabold text-white text-center mb-12 drop-shadow-lg relative z-10">
  Memories <span className="text-blue-400">Gallery</span>
</h2>

<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 relative z-10">
  {galleryImages.map((src, i) => (
    <motion.div
      key={i}
      className="relative rounded-2xl overflow-hidden cursor-pointer shadow-lg"
      whileHover={{ scale: 1.05 }}
    >
      <div className="absolute inset-0 bg-blue-400/20 rounded-2xl blur-xl z-0"></div>
      <img src={src} alt={`Gallery ${i + 1}`} className="relative z-10 w-full h-40 object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20 z-10"></div>
    </motion.div>
  ))}
</div>

<div className="mt-6 flex justify-center items-center relative z-10">
  <Button variant="primary" size="md" onClick={() => navigate('/gallery')}>
    View More
  </Button>
</div>
</motion.section>


      {/* --- Event Modal---- add the element above --- */}
      <AnimatePresence>
        {selectedEvent && (
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex justify-center items-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedEvent(null)}
          >
            <motion.div
              className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 max-w-2xl w-full relative shadow-2xl"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-3xl font-bold text-white mb-4">{selectedEvent.title}</h3>
              <p className="text-white/80 mb-6">{selectedEvent.details}</p>
              <Button variant="primary" size="md" onClick={() => setSelectedEvent(null)}>
                Close
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>



      {/* --- Teams Section --- */}
<motion.section
  className="relative  pb-40 px-6 md:px-20 overflow-hidden pt-10"
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  viewport={{ once: true }}
>
  {/* Animated cosmic gradient background */}
  <motion.div
    className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-black to-black/90 rounded-3xl"
    animate={{ opacity: [0.8, 1, 0.8] }}
    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
  />

  <motion.h2
    className="text-4xl md:text-5xl font-extrabold text-white text-center mb-16 drop-shadow-lg relative z-10"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
  >
    Meet Our <span className="text-blue-400">Teams</span>
  </motion.h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 relative z-10">
    {Teams.map((team, i) => (
      <motion.div
        key={team.name}
        className="group relative bg-white/10 backdrop-blur-md rounded-3xl overflow-hidden shadow-xl cursor-pointer hover:shadow-2xl transition-all duration-500"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: i * 0.15 }}
        viewport={{ once: true }}
        onClick={() => navigate(team.link)}
      >
        <div className="relative overflow-hidden">
          <motion.img
            src={team.image}
            alt={team.name}
            className="w-full h-56 object-cover transform group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
          <motion.div
            className="absolute bottom-0 p-6"
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-white mb-2">{team.name}</h3>
            <p className="text-white/70 text-sm">{team.description}</p>
          </motion.div>
        </div>
      </motion.div>
    ))}
  </div>

  <motion.div
    className="absolute -top-20 -right-20 w-[300px] h-[300px] bg-blue-500/30 blur-[150px] rounded-full"
    animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.6, 0.4] }}
    transition={{ duration: 6, repeat: Infinity }}
  />
  <motion.div
    className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-500/20 blur-[180px] rounded-full"
    animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
    transition={{ duration: 8, repeat: Infinity }}
  />
</motion.section>


    </div>
  );
};

export default HomeSections;

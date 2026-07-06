/**
 * HeroSection — Gradient Cosmos design (refined)
 * Logo proeminente com glow, headline assertiva, orbital decorations
 * Animações de entrada staggered e efeitos interativos nos botões
 */
import { motion } from "framer-motion";

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const fadeUpItem = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.23, 1, 0.32, 1] as [number, number, number, number],
    },
  },
};

export default function HeroSection() {
  const handleCTA = () => {
    const el = document.querySelector("#contato");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <motion.img
          src="/manus-storage/hero-bg_c7515ff2.png"
          alt=""
          className="w-full h-full object-cover opacity-50"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: [0.23, 1, 0.32, 1] as [number, number, number, number] }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a1a]/30 via-[#0a0a1a]/70 to-[#0a0a1a]" />
      </div>

      {/* Orbital decorative rings — animated */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px] rounded-full border border-white/[0.03]"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.6, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.5 }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[550px] md:h-[550px] rounded-full border border-[#7b2ff7]/[0.06]"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.7 }}
      />

      {/* Glow Orbs — asymmetric placement with pulse */}
      <motion.div
        className="absolute top-1/3 left-[15%] w-48 h-48 bg-[#7b2ff7]/15 rounded-full blur-[80px]"
        animate={{ opacity: [0.6, 1, 0.6], scale: [1, 1.05, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-[10%] w-64 h-64 bg-[#00b4d8]/10 rounded-full blur-[100px]"
        animate={{ opacity: [0.5, 0.9, 0.5], scale: [1, 1.08, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      {/* Content */}
      <div className="relative z-10 container px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center"
        >
          {/* Logo with glow */}
          <motion.div
            className="relative inline-block mb-10"
            variants={fadeUpItem}
          >
            <motion.div
              className="absolute inset-0 w-24 h-24 md:w-32 md:h-32 mx-auto bg-[#7b2ff7]/25 rounded-full blur-[40px]"
              animate={{ opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
            <img
              src="/manus-storage/logo-debug_6f1e67d3.png"
              alt="Debug Software"
              className="relative w-24 h-24 md:w-32 md:h-32 mx-auto drop-shadow-[0_0_20px_rgba(123,47,247,0.3)]"
            />
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="text-4xl md:text-6xl lg:text-[4.5rem] font-bold font-display leading-[1.1] mb-7 tracking-tight"
            variants={fadeUpItem}
          >
            <span className="text-white">Automações que </span>
            <span className="gradient-text">trabalham</span>
            <br className="hidden sm:block" />
            <span className="text-white"> enquanto você </span>
            <span className="gradient-text">escala</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto mb-12 leading-relaxed font-light"
            variants={fadeUpItem}
          >
            Inteligência artificial e engenharia de software para empresas
            que precisam crescer sem multiplicar equipe.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            variants={fadeUpItem}
          >
            <motion.button
              onClick={handleCTA}
              className="px-8 py-4 text-base font-semibold text-white rounded-xl debug-gradient hover:opacity-90 transition-all duration-200 shadow-[0_4px_40px_rgba(123,47,247,0.25)]"
              whileHover={{ scale: 1.03, boxShadow: "0 8px 50px rgba(123,47,247,0.35)" }}
              whileTap={{ scale: 0.97 }}
            >
              Agende uma conversa técnica
            </motion.button>
            <motion.button
              onClick={() => {
                const el = document.querySelector("#solucoes");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-8 py-4 text-base font-medium text-white/70 rounded-xl border border-white/[0.08] hover:border-white/[0.15] hover:text-white hover:bg-white/[0.03] transition-all duration-200"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Conheça nossas soluções
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ opacity: { delay: 1.5, duration: 0.5 }, y: { duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 } }}
      >
        <div className="w-5 h-9 rounded-full border border-white/15 flex items-start justify-center p-1.5">
          <div className="w-1 h-2.5 rounded-full bg-white/30" />
        </div>
      </motion.div>
    </section>
  );
}

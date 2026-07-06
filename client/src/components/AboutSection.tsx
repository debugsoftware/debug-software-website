/**
 * AboutSection — Gradient Cosmos design (refined)
 * Layout assimétrico com imagem off-center, glassmorphism nos valores
 * Headlines mais técnicas e confiantes
 */
import { motion } from "framer-motion";
import { Shield, Zap, Users } from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "Infraestrutura Resiliente",
    description: "Monitoramento 24/7, SLAs definidos e arquitetura para alta disponibilidade.",
  },
  {
    icon: Zap,
    title: "Entrega Iterativa",
    description: "Ciclos curtos com feedback contínuo — você vê resultado antes do prazo.",
  },
  {
    icon: Users,
    title: "Extensão do Seu Time",
    description: "Operamos como parceiros técnicos, não como fornecedores distantes.",
  },
];

export default function AboutSection() {
  return (
    <section id="sobre" className="relative py-24 md:py-36 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[#00b4d8]/4 rounded-full blur-[180px]" />
      <div className="absolute bottom-0 left-1/4 w-px h-40 bg-gradient-to-b from-[#7b2ff7]/20 to-transparent" />

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Image — takes 5 cols, slightly off-center */}
          <motion.div
            className="lg:col-span-5 lg:col-start-1 relative"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative rounded-2xl overflow-hidden">
              {/* Gradient border effect */}
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-[#7b2ff7]/30 via-transparent to-[#00b4d8]/20" />
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src="/manus-storage/about-company_88e9dbd7.png"
                  alt="Debug Software - Inovação e Engenharia"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#0a0a1a]/40 to-transparent" />
              </div>
            </div>

            {/* Floating stat badge */}
            <motion.div
              className="absolute -bottom-5 -right-3 md:bottom-8 md:-right-6 bg-[#0a0a1a]/90 backdrop-blur-xl border border-white/[0.08] rounded-xl px-5 py-3.5 shadow-[0_0_40px_rgba(0,180,216,0.1)]"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <p className="text-3xl font-bold font-display gradient-text">+20</p>
              <p className="text-xs text-white/50 mt-0.5">anos de engenharia</p>
            </motion.div>
          </motion.div>

          {/* Content — takes 6 cols, offset right */}
          <motion.div
            className="lg:col-span-6 lg:col-start-7"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block px-4 py-1.5 text-xs font-medium tracking-wider uppercase text-[#00b4d8]/80 border border-[#00b4d8]/15 rounded-full mb-5">
              Sobre Nós
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold font-display text-white mb-6 leading-tight">
              Duas décadas construindo
              <br />
              <span className="gradient-text">sistemas que escalam</span>
            </h2>
            <p className="text-white/50 text-base leading-relaxed mb-4">
              A Debug Software é especializada em inteligência artificial e automação de
              processos. Com mais de 20 anos em engenharia de software, transformamos
              operações complexas em sistemas inteligentes e escaláveis.
            </p>
            <p className="text-white/50 text-base leading-relaxed mb-10">
              Nossa missão: capacitar empresas a operar com máxima eficiência usando IA
              generativa, processamento de dados e integração de sistemas — sempre com
              código limpo, arquitetura sólida e entrega profissional.
            </p>

            {/* Values — glass cards */}
            <div className="space-y-3.5">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:border-white/[0.1] hover:bg-white/[0.04] transition-all duration-300"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                >
                  <div className="w-9 h-9 rounded-lg bg-white/[0.05] border border-white/[0.08] flex items-center justify-center shrink-0">
                    <value.icon size={16} className="text-[#00b4d8]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white mb-0.5">
                      {value.title}
                    </h4>
                    <p className="text-sm text-white/40">{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

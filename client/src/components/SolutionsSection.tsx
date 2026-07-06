/**
 * SolutionsSection — Gradient Cosmos design (refined)
 * Layout assimétrico com cards staggered, glassmorphism pronunciado
 * Animações de entrada ao scroll e efeitos de hover elaborados
 */
import { motion } from "framer-motion";
import { Brain, Workflow, Code2, ArrowRight } from "lucide-react";

const solutions = [
  {
    icon: Brain,
    title: "Inteligência Artificial",
    description:
      "Modelos de IA sob medida para automatizar decisões, análises preditivas e processamento de linguagem natural — integrados diretamente ao fluxo do seu negócio.",
    image: "/manus-storage/ai-solutions_274f3406.png",
    offset: "lg:translate-y-0",
    gradient: "from-[#7b2ff7]/20 to-[#a855f7]/10",
  },
  {
    icon: Workflow,
    title: "Automações Inteligentes",
    description:
      "Fluxos que eliminam tarefas repetitivas, integram sistemas e garantem operação 24/7 sem intervenção manual. Menos erro humano, mais velocidade.",
    image: "/manus-storage/automation_147f6880.png",
    offset: "lg:translate-y-8",
    gradient: "from-[#00b4d8]/20 to-[#7b2ff7]/10",
  },
  {
    icon: Code2,
    title: "Soluções Sob Demanda",
    description:
      "Software com arquitetura escalável, integrações complexas e interfaces que simplificam o que antes exigia equipes inteiras para operar.",
    image: "/manus-storage/custom-solutions_09fa5ce3.png",
    offset: "lg:translate-y-16",
    gradient: "from-[#a855f7]/20 to-[#00b4d8]/10",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      delay: index * 0.15,
      ease: [0.23, 1, 0.32, 1] as [number, number, number, number],
    },
  }),
};

const headerVariants = {
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

export default function SolutionsSection() {
  return (
    <section id="solucoes" className="relative py-24 md:py-36 overflow-hidden">
      {/* Decorative orbital line */}
      <div className="absolute top-20 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#7b2ff7]/20 to-transparent" />

      {/* Background glow — off-center */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-[#7b2ff7]/5 rounded-full blur-[180px]" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#00b4d8]/4 rounded-full blur-[150px]" />

      <div className="container relative z-10">
        {/* Section Header — left-aligned for asymmetry */}
        <motion.div
          className="max-w-2xl mb-16 md:mb-20"
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <span className="inline-block px-4 py-1.5 text-xs font-medium tracking-wider uppercase text-[#00b4d8]/80 border border-[#00b4d8]/15 rounded-full mb-5">
            Nossas Soluções
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-display text-white mb-5 leading-tight">
            Engenharia que <span className="gradient-text">elimina</span> gargalos
          </h2>
          <p className="text-white/45 text-lg leading-relaxed">
            Combinamos inteligência artificial com engenharia de software de alto nível
            para criar sistemas que operam por você.
          </p>
        </motion.div>

        {/* Cards — staggered grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-7">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              className={`group relative rounded-2xl overflow-hidden ${solution.offset}`}
              variants={cardVariants}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              whileHover={{ y: -8, transition: { duration: 0.3, ease: [0.23, 1, 0.32, 1] } }}
            >
              {/* Gradient border glow on hover */}
              <div className={`absolute -inset-1 rounded-2xl bg-gradient-to-br ${solution.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl`} />

              {/* Card surface */}
              <div className="relative bg-white/[0.03] backdrop-blur-xl border border-white/[0.06] group-hover:border-white/[0.15] rounded-2xl overflow-hidden transition-all duration-500 group-hover:bg-white/[0.05] group-hover:shadow-[0_20px_80px_rgba(123,47,247,0.12)]">
                {/* Card Image */}
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={solution.image}
                    alt={solution.title}
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-85 group-hover:scale-110 transition-all duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a1a] via-[#0a0a1a]/60 to-transparent" />

                  {/* Shimmer overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.03] to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out" />

                  {/* Icon floating */}
                  <div className="absolute bottom-4 left-5">
                    <div className="w-11 h-11 rounded-xl bg-white/[0.08] backdrop-blur-md border border-white/[0.1] flex items-center justify-center group-hover:border-[#7b2ff7]/40 group-hover:bg-white/[0.12] group-hover:scale-110 transition-all duration-300">
                      <solution.icon size={20} className="text-[#00b4d8] group-hover:text-[#00d4ff] transition-colors duration-300" />
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 pt-5">
                  <h3 className="text-lg font-bold font-display text-white mb-2.5 tracking-tight group-hover:text-white transition-colors duration-300">
                    {solution.title}
                  </h3>
                  <p className="text-sm text-white/40 leading-relaxed group-hover:text-white/55 transition-colors duration-300">
                    {solution.description}
                  </p>

                  {/* CTA link — appears on hover */}
                  <div className="mt-4 flex items-center gap-1.5 text-sm font-medium text-[#00b4d8]/0 group-hover:text-[#00b4d8] transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                    <span>Saiba mais</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

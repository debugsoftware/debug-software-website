/**
 * SolutionsSection — Gradient Cosmos design (refined)
 * Layout assimétrico com cards staggered, glassmorphism pronunciado
 * Headlines assertivas e uso disciplinado do gradiente
 */
import { motion } from "framer-motion";
import { Brain, Workflow, Code2 } from "lucide-react";

const solutions = [
  {
    icon: Brain,
    title: "Inteligência Artificial",
    description:
      "Modelos de IA sob medida para automatizar decisões, análises preditivas e processamento de linguagem natural — integrados diretamente ao fluxo do seu negócio.",
    image: "/manus-storage/ai-solutions_b584aee5.png",
    offset: "lg:translate-y-0",
  },
  {
    icon: Workflow,
    title: "Automações Inteligentes",
    description:
      "Fluxos que eliminam tarefas repetitivas, integram sistemas e garantem operação 24/7 sem intervenção manual. Menos erro humano, mais velocidade.",
    image: "/manus-storage/automation_63803d5b.png",
    offset: "lg:translate-y-8",
  },
  {
    icon: Code2,
    title: "Soluções Sob Demanda",
    description:
      "Software com arquitetura escalável, integrações complexas e interfaces que simplificam o que antes exigia equipes inteiras para operar.",
    image: "/manus-storage/custom-solutions_012a6597.png",
    offset: "lg:translate-y-16",
  },
];

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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
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
              className={`group relative rounded-2xl overflow-hidden transition-all duration-400 hover:-translate-y-2 ${solution.offset}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
            >
              {/* Gradient border glow on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#7b2ff7]/0 to-[#00b4d8]/0 group-hover:from-[#7b2ff7]/20 group-hover:to-[#00b4d8]/10 transition-all duration-500 blur-xl -z-10" />

              {/* Card surface */}
              <div className="relative bg-white/[0.03] backdrop-blur-xl border border-white/[0.06] group-hover:border-white/[0.12] rounded-2xl overflow-hidden transition-all duration-400 group-hover:shadow-[0_8px_60px_rgba(123,47,247,0.08)]">
                {/* Card Image */}
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={solution.image}
                    alt={solution.title}
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-[1.03] transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a1a] via-[#0a0a1a]/60 to-transparent" />

                  {/* Icon floating */}
                  <div className="absolute bottom-4 left-5">
                    <div className="w-11 h-11 rounded-xl bg-white/[0.08] backdrop-blur-md border border-white/[0.1] flex items-center justify-center group-hover:border-[#7b2ff7]/30 transition-colors duration-300">
                      <solution.icon size={20} className="text-[#00b4d8]" />
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 pt-5">
                  <h3 className="text-lg font-bold font-display text-white mb-2.5 tracking-tight">
                    {solution.title}
                  </h3>
                  <p className="text-sm text-white/40 leading-relaxed">
                    {solution.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

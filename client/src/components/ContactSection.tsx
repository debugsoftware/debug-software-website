/**
 * ContactSection — Gradient Cosmos design (refined)
 * Formulário com glassmorphism pronunciado, layout assimétrico
 * Headline assertiva e uso disciplinado do gradiente
 */
import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { toast } from "sonner";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      toast.success("Mensagem enviada com sucesso! Entraremos em contato em breve.");
      setFormData({ name: "", email: "", message: "" });
      setSending(false);
    }, 1000);
  };

  return (
    <section id="contato" className="relative py-24 md:py-36 overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-1/4 w-px h-24 bg-gradient-to-b from-transparent to-[#7b2ff7]/20" />
      <div className="absolute bottom-1/3 left-0 w-[400px] h-[400px] bg-[#7b2ff7]/4 rounded-full blur-[160px]" />
      <div className="absolute top-1/4 right-0 w-[300px] h-[300px] bg-[#00b4d8]/3 rounded-full blur-[140px]" />

      <div className="container relative z-10">
        {/* Section Header — left-aligned */}
        <motion.div
          className="max-w-xl mb-14 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 text-xs font-medium tracking-wider uppercase text-[#00b4d8]/80 border border-[#00b4d8]/15 rounded-full mb-5">
            Contato
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-display text-white mb-4 leading-tight">
            Seu próximo projeto
            <br />
            <span className="gradient-text">começa aqui</span>
          </h2>
          <p className="text-white/45 text-lg">
            Descreva seu desafio técnico. Respondemos em até 24 horas úteis com uma
            análise preliminar.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Contact Info — 4 cols */}
          <motion.div
            className="lg:col-span-4 space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            {[
              {
                icon: Phone,
                title: "Telefone",
                content: "(91) 98051-4660",
                href: "tel:+5591980514660",
              },
              {
                icon: Mail,
                title: "E-mail",
                content: "contato@debugsoftware.com.br",
                href: "mailto:contato@debugsoftware.com.br",
              },
              {
                icon: MapPin,
                title: "Endereço",
                content: "Av. Paulista, nº 1636, Conj. 4,\nPav. 15, Bela Vista — São Paulo/SP",
                href: undefined,
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                className="group p-5 rounded-xl bg-white/[0.02] backdrop-blur-md border border-white/[0.06] hover:border-white/[0.12] hover:bg-white/[0.04] transition-all duration-300"
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-white/[0.05] border border-white/[0.08] flex items-center justify-center shrink-0 group-hover:border-[#7b2ff7]/20 transition-colors duration-300">
                    <item.icon size={17} className="text-[#00b4d8]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white mb-1">
                      {item.title}
                    </h4>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-sm text-white/50 hover:text-[#00b4d8] transition-colors whitespace-pre-line"
                      >
                        {item.content}
                      </a>
                    ) : (
                      <p className="text-sm text-white/50 whitespace-pre-line">
                        {item.content}
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Form — 8 cols */}
          <motion.form
            onSubmit={handleSubmit}
            className="lg:col-span-8 relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {/* Form container with gradient border */}
            <div className="relative rounded-2xl overflow-hidden">
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-[#7b2ff7]/20 via-transparent to-[#00b4d8]/15" />
              <div className="relative bg-white/[0.02] backdrop-blur-xl rounded-2xl p-6 md:p-8 space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-white/60 mb-2">
                      Nome
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white placeholder:text-white/25 focus:border-[#7b2ff7]/40 focus:ring-1 focus:ring-[#7b2ff7]/20 focus:bg-white/[0.06] outline-none transition-all text-sm"
                      placeholder="Seu nome completo"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white/60 mb-2">
                      E-mail
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white placeholder:text-white/25 focus:border-[#7b2ff7]/40 focus:ring-1 focus:ring-[#7b2ff7]/20 focus:bg-white/[0.06] outline-none transition-all text-sm"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white/60 mb-2">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white placeholder:text-white/25 focus:border-[#7b2ff7]/40 focus:ring-1 focus:ring-[#7b2ff7]/20 focus:bg-white/[0.06] outline-none transition-all text-sm resize-none"
                    placeholder="Descreva seu projeto, desafio técnico ou necessidade de automação..."
                  />
                </div>

                <div className="flex justify-end">
                  <button
                    type="submit"
                    disabled={sending}
                    className="px-7 py-3.5 text-sm font-semibold text-white rounded-xl debug-gradient hover:opacity-90 transition-all duration-200 active:scale-[0.97] disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 shadow-[0_4px_30px_rgba(123,47,247,0.2)]"
                  >
                    {sending ? (
                      "Enviando..."
                    ) : (
                      <>
                        <Send size={15} />
                        Enviar mensagem
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

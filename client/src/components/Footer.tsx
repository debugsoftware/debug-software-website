/**
 * Footer — Gradient Cosmos design (refined)
 * Rodapé institucional com dados completos, layout assimétrico
 * Animação suave de entrada ao scroll
 * Links para Política de Privacidade e Política de Segurança
 */
import { useState } from "react";
import { motion } from "framer-motion";
import PrivacyPolicy from "./PrivacyPolicy";
import SecurityPolicy from "./SecurityPolicy";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showSecurity, setShowSecurity] = useState(false);

  return (
    <>
      <footer className="relative bg-[#050510] overflow-hidden">
        {/* Top gradient line */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-[#7b2ff7]/30 to-transparent" />

        <motion.div
          className="container py-14 md:py-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{
            duration: 0.7,
            ease: [0.23, 1, 0.32, 1] as [number, number, number, number],
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-6">
            {/* Brand — 4 cols */}
            <div className="md:col-span-4">
              <div className="flex items-center gap-3 mb-5">
                <img
                  src="/manus-storage/logo-debug_6f1e67d3.png"
                  alt="Debug Software"
                  className="w-8 h-8"
                />
                <span className="font-display text-lg font-bold text-white tracking-tight">
                  Debug<span className="gradient-text">Software</span>
                </span>
              </div>
              <p className="text-sm text-white/35 leading-relaxed max-w-[280px]">
                Soluções em Inteligência Artificial e automações inteligentes
                para empresas que precisam escalar com eficiência.
              </p>
            </div>

            {/* Company Info — 4 cols */}
            <div className="md:col-span-4">
              <h4 className="text-xs font-semibold text-white/70 uppercase tracking-wider mb-4">
                Dados da Empresa
              </h4>
              <dl className="space-y-2.5 text-sm">
                <div>
                  <dt className="text-white/30 text-xs">Razão Social</dt>
                  <dd className="text-white/50">DEBUG SOFTWARE LTDA</dd>
                </div>
                <div>
                  <dt className="text-white/30 text-xs">CNPJ</dt>
                  <dd className="text-white/50">46.428.797/0001-23</dd>
                </div>
                <div>
                  <dt className="text-white/30 text-xs">Telefone</dt>
                  <dd>
                    <a
                      href="tel:+5591980514660"
                      className="text-white/50 hover:text-[#00b4d8] transition-colors duration-300"
                    >
                      (91) 98051-4660
                    </a>
                  </dd>
                </div>
              </dl>
            </div>

            {/* Address — 4 cols */}
            <div className="md:col-span-4">
              <h4 className="text-xs font-semibold text-white/70 uppercase tracking-wider mb-4">
                Endereço
              </h4>
              <address className="text-sm text-white/50 leading-relaxed not-italic">
                Av. Paulista, nº 1636
                <br />
                Conjunto 4, Pavimento 15
                <br />
                Bairro Bela Vista
                <br />
                São Paulo — SP
              </address>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-12 pt-6 border-t border-white/[0.04] flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-white/25">
              &copy; {currentYear} Debug Software LTDA. Todos os direitos
              reservados.
            </p>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setShowPrivacy(true)}
                className="text-xs text-white/35 hover:text-[#00b4d8] transition-colors duration-300 cursor-pointer"
              >
                Política de Privacidade
              </button>
              <span className="text-white/15">|</span>
              <button
                onClick={() => setShowSecurity(true)}
                className="text-xs text-white/35 hover:text-[#00b4d8] transition-colors duration-300 cursor-pointer"
              >
                Política de Segurança
              </button>
            </div>
          </div>
        </motion.div>
      </footer>

      {/* Modais de Políticas */}
      <PrivacyPolicy
        isOpen={showPrivacy}
        onClose={() => setShowPrivacy(false)}
      />
      <SecurityPolicy
        isOpen={showSecurity}
        onClose={() => setShowSecurity(false)}
      />
    </>
  );
}

/**
 * CookieBanner — Banner de consentimento de cookies (LGPD)
 * Exibido na primeira visita do usuário.
 * Salva a preferência no localStorage e não reaparece após aceite/recusa.
 */
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X } from "lucide-react";

const COOKIE_CONSENT_KEY = "debug-software-cookie-consent";

type ConsentStatus = "accepted" | "rejected" | null;

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(COOKIE_CONSENT_KEY) as ConsentStatus;
    if (!stored) {
      // Pequeno delay para não competir com a animação inicial da página
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "accepted");
    setVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "rejected");
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed bottom-0 left-0 right-0 z-40 p-4 md:p-6"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] as [number, number, number, number] }}
        >
          <div className="mx-auto max-w-4xl rounded-2xl border border-white/10 bg-[#0d0d24]/95 backdrop-blur-xl shadow-2xl shadow-black/40">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4 p-5 md:p-6">
              {/* Ícone */}
              <div className="flex-shrink-0 hidden md:flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-[#7b2ff7]/20 to-[#00b4d8]/20 border border-white/5">
                <Cookie size={20} className="text-[#00b4d8]" />
              </div>

              {/* Texto */}
              <div className="flex-1">
                <p className="text-sm text-white/70 leading-relaxed">
                  Utilizamos cookies e tecnologias similares para melhorar sua experiência de navegação,
                  personalizar conteúdo e analisar o tráfego do site. Ao continuar navegando, você concorda
                  com o uso de cookies conforme nossa{" "}
                  <button
                    onClick={() => {
                      // Dispara evento customizado para abrir a política de privacidade
                      window.dispatchEvent(new CustomEvent("open-privacy-policy"));
                    }}
                    className="text-[#00b4d8] hover:text-[#7b2ff7] underline underline-offset-2 transition-colors duration-200"
                  >
                    Política de Privacidade
                  </button>
                  .
                </p>
              </div>

              {/* Botões */}
              <div className="flex items-center gap-3 w-full md:w-auto">
                <button
                  onClick={handleReject}
                  className="flex-1 md:flex-none px-4 py-2.5 rounded-lg text-sm font-medium text-white/60 border border-white/10 hover:border-white/20 hover:text-white/80 transition-all duration-200"
                >
                  Recusar
                </button>
                <button
                  onClick={handleAccept}
                  className="flex-1 md:flex-none px-5 py-2.5 rounded-lg text-sm font-medium text-white bg-gradient-to-r from-[#7b2ff7] to-[#00b4d8] hover:opacity-90 active:scale-[0.97] transition-all duration-200"
                >
                  Aceitar cookies
                </button>
              </div>

              {/* Botão fechar (mobile) */}
              <button
                onClick={handleReject}
                className="absolute top-3 right-3 md:hidden p-1.5 rounded-lg text-white/40 hover:text-white/70 transition-colors duration-200"
                aria-label="Fechar"
              >
                <X size={16} />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

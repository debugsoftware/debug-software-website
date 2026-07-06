/**
 * Header — Gradient Cosmos design
 * Navegação fixa com glassmorphism e logo da Debug Software
 */
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Soluções", href: "#solucoes" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0a1a]/90 backdrop-blur-xl border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <img
            src="/manus-storage/logo-debug_6f1e67d3.png"
            alt="Debug Software"
            className="h-10 w-10 md:h-12 md:w-12 transition-transform duration-200 group-hover:scale-105"
          />
          <span className="font-display text-lg md:text-xl font-bold text-white tracking-tight">
            Debug<span className="gradient-text">Software</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-sm font-medium text-white/70 hover:text-white transition-colors duration-200 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-[#7b2ff7] after:to-[#00b4d8] after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick("#contato")}
            className="px-5 py-2 text-sm font-semibold text-white rounded-lg debug-gradient hover:opacity-90 transition-all duration-200 active:scale-[0.97]"
          >
            Fale Conosco
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-white/80 hover:text-white p-2"
          aria-label="Menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <nav className="md:hidden bg-[#0a0a1a]/95 backdrop-blur-xl border-t border-white/5 px-4 pb-6 pt-4 space-y-4 animate-in fade-in slide-in-from-top-2 duration-200">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="block w-full text-left text-base font-medium text-white/80 hover:text-white py-2 transition-colors"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick("#contato")}
            className="w-full px-5 py-3 text-sm font-semibold text-white rounded-lg debug-gradient mt-2"
          >
            Fale Conosco
          </button>
        </nav>
      )}
    </header>
  );
}

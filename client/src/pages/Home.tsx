/**
 * Home — Página única da Debug Software
 * Compõe todas as seções: Header, Hero, Soluções, Sobre, Contato, Footer
 * Design: Gradient Cosmos (neo-futurismo digital)
 */
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import SolutionsSection from "@/components/SolutionsSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a1a]">
      <Header />
      <main>
        <HeroSection />
        <SolutionsSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
}

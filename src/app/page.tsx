import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import PricingSection from "@/components/PricingSection";
import GallerySection from "@/components/GallerySection";
import LocationSection from "@/components/LocationSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#07080f] text-zinc-100 overflow-x-hidden selection:bg-cyan-500 selection:text-black">
      {/* Navigation Bar */}
      <Navbar />

      {/* Main Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <HeroSection />

        {/* 2. Sobre Nós & A Experiência */}
        <AboutSection />

        {/* 3. Preços, Planos & Pacotes */}
        <PricingSection />

        {/* 4. Galeria de Fotos & Ambientes */}
        <GallerySection />

        {/* 5. Localização, Horários & Mapa */}
        <LocationSection />
      </main>

      {/* 6. Rodapé */}
      <Footer />

      {/* Floating CTA WhatsApp Button */}
      <FloatingWhatsApp />
    </div>
  );
}

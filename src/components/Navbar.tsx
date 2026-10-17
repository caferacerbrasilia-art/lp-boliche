"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Menu, X, Flame } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/constants";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Início", href: "#hero" },
    { label: "A Experiência", href: "#sobre" },
    { label: "Preços & Pistas", href: "#precos" },
    { label: "Galeria", href: "#galeria" },
    { label: "Localização", href: "#localizacao" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#07080f]/90 backdrop-blur-md border-b border-cyan-500/20 py-3 shadow-[0_4px_25px_rgba(0,0,0,0.8)]"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            className="flex items-center gap-2 group cursor-pointer focus:outline-none"
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500/20 to-pink-500/20 border border-cyan-400/50 group-hover:border-pink-500/70 transition-colors shadow-[0_0_15px_rgba(0,255,255,0.3)]">
              <span className="text-xl">🎳</span>
              <span className="absolute -top-1 -right-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500"></span>
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-black tracking-wider uppercase bg-gradient-to-r from-cyan-400 via-pink-400 to-purple-400 bg-clip-text text-transparent group-hover:drop-shadow-[0_0_12px_rgba(0,255,255,0.8)] transition-all">
                Neon<span className="text-pink-500 neon-text-pink">Strike</span>
              </span>
              <span className="text-[10px] tracking-widest text-zinc-400 uppercase font-semibold -mt-1">
                Bowling Lounge
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-zinc-300 hover:text-cyan-400 transition-colors duration-200 relative group py-1"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-pink-500 transition-all duration-300 group-hover:w-full group-hover:shadow-[0_0_8px_#00ffff]" />
              </a>
            ))}
          </nav>

          {/* Action Button & Mobile Menu Toggle */}
          <div className="flex items-center gap-3">
            <a
              href={getWhatsAppUrl("Olá! Gostaria de reservar uma pista no Neon Strike Bowling!")}
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider text-black bg-gradient-to-r from-cyan-400 via-green-400 to-cyan-300 hover:from-cyan-300 hover:to-green-300 transition-all duration-300 shadow-[0_0_20px_rgba(0,255,255,0.4)] hover:shadow-[0_0_30px_rgba(0,255,255,0.8)] hover:scale-105 active:scale-95"
            >
              <MessageCircle className="w-4 h-4 fill-black/20" />
              <span>Reservar Pista</span>
            </a>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-zinc-300 hover:text-cyan-400 hover:bg-white/5 rounded-lg transition-colors"
              aria-label="Abrir menu de navegação"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-[#07080f]/95 backdrop-blur-xl border-b border-cyan-500/20 px-4 pt-4 pb-6 space-y-4"
          >
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2.5 text-base font-medium text-zinc-300 hover:text-cyan-400 hover:bg-white/5 rounded-lg transition-colors flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <Flame className="w-4 h-4 text-cyan-400/50" />
                </a>
              ))}
              <div className="pt-2">
                <a
                  href={getWhatsAppUrl("Olá! Gostaria de reservar uma pista no Neon Strike Bowling!")}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-bold uppercase text-xs tracking-wider text-black bg-gradient-to-r from-cyan-400 to-green-400 shadow-[0_0_20px_rgba(0,255,255,0.5)]"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chamar no WhatsApp</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

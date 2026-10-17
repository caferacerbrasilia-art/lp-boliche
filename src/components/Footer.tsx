"use client";

import {
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  ArrowUp,
  Sparkles,
  Flame,
} from "lucide-react";
import { SITE_CONFIG, getWhatsAppUrl } from "@/lib/constants";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { label: "Início", href: "#hero" },
    { label: "A Experiência", href: "#sobre" },
    { label: "Preços & Pistas", href: "#precos" },
    { label: "Galeria de Fotos", href: "#galeria" },
    { label: "Localização & Contato", href: "#localizacao" },
  ];

  return (
    <footer className="relative bg-[#05060b] text-zinc-300 border-t border-zinc-800/80 pt-16 pb-12 overflow-hidden">
      {/* Decorative neon bottom bar line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-60 shadow-[0_0_15px_#00ffff]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-zinc-800/60">
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#hero" className="inline-flex items-center gap-2 group">
              <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500/20 to-pink-500/20 border border-cyan-400/50 group-hover:border-pink-500/70 transition-colors shadow-[0_0_15px_rgba(0,255,255,0.3)]">
                <span className="text-xl">🎳</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black tracking-wider uppercase bg-gradient-to-r from-cyan-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                  Neon<span className="text-pink-500 neon-text-pink">Strike</span>
                </span>
                <span className="text-[10px] tracking-widest text-zinc-400 uppercase font-semibold -mt-1">
                  Bowling Lounge
                </span>
              </div>
            </a>

            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed max-w-sm">
              O boliche mais vibrante da cidade. 12 pistas profissionais sob luz negra ultravioleta, gastronomia artesanal, drinks autorais e clima eletrizante para celebrar com quem você gosta.
            </p>

            <div className="pt-2">
              <a
                href={getWhatsAppUrl("Olá! Gostaria de mais informações sobre o Neon Strike Bowling!")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-black uppercase tracking-wider text-black bg-gradient-to-r from-cyan-400 to-green-400 hover:brightness-110 shadow-[0_0_20px_rgba(0,255,255,0.4)] transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Atendimento WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-black uppercase tracking-widest text-white flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>Navegação</span>
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-zinc-400 hover:text-cyan-400 transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-700 group-hover:bg-cyan-400 transition-colors" />
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Opening Hours Info */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-black uppercase tracking-widest text-white flex items-center gap-1.5">
              <Flame className="w-3.5 h-3.5 text-pink-400" />
              <span>Horários</span>
            </h4>
            <div className="space-y-2 text-xs text-zinc-400">
              <p>
                <strong className="text-zinc-200">Terça a Quinta:</strong> 18h às 00h
              </p>
              <p>
                <strong className="text-zinc-200">Sexta:</strong> 17h às 02h
              </p>
              <p>
                <strong className="text-zinc-200">Sábado:</strong> 14h às 02h
              </p>
              <p>
                <strong className="text-zinc-200">Domingo:</strong> 14h às 23h
              </p>
              <p className="text-[11px] text-zinc-500 pt-1">
                * Segunda-feira fechado para manutenção das pistas.
              </p>
            </div>
          </div>

          {/* Contact & Socials */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-black uppercase tracking-widest text-white">
              Contato & Redes
            </h4>
            <div className="space-y-2 text-xs text-zinc-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>{SITE_CONFIG.address.full}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-pink-400 shrink-0" />
                <span>{SITE_CONFIG.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{SITE_CONFIG.email}</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="pt-2">
              <span className="text-[10px] uppercase font-bold text-zinc-500 block mb-2 tracking-wider">
                Siga nas Redes Sociais
              </span>
              <div className="flex items-center gap-2.5">
                <a
                  href={SITE_CONFIG.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-pink-500 flex items-center justify-center text-zinc-400 hover:text-pink-400 hover:shadow-[0_0_15px_rgba(255,0,127,0.4)] transition-all"
                  aria-label="Instagram do Neon Strike"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href={SITE_CONFIG.socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-cyan-400 flex items-center justify-center text-zinc-400 hover:text-cyan-400 hover:shadow-[0_0_15px_rgba(0,255,255,0.4)] transition-all"
                  aria-label="Facebook do Neon Strike"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.6 5H18V0h-3.808C10.597 0 9 1.583 9 4.615V8z" />
                  </svg>
                </a>
                <a
                  href={SITE_CONFIG.socialLinks.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-red-500 flex items-center justify-center text-zinc-400 hover:text-red-400 hover:shadow-[0_0_15px_rgba(239,68,68,0.4)] transition-all"
                  aria-label="YouTube do Neon Strike"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Credits & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <div>
            <p>
              © 2026 Neon Strike Bowling. Todos os direitos reservados.
            </p>
            <p className="text-[11px] text-zinc-600 mt-0.5">
              Preços e horários sujeitos a alterações sem aviso prévio. Reservas sujeitas à disponibilidade de pistas.
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 py-2 px-3.5 rounded-full bg-zinc-900 border border-zinc-800 hover:border-cyan-400 text-zinc-400 hover:text-cyan-400 transition-all text-xs font-bold uppercase tracking-wider group"
            aria-label="Voltar ao topo da página"
          >
            <span>Voltar ao Topo</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}

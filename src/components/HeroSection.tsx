"use client";

import { motion } from "framer-motion";
import {
  MessageCircle,
  ArrowRight,
  Sparkles,
  Trophy,
  Zap,
  Flame,
  CheckCircle2,
  Clock,
  ShieldCheck,
} from "lucide-react";
import { getWhatsAppUrl } from "@/lib/constants";

import type { Variants } from "framer-motion";

export default function HeroSection() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.215, 0.61, 0.355, 1] },
    },
  };

  const floatingBadgeVariants: Variants = {
    animate: (custom: { yOffset: number; duration: number }) => ({
      y: [-custom.yOffset, custom.yOffset, -custom.yOffset],
      transition: {
        duration: custom.duration,
        repeat: Infinity,
        ease: "easeInOut",
      },
    }),
  };

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] sm:min-h-screen flex flex-col justify-center items-center pt-28 sm:pt-36 pb-20 overflow-hidden bg-[#07080f] bg-grid-pattern"
    >
      {/* Ambient Neon Atmosphere Glows */}
      <div className="absolute top-1/4 -left-40 w-[450px] h-[450px] bg-cyan-500/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 -right-40 w-[450px] h-[450px] bg-pink-500/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-purple-600/15 rounded-full blur-[160px] pointer-events-none" />

      {/* Decorative Perspective Bowling Lane Horizon Lines */}
      <div className="absolute bottom-0 left-0 right-0 h-64 pointer-events-none overflow-hidden opacity-30">
        <svg
          viewBox="0 0 1200 300"
          className="w-full h-full object-cover"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="laneGlowCyan" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#00ffff" stopOpacity="0" />
              <stop offset="100%" stopColor="#00ffff" stopOpacity="0.8" />
            </linearGradient>
            <linearGradient id="laneGlowPink" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#ff007f" stopOpacity="0" />
              <stop offset="100%" stopColor="#ff007f" stopOpacity="0.8" />
            </linearGradient>
          </defs>
          {/* Lane dividers converging in perspective */}
          <line x1="600" y1="40" x2="100" y2="300" stroke="url(#laneGlowCyan)" strokeWidth="1.5" />
          <line x1="600" y1="40" x2="350" y2="300" stroke="url(#laneGlowCyan)" strokeWidth="1.5" />
          <line x1="600" y1="40" x2="520" y2="300" stroke="url(#laneGlowPink)" strokeWidth="1" />
          <line x1="600" y1="40" x2="680" y2="300" stroke="url(#laneGlowPink)" strokeWidth="1" />
          <line x1="600" y1="40" x2="850" y2="300" stroke="url(#laneGlowCyan)" strokeWidth="1.5" />
          <line x1="600" y1="40" x2="1100" y2="300" stroke="url(#laneGlowCyan)" strokeWidth="1.5" />
          {/* Bowling lane arrows */}
          <polygon points="590,140 600,125 610,140 605,140 605,155 595,155 595,140" fill="#00ffff" opacity="0.6" />
          <polygon points="530,190 540,175 550,190 545,190 545,205 535,205 535,190" fill="#ff007f" opacity="0.5" />
          <polygon points="650,190 660,175 670,190 665,190 665,205 655,205 655,190" fill="#ff007f" opacity="0.5" />
        </svg>
      </div>

      {/* Floating Badges for Desktop */}
      <motion.div
        custom={{ yOffset: 12, duration: 5.5 }}
        variants={floatingBadgeVariants}
        animate="animate"
        className="hidden xl:flex absolute top-40 right-12 2xl:right-24 items-center gap-3 p-4 rounded-2xl bg-zinc-900/80 border border-pink-500/40 backdrop-blur-xl shadow-[0_0_30px_rgba(255,0,127,0.25)]"
      >
        <div className="w-10 h-10 rounded-xl bg-pink-500/20 border border-pink-500/50 flex items-center justify-center text-pink-400">
          <Zap className="w-5 h-5 fill-pink-400" />
        </div>
        <div>
          <div className="flex items-center gap-1.5 text-pink-400 font-extrabold text-xs uppercase tracking-wider">
            <span>Energia Neon Cósmica</span>
            <Sparkles className="w-3 h-3" />
          </div>
          <p className="text-zinc-300 text-xs font-medium">Luz Negra & Pistas UV Fluorescentes</p>
        </div>
      </motion.div>

      <motion.div
        custom={{ yOffset: 14, duration: 6.2 }}
        variants={floatingBadgeVariants}
        animate="animate"
        className="hidden xl:flex absolute bottom-44 left-10 2xl:left-24 items-center gap-3 p-4 rounded-2xl bg-zinc-900/80 border border-cyan-400/40 backdrop-blur-xl shadow-[0_0_30px_rgba(0,255,255,0.25)]"
      >
        <div className="w-10 h-10 rounded-xl bg-cyan-400/20 border border-cyan-400/50 flex items-center justify-center text-cyan-300">
          <Trophy className="w-5 h-5 text-cyan-400" />
        </div>
        <div>
          <div className="flex items-center gap-1.5 text-cyan-300 font-extrabold text-xs uppercase tracking-wider">
            <span>Placares 4K Interativos</span>
            <Flame className="w-3 h-3 text-pink-400" />
          </div>
          <p className="text-zinc-300 text-xs font-medium">Replays & Animações 3D a Cada Strike</p>
        </div>
      </motion.div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-4xl mx-auto flex flex-col items-center"
        >
          {/* Neon Live Tag / Availability Pill */}
          <motion.div variants={itemVariants} className="inline-flex mb-6">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-zinc-900/90 border border-cyan-400/40 backdrop-blur-md shadow-[0_0_20px_rgba(0,255,255,0.25)]">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400"></span>
              </span>
              <span className="text-xs sm:text-sm font-bold text-zinc-100 tracking-wide">
                ⚡ Luz Negra & Energia Máxima • Pistas Disponíveis
              </span>
              <span className="text-cyan-400 font-semibold text-xs uppercase px-1.5 py-0.5 rounded bg-cyan-400/10 border border-cyan-400/30">
                Hoje
              </span>
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[1.08] uppercase mb-6"
          >
            O Jogo Começa Aqui.{" "}
            <span className="block mt-1 sm:mt-2 bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-400 bg-clip-text text-transparent neon-text-pink drop-shadow-[0_0_35px_rgba(255,0,127,0.5)]">
              A Experiência de Boliche
            </span>
            <span className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-zinc-100 tracking-wide block mt-2">
              Mais Vibrante da Cidade
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-xl text-zinc-300 max-w-2xl leading-relaxed mb-8 sm:mb-10 font-normal px-2"
          >
            Sinta a eletricidade das pistas com luz negra ultravioleta, batidas que agitam a noite, coquetéis que brilham no escuro e placares 4K interativos. O ponto de encontro perfeito para reunir a sua galera e transformar cada arremesso em uma festa inesquecível.
          </motion.p>

          {/* Main CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-10 sm:mb-12"
          >
            {/* Primary WhatsApp CTA with Neon Glow */}
            <a
              href={getWhatsAppUrl(
                "Olá! Gostaria de reservar uma pista no Neon Strike Bowling! Quais horários estão disponíveis para o meu grupo?"
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 sm:py-4.5 rounded-full font-black text-sm sm:text-base uppercase tracking-wider text-black bg-gradient-to-r from-cyan-400 via-emerald-400 to-cyan-300 hover:from-cyan-300 hover:to-emerald-300 transition-all duration-300 shadow-[0_0_30px_rgba(0,255,255,0.6)] hover:shadow-[0_0_50px_rgba(0,255,255,0.9)] hover:scale-105 active:scale-95"
            >
              <div className="relative">
                <MessageCircle className="w-5 h-5 fill-black/20 group-hover:rotate-12 transition-transform duration-300" />
                <span className="absolute -top-1 -right-1 flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black opacity-60" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-black" />
                </span>
              </div>
              <span>Reservar Pista Agora</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
            </a>

            {/* Secondary CTA */}
            <a
              href="#precos"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 sm:py-4.5 rounded-full font-bold text-sm sm:text-base uppercase tracking-wider text-zinc-200 bg-zinc-900/80 hover:bg-zinc-850 border border-zinc-700/80 hover:border-pink-500/60 transition-all duration-300 hover:shadow-[0_0_25px_rgba(255,0,127,0.3)] hover:text-pink-400 active:scale-95"
            >
              <span>Ver Planos & Valores</span>
            </a>
          </motion.div>

          {/* Quick Perks / Badges Row */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-zinc-400 mb-12"
          >
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Sapatilhas Inclusas Sem Custo Extra</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-cyan-400" />
              <span>Confirmação Imediata via WhatsApp</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-pink-400" />
              <span>Até 6 Pessoas por Pista</span>
            </div>
          </motion.div>

          {/* Highlight Key Metrics / Stats Bar */}
          <motion.div
            variants={itemVariants}
            className="w-full grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-6 rounded-3xl bg-zinc-950/80 border border-white/10 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
          >
            <div className="flex flex-col items-center justify-center p-3 text-center sm:border-r border-white/10">
              <div className="text-3xl sm:text-4xl font-black text-cyan-400 neon-text-cyan mb-1">
                12
              </div>
              <div className="text-xs sm:text-sm font-semibold text-zinc-200">
                Pistas Profissionais
              </div>
              <div className="text-[11px] text-zinc-400">Ultravioleta Cosmic Glow</div>
            </div>

            <div className="flex flex-col items-center justify-center p-3 text-center lg:border-r border-white/10">
              <div className="text-3xl sm:text-4xl font-black text-pink-500 neon-text-pink mb-1">
                Até 6 Amigos
              </div>
              <div className="text-xs sm:text-sm font-semibold text-zinc-200">
                Por Pista
              </div>
              <div className="text-[11px] text-zinc-400">Racha a conta e economiza</div>
            </div>

            <div className="flex flex-col items-center justify-center p-3 text-center sm:border-r border-white/10">
              <div className="text-3xl sm:text-4xl font-black text-emerald-400 neon-text-green mb-1">
                Lounge & Bar
              </div>
              <div className="text-xs sm:text-sm font-semibold text-zinc-200">
                Drinks Fluorescentes
              </div>
              <div className="text-[11px] text-zinc-400">Smash Burgers & Petiscos</div>
            </div>

            <div className="flex flex-col items-center justify-center p-3 text-center">
              <div className="text-3xl sm:text-4xl font-black text-yellow-400 drop-shadow-[0_0_12px_rgba(255,238,0,0.6)] mb-1">
                4.9 ★
              </div>
              <div className="text-xs sm:text-sm font-semibold text-zinc-200">
                Avaliações Google
              </div>
              <div className="text-[11px] text-zinc-400">+1.400 Grupos Apaixonados</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

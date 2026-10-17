"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import {
  Sparkles,
  Tv,
  Wine,
  Music,
  CheckCircle,
  Users,
  Gamepad2,
  ArrowRight,
  Flame,
} from "lucide-react";
import { getWhatsAppUrl } from "@/lib/constants";

export default function AboutSection() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const features = [
    {
      icon: Sparkles,
      color: "cyan",
      tag: "Luzes Neon",
      title: "Pistas Cósmicas Glow UV",
      description:
        "Pistas e pinos fluorescentes que ganham vida sob iluminação ultravioleta de alta potência. Bolas que brilham no escuro e um cenário cyberpunk perfeito para registrar fotos e vídeos marcantes.",
      accentClass: "border-cyan-500/40 hover:border-cyan-400 group-hover:shadow-[0_0_30px_rgba(0,255,255,0.25)]",
      iconBg: "bg-cyan-500/10 text-cyan-400 border border-cyan-400/30",
      pillClass: "text-cyan-300 bg-cyan-400/10 border-cyan-400/30",
    },
    {
      icon: Tv,
      color: "pink",
      tag: "Tecnologia 4K",
      title: "Pontuação Digital & Desafios",
      description:
        "Placares widescreen inteligentes que registram cada jogada em tempo real, com animações 3D eletrizantes a cada strike, estatísticas de lançamento e modos de batalha interativos.",
      accentClass: "border-pink-500/40 hover:border-pink-400 group-hover:shadow-[0_0_30px_rgba(255,0,127,0.25)]",
      iconBg: "bg-pink-500/10 text-pink-400 border border-pink-400/30",
      pillClass: "text-pink-300 bg-pink-400/10 border-pink-400/30",
    },
    {
      icon: Users,
      color: "purple",
      tag: "Ambiente Social",
      title: "Vibe de Galera & Conexão",
      description:
        "O ponto de encontro perfeito para reunir os amigos, fazer aquele esquenta, comemorar aniversários ou sextar com estilo. Lounges confortáveis, batidas que agitam a noite e muita resenha.",
      accentClass: "border-purple-500/40 hover:border-purple-400 group-hover:shadow-[0_0_30px_rgba(157,78,221,0.25)]",
      iconBg: "bg-purple-500/10 text-purple-400 border border-purple-400/30",
      pillClass: "text-purple-300 bg-purple-400/10 border-purple-400/30",
    },
    {
      icon: Wine,
      color: "green",
      tag: "Diversão & Bar",
      title: "Lounge Bar & Drinks Neon",
      description:
        "Coquetéis autorais fluorescentes que brilham sob a luz negra, chopes trincando de gelados, smash burgers artesanais e porções generosas servidas direto na pista sem pausar a partida.",
      accentClass: "border-emerald-500/40 hover:border-emerald-400 group-hover:shadow-[0_0_30px_rgba(0,255,136,0.25)]",
      iconBg: "bg-emerald-500/10 text-emerald-400 border border-emerald-400/30",
      pillClass: "text-emerald-300 bg-emerald-400/10 border-emerald-400/30",
    },
  ];

  const highlights = [
    "Sapatilhas higienizadas de alta performance inclusas em todos os planos",
    "Bumpers automáticos inteligentes para nivelar a disputa entre novatos e craques",
    "Serviço de garçom com drinks e petiscos entregues direto na sua baia",
    "Ambiente 100% climatizado com acústica planejada para resenhas e risadas",
    "Cenografia neon e iluminação DMX altamente instagramáveis",
    "Espaço amplo com sofás confortáveis para até 6 a 10 amigos por baia",
  ];

  return (
    <section
      id="sobre"
      className="relative py-24 sm:py-32 bg-[#07080f] overflow-hidden border-t border-zinc-800/60"
    >
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-pink-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-pink-500/40 text-pink-400 text-xs font-bold uppercase tracking-widest mb-4 shadow-[0_0_15px_rgba(255,0,127,0.2)]"
          >
            <Flame className="w-3.5 h-3.5 text-pink-500" />
            <span>A Experiência Neon Strike</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white mb-6"
          >
            Mais que um boliche,{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-pink-400 to-purple-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(0,255,255,0.4)]">
              o rolê mais eletrizante da cidade
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-zinc-300 leading-relaxed font-normal"
          >
            O <strong>Neon Strike Bowling</strong> une o melhor de quatro mundos: diversão contagiante, tecnologia de última geração, a magia visual das luzes neon ultravioleta e um ambiente social moderno feito para quem ama celebrar a vida com os amigos. Cada detalhe foi desenhado para criar uma atmosfera imersiva onde competir é só uma desculpa para rir alto e colecionar momentos.
          </motion.p>
        </div>

        {/* 4 Feature Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                className={`group relative p-6 sm:p-7 rounded-2xl bg-zinc-900/70 border ${feature.accentClass} backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center ${feature.iconBg}`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <span
                      className={`text-[10px] uppercase font-black tracking-wider px-2.5 py-1 rounded-full border ${feature.pillClass}`}
                    >
                      {feature.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-black text-white uppercase tracking-wide mb-3 group-hover:text-zinc-100">
                    {feature.title}
                  </h3>

                  <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                    {feature.description}
                  </p>
                </div>

                <div className="pt-2 flex items-center gap-1 text-xs font-bold text-zinc-300 group-hover:text-cyan-300 transition-colors">
                  <span>Descubra mais</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom Banner: Why choose us & Quick Stats */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl p-8 sm:p-12 bg-gradient-to-br from-zinc-900/90 via-zinc-950 to-zinc-900/90 border border-cyan-500/30 overflow-hidden shadow-[0_0_40px_rgba(0,255,255,0.15)]"
        >
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-pink-500/15 rounded-full blur-[100px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 text-cyan-400 font-bold text-xs uppercase tracking-wider">
                <Gamepad2 className="w-4 h-4" />
                <span>A Experiência Completa</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
                Tudo o que você e seus amigos precisam para uma noite lendária
              </h3>
              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                Do primeiro arremesso à última comemoração, garantimos pistas com acabamento perfeito, atendimento ágil e uma vibe eletrizante. Esqueça o tédio dos finais de semana: venha sentir a energia neon ao vivo com quem você mais gosta.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {highlights.map((item, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-zinc-200 text-xs sm:text-sm">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col items-center sm:items-end justify-center gap-4">
              <div className="w-full sm:max-w-xs p-6 rounded-2xl bg-zinc-950/80 border border-pink-500/30 shadow-[0_0_20px_rgba(255,0,127,0.2)] text-center">
                <div className="flex justify-center -space-x-2 mb-3">
                  <div className="w-9 h-9 rounded-full bg-cyan-500/30 border border-cyan-400 flex items-center justify-center text-xs font-bold text-cyan-300">
                    🎳
                  </div>
                  <div className="w-9 h-9 rounded-full bg-pink-500/30 border border-pink-400 flex items-center justify-center text-xs font-bold text-pink-300">
                    🍸
                  </div>
                  <div className="w-9 h-9 rounded-full bg-purple-500/30 border border-purple-400 flex items-center justify-center text-xs font-bold text-purple-300">
                    ⚡
                  </div>
                </div>
                <div className="text-sm font-bold text-white uppercase mb-1">
                  Reúna sua Turma
                </div>
                <p className="text-xs text-zinc-400 mb-4">
                  As pistas mais disputadas da cidade costumam esgotar rápido. Reserve agora e garanta a melhor noite da sua galera.
                </p>
                <a
                  href={getWhatsAppUrl(
                    "Olá! Estive vendo a experiência do Neon Strike e quero reservar uma pista com minha galera!"
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold uppercase text-xs tracking-wider text-black bg-gradient-to-r from-cyan-400 to-emerald-400 hover:from-cyan-300 hover:to-emerald-300 shadow-[0_0_20px_rgba(0,255,255,0.4)] transition-all"
                >
                  <Users className="w-4 h-4" />
                  <span>Reservar pelo WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

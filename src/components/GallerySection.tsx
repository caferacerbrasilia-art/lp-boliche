"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";
import Image from "next/image";
import {
  Camera,
  Maximize2,
  X,
  MessageCircle,
  Eye,
} from "lucide-react";
import { getWhatsAppUrl } from "@/lib/constants";

interface GalleryItem {
  id: number;
  title: string;
  category: "pistas" | "lounge" | "eventos" | "arcade";
  categoryLabel: string;
  image: string;
  description: string;
  accent: string;
}

export default function GallerySection() {
  const [activeFilter, setActiveFilter] = useState<string>("todas");
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryItem | null>(null);

  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      title: "Pistas Ultravioleta Cosmic Glow",
      category: "pistas",
      categoryLabel: "Pistas Neon UV",
      image:
        "https://images.unsplash.com/photo-1545232979-fbf68fe9b1af?q=80&w=1200&auto=format&fit=crop",
      description:
        "12 pistas profissionais tratadas com pigmentos reagentes a luz negra, pinos fluorescentes e iluminação laser integrada.",
      accent: "cyan",
    },
    {
      id: 2,
      title: "Drinks Autorais que Brilham no Escuro",
      category: "lounge",
      categoryLabel: "Lounge & Drinks",
      image:
        "https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=1200&auto=format&fit=crop",
      description:
        "Mixologia molecular com xaropes artesanais tônicos que brilham sob luz ultravioleta. Sabores refrescantes e surpreendentes.",
      accent: "pink",
    },
    {
      id: 3,
      title: "Strike & Comemoração em Turma",
      category: "eventos",
      categoryLabel: "Festas & Aniversários",
      image:
        "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1200&auto=format&fit=crop",
      description:
        "O local predileto para celebrar aniversários, despedidas de solteiro e confraternizações de empresas.",
      accent: "green",
    },
    {
      id: 4,
      title: "Bolas Personalizadas de Alta Performance",
      category: "pistas",
      categoryLabel: "Pistas Neon UV",
      image:
        "https://images.unsplash.com/photo-1538370965046-79c0d6907d47?q=80&w=1200&auto=format&fit=crop",
      description:
        "Racks organizados com bolas de 6 até 16 libras para atender crianças, mulheres e jogadores avançados.",
      accent: "purple",
    },
    {
      id: 5,
      title: "Cyber Arcade & Jogos Retrô",
      category: "arcade",
      categoryLabel: "Cyber Arcade",
      image:
        "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1200&auto=format&fit=crop",
      description:
        "Enquanto espera seu próximo frame, divirta-se em máquinas de arcade retrô, fliperamas, pinballs e simuladores.",
      accent: "cyan",
    },
    {
      id: 6,
      title: "Burgers Gourmet & Petiscos Crocantes",
      category: "lounge",
      categoryLabel: "Lounge & Drinks",
      image:
        "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?q=80&w=1200&auto=format&fit=crop",
      description:
        "Smash burgers prensados com blend nobre, batatas rústicas com cheddar e bacon, e finger foods servidos diretamente na pista.",
      accent: "pink",
    },
  ];

  const filteredItems =
    activeFilter === "todas"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter);

  const filterTabs = [
    { id: "todas", label: "Todas as Fotos" },
    { id: "pistas", label: "Pistas Neon UV" },
    { id: "lounge", label: "Lounge & Drinks" },
    { id: "eventos", label: "Festas & Galera" },
    { id: "arcade", label: "Cyber Arcade" },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section
      id="galeria"
      className="relative py-24 sm:py-32 bg-[#07080f] overflow-hidden border-t border-zinc-800/60"
    >
      {/* Glow backgrounds */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-purple-400/40 text-purple-300 text-xs font-bold uppercase tracking-widest mb-4 shadow-[0_0_15px_rgba(157,78,221,0.25)]"
          >
            <Camera className="w-3.5 h-3.5 text-purple-400" />
            <span>Galeria de Fotos</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white mb-6"
          >
            Sinta a energia do{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-pink-400 to-purple-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(0,255,255,0.4)]">
              nosso espaço
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-zinc-300 leading-relaxed font-normal"
          >
            Confira como é viver a noite no boliche mais moderno e futurista. Luzes negras ultravioleta, cores vibrantes, gastronomia refinada e muita celebração.
          </motion.p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {filterTabs.map((tab) => {
            const isActive = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
                  isActive
                    ? "bg-gradient-to-r from-cyan-400 to-pink-500 text-black shadow-[0_0_20px_rgba(0,255,255,0.4)] scale-105"
                    : "bg-zinc-900/80 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-white/5"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <motion.div
          layout
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                layout
                key={item.id}
                variants={itemVariants}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                onClick={() => setSelectedPhoto(item)}
                className="group relative h-72 sm:h-80 rounded-2xl overflow-hidden cursor-pointer bg-zinc-900 border border-zinc-800 hover:border-cyan-400/60 shadow-lg hover:shadow-[0_0_25px_rgba(0,255,255,0.25)] transition-all duration-300"
              >
                {/* Image */}
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Neon color gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Category Pill */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-cyan-300 border border-cyan-400/40">
                    {item.categoryLabel}
                  </span>
                </div>

                {/* View Icon Button */}
                <div className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-4 h-4 text-cyan-300" />
                </div>

                {/* Text Bottom Info */}
                <div className="absolute bottom-0 left-0 right-0 p-5 z-10 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                  <h3 className="text-base sm:text-lg font-black text-white uppercase tracking-wide group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-zinc-400 text-xs line-clamp-2 mt-1 opacity-90 group-hover:opacity-100">
                    {item.description}
                  </p>
                  <div className="flex items-center gap-1.5 text-[11px] font-bold text-pink-400 mt-2">
                    <Eye className="w-3.5 h-3.5" />
                    <span>Clique para ampliar</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Modal Lightbox */}
        <AnimatePresence>
          {selectedPhoto && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPhoto(null)}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-xl"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-4xl w-full bg-zinc-950 border border-cyan-400/40 rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(0,255,255,0.3)]"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedPhoto(null)}
                  className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/70 border border-white/20 flex items-center justify-center text-white hover:text-cyan-400 hover:border-cyan-400 transition-colors"
                  aria-label="Fechar visualização"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="relative h-72 sm:h-96 md:h-[450px] w-full">
                  <Image
                    src={selectedPhoto.image}
                    alt={selectedPhoto.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-90" />
                </div>

                <div className="p-6 sm:p-8 bg-zinc-950">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-cyan-400/10 text-cyan-300 border border-cyan-400/30">
                      {selectedPhoto.categoryLabel}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight mb-2">
                    {selectedPhoto.title}
                  </h3>
                  <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-6">
                    {selectedPhoto.description}
                  </p>

                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-zinc-800">
                    <span className="text-xs text-zinc-400">
                      Gostou do ambiente? Garanta sua pista antecipadamente!
                    </span>
                    <a
                      href={getWhatsAppUrl(
                        `Olá! Vi a foto '${selectedPhoto.title}' no site e gostaria de reservar uma pista no Neon Strike!`
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-black uppercase tracking-wider text-black bg-gradient-to-r from-cyan-400 to-green-400 hover:brightness-110 shadow-[0_0_20px_rgba(0,255,255,0.4)] transition-all"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Reservar Pista pelo WhatsApp</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

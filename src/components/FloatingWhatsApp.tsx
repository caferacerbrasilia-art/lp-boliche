"use client";

import { MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/constants";
import { motion } from "framer-motion";

export default function FloatingWhatsApp() {
  return (
    <motion.a
      href={getWhatsAppUrl("Olá! Gostaria de reservar uma pista no Neon Strike Bowling!")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale conosco no WhatsApp para reservar sua pista"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.8, type: "spring", stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#25D366] text-black font-extrabold px-4 sm:px-5 py-3 rounded-full shadow-[0_0_25px_rgba(37,211,102,0.6)] hover:shadow-[0_0_35px_rgba(37,211,102,0.9)] transition-shadow duration-300 group border border-emerald-300/40"
    >
      <div className="relative">
        <MessageCircle className="w-6 h-6 fill-black/20 text-black" />
        <span className="absolute -top-1 -right-1 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-80" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-300" />
        </span>
      </div>
      <div className="flex flex-col text-left">
        <span className="text-[10px] uppercase tracking-wider text-black/80 font-bold leading-tight">
          Reserve agora
        </span>
        <span className="text-xs sm:text-sm font-black tracking-wide leading-tight">
          WhatsApp
        </span>
      </div>
    </motion.a>
  );
}

"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  Clock,
  Car,
  Train,
  Accessibility,
  ExternalLink,
  Navigation,
  MessageCircle,
} from "lucide-react";
import { SITE_CONFIG, getWhatsAppUrl } from "@/lib/constants";

export default function LocationSection() {
  const mapEmbedUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.197585098937!2d-46.65657118440781!3d-23.56134888468273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.+Paulista+-+Bela+Vista%2C+S%C3%A3o+Paulo+-+SP!5e0!3m2!1spt-BR!2sbr!4v1614000000000!5m2!1spt-BR!2sbr";

  const googleMapsDirectionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    SITE_CONFIG.address.full
  )}`;

  const wazeUrl = `https://waze.com/ul?q=${encodeURIComponent(
    SITE_CONFIG.address.full
  )}`;

  return (
    <section
      id="localizacao"
      className="relative py-24 sm:py-32 bg-[#07080f] overflow-hidden border-t border-zinc-800/60"
    >
      {/* Background glow accents */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-80 h-80 bg-pink-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-emerald-400/40 text-emerald-300 text-xs font-bold uppercase tracking-widest mb-4 shadow-[0_0_15px_rgba(0,255,136,0.25)]"
          >
            <MapPin className="w-3.5 h-3.5 text-emerald-400" />
            <span>Onde Nos Encontrar</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white mb-6"
          >
            Fácil de chegar,{" "}
            <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-pink-500 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(0,255,136,0.4)]">
              impossível de esquecer
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-zinc-300 leading-relaxed font-normal"
          >
            Localizado em um ponto estratégico de fácil acesso, com estacionamento privativo, manobrista cortesia e proximidade com as principais vias da cidade.
          </motion.p>
        </div>

        {/* Two Columns: Information & Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Details, Hours & Address */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Address Card */}
            <div className="p-6 sm:p-7 rounded-3xl bg-zinc-900/80 border border-zinc-800 hover:border-cyan-500/40 backdrop-blur-xl transition-all shadow-lg">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center text-cyan-400 shrink-0 shadow-[0_0_15px_rgba(0,255,255,0.25)]">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-black tracking-widest text-cyan-400 block mb-1">
                    Endereço Oficial
                  </span>
                  <h3 className="text-lg font-black text-white uppercase tracking-wide">
                    {SITE_CONFIG.address.street}
                  </h3>
                  <p className="text-zinc-300 text-sm mt-0.5">
                    {SITE_CONFIG.address.neighborhood} • {SITE_CONFIG.address.city} - {SITE_CONFIG.address.state}
                  </p>
                  <p className="text-zinc-500 text-xs mt-0.5">
                    CEP: {SITE_CONFIG.address.zipCode}
                  </p>
                </div>
              </div>

              {/* Navigation buttons */}
              <div className="grid grid-cols-2 gap-3 mt-6 pt-5 border-t border-zinc-800">
                <a
                  href={googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-zinc-800 hover:bg-zinc-750 text-zinc-200 hover:text-white border border-white/10 hover:border-cyan-400/40 text-xs font-bold uppercase tracking-wider transition-all"
                >
                  <Navigation className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Google Maps</span>
                  <ExternalLink className="w-3 h-3 text-zinc-500" />
                </a>
                <a
                  href={wazeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-zinc-800 hover:bg-zinc-750 text-zinc-200 hover:text-white border border-white/10 hover:border-pink-400/40 text-xs font-bold uppercase tracking-wider transition-all"
                >
                  <Car className="w-3.5 h-3.5 text-pink-400" />
                  <span>Abrir no Waze</span>
                  <ExternalLink className="w-3 h-3 text-zinc-500" />
                </a>
              </div>
            </div>

            {/* Opening Hours Card */}
            <div className="p-6 sm:p-7 rounded-3xl bg-zinc-900/80 border border-zinc-800 hover:border-pink-500/40 backdrop-blur-xl transition-all shadow-lg">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-pink-500/10 border border-pink-400/30 flex items-center justify-center text-pink-400 shadow-[0_0_12px_rgba(255,0,127,0.25)]">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-black text-white uppercase tracking-wide">
                    Horários de Funcionamento
                  </h3>
                  <span className="text-xs text-zinc-400">Pistas ativas e atendimento</span>
                </div>
              </div>

              <div className="space-y-2.5">
                {SITE_CONFIG.openingHours.map((schedule, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between py-1.5 px-3 rounded-xl bg-zinc-950/50 border border-white/5 text-xs"
                  >
                    <span className="font-semibold text-zinc-300">
                      {schedule.days}
                    </span>
                    <span
                      className={`font-mono font-bold ${
                        schedule.hours.includes("Fechado")
                          ? "text-rose-400"
                          : "text-emerald-400"
                      }`}
                    >
                      {schedule.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Amenities List */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-4 rounded-2xl bg-zinc-950/60 border border-zinc-800 text-center">
                <Car className="w-5 h-5 text-cyan-400 mx-auto mb-1.5" />
                <div className="text-xs font-bold text-white">Valet Gratuito</div>
                <div className="text-[10px] text-zinc-400">Com manobrista</div>
              </div>
              <div className="p-4 rounded-2xl bg-zinc-950/60 border border-zinc-800 text-center">
                <Train className="w-5 h-5 text-pink-400 mx-auto mb-1.5" />
                <div className="text-xs font-bold text-white">Metrô Próximo</div>
                <div className="text-[10px] text-zinc-400">5 min de caminhada</div>
              </div>
              <div className="p-4 rounded-2xl bg-zinc-950/60 border border-zinc-800 text-center">
                <Accessibility className="w-5 h-5 text-emerald-400 mx-auto mb-1.5" />
                <div className="text-xs font-bold text-white">Acessível PCD</div>
                <div className="text-[10px] text-zinc-400">Rampas e elevador</div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Google Maps Iframe with Neon Container */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col h-full"
          >
            <div className="relative rounded-3xl overflow-hidden border border-cyan-500/30 bg-zinc-900 shadow-[0_0_35px_rgba(0,255,255,0.2)] h-[460px] sm:h-[520px] w-full group">
              {/* Google Maps Iframe */}
              <iframe
                title="Localização do Neon Strike Bowling"
                src={mapEmbedUrl}
                width="100%"
                height="100%"
                style={{
                  border: 0,
                  filter:
                    "invert(90%) hue-rotate(180deg) contrast(105%) brightness(95%)",
                }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full object-cover"
              />

              {/* Floating Status Card Overlay */}
              <div className="absolute top-4 left-4 right-4 sm:right-auto sm:max-w-xs z-10 p-4 rounded-2xl bg-black/85 backdrop-blur-md border border-cyan-400/40 shadow-xl">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400"></span>
                  </span>
                  <span className="text-xs font-extrabold text-white uppercase tracking-wider">
                    Neon Strike Bowling
                  </span>
                </div>
                <p className="text-[11px] text-zinc-300">
                  {SITE_CONFIG.address.full}
                </p>
                <div className="mt-3 pt-2.5 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[10px] text-zinc-400">Precisa de ajuda?</span>
                  <a
                    href={getWhatsAppUrl("Olá! Estou a caminho do Neon Strike e preciso de orientações para chegar.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] font-black text-cyan-400 hover:text-cyan-300 uppercase tracking-wide"
                  >
                    <MessageCircle className="w-3 h-3" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>

              {/* Bottom Quick Bar on Map */}
              <div className="absolute bottom-4 left-4 right-4 z-10 flex flex-col sm:flex-row items-center justify-between gap-3 p-3.5 rounded-2xl bg-black/80 backdrop-blur-md border border-white/10">
                <span className="text-xs text-zinc-300 font-medium">
                  Clique para traçar sua rota no GPS:
                </span>
                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <a
                    href={googleMapsDirectionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 py-2 px-4 rounded-xl text-xs font-bold uppercase text-black bg-cyan-400 hover:bg-cyan-300 transition-colors shadow-[0_0_15px_rgba(0,255,255,0.4)]"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>Traçar Rota</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

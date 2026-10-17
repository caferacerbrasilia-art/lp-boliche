"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import {
  Check,
  Flame,
  MessageCircle,
  Clock,
  Sparkles,
  Users,
  ShieldCheck,
  HelpCircle,
} from "lucide-react";
import { getWhatsAppUrl } from "@/lib/constants";

export default function PricingSection() {
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
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const plans = [
    {
      id: "1-hora",
      name: "1 Hora de Pista",
      badge: "Partida Rápida",
      badgeColor: "text-cyan-300 bg-cyan-400/10 border-cyan-400/30",
      description: "Ideal para um esquenta dinâmico, uma partida rápida entre amigos e começar a noite com a energia lá em cima.",
      price: "99,00",
      period: "1 hora / pista",
      perPerson: "Apenas R$ 16,50 por pessoa (em 6 amigos)",
      schedule: "Válido todos os dias • Até 6 pessoas na pista",
      isPopular: false,
      borderClass: "border-zinc-800 hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(0,255,255,0.2)]",
      ctaBg: "bg-zinc-800 hover:bg-cyan-500 text-white hover:text-black border border-cyan-500/30",
      whatsappMsg:
        "Olá! Gostaria de reservar o plano de 1 Hora de Pista (R$ 99,00) no Neon Strike Bowling!",
      features: [
        "1 hora inteira de pista liberada (até 6 jogadores)",
        "Sapatilhas higienizadas e meias descartáveis inclusas",
        "Bolas especiais com brilho neon em vários pesos",
        "Placar digital 4K com animações a cada strike",
        "Acesso liberado ao Lounge Bar e Gastrobar",
      ],
    },
    {
      id: "2-horas",
      name: "2 Horas de Pista",
      badge: "Mais Escolhido",
      badgeColor: "text-pink-300 bg-pink-500/20 border-pink-400/50 shadow-[0_0_12px_rgba(255,0,127,0.5)]",
      description: "A escolha favorita dos grupos: tempo de sobra para disputar revanches acirradas, pedir drinks e curtir o clima neon sem pressa.",
      price: "150,00",
      period: "2 horas / pista",
      perPerson: "Apenas R$ 25,00 por pessoa (em 6 amigos — só R$ 12,50/h!)",
      schedule: "O mais pedido pelas turmas • Economia de R$ 48",
      isPopular: true,
      borderClass: "border-pink-500 shadow-[0_0_35px_rgba(255,0,127,0.35)] relative scale-100 lg:-translate-y-3",
      ctaBg: "bg-gradient-to-r from-pink-500 via-rose-500 to-yellow-400 text-black font-black shadow-[0_0_25px_rgba(255,0,127,0.6)] hover:brightness-110",
      whatsappMsg:
        "Olá! Gostaria de reservar o plano de 2 Horas de Pista (R$ 150,00) no Neon Strike Bowling!",
      features: [
        "2 horas consecutivas de pista para até 6 jogadores",
        "Sapatilhas higienizadas inclusas para todo o grupo",
        "Atendimento com garçom direto na sua baia de jogo",
        "Pistas com efeito ultravioleta Cosmic Glow ativado",
        "Bumpers automáticos opcionais para todos os níveis",
        "Melhor relação tempo x diversão da cidade",
      ],
    },
    {
      id: "3-horas",
      name: "3 Horas de Pista",
      badge: "Melhor Custo-Benefício",
      badgeColor: "text-emerald-300 bg-emerald-400/10 border-emerald-400/30",
      description: "A maratona definitiva para aniversários, resenhas épicas e confraternizações. Diversão máxima com o menor valor por hora da cidade!",
      price: "175,00",
      period: "3 horas / pista",
      perPerson: "Apenas R$ 29,17 por pessoa (em 6 amigos — menos de R$ 10/h!)",
      schedule: "Super economia • R$ 122 de desconto vs horas avulsas",
      isPopular: false,
      borderClass: "border-zinc-800 hover:border-emerald-500/50 hover:shadow-[0_0_30px_rgba(0,255,136,0.2)]",
      ctaBg: "bg-zinc-800 hover:bg-emerald-400 text-white hover:text-black border border-emerald-500/30",
      whatsappMsg:
        "Olá! Gostaria de reservar o plano de 3 Horas de Pista (R$ 175,00) no Neon Strike Bowling!",
      features: [
        "3 horas completas de pura adrenalina, música e strikes",
        "Até 6 amigos revezando e jogando à vontade",
        "Sapatilhas higienizadas inclusas para todos",
        "Mesa bistrô exclusiva com serviço de bar e petiscos",
        "Trilha sonora imersiva e clima de balada garantido",
        "Ideal para aniversários, resenhas e grandes grupos",
      ],
    },
  ];

  const faqs = [
    {
      q: "Quantas pessoas podem jogar em uma mesma pista?",
      a: "Cada pista acomoda confortavelmente até 6 pessoas jogando juntas. Dividindo entre 6 amigos, 1 hora sai por apenas R$ 16,50 por pessoa, 2 horas por R$ 25,00 e 3 horas saem por apenas R$ 29,17 para cada um curtir a noite toda!",
    },
    {
      q: "Preciso pagar pelo aluguel do calçado de boliche?",
      a: "Não! No Neon Strike todas as sapatilhas especiais higienizadas (com meias descartáveis) já estão 100% inclusas no valor da pista em todos os pacotes. Sem taxas extras.",
    },
    {
      q: "Como faço para reservar nossa pista?",
      a: "Basta clicar no botão de reserva no tempo desejado (1 hora: R$ 99,00 | 2 horas: R$ 150,00 | 3 horas: R$ 175,00). Você será atendido via WhatsApp para confirmar seu horário em minutos.",
    },
    {
      q: "Crianças e iniciantes conseguem se divertir?",
      a: "Com certeza! Nossas pistas possuem canaletas com bumpers automáticos retráteis opcionais que sobem na hora do arremesso, garantindo que a bola acerte os pinos e renda muitos strikes para todos.",
    },
  ];

  return (
    <section
      id="precos"
      className="relative py-24 sm:py-32 bg-[#07080f] overflow-hidden border-t border-zinc-800/60"
    >
      {/* Background glow effects */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-pink-500/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-cyan-400/40 text-cyan-400 text-xs font-bold uppercase tracking-widest mb-4 shadow-[0_0_15px_rgba(0,255,255,0.2)]"
          >
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Valores Claros & Sem Surpresas</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white mb-6"
          >
            Escolha sua pista &{" "}
            <span className="bg-gradient-to-r from-pink-400 via-yellow-300 to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(255,0,127,0.4)]">
              garanta a diversão
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-zinc-300 leading-relaxed font-normal"
          >
            Os valores são <strong>por pista</strong> (comportando até 6 jogadores simultâneos) e já incluem calçados higienizados para todo o grupo. Chame sua galera e divida a conta: <strong>1 hora: R$ 99,00</strong> | <strong>2 horas: R$ 150,00</strong> | <strong>3 horas: R$ 175,00</strong>. Quanto mais tempo jogam, mais barato fica para cada um!
          </motion.p>
        </div>

        {/* Pricing Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-20"
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.id}
              variants={cardVariants}
              className={`rounded-3xl p-7 sm:p-8 bg-zinc-900/80 backdrop-blur-xl border ${plan.borderClass} flex flex-col justify-between transition-all duration-300`}
            >
              <div>
                {/* Popular pill if applicable */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span
                    className={`text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full border ${plan.badgeColor}`}
                  >
                    {plan.badge}
                  </span>
                  {plan.isPopular && (
                    <span className="flex items-center gap-1 text-[11px] font-extrabold text-pink-400 uppercase tracking-wider">
                      <Flame className="w-3.5 h-3.5 fill-pink-500 text-pink-500 animate-pulse" />
                      Destaque Neon
                    </span>
                  )}
                </div>

                <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-2">
                  {plan.name}
                </h3>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-6 min-h-[40px]">
                  {plan.description}
                </p>

                {/* Price Display */}
                <div className="p-4 rounded-2xl bg-zinc-950/70 border border-white/5 mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-xs uppercase font-bold text-zinc-400">R$</span>
                    <span className="text-4xl sm:text-5xl font-black tracking-tight text-white">
                      {plan.price}
                    </span>
                    <span className="text-xs text-zinc-400 font-semibold uppercase">
                      /{plan.period}
                    </span>
                  </div>
                  <div className="text-[11px] font-medium text-cyan-400 mt-1 flex items-center gap-1">
                    <Users className="w-3.5 h-3.5" />
                    <span>{plan.perPerson}</span>
                  </div>
                  <div className="text-[11px] text-zinc-500 mt-1 flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>{plan.schedule}</span>
                  </div>
                </div>

                {/* Features list */}
                <div className="space-y-3 mb-8">
                  <span className="text-[11px] uppercase tracking-wider text-zinc-400 font-bold block mb-2">
                    O que está incluso:
                  </span>
                  {plan.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                      <div className="w-4 h-4 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <a
                href={getWhatsAppUrl(plan.whatsappMsg)}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-2xl text-xs sm:text-sm font-black uppercase tracking-wider transition-all duration-300 ${plan.ctaBg} active:scale-95`}
              >
                <MessageCircle className="w-4 h-4" />
                <span>Reservar Este Plano</span>
              </a>
            </motion.div>
          ))}
        </motion.div>

        {/* Guarantee Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-6 rounded-2xl bg-zinc-950/60 border border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4 mb-20 text-center sm:text-left"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center text-cyan-400 shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-white font-bold text-sm uppercase tracking-wide">
                Garantia de Horário e Pista Reservada
              </h4>
              <p className="text-zinc-400 text-xs">
                Chegue no horário marcado e vá direto para a pista sem filas de espera na recepção.
              </p>
            </div>
          </div>
          <a
            href={getWhatsAppUrl("Olá! Gostaria de tirar dúvidas sobre os horários e valores do boliche.")}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs uppercase font-extrabold text-cyan-400 hover:text-cyan-300 underline underline-offset-4 shrink-0 transition-colors"
          >
            Dúvidas? Fale com a recepção
          </a>
        </motion.div>

        {/* Mini FAQs */}
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-2 text-zinc-400 font-bold text-xs uppercase tracking-widest mb-6">
            <HelpCircle className="w-4 h-4 text-pink-400" />
            <span>Perguntas Frequentes sobre Reservas</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="p-5 rounded-2xl bg-zinc-900/60 border border-white/5 hover:border-cyan-500/20 transition-colors"
              >
                <h5 className="text-zinc-100 font-bold text-sm mb-2">
                  {faq.q}
                </h5>
                <p className="text-zinc-400 text-xs leading-relaxed">
                  {faq.a}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

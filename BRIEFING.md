# Briefing de Implementação: LP-BOLICHE-001

## Contexto e Objetivo
Criar uma Landing Page Single Page para uma Loja de Boliche. O foco é a conversão para aluguel de pistas via WhatsApp. A estética deve ser "Dark Mode com elementos Neon", transmitindo modernidade e energia.

## Stack Técnica
- Next.js (App Router)
- Tailwind CSS
- Framer Motion (para animações impactantes)
- Lucide React (ícones)

## Escopo de Implementação (Seções)
1. **Hero Section**: 
   - Headline impactante.
   - Subheadline persuasiva.
   - CTA principal: "Reservar Pista Agora" -> link para WhatsApp.
   - Background visualmente rico (dark/neon).
2. **Sobre**: 
   - Texto breve descrevendo a experiência da loja.
   - Layout moderno com uso de cores neon para destaque.
3. **Preços**: 
   - Cards de preços claros (por hora/pessoa).
   - Diferenciação visual entre planos/pacotes.
4. **Galeria**: 
   - Grid de imagens (use placeholders de alta qualidade se não houver assets).
5. **Localização**: 
   - Endereço textual claro.
   - Iframe do Google Maps integrado.
6. **Rodapé**: 
   - Links sociais e Copyright.

## Critérios de Aceite e Verificações
- [ ] Responsividade total (Mobile First).
- [ ] Botão de reserva redirecionando para WhatsApp com mensagem pré-definida.
- [ ] Estética Dark Mode com acentos Neon (ex: cores como #00ff00, #ff00ff, #00ffff).
- [ ] Animações suaves de entrada usando Framer Motion.

## Restrições
- Apenas Landing Page (Single Page).
- Sem sistema de pagamento ou login.
- Sem verificação de disponibilidade em tempo real.

## Instruções de Execução
- Implementar via `src/app/page.tsx` e componentes em `src/components/`.
- Garantir que o Tailwind config suporte as cores neon necessárias.
- Entregar código limpo, tipado e performático.

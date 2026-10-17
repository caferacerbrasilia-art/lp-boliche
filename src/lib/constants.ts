export const SITE_CONFIG = {
  name: "Neon Strike Bowling",
  tagline: "O Boliche Mais Eletrizante da Cidade",
  phone: "(11) 99999-9999",
  whatsappNumber: "5511999999999",
  email: "contato@neonstrikebowling.com.br",
  address: {
    street: "Av. das Pistas, 1000",
    neighborhood: "Vila Neon / Centro",
    city: "São Paulo",
    state: "SP",
    zipCode: "01234-567",
    full: "Av. das Pistas, 1000 - Vila Neon, São Paulo - SP",
  },
  openingHours: [
    { days: "Segunda-feira", hours: "Fechado para manutenção" },
    { days: "Terça a Quinta", hours: "18h00 às 00h00" },
    { days: "Sexta-feira", hours: "17h00 às 02h00" },
    { days: "Sábado", hours: "14h00 às 02h00" },
    { days: "Domingo e Feriados", hours: "14h00 às 23h00" },
  ],
  socialLinks: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    tiktok: "https://tiktok.com",
    youtube: "https://youtube.com",
  },
};

export function getWhatsAppUrl(message?: string): string {
  const defaultMessage = "Olá! Gostaria de reservar uma pista no Neon Strike Bowling!";
  const text = encodeURIComponent(message || defaultMessage);
  return `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${text}`;
}

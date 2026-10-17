import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Neon Strike Bowling | O Boliche Mais Eletrizante da Cidade",
  description:
    "Viva a experiência do boliche com pistas ultravioleta neon, pontuação digital 4K, bar de drinks artesanais, som imersivo e gastronomia premium. Reserve sua pista pelo WhatsApp!",
  keywords: [
    "boliche",
    "bowling",
    "boliche neon",
    "pistas neon",
    "aluguel de pistas boliche",
    "aniversario boliche",
    "lounge boliche",
    "drinks e boliche",
  ],
  authors: [{ name: "Neon Strike Bowling" }],
  openGraph: {
    title: "Neon Strike Bowling | Pistas Neon & Lounge Bar",
    description:
      "A atmosfera mais eletrizante para jogar boliche com amigos e família. Reserve sua pista!",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} dark scroll-smooth h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#07080f] text-zinc-100 selection:bg-cyan-500 selection:text-black">
        {children}
      </body>
    </html>
  );
}

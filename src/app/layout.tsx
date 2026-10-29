import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

const display = localFont({
  src: "../../public/fonts/barlow-condensed-bold.ttf",
  variable: "--font-display",
  display: "swap",
  weight: "700",
});
const body = localFont({
  src: [
    { path: "../../public/fonts/manrope-regular.ttf", weight: "400" },
    { path: "../../public/fonts/manrope-semibold.ttf", weight: "600" },
  ],
  variable: "--font-body",
  display: "swap",
});
export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ||
      "https://corte14-barber-club.vercel.app",
  ),
  title: "Corte 14 | Barber Club — Projeto Conceitual",
  description:
    "Experiência digital conceitual para uma barbearia contemporânea. Projeto demonstrativo criado pela Viham Dev.",
  applicationName: "Corte 14 — Barber Club",
  authors: [{ name: "Viham Dev", url: "https://vitorhamad.me" }],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    title: "CORTE 14 — Não é só um corte. É atitude.",
    description:
      "Uma experiência de estilo, precisão e identidade. Projeto conceitual por Viham Dev.",
    images: [
      {
        url: "/images/og-cover-concept.jpg",
        width: 1200,
        height: 630,
        alt: "Corte 14 — projeto conceitual com imagem gerada por IA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CORTE 14 — Barber Club",
    images: ["/images/og-cover-concept.jpg"],
  },
  icons: { icon: "/icon.svg" },
};
export const viewport: Viewport = { themeColor: "#111210" };
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${display.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}

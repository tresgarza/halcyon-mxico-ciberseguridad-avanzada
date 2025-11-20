import type { Metadata } from "next";
import "./globals.css";
import VisualEditsMessenger from "../visual-edits/VisualEditsMessenger";
import ErrorReporter from "@/components/ErrorReporter";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Halcyon México | Blindaje contra Ransomware",
  description: "Representación oficial de Halcyon en México. Ciberseguridad avanzada con IA para proteger la información crítica de tu empresa contra el robo, borrado y cifrado malicioso.",
  keywords: ["ransomware", "ciberseguridad", "Halcyon", "México", "protección datos", "anti-ransomware", "seguridad informática"],
  authors: [{ name: "Halcyon México" }],
  creator: "Halcyon México",
  publisher: "Halcyon México",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://halcyon.mx'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'es_MX',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://halcyon.mx',
    siteName: 'Halcyon México',
    title: 'Halcyon México | Blindaje contra Ransomware',
    description: 'Representación oficial de Halcyon en México. Ciberseguridad avanzada con IA para proteger la información crítica de tu empresa contra el robo, borrado y cifrado malicioso.',
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://halcyon.mx'}/logo/Halcyon_Horiz_RGB_TRI-POS.png`,
        width: 1200,
        height: 630,
        alt: 'Halcyon México - Protección contra Ransomware',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Halcyon México | Blindaje contra Ransomware',
    description: 'Representación oficial de Halcyon en México. Ciberseguridad avanzada con IA para proteger la información crítica de tu empresa.',
    images: [`${process.env.NEXT_PUBLIC_SITE_URL || 'https://halcyon.mx'}/logo/Halcyon_Horiz_RGB_TRI-POS.png`],
    creator: '@halcyon',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/logo/Halcyon_Icon_RGB_TRI.png', type: 'image/png' },
      { url: '/logo/Halcyon_Icon_RGB_TRI.png', sizes: '32x32', type: 'image/png' },
      { url: '/logo/Halcyon_Icon_RGB_TRI.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/logo/Halcyon_Icon_RGB_TRI.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/logo/Halcyon_Icon_RGB_TRI.png',
  },
  manifest: '/manifest.json',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased">
        <ErrorReporter />
        <Script
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts//route-messenger.js"
          strategy="afterInteractive"
          data-target-origin="*"
          data-message-type="ROUTE_CHANGE"
          data-include-search-params="true"
          data-only-in-iframe="true"
          data-debug="true"
          data-custom-data='{"appName": "YourApp", "version": "1.0.0", "greeting": "hi"}'
        />
        {children}
        <VisualEditsMessenger />
      </body>
    </html>
  );
}
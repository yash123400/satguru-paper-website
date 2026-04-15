import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Khemka Papers — B2B Paper Trading | Ludhiana, Punjab",
  description:
    "Trusted B2B paper trading from Ludhiana. Supplying poster paper, kraft, MG and stiffener paper to manufacturers across India for 15+ years. Mill-direct pricing, pan-India delivery.",
  keywords:
    "paper trading India, poster paper supplier, kraft paper, MG paper, stiffener paper, Ludhiana paper supplier, B2B paper",
  openGraph: {
    title: "Khemka Papers — India's Paper. Delivered Right.",
    description:
      "15+ years of trusted paper supply across India. Mill-direct sourcing, pan-India delivery, TReDS enabled.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${dmSans.variable}`}
      style={{ scrollBehavior: "smooth" }}
    >
      <body
        className="min-h-screen antialiased"
        style={{ fontFamily: "var(--font-body), system-ui, sans-serif" }}
      >
        {children}
      </body>
    </html>
  );
}

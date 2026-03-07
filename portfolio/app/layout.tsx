import type { Metadata } from "next";
import { Press_Start_2P, VT323 } from "next/font/google";
import "./globals.css";

const pressStart = Press_Start_2P({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
});

const vt323 = VT323({
  variable: "--font-body",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Moshi Game Studio | Portfolio",
  description: "Portfolio de game developer em estilo retro arcade.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt_BR">
      <body className={`${pressStart.variable} ${vt323.variable}`}>
        {children}
      </body>
    </html>
  );
}

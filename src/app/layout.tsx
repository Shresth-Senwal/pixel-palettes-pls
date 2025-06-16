import type { Metadata } from "next";
import { Press_Start_2P, VT323 } from "next/font/google";
import "./globals.css";

const pressStart2P = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-press-start",
});

const vt323 = VT323({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-vt323",
});

export const metadata: Metadata = {
  title: "Pixel Palettes - 24-Hour AI Powered Hackathon",
  description: "Join Pixel Palettes, a creatively charged AI-driven 24-hour hackathon blending tech and design. Hosted by IEEE RAS and Manipal University Jaipur.",
  keywords: "hackathon, AI, pixel art, IEEE RAS, Manipal University, coding competition",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${pressStart2P.variable} ${vt323.variable} antialiased bg-black text-white overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}

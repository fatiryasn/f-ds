import type { Metadata } from "next";
import { Manrope, Montserrat,  Poppins, Quicksand, Rubik_Glitch, Sora } from "next/font/google";
import RootClient from "./RootClient";
import "./globals.css";

// Font setup
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-poppins",
});
const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-quicksand",
});
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-montserrat"
})
const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-manrope"
})
const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-sora",
});
const rubikGlitch = Rubik_Glitch({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-glitch",
});

export const metadata: Metadata = {
  title: "Falaah Digital Solutions",
  description: "Level-Up Your Business with Reliable Digital Solutions",
  icons: {
    icon: "/emblem-falaah-digital-solutions.png"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${quicksand.variable} ${montserrat.variable} ${manrope.variable} ${sora.variable} ${rubikGlitch.variable} antialiased`}
      >
        <RootClient>{children}</RootClient>
      </body>
    </html>
  );
}

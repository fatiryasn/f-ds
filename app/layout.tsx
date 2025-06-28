import type { Metadata } from "next";
import { Manrope, Montserrat, Poppins, Quicksand } from "next/font/google";
import "./globals.css";
import NavbarEN from "./components/NavbarEN";
import Footer from "./components/FooterEN";
import RootClient from "./RootClient";

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

export const metadata: Metadata = {
  title: "Falaah Digital Solutions",
  description: "Level-Up Your Business with Reliable Digital Solutions",
  icons: {
    icon: "/icon-falaah-digital-solutions.jpg"
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
        className={`${poppins.variable} ${quicksand.variable} ${montserrat.variable} ${manrope.variable} antialiased`}
      >
        <RootClient>{children}</RootClient>
      </body>
    </html>
  );
}

import { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title: "Falaah Digital Solutions",
  description: "Level-Up Your Business with Reliable Digital Solutions. Falaah Digital Solutions is here as a digital transformation partner with affordable and customizable application development, UI/UX design, and technology consulting services.",
};

export default function Home() {
  return <PageClient />
}

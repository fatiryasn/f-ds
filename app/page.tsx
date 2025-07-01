import { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title: "Falaah Digital Solutions",
  description:
    "Falaah Digital Solutions is a digital agency offering website development, mobile app creation, SEO optimization, UI/UX design, and technology consulting to help businesses grow in the digital era.",
};

export default function Home() {
  return <PageClient />
}

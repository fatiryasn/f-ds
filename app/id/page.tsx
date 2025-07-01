import { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title: "Falaah Digital Solutions",
  description:
    "Falaah Digital Solutions adalah agensi digital yang menyediakan layanan pembuatan website, aplikasi mobile, optimasi SEO, desain UI/UX, dan konsultasi teknologi untuk membantu bisnis berkembang di era digital.",
};

export default function Home() {
  return <PageClient/>
}
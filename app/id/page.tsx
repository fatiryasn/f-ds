import { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title: "Falaah Digital Solutions",
  description:
    "Level-Up Bisnis Anda dengan Solusi Digital Terpercaya. Falaah Digital Solutions hadir sebagai mitra transformasi digital dengan pengembangan aplikasi yang terjangkau dan dapat disesuaikan, desain UI/UX, dan layanan konsultasi teknologi.",
};

export default function Home() {
  return <PageClient/>
}

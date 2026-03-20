// app/components/ServicesSection.tsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa6";
import { CgWebsite } from "react-icons/cg";
import { MdWeb } from "react-icons/md";
import { SiAffinitydesigner } from "react-icons/si";
import { MdOutlineScreenSearchDesktop } from "react-icons/md";
import { BsPhoneFlip } from "react-icons/bs";

const services = [
  {
    icon: <CgWebsite className="text-2xl" />,
    iconLarge: (
      <CgWebsite className="text-[5rem] md:text-[6rem] lg:text-[7rem] text-blue-800" />
    ),
    title: "Landing Page",
    description:
      "Cepat, ringan, dan cocok untuk menampilkan informasi dan kebutuhan branding personal/perusahaan/organisasi/dan lain-lain tanpa sistem backend.",
    benefits: [
      "Cocok untuk personal branding, produk tunggal, atau promosi acara",
      "Waktu pengerjaan cepat (<1 pekan)",
      "SEO friendly & mudah dibagikan ke media sosial",
    ],
  },
  {
    icon: <MdWeb className="text-2xl" />,
    iconLarge: (
      <MdWeb className="text-[5rem] md:text-[6rem] lg:text-[7rem] text-blue-800" />
    ),
    title: "Web App Custom",
    description:
      "Aplikasi berbasis web yang kompleks dan disesuaikan dengan kebutuhan bisnis Anda.",
    benefits: [
      "Dapat memiliki login, dashboard, laporan, dll",
      "Ideal untuk manajemen internal atau sistem publik",
      "Terintegrasi dengan database & API",
      "Skalabel dan dapat dikembangkan terus-menerus",
    ],
  },
  {
    icon: <SiAffinitydesigner className="text-2xl" />,
    iconLarge: (
      <SiAffinitydesigner className="text-[5rem] md:text-[6rem] lg:text-[7rem] text-blue-800" />
    ),
    title: "UI/UX Design",
    description:
      "Desain tampilan dan alur aplikasi agar mudah digunakan dan menarik secara visual.",
    benefits: [
      "Memberikan first impression yang profesional",
      "Mengurangi kebingungan pengguna saat menggunakan aplikasi",
      "Desain responsif untuk semua perangkat",
      "Prototyping sebelum development dimulai",
    ],
  },
  {
    icon: <MdOutlineScreenSearchDesktop className="text-2xl" />,
    iconLarge: (
      <MdOutlineScreenSearchDesktop className="text-[5rem] md:text-[6rem] lg:text-[7rem] text-blue-800" />
    ),
    title: "SEO Optimization",
    description:
      "Membantu website Anda lebih mudah ditemukan di Google dan mesin pencari lainnya.",
    benefits: [
      "Meningkatkan jumlah pengunjung tanpa iklan",
      "Analisis kata kunci dan struktur konten",
      "Optimasi kecepatan dan performa website",
      "Cocok untuk blog, toko online, dan landing page",
    ],
  },
  {
    icon: <BsPhoneFlip className="text-2xl" />,
    iconLarge: (
      <BsPhoneFlip className="text-[5rem] md:text-[6rem] lg:text-[7rem] text-blue-800" />
    ),
    title: "Mobile Application",
    description:
      "Aplikasi Android/iOS yang sesuai kebutuhan pengguna lokal dan mudah digunakan.",
    benefits: [
      "Bisa diakses kapan saja lewat smartphone",
      "Integrasi fitur seperti notifikasi, kamera, atau lokasi",
      "UI disesuaikan dengan kebiasaan pengguna lokal",
      "Cocok untuk komunitas, layanan publik, atau bisnis",
    ],
  },
];

export default function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="layanan" className="relative min-h-screen py-24 px-5 sm:px-20">
      <div className="flex flex-col items-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex gap-3 lg:gap-7 items-center justify-center"
        >
          <div className="flex flex-col max-w-[50%] md:max-w-max">
            <h1 className="font-poppins font-bold text-blue-900 text-3xl xl:text-4xl">
              Layanan Kami
            </h1>
            <p className="font-manrope font-medium text-gray-600 text-xs sm:text-sm md:text-base xl:text-lg mt-1 md:max-w-lg">
              Falaah Digital Solutions berkomitmen untuk membantu Anda mencapai
              potensi terbaik Anda dengan transformasi digital
            </p>
          </div>
          <a
            href={`https://wa.me/6282274016977`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="shine-button rounded-full flex items-center gap-1 bg-blue-700 cursor-pointer text-gray-50 font-semibold font-manrope py-2 px-4 text-xs md:text-base lg:text-lg">
              <FaWhatsapp className="text-base md:text-2xl font-bold shrink-0" />{" "}
              Pesan Sekarang
            </button>
          </a>
        </motion.div>

        {/* Services Grid */}
        <div className="flex flex-col-reverse items-center lg:flex-row justify-between md:items-start gap-10 mt-10">
          {/* Service Details */}
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex-1 max-w-2xl md:mx-10 lg:mx-0"
          >
            <div className="flex flex-col gap-2">
              <div>{services[activeIndex].iconLarge}</div>
              <h2 className="font-manrope font-bold text-xl lg:text-2xl xl:text-3xl mt-2">
                {services[activeIndex].title}
              </h2>
              <p className="leading-relaxed font-quicksand font-medium text-gray-700 text-sm md:text-base lg:text-lg">
                {services[activeIndex].description}
              </p>
              <ul className="list-disc pl-5 text-gray-700 font-quicksand text-xs md:text-sm lg:text-base">
                {services[activeIndex].benefits.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Service Cards */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative flex overflow-x-auto whitespace-nowrap max-w-[90vw] lg:grid lg:grid-cols-2 lg:pb-32 bg-gradient-to-br from-[#389cf4] to-[#0d5fa6] lg:shadow-[20px_20px_0px_#171926] text-white"
          >
            <Image
              src="/emblem-falaah-digital-solutions.png"
              alt="Logo Falaah Digital Solutions"
              width={56}
              height={56}
              className="hidden lg:block rounded-full w-14 h-14 absolute bottom-3 right-3 object-contain p-1 bg-white"
            />
            {services.map((service, index) => (
              <div
                key={index}
                className={`py-7 px-5 md:py-9 md:px-6 xl:py-14 xl:px-9 flex flex-col items-center gap-1 cursor-pointer transition ${
                  activeIndex === index
                    ? "bg-cyan-100/20"
                    : "hover:bg-cyan-100/10"
                }`}
                onClick={() => setActiveIndex(index)}
              >
                {service.icon}
                <h2 className="font-manrope font-bold text-center text-sm md:text-base lg:text-lg xl:text-xl">
                  {service.title}
                </h2>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

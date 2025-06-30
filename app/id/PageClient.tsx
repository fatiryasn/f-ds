"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

import Carousel from "../components/Carousel";
import ContactForm from "./components/ContactForm";

import {
  MdOutlineScreenSearchDesktop,
  MdWeb,
  MdKeyboardArrowRight,
  MdEmail,
} from "react-icons/md";
import { CgWebsite } from "react-icons/cg";
import { SiAffinitydesigner } from "react-icons/si";
import { BsLightningChargeFill, BsPhoneFlip } from "react-icons/bs";
import { TbWorld } from "react-icons/tb";
import { FaInstagram, FaWhatsapp } from "react-icons/fa6";
import { RiLinkedinFill } from "react-icons/ri";
import { GrTechnology } from "react-icons/gr";
import { GiGrowth } from "react-icons/gi";

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

const projects = [
  {
    title: "PorluCoffee Official Website",
    image: "/porlu-coffee-preview.png",
    link: "https://porlucoffee.com/",
    linkText: "porlucoffee.com",
    description: "Website landing page",
    tech: ["Next JS", "Tailwind CSS"],
  },
  {
    title: "BENING BKN",
    image: "/bening-preview.png",
    link: "https://beningbknmedan.com/",
    linkText: "beningbknmedan.com",
    description:
      "Situs web e-pembelajaran interaktif yang dirancang untuk memberikan kursus, melacak kemajuan, dan meningkatkan pengalaman pembelajaran digital.",
  },
  {
    title: "Point Of Sales",
    image: "/pos-preview.png",
    description:
      "Situs web POS yang modern dan mudah digunakan untuk mengelola penjualan, inventaris, dan transaksi pelanggan secara efisien.",
  },
  {
    title: "Abi Foundation Official Website",
    image: "/abi-foundation-preview.png",
    link: "http://abi-foundation.atwebpages.com/",
    linkText: "abi-foundation.com",
    description: "Website landing page",
  },
];

export default function PageClient() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      {/* hero */}
      <main className="min-h-[100dvh] px-7 sm:px-20 lg:px-28 xl:px-40 flex items-center justify-center bg-gradient-to-b from-blue-100 via-white to-white">
        <div className="flex flex-col-reverse md:flex-row items-center justify-around">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col items-center md:items-start md:mr-10"
          >
            <h1 className="hidden md:block text-xl md:text-2xl lg:text-3xl xl:text-4xl max-w-2xl text-center md:text-start font-poppins font-bold text-transparent bg-clip-text bg-linear-135 pb-2 from-gray-950 from-10% via-blue-700 via-30% to-gray-950 to-60% ">
              Level-Up Bisnis Anda dengan Solusi Digital Terpercaya
            </h1>

            <p className="max-w-2xl text-center md:text-left font-quicksand font-medium text-sm md:text-base lg:text-lg mt-1">
              Falaah Digital Solutions hadir sebagai mitra transformasi digital
              dengan pengembangan aplikasi yang terjangkau dan dapat
              disesuaikan, desain UI/UX, dan layanan konsultasi teknologi.
            </p>
            <Link href="#layanan">
              <button className="rounded-full text-blue-900 border-2 border-blue-900 px-5 py-2 font-montserrat font-bold mt-5 cursor-pointer transition hover:bg-blue-900 text-sm md:text-base hover:text-gray-50 flex gap-1 items-center">
                Layanan Kami <MdKeyboardArrowRight />
              </button>
            </Link>
          </motion.div>
          <div className="relative w-[300px] md:w-[500px] h-[400px] md:h-[500px]">
            <img
              src="/nebula-effect.png"
              alt="Nebula Background"
              className="absolute inset-0 hidden rotate-[80deg] w-full h-full object-fit rounded-2xl z-0"
            />
            <div className="relative z-10">
              <Carousel />
            </div>
          </div>
          <h1 className="md:hidden mt-32 text-2xl max-w-3xl text-center md:text-start font-poppins font-bold text-transparent bg-clip-text bg-linear-135 pb-2 from-gray-950 from-10% via-blue-700 via-30% to-gray-950 to-60% ">
            Level-Up Bisnis Anda dengan Solusi Digital Terpercaya
          </h1>
        </div>
      </main>

      {/* about us */}
      <section
        id="tentang-kami"
        className="min-h-screen bg-white py-24 px-7 sm:px-20 gap-20 flex flex-col items-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-center items-center md:gap-10"
        >
          <h2 className="md:hidden px-3 self-start text-3xl md:text-4xl lg:text-5xl font-poppins font-bold text-blue-900 leading-tight">
            About Us
          </h2>
          <img
            src="/about-us.png"
            alt="About us"
            className="w-[80vw] h-28 mt-10 md:h-[70dvh] md:w-[10rem] xl:w-[20rem] shrink-0 shadow-[-20px_-20px_0px_#198bef] object-cover"
          />
          <div className="max-w-3xl text-center md:text-left space-y-5">
            <h2 className="hidden md:block text-3xl md:text-4xl lg:text-5xl font-poppins font-bold text-blue-900 leading-tight">
              About Us
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl text-justify md:text-left font-quicksand text-gray-700 leading-loose">
              Falaah Digital Solutions adalah mitra tepercaya dalam transformasi
              digital bisnis Anda. Kami menyediakan layanan pengembangan
              aplikasi yang fleksibel dan terjangkau, desain UI/UX yang menarik,
              dan konsultasi teknologi yang strategis. Dengan tim profesional
              dan pendekatan yang berpusat pada klien, kami berkomitmen untuk
              membantu Anda tumbuh dan beradaptasi di era digital.
            </p>
            <p className="text-lg md:text-xl lg:text-2xl text-justify md:text-left font-quicksand text-gray-700 leading-loose">
              Kami percaya bahwa teknologi bukan hanya tentang perangkat lunak,
              tetapi tentang memberikan solusi nyata yang mendorong pertumbuhan
              dan efisiensi.
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col items-center lg:items-stretch lg:flex-row justify-center"
        >
          <div className="relative max-w-2xl lg:max-w-lg xl:max-w-2xl p-5 md:p-10 border-t border-l rounded-r-lg border-dashed border-black/50">
            <div className="absolute bg-[#198bef] w-7 h-7 -top-3 -left-3"></div>
            <div className="absolute hidden md:block bg-[#198bef] w-6 h-6 -top-7 -left-12"></div>
            <div className="absolute bg-[#198bef] w-3 h-3 -top-12 left-2"></div>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold font-manrope">
              Visi
            </h2>
            <p className="mt-1 text-gray-700 font-quicksand font-medium text-sm md:text-base lg:text-lg">
              Menjadi mitra digital tepercaya yang membantu individu, bisnis,
              dan lembaga tumbuh melalui teknologi yang berdampak positif dan
              berkelanjutan
            </p>
          </div>
          <div className="relative max-w-2xl p-5 md:p-10 border-r border-b rounded-l-lg border-dashed border-black/50">
            <div className="absolute bg-[#198bef] w-7 h-7 -bottom-3 -right-3"></div>
            <div className="absolute hidden md:block bg-[#198bef] w-6 h-6 -bottom-7 -right-12"></div>
            <div className="absolute bg-[#198bef] w-3 h-3 -bottom-12 right-2"></div>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold font-manrope">
              Misi
            </h2>
            <ul className="list-disc text-gray-700 pl-5 mt-1 font-quicksand font-medium text-sm md:text-base lg:text-lg">
              <li>
                Memberikan kemudahan akses solusi digital bagi UMKM, masyarakat,
                dan instansi.
              </li>
              <li>
                Mengembangkan produk teknologi yang relevan, sederhana, dan
                efektif untuk pengguna lokal.
              </li>
              <li>
                Mendampingi proses digitalisasi dari perencanaan hingga
                implementasi.
              </li>
              <li>Mendorong tumbuhnya inovasi berbasis teknologi lokal.</li>
            </ul>
          </div>
        </motion.div>
      </section>

      {/* our services */}
      <section
        id="layanan"
        className="relative min-h-screen py-24 px-5 sm:px-20"
      >
        <div className="flex flex-col items-center">
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
                Falaah Digital Solutions berkomitmen untuk membantu Anda
                mencapai potensi terbaik Anda dengan transformasi digital
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
          <div className="flex flex-col-reverse items-center lg:flex-row justify-between md:items-start gap-10 mt-10">
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

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative flex overflow-x-auto whitespace-nowrap max-w-[90vw] lg:grid lg:grid-cols-2 lg:pb-32 bg-gradient-to-br from-[#389cf4] to-[#0d5fa6] lg:shadow-[20px_20px_0px_#171926] text-white"
            >
              <img
                src="/emblem-falaah-digital-solutions.png"
                alt="Logo Falaah Digital Solutions"
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

      {/* projects */}
      <section
        className="min-h-screen relative px-7 xl:px-32 mt-20"
        style={{
          background: "url('/project-bg.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          id="portofolio"
          className="rounded-lg p-2 md:p-5 absolute left-1/2 -translate-x-1/2 flex items-center w-max bg-gray-50 border-2 border-blue-300 -mt-10"
        >
          <img
            src="/logo-falaah-digital-solutions.png"
            alt="Logo Falaah Digital Solutions"
            className="object-content w-auto h-6 md:h-12 lg:h-14"
          />
          <h1 className="font-manrope font-bold md:text-xl lg:text-2xl text-gray-800 tracking-[0.5rem] ml-3">
            PROJECTS
          </h1>
          <div className="w-[1px] h-16 bg-blue-950 mx-2 md:mx-5 lg:mx-7" />
          <h2 className="font-poppins font-bold text-gray-800 text-lg md:text-2xl lg:text-3xl">
            4
          </h2>
          <div className="flex flex-col ml-2">
            <p className="text-sm md:text-lg font-semibold font-manrope">
              Projects
            </p>
            <p className="font-quicksand font-medium text-xs max-w-20">
              dan masih berlanjut!
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 md:gap-5 py-32 text-gray-900"
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex flex-col w-xs sm:w-2xs md:w-sm lg:w-md xl:w-lg 2xl:w-xl p-3 bg-gray-50 border border-gray-300 rounded-sm"
            >
              <div className="overflow-hidden h-40 xl:h-48 mb-4 rounded">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover h-full w-full hover:scale-110 transition"
                  loading="lazy"
                />
              </div>

              {project.link && (
                <a
                  href={project.link}
                  className="hover:text-gray-300 w-fit text-gray-50"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="rounded-full bg-green-600 hover:bg-green-700 transition cursor-pointer px-3 flex items-center font-bold font-poppins text-xs md:text-sm lg:text-base">
                    <TbWorld />
                    <span>{project.linkText}</span>
                  </button>
                </a>
              )}

              <h2 className="font-bold font-manrope text-lg md:text-xl lg:text-2xl mt-1">
                {project.title}
              </h2>

              <p className="font-quicksand font-medium text-xs md:text-sm lg:text-base text-gray-700">
                {project.description}
              </p>

              {project.tech && (
                <div className="flex gap-2 mt-2 text-xs md:text-base text-gray-50">
                  {project.tech.map((tech, i) => (
                    <p
                      key={i}
                      className="rounded-full px-2 bg-[#198bef] font-poppins"
                    >
                      {tech}
                    </p>
                  ))}
                </div>
              )}
            </div>
          ))}
        </motion.div>
      </section>

      {/* advantages */}
      <section
        className="px-7 lg:px-32 pt-32 pb-20"
        style={{
          background: "url('/un-bg.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "left",
          backgroundSize: "cover",
        }}
      >
        <div className="flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h1 className="font-poppins text-blue-900 text-3xl lg:text-4xl font-semibold">
              Ciri Khas Kami
            </h1>
            <p className="font-manrope mt-1 text-sm md:text-base">
              Alasan mengapa anda harus memilih kami sebagai mitra digital Anda
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3 md:gap-10 mt-10"
          >
            <div className="flex flex-col items-center p-5 rounded-lg bg-white border-[0.1px] border-gray-300 max-w-sm lg:max-w-md shadow hover:shadow-lg transition">
              <GrTechnology className="text-3xl text-blue-700" />
              <h2 className="text-lg md:text-xl text-blue-700 font-manrope mt-2 font-semibold">
                Simple Tech, Easier Life
              </h2>
              <p className="font-poppins text-gray-700 text-center mt-1 text-xs md:text-sm">
                Kami membangun sistem digital praktis untuk perorangan, usaha
                kecil, sekolah, dan lembaga. Tanpa jargon, tanpa kerumitan.
              </p>
            </div>
            <div className="flex flex-col items-center p-5 rounded-lg bg-white border-[0.1px] border-gray-300 max-w-sm lg:max-w-md shadow hover:shadow-lg transition">
              <GiGrowth className="text-3xl text-green-600" />
              <h2 className="text-lg md:text-xl text-green-600 font-manrope mt-2 font-semibold">
                Local Youth in Action
              </h2>
              <p className="font-poppins text-gray-700 text-center mt-1 text-xs md:text-sm">
                Kami melibatkan mahasiswa dan lulusan lokal dalam proyek nyata.
                Mendukung kebutuhan digital Anda sekaligus memberdayakan bakat
                muda.
              </p>
            </div>
            <div className="flex flex-col items-center p-5 rounded-lg bg-white border-[0.1px] border-gray-300 max-w-sm lg:max-w-md shadow hover:shadow-lg transition">
              <BsLightningChargeFill className="text-3xl text-yellow-600" />
              <h2 className="text-lg md:text-xl text-yellow-600 font-manrope mt-2 font-semibold">
                Fast, Affordable, and Scalable
              </h2>
              <p className="font-poppins text-gray-700 text-center mt-1 text-xs md:text-sm">
                Tim yang tangkas, kemajuan yang jelas dari awal hingga akhir,
                fleksibel terhadap kebutuhan Anda dengan kualitas yang dapat
                dilacak.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* contact */}
      <section
        className="min-h-[100dvh] px-7 md:px-16 lg:px-28 mt-10"
        id="kontak"
      >
        <div className="flex flex-col items-center md:items-stretch md:flex-row justify-center gap-10 pt-32">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col max-w-md"
          >
            <h1 className="font-poppins text-blue-900 text-3xl lg:text-4xl font-semibold">
              Hubungi Kami
            </h1>
            <p className="font-manrope font-medium mt-1 text-gray-600 text-sm md:text-base lg:text-lg">
              Hubungi kami, kami siap membantu Anda mencapai digitalisasi,
              produk teknologi, dan banyak lagi!
            </p>
            <div className="mt-5 relative flex flex-col p-5 md:p-10 pb-52 md:pb-52 bg-gradient-to-bl from-[#389cf4] to-[#0d5fa6] md:shadow-[-20px_20px_0px_#171926] shadow-[-10px_10px_0px_#171926] text-white gap-4">
              <img
                src="/emblem-falaah-digital-solutions.png"
                alt="Logo Falaah Digital Solutions"
                className="rounded-full w-14 h-14 absolute bottom-3 left-3 object-contain p-1 bg-white"
              />
              <a
                href="https://www.instagram.com/falaahdigitalsolutions"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="flex items-center hover:underline text-xs md:text-sm lg:text-base gap-2 font-poppins font-medium">
                  <FaInstagram className="rounded-full text-4xl p-1 font-bold bg-white text-[#01549c]" />{" "}
                  falaahdigitalsolutions
                </p>
              </a>
              <a
                href={`https://wa.me/6282274016977`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="flex items-center hover:underline text-xs md:text-sm lg:text-base gap-2 font-poppins font-medium">
                  <FaWhatsapp className="rounded-full text-4xl p-1 font-bold bg-white text-[#01549c]" />{" "}
                  +62 822 7401 6977
                </p>
              </a>
              <p className="flex items-center text-xs md:text-sm lg:text-base gap-2 font-poppins font-medium">
                <RiLinkedinFill className="rounded-full text-4xl p-1 font-bold bg-white text-[#01549c]" />{" "}
                Falaah Digital Solutions
              </p>
              <p className="flex items-center text-xs md:text-sm lg:text-base gap-2 font-poppins font-medium">
                <MdEmail className="rounded-full text-4xl p-1 font-bold bg-white text-[#01549c]" />{" "}
                falaahdigitalsolutions@gmail.com
              </p>
            </div>
          </motion.div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}

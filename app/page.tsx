"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  MdOutlineScreenSearchDesktop,
  MdWeb,
  MdKeyboardArrowRight,
} from "react-icons/md";
import { CgWebsite } from "react-icons/cg";
import { SiAffinitydesigner } from "react-icons/si";
import { BsPhoneFlip } from "react-icons/bs";
import Carousel from "./components/Carousel";
import Link from "next/link";
import { TbWorld } from "react-icons/tb";

const services = [
  {
    icon: <CgWebsite className="text-2xl" />,
    iconLarge: <CgWebsite className="text-[7rem] text-blue-800" />,
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
    iconLarge: <MdWeb className="text-[7rem] text-blue-800" />,
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
    iconLarge: <SiAffinitydesigner className="text-[7rem] text-blue-800" />,
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
      <MdOutlineScreenSearchDesktop className="text-[7rem] text-blue-800" />
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
    iconLarge: <BsPhoneFlip className="text-[7rem] text-blue-800" />,
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

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      {/* hero */}
      <main className="h-[100dvh] pt-24 mx-40">
        <div className="flex items-center justify-around mt-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col items-start"
          >
            <h1 className="text-xl md:text-2xl lg:text-5xl max-w-2xl text-center md:text-start font-poppins font-bold text-transparent bg-clip-text bg-linear-135 pb-2 from-gray-950 from-10% via-blue-700 via-30% to-gray-950 to-60% ">
              Accelerate Your Business with Reliable Digital Solutions
            </h1>

            <p className="max-w-2xl font-quicksand font-medium text-lg mt-1">
              Falaah Digital Solutions is here as a digital transformation
              partner with affordable and customizable application development,
              UI/UX design, and technology consulting services.
            </p>
            <Link href="#our-services">
              <button className="rounded-full text-blue-900 border-2 border-blue-900 px-5 py-2 font-montserrat font-bold mt-5 cursor-pointer transition hover:bg-blue-900 hover:text-gray-50 flex gap-1 items-center">
                Our Services <MdKeyboardArrowRight />
              </button>
            </Link>
          </motion.div>
          <div className="relative w-[500px] h-[500px]">
            <img
              src="/nebula-effect.png"
              alt="Nebula Background"
              className="absolute inset-0 rotate-[80deg] w-full h-full object-fit rounded-2xl z-0"
            />
            <div className="relative z-10">
              <Carousel />
            </div>
          </div>
        </div>
      </main>

      {/* about us */}
      <section
        id="about-us"
        className="min-h-screen bg-white py-24 px-10 md:px-32 gap-20 flex flex-col items-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center items-center gap-10"
        >
          <div>
            <img
              src="/about-us.jpeg"
              alt="About us"
              className="h-[70dvh] w-[20rem] shadow-[-20px_-20px_0px_#198bef] object-left object-cover"
            />
          </div>
          <div className="max-w-3xl text-center md:text-left space-y-5">
            <div className="h-2 w-20 bg-bg-[#198bef]]"></div>

            <h2 className="text-3xl md:text-5xl font-poppins font-bold text-gray-900 leading-tight">
              About Us
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl font-quicksand text-gray-700 leading-loose">
              Falaah Digital Solutions is a trusted partner in your business
              digital transformation. We provide flexible and affordable
              application development services, compelling UI/UX design, and
              strategic technology consulting. With a professional team and a
              client-centric approach, we are committed to helping you grow and
              adapt in the digital era.
            </p>
            <p className="text-lg md:text-xl lg:text-2xl font-quicksand text-gray-700 leading-loose">
              We believe that technology is not just about software, but about
              delivering real solutions that drive growth and efficiency.
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="relative max-w-2xl p-10 border-t border-l rounded-r-lg border-dashed border-black/50">
            <div className="absolute bg-[#198bef] rounded-full w-7 h-7 -top-3 -left-3"></div>
            <div className="absolute bg-[#198bef] rounded-full w-6 h-6 -top-7 -left-12"></div>
            <div className="absolute bg-[#198bef] rounded-full w-3 h-3 -top-12 left-2"></div>
            <h2 className="text-3xl font-bold font-manrope">Vision</h2>
            <p className="mt-1 font-quicksand font-medium text-lg">
              To be a trusted digital partner that helps individuals,
              businesses, and institutions grow through technology that has a
              positive and sustainable impact.
            </p>
          </div>
          <div className="relative max-w-2xl p-10 border-r border-b rounded-l-lg border-dashed border-black/50">
            <div className="absolute bg-[#198bef] rounded-full w-7 h-7 -bottom-3 -right-3"></div>
            <div className="absolute bg-[#198bef] rounded-full w-6 h-6 -bottom-7 -right-12"></div>
            <div className="absolute bg-[#198bef] rounded-full w-3 h-3 -bottom-12 right-2"></div>
            <h2 className="text-3xl font-bold font-manrope">Mission</h2>
            <ul className="list-disc pl-5 mt-1 font-quicksand font-medium text-lg">
              <li>
                Providing easy access to digital solutions for MSMEs,
                communities, and agencies.
              </li>
              <li>
                Developing relevant, simple, and effective technology products
                for local users.
              </li>
              <li>
                Accompanying the digitalization process from planning to
                implementation.
              </li>
              <li>
                Encouraging the growth of local technology-based innovation.
              </li>
            </ul>
          </div>
        </motion.div>
      </section>

      {/* our services */}
      <section
        id="our-services"
        className="min-h-screen bg-gray-50 py-24 px-6 md:px-32"
      >
        <div className="flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <h1 className="font-poppins font-bold text-4xl">Our Services</h1>
            <p className="font-quicksand font-medium text-gray-600 text-lg mt-3 max-w-xl text-center">
              Falaah Digital Solutions is committing to help you achieve your
              best potential with digital transformation
            </p>
          </motion.div>
          <div className="flex flex-col lg:flex-row justify-between items-start gap-10 mt-10">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex-1 max-w-2xl"
            >
              <div className="flex flex-col gap-2">
                <div>{services[activeIndex].iconLarge}</div>
                <h2 className="font-manrope font-bold text-3xl mt-2">
                  {services[activeIndex].title}
                </h2>
                <p className="leading-relaxed font-quicksand font-medium text-gray-700 text-lg">
                  {services[activeIndex].description}
                </p>
                <ul className="list-disc pl-5 text-gray-700 font-quicksand text-base">
                  {services[activeIndex].benefits.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative grid grid-cols-2 pb-32 bg-gradient-to-br from-[#389cf4] to-[#0d5fa6] shadow-[20px_20px_0px_#171926] text-white"
            >
              <img
                src="/emblem-falaah-digital-solutions.png"
                alt="Logo Falaah Digital Solutions"
                className="rounded-full w-14 h-14 absolute bottom-3 right-3 object-contain p-1 bg-white"
              />
              {services.map((service, index) => (
                <div
                  key={index}
                  className={`py-14 px-9 flex flex-col items-center gap-1 cursor-pointer transition ${
                    activeIndex === index
                      ? "bg-cyan-100/20"
                      : "hover:bg-cyan-100/10"
                  }`}
                  onClick={() => setActiveIndex(index)}
                >
                  {service.icon}
                  <h2 className="font-manrope font-bold text-xl">
                    {service.title}
                  </h2>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* projects */}
      <section className="min-h-screen relative bg-[#1a5a6d] px-6 md:px-32 mt-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          id="projects"
          className="rounded-lg p-5 absolute left-1/2 -translate-x-1/2 flex items-center bg-gray-50 border-2 border-blue-300 -mt-10"
        >
          <img
            src="/logo-falaah-digital-solutions.png"
            alt="Logo Falaah Digital Solutions"
            className="object-content w-auto h-14"
          />
          <h1 className="font-manrope font-bold text-2xl text-gray-800 tracking-[0.5rem] ml-3">
            PROJECTS
          </h1>
          <div className="w-0.5 h-16 bg-blue-950 mx-7" />
          <h2 className="font-poppins font-bold text-gray-800 text-3xl">4</h2>
          <div className="flex flex-col ml-2">
            <p className="text-lg font-semibold font-manrope">Projects</p>
            <p className="font-quicksand font-medium text-xs">
              and still counting!
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-10 py-32 px-10 text-gray-50"
        >
          <div className="flex flex-col p-3 border-2 border-gray-400 rounded-sm">
            <div className="overflow-hidden h-60 rounded">
              <img
                src="/porlu-coffee-preview.png"
                alt="PorluCoffee"
                className="object-contain h-full w-full hover:scale-110 transition"
                loading="lazy"
              />
            </div>
            <a
              href="https://porlucoffee.com/"
              className="hover:text-gray-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="rounded-full bg-green-600 hover:bg-green-700 transition cursor-pointer px-3 flex items-center font-bold font-poppins mt-4">
                <TbWorld />
                <span>porlucoffee.com</span>
              </button>
            </a>
            <h2 className="font-bold font-manrope text-2xl mt-1">
              PorluCoffee Official Website
            </h2>
            <p className="font-quicksand font-medium text-gray-300">
              Landing page website
            </p>
            <div className="flex gap-2 mt-4">
              <p className="rounded-full px-2 bg-[#198bef] font-poppins">
                Next JS
              </p>
              <p className="rounded-full px-2 bg-[#198bef] font-poppins">
                Tailwind CSS
              </p>
            </div>
          </div>
          <div className="flex flex-col p-3 border-2 border-gray-400 rounded-sm">
            <div className="overflow-hidden h-60 rounded">
              <img
                src="/bening-preview.png"
                alt="Bening Bkn"
                className="object-contain h-full w-full hover:scale-110 transition"
                loading="lazy"
              />
            </div>
            <a
              href="https://beningbknmedan.com/"
              className="hover:text-gray-300 w-fit"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="rounded-full bg-green-600 hover:bg-green-700 transition cursor-pointer px-3 flex items-center font-bold font-poppins mt-4">
                <TbWorld />
                <span>beningbknmedan.com</span>
              </button>
            </a>
            <h2 className="font-bold font-manrope text-2xl mt-1">BENING BKN</h2>
            <p className="font-quicksand font-medium text-gray-300">
              Website E-Learning
            </p>
          </div>
          <div className="flex flex-col p-3 border-2 border-gray-400 rounded-sm">
            <div className="overflow-hidden h-60 rounded">
              <img
                src="/abi-foundation-preview.png"
                alt="PorluCoffee"
                className="object-contain h-full w-full hover:scale-110 transition"
                loading="lazy"
              />
            </div>
            <h2 className="font-bold font-manrope text-2xl mt-4">
              Abi Foundation Official Website
            </h2>
            <p className="font-quicksand font-medium text-gray-300">
              Landing page website
            </p>
          </div>
        </motion.div>
      </section>

      <div className="h-[100dvh] bg-red-100" id="contact">
        Hello World
      </div>
    </>
  );
}

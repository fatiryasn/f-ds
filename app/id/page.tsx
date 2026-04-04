import { Metadata } from "next";
import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";
import {
  HiOutlineGlobeAlt,
  HiOutlineDeviceMobile,
  HiOutlineLockClosed,
  HiOutlineUserGroup,
  HiOutlineShare,
  HiOutlineChartBar,
  HiOutlineClock,
  HiOutlineShieldCheck,
} from "react-icons/hi";

import Carousel from "../components/Carousel";
import ScrollAnimation from "../components/layouts/ScrollAnimation";
import PlanSection from "../components/subsections/PlanSection";
import ProjectsCarousel from "../components/subsections/ProjectsCarousel";

interface Plan {
  name: string;
  price: string;
  description: string;
  benefits: string[];
  isPopular?: boolean;
  serviceType: "Website" | "UI/UX Design" | "Mobile App" | "IT Consulting";
}

//portofolio data
const projects = [
  {
    title: "PorluCoffee Official Website",
    image: "/porlu-coffee-preview.png",
    link: "https://porlucoffee.com/",
    linkText: "porlucoffee.com",
  },
  {
    title: "BENING BKN",
    image: "/bening-preview.png",
    link: "https://beningbknmedan.com/",
    linkText: "beningbknmedan.com",
  },
  {
    title: "Point Of Sales",
    image: "/pos-preview.png",
  },
  {
    title: "Abi Foundation Official Website",
    image: "/abi-foundation-preview.png",
    link: "http://abi-foundation.atwebpages.com/",
    linkText: "abi-foundation.com",
  },
];

//services data
const plans: Plan[] = [
  // 🌐 WEBSITE
  {
    name: "Starter",
    price: "Rp500.000",
    description:
      "Titik awal yang sempurna untuk personal branding atau kehadiran bisnis kecil",
    benefits: [
      "1 halaman landing page responsif",
      "Desain UI modern kustom",
      "Setup subdomain gratis (opsional)",
      "Panduan deployment & hosting",
    ],
    serviceType: "Website",
  },
  {
    name: "Growth",
    price: "Rp1.000.000",
    description:
      "Ideal untuk bisnis yang sedang berkembang yang membutuhkan kehadiran online yang kuat",
    benefits: [
      "Hingga 5 halaman",
      "Desain UI/UX kustom sepenuhnya",
      "Integrasi CMS (WordPress / Headless CMS)",
      "Form kontak & otomatisasi dasar",
    ],
    isPopular: true,
    serviceType: "Website",
  },
  {
    name: "Scale",
    price: "Rp5.000.000+",
    description:
      "Solusi website tingkat lanjut untuk bisnis serius dan kebutuhan skala besar",
    benefits: [
      "Hingga 10+ halaman dengan struktur kompleks",
      "UI/UX kustom + design system",
      "Integrasi CMS / dashboard tingkat lanjut",
      "Integrasi API (pembayaran, tools pihak ketiga)",
    ],
    serviceType: "Website",
  },

  // 📱 MOBILE APP
  {
    name: "Starter (MVP)",
    price: "Rp20jt",
    description: "Luncurkan ide Anda dengan cepat dengan fitur inti",
    benefits: [
      "1 platform (Android / iOS)",
      "Hingga 5 layar inti",
      "Implementasi UI dasar",
      "Integrasi backend sederhana",
      "Autentikasi (login/register)",
      "Integrasi API dasar",
      "Testing & perbaikan bug",
      "Bantuan deployment aplikasi",
    ],
    serviceType: "Mobile App",
  },
  {
    name: "Growth",
    price: "Rp60jt",
    description: "Aplikasi yang tangguh untuk kebutuhan bisnis yang berkembang",
    benefits: [
      "Multi-platform (Flutter / React Native)",
      "10–15 layar",
      "Implementasi UI/UX kustom",
      "Push notifications",
      "Autentikasi pengguna & roles",
      "Admin panel / dashboard",
      "Integrasi API & database",
      "Testing & optimasi",
      "Dukungan publikasi App Store",
    ],
    isPopular: true,
    serviceType: "Mobile App",
  },
  {
    name: "Scale",
    price: "Rp120jt+",
    description: "Solusi mobile berperforma tinggi dan scalable",
    benefits: [
      "Aplikasi multi-platform tingkat lanjut",
      "Fitur & integrasi kompleks",
      "Sinkronisasi data real-time",
      "Arsitektur backend yang scalable",
      "Implementasi keamanan tingkat lanjut",
      "Optimasi performa",
      "Testing QA menyeluruh",
      "Dokumentasi",
      "Dukungan pemeliharaan 1–3 bulan",
    ],
    serviceType: "Mobile App",
  },
];
const commonBenefits = [
  {
    icon: <HiOutlineGlobeAlt className="text-2xl" />,
    title: "Optimasi SEO",
    description:
      "Setup SEO on-page dasar untuk visibilitas pencarian yang lebih baik",
  },
  {
    icon: <HiOutlineDeviceMobile className="text-2xl" />,
    title: "Ramah Mobile",
    description: "Desain responsif sepenuhnya yang bekerja di semua perangkat",
  },
  {
    icon: <HiOutlineLockClosed className="text-2xl" />,
    title: "Enkripsi SSL",
    description: "Sertifikat SSL gratis untuk koneksi yang aman",
  },
  {
    icon: <HiOutlineUserGroup className="text-2xl" />,
    title: "Dukungan Teknis",
    description: "Bantuan teknis khusus selama proses pengembangan",
  },
  {
    icon: <HiOutlineShare className="text-2xl" />,
    title: "Integrasi Media Sosial",
    description:
      "Terhubung dan terintegrasi dengan platform media sosial utama",
  },
  {
    icon: <HiOutlineChartBar className="text-2xl" />,
    title: "Optimasi Performa",
    description: "Kecepatan loading cepat dan performa yang dioptimalkan",
  },
  {
    icon: <HiOutlineClock className="text-2xl" />,
    title: "Pemeliharaan 24/7",
    description: "Pembaruan dan pemantauan rutin",
  },
  {
    icon: <HiOutlineShieldCheck className="text-2xl" />,
    title: "Praktik Keamanan Terbaik",
    description: "Implementasi standar dan protokol keamanan",
  },
];
const indonesianContent = {
  uiuxContent: {
    heroTitle: "UI/UX Design",
    heroHighlight: "Desain sesuai keinginanmu,",
    heroDescription: "Mulai dari Rp50.000 saja",
    features: {
      deepDiscovery: {
        title: "Discovery Mendalam",
        description:
          "Memahami pengguna, tujuan, dan pasar Anda melalui riset dan wawancara.",
      },
      wireframing: {
        title: "Wireframing & Prototyping",
        description:
          "Dari sketsa hingga prototipe interaktif yang terasa nyata.",
      },
      modernUI: {
        title: "Desain UI Modern",
        description:
          "Desain bersih, estetis, dan modern yang memikat pengguna.",
      },
      userTesting: {
        title: "Pengujian Pengguna",
        description:
          "Validasi desain dengan pengguna nyata untuk memastikan pengalaman yang menyenangkan.",
      },
    },
    ctaButton: "Mulai sekarang",
  },
  itConsultingContent: {
    heroTitle: "Konsultasi IT",
    heroHighlight: "Konsultasi untuk kebutuhan digital Anda.",
    heroDescription: "Mulai dari 0 biaya",
    features: {
      techStack: {
        title: "Rekomendasi Tech Stack",
        description:
          "Dapatkan rekomendasi teknologi terbaik untuk proyek Anda.",
      },
      feasibility: {
        title: "Kelayakan Proyek",
        description:
          "Kami akan menganalisis apakah ide Anda layak secara teknis dan ekonomis.",
      },
      architecture: {
        title: "Perencanaan Arsitektur",
        description: "Panduan arsitektur sistem dan skalabilitas sejak awal.",
      },
    },
    ctaButton: "Mulai Konsultasi",
  },
  commonSectionContent: {
    title: "Semua paket sudah termasuk",
    additionalInfo:
      "* Semua layanan mencakup fitur-fitur inti ini. Butuh sesuatu yang spesifik?",
    ctaLinkText: "Diskusikan kebutuhan Anda",
    scrollHintText: "Geser untuk melihat lebih banyak",
    popularBadge: "POPULER",
    getStartedButton: "Pesan sekarang",
  },
};

export const metadata: Metadata = {
  title: "Falaah Digital Solutions | Solusi Digital Terpercaya di Indonesia",
  description:
    "Falaah Digital Solutions adalah mitra transformasi digital Anda. Kami menyediakan layanan pengembangan website, aplikasi mobile, desain UI/UX, dan konsultasi IT dengan harga terjangkau dan kualitas terbaik.",
  keywords: [
    "jasa pembuatan website",
    "pengembangan aplikasi mobile",
    "desain UI/UX",
    "konsultasi IT",
    "digital agency Indonesia",
    "pembuatan website medan",
    "aplikasi custom",
    "solusi digital",
    "Falaah Digital Solutions",
  ],
  authors: [{ name: "Falaah Digital Solutions" }],
  creator: "Falaah Digital Solutions",
  publisher: "Falaah Digital Solutions",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Falaah Digital Solutions | Solusi Digital Terpercaya di Indonesia",
    description:
      "Wujudkan ide menjadi solusi nyata bersama Falaah Digital Solutions. Layanan website, mobile app, UI/UX design, dan konsultasi IT berkualitas.",
    url: "https://falaahdigitalsolutions.com",
    siteName: "Falaah Digital Solutions",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Falaah Digital Solutions - Solusi Digital Terpercaya",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Falaah Digital Solutions | Solusi Digital Terpercaya di Indonesia",
    description:
      "Wujudkan ide menjadi solusi nyata bersama Falaah Digital Solutions. Layanan website, mobile app, UI/UX design, dan konsultasi IT berkualitas.",
    images: ["/og-image.jpg"],
    creator: "@falaahdigitalsolutions",
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://falaahdigitalsolutions.com",
    languages: {
      "id-ID": "https://falaahdigitalsolutions.com/id",
      "en-US": "https://falaahdigitalsolutions.com",
    },
  },
  category: "technology",
};

export default function Home() {
  return (
    <>
      {/* hero */}
      <main className="min-h-[100dvh] px-7 sm:px-20 lg:px-28 xl:px-40 flex items-center justify-center bg-gradient-to-b from-blue-300/60 via-white to-white">
        <div className="flex flex-col-reverse md:flex-row items-center justify-around">
          <ScrollAnimation className="flex flex-col items-center md:items-start md:mr-10 lg:mr-14">
            <h1
              className="hidden md:block text-xl sm:text-2xl lg:text-3xl xl:text-5xl
max-w-2xl text-center md:text-start font-sora font-semibold 
text-transparent bg-clip-text bg-linear-135 pb-2 
from-gray-950 from-10% via-blue-700 via-30% to-gray-950 to-60% 
tracking-wide xl:leading-14
drop-shadow-[0_16px_8px_rgba(39,169,245,0.2)]"
            >
              Powering Your Digital Journey Forward
            </h1>

            <p className="max-w-2xl text-center md:text-left font-quicksand font-medium text-sm md:text-base lg:text-lg mt-1">
              Falaah Digital Solutions hadir sebagai mitra transformasi digital
              dengan pengembangan aplikasi disesuaikan, desain UI/UX, dan
              layanan konsultasi teknologi yang terjangkau dan dapat.
            </p>
            <Link href="#our-services">
              <button className="rounded-full text-blue-900 border-2 border-blue-900 px-5 py-2 font-montserrat font-bold mt-5 cursor-pointer transition hover:bg-blue-900 text-sm md:text-base hover:text-gray-50 flex gap-1 items-center">
                Lihat layanan kami <MdKeyboardArrowRight />
              </button>
            </Link>
          </ScrollAnimation>
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
          <ScrollAnimation>
            <h1 className="md:hidden mt-32 text-2xl max-w-3xl text-center md:text-start font-sora font-bold text-transparent bg-clip-text bg-linear-135 pb-2 from-gray-950 from-10% via-blue-700 via-30% to-gray-950 to-60% ">
              Powering Your Digital Journey Forward
            </h1>
          </ScrollAnimation>
        </div>
      </main>

      {/* plans */}
      <section
        id="our-services"
        className="pb-24 pt-20 md:pt-10 sm:px-14 md:px-16 lg:px-20"
      >
        <div className="max-w-7xl mx-auto">
          {/* 4 services */}
          <div className="flex justify-around px-7 sm:px-0 items-center w-full gap-4 md:gap-8 lg:gap-16 xl:gap-24">
            <ScrollAnimation className="mt-20 flex flex-col items-center group">
              <div className="relative">
                <img
                  src="/smartphone.png"
                  className="shrink-0 h-16 sm:h-24 md:h-32 lg:h-48 w-auto relative z-10 transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-2 drop-shadow-[-30px_40px_30px_rgba(16,185,129,0.25)] group-hover:drop-shadow-none"
                />
                <div className="absolute inset-0 bg-emerald-400/0 rounded-full blur-xl transition-all duration-500 group-hover:bg-emerald-400/20 scale-150"></div>
              </div>
              <p className="mt-3 font-sora text-xs md:text-base lg:text-lg text-gray-600 group-hover:text-emerald-700 transition-all duration-300 font-medium tracking-wide text-center">
                Mobile App
              </p>
              <span className="w-0 group-hover:w-12 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 transition-all duration-300 mt-1 rounded-full"></span>
            </ScrollAnimation>

            <ScrollAnimation className="-mt-10 flex flex-col items-center group">
              <div className="relative">
                <img
                  src="/ux-design.png"
                  alt="UI/UX Design"
                  className="shrink-0 h-16 sm:h-24 md:h-32 lg:h-48 w-auto relative z-10 transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-2 drop-shadow-[-35px_45px_35px_rgba(16,185,129,0.25)] group-hover:drop-shadow-none"
                />
                <div className="absolute inset-0 bg-emerald-400/0 rounded-full blur-xl transition-all duration-500 group-hover:bg-emerald-400/20 scale-150"></div>
              </div>
              <p className="mt-3 font-sora text-gray-600 group-hover:text-emerald-700 transition-all duration-300 font-medium tracking-wide text-center text-xs md:text-base lg:text-lg">
                UI/UX Design
              </p>
              <span className="w-0 group-hover:w-12 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 transition-all duration-300 mt-1 rounded-full"></span>
            </ScrollAnimation>

            <ScrollAnimation className="-mt-20 flex flex-col items-center group">
              <div className="relative">
                <img
                  src="/app.png"
                  title="Web Application"
                  className="shrink-0 h-16 sm:h-24 md:h-32 lg:h-48 w-auto relative z-10 transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-2 drop-shadow-[35px_45px_35px_rgba(16,185,129,0.25)] group-hover:drop-shadow-none"
                />
                <div className="absolute inset-0 bg-emerald-400/0 rounded-full blur-xl transition-all duration-500 group-hover:bg-emerald-400/20 scale-150"></div>
              </div>
              <p className="mt-3 font-sora text-gray-600 group-hover:text-emerald-700 transition-all duration-300 font-medium tracking-wide text-center text-xs md:text-base lg:text-lg">
                Web Application
              </p>
              <span className="w-0 group-hover:w-12 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 transition-all duration-300 mt-1 rounded-full"></span>
            </ScrollAnimation>

            <ScrollAnimation className="mt-10 flex flex-col items-center group">
              <div className="relative">
                <img
                  src="/consultant.png"
                  title="IT Consulting"
                  className="shrink-0 h-16 sm:h-24 md:h-32 lg:h-48w-auto relative z-10 transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-2 drop-shadow-[40px_50px_40px_rgba(16,185,129,0.25)] group-hover:drop-shadow-none"
                />
                <div className="absolute inset-0 bg-emerald-400/0 rounded-full blur-xl transition-all duration-500 group-hover:bg-emerald-400/20 scale-150"></div>
              </div>
              <p className="mt-3 font-sora text-gray-600 group-hover:text-emerald-700 transition-all duration-300 font-medium tracking-wide text-center text-xs md:text-base lg:text-lg">
                IT Consulting
              </p>
              <span className="w-0 group-hover:w-12 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 transition-all duration-300 mt-1 rounded-full"></span>
            </ScrollAnimation>
          </div>

          <ScrollAnimation className="text-center mb-12 px-7 sm:px-0">
            <h2 className="font-sora text-2xl md:text-3xl lg:text-4xl font-bold text-blue-900">
              Paket Kami
            </h2>
            <p className="font-manrope text-gray-700 mt-2 max-w-2xl mx-auto text-sm md:text-base">
              Pilih paket yang sesuai dengan kebutuhan dan anggaran Anda. Semua
              paket mencakup komitmen kami terhadap kualitas dan pengiriman
              tepat waktu.
            </p>
          </ScrollAnimation>

          <PlanSection
            plans={plans}
            commonBenefits={commonBenefits}
            uiuxContent={indonesianContent.uiuxContent}
            itConsultingContent={indonesianContent.itConsultingContent}
            commonSectionContent={indonesianContent.commonSectionContent}
          />
        </div>
      </section>

      {/* projects */}
      <section
        className="relative bg-blue-400/90 sm:px-14 md:px-16 lg:px-20 py-14"
        id="projects"
      >
        <div className="flex flex-col">
          <ScrollAnimation>
            <h1 className="text-3xl md:text-4xl lg:text-5xl text-white font-bold font-sora mb-5 px-7 sm:px-0">
              Wujudkan ide menjadi{" "}
              <span className="text-green-200">solusi nyata</span> - <br />{" "}
              Jelajahi karya kami
            </h1>
          </ScrollAnimation>
          <ScrollAnimation className="mb-10">
            <Link
              href="/id/portfolio"
              className="text-sm md:text-base font-poppins font-semibold underline text-white transition hover:text-green-300 px-7 sm:px-0"
            >
              Lihat portofolio kami
            </Link>
          </ScrollAnimation>

          {/* show projects vertically (overflow x) */}
          <ProjectsCarousel projects={projects} />
        </div>
      </section>

      {/* about us */}
      <section
        id="about-us"
        className="bg-white py-24 px-7 sm:px-20 relative overflow-hidden"
      >
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-emerald-100 rounded-full opacity-20 blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Main content - redesigned layout */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-24">
            <ScrollAnimation className="relative order-2 lg:order-1">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-100 rounded-lg -z-10"></div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-emerald-100 rounded-lg -z-10"></div>
                <img
                  src="/about-us.png"
                  alt="About Falaah Digital Solutions"
                  className="w-full h-[400px] md:h-[500px] object-cover rounded-2xl shadow-2xl"
                />
              </div>
            </ScrollAnimation>

            <ScrollAnimation className="order-1 lg:order-2">
              <ScrollAnimation className="mb-8">
                <span className="text-blue-600 font-semibold font-montserrat text-sm tracking-wider uppercase">
                  Tentang Kami
                </span>
                <h2 className="font-sora text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mt-3 mb-4">
                  Behind the Build
                </h2>
              </ScrollAnimation>
              <div className="space-y-6">
                <p className="text-lg md:text-xl text-gray-900 font-manrope leading-relaxed">
                  Falaah Digital Solutions adalah mitra tepercaya dalam
                  transformasi digital bisnis Anda. Kami menyediakan layanan
                  pengembangan aplikasi yang fleksibel dan terjangkau, desain
                  UI/UX yang menarik, dan konsultasi teknologi strategis.
                </p>
                <p className="text-lg md:text-xl text-gray-900 font-manrope leading-relaxed">
                  Dengan tim profesional dan pendekatan yang berpusat pada
                  klien, kami berkomitmen untuk membantu Anda tumbuh dan
                  beradaptasi di era digital.
                  <span className="block mt-4 font-semibold text-blue-600">
                    Kami percaya bahwa teknologi bukan hanya tentang perangkat
                    lunak, tetapi tentang memberikan solusi nyata yang mendorong
                    pertumbuhan dan efisiensi.
                  </span>
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>
    </>
  );
}

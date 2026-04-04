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

import Carousel from "./components/Carousel";
import ScrollAnimation from "./components/layouts/ScrollAnimation";
import PlanSection from "./components/subsections/PlanSection";
import ProjectsCarousel from "./components/subsections/ProjectsCarousel";

interface Plan {
  name: string;
  price: string;
  description: string;
  benefits: string[];
  isPopular?: boolean;
  serviceType: "Website" | "UI/UX Design" | "Mobile App" | "IT Consulting";
}

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

const plans: Plan[] = [
  // 🌐 WEBSITE
  {
    name: "Starter",
    price: "Rp500.000",
    description:
      "Perfect starting point for personal branding or small business presence",
    benefits: [
      "1-page responsive landing page",
      "Custom modern UI design",
      "Free subdomain setup (optional)",
      "Deployment & hosting guidance",
    ],
    serviceType: "Website",
  },
  {
    name: "Growth",
    price: "Rp1.000.000",
    description:
      "Ideal for growing businesses that need a strong online presence",
    benefits: [
      "Up to 5 pages",
      "Fully custom UI/UX design",
      "CMS integration (WordPress / Headless CMS)",
      "Contact forms & basic automation",
    ],
    isPopular: true,
    serviceType: "Website",
  },
  {
    name: "Scale",
    price: "Rp5.000.000+",
    description:
      "Advanced website solution for serious businesses and scaling needs",
    benefits: [
      "Up to 10+ pages with complex structure",
      "Custom UI/UX + design system",
      "Advanced CMS / dashboard integration",
      "API integration (payment, third-party tools)",
    ],
    serviceType: "Website",
  },

  // 📱 MOBILE APP
  {
    name: "Starter (MVP)",
    price: "Rp20jt",
    description: "Launch your idea quickly with core features",
    benefits: [
      "1 platform (Android / iOS)",
      "Up to 5 core screens",
      "Basic UI implementation",
      "Simple backend integration",
      "Authentication (login/register)",
      "Basic API integration",
      "Testing & bug fixing",
      "App deployment assistance",
    ],
    serviceType: "Mobile App",
  },
  {
    name: "Growth",
    price: "Rp60jt",
    description: "Robust app for growing business needs",
    benefits: [
      "Cross-platform (Flutter / React Native)",
      "10–15 screens",
      "Custom UI/UX implementation",
      "Push notifications",
      "User authentication & roles",
      "Admin panel / dashboard",
      "API & database integration",
      "Testing & optimization",
      "App store publishing support",
    ],
    isPopular: true,
    serviceType: "Mobile App",
  },
  {
    name: "Scale",
    price: "Rp120jt+",
    description: "High-performance, scalable mobile solution",
    benefits: [
      "Advanced multi-platform app",
      "Complex features & integrations",
      "Real-time data sync",
      "Scalable backend architecture",
      "Advanced security implementation",
      "Performance optimization",
      "Full QA testing",
      "Documentation",
      "1–3 months maintenance support",
    ],
    serviceType: "Mobile App",
  },
];
const commonBenefits = [
  {
    icon: <HiOutlineGlobeAlt className="text-2xl" />,
    title: "SEO Optimization",
    description: "Basic on-page SEO setup for better search visibility",
  },
  {
    icon: <HiOutlineDeviceMobile className="text-2xl" />,
    title: "Mobile Friendly",
    description: "Fully responsive design that works on all devices",
  },
  {
    icon: <HiOutlineLockClosed className="text-2xl" />,
    title: "SSL Encrypted",
    description: "Free SSL certificate for secure connections",
  },
  {
    icon: <HiOutlineUserGroup className="text-2xl" />,
    title: "Technical Support",
    description: "Dedicated technical assistance throughout development",
  },
  {
    icon: <HiOutlineShare className="text-2xl" />,
    title: "Social Media Integration",
    description: "Connect and integrate with major social platforms",
  },
  {
    icon: <HiOutlineChartBar className="text-2xl" />,
    title: "Performance Optimized",
    description: "Fast loading speeds and optimized performance",
  },
  {
    icon: <HiOutlineClock className="text-2xl" />,
    title: "24/7 Maintenance",
    description: "Regular updates and monitoring",
  },
  {
    icon: <HiOutlineShieldCheck className="text-2xl" />,
    title: "Security Best Practices",
    description: "Implementation of security standards and protocols",
  },
];
const englishContent = {
  uiuxContent: {
    heroTitle: "UI/UX Design",
    heroHighlight: "Design as you want,",
    heroDescription: "Starting at Rp50.000 only",
    priceText: "Custom designs tailored to your needs",
    features: {
      deepDiscovery: {
        title: "Deep Discovery",
        description:
          "Understanding your users, goals, and market through research and interviews.",
      },
      wireframing: {
        title: "Wireframing & Prototyping",
        description: "From sketches to interactive prototypes that feel real.",
      },
      modernUI: {
        title: "Modern UI Design",
        description:
          "Clean, aesthetic, and trend-forward designs that captivate users.",
      },
      userTesting: {
        title: "User Testing",
        description:
          "Validate designs with real users to ensure delightful experiences.",
      },
    },
    ctaButton: "Get started",
  },
  itConsultingContent: {
    heroTitle: "IT Consulting",
    heroHighlight: "Consultation for your digital needs.",
    heroDescription: "Starting at absolute 0 cost",
    features: {
      techStack: {
        title: "Tech Stack Advisory",
        description:
          "Get recommendations on the best technologies for your project.",
      },
      feasibility: {
        title: "Project Feasibility",
        description:
          "We'll analyze if your idea is technically and economically viable.",
      },
      architecture: {
        title: "Architecture Planning",
        description:
          "Guidance on system architecture and scalability from day one.",
      },
    },
    ctaButton: "Start Consulting",
  },
  commonSectionContent: {
    title: "All plans already included",
    additionalInfo:
      "* All services include these core features. Need something specific?",
    ctaLinkText: "Let's discuss your requirements",
    scrollHintText: "Swipe to see more",
    popularBadge: "POPULAR",
    getStartedButton: "Get Started",
  },
};

export const metadata: Metadata = {
  title: "Falaah Digital Solutions | Trusted Digital Solutions Provider",
  description:
    "Falaah Digital Solutions is a trusted digital agency offering website development, mobile app creation, UI/UX design, and IT consulting services to help businesses thrive in the digital era.",
  keywords: [
    "website development",
    "mobile app development",
    "UI/UX design",
    "IT consulting",
    "digital agency",
    "web development services",
    "app development",
    "digital transformation",
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
    title: "Falaah Digital Solutions | Trusted Digital Solutions Provider",
    description:
      "Transform your ideas into real solutions with Falaah Digital Solutions. Expert in website development, mobile apps, UI/UX design, and IT consulting.",
    url: "https://falaahdigitalsolutions.com",
    siteName: "Falaah Digital Solutions",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Falaah Digital Solutions - Trusted Digital Solutions Provider",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Falaah Digital Solutions | Trusted Digital Solutions Provider",
    description:
      "Transform your ideas into real solutions with Falaah Digital Solutions. Expert in website development, mobile apps, UI/UX design, and IT consulting.",
    images: ["/og-image.jpg"],
    creator: "@falaahdigitalsolutions",
  },
  alternates: {
    canonical: "https://falaahdigitalsolutions.com",
    languages: {
      "en-US": "https://falaahdigitalsolutions.com",
      "id-ID": "https://falaahdigitalsolutions.com/id",
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
              Falaah Digital Solutions is here as a digital transformation
              partner with affordable and customizable application development,
              UI/UX design, and technology consulting services.
            </p>
            <Link href="#our-services">
              <button className="rounded-full text-blue-900 border-2 border-blue-900 px-5 py-2 font-poppins font-bold mt-5 cursor-pointer transition hover:bg-blue-900 text-sm md:text-base hover:text-gray-50 flex gap-1 items-center">
                Get in touch <MdKeyboardArrowRight />
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
              Our Plans
            </h2>
            <p className="font-manrope text-gray-700 mt-2 max-w-2xl mx-auto text-sm md:text-base">
              Choose a plan that fits your needs and budget. All plans include
              our commitment to quality and timely delivery.
            </p>
          </ScrollAnimation>

          <PlanSection
            plans={plans}
            commonBenefits={commonBenefits}
            uiuxContent={englishContent.uiuxContent}
            itConsultingContent={englishContent.itConsultingContent}
            commonSectionContent={englishContent.commonSectionContent}
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
              Turning ideas into{" "}
              <span className="text-green-200">real solution</span> - <br />{" "}
              Explore our creations
            </h1>
          </ScrollAnimation>
          <ScrollAnimation className="mb-10">
            <Link
              href="/portfolio"
              className="text-sm md:text-base font-poppins font-semibold underline text-white transition hover:text-green-300 px-7 sm:px-0"
            >
              View all portfolios
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
            {/* Image with modern styling */}
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

            {/* Text content */}
            <ScrollAnimation className="order-1 lg:order-2">
              <ScrollAnimation className="mb-8">
                <span className="text-blue-600 font-semibold font-montserrat text-sm tracking-wider uppercase">
                  About Us
                </span>
                <h2 className="font-sora text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mt-3 mb-4">
                  Behind the Build
                </h2>
              </ScrollAnimation>
              <div className="space-y-6">
                <p className="text-lg md:text-xl text-gray-900 font-manrope leading-relaxed">
                  Falaah Digital Solutions is a trusted partner in your business
                  digital transformation. We provide flexible and affordable
                  application development services, compelling UI/UX design, and
                  strategic technology consulting.
                </p>
                <p className="text-lg md:text-xl text-gray-900 font-manrope leading-relaxed">
                  With a professional team and a client-centric approach, we are
                  committed to helping you grow and adapt in the digital era.
                  <span className="block mt-4 font-semibold text-blue-600">
                    We believe that technology is not just about software, but
                    about delivering real solutions that drive growth and
                    efficiency.
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

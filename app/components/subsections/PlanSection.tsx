"use client";

import { useState } from "react";
import { MdCheckCircle, MdOutlineDesignServices } from "react-icons/md";
import { FaWhatsapp, FaLightbulb } from "react-icons/fa6";
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
import { BiConversation, BiGroup, BiHappy } from "react-icons/bi";
import { TbBrandFigma, TbLayoutGridAdd } from "react-icons/tb";
import ScrollAnimation from "../layouts/ScrollAnimation";
import { FaChevronRight, FaHandshake } from "react-icons/fa";

interface Plan {
  name: string;
  price: string;
  description: string;
  benefits: string[];
  isPopular?: boolean;
  serviceType: "Website" | "UI/UX Design" | "Mobile App" | "IT Consulting";
}

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

const serviceCategories = [
  "Website",
  "Mobile App",
  "UI/UX Design",
  "IT Consulting",
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

export default function PlanSection() {
  const [activeCategory, setActiveCategory] = useState<string>("Website");

  const filteredPlans = plans.filter(
    (plan) => plan.serviceType === activeCategory,
  );

  const renderContent = () => {
    //ui/ux
    if (activeCategory === "UI/UX Design") {
      return (
        <div key={`uiux-${activeCategory}`}>
          <ScrollAnimation className="space-y-8 px-7 sm:px-0">
            {/* Hero Section */}
            <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-emerald-50 rounded-3xl p-12 border border-blue-100 mb-6">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-200 rounded-full opacity-20 translate-x-32 -translate-y-32"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-emerald-200 rounded-full opacity-20 -translate-x-24 translate-y-24"></div>

              <div className="relative z-10 text-center max-w-3xl mx-auto">
                <div className="inline-flex items-center justify-center p-4 mb-6">
                  <MdOutlineDesignServices className="text-4xl text-blue-600" />
                </div>
                <h2 className="text-xl md:text-2xl lg:text-4xl font-sora font-bold text-gray-800 mb-4">
                  <span className="bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
                    UI/UX Design
                  </span>
                </h2>
                <p className="text-base md:text-lg lg:text-xl text-gray-700 font-manrope mb-3">
                  <span className="font-semibold text-blue-600">
                    Design as you want,
                  </span>{" "}
                  Starting at Rp50.000 only
                </p>
              </div>
            </div>

            {/* What we offer */}
            <div className="grid grid-cols-2 gap-4 md:gap-6 mb-8">
              <ScrollAnimation
                delay={0.1}
                className="bg-white p-3 md:p-6 rounded-xl border border-gray-200 hover:shadow-lg transition"
              >
                <div className="text-blue-600 bg-blue-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <BiConversation className="text-base md:text-xl lg:text-2xl" />
                </div>
                <h3 className="text-sm md:text-base font-sora font-semibold text-gray-800 mb-2">
                  Deep Discovery
                </h3>
                <p className="text-gray-600 font-manrope text-xs md:text-sm">
                  Understanding your users, goals, and market through research
                  and interviews.
                </p>
              </ScrollAnimation>

              <ScrollAnimation
                delay={0.2}
                className="bg-white p-3 md:p-6 rounded-xl border border-gray-200 hover:shadow-lg transition"
              >
                <div className="text-blue-600 bg-blue-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <TbLayoutGridAdd className="text-base md:text-xl lg:text-2xl" />
                </div>
                <h3 className="text-sm md:text-base font-sora font-semibold text-gray-800 mb-2">
                  Wireframing & Prototyping
                </h3>
                <p className="text-gray-600 font-manrope text-xs md:text-sm">
                  From sketches to interactive prototypes that feel real.
                </p>
              </ScrollAnimation>

              <ScrollAnimation
                delay={0.3}
                className="bg-white p-3 md:p-6 rounded-xl border border-gray-200 hover:shadow-lg transition"
              >
                <div className="text-blue-600 bg-blue-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <TbBrandFigma className="text-base md:text-xl lg:text-2xl" />
                </div>
                <h3 className="text-sm md:text-base font-sora font-semibold text-gray-800 mb-2">
                  Modern UI Design
                </h3>
                <p className="text-gray-600 font-manrope text-xs md:text-sm">
                  Clean, aesthetic, and trend-forward designs that captivate
                  users.
                </p>
              </ScrollAnimation>

              <ScrollAnimation
                delay={0.4}
                className="bg-white p-3 md:p-6 rounded-xl border border-gray-200 hover:shadow-lg transition"
              >
                <div className="text-blue-600 bg-blue-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <BiHappy className="text-base md:text-xl lg:text-2xl" />
                </div>
                <h3 className="text-sm md:text-base font-sora font-semibold text-gray-800 mb-2">
                  User Testing
                </h3>
                <p className="text-gray-600 font-manrope text-xs md:text-sm">
                  Validate designs with real users to ensure delightful
                  experiences.
                </p>
              </ScrollAnimation>
            </div>

            {/* CTA */}
            <ScrollAnimation delay={0.5} className="text-center">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-emerald-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition cursor-pointer group">
                <a
                  href="https://wa.me/6282274016977"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <FaWhatsapp className="text-lg md:text-xl" />
                  <span className="text-sm md:text-base font-poppins">
                    Get started
                  </span>
                  <span className="group-hover:translate-x-1 transition">
                    →
                  </span>
                </a>
              </div>
            </ScrollAnimation>
          </ScrollAnimation>
        </div>
      );
    }

    //it consulting
    if (activeCategory === "IT Consulting") {
      return (
        <div key={`it-${activeCategory}`}>
          <ScrollAnimation className="space-y-8 px-7 sm:px-0">
            {/* Free Service Hero */}
            <div className="relative overflow-hidden bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-12 border border-green-100 mb-6">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-green-200 rounded-full opacity-20 translate-x-32 -translate-y-32"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-emerald-200 rounded-full opacity-20 -translate-x-24 translate-y-24"></div>

              <div className="relative z-10 text-center max-w-3xl mx-auto">
                <div className="inline-flex items-center justify-center p-4 mb-6">
                  <FaHandshake className="text-4xl text-blue-600 rotate-45" />
                </div>
                <h2 className="text-xl md:text-2xl lg:text-4xl font-sora font-bold text-gray-800 mb-4">
                  <span className="bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
                    IT Consulting
                  </span>
                </h2>
                <p className="text-base md:text-lg lg:text-xl text-gray-700 font-manrope mb-6">
                  <span className="font-sora text-green-600">
                    Totally free.
                  </span>{" "}
                  No charges
                </p>
              </div>
            </div>

            {/* What we offer for free */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-8">
              <ScrollAnimation
                delay={0.1}
                className="bg-white p-3 md:p-6  rounded-xl border border-gray-200 hover:shadow-lg transition"
              >
                <div className="text-green-600 bg-green-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <FaLightbulb className="text-base md:text-xl lg:text-2xl" />
                </div>
                <h3 className="text-sm md:text-base font-sora font-semibold text-gray-800 mb-2">
                  Tech Stack Advisory
                </h3>
                <p className="text-gray-700 font-manrope text-xs md:text-sm">
                  Get recommendations on the best technologies for your project.
                </p>
              </ScrollAnimation>

              <ScrollAnimation
                delay={0.2}
                className="bg-white p-3 md:p-6  rounded-xl border border-gray-200 hover:shadow-lg transition"
              >
                <div className="text-green-600 bg-green-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <HiOutlineChartBar className="text-base md:text-xl lg:text-2xl" />
                </div>
                <h3 className="text-sm md:text-base font-sora font-semibold text-gray-800 mb-2">
                  Project Feasibility
                </h3>
                <p className="text-gray-700 font-manrope text-xs md:text-sm">
                  We&apos;ll analyze if your idea is technically and economically
                  viable.
                </p>
              </ScrollAnimation>

              <ScrollAnimation
                delay={0.3}
                className="bg-white p-3 md:p-6  rounded-xl border border-gray-200 hover:shadow-lg transition"
              >
                <div className="text-green-600 bg-green-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <BiGroup className="text-base md:text-xl lg:text-2xl" />
                </div>
                <h3 className="text-sm md:text-base font-sora font-semibold text-gray-800 mb-2">
                  Architecture Planning
                </h3>
                <p className="text-gray-700 font-manrope text-xs md:text-sm">
                  Guidance on system architecture and scalability from day one.
                </p>
              </ScrollAnimation>
            </div>

            {/* CTA */}
            <ScrollAnimation delay={0.4} className="text-center">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition cursor-pointer group">
                <a
                  href="https://wa.me/6282274016977"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <FaWhatsapp className="text-lg md:text-xl" />
                  <span className="text-sm md:text-base font-poppins">
                    Start Consulting
                  </span>
                  <span className="group-hover:translate-x-1 transition">
                    →
                  </span>
                </a>
              </div>
            </ScrollAnimation>
          </ScrollAnimation>
        </div>
      );
    }

    //website/mobile
    return (
      <div key={`plans-${activeCategory}`}>
        {/* Horizontal scroll container */}
        <div className="overflow-x-auto overflow-y-hidden pb-4 py-3 mb-12 scrollbar-thin scrollbar-thumb-blue-300 scrollbar-track-gray-100">
          <div className="flex gap-6 min-w-max pl-3 sm:pl-0">
            {filteredPlans.map((plan, index) => (
              <ScrollAnimation key={index} delay={index * 0.1}>
                <div
                  className={`relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition p-6 w-[280px] md:w-[360px] h-full flex flex-col ${
                    plan.isPopular
                      ? "border-blue-500 ring-2 ring-blue-200"
                      : "border-gray-200"
                  }`}
                >
                  {plan.isPopular && (
                    <span className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
                      POPULAR
                    </span>
                  )}

                  {/* Content wrapper with flex column to push button to bottom */}
                  <div className="flex flex-col h-full">
                    <div className="flex-1">
                      <h3 className="font-sora text-lg md:text-xl font-bold text-gray-800 mb-1">
                        {plan.name}
                      </h3>
                      <p className="text-gray-700 font-manrope text-xs md:text-sm mb-3 min-h-[40px] md:min-h-[48px]">
                        {plan.description}
                      </p>
                      <p className="text-lg lg:text-2xl font-quicksand font-bold text-blue-800 mb-4">
                        {plan.price}
                      </p>
                      <ul className="space-y-2 mb-6">
                        {plan.benefits.map((benefit, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-gray-700"
                          >
                            <MdCheckCircle className="text-emerald-500 text-lg flex-shrink-0 mt-0.5" />
                            <span className="font-manrope text-xs md:text-sm">
                              {benefit}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Button stays at bottom */}
                    <a
                      href="https://wa.me/6282274016977"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block mt-auto"
                    >
                      <button className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-poppins font-semibold py-2 px-4 rounded-lg transition text-sm md:text-base">
                        <FaWhatsapp /> Get Started
                      </button>
                    </a>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>

        {/* Scroll Hint for Mobile */}
        <ScrollAnimation className="flex md:hidden items-center justify-center gap-2 mt-3 text-gray-700">
          <span className="text-xs font-poppins">Swipe to see more</span>
          <FaChevronRight className="w-4 h-4" />
        </ScrollAnimation>

        {/* Common Benefits Section (shown for all categories) */}
        <ScrollAnimation className="mt-16">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-5 sm:p-8 md:p-10 border border-blue-100">
            <div className="text-center mb-10">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-sora font-bold text-gray-800 mb-3">
                All plans already included
              </h2>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
              {commonBenefits.map((benefit, index) => (
                <ScrollAnimation
                  key={index}
                  delay={index * 0.05}
                  className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition border border-gray-100 h-full"
                >
                  <div className="text-blue-600 mb-3 text-sm sm:text-base">
                    {benefit.icon}
                  </div>
                  <h3 className="font-sora font-semibold text-gray-800 mb-1 text-sm sm:text-base">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 font-manrope text-xs sm:text-sm">
                    {benefit.description}
                  </p>
                </ScrollAnimation>
              ))}
            </div>

            {/* Additional info */}
            <div className="mt-8 text-center">
              <p className="text-sm text-gray-600 font-manrope">
                * All services include these core features. Need something
                specific?
                <a
                  href="https://wa.me/6282274016977"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 font-medium ml-1"
                >
                  Let&apos;s discuss your requirements
                </a>
              </p>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    );
  };

  return (
    <>
      {/* Category Tabs */}
      <ScrollAnimation className="flex flex-wrap justify-center gap-2 md:gap-4 mb-10 px-7 sm:px-0">
        {serviceCategories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-full font-poppins font-medium text-sm md:text-base transition ${
              activeCategory === category
                ? "bg-blue-700 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {category}
          </button>
        ))}
      </ScrollAnimation>

      {/* Dynamic Content */}
      {renderContent()}
    </>
  );
}

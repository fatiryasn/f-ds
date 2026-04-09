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

// Types
export interface Plan {
  name: string;
  price: string;
  description: string;
  benefits: string[];
  isPopular?: boolean;
  serviceType: "Website" | "UI/UX Design" | "Mobile App" | "IT Consulting";
}

export interface CommonBenefit {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface UIUXContent {
  heroTitle: string;
  heroHighlight: string;
  heroDescription: string;
  features: {
    deepDiscovery: {
      title: string;
      description: string;
    };
    wireframing: {
      title: string;
      description: string;
    };
    modernUI: {
      title: string;
      description: string;
    };
    userTesting: {
      title: string;
      description: string;
    };
  };
  ctaButton: string;
}

export interface ITConsultingContent {
  heroTitle: string;
  heroHighlight: string;
  heroDescription: string;
  features: {
    techStack: {
      title: string;
      description: string;
    };
    feasibility: {
      title: string;
      description: string;
    };
    architecture: {
      title: string;
      description: string;
    };
  };
  ctaButton: string;
}

export interface CommonSectionContent {
  title: string;
  additionalInfo: string;
  ctaLinkText: string;
  scrollHintText: string;
  popularBadge: string;
  getStartedButton: string;
}

interface PlanSectionProps {
  plans: Plan[];
  commonBenefits: CommonBenefit[];
  serviceCategories?: string[];
  whatsappNumber?: string;
  uiuxContent: UIUXContent;
  itConsultingContent: ITConsultingContent;
  commonSectionContent: CommonSectionContent;
}

const defaultServiceCategories = [
  "Website",
  "Mobile App",
  "UI/UX Design",
  "IT Consulting",
];

export default function PlanSection({
  plans,
  commonBenefits,
  serviceCategories = defaultServiceCategories,
  whatsappNumber = "6282274016977",
  uiuxContent,
  itConsultingContent,
  commonSectionContent,
}: PlanSectionProps) {
  const [activeCategory, setActiveCategory] = useState<string>(
    serviceCategories[0] || "Website",
  );

  const filteredPlans = plans.filter(
    (plan) => plan.serviceType === activeCategory,
  );

  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  const renderContent = () => {
    // UI/UX Design
    if (activeCategory === "UI/UX Design") {
      return (
        <div key={`uiux-${activeCategory}`}>
          <ScrollAnimation className="space-y-8 px-7 sm:px-0">
            {/* Hero Section */}
            <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-emerald-50 rounded-3xl p-12 border border-blue-100 mb-6">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-200 rounded-full opacity-20 translate-x-32 -translate-y-32"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-emerald-200 rounded-full opacity-20 -translate-x-24 translate-y-24"></div>

              <div className="relative z-10 text-center max-w-3xl mx-auto">
                <div className="inline-flex items-center justify-center p-4 mb-6">
                  <MdOutlineDesignServices className="text-4xl text-blue-600" />
                </div>
                <h2 className="text-xl md:text-2xl lg:text-4xl font-sora font-bold text-gray-800 mb-4">
                  <span className="bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
                    {uiuxContent.heroTitle}
                  </span>
                </h2>
                <p className="text-base md:text-lg lg:text-xl text-gray-700 font-manrope mb-3">
                  <span className="font-semibold text-blue-600">
                    {uiuxContent.heroHighlight}
                  </span>{" "}
                  {uiuxContent.heroDescription}
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
                  {uiuxContent.features.deepDiscovery.title}
                </h3>
                <p className="text-gray-600 font-manrope text-xs md:text-sm">
                  {uiuxContent.features.deepDiscovery.description}
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
                  {uiuxContent.features.wireframing.title}
                </h3>
                <p className="text-gray-600 font-manrope text-xs md:text-sm">
                  {uiuxContent.features.wireframing.description}
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
                  {uiuxContent.features.modernUI.title}
                </h3>
                <p className="text-gray-600 font-manrope text-xs md:text-sm">
                  {uiuxContent.features.modernUI.description}
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
                  {uiuxContent.features.userTesting.title}
                </h3>
                <p className="text-gray-600 font-manrope text-xs md:text-sm">
                  {uiuxContent.features.userTesting.description}
                </p>
              </ScrollAnimation>
            </div>

            {/* CTA */}
            <ScrollAnimation delay={0.5} className="text-center">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-emerald-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition cursor-pointer group">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <FaWhatsapp className="text-lg md:text-xl" />
                  <span className="text-sm md:text-base font-poppins">
                    {uiuxContent.ctaButton}
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

    // IT Consulting
    if (activeCategory === "IT Consulting") {
      return (
        <div key={`it-${activeCategory}`}>
          <ScrollAnimation className="space-y-8 px-7 sm:px-0">
            {/* Free Service Hero */}
            <div className="relative overflow-hidden bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-12 border border-green-100 mb-6">
              <div className="absolute top-0 right-0 w-64 h-64 bg-green-200 rounded-full opacity-20 translate-x-32 -translate-y-32"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-emerald-200 rounded-full opacity-20 -translate-x-24 translate-y-24"></div>

              <div className="relative z-10 text-center max-w-3xl mx-auto">
                <div className="inline-flex items-center justify-center p-4 mb-6">
                  <FaHandshake className="text-4xl text-blue-600 rotate-45" />
                </div>
                <h2 className="text-xl md:text-2xl lg:text-4xl font-sora font-bold text-gray-800 mb-4">
                  <span className="bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
                    {itConsultingContent.heroTitle}
                  </span>
                </h2>
                <p className="text-base md:text-lg lg:text-xl text-gray-700 font-manrope mb-6">
                  <span className="font-sora text-green-600">
                    {itConsultingContent.heroHighlight}
                  </span>{" "}
                  {itConsultingContent.heroDescription}
                </p>
              </div>
            </div>

            {/* What we offer for free */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-8">
              <ScrollAnimation
                delay={0.1}
                className="bg-white p-3 md:p-6 rounded-xl border border-gray-200 hover:shadow-lg transition"
              >
                <div className="text-green-600 bg-green-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <FaLightbulb className="text-base md:text-xl lg:text-2xl" />
                </div>
                <h3 className="text-sm md:text-base font-sora font-semibold text-gray-800 mb-2">
                  {itConsultingContent.features.techStack.title}
                </h3>
                <p className="text-gray-700 font-manrope text-xs md:text-sm">
                  {itConsultingContent.features.techStack.description}
                </p>
              </ScrollAnimation>

              <ScrollAnimation
                delay={0.2}
                className="bg-white p-3 md:p-6 rounded-xl border border-gray-200 hover:shadow-lg transition"
              >
                <div className="text-green-600 bg-green-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <HiOutlineChartBar className="text-base md:text-xl lg:text-2xl" />
                </div>
                <h3 className="text-sm md:text-base font-sora font-semibold text-gray-800 mb-2">
                  {itConsultingContent.features.feasibility.title}
                </h3>
                <p className="text-gray-700 font-manrope text-xs md:text-sm">
                  {itConsultingContent.features.feasibility.description}
                </p>
              </ScrollAnimation>

              <ScrollAnimation
                delay={0.3}
                className="bg-white p-3 md:p-6 rounded-xl border border-gray-200 hover:shadow-lg transition"
              >
                <div className="text-green-600 bg-green-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <BiGroup className="text-base md:text-xl lg:text-2xl" />
                </div>
                <h3 className="text-sm md:text-base font-sora font-semibold text-gray-800 mb-2">
                  {itConsultingContent.features.architecture.title}
                </h3>
                <p className="text-gray-700 font-manrope text-xs md:text-sm">
                  {itConsultingContent.features.architecture.description}
                </p>
              </ScrollAnimation>
            </div>

            {/* CTA */}
            <ScrollAnimation delay={0.4} className="text-center">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition cursor-pointer group">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <FaWhatsapp className="text-lg md:text-xl" />
                  <span className="text-sm md:text-base font-poppins">
                    {itConsultingContent.ctaButton}
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

    // Website/Mobile App plans
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
                      {commonSectionContent.popularBadge}
                    </span>
                  )}

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

                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block mt-auto"
                    >
                      <button className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-poppins font-semibold py-2 px-4 rounded-lg transition text-sm md:text-base">
                        <FaWhatsapp /> {commonSectionContent.getStartedButton}
                      </button>
                    </a>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>

        {/* Scroll Hint for Mobile */}
        <ScrollAnimation className="flex md:hidden items-center justify-center gap-2 mt-2 text-gray-700">
          <span className="text-xs font-poppins">
            {commonSectionContent.scrollHintText}
          </span>
          <FaChevronRight className="w-4 h-4" />
        </ScrollAnimation>

        {/* Common Benefits Section */}
        <ScrollAnimation className="mt-16">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-5 sm:p-8 md:p-10 border border-blue-100">
            <div className="text-center mb-10">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-sora font-bold text-gray-800 mb-3">
                {commonSectionContent.title}
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
              <p className="text-xs md:text-sm text-gray-600 font-manrope">
                {commonSectionContent.additionalInfo}
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 font-medium ml-1"
                >
                  {commonSectionContent.ctaLinkText}
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

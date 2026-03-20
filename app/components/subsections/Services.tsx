"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface Service {
  icon: React.ReactNode;
  iconLarge: React.ReactNode;
  title: string;
  description: string;
  benefits: string[];
}

interface Props {
  services: Service[];
}

export default function ServicesInteractive({ services }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="flex flex-col-reverse items-center lg:flex-row justify-between md:items-start gap-10 mt-10">
      {/* Active service details */}
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

      {/* Service selector grid */}
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
              activeIndex === index ? "bg-cyan-100/20" : "hover:bg-cyan-100/10"
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
  );
}

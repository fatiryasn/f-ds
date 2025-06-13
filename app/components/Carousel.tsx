"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const images = [
  "/porlu-coffee-preview.png",
  "/pos-preview.png",
  "/bening-preview.png",
];

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const getIndex = (offset: number) => {
    return (activeIndex + offset + images.length) % images.length;
  };

  return (
    <div className="relative h-[500px] w-full max-w-xl flex items-center justify-center overflow-hidden">
      {[-1, 0, 1].map((offset) => {
        const index = getIndex(offset);

        // Layer properties
        const isCenter = offset === 0;
        const zIndex = isCenter ? 30 : 20 + offset;
        const scale = isCenter ? 1.3 : 0.85;
        const opacity = isCenter ? 1 : 0.4;
        const yOffset = offset * 160;

        return (
          <motion.div
            key={index}
            className="absolute w-3/4"
            style={{ zIndex }}
            initial={{ opacity: 0, scale: 0.8, y: yOffset }}
            animate={{ opacity, scale, y: yOffset }}
            transition={{
              duration: 0.6,
              ease: [0.4, 0, 0.2, 1],
            }}
          >
            <img
              src={images[index]}
              alt={`Slide ${index}`}
              className="w-full h-auto object-cover rounded-xl shadow-xl shadow-cyan-600/50"
            />
          </motion.div>
        );
      })}
    </div>
  );
};

export default Carousel;

"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useAnimationFrame } from "framer-motion";

const testimonialImages = [
  "/testimonials/testi_1.png",
  "/testimonials/testi_2.png",
  "/testimonials/testi_3.png",
  "/testimonials/testi_4.png",
  "/testimonials/testi_5.png",
  "/testimonials/testi_6.png",
  "/testimonials/testi_7.png",
];

export default function TestimonialImages() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const x = useMotionValue(0);
  const [setWidth, setSetWidth] = useState(0);

  useEffect(() => {
    const measure = () => {
      if (containerRef.current) {
        const children = containerRef.current.children;
        let totalWidth = 0;

        for (let i = 0; i < testimonialImages.length; i++) {
          const el = children[i] as HTMLElement;
          if (el) {
            const styles = window.getComputedStyle(el);
            totalWidth += el.offsetWidth + parseFloat(styles.marginRight);
          }
        }

        setSetWidth(totalWidth);
      }
    };

    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  useAnimationFrame((_, delta) => {
    if (!isHovered && setWidth > 0) {
      const speed = 50;
      const move = (speed * delta) / 1000;

      let newX = x.get() - move;

      if (newX <= -setWidth) {
        newX = 0; // reset cleanly
      }

      x.set(newX);
    }
  });

  const duplicated = [...testimonialImages, ...testimonialImages];

  return (
    <div className="relative w-full overflow-hidden py-10">
      <motion.div
        ref={containerRef}
        style={{ x }}
        className="flex gap-6 md:gap-8 lg:gap-10"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {duplicated.map((src, index) => (
          <div
            key={index}
            className="flex-shrink-0 h-[300px] md:h-[360px] lg:h-[420px]"
          >
            <img
              src={src}
              alt=""
              className="h-full w-auto object-contain rounded-2xl shadow-xl"
              draggable={false}
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

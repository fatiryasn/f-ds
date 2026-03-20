// components/layouts/ScrollAnimation.tsx
"use client";

import { ReactNode } from "react";
import { useInView } from "react-intersection-observer";

interface Props {
  children: ReactNode;
  className?: string;
  direction?: "up" | "down" | "left" | "right" | "none";
  delay?: number;
  duration?: number;
  threshold?: number;
}

export default function ScrollAnimation({
  children,
  className = "",
  direction = "up",
  delay = 0,
  duration = 700,
  threshold = 0.1,
}: Props) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold,
  });

  const getInitialTransform = () => {
    switch (direction) {
      case "up":
        return "translate-y-10";
      case "down":
        return "-translate-y-10";
      case "left":
        return "translate-x-10";
      case "right":
        return "-translate-x-10";
      case "none":
        return "";
      default:
        return "translate-y-10";
    }
  };

  const getVisibleTransform = () => {
    switch (direction) {
      case "up":
      case "down":
        return "translate-y-0";
      case "left":
      case "right":
        return "translate-x-0";
      case "none":
        return "";
      default:
        return "translate-y-0";
    }
  };

  return (
    <div
      ref={ref}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
      className={`transition-all ease-out ${
        inView
          ? `opacity-100 ${getVisibleTransform()}`
          : `opacity-0 ${getInitialTransform()}`
      } ${className}`}
    >
      {children}
    </div>
  );
}

"use client";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useRef } from "react";
import ScrollAnimation from "../layouts/ScrollAnimation";

interface Project {
  title: string;
  image: string;
  link?: string;
  linkText?: string;
}

interface ProjectsCarouselProps {
  projects: Project[];
}

export default function ProjectsCarousel({ projects }: ProjectsCarouselProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      const currentScroll = scrollContainerRef.current.scrollLeft;
      const newScroll =
        direction === "left"
          ? currentScroll - scrollAmount
          : currentScroll + scrollAmount;

      scrollContainerRef.current.scrollTo({
        left: newScroll,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative group">
      {/* Navigation Buttons */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 hidden md:flex items-center justify-center w-10 h-10 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full shadow-lg transition-all opacity-0 group-hover:opacity-100 -ml-5"
        aria-label="Scroll left"
      >
        <FaChevronLeft className="text-sm" />
      </button>

      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 hidden md:flex items-center justify-center w-10 h-10 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full shadow-lg transition-all opacity-0 group-hover:opacity-100 -mr-5"
        aria-label="Scroll right"
      >
        <FaChevronRight className="text-sm" />
      </button>

      {/* Scrollable Container */}
      <div
        ref={scrollContainerRef}
        className="w-full overflow-x-auto overflow-y-hidden pb-8 scroll-container"
      >
        <ScrollAnimation delay={0.2}>
          <div className="flex gap-6 md:gap-8 min-w-max px-2">
            {projects.map((project, index) => (
              <div
                key={index}
                className="flex flex-col bg-emerald-400 rounded-b-lg rounded-t-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex justify-between px-3 py-4">
                  <h3 className="text-white font-bold font-sora text-base md:text-lg lg:text-xl">
                    {project.link ? (
                      <div className="flex gap-2 items-center hover:underline">
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {project.title}
                        </a>
                        <FaChevronRight className="text-sm" />
                      </div>
                    ) : (
                      project.title
                    )}
                  </h3>
                </div>
                <div>
                  <img
                    src={`/project-images${project.image}`}
                    alt={project.title}
                    className="rounded-lg object-cover h-56 w-[20rem] sm:h-64 sm:w-[23rem] md:h-72 md:w-[25rem] lg:h-80 lg:w-[30rem]"
                  />
                </div>
              </div>
            ))}
          </div>
        </ScrollAnimation>
      </div>

      {/* Scroll Hint for Mobile */}
      <ScrollAnimation
        delay={0.3}
        className="flex md:hidden items-center justify-center gap-2 mt-3 text-gray-100"
      >
        <span className="text-xs font-poppins">Swipe to see more</span>
        <FaChevronRight className="w-4 h-4 animate-swipe" />
      </ScrollAnimation>

      <style jsx>{`
        /* Custom scrollbar styling */
        .scroll-container {
          scrollbar-width: thin;
          scrollbar-color: #10b981 #1f2937;
        }

        .scroll-container::-webkit-scrollbar {
          height: 8px;
        }

        .scroll-container::-webkit-scrollbar-track {
          background: #1f2937;
          border-radius: 4px;
        }

        .scroll-container::-webkit-scrollbar-thumb {
          background: #10b981;
          border-radius: 4px;
          transition: background 0.2s;
        }

        .scroll-container::-webkit-scrollbar-thumb:hover {
          background: #059669;
        }

        /* Smooth scrolling */
        .scroll-container {
          -webkit-overflow-scrolling: touch;
          scroll-behavior: smooth;
        }

        /* Swipe animation */
        @keyframes swipe {
          0%,
          100% {
            transform: translateX(0);
            opacity: 0.5;
          }
          50% {
            transform: translateX(8px);
            opacity: 1;
          }
        }
        .animate-swipe {
          animation: swipe 1.5s infinite;
        }
      `}</style>
    </div>
  );
}

"use client";
import { FaChevronRight } from "react-icons/fa";
import ScrollAnimation from "../layouts/ScrollAnimation";

// Types
export interface Project {
  title: string;
  image: string;
  link?: string;
  linkText?: string;
}

interface ProjectCardProps {
  projects: Project[];
  animationDelay?: number; // optional: custom delay between animations
}

const ProjectCard = ({ projects, animationDelay = 0.5 }: ProjectCardProps) => {
  return (
    <>
      {projects.map((project, index) => (
        <ScrollAnimation
          key={index}
          direction="up"
          delay={index * animationDelay}
          duration={600}
        >
          <div className="flex flex-col bg-emerald-400 rounded-b-lg rounded-t-xl shadow-lg hover:shadow-xl transition-shadow w-full max-w-[20rem] sm:max-w-[24rem] md:max-w-[28rem] lg:max-w-[32rem] xl:max-w-[36rem]">
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
            <div className="">
              <img
                src={project.image}
                alt={project.title}
                className="rounded-lg object-cover w-full h-auto aspect-video"
              />
            </div>
          </div>
        </ScrollAnimation>
      ))}
    </>
  );
};

export default ProjectCard;

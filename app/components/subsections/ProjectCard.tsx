// components/subsections/ProjectCard.tsx
"use client";
import { FaChevronRight } from "react-icons/fa";
import ScrollAnimation from "../layouts/ScrollAnimation";

export interface Project {
  title?: string;
  image: string;
  link?: string;
  linkText?: string;
}

interface ProjectCardProps {
  project: Project;
  animationDelay?: number;
}

const ProjectCard = ({ project, animationDelay = 0 }: ProjectCardProps) => {
  return (
    <ScrollAnimation direction="up" delay={animationDelay} duration={600}>
      <div
        className={`flex flex-col bg-emerald-400 rounded-b-lg rounded-t-xl shadow-lg hover:shadow-2xl transition-shadow w-full group cursor-pointer`}
      >
        {project.title && (
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
        )}
        <div
          className={`overflow-hidden rounded-lg ${!project.title && "border-4 border-emerald-400 rounded-lg"}`}
        >
          <div className={`${!project.title && "rounded-lg"} overflow-hidden`}>
            <img
              src={`/project-images/${project.image}`}
              alt={project.title}
              className={`rounded-lg object-cover w-full h-auto max-h-96 ${project.title && "aspect-video"} transition-transform duration-500 ease-in-out group-hover:scale-105`}
            />
          </div>
        </div>
      </div>
    </ScrollAnimation>
  );
};

export default ProjectCard;

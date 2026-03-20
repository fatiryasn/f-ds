"use client";
import { FaChevronRight } from "react-icons/fa";
import ScrollAnimation from "./layouts/ScrollAnimation";

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
  {
    title: "Vigilanter",
    image: "/vigilanter-preview.jpg",
    link: "https://drive.google.com/file/d/1h7O_G6WEi3R5Is8QUbB8xjvk5CpV8gVZ/view",
  },
  {
    title: "TRIP Web Design",
    image: "/trip-preview.png",
    link: "https://www.figma.com/design/tpPPi8mH4n0vR1BKBb7Awm/TRIP?node-id=0-1&p=f&t=YmADZKrTubnLNv7b-0",
    linkText: "See figma design",
  },
];

const ProjectCard = () => {
  return (
    <>
      {projects.map((project, index) => (
        <ScrollAnimation
          key={index}
          direction="up"
          delay={index * 0.5}
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

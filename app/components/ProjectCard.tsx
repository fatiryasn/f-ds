"use client"
import { TbWorld } from "react-icons/tb";
import { motion } from "framer-motion";

const projects = [
  {
    title: "PorluCoffee Official Website",
    image: "/porlu-coffee-preview.png",
    link: "https://porlucoffee.com/",
    linkText: "porlucoffee.com",
    description: "Landing page website",
    tech: ["Company Profile", "Landing Page"],
  },
  {
    title: "BENING BKN",
    image: "/bening-preview.png",
    link: "https://beningbknmedan.com/",
    linkText: "beningbknmedan.com",
    description:
      "An interactive e-learning website designed to deliver courses, track progress, and enhance digital learning experiences.",
    tech: ["Custom Web App", "E-Learning Website"],
  },
  {
    title: "Point Of Sales",
    image: "/pos-preview.png",
    description:
      "A modern and user-friendly POS website for managing sales, inventory, and customer transactions efficiently.",
    tech: ["Custom Web App", "Business Management"],
  },
  {
    title: "Abi Foundation Official Website",
    image: "/abi-foundation-preview.png",
    link: "http://abi-foundation.atwebpages.com/",
    linkText: "abi-foundation.com",
    description: "Landing page website",
    tech: ["Foundation Profile", "Landing Page"],
  },
  {
    title: "Vigilanter",
    image: "/vigilanter-preview.jpg",
    link: "https://drive.google.com/file/d/1h7O_G6WEi3R5Is8QUbB8xjvk5CpV8gVZ/view",
    linkText: "Watch demo video",
    description:
      "A mobile application that enables users to quickly and securely report crimes online to authorities for faster response.",
    tech: ["Mobile Application"],
  },
  {
    title: "TRIP Web Design",
    image: "/trip-preview.png",
    link: "https://www.figma.com/design/tpPPi8mH4n0vR1BKBb7Awm/TRIP?node-id=0-1&p=f&t=YmADZKrTubnLNv7b-0",
    linkText: "See figma design",
    description:
      "A clean and modern UI/UX design for a company profile website, focused on showcasing services, company values and more.",
    tech: ["UI/UX Design"],
  },
];

const ProjectCard = () => {
  return (
    <>
      {projects.map((project, index) => (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          key={index}
          className="flex flex-col w-xs sm:w-2xs md:w-sm lg:w-md xl:w-lg 2xl:w-xl p-3 bg-gray-50 border border-gray-400 shadow rounded"
        >
          <div className="overflow-hidden h-40 xl:h-52 mb-4 rounded">
            <img
              src={project.image}
              alt={project.title}
              className="object-cover h-full w-full hover:scale-110 transition"
              loading="lazy"
            />
          </div>

          {project.link && (
            <a
              href={project.link}
              className="hover:text-gray-300 w-fit text-gray-50"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="rounded-full bg-green-600 hover:bg-green-700 transition cursor-pointer px-3 flex items-center font-bold font-poppins text-xs md:text-sm lg:text-base">
                <TbWorld />
                <span>{project.linkText}</span>
              </button>
            </a>
          )}

          <h2 className="font-bold font-manrope text-lg md:text-xl lg:text-2xl mt-1">
            {project.title}
          </h2>

          <p className="font-quicksand font-medium text-xs md:text-sm lg:text-base text-gray-700">
            {project.description}
          </p>

          {project.tech && (
            <div className="flex gap-2 mt-2 text-xs md:text-sm text-gray-50">
              {project.tech.map((tech, i) => (
                <p
                  key={i}
                  className="rounded-full px-2 bg-[#198bef] font-poppins"
                >
                  {tech}
                </p>
              ))}
            </div>
          )}
        </motion.div>
      ))}
    </>
  );
};

export default ProjectCard;

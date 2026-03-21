import ProjectCard from "../components/subsections/ProjectCard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio - Falaah Digital Solutions | Our Works & Projects",
  description:
    "Explore the complete portfolio of Falaah Digital Solutions. Various projects we have worked on including websites, mobile applications, and UI/UX designs.",
  keywords: [
    "portfolio website",
    "mobile app portfolio",
    "Falaah Digital Solutions projects",
    "web development portfolio",
    "UI/UX design portfolio",
    "digital works showcase",
  ],
  authors: [{ name: "Falaah Digital Solutions" }],
  creator: "Falaah Digital Solutions",
  publisher: "Falaah Digital Solutions",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Portfolio - Falaah Digital Solutions | Our Works & Projects",
    description:
      "Explore the complete portfolio of Falaah Digital Solutions. Various projects we have worked on including websites, mobile applications, and UI/UX designs.",
    url: "https://falaahdigitalsolutions.com/portfolio",
    siteName: "Falaah Digital Solutions",
    images: [
      {
        url: "/og-image-portfolio.jpg",
        width: 1200,
        height: 630,
        alt: "Falaah Digital Solutions Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio - Falaah Digital Solutions | Our Works & Projects",
    description:
      "Explore the complete portfolio of Falaah Digital Solutions. Various projects we have worked on including websites, mobile applications, and UI/UX designs.",
    images: ["/og-image-portfolio.jpg"],
    creator: "@falaahdigitalsolutions",
  },
  alternates: {
    canonical: "https://falaahdigitalsolutions.com/portfolio",
    languages: {
      "en-US": "https://falaahdigitalsolutions.com/portfolio",
      "id-ID": "https://falaahdigitalsolutions.com/id/portofolio",
    },
  },
};

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

const page = () => {
  return (
    <>
      <main
        className="pt-16 rounded-b-3xl md:rounded-b-[4rem] flex justify-center text-gray-50 "
        style={{
          background: "url('/footer-bg.png')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="flex flex-col sm:flex-row items-start md:items-center gap-6 md:gap-10 px-7 py-16 md:p-16 ">
          <img
            src="/emblem-falaah-digital-solutions.png"
            alt="Emblem Falaah Digital Solutions"
            className="object-contain shrink-0 mb-1 aspect-square p-2 h-36"
            loading="lazy"
          />
          <div className="flex flex-col">
            <p className="font-manrope font-medium text-sm ">
              Falaah Digital Solutions
            </p>
            <h1 className="font-bold text-transparent bg-clip-text bg-linear-135 pb-2 from-gray-100 from-30% via-blue-400 via-50% to-gray-100 to-80% font-poppins text-4xl md:text-5xl lg:text-6xl">
              Portofolio
            </h1>
            <div className="flex gap-2 items-center max-w-2xs">
              <div className="bg-[#198bef] w-1 h-14"></div>
              <p className="font-poppins italic text-sm md:text-base font-medium max-w-[10rem]">
                Powering Your Digital Journey Forward
              </p>
            </div>
          </div>
        </div>
      </main>

      <section
        className="flex flex-wrap justify-center gap-3 md:gap-5 lg:gap-10 text-gray-900 pt-20 pb-40"
        style={{
          background: "url('/un-bg.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <ProjectCard projects={projects} animationDelay={0.5} />
      </section>
    </>
  );
};

export default page;

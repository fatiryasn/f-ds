import ProjectCard from "../../components/subsections/ProjectCard";
import { Metadata } from "next";
import { Project } from "../../components/subsections/ProjectCard";

export const metadata: Metadata = {
  title: "Portofolio - Falaah Digital Solutions | Portofolio",
  description:
    "Jelajahi portofolio lengkap Falaah Digital Solutions. Berbagai proyek yang telah kami kerjakan termasuk website, aplikasi mobile, dan desain UI/UX.",
  keywords: [
    "website portofolio",
    "portofolio aplikasi mobile",
    "proyek Falaah Digital Solutions",
    "portofolio pengembangan web",
    "portofolio desain UI/UX",
    "pameran karya digital",
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
    title: "Portofolio - Falaah Digital Solutions | Portofolio",
    description:
      "Jelajahi portofolio lengkap Falaah Digital Solutions. Berbagai proyek yang telah kami kerjakan termasuk website, aplikasi mobile, dan desain UI/UX.",
    url: "https://falaahdigitalsolutions.com/id/portfolio",
    siteName: "Falaah Digital Solutions",
    images: [
      {
        url: "/og-image-portfolio.jpg",
        width: 1200,
        height: 630,
        alt: "Portofolio Falaah Digital Solutions",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portofolio - Falaah Digital Solutions | Portfolio",
    description:
      "Jelajahi portofolio lengkap Falaah Digital Solutions. Berbagai proyek yang telah kami kerjakan termasuk website, aplikasi mobile, dan desain UI/UX.",
    images: ["/og-image-portfolio.jpg"],
    creator: "@falaahdigitalsolutions",
  },
  alternates: {
    canonical: "https://falaahdigitalsolutions.com/id/portfolio",
    languages: {
      "en-US": "https://falaahdigitalsolutions.com/portfolio",
      "id-ID": "https://falaahdigitalsolutions.com/id/portfolio",
    },
  },
};

//projects
const websiteProjects: Project[] = [
  {
    title: "PorluCoffee",
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
    title: "Abi Foundation",
    image: "/abi-foundation-preview.png",
    link: "http://abi-foundation.atwebpages.com/",
    linkText: "abi-foundation.com",
  },
  {
    title: "Inklusi Kerja",
    image: "/inklusi-kerja.png",
  },
  {
    title: "Pethofar",
    image: "/pethofar.png",
  },
  {
    title: "Falaah POS",
    image: "/pos-preview.png",
  },
];

const mobileProjects: Project[] = [
  {
    title: "Vigilanter",
    image: "/vigilanter-preview.jpg",
  },
  {
    title: "Studio Finder",
    image: "/studio-finder.jpg",
  },
];

const uiuxProjects: Project[] = [
  {
    image: "/ui2.jpg",
  },
  {
    image: "/ui1.jpg",
  },
  {
    image: "/ui3.jpg",
  },
];

const page = () => {
  return (
    <div className="pt-24">
      <main
        className="rounded-3xl md:rounded-[4rem] flex justify-center text-gray-50 mx-3 md:mx-7 lg:mx-20 shadow-lg"
        style={{
          background: "url('/footer-bg.png')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="flex flex-row items-start md:items-center gap-6 md:gap-10 px-3 py-10 md:py-16">
          <img
            src="/emblem-falaah-digital-solutions.png"
            alt="Emblem Falaah Digital Solutions"
            className="object-contain shrink-0 mb-1 aspect-square p-2 h-24 md:h-32 lg:h-36"
            loading="lazy"
          />
          <div className="flex flex-col">
            <p className="font-manrope font-medium text-xs sm:text-sm">
              Falaah Digital Solutions
            </p>
            <h1 className="font-bold text-transparent bg-clip-text bg-linear-135 pb-2 from-gray-100 from-30% via-blue-400 via-50% to-gray-100 to-80% font-poppins text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
              Portofolio
            </h1>
            <div className="flex gap-2 items-center max-w-2xs">
              <div className="bg-[#198bef] w-1 h-10 md:h-14"></div>
              <p className="font-poppins italic text-xs sm:text-sm md:text-base font-medium max-w-[10rem]">
                Powering Your Digital Journey Forward
              </p>
            </div>
          </div>
        </div>
      </main>

      <section
        className="px-5 md:px-7 lg:px-16 xl:px-24 py-24"
        style={{
          background: "url('/un-bg.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        {/* website */}
        <div className="relative flex flex-col md:flex-row gap-5 md:gap-10 mb-32">
          <div className="hidden md:block">
            <h2 className="sticky top-24 text-4xl lg:text-5xl text-transparent bg-clip-text bg-linear-135 pb-2 from-gray-800 from-30% via-blue-400 via-50% to-gray-800 to-80% writing-mode-vertical-rl transform rotate-180 p-3 font-audiowide opacity-70 tracking-[1rem] uppercase">
              Website
            </h2>
          </div>
          <h2 className="text-3xl md:hidden text-transparent font-semibold bg-clip-text bg-linear-135 pb-2 from-gray-800 from-30% via-blue-400 via-50% to-gray-800 to-80% p-3 font-audiowide uppercase">
            Website
          </h2>
          <div className="flex-1 projects-container md:p-3 gap-10">
            {websiteProjects.map((project, index) => (
              <ProjectCard
                key={index}
                project={project}
                animationDelay={index * 0.1}
              />
            ))}
          </div>
        </div>

        {/* mobile */}
        <div className="relative flex flex-col md:flex-row gap-5 md:gap-10 mb-32">
          <div className="hidden md:block">
            <h2 className="sticky top-24 text-4xl lg:text-5xl text-transparent bg-clip-text bg-linear-135 pb-2 from-gray-800 from-30% via-blue-400 via-50% to-gray-800 to-80% writing-mode-vertical-rl transform rotate-180 p-3 font-audiowide opacity-70 tracking-[1rem] uppercase">
              Mobile
            </h2>
          </div>
          <h2 className="text-3xl md:hidden text-transparent font-semibold bg-clip-text bg-linear-135 pb-2 from-gray-800 from-30% via-blue-400 to-gray-800 p-3 font-audiowide uppercase">
            Mobile
          </h2>
          <div className="flex-1 projects-container md:p-3 gap-10">
            {mobileProjects.map((project, index) => (
              <ProjectCard
                key={index}
                project={project}
                animationDelay={index * 0.1}
              />
            ))}
          </div>
        </div>

        {/* ui/ux design */}
        <div className="relative flex flex-col md:flex-row gap-5 md:gap-10 mb-20">
          <div className="hidden md:block">
            <h2 className="sticky top-24 text-4xl lg:text-5xl text-transparent bg-clip-text bg-linear-135 pb-2 from-gray-800 from-30% via-blue-400 via-50% to-gray-800 to-80% writing-mode-vertical-rl transform rotate-180 p-3 font-audiowide opacity-70 tracking-[1rem] uppercase">
              UI/UX
            </h2>
          </div>
          <h2 className="text-3xl md:hidden text-transparent font-semibold bg-clip-text bg-linear-135 pb-2 from-gray-800 via-blue-400 to-gray-800 p-3 font-audiowide uppercase">
            UI/UX
          </h2>
          <div className="flex-1 projects-container md:p-3 gap-10">
            {uiuxProjects.map((project, index) => (
              <ProjectCard
                key={index}
                project={project}
                animationDelay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;

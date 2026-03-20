import ProjectCard from "../components/ProjectCard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portofolio - Falaah Digital Solutions",
  description:
    "Portofolio Falaah Digital Solutions, All projects including Web App, Mobile Application, UI/UX Design from Falaah Digital Solutions.",
};

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
        <ProjectCard />
      </section>
    </>
  );
};

export default page;

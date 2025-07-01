import { FaWhatsapp } from "react-icons/fa6";
import ProjectCard from "../components/ProjectCard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portofolio - Falaah Digital Solutions",
  description:
    "Portofolio Falaah Digital Solutions, Semua proyek termasuk Aplikasi Web, Aplikasi Seluler, Desain UI/UX dari Falaah Digital Solutions.",
};

const page = () => {
  return (
    <>
      <main
        className="pt-16 rounded-b-[4rem] flex justify-center"
        style={{
          background: "url('/project-bg.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="flex flex-col md:flex-row items-start md:items-center gap-10 px-7 py-16 md:p-16">
          <img
            src="/emblem-falaah-digital-solutions.png"
            alt="Emblem Falaah Digital Solutions"
            className="object-contain shrink-0 mb-1 aspect-square p-2 h-24 w-24 bg-white rounded-full"
            loading="lazy"
          />
          <div className="flex flex-col">
            <p className="font-manrope font-medium text-sm ">
              Falaah Digital Solutions
            </p>
            <h1 className="font-bold text-transparent bg-clip-text bg-linear-135 pb-2 from-gray-950 from-30% via-blue-700 via-50% to-gray-950 to-80% font-poppins text-5xl md:text-6xl">
              Portofolio
            </h1>
            <div className="flex gap-2 items-center max-w-2xs">
              <div className="bg-[#198bef] w-1.5 h-14"></div>
              <p className="font-poppins text-gray-900 italic tex-sm md:text-base font-medium">
                Level-Up Bisnis Anda dengan Solusi Digital Terpercaya
              </p>
            </div>
          </div>
        </div>
      </main>

      <section
        className="flex flex-wrap justify-center gap-3 md:gap-5 text-gray-900 py-20"
        style={{
          background: "url('/un-bg.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <ProjectCard />
      </section>

      <section className="flex flex-col items-center justify-center gap-2 mt-10">
        <p className="font-manrope font-medium text-sm md:text-lg text-gray-900">
          Ingin punya produk digital seperti ini?
        </p>
        <a
          href={`https://wa.me/6282274016977`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="shine-button rounded-full flex items-center gap-1 bg-blue-700 cursor-pointer text-gray-50 font-semibold font-manrope py-2 px-4 text-xs md:text-base lg:text-lg">
            <FaWhatsapp className="text-base md:text-2xl font-bold shrink-0" />{" "}
            Pesan Sekarang
          </button>
        </a>
      </section>
    </>
  );
};

export default page;

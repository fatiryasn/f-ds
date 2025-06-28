import React from "react";
import Link from "next/link";

import { FaInstagram } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";
import { FaLocationArrow, FaRegEnvelopeOpen } from "react-icons/fa6";

const FooterID = () => {
  return (
    <footer className="px-7 mt-60 lg:px-32 pb-5 pt-16 text-gray-900  bg-gradient-to-t from-blue-100 to-white">
      <div className="flex flex-col md:flex-row items-start justify-between gap-12">
        <div className="flex flex-col items-center md:items-start w-full md:w-fit">
          <img
            src="/logo-falaah-digital-solutions.png"
            alt="Logo Falaah Digital Solutions"
            className="object-contain shrink-0 rounded-sm mb-1 h-24 md:h-16 lg:h-28 w-auto"
            loading="lazy"
          />

          <p className="lg:text-lg font-poppins text-center md:text-start text-gray-600 max-w-sm md:max-w-xs">
            Level-Up your business with reliable digital solutions
          </p>
        </div>

        <div>
          <h3 className="text-2xl md:text-xl lg:text-2xl font-semibold mb-4 font-manrope">
            Kontak
          </h3>
          <ul className="font-medium text-gray-700 text-base md:text-sm lg:text-base font-quicksand space-y-2">
            <li className="flex items-center gap-1">
              <FaRegEnvelopeOpen /> falaahdigitalsolutions@gmail.com
            </li>
            <li className="flex items-center gap-1">
              <IoCallOutline />
              +62 822 7401 6977
            </li>
            <li className="flex items-center gap-1">
              <FaLocationArrow />
              Medan, Sumatera Utara
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl md:text-xl lg:text-2xl font-semibold mb-4 font-manrope">
            Navigasi
          </h3>
          <ul className="space-y-2 font-medium text-base md:text-sm lg:text-base text-gray-700 font-quicksand">
            <li>
              <Link href="/id/" className="hover:underline">
                Beranda
              </Link>
            </li>
            <li>
              <Link href="/id/#tentang-kami" className="hover:underline">
                Tentang Kami
              </Link>
            </li>
            <li>
              <Link href="/id/#layanan" className="hover:underline">
                Layanan
              </Link>
            </li>
            <li>
              <Link href="/id/#portofolio" className="hover:underline">
                Portofolio
              </Link>
            </li>
            <li>
              <Link href="/id/#kontak" className="hover:underline">
                Kontak
              </Link>
            </li>
          </ul>
        </div>

        <div className="">
          <h3 className="text-2xl md:text-xl lg:text-2xl font-semibold mb-4 font-manrope">
            Follow Us
          </h3>
          <div className="flex gap-4 text-2xl">
            <a
              href="https://www.instagram.com/falaahdigitalsolutions"
              className="hover:text-[#198bef] text-gray-700 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      <div className=" mt-16 pt-6 text-center text-gray-700 text-xs font-quicksand">
        &copy; {new Date().getFullYear()} Falaah Digital Solutions. All rights
        reserved.
      </div>
    </footer>
  );
};

export default FooterID;

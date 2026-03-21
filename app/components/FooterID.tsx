import Link from "next/link";

import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";
import {
  FaLocationArrow,
  FaRegEnvelopeOpen,
  FaXTwitter,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="flex flex-col w-full bg-blue-50">
      {/* upper */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-center lg:px-8 xl:px-14 relative lg:pb-10">
        <div className="flex flex-col items-start gap-7 my-14 lg:my-28 px-14 lg:px-0">
          <h1 className="font-semibold font-sora text-gray-900 text-3xl lg:text-4xl xl:text-[2.7rem] leading-normal max-w-lg">
            Let&apos;s bring your vision to life
          </h1>
          <p className="font-manrope font-medium text-base lg:text-lg xl:text-xl text-gray-900 max-w-xl">
            Di Falaah Digital Solutions, kami selalu siap terhubung,
            berkolaborasi, dan membangun sesuatu yang hebat bersama.
          </p>

          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition cursor-pointer group">
            <a
              href="https://wa.me/6282274016977"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <FaWhatsapp className="text-lg md:text-xl" />
              <span className="text-sm md:text-base font-poppins">
                Mulai sekarang
              </span>
              <span className="group-hover:translate-x-1 transition">→</span>
            </a>
          </div>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <img
            src="/footer-hero.png"
            alt="footer"
            className="w-full h-full shrink-0"
          />
        </div>
        <img
          src="/footer-outline.png"
          alt="outline"
          className="absolute bottom-0 left-0 right-0 w-full hidden lg:block lg:h-36"
        />
      </div>

      {/* lower */}
      <div
        className="flex flex-col text-gray-50 bg-gradient-to-t from-blue-50 to-white px-7 lg:px-12 xl:px-32 pb-5 pt-8"
        style={{
          background: "url('/footer-bg.png')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top",
          backgroundSize: "cover",
        }}
      >
        <div className="flex flex-col md:flex-row items-start justify-between gap-12">
          <div className="flex flex-col items-center md:items-start w-full md:w-fit">
            <img
              src="/white-logo-falaah-digital-solutions.png"
              alt="Logo Falaah Digital Solutions"
              className="object-contain shrink-0 rounded-sm mb-3 h-24 md:h-16 lg:h-28 w-auto"
              loading="lazy"
            />

            <div className="flex items-center justify-around w-full mt-3">
              <a
                href="https://www.instagram.com/falaahdigitalsolutions"
                className="hover:text-[#198bef] text-blue-50 transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-3xl">
                  <FaInstagram />
                </span>
              </a>
              <a
                href="#"
                className="hover:text-[#198bef] text-blue-50 transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-3xl">
                  <FaLinkedin />
                </span>
              </a>
              <a
                href="#"
                className="hover:text-[#198bef] text-blue-50 transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-3xl">
                  <FaXTwitter />
                </span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-2xl md:text-xl lg:text-2xl font-semibold mb-4 font-manrope">
              Navigasi
            </h3>
            <ul className="space-y-2 font-medium text-base md:text-sm lg:text-base text-gray-50 font-manrope">
              <li>
                <Link href="/id" className="hover:underline">
                  Beranda
                </Link>
              </li>
              <li>
                <Link href="/id/#our-services" className="hover:underline">
                  Layanan Kami
                </Link>
              </li>
              <li>
                <Link href="/id/#projects" className="hover:underline">
                  Portofolio
                </Link>
              </li>
              <li>
                <Link href="/id/#about-us" className="hover:underline">
                  Tentang Kami
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl md:text-xl lg:text-2xl font-semibold mb-4 font-manrope">
              Layanan Kami
            </h3>
            <ul className="font-medium text-gray-50 text-base md:text-sm lg:text-base font-manrope space-y-2">
              <li className="flex items-center gap-1">Website</li>
              <li className="flex items-center gap-1">Aplikasi Mobile</li>
              <li className="flex items-center gap-1">Desain UI/UX</li>
              <li className="flex items-center gap-1">Konsultasi IT</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl md:text-xl lg:text-2xl font-semibold mb-4 font-manrope">
              Hubungi Kami
            </h3>
            <ul className="font-medium text-gray-50 text-base md:text-sm lg:text-base font-quicksand space-y-2">
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
        </div>

        <div className="mt-16 pt-6 text-center text-gray-400 text-xs font-quicksand">
          &copy; {new Date().getFullYear()} Falaah Digital Solutions. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

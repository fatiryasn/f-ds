"use client";

import Link from "next/link";
import LanguageSelector from "./LanguageSelector";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { HiOutlineXMark } from "react-icons/hi2";
import { RxHamburgerMenu } from "react-icons/rx";

const NavbarEN = () => {
  const pathname = usePathname();
  const isHome = pathname === "/id/" || pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    if (!isHome) return;

    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  const navbarStyle = isHome
    ? scrolled
      ? "bg-white border-b-[0.1px] border-gray-300"
      : "bg-transparent border-b border-transparent"
    : "bg-white border-b-[0.1px] border-gray-300";

  return (
    <>
      <div
        className={`${
          isHome && "animate-onlyFade"
        } fixed top-0 right-0 left-0 flex justify-between transition-all duration-300 items-center py-4 px-5 sm:px-10 lg:px-28 z-50 ${navbarStyle} ${
          isSidebarOpen && "bg-white"
        }`}
      >
        <Link href={"/"}>
          <img
            src="/logo-falaah-digital-solutions.png"
            alt="Falaah Digital Solutions Logo"
            loading="lazy"
            className="w-20 md:w-28 h-auto object-contain"
          />
        </Link>
        <div className="flex gap-10 pt-1">
          <nav className="hidden md:flex items-center gap-3 lg:gap-6">
            {/* About Us */}
            <div className="flex flex-col items-center group cursor-pointer">
              <Link
                href="/#about-us"
                className="font-medium font-manrope flex items-center gap-1 lg:text-lg"
              >
                <span>About Us</span>
              </Link>
              <div className="w-20 h-0.5 bg-cyan-600 rounded-sm scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></div>
            </div>

            {/* Our Services */}
            <div className="flex flex-col items-center group cursor-pointer">
              <Link
                href="/#our-services"
                className="font-medium font-manrope flex items-center gap-1 lg:text-lg"
              >
                <span>Our Services</span>
              </Link>
              <div className="w-28 h-0.5 bg-cyan-600 rounded-sm scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></div>
            </div>

            {/* Projects */}
            <div className="flex flex-col items-center group">
              <Link
                href="/#projects"
                className="font-medium font-manrope flex items-center gap-1 lg:text-lg"
              >
                <span>Projects</span>
              </Link>
              <div className="w-20 h-0.5 bg-cyan-600 rounded-sm scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></div>
            </div>

            {/* Contact */}
            <div className="flex flex-col items-center group cursor-pointer">
              <Link
                href="/#contact"
                className="font-medium font-manrope flex items-center gap-1 lg:text-lg"
              >
                <span>Contact</span>
              </Link>
              <div className="w-[72px] h-0.5 bg-cyan-600 rounded-sm scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></div>
            </div>
            <LanguageSelector />
          </nav>
          <div className="flex md:hidden items-center gap-5">
            <LanguageSelector />
            <button
              className="text-2xl"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
              {isSidebarOpen ? <HiOutlineXMark /> : <RxHamburgerMenu />}
            </button>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black/50 backdrop-blur-sm z-40"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-16 right-0 left-0 h-fit w-full bg-white z-40 transform transition-transform duration-500 ease-in-out ${
          isSidebarOpen ? "translate-y-0" : "-translate-y-80"
        }`}
      >
        <nav className="flex flex-col gap-4 p-4 text-base font-jura">
          {/* About Us */}
          <div className="flex flex-col items-center group cursor-pointer">
            <Link
              href="/#about-us"
              onClick={() => setIsSidebarOpen(false)}
              className="font-medium font-manrope flex items-center gap-1 lg:text-lg"
            >
              <span>About Us</span>
            </Link>
            <div className="w-20 h-0.5 bg-cyan-600 rounded-sm scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></div>
          </div>

          {/* Our Services */}
          <div className="flex flex-col items-center group cursor-pointer">
            <Link
              href="/#our-services"
              onClick={() => setIsSidebarOpen(false)}
              className="font-medium font-manrope flex items-center gap-1 lg:text-lg"
            >
              <span>Our Services</span>
            </Link>
            <div className="w-28 h-0.5 bg-cyan-600 rounded-sm scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></div>
          </div>

          {/* Projects */}
          <div className="flex flex-col items-center group">
            <Link
              href="/#projects"
              onClick={() => setIsSidebarOpen(false)}
              className="font-medium font-manrope flex items-center gap-1 lg:text-lg"
            >
              <span>Projects</span>
            </Link>
            <div className="w-20 h-0.5 bg-cyan-600 rounded-sm scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></div>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-center group cursor-pointer">
            <Link
              href="/#contact"
              onClick={() => setIsSidebarOpen(false)}
              className="font-medium font-manrope flex items-center gap-1 lg:text-lg"
            >
              <span>Contact</span>
            </Link>
            <div className="w-[72px] h-0.5 bg-cyan-600 rounded-sm scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></div>
          </div>
        </nav>
      </aside>
    </>
  );
};

export default NavbarEN;

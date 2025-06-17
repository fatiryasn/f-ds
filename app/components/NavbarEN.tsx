import Link from "next/link";

const NavbarEN = () => {
  return (
    <div className="fixed top-0 right-0 left-0 flex justify-between items-center py-3 px-32 bg-white shadow-sm z-50">
      <Link href={"/"}>
        <img
          src="/logo-falaah-digital-solutions.png"
          alt="PorluCoffee Logo"
          loading="lazy"
          className="w-28 h-auto object-contain"
        />
      </Link>
      <div className="flex gap-10 pt-1">
        <nav className="flex items-center gap-6">
          {/* About Us */}
          <div className="flex flex-col items-center group cursor-pointer">
            <Link
              href="#about-us"
              className="font-medium font-manrope flex items-center gap-1 lg:text-lg"
            >
              <span>About Us</span>
            </Link>
            <div
              className="w-20 h-0.5 bg-cyan-600 rounded-sm 
              scale-x-0 group-hover:scale-x-100 
              transition-transform duration-300 origin-center"
            ></div>
          </div>

          {/* Our Services */}
          <div className="flex flex-col items-center group cursor-pointer">
            <Link
              href="#our-services"
              className="font-medium font-manrope flex items-center gap-1 lg:text-lg"
            >
              <span>Our Services</span>
            </Link>
            <div
              className="w-28 h-0.5 bg-cyan-600 rounded-sm 
              scale-x-0 group-hover:scale-x-100 
              transition-transform duration-300 origin-center"
            ></div>
          </div>

          {/* Projects */}
          <div className="flex flex-col items-center group">
            <Link
              href="#projects"
              className="font-medium font-manrope flex items-center gap-1 lg:text-lg"
            >
              <span>Projects</span>
            </Link>
            <div
              className="w-20 h-0.5 bg-cyan-600 rounded-sm 
              scale-x-0 group-hover:scale-x-100 
              transition-transform duration-300 origin-center"
            ></div>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-center group cursor-pointer">
            <Link
              href="#contact"
              className="font-medium font-manrope flex items-center gap-1 lg:text-lg"
            >
              <span>Contact</span>
            </Link>
            <div
              className="w-[72px] h-0.5 bg-cyan-600 rounded-sm 
              scale-x-0 group-hover:scale-x-100 
              transition-transform duration-300 origin-center"
            ></div>
          </div>
        </nav>
        <div></div>
      </div>
    </div>
  );
};

export default NavbarEN;

import { MdKeyboardArrowRight } from "react-icons/md";
import Carousel from "./components/Carousel";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="h-[100dvh] pt-24 mx-40">
        <div className="flex items-center justify-around mt-20">
          <div className="flex flex-col items-start">
            <h1 className="text-xl md:text-2xl lg:text-5xl max-w-2xl text-center md:text-start font-poppins font-bold text-transparent bg-clip-text bg-linear-135 pb-2 from-gray-950 from-10% via-blue-700 via-30% to-gray-950 to-60% ">
              Accelerate Your Business with Reliable Digital Solutions
            </h1>

            <p className="max-w-2xl font-quicksand font-medium text-lg mt-1">
              Falaah Digital Solutions is here as a digital transformation
              partner with affordable and customizable application development,
              UI/UX design, and technology consulting services.
            </p>
            <Link href="#our-services">
              <button className="rounded-full text-blue-900 border-2 border-blue-900 px-5 py-2 font-montserrat font-bold mt-5 cursor-pointer transition hover:bg-blue-900 hover:text-gray-50 flex gap-1 items-center">
                Our Services <MdKeyboardArrowRight />
              </button>
            </Link>
          </div>
          <div className="relative w-[500px] h-[500px]">
            <img
              src="/nebula-effect.png"
              alt="Nebula Background"
              className="absolute inset-0 rotate-[80deg] w-full h-full object-fit rounded-2xl z-0"
            />
            <div className="relative z-10">
              <Carousel />
            </div>
          </div>
        </div>
      </main>

      <section
        id="about-us"
        className="min-h-screen bg-white py-24 px-10 md:px-32 gap-20 flex flex-col items-center"
      >
        <div className="flex justify-center items-center gap-10">
          <div>
            <img
              src="/about-us.jpeg"
              alt="About us"
              className="h-[70dvh] w-[20rem] shadow-[-20px_-20px_0px_#0767ba] object-left object-cover"
            />
          </div>
          <div className="max-w-3xl text-center md:text-left space-y-5">
            <div className="h-2 w-20 bg-[#0767ba]"></div>

            <h2 className="text-3xl md:text-5xl font-poppins font-bold text-gray-900 leading-tight">
              About Us
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl font-quicksand text-gray-700 leading-loose">
              Falaah Digital Solutions is a trusted partner in your business
              digital transformation. We provide flexible and affordable
              application development services, compelling UI/UX design, and
              strategic technology consulting. With a professional team and a
              client-centric approach, we are committed to helping you grow and
              adapt in the digital era.
            </p>
            <p className="text-lg md:text-xl lg:text-2xl font-quicksand text-gray-700 leading-loose">
              We believe that technology is not just about software, but about
              delivering real solutions that drive growth and efficiency.
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="relative max-w-2xl p-10 border-t border-l rounded-r-lg border-dashed border-black/50">
            <div className="absolute bg-[#0767ba] rounded-full w-7 h-7 -top-3 -left-3"></div>
            <div className="absolute bg-[#0767ba] rounded-full w-6 h-6 -top-7 -left-12"></div>
            <div className="absolute bg-[#0767ba] rounded-full w-3 h-3 -top-8 left-2"></div>
            <h2 className="text-3xl font-bold font-manrope">Vision</h2>
            <p className="mt-1 font-quicksand font-medium text-lg">
              To be a trusted digital partner that helps individuals,
              businesses, and institutions grow through technology that has a
              positive and sustainable impact.
            </p>
          </div>
          <div className="relative max-w-2xl p-10 border-r border-b rounded-l-lg border-dashed border-black/50">
            <div className="absolute bg-[#0767ba] rounded-full w-7 h-7 -bottom-3 -right-3"></div>
            <div className="absolute bg-[#0767ba] rounded-full w-6 h-6 -bottom-7 -right-12"></div>
            <div className="absolute bg-[#0767ba] rounded-full w-3 h-3 -bottom-8 right-2"></div>
            <h2 className="text-3xl font-bold font-manrope">Mission</h2>
            <ul className="list-disc pl-5 mt-1 font-quicksand font-medium text-lg">
              <li>
                Providing easy access to digital solutions for MSMEs,
                communities, and agencies.
              </li>
              <li>
                Developing relevant, simple, and effective technology products
                for local users.
              </li>
              <li>
                Accompanying the digitalization process from planning to
                implementation.
              </li>
              <li>
                Encouraging the growth of local technology-based innovation.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <div
        id="our-services"
        className="min-h-screen bg-gray-50 py-24 px-6 md:px-32"
      >
        <h2 className="text-3xl md:text-5xl font-poppins font-bold text-center text-gray-900 mb-12">
          Our Services
        </h2>
        <div className="flex flex-wrap gap-10 justify-center">
          <div className="bg-white p-2 rounded-md border-[0.1px] border-gray-300 max-w-2xl shadow-md hover:shadow-xl transition">
            <img
              src="/porlu-coffee-preview.png"
              alt="Landing Page"
              className="object-cover w-full h-36 rounded-lg mb-4"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2 font-manrope">
                Landing Page
              </h3>
              <p className="text-gray-600 font-quicksand text-base">
                Website dengan halaman yang simpel & cepat namun menarik untuk
                memperkenalkan produk, jasa, atau promo. Cocok untuk iklan,
                campaign, atau promosi cepat.
              </p>
            </div>
          </div>

          <div className="bg-white p-2 rounded-md border-[0.1px] border-gray-300 max-w-2xl shadow-md hover:shadow-xl transition">
            <img
              src="/bening-preview.png"
              alt="Landing Page"
              className="object-cover w-full h-36 rounded-lg mb-4"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2 font-manrope">
                Web App Custom
              </h3>
              <p className="text-gray-600 font-quicksand text-base">
                Website dengan fitur khusus sesuai kebutuhan bisnis Anda,
                seperti sistem booking, dashboard admin, katalog produk, dan
                lainnya.
              </p>
            </div>
          </div>

          <div className="bg-white p-2 rounded-md border-[0.1px] border-gray-300 max-w-2xl shadow-md hover:shadow-xl transition">
            <img
              src="/porlu-coffee-preview.png"
              alt="Landing Page"
              className="object-cover w-full h-36 rounded-lg mb-4"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2 font-manrope">
                UI/UX Design
              </h3>
              <p className="text-gray-600 font-quicksand text-base">
                Desain tampilan dan pengalaman pengguna yang menarik, mudah
                digunakan, dan meningkatkan kenyamanan saat pelanggan mengakses
                website Anda.
              </p>
            </div>
          </div>

          <div className="bg-white p-2 rounded-md border-[0.1px] border-gray-300 max-w-2xl shadow-md hover:shadow-xl transition">
            <img
              src="/porlu-coffee-preview.png"
              alt="Landing Page"
              className="object-cover w-full h-36 rounded-lg mb-4"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2 font-manrope">
                SEO Optimization
              </h3>
              <p className="text-gray-600 font-quicksand text-base">
                Bantu website Anda muncul di halaman atas Google agar lebih
                mudah ditemukan oleh calon pelanggan yang sedang mencari produk
                atau jasa Anda.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="h-[100dvh] bg-red-100" id="contact">
        Hello World
      </div>
    </>
  );
}

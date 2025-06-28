import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsappButton = () => {
  const phoneNumber = "6282274016977";

  return (
    <a
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <button className="fixed z-40 bottom-3 right-2 md:bottom-5 md:right-5 p-[6px] md:p-2 rounded-3xl bg-white border-1 border-green-600 hover:bg-gray-200 transition cursor-pointer text-4xl sm:text-5xl text-green-600">
        <FaWhatsapp />
      </button>
    </a>
  );
};

export default WhatsappButton;

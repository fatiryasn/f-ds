"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaCheck } from "react-icons/fa6";
import { motion } from "framer-motion";

const ContactForm = () => {
  const form = useRef<HTMLFormElement>(null);
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;

    setLoading(true);
    setSuccess(false);
    setErrors(null);

    const formData = new FormData(form.current);
    const name = formData.get("name")?.toString().trim() || "";
    const email = formData.get("email")?.toString().trim() || "";
    const phone = formData.get("phoneNumber")?.toString().trim() || "";
    const message = formData.get("message")?.toString().trim() || "";
    const canWhatsapp = formData.get("canWhatsapp") ? "Yes" : "No";

    // Validasi manual
    if (name.length < 3) {
      setErrors("Name must be at least 3 characters.");
      setLoading(false);
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrors("Email format invalid.");
      setLoading(false);
      return;
    }
    const phoneRegex = /^[0-9+\s()-]{9,15}$/;
    if (!phoneRegex.test(phone)) {
      setErrors("Phone number format invalid.");
      setLoading(false);
      return;
    }
    if (message.length < 10) {
      setErrors("Message must be at least 10 characters.");
      setLoading(false);
      return;
    }

    try {
      await emailjs.send(
        "service_imqn6rs",
        "template_b8ptprh",
        {
          name,
          email,
          phoneNumber: phone,
          message,
          canWhatsapp,
          title: "Message from Falaah DS Website",
        },
        "Ih2DXDg4urkgH2HqX"
      );
      setSuccess(true);
      form.current?.reset();
    } catch (error) {
      console.error(error);
      setErrors("Sending failed, please retry.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="flex flex-col w-full md:max-w-xl lg:max-w-lg sm:px-10 md:px-0 mt-10"
    >
      <h2 className="font-bold font-manrope text-2xl self-center">
        Leave a message!
      </h2>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="space-y-3 md:space-y-4 mt-10 grow"
      >
        <input type="hidden" name="title" value="New Collaboration Request" />

        <div>
          <label className="block mb-1 md:mb-2 font-quicksand font-medium">
            Name
          </label>
          <input
            type="text"
            name="name"
            required
            className="w-full px-2 py-1 md:py-2 lg:py-3 border-[0.2px] border-gray-400 font-poppins text-lg rounded-xl"
            autoComplete="off"
          />
        </div>
        <div>
          <label className="block mb-1 md:mb-2 font-quicksand font-medium">
            Email
          </label>
          <input
            type="email"
            name="email"
            required
            className="w-full px-2 py-1 md:py-2 lg:py-3 border-[0.2px] border-gray-400 font-poppins text-lg rounded-xl"
            autoComplete="off"
          />
        </div>
        <div>
          <label className="block mb-1 md:mb-2 font-quicksand font-medium">
            Phone Number
          </label>
          <input
            type="text"
            name="phoneNumber"
            required
            className="w-full px-2 py-1 md:py-2 lg:py-3 border-[0.2px] border-gray-400 font-poppins text-lg rounded-xl"
            autoComplete="off"
          />
          <div className="flex items-center gap-2 mt-1">
            <span className="font-quicksand">
              This number is active in WhatsApp
            </span>
            <input
              type="checkbox"
              name="canWhatsapp"
              value="Yes"
              id="canWhatsapp"
              className="accent-green-700"
            />
          </div>
        </div>
        <div>
          <label className="block mb-1 md:mb-2 font-quicksand font-medium">
            Message
          </label>
          <textarea
            name="message"
            required
            rows={5}
            className="w-full px-2 py-1 md:py-2 lg:py-3 border-[0.2px] border-gray-400 rounded-xl font-poppins text-lg resize-none"
            autoComplete="off"
          ></textarea>
        </div>

        <div>
          <p className="font-manrope font-medium text-sm md:text-base text-gray-800">
            The data from this form will be sent to Falaah DS email, you will
            get more information after we receive it.
          </p>
          <ul className="font-manrope font-medium text-sm md:text-base text-amber-950">
            <li className="flex items-center gap-2">
              <FaCheck />
              <span>Make sure the email you wrote is active</span>
            </li>
            <li className="flex items-center gap-2">
              <FaCheck />
              <span>Use full name (individual/community/brand/etc.)</span>
            </li>
          </ul>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="bg-blue-800 w-full text-white font-semibold font-poppins cursor-pointer transition px-6 py-2 rounded-lg hover:bg-blue-700 disabled:bg-gray-400"
        >
          {loading ? "Sending..." : "Send"}
        </button>

        {errors && (
          <p className="mt-2 p-5 rounded-lg bg-red-700 text-gray-50 font-outfit font-bold text-center">
            {errors}
          </p>
        )}

        {success && (
          <p className="mt-2 p-5 rounded-lg bg-lime-800 text-gray-50 font-outfit font-bold text-center">
            Message sent successfully!
          </p>
        )}
      </form>
    </motion.section>
  );
};

export default ContactForm;

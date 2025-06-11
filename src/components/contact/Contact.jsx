
"use client";
import React from "react";
import { motion } from "framer-motion";

// Animation variants for Framer Motion
const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, staggerChildren: 0.3, ease: "easeOut" },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

function Contact() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-[#0e0e1a] via-[#12131f] to-[#0e0e1a] px-4 sm:px-6 lg:px-8 py-20">
      <motion.div
        className="max-w-2xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h2
          variants={itemVariants}
          className="text-3xl sm:text-4xl font-bold text-white font-poppins tracking-tight"
        >
          Let's Talk
        </motion.h2>
        <motion.p
          variants={itemVariants}
          className="mt-4 text-lg text-[#cbd5e1] font-poppins leading-relaxed"
        >
          Got a question or need the perfect accessory? Send us a message, and
          we'll respond faster than a charger powers your phone!
        </motion.p>
      </motion.div>

      <motion.form
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="mt-12 max-w-xl mx-auto grid gap-6"
        onSubmit={(e) => {
          e.preventDefault();
          // Fallback alert instead of react-hot-toast
          alert("Message sent successfully!");
        }}
      >
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          <input
            type="text"
            placeholder="Name"
            required
            className="w-full rounded-lg border border-[#2d2d2d] bg-[#12131f] p-4 text-white font-poppins placeholder-[#cbd5e1] focus:ring-2 focus:ring-[#38bdf8] focus:outline-none transition duration-200"
          />
          <input
            type="email"
            placeholder="Email"
            required
            className="w-full rounded-lg border border-[#2d2d2d] bg-[#12131f] p-4 text-white font-poppins placeholder-[#cbd5e1] focus:ring-2 focus:ring-[#38bdf8] focus:outline-none transition duration-200"
          />
        </motion.div>
        <motion.textarea
          variants={itemVariants}
          placeholder="Your Message"
          rows={5}
          required
          className="w-full rounded-lg border border-[#2d2d2d] bg-[#12131f] p-4 text-white font-poppins placeholder-[#cbd5e1] focus:ring-2 focus:ring-[#38bdf8] focus:outline-none transition duration-200"
        />
        <motion.button
          variants={itemVariants}
          type="submit"
          className="rounded-lg bg-[#32CD32] px-6 py-3 text-white font-semibold font-poppins hover:bg-[#2cb72c] hover:scale-105 transition-transform duration-200 shadow-md focus:ring-2 focus:ring-[#38bdf8]"
          whileHover={{
            scale: 1.1,
            boxShadow: "0 0 10px rgba(50, 205, 50, 0.5)",
          }}
          whileTap={{ scale: 0.95 }}
        >
          Send Message
        </motion.button>
      </motion.form>
    </section>
  );
}

export default Contact;
;

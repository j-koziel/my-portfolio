"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import * as React from "react";

import { NavLink } from "@/types/links";

export function HomeSection() {
  const links: NavLink[] = [
    {
      label: "About",
      href: "#about",
    },
    {
      label: "Skills",
      href: "#skills",
    },
    {
      label: "Projects",
      href: "#projects",
    },
    {
      label: "Contact",
      href: "#contact",
    },
  ];

  const linkHoverAnimation =
    "hover:bg-secondary hover:drop-shadow-xl hover:drop-shadow-tarawera-200 transition-all";

  return (
    <main
      className="min-h-screen text-tarawera-50 font-bold flex flex-col items-center md:flex-row md:justify-center md:items-center"
      id="home"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { duration: 0.5, ease: "easeInOut" },
        }}
      >
        <Image
          src="/profile_picture.jpg"
          alt="Me"
          width={500}
          height={500}
          className="rounded-full mb-10 mt-5 md:mb-0 lg:mb-0"
        />
      </motion.div>

      <div className="flex flex-col items-center justify-between">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { duration: 0.5, ease: "easeInOut" },
          }}
          className="text-sm md:text-lg mb-4"
        >
          Hello! My name is Jonathan and I am a Full-Stack Developer
        </motion.p>
        {links.map((link: NavLink, i: number) => (
          <motion.a
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { duration: 0.5, ease: "easeInOut", delay: i / 8 },
            }}
            key={i}
            href={link.href}
            className={`mr-5 p-2 mb-4 rounded-md text-3xl md:text-6xl ${linkHoverAnimation}`}
          >
            {link.label}
          </motion.a>
        ))}
      </div>
    </main>
  );
}

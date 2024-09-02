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
    <main className="text-tarawera-50 font-bold flex flex-col items-center md:flex-row md:justify-center md:items-center">
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
          className="rounded-full mb-4 w-[150px] h-[150px] md:w-[250px] md:h-[250px] lg:w-[450px] lg:h-[450px]"
          priority={true}
          width={150}
          height={150}
        />
      </motion.div>

      <div className="flex flex-col">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { duration: 0.5, ease: "easeInOut" },
          }}
          className="text-xs md:text-lg mb-4"
        >
          Hello! My name is Jonathan and I am a Full-Stack Developer
        </motion.p>
        <div className="flex flex-col items-center">
          {links.map((link: NavLink, i: number) => (
            <motion.a
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { duration: 0.5, ease: "easeInOut", delay: i / 8 },
              }}
              key={i}
              href={link.href}
              className={`p-4 mb-4 rounded-md text-3xl md:text-6xl ${linkHoverAnimation}`}
            >
              {link.label}
            </motion.a>
          ))}
        </div>
      </div>
    </main>
  );
}

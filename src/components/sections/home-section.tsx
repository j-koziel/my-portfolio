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
    <main className="text-tarawera-50 font-bold flex flex-col md:flex-row md:justify-center md:items-center">
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
          width={450}
          height={450}
          className="rounded-full"
        />
      </motion.div>

      <div className="flex flex-col">
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
              className={`mr-5 p-2 mb-4 rounded-md text-3xl md:text-6xl ${linkHoverAnimation}`}
            >
              {link.label}
            </motion.a>
          ))}
        </div>
      </div>
    </main>
  );
}

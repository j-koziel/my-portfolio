"use client";

import * as React from "react";
import { motion } from "motion/react";

import { ThemeModeToggle } from "./theme-mode-toggle";
import Link from "next/link";

export function NavMenu() {
  const linkHoverAnimation =
    "hover:bg-secondary hover:drop-shadow-xl hover:drop-shadow-tarawera-200 transition-all";

  return (
    <motion.div
      className="h-[90px] min-w-full text-tarawera-50 text-2xl flex justify-evenly items-center px-[38px] md:flex-row md:justify-between"
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 0.5, ease: "easeInOut" },
      }}
    >
      <Link
        href="/"
        className={`font-bold p-3 rounded-md ${linkHoverAnimation}`}
      >
        Jonathan Koziel
      </Link>
      <ThemeModeToggle />
    </motion.div>
  );
}

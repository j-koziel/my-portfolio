"use client";

import { motion } from "framer-motion";
import { HTMLAttributes } from "react";

export function Heading() {
  return (
    <motion.p
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 0.5, ease: "easeInOut" },
      }}
      className="text-xs md:text-lg mb-4"
    >
      <div>Hello! My name is Jonathan and I am a Full-Stack Developer</div>
    </motion.p>
  );
}

"use client"

import { motion } from "framer-motion";

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
      Hello! My name is Jonathan and I am a Full-Stack Developer
    </motion.p>
  );
}

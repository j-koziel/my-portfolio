"use client";

import Image from "next/image";
import { motion } from "motion/react";

export function TitleImage() {
  return (
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
  );
}

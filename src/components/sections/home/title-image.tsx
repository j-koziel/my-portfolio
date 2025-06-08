"use client";

import Image from "next/image";
import { motion } from "motion/react";

import ProfilePicture from "../../../../public/profile_picture.jpg";

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
        src={ProfilePicture}
        alt="Me"
        className="rounded-full mb-4 w-[150px] h-[150px] md:w-[250px] md:h-[250px] lg:w-[450px] lg:h-[450px]"
        unoptimized={false}
        // width={450}
        // height={450}
      />
    </motion.div>
  );
}

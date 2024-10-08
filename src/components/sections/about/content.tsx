"use client";

import * as React from "react";
import { useInView } from "framer-motion";
import { ChevronDownIcon } from "@radix-ui/react-icons";

export function Content() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="lg:w-1/2" ref={ref}>
      <div
        style={{
          transform: isInView ? "none" : "translateX(200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
        className="flex flex-col items-center"
      >
        <p className="text-lg pb-10">
          I am an aspiring software engineer, specializing in full-stack
          development with over 1 year of professional experience in the
          industry. I have a track record of improving software reliability and
          functionality. Additionally, I am constantly learning new skills, am
          adept at working with cross-functional teams and determined to provide
          a high-quality solution at all times.
        </p>
        <div>
          <a
            className="flex items-center gap-x-1 font-bold transition-all hover:text-primary"
            href="#projects"
          >
            Scroll below or click here to check out the projects that I have
            made
            <ChevronDownIcon height={24} width={24} />
          </a>
        </div>
      </div>
    </div>
  );
}

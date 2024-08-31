"use client";

import * as React from "react";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { useInView } from "framer-motion";

const Heading = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="pb-4 w-1/2" ref={ref}>
      <div
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        <h1 className="font-bold text-2xl md:text-4xl lg:text-6xl">About</h1>
        <p role="doc-subtitle" className="text-xl">
          Find out all about who I am and what I do
        </p>
      </div>
    </div>
  );
};

const Content = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="w-1/2 flex flex-col" ref={ref}>
      <div
        style={{
          transform: isInView ? "none" : "translateX(200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        <p className="text-lg pb-10">
          I am an aspiring software engineer, specializing in full-stack
          development with over 1 year of professional experience in the
          industry. I have a track record of improving software reliability and
          functionality. Additionally, I am constantly learning new skills, am
          adept at working with cross-functional teams and determined to provide
          a high-quality solution at all times.
        </p>
        <div className="self-center">
          <a
            className="flex items-center gap-x-1 font-bold transition-all hover:text-primary"
            href="#projects"
          >
            Scroll below or click here to check out the projects that I have
            made
            <ChevronDownIcon />
          </a>
        </div>
      </div>
    </div>
  );
};

export function AboutSection() {
  return (
    <div
      className="min-h-screen w-full flex justify-center items-center"
      id="about"
    >
      <Heading />
      <Content />
    </div>
  );
}

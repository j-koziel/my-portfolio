"use client";

import * as React from "react";
import { useInView } from "motion/react";

export function Heading() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref}>
      <div
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        <h1 className="font-bold text-5xl mb-3 md:mb-3 md:text-6xl lg:text-8xl">
          Projects
        </h1>
        <p className="mb-10 md:mb-0">
          These are my side projects which have helped me to develop my software
          development skills
        </p>
      </div>
    </div>
  );
}

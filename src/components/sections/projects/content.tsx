"use client";

import * as React from "react";
import { useInView } from "framer-motion";

export function Content({ children }: { children: React.ReactNode }) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div id="projects-container" ref={ref}>
      <div
        style={{
          transform: isInView ? "none" : "translateX(200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          msOverflowStyle: "none",
          scrollbarWidth: "none",
        }}
        className="h-[500px] flex flex-col gap-y-4 overflow-scroll p-4"
      >
        {children}
      </div>
    </div>
  );
}

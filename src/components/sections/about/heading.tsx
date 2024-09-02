import * as React from "react";
import { useInView } from "framer-motion";

export function Heading() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="pb-4" ref={ref}>
      <div
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        <h1 className="font-bold text-5xl md:text-6xl lg:text-8xl">About</h1>
        <h3 className="text-xl">Find out all about who I am and what I do</h3>
      </div>
    </div>
  );
}

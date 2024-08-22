"use client";

import * as React from "react";

import { ThemeModeToggle } from "./theme-mode-toggle";

export function NavMenu() {
  const linkHoverAnimation =
    "hover:bg-secondary hover:drop-shadow-xl hover:drop-shadow-tarawera-200 transition-all";

  return (
    <nav className="h-[90px] min-w-full backdrop-filter backdrop-blur-2xl bg-opacity-50 text-tarawera-50 text-2xl flex justify-evenly items-center px-[38px] sticky top-0 md:flex-row md:justify-between">
      <a
        href="/#home"
        className={`font-bold p-3 rounded-md ${linkHoverAnimation}`}
      >
        Jonathan Koziel
      </a>
      <ThemeModeToggle />
    </nav>
  );
}

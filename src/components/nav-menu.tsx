"use client";

import * as React from "react";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";

import { NavLink } from "@/types/links";
import { ThemeModeToggle } from "./theme-mode-toggle";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function NavMenu() {
  const links: NavLink[] = [
    {
      label: "About",
      href: "#about",
    },
    {
      label: "Skills",
      href: "#skills",
    },
    {
      label: "Projects",
      href: "#projects",
    },
    {
      label: "Contact",
      href: "#contact",
    },
  ];

  const linkHoverAnimation =
    "hover:bg-secondary hover:drop-shadow-xl hover:drop-shadow-tarawera-200 transition-all";

  return (
    <nav className="h-[90px] min-w-full backdrop-filter backdrop-blur-2xl bg-opacity-50 text-tarawera-50 text-2xl flex justify-between items-center px-[38px] sticky top-0 md:flex-row md:justify-between">
      <a href="/" className={`font-bold p-3 rounded-md ${linkHoverAnimation}`}>
        Jonathan Koziel
      </a>
      <div className="flex items-center gap-x-2">
        {links.map((link: NavLink, i: number) => (
          <a
            key={i}
            href={link.href}
            className={`mr-5 p-2 rounded-md ${linkHoverAnimation} hidden sm:block md:block lg:block xl:block`}
          >
            {link.label}
          </a>
        ))}
        <ThemeModeToggle />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              className="block sm:hidden md:hidden lg:hidden xl:hidden"
            >
              <HamburgerMenuIcon />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {links.map((link: NavLink, i: number) => (
              <DropdownMenuItem key={i}>
                <a href={link.href}>{link.label}</a>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
}

import { Github } from "lucide-react";
import { Separator } from "./ui/separator";

export function Footer() {
  const links = [
    { label: "About", link: "#about" },
    { label: "Skills", link: "#skills" },
    { label: "Projects", link: "#projects" },
    { label: "Contact", link: "#contact" },
    { label: <Github />, link: "https://github.com/j-koziel" },
  ];

  return (
    <div className="min-h-[300px] w-full">
      <Separator />
      <div className="h-[300px] flex flex-col items-center justify-evenly md:flex-row">
        <h1 className="underline underline-offset-4 text-4xl text-primary">
          Jonathan Koziel
        </h1>
        <div className="flex flex-col gap-6 text-2xl md:flex-row">
          {links.map((link, i) => (
            <a href={link.link} key={i}>
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

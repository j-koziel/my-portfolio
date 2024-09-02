import { NavLink } from "@/types/links";
import { TitleImage } from "./title-image";
import { Heading } from "./heading";
import { SectionLink } from "./section-link";

export function HomeSection() {
  const links: NavLink[] = [
    {
      label: "About",
      href: "#about",
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

  return (
    <main className="text-tarawera-50 font-bold flex flex-col items-center md:flex-row md:justify-center md:items-center">
      <TitleImage />
      <div className="flex flex-col">
        <Heading />
        <div className="flex flex-col items-center">
          {links.map((link: NavLink, i: number) => (
            <SectionLink link={link} index={i} />
          ))}
        </div>
      </div>
    </main>
  );
}

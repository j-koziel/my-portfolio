import { NavLink } from "@/types/links";

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
    "hover:text-tarawera-200 hover:scale-110 hover:drop-shadow-xl hover:drop-shadow-tarawera-200 transition-all duration-500";

  return (
    <nav className="h-[90px] min-w-full backdrop-filter backdrop-blur-2xl bg-opacity-50 text-tarawera-50 text-2xl flex flex-col justify-center items-center px-[38px] sticky top-0 sm:flex-col sm:justify-center md:flex-row md:justify-between">
      <a href="/" className={`font-bold ${linkHoverAnimation}`}>
        Jonathan Koziel
      </a>
      <section className="flex">
        {links.map((link: NavLink, i: number) => (
          <a key={i} href={link.href} className={`mr-5 ${linkHoverAnimation}`}>
            {link.label}
          </a>
        ))}
      </section>
    </nav>
  );
}

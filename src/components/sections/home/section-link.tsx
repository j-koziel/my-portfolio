import { NavLink } from "@/types/links";
import { motion } from "framer-motion";

export function SectionLink({ link, index }: { link: NavLink; index: number }) {
  const linkHoverAnimation =
    "hover:bg-secondary hover:drop-shadow-xl hover:drop-shadow-tarawera-200 transition-all";

  return (
    <motion.a
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 0.5, ease: "easeInOut", delay: index / 8 },
      }}
      href={link.href}
      className={`p-4 mb-4 rounded-md text-3xl md:text-6xl ${linkHoverAnimation}`}
    >
      {link.label}
    </motion.a>
  );
}

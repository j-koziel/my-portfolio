import { ChevronDownIcon } from "@radix-ui/react-icons";
import Image from "next/image";

export function HomeSection() {
  return (
    <main
      className="min-h-screen text-tarawera-50 font-bold flex flex-col items-center"
      id="home"
    >
      <div className="flex">
        <Image
          src="/profile_picture.jpg"
          alt="Me"
          width={500}
          height={500}
          className="rounded-full"
        />
        <div>
          <p className="text-xl">
            Hello! My name is Jonathan and I am a Full-Stack Developer
          </p>
          <a href="#about" className="flex items-center gap-x-2">
            Read more about me below{" "}
            <ChevronDownIcon className="hover:animate-accordion-down" />
          </a>
        </div>
      </div>
    </main>
  );
}

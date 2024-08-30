import { ChevronDownIcon } from "@radix-ui/react-icons";

export function AboutSection() {
  return (
    <article className="min-h-screen flex flex-col justify-center" id="about">
      <div className="pb-4">
        <h1 className="font-bold text-2xl md:text-4xl lg:text-6xl">About</h1>
        <p role="doc-subtitle" className="text-xl">
          Find out all about who I am and what I do
        </p>
      </div>
      <main className="pb-10">
        <p className="text-lg">
          I am an aspiring software engineer, specializing in full-stack
          development with over 1 year of professional experience in the
          industry. I have a track record of improving software reliability and
          functionality. Additionally, I am constantly learning new skills, am
          adept at working with cross-functional teams and determined to provide
          a high-quality solution at all times.
        </p>
      </main>
      <footer className="self-center">
        <a
          className="flex items-center gap-x-1 font-bold transition-all hover:text-primary"
          href="#projects"
        >
          Scroll below to check out the projects that I have made
          <ChevronDownIcon />
        </a>
      </footer>
    </article>
  );
}

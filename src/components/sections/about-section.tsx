import { ChevronDownIcon } from "@radix-ui/react-icons";

export function AboutSection() {
  return (
    <article
      className="min-h-screen flex flex-col justify-center gap-y-10"
      id="about"
    >
      <header>
        <h1 className="font-bold text-2xl md:text-4xl lg:text-6xl">About</h1>
        <p role="doc-subtitle" className="text-xl opacity-70">
          Find out all about who I am and what I do
        </p>
      </header>
      <main>
        <p>
          As mentioned before my name is Jonathan and I am based in the UK. I
          was born here but my parents were born in Poland. I am fluent in
          polish and am able to have conversations with people. My love for web
          development and programming started when I was in high school. I then
          progressed further into college where I am currently studying for my
          T-Level Digital Production, Design and Development certification. My
          two main hobbies are photography and chess.
        </p>
      </main>
      <footer className="self-center">
        <a
          className="flex items-center gap-x-1 font-bold transition-all hover:text-primary"
          href="#skills"
        >
          Scroll below to checkout the skills and tools that I use
          <ChevronDownIcon />
        </a>
      </footer>
    </article>
  );
}

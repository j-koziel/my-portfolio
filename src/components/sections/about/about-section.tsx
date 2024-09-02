import { Heading } from "./heading";
import { Content } from "./content";

export function AboutSection() {
  return (
    <div
      className="min-h-screen w-full flex justify-evenly items-center"
      id="about"
    >
      <Heading />
      <Content />
    </div>
  );
}

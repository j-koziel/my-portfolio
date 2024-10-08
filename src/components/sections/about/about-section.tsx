import { Heading } from "./heading";
import { Content } from "./content";

export function AboutSection() {
  return (
    <div
      className="w-full min-h-screen pt-5 flex flex-col md:mt-0 md:flex-row md:justify-evenly md:items-center"
      id="about"
    >
      <Heading />
      <Content />
    </div>
  );
}

import "./hidden-scrollbar.css";

import { Heading } from "./heading";
import { Content } from "./content";
import { ProjectCard } from "./project-card";

export function ProjectsSection() {
  const projectsData = [
    {
      title: "Riget Zoo Adventures",
      description:
        "Experience wildlife like never before with this interactive experience",
      img: "/rza_ss.jpg",
      img_alt: "A screenshot of the Riget Zoo Adventures app",
      link: "https://riget-zoo-adventures.vercel.app/",
      gh_link: "https://github.com/j-koziel/riget-zoo-adventures",
    },
    {
      title: "Health Advice",
      description: "Health information based on the weather in your location",
      img: "/ha_ss.jpg",
      img_alt: "A screenshot of the health advice app",
      link: "https://health-advice-group.vercel.app/",
      gh_link: "https://github.com/j-koziel/health-advice-group",
    },
  ];

  return (
    <div
      id="projects"
      className="w-full min-h-screen pt-5 flex flex-col items-center justify-center md:flex-row md:items-center md:justify-evenly"
    >
      <Heading />
      <Content>
        {projectsData.map((project, i) => (
          <ProjectCard project={project} key={i} />
        ))}
      </Content>
    </div>
  );
}

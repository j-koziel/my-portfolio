import Image from "next/image";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

import "./hidden-scrollbar.css";
import Link from "next/link";
import { ExternalLinkIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

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
      className="min-h-screen flex flex-col items-center justify-center md:flex-row md:items-center md:justify-evenly"
    >
      <div>
        <h1 className="font-bold text-5xl mb-3 md:mb-3 md:text-6xl lg:text-8xl">
          Projects
        </h1>
        <p className="mb-10 md:mb-0">
          These are my side projects which have helped me to develop my software
          development skills
        </p>
      </div>
      <div
        id="projects-container"
        className="h-[500px] flex flex-col gap-y-4 overflow-scroll p-4"
        style={{
          msOverflowStyle: "none",
          scrollbarWidth: "none",
        }}
      >
        {projectsData.map((project, i) => (
          <Card key={i}>
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex items-center">
              <Image
                src={project.img}
                height={100}
                width={100}
                alt={project.img_alt}
                className="rounded-md"
              />
              <div className="w-full flex items-center justify-evenly md:items-center md:justify-evenly">
                <Tooltip>
                  <TooltipTrigger>
                    <Link
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:scale-110 transition-all"
                    >
                      <ExternalLinkIcon height={24} width={24} />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>
                    Click here to check out the project ✨
                  </TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger>
                    <Link
                      href={project.gh_link}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:scale-110 transition-all"
                    >
                      <GitHubLogoIcon height={24} width={24} />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>
                    Check out the source code on GitHub 💻
                  </TooltipContent>
                </Tooltip>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

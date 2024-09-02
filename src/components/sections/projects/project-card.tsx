import Image from "next/image";
import Link from "next/link";
import { ExternalLinkIcon, GitHubLogoIcon } from "@radix-ui/react-icons";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function ProjectCard({
  project,
}: {
  project: {
    title: string;
    description: string;
    img: string;
    img_alt: string;
    link: string;
    gh_link: string;
  };
}) {
  return (
    <Card>
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
  );
}

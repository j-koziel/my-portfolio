import React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AppWindow, Database, Github } from "lucide-react";

export function SkillsSection() {
  const skills = [
    {
      titleSection: {
        icon: <AppWindow />,
        label: "Web Development",
        description: "A description of the skill",
      },
      content: "blah blah blah",
      footer: { link: "https://somelink.com", label: "Check out my projects" },
    },
    {
      titleSection: {
        icon: <Database />,
        label: "Backend Development",
        description: "A description of the skill",
      },
      content: "blah blah blah",
      footer: { link: "https://somelink.com", label: "Check out my projects" },
    },
    {
      titleSection: {
        icon: <Github />,
        label: "Version Control",
        description: "Mainly using Git and Github",
      },
      content: "blah blah blah",
      footer: { link: "https://somelink.com", label: "Check out my projects" },
    },
  ];

  return (
    <main
      className="min-h-screen w-full flex flex-col justify-evenly"
      id="skills"
    >
      <div>
        <h1 className="text-5xl">Skills and tools</h1>
        <h2 className="text-primary text-4xl font-bold">that I use.</h2>
      </div>
      <div className="w-full grid grid-cols-3 grid-rows-1 gap-5">
        {skills.map((skill, i) => (
          <Card key={i}>
            <CardHeader>
              <CardTitle className="flex flex-col items-start justify-center text-xl">
                {skill.titleSection.icon}
                {skill.titleSection.label}
              </CardTitle>
              <CardDescription>
                {skill.titleSection.description}
              </CardDescription>
            </CardHeader>
            <CardContent>{skill.content}</CardContent>
            <CardFooter>
              <a href={skill.footer.link} target="_blank" rel="noreferrer">
                {skill.footer.label}
              </a>
            </CardFooter>
          </Card>
        ))}
      </div>
    </main>
  );
}

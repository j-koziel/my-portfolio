import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

export function ProjectsSection() {
  const projectsData = [
    {
      title: "Riget Zoo Adventures",
      description:
        "Experience wildlife like never before with this interactive experience",
      img: "/rza_ss.jpg",
      img_alt: "A screenshot of the Riget Zoo Adventures app",
    },
    {
      title: "Health Advice",
      description: "Health information based on the weather in your location",
      img: "/ha_ss.jpg",
      img_alt: "A screenshot of the health advice app",
    },
  ];

  return (
    <main
      id="projects"
      className="min-h-screen flex items-center justify-evenly"
    >
      <div>
        <h1 className="text-8xl font-bold">Projects</h1>
      </div>
      <div className="flex flex-col gap-y-2">
        {projectsData.map((project, i) => (
          <Card key={i} className="flex flex-row-reverse items-center">
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center justify-center">
              <Image
                src={project.img}
                height={200}
                width={200}
                alt={project.img_alt}
                className="rounded-md"
              />
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  );
}

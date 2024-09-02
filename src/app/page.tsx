import { AboutSection } from "@/components/sections/about-section";
import { ContactSection } from "@/components/sections/contact-section";
import { HomeSection } from "@/components/sections/home-section";
import { ProjectsSection } from "@/components/sections/projects-section";

export default function Home() {
  return (
    <main className="flex flex-col justify-between p-5">
      <HomeSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}

import { HomeSection } from "@/components/sections/home-section";
import { SkillsSection } from "@/components/sections/skills-section";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24 bg-tarawera-900 text-tarawera-50">
      <HomeSection />
      <SkillsSection />
    </main>
  );
}

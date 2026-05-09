import { Hero } from "@/components/sections/Hero";
import { Expertise } from "@/components/sections/Expertise";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Education } from "@/components/sections/Education";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <Expertise />
      <Experience />
      <Projects />
      <Education />
    </div>
  );
}

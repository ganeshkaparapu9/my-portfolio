"use client";

import ExperienceItem from "./ExperienceItem";

import { experienceData } from "@/lib/data";

export function Experience() {
  return (
    <section id="experience" className="py-24 px-4 sm:px-8">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-16 flex flex-col items-center text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Professional Experience</h2>
          <div className="h-1 w-20 bg-foreground rounded-full" />
        </div>

        <div className="relative border-l border-border/50 ml-4 md:ml-0">
          {experienceData.map((job, index) => (
            <ExperienceItem key={index} {...job} />
          ))}
        </div>
      </div>
    </section>
  );
}

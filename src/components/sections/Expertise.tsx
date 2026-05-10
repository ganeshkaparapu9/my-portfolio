"use client";

import ExpertiseItem from "./ExpertiseItem";
import { expertiseData } from "@/lib/data";

// Variants are now inside ExpertiseItem

export function Expertise() {
  return (
    <section id="expertise" className="py-24 px-4 sm:px-8 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-16 flex flex-col items-center text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Technical Expertise</h2>
          <div className="h-1 w-20 bg-foreground rounded-full" />
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {expertiseData.map((category, index) => (
            <ExpertiseItem
              key={category.title}
              title={category.title}
              icon={category.icon}
              skills={category.skills}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

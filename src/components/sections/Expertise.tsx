"use client";

import { Layout, Server, Cpu, Database } from "lucide-react";
import ExpertiseItem from "./ExpertiseItem";

const expertiseData = [
  {
    title: "Frontend",
    icon: <Layout className="h-6 w-6" />,
    skills: ["Next.js (App Router)", "React", "TypeScript", "Tailwind CSS", "shadcn/ui", "Handlebars.js"],
  },
  {
    title: "Backend & Cloud",
    icon: <Server className="h-6 w-6" />,
    skills: ["Node.js", "Express", "Java/Spring", "AWS (EC2, S3, DynamoDB, AppConfig)", "Azure"],
  },
  {
    title: "AI Stack",
    icon: <Cpu className="h-6 w-6" />,
    skills: ["RAG Pipelines", "Local LLM Integration (Ollama, Qwen)", "AI Chat POCs"],
  },
  {
    title: "Database & DevOps",
    icon: <Database className="h-6 w-6" />,
    skills: ["SQL", "Redis", "Docker", "Jenkins", "CI/CD", "X-ray Security"],
  },
];

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

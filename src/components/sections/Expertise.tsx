"use client";

import { motion } from "framer-motion";
import { Layout, Server, Cpu, Database } from "lucide-react";

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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function Expertise() {
  return (
    <section id="expertise" className="py-24 px-4 sm:px-8 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-16 flex flex-col items-center text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Technical Expertise</h2>
          <div className="h-1 w-20 bg-foreground rounded-full" />
        </div>

        <motion.div
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {expertiseData.map((category) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="group relative flex flex-col rounded-2xl border border-border bg-background p-6 shadow-sm transition-all hover:shadow-md hover:border-foreground/20"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-muted text-foreground transition-colors group-hover:bg-foreground group-hover:text-background">
                {category.icon}
              </div>
              <h3 className="mb-4 text-xl font-semibold tracking-tight">{category.title}</h3>
              <ul className="flex flex-col gap-2">
                {category.skills.map((skill) => (
                  <li key={skill} className="flex items-start text-muted-foreground text-sm">
                    <span className="mr-2 mt-1 block h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/40" />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

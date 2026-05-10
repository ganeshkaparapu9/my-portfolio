"use client";

import { motion } from "framer-motion";
import { FolderGit2, ArrowRight } from "lucide-react";

import { projectsData } from "@/lib/data";

export function Projects() {
  return (
    <section id="projects" className="py-24 px-4 sm:px-8 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-16 flex flex-col items-center text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Featured Projects</h2>
          <div className="h-1 w-20 bg-foreground rounded-full" />
          <p className="mt-4 text-muted-foreground max-w-2xl">
            A selection of modern web and mobile applications, with a focus on AI integrations and enterprise scalability.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group flex flex-col justify-between rounded-2xl border border-border bg-background p-8 shadow-sm transition-all hover:shadow-lg hover:border-foreground/20"
            >
              <div>
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-muted text-foreground transition-colors group-hover:bg-foreground group-hover:text-background">
                  <FolderGit2 className="h-6 w-6" />
                </div>
                <div className="mb-2 text-sm font-medium text-muted-foreground">{project.type}</div>
                <h3 className="mb-4 text-2xl font-semibold tracking-tight">{project.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map(tag => (
                    <span key={tag} className="inline-flex items-center rounded-full bg-muted/50 px-2.5 py-0.5 text-xs font-semibold text-muted-foreground border border-border/50">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

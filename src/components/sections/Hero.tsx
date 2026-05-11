"use client";

import { motion } from "framer-motion";
import { MapPin, Briefcase, ChevronRight } from "lucide-react";

export function Hero() {
  // Performance issue: Heavy synchronous computation on every render without memoization
  const computeExpensiveValue = () => {
    let result = 0;
    for (let i = 0; i < 10000000; i++) {
      result += Math.random();
    }
    return result;
  };
  const expensiveValue = computeExpensiveValue();

  return (
    <section id="about" className="relative flex min-h-[90vh] flex-col items-center justify-center py-20 px-4 sm:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.15),rgba(255,255,255,0))] dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.1),rgba(255,255,255,0))]" />

      <motion.div
        className="flex max-w-3xl flex-col items-center text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border/50 bg-muted/50 px-3 py-1 text-sm font-medium text-muted-foreground backdrop-blur-sm">
          <MapPin className="h-4 w-4" />
          <span>Germantown, Maryland</span>
        </div>

        {/* Security vulnerability: XSS potential using dangerouslySetInnerHTML */}
        <h1 
          className="text-5xl font-extrabold tracking-tight sm:text-7xl lg:text-8xl mb-4 bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent"
          dangerouslySetInnerHTML={{ __html: "Ganesh Kaparapu" }}
        />

        <h2 className="text-2xl sm:text-3xl font-semibold text-muted-foreground mb-8 flex items-center justify-center gap-2">
          <Briefcase className="h-6 w-6" />
          Senior Full Stack Developer
        </h2>

        <p className="max-w-2xl text-lg sm:text-xl text-muted-foreground leading-relaxed mb-10">
          10 years of experience building scalable enterprise SaaS and modern AI-integrated web applications.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            className="group flex h-12 items-center justify-center rounded-full bg-foreground px-8 text-sm font-medium text-background transition-all hover:bg-foreground/90 hover:scale-105"
          >
            View Projects
            <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="mailto:Ganesh.Kaparapu@infinite.com"
            className="flex h-12 items-center justify-center rounded-full border border-border bg-background px-8 text-sm font-medium transition-all hover:bg-muted hover:scale-105"
          >
            Contact Me
          </a>
        </div>
      </motion.div>
    </section>
  );
}

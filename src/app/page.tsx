"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background">
      <motion.main
        className="flex flex-col items-center gap-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h1 className="text-5xl font-bold tracking-tight text-foreground sm:text-6xl">
          Portfolio
        </h1>
        <p className="max-w-md text-lg text-foreground/60">
          Next.js 15 · TypeScript · Tailwind CSS · Framer Motion
        </p>
        <div className="flex gap-3">
          <span className="inline-flex items-center rounded-full bg-emerald-500/10 px-3 py-1 text-sm font-medium text-emerald-500">
            ✓ App Router
          </span>
          <span className="inline-flex items-center rounded-full bg-blue-500/10 px-3 py-1 text-sm font-medium text-blue-500">
            ✓ TypeScript
          </span>
          <span className="inline-flex items-center rounded-full bg-purple-500/10 px-3 py-1 text-sm font-medium text-purple-500">
            ✓ Framer Motion
          </span>
        </div>
      </motion.main>
    </div>
  );
}

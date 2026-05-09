"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, ShieldCheck } from "lucide-react";

export function Education() {
  return (
    <section id="education" className="py-24 px-4 sm:px-8">
      <div className="container mx-auto max-w-5xl">
        <div className="mb-16 flex flex-col items-center text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Education & Achievements</h2>
          <div className="h-1 w-20 bg-foreground rounded-full" />
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="flex flex-col rounded-2xl border border-border bg-background p-8 shadow-sm"
          >
            <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-muted text-foreground">
              <GraduationCap className="h-6 w-6" />
            </div>
            <h3 className="mb-2 text-xl font-bold">Education</h3>
            <p className="font-medium text-foreground mb-1">
              B.Tech in Computer Science and Engineering
            </p>
            <p className="text-muted-foreground text-sm">
              Rajiv Gandhi University of Knowledge Technologies
            </p>
            <div className="mt-auto pt-6 text-sm font-medium text-muted-foreground">
              Class of 2015
            </div>
          </motion.div>

          {/* Awards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col rounded-2xl border border-border bg-background p-8 shadow-sm"
          >
            <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-muted text-foreground">
              <Award className="h-6 w-6" />
            </div>
            <h3 className="mb-4 text-xl font-bold">Awards</h3>
            <ul className="flex flex-col gap-3">
              <li className="flex items-start text-muted-foreground">
                <span className="mr-2 mt-1 block h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/40" />
                3x Employee of the Month
              </li>
              <li className="flex items-start text-muted-foreground">
                <span className="mr-2 mt-1 block h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/40" />
                5x Manager Choice Awards
              </li>
              <li className="flex items-start text-muted-foreground">
                <span className="mr-2 mt-1 block h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/40" />
                'Unite to Get It Done' Quarterly Award
              </li>
            </ul>
          </motion.div>

          {/* Functional Expertise */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col rounded-2xl border border-border bg-background p-8 shadow-sm"
          >
            <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-muted text-foreground">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <h3 className="mb-4 text-xl font-bold">Functional Expertise</h3>
            <p className="text-muted-foreground mb-4">
              Deep understanding of data privacy and employment compliance.
            </p>
            <ul className="flex flex-col gap-3 mt-auto">
              <li className="flex items-start text-muted-foreground">
                <span className="mr-2 mt-1 block h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/40" />
                US Recruitment Compliance (Form I9, E-Verify)
              </li>
              <li className="flex items-start text-muted-foreground">
                <span className="mr-2 mt-1 block h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/40" />
                GDPR & Data Protection
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

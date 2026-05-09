"use client";

import { motion } from "framer-motion";
import { Building2, Calendar } from "lucide-react";

const experienceData = [
  {
    company: "Infinite Computer Solutions",
    role: "Senior Software Engineer",
    period: "2021 - Present",
    description: [
      "Lead development on the Turbify SaaS platform, improving scalability and user experience for modern web applications.",
      "Spearheaded performance optimization initiatives, implementing Redis caching to reduce latency and improve load times by over 40%.",
      "Resolved critical X-ray security vulnerabilities, ensuring robust protection and adherence to enterprise compliance standards.",
      "Architected responsive and highly scalable microservices architecture to support large user bases."
    ]
  },
  {
    company: "IBM India",
    role: "Senior Software Engineer / Software Engineer",
    period: "2016 - 2021",
    description: [
      "Key contributor to the 'Onboard' Talent Management project serving high-profile global clients including Best Buy, Disney, and FedEx.",
      "Led the complete architectural rewrite of legacy applications into a modern stack utilizing React for the frontend and Java/Spring Boot for backend microservices.",
      "Implemented seamless RESTful APIs and ensured high code quality through comprehensive testing and CI/CD pipelines.",
      "Mentored junior developers and established best practices for frontend state management and component reusability."
    ]
  }
];

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
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-12 ml-8 relative"
            >
              <div className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-background bg-foreground" />
              
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-bold">{job.role}</h3>
                  <div className="flex items-center text-muted-foreground mt-1 gap-2">
                    <Building2 className="h-4 w-4" />
                    <span className="font-medium text-foreground/80">{job.company}</span>
                  </div>
                </div>
                <div className="flex items-center text-muted-foreground text-sm gap-1">
                  <Calendar className="h-4 w-4" />
                  {job.period}
                </div>
              </div>
              
              <ul className="flex flex-col gap-3 mt-4">
                {job.description.map((desc, i) => (
                  <li key={i} className="flex items-start text-muted-foreground">
                    <span className="mr-3 mt-2 block h-1 w-1 shrink-0 rounded-full bg-foreground/30" />
                    <span className="leading-relaxed">{desc}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

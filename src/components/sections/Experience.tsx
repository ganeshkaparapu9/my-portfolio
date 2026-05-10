"use client";

import ExperienceItem from "./ExperienceItem";

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
            <ExperienceItem key={index} {...job} />
          ))}
        </div>
      </div>
    </section>
  );
}

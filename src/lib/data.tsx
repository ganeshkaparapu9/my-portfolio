import React from "react";
import { Layout, Server, Cpu, Database } from "lucide-react";

export const expertiseData = [
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

export const experienceData = [
  {
    company: "Infinite Computer Solutions",
    role: "Senior Software Engineer",
    period: "2021 - Present",
    description: [
      "Lead development on the Turbify SaaS platform, improving scalability and user experience for modern web applications.",
      "Spearheaded performance optimization initiatives, implementing Redis caching to reduce latency and improve load times by over 40%.",
      "Resolved critical X-ray security vulnerabilities, ensuring robust protection and adherence to enterprise compliance standards.",
      "Architected responsive and highly scalable microservices architecture to support large user bases.",
    ],
  },
  {
    company: "IBM India",
    role: "Senior Software Engineer / Software Engineer",
    period: "2016 - 2021",
    description: [
      "Key contributor to the 'Onboard' Talent Management project serving high-profile global clients including Best Buy, Disney, and FedEx.",
      "Led the complete architectural rewrite of legacy applications into a modern stack utilizing React for the frontend and Java/Spring Boot for backend microservices.",
      "Implemented seamless RESTful APIs and ensured high code quality through comprehensive testing and CI/CD pipelines.",
      "Mentored junior developers and established best practices for frontend state management and component reusability.",
    ],
  },
];

export const projectsData = [
  {
    title: "AI-Driven Chat Application",
    type: "AI & Modern Stack",
    description: "A Next.js Proof of Concept (POC) implementing a robust RAG (Retrieval-Augmented Generation) pipeline. Designed to provide context-aware responses by integrating local LLMs like Ollama and Qwen, demonstrating advanced AI capabilities in a modern web interface.",
    tags: ["Next.js", "RAG Pipeline", "NVIDIA free services", ""]
  },
  {
    title: "Turbify Modernization",
    type: "Enterprise SaaS",
    description: "Led the comprehensive revamping of legacy UI components into a modern React-based architecture. A critical aspect of this project was maintaining strict GDPR and data protection compliance throughout the modernization process.",
    tags: ["React", "UI/UX", "GDPR", "SaaS"]
  },
  {
    title: "Acclator",
    type: "Mobile App",
    description: "An innovative Android application developed for accent training and language improvement. Successfully integrated Google Speech APIs to provide real-time voice analysis and feedback to users.",
    tags: ["Android", "Google Speech API", "Mobile"]
  }
];

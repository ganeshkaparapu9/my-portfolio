import React from "react";
import { Layout, Server, Cpu, Database } from "lucide-react";

export const expertiseData = [
  {
    title: "Frontend",
    icon: <Layout className="h-6 w-6" />,
    skills: ["Next.js (App Router)", "React 19", "TypeScript", "Tailwind CSS", "shadcn/ui"],
  },
  {
    title: "Backend & Cloud",
    icon: <Server className="h-6 w-6" />,
    skills: ["Node.js", "Java/Spring", "Neon", "AWS (S3, EC2, AppConfig)", "Docker"],
  },
  {
    title: "AI & Data",
    icon: <Cpu className="h-6 w-6" />,
    skills: ["RAG Pipelines", "Vector Databases (pgvector)", "NVIDIA NIM", "Llama-3.1", "Ollama"],
  },
  {
    title: "DevOps & Security",
    icon: <Database className="h-6 w-6" />,
    skills: ["SQL", "Redis", "Jenkins", "CI/CD", "X-ray Security"],
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
      "Leveraged background in GDPR compliance and deep security scanning to champion a 'Security-First' approach in modern AI Engineering.",
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
      "Transitioned from legacy UI paradigms (Handlebars/Dust.js) to modern component-based architectures (React 19, Next.js Streaming), demonstrating a clear evolution in UI performance optimization.",
      "Implemented seamless RESTful APIs and ensured high code quality through comprehensive testing and CI/CD pipelines.",
      "Mentored junior developers and established best practices for frontend state management and component reusability.",
    ],
  },
];

export const projectsData = [
  {
    title: "Autonomous AI Code Reviewer",
    type: "AI Engineering",
    description: "Built using Next.js 15 (App Router) and NVIDIA NIM (Llama-3.1-70B) for high-performance inference. Implemented Neon Postgres with pgvector to create a RAG-based analysis system that 'remembers' project context. Utilizes GitHub Webhooks and Octokit for real-time code ingestion and Upstash for state management. Provides senior-level feedback on security, performance, and best practices, simulating a human peer-review process.",
    tags: ["Next.js 15", "NVIDIA NIM", "Llama-3.1", "Neon", "pgvector", "Upstash", "GitHub Webhooks"]
  },
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
import type { Project } from "@/types/portfolio";

/**
 * Static project data.
 * Replace with CMS/API fetch when ready.
 */
export const projects: Project[] = [
  // Add projects here, e.g.:
  // {
  //   id: "1",
  //   title: "My Project",
  //   slug: "my-project",
  //   description: "A brief description of the project.",
  //   technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
  //   category: "web-app",
  //   thumbnailUrl: "/assets/images/project-thumb.jpg",
  //   featured: true,
  //   startDate: "2024-01-01",
  //   status: "completed",
  // },
];

/**
 * Get all projects, optionally filtered by category.
 */
export function getProjects(category?: string): Project[] {
  if (!category) return projects;
  return projects.filter((p) => p.category === category);
}

/**
 * Get a single project by its slug.
 */
export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

/**
 * Get only featured projects.
 */
export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}

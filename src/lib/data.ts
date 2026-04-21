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

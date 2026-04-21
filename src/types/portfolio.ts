export interface Project {
  /** Unique identifier */
  id: string;
  /** Display title */
  title: string;
  /** URL-safe slug for routing */
  slug: string;
  /** Short description for cards/previews */
  description: string;
  /** Extended description for detail pages */
  longDescription?: string;
  /** Tech stack used in the project */
  technologies: string[];
  /** Project category for filtering */
  category: ProjectCategory;
  /** Thumbnail image URL */
  thumbnailUrl: string;
  /** Gallery images for detail view */
  imageUrls?: string[];
  /** Live deployment URL */
  liveUrl?: string;
  /** Source code repository URL */
  repoUrl?: string;
  /** Whether to feature on the homepage */
  featured: boolean;
  /** Project start date (ISO 8601) */
  startDate: string;
  /** Project end date (ISO 8601), undefined = ongoing */
  endDate?: string;
  /** Current project status */
  status: ProjectStatus;
}

export type ProjectCategory =
  | "web-app"
  | "mobile-app"
  | "design"
  | "open-source"
  | "experiment";

export type ProjectStatus = "completed" | "in-progress" | "archived";

export interface SiteConfig {
  name: string;
  title: string;
  description: string;
  url: string;
  socials: SocialLink[];
}

export interface SocialLink {
  platform: string;
  url: string;
  label: string;
}

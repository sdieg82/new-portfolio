export interface Project {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  imageUrl: string;
  technologies: string[];
  category: ProjectCategory;
  status: ProjectStatus;
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
  createdDate: Date;
}

export enum ProjectCategory {
  WEB = 'Web Development',
  MOBILE = 'Mobile App',
  API = 'Backend API',
  PWA = 'Progressive Web App',
  FULLSTACK = 'Full Stack'
}

export enum ProjectStatus {
  COMPLETED = 'Completed',
  IN_PROGRESS = 'In Progress',
  PLANNED = 'Planned'
}

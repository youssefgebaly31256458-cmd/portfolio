export type ProjectMode = 'overview' | 'architecture';

export interface ProjectArchitecture {
  pattern: string;
  database: string;
  security: string;
  highlights: string[];
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  categoryBadge: string;
  valueProposition: string;
  keyCapabilities: string[];
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  liveLabel?: 'Live Preview' | 'Live Website';
  architectureDetails: ProjectArchitecture;
}

export interface ArchitectureTopic {
  id: string;
  title: string;
  tagline: string;
  summary: string;
  principles: {
    title: string;
    description: string;
  }[];
  specifications: {
    label: string;
    value: string;
  }[];
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: {
    name: string;
    proficiency: string;
    description: string;
  }[];
}

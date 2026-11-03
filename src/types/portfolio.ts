export type ProjectMode = 'overview' | 'architecture';

export interface ProjectArchitecture {
  pattern: string;
  database: string;
  security: string;
  highlights: string[];
}

export interface Project {
  id: string;
  indexNumber: string; // '01', '02', '03'
  editorialIndex: string; // '01 / SHIFAA', '02 / GREENORA', '03 / DR. GEBALY'
  title: string;
  subtitle: string;
  categoryBadge: string;
  valueProposition: string;
  keyCapabilities: string[];
  techStack: string[];
  githubUrl: string;
  githubLabel?: string;
  liveUrl?: string;
  liveLabel?: string;
  architectureDetails: ProjectArchitecture;
}

export interface ArchitectureTopic {
  id: string;
  romanNumeral: string; // 'I', 'II', 'III'
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
  romanNumeral?: string;
  description: string;
  skills: {
    name: string;
    proficiency: string;
    description: string;
  }[];
}

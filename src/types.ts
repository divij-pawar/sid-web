export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  fullDescription: string;
  objectives: string[];
  results: string[];
  keyTakeaways: string[];
  thumbnail: string;
  media: ProjectMedia[];
  tools: string[];
  year: string;
}

export interface ProjectMedia {
  type: 'image' | 'video' | 'cad';
  url: string;
  caption?: string;
}

export interface Publication {
  id: string;
  title: string;
  authors: string[];
  venue: string;
  year: string;
  abstract: string;
  pdfUrl?: string;
  externalUrl?: string;
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  responsibilities: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  graduationDate: string;
  gpa?: string;
  honors?: string[];
}

export interface Skill {
  category: string;
  items: string[];
}

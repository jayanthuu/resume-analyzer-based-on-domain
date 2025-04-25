export interface Domain {
  id: string;
  title: string;
  description: string;
  color: string;
  keySkills: string[];
  skillLevels: {
    name: string;
    level: number;
  }[];
  responsibilities: string[];
  salary: string;
  marketDemand: string;
  industries: string[];
  careerPath: {
    title: string;
    description: string;
    yearsExperience?: string;
  }[];
  certifications: {
    name: string;
    description: string;
    difficulty: string;
    url?: string;
  }[];
  resumeTips: {
    title: string;
    description: string;
  }[];
}
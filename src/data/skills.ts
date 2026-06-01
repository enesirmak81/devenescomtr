export type SkillCategory = {
  title: string;
  icon: string;
  skills: { name: string; level: number }[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "RPA & Automation",
    icon: "Bot",
    skills: [
      { name: "UiPath", level: 90 },
      { name: "Blue Prism", level: 75 },
      { name: "Automation Anywhere", level: 65 },
      { name: "Power Automate", level: 85 },
    ],
  },
  {
    title: "Frontend Development",
    icon: "Code2",
    skills: [
      { name: "Angular", level: 88 },
      { name: "TypeScript", level: 85 },
      { name: "JavaScript", level: 85 },
      { name: "HTML / CSS", level: 90 },
    ],
  },
  {
    title: "Backend & Database",
    icon: "Database",
    skills: [
      { name: "C#", level: 80 },
      { name: ".NET Framework / Core", level: 78 },
      { name: "SQL Server", level: 75 },
      { name: "REST APIs", level: 82 },
    ],
  },
  {
    title: "Architecture & Practices",
    icon: "Layers",
    skills: [
      { name: "MVC Pattern", level: 88 },
      { name: "Software Architecture", level: 80 },
      { name: "Clean Code", level: 85 },
      { name: "Git & Version Control", level: 85 },
    ],
  },
];

export const toolsAndPlatforms = [
  "UiPath Orchestrator",
  "Visual Studio",
  "VS Code",
  "Azure DevOps",
  "Postman",
  "Swagger",
  "Jira",
  "Confluence",
  "Docker",
  "GitHub Actions",
];

export const timeline = [
  {
    year: "2023 — Present",
    role: "Senior RPA Developer",
    org: "Enterprise Automation Studio",
    description:
      "Leading the design and delivery of enterprise-scale RPA programs across finance, HR, and operations.",
  },
  {
    year: "2021 — 2023",
    role: "Angular Engineer",
    org: "Digital Products Team",
    description:
      "Architected Angular applications powering internal tooling and customer-facing dashboards.",
  },
  {
    year: "2019 — 2021",
    role: ".NET Developer",
    org: "Software Solutions Group",
    description:
      "Built ASP.NET MVC platforms and REST APIs, with a focus on clean architecture and testability.",
  },
  {
    year: "2015 — 2019",
    role: "B.Sc. Computer Engineering",
    org: "University",
    description: "Foundations in algorithms, software design, and distributed systems.",
  },
];

export const values = [
  {
    icon: "Sparkles",
    title: "Clean Code",
    description: "Write code that reads like well-crafted prose.",
  },
  {
    icon: "Zap",
    title: "Automation First",
    description: "If it can be automated, it should be.",
  },
  {
    icon: "BookOpen",
    title: "Continuous Learning",
    description: "The best engineers are perpetual students.",
  },
  {
    icon: "Layers",
    title: "Architecture Matters",
    description: "Good structure is invisible when done right.",
  },
];

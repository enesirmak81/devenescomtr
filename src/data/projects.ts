export type Project = {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  technologies: string[];
  category: "RPA" | "Web" | "Architecture";
  featured: boolean;
  year: number;
  liveUrl?: string | null;
  githubUrl?: string | null;
  highlights?: string[];
  gradient: string;
};

export const projects: Project[] = [
  {
    id: "rpa-invoice-automation",
    title: "Invoice Processing Automation",
    shortDescription: "End-to-end RPA solution automating invoice extraction, validation, and ERP entry.",
    fullDescription:
      "A production-grade UiPath automation that ingests invoices from email and shared drives, extracts line items via OCR + validation rules, reconciles against purchase orders, and posts entries directly into the ERP. Designed with a queue-based dispatcher/performer architecture for resilience and horizontal scale.",
    technologies: ["UiPath", "C#", ".NET", "SQL Server", "REST API"],
    category: "RPA",
    featured: true,
    year: 2024,
    highlights: [
      "Reduced processing time by 85%",
      "Zero error rate on validated invoices",
      "Handles 500+ invoices/day",
    ],
    gradient: "linear-gradient(135deg, #1A6BFF 0%, #0D1F40 100%)",
  },
  {
    id: "angular-dashboard",
    title: "Enterprise Analytics Dashboard",
    shortDescription: "Feature-rich Angular dashboard for real-time business analytics and KPI monitoring.",
    fullDescription:
      "Modular Angular 17 application with signal-based state, lazy-loaded feature modules, and a custom chart kit on top of Chart.js. Streams live KPI updates over WebSockets and supports role-based dashboards.",
    technologies: ["Angular", "TypeScript", "RxJS", "Chart.js", "REST API"],
    category: "Web",
    featured: true,
    year: 2024,
    githubUrl: "#",
    highlights: ["Sub-100ms initial render", "30+ reusable widgets", "Role-based dashboard composition"],
    gradient: "linear-gradient(135deg, #DD0031 0%, #1A1A1A 100%)",
  },
  {
    id: "hr-process-bot",
    title: "HR Onboarding Bot",
    shortDescription: "Automated employee onboarding workflow integrating multiple HR systems.",
    fullDescription:
      "Blue Prism bot that orchestrates account creation across Active Directory, HRIS, and Slack. Reduced onboarding from 2 days to 20 minutes.",
    technologies: ["Blue Prism", "SQL Server", "Active Directory"],
    category: "RPA",
    featured: true,
    year: 2023,
    highlights: ["2 days → 20 minutes", "100% audit-trail compliance"],
    gradient: "linear-gradient(135deg, #16A34A 0%, #0D2818 100%)",
  },
  {
    id: "mvc-ecommerce",
    title: "MVC E-Commerce Platform",
    shortDescription: "Full-stack ASP.NET MVC e-commerce solution with clean architecture.",
    fullDescription: "Layered ASP.NET MVC e-commerce platform with Entity Framework, repository pattern, and a clean domain layer.",
    technologies: ["ASP.NET MVC", "C#", "Entity Framework", "SQL Server", "Bootstrap"],
    category: "Web",
    featured: false,
    year: 2023,
    gradient: "linear-gradient(135deg, #6B46C1 0%, #1E1B3A 100%)",
  },
  {
    id: "data-migration-rpa",
    title: "Legacy Data Migration Tool",
    shortDescription: "RPA-powered data migration from legacy systems to modern cloud platforms.",
    fullDescription: "Hybrid UiPath + Python pipeline migrating millions of records with validation and rollback support.",
    technologies: ["UiPath", "Python", "REST API", "SQL"],
    category: "RPA",
    featured: false,
    year: 2023,
    gradient: "linear-gradient(135deg, #F59E0B 0%, #3A2A05 100%)",
  },
  {
    id: "angular-crm",
    title: "CRM Frontend Application",
    shortDescription: "Responsive Angular CRM frontend with complex form handling and state management.",
    fullDescription: "NgRx-powered CRM frontend with dynamic forms, optimistic updates, and offline support.",
    technologies: ["Angular", "NgRx", "TypeScript", "SCSS"],
    category: "Web",
    featured: false,
    year: 2022,
    gradient: "linear-gradient(135deg, #0EA5E9 0%, #082F49 100%)",
  },
];

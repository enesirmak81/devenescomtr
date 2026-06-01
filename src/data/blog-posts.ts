export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: "RPA" | "Angular" | "Architecture" | "TypeScript" | "C#";
  tags: string[];
  author: string;
  publishedAt: string;
  readingTime: number;
  featured: boolean;
  gradient: string;
};

export const blogPosts: BlogPost[] = [
  {
    id: "getting-started-uipath-2024",
    slug: "getting-started-uipath-2024",
    title: "Getting Started with UiPath in 2024: A Practical Guide",
    excerpt:
      "A hands-on introduction to building your first RPA bot with UiPath Studio, covering the fundamentals every developer needs to know.",
    content:
      "UiPath has become the de-facto standard for enterprise RPA, and 2024's release brings meaningful changes for developers.\n\nIn this guide we walk through installing UiPath Studio, building your first reusable workflow, and shipping it to Orchestrator. Along the way we cover selectors, error handling, and the queue/dispatcher pattern that scales from a single bot to a fleet.\n\nThe key insight: treat your automations like real software. Source control, code reviews, unit tests, and CI/CD apply just as much to RPA as they do to web apps.",
    category: "RPA",
    tags: ["UiPath", "RPA", "Automation", "Beginner"],
    author: "Enes Irmak",
    publishedAt: "2024-11-15",
    readingTime: 8,
    featured: true,
    gradient: "linear-gradient(135deg, #1A6BFF 0%, #0D1F40 100%)",
  },
  {
    id: "angular-signals-explained",
    slug: "angular-signals-explained",
    title: "Angular Signals Explained: Reactivity Made Simple",
    excerpt:
      "Deep dive into Angular's Signals API — what it is, why it matters, and how to migrate your existing reactive patterns.",
    content:
      "Signals are Angular's answer to fine-grained reactivity. They replace much of what RxJS used to do for component state, with a simpler mental model.\n\nThis post walks through writable signals, computed signals, effects, and the new resource API. We also cover migration strategies for codebases heavily invested in RxJS — spoiler: you don't have to throw it all out.",
    category: "Angular",
    tags: ["Angular", "TypeScript", "Signals", "Reactivity"],
    author: "Enes Irmak",
    publishedAt: "2024-10-28",
    readingTime: 12,
    featured: true,
    gradient: "linear-gradient(135deg, #DD0031 0%, #1A1A1A 100%)",
  },
  {
    id: "mvc-patterns-dotnet",
    slug: "mvc-patterns-dotnet",
    title: "MVC Best Practices in ASP.NET Core: Lessons from the Field",
    excerpt:
      "Practical insights on implementing clean MVC architecture in ASP.NET Core applications — from controller design to separation of concerns.",
    content:
      "After years of shipping ASP.NET Core MVC apps, here are the patterns that have held up — and the ones that haven't.\n\nWe cover thin controllers, service layer organization, dependency injection scopes, and the trade-offs between repository pattern and EF Core DbContext used directly.",
    category: "Architecture",
    tags: ["MVC", "ASP.NET", "C#", "Architecture"],
    author: "Enes Irmak",
    publishedAt: "2024-10-05",
    readingTime: 10,
    featured: false,
    gradient: "linear-gradient(135deg, #16A34A 0%, #0D2818 100%)",
  },
  {
    id: "rpa-vs-workflow-automation",
    slug: "rpa-vs-workflow-automation",
    title: "RPA vs Workflow Automation: Choosing the Right Tool",
    excerpt: "A clear breakdown of when to use RPA versus traditional workflow automation tools, with real-world decision frameworks.",
    content:
      "RPA and workflow automation overlap but solve different problems. RPA mimics human interaction with existing UIs; workflow automation orchestrates APIs and services.\n\nUse this decision framework to pick the right tool — and avoid the very expensive mistake of using RPA where a webhook would do.",
    category: "RPA",
    tags: ["RPA", "Automation", "Strategy"],
    author: "Enes Irmak",
    publishedAt: "2024-09-12",
    readingTime: 7,
    featured: false,
    gradient: "linear-gradient(135deg, #4D8BFF 0%, #0A1830 100%)",
  },
  {
    id: "typescript-advanced-types",
    slug: "typescript-advanced-types",
    title: "Advanced TypeScript Types Every Angular Developer Should Know",
    excerpt: "Mastering conditional types, mapped types, template literal types, and infer — with practical Angular examples.",
    content:
      "TypeScript's type system is a language of its own. This post walks through the advanced features that pay off the most in real Angular codebases: discriminated unions for state, mapped types for form models, and template literal types for type-safe routing.",
    category: "TypeScript",
    tags: ["TypeScript", "Angular", "Types"],
    author: "Enes Irmak",
    publishedAt: "2024-08-20",
    readingTime: 15,
    featured: false,
    gradient: "linear-gradient(135deg, #3178C6 0%, #0D1B30 100%)",
  },
  {
    id: "clean-code-csharp",
    slug: "clean-code-csharp",
    title: "Clean Code Principles in C#: A Practical Walkthrough",
    excerpt: "Translating Robert Martin's Clean Code principles into everyday C# development — with before/after code examples.",
    content:
      "Clean Code's principles are timeless, but the C# examples in the book are showing their age. Here we translate the most impactful chapters into modern C# 12, with realistic before/after examples from production codebases.",
    category: "C#",
    tags: ["C#", ".NET", "Clean Code", "Best Practices"],
    author: "Enes Irmak",
    publishedAt: "2024-07-30",
    readingTime: 11,
    featured: false,
    gradient: "linear-gradient(135deg, #6B46C1 0%, #1E1B3A 100%)",
  },
];

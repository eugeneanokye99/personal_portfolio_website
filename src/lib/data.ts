export type StackItem = { name: string; tag: string; prof: number };
export type StackCategory = { key: string; items: StackItem[] };

export const stackData: StackCategory[] = [
  {
    key: "languages",
    items: [
      { name: "Java", tag: "<Java/>", prof: 95 },
      { name: "Python", tag: "<Python/>", prof: 80 },
      { name: "JavaScript", tag: "<JS/>", prof: 75 },
      { name: "C", tag: "<C/>", prof: 65 },
    ],
  },
  {
    key: "frameworks",
    items: [
      { name: "Spring Boot", tag: "@SpringBoot", prof: 95 },
      { name: "Spring Security", tag: "@Security", prof: 88 },
      { name: "Hibernate / JPA", tag: "@JPA", prof: 85 },
    ],
  },
  {
    key: "databases",
    items: [
      { name: "PostgreSQL", tag: "psql", prof: 88 },
      { name: "MySQL", tag: "mysql", prof: 85 },
    ],
  },
  {
    key: "devops_tools",
    items: [
      { name: "Docker", tag: "docker", prof: 82 },
      { name: "Postman", tag: "postman", prof: 90 },
      { name: "Git", tag: "git", prof: 92 },
      { name: "GitHub", tag: "gh", prof: 92 },
    ],
  },
];

export type ProjectTagMethod = "get" | "post" | "svc" | "java";
export type Project = {
  name: string;
  desc: string;
  tags: [string, ProjectTagMethod][];
};

export const projectsData: Project[] = [
  {
    name: "ShiftSync",
    desc: "Multi-location workforce scheduling platform with conflict-aware shift allocation.",
    tags: [
      ["Java", "java"],
      ["Scheduling", "svc"],
      ["REST", "get"],
    ],
  },
  {
    name: "spring-data-ecommerce",
    desc: "Enterprise e-commerce backend — REST + GraphQL APIs, AOP cross-cutting concerns.",
    tags: [
      ["Spring Boot", "java"],
      ["GraphQL", "post"],
      ["AOP", "svc"],
    ],
  },
  {
    name: "spring-security-ecommerce",
    desc: "Hardened commerce service with JWT auth, OAuth2 flows and role-based access control.",
    tags: [
      ["JWT", "post"],
      ["OAuth2", "svc"],
      ["RBAC", "get"],
    ],
  },
  {
    name: "UrbanVital",
    desc: "Clinical operations platform coordinating patient, staff and resource workflows.",
    tags: [
      ["Java", "java"],
      ["Domain", "svc"],
      ["REST", "get"],
    ],
  },
  {
    name: "Zap Sync",
    desc: "Modern peer-to-peer file sharing platform built for fast, direct transfers.",
    tags: [
      ["Java", "java"],
      ["P2P", "post"],
      ["Sockets", "svc"],
    ],
  },
];

export const methodColors: Record<ProjectTagMethod, string> = {
  get: "var(--ok)",
  post: "var(--warn)",
  svc: "var(--primary)",
  java: "var(--code)",
};

export type Stat = {
  value: number | null;
  label: string;
  prefix?: string;
  text?: string;
  mono: string;
};

export const statsData: Stat[] = [
  { value: 44, label: "Repositories", prefix: "", mono: "repos" },
  { value: 3, label: "Pull Shark", prefix: "×", mono: "badge" },
  { value: null, label: "Pair Extraordinaire", text: "★", mono: "badge" },
  { value: null, label: "Active on LeetCode", text: "●", mono: "streak" },
];

export const rolesData = [
  "Backend Engineer",
  "Java Developer",
  "Spring Boot",
  "Systems Builder",
  "Distributed Systems",
];

export const bootLines: [string, string][] = [
  ["> booting portfolio_os v2.4 ...", ""],
  ["> loading spring-context .........", "[ ok ]"],
  ["> initializing datasource ........", "[ ok ]"],
  ["> wiring dependency graph ........", "[ ok ]"],
  ["> mounting components ............", "[ ok ]"],
  ["> system ready. welcome.", ""],
];

export type BioLine = {
  prefix: "$" | ">";
  text: string;
  color?: string;
  cursor?: boolean;
};

export const bioLines: BioLine[] = [
  { prefix: "$", text: " ./bio.sh", color: "var(--primary)" },
  { prefix: ">", text: " name: Eugene Anokye" },
  { prefix: ">", text: " role: Backend Engineer" },
  { prefix: ">", text: " location: Ghana 🇬🇭" },
  { prefix: ">", text: " org: Amali-Tech" },
  { prefix: ">", text: " focus: Java, Spring Boot, Microservices" },
  { prefix: ">", text: " interests: System Design, Clean Architecture" },
  { prefix: ">", text: " leetcode: Active", color: "var(--ok)" },
  { prefix: "$", text: " _", cursor: true, color: "var(--primary)" },
];

export const navLinks = [
  { href: "#about", label: "about" },
  { href: "#stack", label: "stack" },
  { href: "#projects", label: "projects" },
  { href: "#activity", label: "activity" },
  { href: "#contact", label: "contact" },
];

export const socialLinks = {
  linkedin: "https://www.linkedin.com/in/eugene-anokye",
  github: "https://github.com/eugeneanokye99",
  leetcode: "https://leetcode.com/u/mR1Ju2yJLu/",
};

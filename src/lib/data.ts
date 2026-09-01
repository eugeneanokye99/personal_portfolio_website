export type StackItem = { name: string; tag: string; prof: number };
export type StackCategory = { key: string; items: StackItem[] };

export const stackData: StackCategory[] = [
  {
    key: "languages",
    items: [
      { name: "Java", tag: "<Java/>", prof: 92 },
      { name: "TypeScript", tag: "<TS/>", prof: 85 },
      { name: "JavaScript", tag: "<JS/>", prof: 82 },
      { name: "Python", tag: "<Python/>", prof: 65 },
    ],
  },
  {
    key: "frameworks",
    items: [
      { name: "Spring Boot", tag: "@SpringBoot", prof: 92 },
      { name: "React", tag: "<React/>", prof: 85 },
      { name: "Next.js", tag: "<Next.js/>", prof: 80 },
      { name: "Node.js", tag: "node", prof: 75 },
      { name: "Django", tag: "django", prof: 65 },
    ],
  },
  {
    key: "databases",
    items: [
      { name: "PostgreSQL", tag: "psql", prof: 85 },
      { name: "MySQL", tag: "mysql", prof: 80 },
      { name: "Firebase", tag: "firebase", prof: 70 },
    ],
  },
  {
    key: "cloud_devops",
    items: [
      { name: "AWS", tag: "aws", prof: 78 },
      { name: "Docker", tag: "docker", prof: 80 },
      { name: "Postman", tag: "postman", prof: 90 },
      { name: "Git", tag: "git", prof: 92 },
      { name: "GitHub", tag: "gh", prof: 92 },
    ],
  },
];

export type Certification = {
  name: string;
  issuer: string;
  date: string;
  link?: string;
  image?: string;
};

export const certificationsData: Certification[] = [
  {
    name: "Project Management",
    issuer: "Google (Coursera)",
    date: "2026",
    image: "/certifications/google-project-management.png",
  },
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "2026",
    image: "/certifications/aws-cloud-practitioner.png",
  },
  {
    name: "Certificate in Splicing and OTDR Testing",
    issuer: "Johvic Fibertech Solutions",
    date: "2026",
  },
];

export type ProjectTagMethod = "get" | "post" | "svc" | "java";
export type Project = {
  name: string;
  subtitle?: string;
  desc: string;
  tags: [string, ProjectTagMethod][];
  link: string;
  linkLabel: string;
  preview?: string;
  note?: string;
};

export const projectsData: Project[] = [
  {
    name: "Ballotsky",
    desc: "Secure pay-to-vote platform for contests and campaigns. Nominate candidates, vote with real money via Paystack, and watch results update live.",
    tags: [
      ["Next.js", "java"],
      ["Firebase", "svc"],
      ["Paystack", "post"],
    ],
    link: "https://ballotsky.com",
    linkLabel: "ballotsky.com",
    preview: "https://ballotsky.com",
  },
  {
    name: "Shopyos",
    desc: "Marketing platform that helps businesses showcase products and connect with buyers in one place. Live on the web and Android, with iOS on the way.",
    tags: [
      ["Next.js", "java"],
      ["Mobile", "svc"],
      ["Marketing", "post"],
    ],
    link: "https://shopyosgh.com",
    linkLabel: "shopyosgh.com",
    preview: "https://shopyosgh.com",
    note: "Web app: app.shopyosgh.com · Android live · iOS in progress",
  },
  {
    name: "SpendWisely",
    desc: "PWA expense tracker for everyday Ghanaians. Connects to Gmail to auto-detect MoMo and bank transaction emails and logs spending with no manual entry.",
    tags: [
      ["TypeScript", "java"],
      ["PWA", "svc"],
      ["Gmail API", "post"],
    ],
    link: "https://personalexpensetracker-drab.vercel.app/",
    linkLabel: "live demo",
    preview: "https://personalexpensetracker-drab.vercel.app/",
  },
  {
    name: "CPS",
    subtitle: "Felano Technologies",
    desc: "Delivery service application handling order requests and dispatch for a growing logistics business.",
    tags: [
      ["TypeScript", "java"],
      ["Delivery", "svc"],
      ["REST", "get"],
    ],
    link: "https://trills-sigma.vercel.app/",
    linkLabel: "live demo",
    preview: "https://trills-sigma.vercel.app/",
  },
  {
    name: "ShiftSync",
    subtitle: "Backend",
    desc: "Backend for a multi-location workforce scheduling platform. Handles availability, shift assignment, conflict detection, and async notifications.",
    tags: [
      ["Java", "java"],
      ["Spring Boot", "svc"],
      ["REST", "get"],
    ],
    link: "https://github.com/eugeneanokye99/ShiftSync",
    linkLabel: "view repo",
  },
  {
    name: "Arkeseljuni",
    desc: "Robust USSD application for event ticketing and voting, built for reliable access without a smartphone or app install.",
    tags: [
      ["USSD", "svc"],
      ["JavaScript", "java"],
      ["Events", "post"],
    ],
    link: "https://github.com/eugeneanokye99/arkeseljuni",
    linkLabel: "view repo",
  },
  {
    name: "Multi-AZ Fault-Tolerant Architecture",
    subtitle: "AWS",
    desc: "Highly available infrastructure spread across multiple availability zones, load balanced and self-healing under simulated failure.",
    tags: [
      ["AWS", "java"],
      ["VPC", "svc"],
      ["ALB", "get"],
    ],
    link: "https://github.com/eugeneanokye99/multiaz-vpc-lab",
    linkLabel: "view repo",
  },
  {
    name: "ECS CI/CD Pipeline",
    subtitle: "AWS",
    desc: "Automated build-and-deploy pipeline that ships containerized services to Amazon ECS on every push.",
    tags: [
      ["AWS", "java"],
      ["ECS", "svc"],
      ["CI/CD", "post"],
    ],
    link: "https://github.com/eugeneanokye99/ecs-cicd-infra",
    linkLabel: "view repo",
  },
  {
    name: "IAM & Security Automation",
    subtitle: "AWS",
    desc: "Least-privilege IAM roles and automated security baseline checks across an AWS account.",
    tags: [
      ["AWS", "java"],
      ["IAM", "svc"],
      ["Security", "get"],
    ],
    link: "https://github.com/eugeneanokye99/iam-automation-lab",
    linkLabel: "view repo",
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

export const rolesData = [
  "Software Engineer",
  "Full-Stack Developer",
  "Spring Boot",
  "React.js",
  "TypeScript",
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
  { prefix: ">", text: " name: Eugene Dokye Anokye" },
  { prefix: ">", text: " role: Full-Stack Software Engineer" },
  { prefix: ">", text: " experience: 5+ years" },
  { prefix: ">", text: " location: Ghana 🇬🇭" },
  { prefix: ">", text: " org: Amali-Tech" },
  { prefix: ">", text: " stack: Java, Spring Boot, React, Node.js" },
  { prefix: ">", text: " focus: APIs, performance, Core Web Vitals" },
  { prefix: ">", text: " leetcode: Active", color: "var(--ok)" },
  { prefix: "$", text: " _", cursor: true, color: "var(--primary)" },
];

export const navLinks = [
  { href: "#about", label: "about" },
  { href: "#stack", label: "stack" },
  { href: "#certifications", label: "certs" },
  { href: "#projects", label: "projects" },
  { href: "#activity", label: "activity" },
  { href: "#blog", label: "blog" },
  { href: "#contact", label: "contact" },
];

export const socialLinks = {
  linkedin: "https://www.linkedin.com/in/edanokye",
  github: "https://github.com/eugeneanokye99",
  leetcode: "https://leetcode.com/u/mR1Ju2yJLu/",
};

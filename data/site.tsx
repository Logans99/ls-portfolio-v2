import { FaGithub, FaLinkedin } from "react-icons/fa";

const hi = (text: string) => (
  <span className="text-slate-100 font-medium">{text}</span>
);
export const site = {
  name: "Logan Santos",
  role: "Full Stack Software Engineer",
  intro: "I build accessible, polished experiences for the web.",
  about: [
    <>
      I'm a {hi("full-stack software engineer")} with 3 years of experience building
      and improving web applications in production environments. I work primarily with{" "}
      {hi("Angular, TypeScript, Node.js, and SQL")}, and focus on creating reliable,
      high-performance applications that solve real business problems. I care about
      writing clean, maintainable code and building systems that scale.
    </>,
    <>
      At my current role I contribute to a{" "}
      {hi("large-scale e-commerce platform modernization")}, rebuilding a legacy
      ColdFusion system into a modern Angular and TypeScript frontend with Lucee on
      the backend. My work includes{" "}
      {hi("frontend performance optimization, SQL query design")}, and full-stack
      feature development across a collaborative team using Git-based workflows.
    </>,
    <>
      I've also built and shipped internal tools independently from the ground up.
      I designed and built a{" "}
      {hi("full-stack time-off management portal")} used daily by 50+ employees
      across two locations, replacing a manual paper process with a structured
      multi-role approval workflow, real-time notifications, and a bilingual
      English/Spanish interface. I also built{" "}
      {hi("TileTracker")}, an internal mapping application using Node.js, Leaflet,
      and OpenStreetMap that replaced a spreadsheet workflow for marketing and
      operations teams.
    </>,
    <>
      I enjoy working across the full stack, taking features from idea to production.
      Outside of work I focus on sharpening my skills in{" "}
      {hi("system design, backend architecture, and security")}, including actively
      building out authentication systems. I'm always looking for opportunities to
      work on harder problems at greater scale.
    </>,
  ],
  experience: [
    {
      period: "Nov 2023 — Current",
      title: "Full-Stack Software Developer",
      company: "Empire West · San Francisco, CA",
      description:
        "Delivered full-stack features across Angular frontends, backend services, and SQL databases supporting product selection and purchasing workflows. Built responsive, high-performance user interfaces using Angular, HTML, and SCSS, improving usability across desktop and mobile devices. Developed and optimized backend services using JavaScript, ColdFusion, and SQL to support reliable data processing and system integrations. Improved application performance and stability through debugging, query optimization, and frontend performance tuning, reducing load times and production issues. Contributed to CI/CD pipelines and deployment workflows.",
      tech: ["Angular", "TypeScript", "JavaScript", "Node.js", "ColdFusion", "SQL", "Docker", "Git"],
    },
    {
      period: "Jun 2022 — Aug 2022",
      title: "Software Engineer Intern",
      company: "CDK Global · San Jose, CA",
      description:
        "Redesigned and automated an internal SLA tracking system using C# and .NET async programming, eliminating reliance on third-party software and reducing operational costs. Partnered with the Third-Party Integrations team to improve service delivery systems between internal platforms and external vendors. Developed and tested enhancements for internal tools, improving functionality, reliability, and user experience. Recognized as a Connected Intern by the Early Careers Team for strong technical contributions and cross-team collaboration.",
      tech: ["C#", ".NET", "Async Programming", "SQL", "Git"],
    },
  ],
  projects: [
    {
      title: "Time-Off Management System",
      subtitle: "Internal HR Workflow Portal",
      role: "Full-Stack Software Developer",
      overview:
        "Pitched, designed, and built a full-stack internal portal allowing employees to request time off and managers and HR to review, approve, or modify requests — replacing a manual paper and email process used across two locations.",
      problem:
        "The company had no centralized system for managing time-off requests. Employees submitted requests via paper or email, creating slow turnaround times, processing errors, and no visibility into team availability.",
      solution:
        "Designed and built a full-stack multi-role portal end-to-end, implementing a structured approval workflow with real-time notifications, a department absence calendar, and bilingual support to serve both office and manufacturing floor employees.",
      contributions: [
        "Architected and built the entire application end-to-end, from database schema to frontend interface",
        "Implemented a multi-stage approval workflow across three role tiers: employee, manager, and HR",
        "Built real-time notification badges using database-driven flags to surface pending actions on each user's portal tile",
        "Developed automatic email notifications triggered at each stage of the approval workflow",
        "Created a department-level absence calendar integrating live query data for manager visibility",
        "Implemented role-based access control with read-only access for customer service and full edit access for managers and HR",
        "Delivered a bilingual English/Spanish interface based on direct feedback from end users",
        "Supported multiple managers and HR staff per department as requested by management",
      ],
      impact: [
        "Replaced a manual paper and email process for 50+ employees across two locations",
        "Actively used and maintained in production for over a year",
        "Reduced processing errors and turnaround time for time-off approvals",
        "Gave managers real-time visibility into department availability through an absence calendar",
      ],
      tech: ["JavaScript", "HTML", "CSS", "MySQL", "ColdFusion"],
      confidential: true,
      href: null,
    },
    {
      title: "TileTracker",
      subtitle: "Internal Mapping Tool for Marketing & Operations",
      role: "Full-Stack Software Developer",
      overview:
        "Designed and built a full-stack internal mapping tool end-to-end, replacing a manual spreadsheet process for tracking commercial client locations and ceiling tile installations — now actively used by 10 employees across marketing, social media, and customer service teams.",
      problem:
        "Teams tracked commercial client locations and installation data in spreadsheets, making it difficult to visualize geographic distribution, prioritize locations, or coordinate across departments efficiently.",
      solution:
        "Built a full-stack mapping application that transformed raw installation data into an interactive geographic interface, with role-based access control to support different teams with different needs.",
      contributions: [
        "Architected and built the entire application end-to-end, including backend REST API and database schema from scratch",
        "Integrated interactive maps using Leaflet.js and OpenStreetMap with clustering and color-coded markers for visualizing client locations and installation statuses",
        "Implemented role-based access control with read-only permissions for customer service and full edit access for marketing and social media teams",
        "Developed RESTful APIs using Node.js and Express to manage and serve location and installation data",
        "Containerized the application using Docker for consistent deployment",
      ],
      impact: [
        "Replaced a manual spreadsheet workflow actively used by 10 employees across three departments",
        "Gave marketing and social media teams the ability to edit and manage installation data directly without developer involvement",
        "Provided customer service with read-only visibility into client location data, reducing cross-team information requests",
        "Enabled geographic visualization of installation data that was previously only accessible as flat spreadsheet rows",
      ],
      tech: ["Angular", "Node.js", "Leaflet.js", "OpenStreetMap", "SQL", "Docker"],
      confidential: true,
      href: null,
    },
    {
      title: "E-Commerce Platform Rebuild",
      subtitle: "Flagship Platform Modernization",
      role: "Full-Stack Software Developer",
      overview:
        "Contributing to a full-stack modernization of a legacy e-commerce platform, rebuilding the frontend in Angular/TypeScript and migrating backend services from ColdFusion to Lucee.",
      problem:
        "The existing platform was slow, difficult to use, and built on outdated technology — creating a poor customer experience and making it difficult to maintain and scale.",
      solution:
        "Working as part of a full-stack team to rebuild the platform from the ground up, delivering a modernized architecture with improved performance and a streamlined purchasing experience.",
      contributions: [
        "Rebuilt the frontend in Angular and TypeScript as part of a two-person frontend team",
        "Built a high-performance product image carousel with lazy loading, AVIF/WebP format fallbacks, and compression optimization for varying browser capabilities",
        "Contributed to backend service migration from ColdFusion to Lucee",
        "Designed and optimized SQL queries for backend data services supporting product selection and purchasing flows",
        "Collaborated across a three-person backend team using Git-based workflows including code reviews and branch management",
        "Participated in containerized deployment workflows using Docker",
      ],
      impact: [
        "Modernizing a legacy platform serving real customers daily",
        "Reduced image load times through format optimization and lazy loading",
        "Improved frontend maintainability by migrating to Angular and TypeScript",
        "Streamlined checkout experience by reducing complexity in purchasing flows",
      ],
      tech: ["Angular", "TypeScript", "SCSS", "Lucee", "ColdFusion", "SQL", "Docker"],
      confidential: true,
      href: null,
    },
  ],
  social: [
    { label: "GitHub", href: "https://github.com/logans99", icon: FaGithub },
    { label: "LinkedIn", href: "https://linkedin.com/in/logansantos", icon: FaLinkedin },
  ],
};

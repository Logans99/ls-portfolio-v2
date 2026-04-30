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
      I'm a {hi("full-stack software engineer")} with experience building scalable web
      applications and improving production systems. I work primarily with{" "}
      {hi("Angular, TypeScript, and SQL")}, and focus on creating reliable,
      high-performance applications that deliver a strong user experience. I care
      about writing clean, maintainable code and building systems that continue to
      scale as they grow.
    </>,
    <>
      Currently, I contribute to the development of a{" "}
      {hi("large-scale e-commerce platform")}, where I work across{" "}
      {hi("frontend, backend, and deployment workflows")}. I've built core product
      selection and purchasing flows, developed responsive interfaces, and optimized
      backend services and database queries to improve performance and reliability.
      My work often involves balancing user experience with system efficiency in a
      production environment.
    </>,
    <>
      I've also built internal tools, including a mapping application that helps
      teams visualize and manage real-world data. Using technologies like{" "}
      {hi("Node.js, Leaflet, and OpenStreetMap")}, I developed interactive features
      such as clustering, role-based access, and dynamic data visualization to
      support planning and decision-making workflows.
    </>,
    <>
      I enjoy working at the intersection of frontend and backend, where I can take
      features from idea to production. Outside of work, I spend time continuing to
      improve my skills, exploring new technologies, and building projects that help
      me think more deeply about{" "}
      {hi("performance, scalability, and system design")}.
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
      subtitle: "Planning & Visualization Tool for Marketing Operations",
      role: "Full-Stack Software Developer",
      overview:
        "Built an internal mapping platform to visualize commercial client locations and installed ceiling tiles, enabling marketing and design teams to plan and coordinate photography for commercial properties.",
      problem:
        "Marketing and design teams lacked a centralized way to identify and prioritize locations for photography, making it difficult to plan shoots and understand geographic distribution of completed installations.",
      solution:
        "Developed a full-stack mapping application that transformed installation data into an interactive geographic interface, allowing teams to efficiently explore locations and plan photography efforts.",
      contributions: [
        "Built a full-stack application using Angular and Node.js",
        "Integrated interactive maps using Leaflet.js and OpenStreetMap",
        "Implemented marker clustering to handle large sets of location data",
        "Designed color-coded markers to represent installation attributes and statuses",
        "Developed RESTful APIs to manage and serve location and installation data",
        "Created a role-based interface enabling non-technical users to explore and manage data",
      ],
      impact: [
        "Improved planning efficiency for photography and marketing campaigns",
        "Enabled teams to quickly identify high-priority or visually valuable locations",
        "Increased visibility into geographic distribution of installations across clients",
        "Reduced manual coordination between marketing and design teams",
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
        "Contributing to a ground-up rebuild of a flagship e-commerce platform serving thousands of users daily, focused on improving scalability, performance, and user experience across core purchasing workflows.",
      problem:
        "The existing platform faced limitations in scalability, maintainability, and user experience, making it difficult to support growing customer demand and modern frontend expectations.",
      solution:
        "Working as part of a full-stack team to rebuild the platform from the ground up, delivering a modernized architecture and improved customer-facing experience.",
      contributions: [
        "Developed core product selection and purchasing flows used by customers",
        "Built responsive, high-performance interfaces using Angular, TypeScript, and SCSS",
        "Contributed to backend services in ColdFusion to support new application workflows",
        "Optimized database queries and backend logic to improve performance and reliability",
        "Participated in containerized deployment workflows using Docker",
      ],
      impact: [
        "Improved usability of key customer purchasing journeys",
        "Enhanced performance and reliability of a high-traffic production system",
        "Supported scalability for a platform serving thousands of daily users",
        "Delivered a consistent, responsive experience across devices",
      ],
      tech: ["Angular", "TypeScript", "SCSS", "ColdFusion", "SQL", "Docker"],
      confidential: true,
      href: null,
    },
  ],
  social: [
    { label: "GitHub", href: "https://github.com/logans99", icon: FaGithub },
    { label: "LinkedIn", href: "https://linkedin.com/in/logansantos", icon: FaLinkedin },
  ],
};

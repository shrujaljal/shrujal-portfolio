import {
  Award,
  BriefcaseBusiness,
  Compass,
  FileText,
  Handshake,
  LineChart,
  Megaphone,
  Presentation,
  Sparkles,
  Users,
} from "lucide-react";

export const site = {
  name: "Shrujal Agarwal",
  role: "MBA | Strategy & Operations, Business Analytics, and Program Coordination",
  email: "shrujalag.gms@gmail.com",
  linkedinUrl: "https://www.linkedin.com/in/shrujalagarwal",
  requestResumeUrl: "https://mail.google.com/mail/?view=cm&fs=1&to=shrujalag.gms%40gmail.com&su=Resume%20Request",
  emailUrl: "https://mail.google.com/mail/?view=cm&fs=1&to=shrujalag.gms%40gmail.com&su=Portfolio%20Inquiry",
  throughline: "Curiosity into clarity. Ideas into impact.",
};

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Recognition", href: "#recognition" },
  { label: "Impact", href: "#impact" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Leadership", href: "#leadership" },
  { label: "Contact", href: "#contact" },
];

export const hero = {
  kicker: "MBA Graduate | Strategy & Operations, Business Analytics",
  headline: "Curiosity into clarity. Ideas into impact.",
  body: "I help teams turn ambiguous business problems into clear recommendations, useful reporting, coordinated execution, and communication people can act on.",
  proof: ["UCR MBA", "Goldman Sachs", "Thomson Reuters", "Hyundai Rotem"],
  primaryCta: "View Projects",
  secondaryCta: "Request Resume",
  tertiaryCta: "LinkedIn",
};

export const valueSnapshot = {
  eyebrow: "What Recruiters Should Notice",
  items: [
    {
      title: "Structured in ambiguity",
      text: "I can enter an unclear business problem, organize the moving pieces, and clarify the decision that needs to be made.",
    },
    {
      title: "Strategic and execution-minded",
      text: "I connect analysis to practical next steps across operations, marketing coordination, reporting, and stakeholder work.",
    },
    {
      title: "Clear with people",
      text: "I make complex ideas easier to discuss, present, and move forward in cross-functional rooms.",
    },
  ],
};

export const about = {
  eyebrow: "About",
  title: "An MBA-trained operator connecting strategy, analysis, communication, and execution.",
  body: [
    "I am Shrujal Agarwal, a UCR STEM MBA graduate with cross-functional experience across operations, analytics, reporting, marketing execution, stakeholder communication, and consulting-style business projects.",
    "My anchor is operations: understanding the room, organizing the signal, and turning scattered inputs into practical next steps. Strategy, analytics, and marketing operations all support that same habit of making business work clearer and easier to move.",
  ],
  notes: ["Operations-led clarity", "Analysis that drives action", "Warm cross-functional communication"],
};

export const recognition = {
  eyebrow: "Recognition",
  title: "Proof of the standard I hold myself to.",
  body: "Some moments are more than achievements. They reflect the discipline, curiosity, and consistency behind the work.",
  items: [
    {
      title: "UCR MBA",
      description:
        "STEM MBA graduate from the University of California, Riverside, with training across strategy, operations, analytics, and cross-functional business problem-solving.",
      icon: Award,
    },
    {
      title: "Beta Gamma Sigma",
      description:
        "Inducted into Beta Gamma Sigma, recognizing the top 20% of graduate students at AACSB-accredited business schools.",
      icon: Sparkles,
    },
    {
      title: "Case Competition Recognition",
      description:
        "Secured 2nd place in a 24-hour Women in Business Case Study Competition, developing and presenting a strategic solution to a real-world business challenge.",
      icon: Presentation,
    },
    {
      title: "Professional Development Lead Award",
      description:
        "Recognized for leading a team of 20 students and launching new initiatives from scratch, including newsletters and a podcast.",
      icon: LineChart,
    },
  ],
};

export const impact = {
  eyebrow: "Where I've Created Impact",
  title: "Clarity across operations, reporting, and cross-functional rooms.",
  intro:
    "The pattern across my experience is consistent: understand the decision, organize the problem, and translate context into coordinated action.",
  cards: [
    {
      title: "Financial services rigor",
      context: "Goldman Sachs",
      text: "Supported client reporting and revenue operations workflows, using structured analysis, Excel-based reporting, and process discipline to improve clarity, consistency, and operational precision.",
      icon: BriefcaseBusiness,
    },
    {
      title: "Information and workflow clarity",
      context: "Thomson Reuters",
      text: "Built trackers and reporting structures that improved workflow visibility, case tracking, and operational decision support across cross-functional teams.",
      icon: FileText,
    },
    {
      title: "Operations consulting thinking",
      context: "Hyundai Rotem",
      text: "Connected site observations, process flow, and business constraints into structured recommendations grounded in operational reality.",
      icon: LineChart,
    },
    {
      title: "Cross-functional execution",
      context: "Beyond Key",
      text: "Turned business data into usable dashboards and insights, helping connect analysis with practical decision-making and coordination.",
      icon: Compass,
    },
    {
      title: "Startup growth coordination",
      context: "BB Wellness",
      text: "Managed campaign tracking, content coordination, and competitive analysis to support clearer priorities and smoother execution in a startup environment.",
      icon: Megaphone,
    },
    {
      title: "Rooms that need momentum",
      context: "Presentations, moderation, student leadership",
      text: "Led presentations, moderated conversations, and translated complex ideas into clear takeaways people could understand and act on.",
      icon: Users,
    },
  ],
};

export const projects = {
  eyebrow: "What I Love Building",
  title: "Selected projects",
  items: [
    {
      title: "Hyundai Rotem Operations Consulting",
      context: "Operations consulting project",
      question: "How can operational constraints become clearer when you see the system in motion?",
      approach: "Connected site observations, process flow, and stakeholder context into practical recommendations.",
      details: [
        "Observed the operating environment and translated visible process signals into a clearer business problem.",
        "Balanced operational constraints, stakeholder context, and implementation realities before shaping recommendations.",
        "Framed findings in a presentation-ready structure that made the path forward easier to discuss.",
      ],
      metrics: [
        { value: "Operations", label: "primary lens" },
        { value: "Site visit", label: "field context" },
        { value: "Actionable", label: "recommendations" },
      ],
      skills: ["Operations", "Process Thinking", "Stakeholder Context", "Recommendation Framing"],
    },
    {
      title: "Coca-Cola Icecek Case Competition",
      context: "Strategy and business case work",
      question: "How should a business evaluate growth choices with real constraints?",
      approach: "Connect market context, execution realities, and decision criteria into a concise business case.",
      details: [
        "Structured the case around the decision the business needed to make, not just the information available.",
        "Connected market research, competitive context, customer behavior, and execution tradeoffs into a practical recommendation.",
        "Built a concise narrative for judges and stakeholders to understand the logic behind the recommendation.",
      ],
      metrics: [
        { value: "Business case", label: "core output" },
        { value: "Market", label: "research lens" },
        { value: "Finalist", label: "recognized work" },
      ],
      skills: ["Strategy", "Market Research", "Competitive Analysis", "Presentation"],
    },
    {
      title: "Professional Development Systems",
      context: "Program execution and student resources",
      question: "How can students navigate career ambiguity with more confidence?",
      approach: "Created repeatable formats, useful communication, and structured resources that made career next steps easier to act on.",
      details: [
        "Built structured programming, communication rhythms, and content formats around common student career questions.",
        "Supported a podcast initiative and newsletter-style resources that made professional development more approachable.",
        "Coordinated across people, ideas, and logistics so career support felt more consistent and useful.",
      ],
      metrics: [
        { value: "Program", label: "delivery focus" },
        { value: "Podcast", label: "content channel" },
        { value: "Repeatable", label: "resource system" },
      ],
      skills: ["Program Execution", "Content Systems", "Career Resources", "Cross-functional Coordination"],
    },
  ],
};

export const leadership = {
  eyebrow: "Built in Real Rooms",
  title: "Leadership that feels practical, human, and useful in the room.",
  items: [
    {
      title: "TEDx Marketing Leadership",
      description:
        "Led a team of 18 students supporting communication and audience engagement for a live ideas-driven experience, helping shape event messaging, promotion, and polished audience touchpoints.",
      icon: Megaphone,
    },
    {
      title: "Professional Development Lead",
      description:
        "Led a team of 20 student leaders within the AGSM Student Association, launching newsletters, student programming, and a podcast from scratch. Coordinated content, people, and execution to create career-focused resources.",
      icon: Handshake,
    },
    {
      title: "Moderation & Presentation",
      description:
        "Presented and moderated student-facing sessions that turned ideas into structured, engaging, and useful takeaways. Supported event flow, audience engagement, and coordination across initiatives.",
      icon: Presentation,
    },
    {
      title: "Student Association Leadership",
      description:
        "Represented the student association across events and collaborative initiatives, helping strengthen engagement and community. Worked across teams to support communication, execution, and welcoming experiences.",
      icon: Users,
    },
  ],
};

export const howIWork = {
  eyebrow: "How I Work",
  title: "A calm operating system for turning ambiguity into coordinated action.",
  steps: [
    "Ask what decision needs to be made.",
    "Separate the visible issue from the root problem.",
    "Gather the right context without drowning in it.",
    "Find patterns, tradeoffs, and constraints.",
    "Translate options into a practical recommendation.",
    "Communicate the path forward with warmth and precision.",
  ],
  skills: [
    "Operations coordination",
    "Business reporting",
    "Dashboard thinking",
    "Campaign insights",
    "Stakeholder communication",
    "Program execution",
  ],
};

export const skillsSection = {
  eyebrow: "Skills",
  title: "A practical toolkit for business clarity and coordinated execution.",
  body: "Organized around the work I want to keep doing: operations, analysis, reporting, delivery, tools, automation, and business strategy.",
  groups: [
    {
      title: "Business Analysis",
      skills: [
        "Requirements Gathering",
        "Business Process Analysis",
        "Process Mapping",
        "Root Cause Analysis",
        "Gap Analysis",
        "Stakeholder Management",
      ],
    },
    {
      title: "Analytics & Reporting",
      skills: ["SQL", "Advanced Excel", "Power Query", "Dashboard Development", "KPI Reporting", "Tableau", "Qlik Sense"],
    },
    {
      title: "Project Delivery",
      skills: ["Agile", "Waterfall", "JIRA", "UAT Support", "Change Management", "Cross-functional Collaboration"],
    },
    {
      title: "Enterprise Tools",
      skills: ["Salesforce", "SAP Ariba", "SharePoint", "HubSpot", "Microsoft Office"],
    },
    {
      title: "AI & Automation",
      skills: ["ChatGPT", "Claude", "Gemini", "NotebookLM", "Microsoft Copilot", "Excel Copilot", "n8n"],
    },
    {
      title: "Business Strategy",
      skills: [
        "Business Case Development",
        "Market Research",
        "Competitive Analysis",
        "Strategic Planning",
        "Customer Journey Analysis",
        "Executive Communication",
      ],
    },
  ],
};

export const contact = {
  eyebrow: "Contact",
  title: "Open to strategy, operations, analytics, and cross-functional business roles.",
  body: "If you are hiring for strategy and operations, business analytics, marketing operations, or business coordination roles, I would be glad to connect.",
};

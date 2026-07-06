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
  role: "MBA | Strategy & Operations, Business Analytics, Marketing Operations, and Program Coordination",
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
  { label: "Projects", href: "#projects" },
  { label: "Leadership", href: "#leadership" },
  { label: "Skills", href: "#how-i-work" },
  { label: "Contact", href: "#contact" },
];

export const hero = {
  kicker: "MBA Graduate | Strategy & Operations, Business Analytics, Marketing Operations",
  headline: "Curiosity into clarity. Ideas into impact.",
  body: "I help teams turn ambiguous business problems into clear recommendations, useful reporting, coordinated execution, and communication people can act on.",
  roleFit: [
    "Strategy & Operations",
    "Business Operations",
    "Marketing Operations",
    "Business Analytics",
    "Project / Program Coordination",
  ],
  proof: ["UCR MBA", "Goldman Sachs", "Thomson Reuters", "Hyundai Rotem Consulting", "Beta Gamma Sigma"],
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
  eyebrow: "About / Positioning",
  title: "An MBA-trained operator who brings calm structure to business problems.",
  body: [
    "I am Shrujal Agarwal, a UCR MBA graduate with cross-functional experience across operations, reporting, marketing execution, stakeholder communication, and consulting-style business projects.",
    "My anchor is operations: understanding the room, organizing the signal, and turning scattered inputs into a practical path forward. Strategy, analytics, and marketing operations all support that same habit of making work clearer and easier to move.",
  ],
  notes: ["Operations-led clarity", "Decision support and reporting", "Warm cross-functional communication"],
};

export const recognition = {
  eyebrow: "Recognition",
  title: "Proof of the standard I hold myself to.",
  body: "Some moments are more than achievements. They reflect the discipline, curiosity, and consistency behind the work.",
  items: [
    {
      title: "UCR MBA",
      description: "Graduate business training across strategy, operations, analytics, leadership, and communication.",
      icon: Award,
    },
    {
      title: "Beta Gamma Sigma",
      description: "Academic recognition connected to business school excellence and professional standards.",
      icon: Sparkles,
    },
    {
      title: "Case Competition Recognition",
      description: "Recognized for structured thinking, presentation quality, and practical business recommendations.",
      icon: Presentation,
    },
    {
      title: "Professional Resources Lead",
      description: "Recognition for building student-facing professional development initiatives.",
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
      text: "Learned to work with precision, discretion, and follow-through in an environment where clarity and trust matter.",
      icon: BriefcaseBusiness,
    },
    {
      title: "Information and workflow clarity",
      context: "Thomson Reuters",
      text: "Built perspective around information products, workflows, reporting, and the way better inputs support better business decisions.",
      icon: FileText,
    },
    {
      title: "Operations consulting thinking",
      context: "Hyundai Rotem",
      text: "Practiced moving from operational signals to structured recommendations that balance analysis, constraints, and implementation.",
      icon: LineChart,
    },
    {
      title: "Cross-functional execution",
      context: "Beyond Key",
      text: "Strengthened the habit of translating between business needs, project details, and practical coordination.",
      icon: Compass,
    },
    {
      title: "Startup growth coordination",
      context: "BB Wellness",
      text: "Connected audience insight, campaign coordination, content execution, and operating priorities in a startup environment.",
      icon: Megaphone,
    },
    {
      title: "Rooms that need momentum",
      context: "Presentations, moderation, student leadership",
      text: "Practiced guiding conversations, presenting recommendations, and making ideas easier for people to act on.",
      icon: Users,
    },
  ],
};

export const projects = {
  eyebrow: "What I Love Building",
  title: "Selected projects, framed as business problems.",
  items: [
    {
      title: "Hyundai Rotem Operations Consulting",
      question: "How can operational constraints become clearer when you see the system in motion?",
      approach: "Connected site observations, process flow, and stakeholder context into practical recommendations.",
      skills: ["Operations", "Site Exposure", "Process Thinking"],
    },
    {
      title: "Coca-Cola Icecek Case Competition",
      question: "How should a business evaluate growth choices with real constraints?",
      approach: "Connect market context, execution realities, and decision criteria into a concise business case.",
      skills: ["Strategy", "Market Analysis", "Presentation"],
    },
    {
      title: "Professional Development Systems",
      question: "How can students navigate career ambiguity with more confidence?",
      approach: "Created repeatable formats, useful communication, and structured resources that made career next steps easier to act on.",
      skills: ["Program Execution", "Content Systems", "Career Resources"],
    },
  ],
};

export const leadership = {
  eyebrow: "Built in Real Rooms",
  title: "Leadership that feels practical, human, and useful in the room.",
  items: [
    {
      title: "TEDx Marketing Leadership",
      description: "Helped shape communication and audience engagement around a live ideas-driven experience.",
      icon: Megaphone,
    },
    {
      title: "Professional Development Lead",
      description: "Built student-centered career support through structured programming, a podcast initiative, and a newsletter designed to make professional growth feel more actionable.",
      icon: Handshake,
    },
    {
      title: "Moderation & Presentation",
      description: "Practiced turning ideas into conversation, guiding rooms with clarity and presence.",
      icon: Presentation,
    },
    {
      title: "Student Association Leadership",
      description: "Contributed to student-facing initiatives that required coordination, communication, and follow-through across groups.",
      icon: Users,
    },
  ],
};

export const howIWork = {
  eyebrow: "How I Work / Skills",
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

export const gallery = {
  eyebrow: "Leadership + Gallery",
  title: "Built in real rooms, with a people-first lens.",
  body: "A compact look at the communities, presentations, and milestones behind the work: warm, selective, and intentionally not an image dump.",
};

export const contact = {
  eyebrow: "Contact",
  title: "Looking for someone who can bring clarity, momentum, and people with her?",
  body: "I am focused on strategy and operations, business operations, marketing operations, business analytics, and project or program coordination roles.",
};

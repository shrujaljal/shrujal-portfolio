export type ImageSlot =
  | "heroPhoto"
  | "aboutPhoto"
  | "recognitionBGS"
  | "recognitionCertificate"
  | "recognitionCaseCompetition"
  | "recognitionStudentAward"
  | "projectHyundaiVisit"
  | "projectHyundaiPresentation"
  | "projectPodcast"
  | "leadershipModeration"
  | "leadershipProfessionalLead"
  | "galleryGraduation"
  | "galleryCityNight"
  | "galleryWomenInBusiness"
  | "galleryCommunity"
  | "galleryUcrBanner";

export type ManifestImage = {
  fileName: string;
  src: string;
  alt: string;
  fallbackSrc: string;
  role: "credibility" | "leadership" | "project proof" | "personality" | "warmth";
  cropHint: string;
  optional?: boolean;
};

export const images: Record<ImageSlot, ManifestImage> = {
  heroPhoto: {
    fileName: "Professional_Summit_Picture",
    src: "/images/custom/Professional_Summit_Picture.jpg",
    alt: "Professional editorial portrait of Shrujal Agarwal",
    fallbackSrc: "/images/editorial/photo-slot-portrait.svg",
    role: "credibility",
    cropHint: "Hero portrait, vertical 4:5 crop, face centered slightly above midpoint.",
  },
  aboutPhoto: {
    fileName: "ucr_Solo",
    src: "/images/custom/ucr_Solo.jpg",
    alt: "Shrujal Agarwal in UCR graduation regalia beside the School of Business banner",
    fallbackSrc: "/images/editorial/photo-slot-portrait.svg",
    role: "warmth",
    cropHint: "About portrait crop; keep Shrujal and the UCR business banner visible.",
  },
  recognitionBGS: {
    fileName: "BGs_Ceremony_Picture",
    src: "/images/custom/BGs_Ceremony_Picture.jpg",
    alt: "Shrujal Agarwal recognized by Beta Gamma Sigma",
    fallbackSrc: "/images/editorial/recognition.svg",
    role: "credibility",
    cropHint: "Portrait crop that keeps the recognition context visible.",
  },
  recognitionCertificate: {
    fileName: "BGS_Award_Collection",
    src: "/images/custom/BGS_Award_Collection.jpg",
    alt: "Beta Gamma Sigma award collection supporting Shrujal Agarwal's academic recognition",
    fallbackSrc: "/images/editorial/recognition.svg",
    role: "credibility",
    cropHint: "Supporting BGS proof image; keep awards visible and avoid repeating the ceremony image.",
  },
  recognitionCaseCompetition: {
    fileName: "Case_Study_Competition",
    src: "/images/custom/Case_Study_Competition.jpg",
    alt: "Case study competition recognition",
    fallbackSrc: "/images/editorial/projects.svg",
    role: "project proof",
    cropHint: "Landscape crop showing competition context without clutter.",
  },
  recognitionStudentAward: {
    fileName: "Professional_lead_Certificates",
    src: "/images/custom/Professional_lead_Certificates.jpg",
    alt: "Professional development leadership certificates",
    fallbackSrc: "/images/editorial/recognition.svg",
    role: "leadership",
    cropHint: "Landscape crop with a quiet frame and muted highlights.",
  },
  projectHyundaiVisit: {
    fileName: "Hyundai_Rotem_Visit",
    src: "/images/custom/Hyundai_Rotem_Visit.jpg",
    alt: "Hyundai Rotem visit connected to operations consulting work",
    fallbackSrc: "/images/editorial/impact.svg",
    role: "project proof",
    cropHint: "Wide crop; keep the Hyundai Rotem banner/name visible behind Shrujal.",
  },
  projectHyundaiPresentation: {
    fileName: "Hyundai_Rotem_Class_presentation",
    src: "/images/custom/Hyundai_Rotem_Class_presentation.jpg",
    alt: "Hyundai Rotem class presentation",
    fallbackSrc: "/images/editorial/projects.svg",
    role: "project proof",
    cropHint: "Presentation crop, 4:3 or wide, keep speaker/context visible.",
  },
  projectPodcast: {
    fileName: "Podcast_Shoot_Picture",
    src: "/images/custom/Podcast_Shoot_Picture.jpg",
    alt: "Podcast shoot for a professional development initiative",
    fallbackSrc: "/images/editorial/leadership.svg",
    role: "leadership",
    cropHint: "Candid crop that communicates communication and initiative-building.",
  },
  leadershipModeration: {
    fileName: "Moderator_Summit_Picture",
    src: "/images/custom/Moderator_Summit_Picture.jpg",
    alt: "Shrujal Agarwal moderating or speaking at a summit",
    fallbackSrc: "/images/editorial/leadership.svg",
    role: "leadership",
    cropHint: "Strong in-room crop; prioritize presence and audience context.",
  },
  leadershipProfessionalLead: {
    fileName: "Professional_Lead_team",
    src: "/images/custom/Professional_Lead_team.jpg",
    alt: "Professional development lead team",
    fallbackSrc: "/images/editorial/leadership.svg",
    role: "leadership",
    cropHint: "Group crop, balanced faces, not too wide on mobile.",
  },
  galleryGraduation: {
    fileName: "Graduation_Radiant-Picture",
    src: "/images/custom/Graduation_Radiant-Picture.jpg",
    alt: "Radiant graduation portrait of Shrujal Agarwal",
    fallbackSrc: "/images/editorial/gallery-01.svg",
    role: "warmth",
    cropHint: "Vertical editorial crop; keep the celebratory feeling but soften bright colors.",
  },
  galleryCityNight: {
    fileName: "Solo_goal_Digger",
    src: "/images/custom/Solo_goal_Digger.jpg",
    alt: "Warm personal portrait of Shrujal Agarwal",
    fallbackSrc: "/images/editorial/gallery-02.svg",
    role: "personality",
    cropHint: "Compact gallery crop; warm and polished, not social-media heavy.",
  },
  galleryWomenInBusiness: {
    fileName: "WIB_Group_Picture",
    src: "/images/custom/WIB_Group_Picture.jpg",
    alt: "Women in Business group moment",
    fallbackSrc: "/images/editorial/gallery-03.svg",
    role: "warmth",
    cropHint: "Community image with consistent crop and muted treatment.",
  },
  galleryCommunity: {
    fileName: "Student_association_group",
    src: "/images/custom/Student_association_group.jpg",
    alt: "Student association group leadership moment",
    fallbackSrc: "/images/editorial/gallery-03.svg",
    role: "warmth",
    cropHint: "Community crop for the compact leadership/gallery mosaic.",
  },
  galleryUcrBanner: {
    fileName: "UCR_Banner_Solo",
    src: "/images/custom/UCR_Banner_Solo.jpg",
    alt: "Shrujal Agarwal seated by the large UCR campus letters",
    fallbackSrc: "/images/editorial/gallery-03.svg",
    role: "warmth",
    cropHint: "Small gallery tile; use object-contain so the complete UCR letters image is visible.",
  },
};

export const selectedDefaultSlots: ImageSlot[] = [
  "heroPhoto",
  "aboutPhoto",
  "recognitionBGS",
  "recognitionCertificate",
  "recognitionCaseCompetition",
  "recognitionStudentAward",
  "projectHyundaiVisit",
  "projectHyundaiPresentation",
  "projectPodcast",
  "leadershipModeration",
  "leadershipProfessionalLead",
  "galleryGraduation",
  "galleryCityNight",
  "galleryWomenInBusiness",
  "galleryCommunity",
  "galleryUcrBanner",
];

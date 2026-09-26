// Edit your skill lists here. Positions map each ticker to one of the five
// physical screens already labeled in the source image (do not add new
// on-image labels — the bezel text is baked into the photo).

export type SkillScreen = {
  id: "languages" | "backend" | "frontend" | "databases" | "tools";
  label: string;
  items: string[];
  left: number;
  top: number;
  width: number;
  height: number;
};

export const skillScreens: SkillScreen[] = [
  {
    id: "languages",
    label: "Languages",
    items: ["C++","Java","C", "JavaScript", "TypeScript", "Python"],
    left: 5.86,
    top: 45.27,
    width: 15.13,
    height: 21.68,
  },
  {
    id: "backend",
    label: "Backend",
    items: ["Node.js", "Express", "REST APIs","JWT"," bcrypt", "RBAC"],
    left: 24.64,
    top: 39.32,
    width: 12.38,
    height: 17.22,
  },
  {
    id: "frontend",
    label: "Frontend",
    items: ["React", "Next.js","HTML5","CSS","Figma","Tailwind CSS"],
    left: 41.21,
    top: 43.25,
    width: 17.52,
    height: 22.32,
  },
  {
    id: "databases",
    label: "Databases",
    items: ["PostgreSQL", "PostGIS", "MongoDB","MySQL","Supabase"],
    left: 63.04,
    top: 39.21,
    width: 12.44,
    height: 17.0,
  },
  {
    id: "tools",
    label: "Tools",
    items: ["Git", "Docker", "Postman","Github","VS code"],
    left: 79.13,
    top: 45.27,
    width: 15.07,
    height: 21.57,
  },
];

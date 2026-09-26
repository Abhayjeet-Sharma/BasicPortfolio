// Edit your project list here. githubUrl / demoUrl are optional — leave a field
// out (or empty) and its button simply won't render.

export type Project = {
  id: string;
  name: string;
  summary: string;
  role: string;
  tech: string[];
  features: string[];
  githubUrl?: string;
  demoUrl?: string;
};

export const projects: Project[] = [
  {
    id: "cadastral-mapping",
    name: "3D ULPIN & Vertical Property Mapping",
    summary:
      "A prototype for mapping cadastral parcels, buildings, and individual units (houses and apartments) in three dimensions, tied to a ULPIN-style identifier.",
    role: "Full-stack developer",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "PostGIS", "MapLibre"],
    features: [
      "Parcel, building, and unit-level geometry",
      "GIS-backed spatial queries over PostGIS",
      "Interactive map layers for vertical (multi-floor) property records",
    ],
    githubUrl: "https://github.com/Abhayjeet-Sharma/Cadastral-Mapping-1",
    demoUrl: "https://bhumap3d.vercel.app/",
  },
  {
    id: "memsim",
    name: "MemSim",
    summary:
      "A visualizer for operating-systems memory management concepts, covering paging, segmentation, and page-replacement algorithms.",
    role: "Developer",
    tech: ["React", "TypeScript"],
    features: [
      "Step-through visualization of paging and segmentation",
      "Multiple page-replacement algorithms (FIFO, LRU, Optimal)",
      "Adjustable frame count and reference strings",
    ],
    githubUrl: "https://github.com/Abhayjeet-Sharma/MemSim",
    demoUrl: "https://abhayjeet-sharma.github.io/MemSim/",
  },
  {
    id: "artverse",
    name: "ArtVerse",
    summary:
      "An online virtual exhibition platform for browsing and presenting artwork in a gallery-style layout.",
    role: "Full-stack developer",
    tech: ["Next.js", "TypeScript"],
    features: [
      "Virtual gallery rooms for grouped exhibitions",
      "Artwork detail views with artist information",
      "Responsive gallery layout for desktop and mobile",
    ],
    githubUrl: "",
    demoUrl: "https://online-virtual-exhibition-platform.vercel.app/",
  },
  {
    id: "mediguide",
    name: "MediGuide",
    summary:
      "A medicine-reminder mobile app UI/UX prototype designed for a healthcare-focused course project.",
    role: "UI/UX designer",
    tech: ["Figma"],
    features: [
      "Dose scheduling and reminder flows",
      "Healthcare-themed visual design system",
      "Prototype screens for onboarding and daily tracking",
    ],
    githubUrl: "https://github.com/Abhayjeet-Sharma/UiUx-Project-Prototype",
    demoUrl: "https://abhayjeet-sharma.github.io/UiUx-Project-Prototype/",
  },
];

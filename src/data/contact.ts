// Edit your contact destinations here. Leave a url empty to show that icon
// in a clearly disabled state instead of linking to "#".

export type ContactLink = {
  id: "email" | "github" | "linkedin" | "resume";
  label: string;
  url: string;
};

export const contactLinks: ContactLink[] = [
  { id: "email", label: "Email", url: "abhayjeetsharma@outlook.com" }, // e.g. "mailto:you@example.com"
  { id: "github", label: "GitHub", url: "https://github.com/Abhayjeet-Sharma" }, // e.g. "https://github.com/yourhandle"
  { id: "linkedin", label: "LinkedIn", url: "https://www.linkedin.com/in/abhayjeet-sharma" }, // e.g. "https://linkedin.com/in/yourhandle"
  { id: "resume", label: "Resume", url: "/TheBestestCV.pdf" }, // e.g. "/resume.pdf"
];

// The blank area inside the CRT screen where the icons are placed,
// as a percentage box of the full contact-terminal.png image.
export const contactScreen = {
  left: 28.23,
  top: 15.32,
  width: 44.14,
  height: 50.32,
};

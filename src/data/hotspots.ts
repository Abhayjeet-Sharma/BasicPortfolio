// Coordinates are percentages of the displayed image box (left, top, width, height).
// The home background image is rendered inside a container that keeps the image's
// native aspect ratio (1672 x 941), so these percentages always line up with the
// same TV screens regardless of viewport width. Adjust the numbers below to
// nudge a hotspot if you ever swap in a re-cropped version of the image.

export type Hotspot = {
  id: "about" | "projects" | "skills" | "contact";
  label: string;
  href: string;
  left: number;
  top: number;
  width: number;
  height: number;
};

export const homeHotspots: Hotspot[] = [
  {
    id: "about",
    label: "About",
    href: "/about",
    left: 15.97,
    top: 17.21,
    width: 9.75,
    height: 13.92,
  },
  {
    id: "skills",
    label: "Skills",
    href: "/skills",
    left: 57.78,
    top: 19.66,
    width: 14.47,
    height: 19.34,
  },
  {
    id: "projects",
    label: "Projects",
    href: "/projects",
    left: 62.56,
    top: 47.29,
    width: 18.24,
    height: 24.12,
  },
  {
    id: "contact",
    label: "Contact",
    href: "/contact",
    left: 10.89,
    top: 48.78,
    width: 20.4,
    height: 26.35,
  },
];

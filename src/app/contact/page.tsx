import type { Metadata } from "next";
import Scene from "@/components/Scene";
import BackButton from "@/components/BackButton";
import { contactLinks, contactScreen } from "@/data/contact";
import styles from "./contact.module.css";

export const metadata: Metadata = {
  title: "Contact — Abhayjeet Sharma",
};

const icons: Record<string, React.ReactNode> = {
  email: (
    <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.6">
      <rect x="3" y="5" width="18" height="14" rx="1.5" />
      <path d="m4 6.5 8 6.5 8-6.5" />
    </svg>
  ),
  github: (
    <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.58 2 12.19c0 4.49 2.87 8.29 6.84 9.63.5.1.68-.22.68-.49 0-.24-.01-1.04-.01-1.89-2.78.62-3.37-1.21-3.37-1.21-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.57 2.34 1.11 2.91.85.09-.67.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.72 0 0 .84-.28 2.75 1.05a9.3 9.3 0 0 1 5 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.46.1 2.72.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.79-4.57 5.05.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.6.69.49A10.02 10.02 0 0 0 22 12.19C22 6.58 17.52 2 12 2Z" />
    </svg>
  ),
  linkedin: (
    <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
      <path d="M6.94 8.5H3.56V20.5H6.94V8.5ZM5.25 3.5a1.97 1.97 0 1 0 0 3.94 1.97 1.97 0 0 0 0-3.94ZM20.44 20.5h-3.37v-6.3c0-1.5-.03-3.43-2.09-3.43-2.1 0-2.42 1.64-2.42 3.33v6.4H9.19V8.5h3.24v1.64h.05c.45-.85 1.55-1.75 3.19-1.75 3.41 0 4.04 2.25 4.04 5.17V20.5Z" />
    </svg>
  ),
  resume: (
    <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M7 3h7l5 5v13H7z" />
      <path d="M14 3v5h5" />
      <path d="M9.5 13h5M9.5 16.5h5" />
    </svg>
  ),
};

function ContactGrid({ variant }: { variant: "desktop" | "mobile" }) {
  return (
    <div
      className={variant === "desktop" ? styles.iconGrid : styles.mobileIconGrid}
      style={
        variant === "desktop"
          ? {
              left: `${contactScreen.left}%`,
              top: `${contactScreen.top}%`,
              width: `${contactScreen.width}%`,
              height: `${contactScreen.height}%`,
            }
          : undefined
      }
    >
      {contactLinks.map((link) =>
        link.url ? (
          <a
            key={link.id}
            href={link.url}
            className={styles.iconButton}
            target={link.id === "resume" ? "_blank" : undefined}
            rel={link.id === "resume" ? "noopener noreferrer" : undefined}
          >
            {icons[link.id]}
            <span>{link.label}</span>
          </a>
        ) : (
          <span
            key={link.id}
            className={`${styles.iconButton} ${styles.iconDisabled}`}
            aria-disabled="true"
          >
            {icons[link.id]}
            <span>{link.label} unavailable</span>
          </span>
        )
      )}
    </div>
  );
}

export default function ContactPage() {
  return (
    <>
      <BackButton />
      <div className={styles.desktopScene}>
        <Scene
          src="/images/contact-terminal.png"
          alt="A large green cathode-ray-tube computer terminal on a cluttered desk"
        >
          <ContactGrid variant="desktop" />
        </Scene>
      </div>

      <div className={styles.mobileWrap}>
        <p className={styles.mobileEyebrow}>Contact</p>
        <ContactGrid variant="mobile" />
      </div>
    </>
  );
}

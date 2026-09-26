import type { Metadata } from "next";
import Scene from "@/components/Scene";
import BackButton from "@/components/BackButton";
import { aboutData } from "@/data/about";
import styles from "./about.module.css";

export const metadata: Metadata = {
  title: "About — Abhayjeet Sharma",
};

function Dossier({ variant }: { variant: "desktop" | "mobile" }) {
  return (
    <div className={variant === "desktop" ? styles.dossier : styles.mobileDossier}>
      <p className={styles.eyebrow}>Subject Profile</p>
      <h1 className={styles.name}>{aboutData.name}</h1>
      <p className={styles.subtitle}>{aboutData.title}</p>

      <p className={styles.bio}>{aboutData.bio}</p>

      <dl className={styles.fields}>
        <div className={styles.field}>
          <dt>Education</dt>
          {aboutData.education.map((ed) => (
            <dd key={ed.school}>
              {ed.school}
              <span className={styles.fieldSub}>{ed.detail}</span>
            </dd>
          ))}
        </div>
        <div className={styles.field}>
          <dt>Interests</dt>
          <dd>
            <ul className={styles.interestList}>
              {aboutData.interests.map((interest) => (
                <li key={interest}>{interest}</li>
              ))}
            </ul>
          </dd>
        </div>
      </dl>

      {aboutData.resumeUrl ? (
        <a
          className={styles.resumeButton}
          href={aboutData.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          View Resume
        </a>
      ) : (
        <span
          className={`${styles.resumeButton} ${styles.resumeDisabled}`}
          aria-disabled="true"
        >
          Resume coming soon
        </span>
      )}
    </div>
  );
}

export default function AboutPage() {
  return (
    <>
      <BackButton />
      <div className={styles.desktopScene}>
        <Scene
          src="/images/about-surveillance.png"
          alt="A figure in a coat and sunglasses tracked by a surveillance camera in a crowd"
        >
          <Dossier variant="desktop" />
        </Scene>
      </div>

      <div className={styles.mobileWrap}>
        <Dossier variant="mobile" />
      </div>
    </>
  );
}

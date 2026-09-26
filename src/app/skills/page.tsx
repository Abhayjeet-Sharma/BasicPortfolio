import type { Metadata } from "next";
import Scene from "@/components/Scene";
import BackButton from "@/components/BackButton";
import SkillTicker from "@/components/SkillTicker";
import { skillScreens } from "@/data/skills";
import styles from "./skills.module.css";

export const metadata: Metadata = {
  title: "Skills — Abhayjeet Sharma",
};

export default function SkillsPage() {
  return (
    <>
      <BackButton />
      <div className={styles.desktopScene}>
        <Scene
          src="/images/skills-tvs.png"
          alt="Five blue cathode-ray televisions labeled Languages, Backend, Frontend, Databases, and Tools"
        >
          {skillScreens.map((screen) => (
            <SkillTicker key={screen.id} screen={screen} />
          ))}
        </Scene>
      </div>

      <div className={styles.mobileWrap}>
        <p className={styles.mobileEyebrow}>Skills</p>
        <div className={styles.mobileGrid}>
          {skillScreens.map((screen) => (
            <div key={screen.id} className={styles.mobileCard}>
              <p className={styles.mobileLabel}>{screen.label}</p>
              <ul className={styles.mobileList}>
                {screen.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

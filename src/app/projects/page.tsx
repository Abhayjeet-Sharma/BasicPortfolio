import type { Metadata } from "next";
import Scene from "@/components/Scene";
import BackButton from "@/components/BackButton";
import ProjectsView from "./ProjectsView";
import styles from "./projects.module.css";

export const metadata: Metadata = {
  title: "Projects — Abhayjeet Sharma",
};

export default function ProjectsPage() {
  return (
    <>
      <BackButton />
      <div className={styles.desktopScene}>
        <Scene
          src="/images/projects-cctv.png"
          alt="A CCTV monitoring feed labeled CAM 1 showing a developer working at a multi-monitor desk"
        >
          <ProjectsView variant="desktop" />
        </Scene>
      </div>

      <div className={styles.mobileWrap}>
        <p className={styles.mobileEyebrow}>Case files</p>
        <ProjectsView variant="mobile" />
      </div>
    </>
  );
}

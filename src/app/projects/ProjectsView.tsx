"use client";

import { useState } from "react";
import { projects } from "@/data/projects";
import styles from "./projects.module.css";

function ProjectDetail({
  project,
  onClose,
}: {
  project: (typeof projects)[number];
  onClose: () => void;
}) {
  return (
    <div className={styles.detailPanel} role="dialog" aria-label={project.name}>
      <button className={styles.closeButton} onClick={onClose} aria-label="Close project details">
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M18 6 6 18" />
          <path d="M6 6l12 12" />
        </svg>
      </button>

      <p className={styles.detailEyebrow}>Project file</p>
      <h2 className={styles.detailTitle}>{project.name}</h2>
      <p className={styles.detailRole}>{project.role}</p>
      <p className={styles.detailSummary}>{project.summary}</p>

      <div className={styles.detailBlock}>
        <p className={styles.detailLabel}>Technologies</p>
        <ul className={styles.chipList}>
          {project.tech.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      </div>

      <div className={styles.detailBlock}>
        <p className={styles.detailLabel}>Key features</p>
        <ul className={styles.featureList}>
          {project.features.map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>
      </div>

      {(project.githubUrl || project.demoUrl) && (
        <div className={styles.linkRow}>
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className={styles.linkButton}>
              GitHub
            </a>
          )}
          {project.demoUrl && (
            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className={styles.linkButton}>
              Live Demo
            </a>
          )}
        </div>
      )}
    </div>
  );
}

export default function ProjectsView({ variant }: { variant: "desktop" | "mobile" }) {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selected = projects.find((p) => p.id === selectedId) ?? null;

  return variant === "desktop" ? (
  <div className={styles.desktopLayer}>
    <div className={styles.listWrap}>
      <p className={styles.listEyebrow}>Case files</p>
      <ul className={styles.list}>
        {projects.map((project) => (
          <li key={project.id}>
            <button
              className={`${styles.listItem} ${
                selectedId === project.id ? styles.listItemActive : ""
              }`}
              onClick={() =>
                setSelectedId(selectedId === project.id ? null : project.id)
              }
              aria-expanded={selectedId === project.id}
            >
              {project.name}
            </button>
          </li>
        ))}
      </ul>
    </div>

    {selected && (
      <ProjectDetail project={selected} onClose={() => setSelectedId(null)} />
    )}
  </div>
) : (
  <div className={styles.mobileListWrap}>
    <ul className={styles.list}>
      {projects.map((project) => (
        <li key={project.id}>
          <button
            className={`${styles.listItem} ${
              selectedId === project.id ? styles.listItemActive : ""
            }`}
            onClick={() =>
              setSelectedId(selectedId === project.id ? null : project.id)
            }
            aria-expanded={selectedId === project.id}
          >
            {project.name}
          </button>
          {selectedId === project.id && (
            <ProjectDetail project={project} onClose={() => setSelectedId(null)} />
          )}
        </li>
      ))}
    </ul>
  </div>
);
}

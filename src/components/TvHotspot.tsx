import NavLink from "./NavLink";
import type { Hotspot } from "@/data/hotspots";
import styles from "./TvHotspot.module.css";

export default function TvHotspot({ hotspot }: { hotspot: Hotspot }) {
  return (
    <NavLink
      href={hotspot.href}
      className={styles.hotspot}
      style={{
        left: `${hotspot.left}%`,
        top: `${hotspot.top}%`,
        width: `${hotspot.width}%`,
        height: `${hotspot.height}%`,
      }}
    >
      <span className={styles.glow} aria-hidden="true" />
      <span className={styles.label}>{hotspot.label}</span>
    </NavLink>
  );
}

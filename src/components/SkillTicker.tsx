import type { SkillScreen } from "@/data/skills";
import styles from "./SkillTicker.module.css";

export default function SkillTicker({ screen }: { screen: SkillScreen }) {
  const items = screen.items;
  return (
    <div
      className={styles.ticker}
      tabIndex={0}
      role="group"
      aria-label={`${screen.label} skills: ${items.join(", ")}`}
      style={{
        left: `${screen.left}%`,
        top: `${screen.top}%`,
        width: `${screen.width}%`,
        height: `${screen.height}%`,
      }}
    >
      <div className={styles.track} aria-hidden="true">
        <span className={styles.group}>
          {items.map((item, i) => (
            <span key={`a-${i}`} className={styles.item}>
              {item}
            </span>
          ))}
        </span>
        <span className={styles.group}>
          {items.map((item, i) => (
            <span key={`b-${i}`} className={styles.item}>
              {item}
            </span>
          ))}
        </span>
      </div>
      <ul className={styles.staticList}>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

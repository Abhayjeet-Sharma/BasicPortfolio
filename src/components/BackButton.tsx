import NavLink from "./NavLink";
import styles from "./BackButton.module.css";

export default function BackButton() {
  return (
    <NavLink href="/" className={styles.back} aria-label="Back to TV room">
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        width="20"
        height="20"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M19 12H5" />
        <path d="M12 19l-7-7 7-7" />
      </svg>
      <span>Back</span>
    </NavLink>
  );
}

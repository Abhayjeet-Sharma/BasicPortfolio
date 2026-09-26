import Scene from "@/components/Scene";
import TvHotspot from "@/components/TvHotspot";
import NavLink from "@/components/NavLink";
import { homeHotspots } from "@/data/hotspots";
import styles from "./home.module.css";

export default function HomePage() {
  return (
    <>
      <div className={styles.desktopScene}>
        <Scene src="/images/home-tv-room.png" alt="A dark room lit by a wall of green cathode-ray televisions" priority>
          <p className={styles.intro}>
            Abhayjeet Sharma
            <span className={styles.introSub}>Developer Portfolio</span>
          </p>
          {homeHotspots.map((hotspot) => (
            <TvHotspot key={hotspot.id} hotspot={hotspot} />
          ))}
        </Scene>
      </div>

      <div className={styles.mobileNav}>
        <p className={styles.mobileIntro}>
          Abhayjeet Sharma
          <span className={styles.introSub}>Developer Portfolio</span>
        </p>
        <div className={styles.cardGrid}>
          {homeHotspots.map((hotspot) => (
            <NavLink key={hotspot.id} href={hotspot.href} className={styles.card}>
              {hotspot.label}
            </NavLink>
          ))}
        </div>
      </div>
    </>
  );
}

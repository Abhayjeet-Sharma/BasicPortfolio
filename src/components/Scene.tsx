import Image from "next/image";
import styles from "./Scene.module.css";

type SceneProps = {
  src: string;
  alt: string;
  priority?: boolean;
  children?: React.ReactNode;
  className?: string;
};

// Renders a full-bleed background image inside a container whose aspect
// ratio exactly matches the source photo (1672 x 941). Because the box
// never crops the image, any child positioned with percentage left/top/
// width/height values lines up with the same point in the photo at every
// viewport size.
export default function Scene({ src, alt, priority, children, className }: SceneProps) {
  return (
    <div className={`${styles.scene} ${className ?? ""}`}>
      <div className={styles.frame}>
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="100vw"
          className={styles.image}
        />
        {children}
      </div>
    </div>
  );
}

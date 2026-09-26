"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./MatrixTransition.module.css";

const CHARSET =
  "01アイウエオカキクケコサシスセソタチツテト0123456789";

export default function MatrixTransition({ active }: { active: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frameRef = useRef<number>();
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const onChange = () => setReducedMotion(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (!active || reducedMotion) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const resize = () => {
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    const fontSize = 18;
    const columnCount = Math.ceil(window.innerWidth / fontSize);
    // Each column starts just below the bottom of the screen at a random
    // offset so the rain streams upward and off the top.
    const drops: number[] = new Array(columnCount)
      .fill(0)
      .map(() => window.innerHeight / fontSize + Math.random() * 30);

    let raf: number;
    const draw = () => {
      ctx.fillStyle = "rgba(3, 8, 5, 0.28)";
      ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const char = CHARSET[Math.floor(Math.random() * CHARSET.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        ctx.fillStyle = "rgba(140, 255, 170, 0.9)";
        ctx.fillText(char, x, y);

        drops[i] -= 1;
        if (y < -fontSize && Math.random() > 0.98) {
          drops[i] = window.innerHeight / fontSize + Math.random() * 20;
        }
      }
      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);
    frameRef.current = raf;

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, [active, reducedMotion]);

  if (reducedMotion) {
    return (
      <div
        aria-hidden="true"
        className={`${styles.fade} ${active ? styles.fadeActive : ""}`}
      />
    );
  }

  return (
    <div
      aria-hidden="true"
      className={`${styles.overlay} ${active ? styles.overlayActive : ""}`}
    >
      <canvas ref={canvasRef} className={styles.canvas} />
    </div>
  );
}

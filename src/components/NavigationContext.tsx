"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { useRouter, usePathname } from "next/navigation";
import MatrixTransition from "./MatrixTransition";

type NavigationContextValue = {
  isTransitioning: boolean;
  navigate: (href: string) => void;
};

const NavigationContext = createContext<NavigationContextValue | null>(null);

// How long the rain plays before we swap the route underneath it.
const TRANSITION_MS = 700;
// How long the rain visually needs to clear once reduced-motion is off.
const REDUCED_MOTION_MS = 180;

export function NavigationProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const pendingHrefRef = useRef<string | null>(null);
  const navigatingRef = useRef(false);

  const navigate = useCallback(
    (href: string) => {
      if (navigatingRef.current) return; // prevent stacked transitions
      if (href === pathname) return;

      const prefersReducedMotion =
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      navigatingRef.current = true;
      pendingHrefRef.current = href;
      setIsTransitioning(true);

      const duration = prefersReducedMotion ? REDUCED_MOTION_MS : TRANSITION_MS;

      window.setTimeout(() => {
        if (pendingHrefRef.current) {
          router.push(pendingHrefRef.current);
        }
      }, duration);
    },
    [pathname, router]
  );

  // Once the new route has actually mounted (pathname changed), hold the
  // overlay just long enough to mask the paint, then release it.
  useEffect(() => {
    if (!navigatingRef.current) return;

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const settleDelay = prefersReducedMotion ? 120 : 250;

    const t = window.setTimeout(() => {
      setIsTransitioning(false);
      navigatingRef.current = false;
      pendingHrefRef.current = null;
    }, settleDelay);

    return () => window.clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <NavigationContext.Provider value={{ isTransitioning, navigate }}>
      {children}
      <MatrixTransition active={isTransitioning} />
    </NavigationContext.Provider>
  );
}

export function useNavigation() {
  const ctx = useContext(NavigationContext);
  if (!ctx) {
    throw new Error("useNavigation must be used within a NavigationProvider");
  }
  return ctx;
}

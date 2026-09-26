"use client";

import { AnchorHTMLAttributes, MouseEvent } from "react";
import { useNavigation } from "./NavigationContext";

type NavLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
};

// A drop-in replacement for next/link that plays the Matrix transition
// before swapping routes. Modifier-clicks (new tab, etc.) fall through to
// normal browser behavior.
export default function NavLink({ href, onClick, children, ...rest }: NavLinkProps) {
  const { navigate } = useNavigation();

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(e);
    if (e.defaultPrevented) return;
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) {
      return; // let the browser handle it (new tab, etc.)
    }
    e.preventDefault();
    navigate(href);
  };

  return (
    <a href={href} onClick={handleClick} {...rest}>
      {children}
    </a>
  );
}

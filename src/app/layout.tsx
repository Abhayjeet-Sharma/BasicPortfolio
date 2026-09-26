import type { Metadata } from "next";
import { NavigationProvider } from "@/components/NavigationContext";
import "./globals.css";

export const metadata: Metadata = {
  title: "Abhayjeet Sharma — Developer Portfolio",
  description:
    "Developer portfolio for Abhayjeet Sharma, a B.Tech CSE student building full-stack web applications.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <NavigationProvider>
          <main id="main-content">{children}</main>
        </NavigationProvider>
        <div className="crt-atmosphere" aria-hidden="true" />
      </body>
    </html>
  );
}

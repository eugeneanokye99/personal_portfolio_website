import type { Metadata } from "next";
import { inter, jetbrainsMono, firaCode } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Eugene Dokye Anokye — Full-Stack Software Engineer",
  description:
    "Full-stack software engineer at Amali-Tech, Ghana. Building scalable, maintainable, production-ready systems across Spring Boot, Java, React, TypeScript, Django, and Node.js.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} ${firaCode.variable}`}>
      <body>{children}</body>
    </html>
  );
}

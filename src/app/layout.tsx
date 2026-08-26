import type { Metadata } from "next";
import { inter, jetbrainsMono, firaCode } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Eugene Anokye — Backend Software Engineer",
  description:
    "Backend engineer at Amali-Tech, Ghana. Building scalable, maintainable, production-ready systems — clean architecture, distributed services, and APIs that hold up under load.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} ${firaCode.variable}`}>
      <body>{children}</body>
    </html>
  );
}

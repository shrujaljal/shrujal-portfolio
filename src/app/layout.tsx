import type { Metadata } from "next";
import "./globals.css";
import { site } from "@/content/siteContent";

export const metadata: Metadata = {
  title: `${site.name} | Radiant Editorial Portfolio`,
  description:
    "A recruiter-facing personal brand website for Shrujal Agarwal: strategy, operations, analytics, marketing coordination, leadership, and cross-functional business communication.",
  openGraph: {
    title: `${site.name} | ${site.throughline}`,
    description:
      "Curiosity into clarity. Ideas into impact. A premium editorial portfolio for Shrujal Agarwal.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

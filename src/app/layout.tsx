import type { Metadata } from "next";
import { siteUrl } from "@/lib/site-url";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Drifti — Capability contracts for AI agents",
  description: "Know what your agents can do. Catch when they do more. Drifti turns observed AI agent behavior into reviewable capability contracts and detects drift in later executions.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Drifti — Capability contracts for AI agents",
    description: "Know what your agents can do. Catch when they do more.",
    url: "/",
    siteName: "Drifti",
    type: "website",
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630, alt: "Drifti — Know what your agents can do. Catch when they do more." }],
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}

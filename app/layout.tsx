import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ScrollProgress } from "@/components/ScrollProgress";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { site } from "@/data/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  title: {
    default: `${site.name} | Software Engineer`,
    template: `%s | ${site.name}`,
  },
  description: site.summary,
  openGraph: {
    title: `${site.name} | Software Engineer`,
    description: site.summary,
    url: site.domain,
    siteName: site.name,
    type: "website",
    images: [
      {
        url: "/images/andrew-mesa-headshot.jpg",
        width: 500,
        height: 500,
        alt: "Andrew Mesa",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | Software Engineer`,
    description: site.summary,
    images: ["/images/andrew-mesa-headshot.jpg"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <ScrollProgress />
        <div className="page-shell">
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
        </div>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

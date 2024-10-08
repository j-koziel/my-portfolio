import "./globals.css";

import type { Metadata } from "next";
import { Roboto } from "next/font/google";

import { NavMenu } from "@/components/nav-menu";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Providers from "@/components/providers";

const roboto = Roboto({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jonathan Koziel | Full-Stack Developer",
  description: "My web development portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className}`}>
        <Providers>
          <NavMenu />
          {children}
        </Providers>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

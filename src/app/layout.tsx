import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { NavMenu } from "@/components/nav-menu";
import "./globals.css";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";

const roboto = Roboto({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jonathan Koziel | Web Developer",
  description:
    "This is a website showing off all of my projects, skills and hobbies",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NavMenu />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

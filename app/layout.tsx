import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const grotesk = Space_Grotesk({
  variable: "--font-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vultron Security Intelligence",
  description:
    "Detect vulnerabilities before attackers do. External attack surface intelligence for modern companies.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body
        className={`
          ${inter.variable}
          ${grotesk.variable}
          min-h-screen
          bg-background
          text-foreground
          antialiased
          flex
          flex-col
        `}
      >
        {children}
      </body>
    </html>
  );
}
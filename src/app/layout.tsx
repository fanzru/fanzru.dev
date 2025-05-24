import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import ClientLayoutShell from "./components/ClientLayoutShell";

// Load Inter font
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

// Load Playfair Display font
const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Fanzru - Full Stack Developer & Blockchain Engineer",
  description:
    "Full Stack Developer with a passion for building scalable and efficient web applications.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${playfair.variable} font-sans bg-[#0B1120] text-white min-h-screen flex flex-col overflow-x-hidden scrollbar-gutter-stable`}
        style={{ scrollbarGutter: "stable" }}
      >
        <ClientLayoutShell>{children}</ClientLayoutShell>
        {/* Background grid pattern */}
        <div
          className="fixed inset-0 z-[-2] w-full bg-[linear-gradient(to_right,#4f4f4f15_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f15_1px,transparent_1px)] bg-[size:64px_64px]"
          style={{
            maskImage:
              "radial-gradient(ellipse 80% 80% at 50% 50%, black, transparent)",
          }}
        />

        {/* Purple gradient glow */}
        <div className="fixed top-0 z-[-1] h-screen w-full bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(147,51,234,0.15),rgba(255,255,255,0))]" />
      </body>
    </html>
  );
}

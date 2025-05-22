import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import LoadingBar from "./components/LoadingBar";

const geist = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fanzru | Personal Website",
  description:
    "Personal website and portfolio showcasing my journey in tech and web3",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geist.className} bg-[#0B1120] text-white min-h-screen flex flex-col overflow-y-scroll`}
      >
        <LoadingBar />
        {/* Background grid pattern */}
        <div
          className="fixed inset-0 bg-[linear-gradient(to_right,#4f4f4f15_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f15_1px,transparent_1px)] bg-[size:64px_64px]"
          style={{
            maskImage:
              "radial-gradient(ellipse 80% 80% at 50% 50%, black, transparent)",
          }}
        />

        {/* Purple gradient glow */}
        <div className="fixed top-0 z-[-1] h-screen w-full bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(147,51,234,0.15),rgba(255,255,255,0))]" />

        {/* Content */}
        <div className="flex flex-col min-h-screen">{children}</div>
      </body>
    </html>
  );
}

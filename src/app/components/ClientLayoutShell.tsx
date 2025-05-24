"use client";

import { useEffect, useState } from "react";
import LoadingScreen from "./LoadingScreen";
import LoadingBar from "./LoadingBar";

export default function ClientLayoutShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showLoading, setShowLoading] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);

  useEffect(() => {
    // Function to detect if page is being loaded/reloaded
    const shouldShowLoading = () => {
      if (typeof window !== "undefined" && window.performance) {
        const nav = window.performance.getEntriesByType("navigation")[0] as
          | PerformanceNavigationTiming
          | undefined;
        const isReload = nav
          ? nav.type === "reload"
          : window.performance.navigation.type === 1;
        return isReload || !sessionStorage.getItem("visited");
      }
      return false;
    };

    const needsLoading = shouldShowLoading();

    if (needsLoading) {
      // Set visited flag in session storage
      sessionStorage.setItem("visited", "true");

      // Show loading screen
      setShowLoading(true);
      setContentVisible(false);

      // Hide loading screen after animation completes
      setTimeout(() => {
        setShowLoading(false);
        // Slight delay before showing content for smooth transition
        setTimeout(() => setContentVisible(true), 100);
      }, 4300);
    } else {
      // If no loading needed, show content immediately
      setContentVisible(true);
    }
  }, []);

  return (
    <>
      <LoadingScreen show={showLoading} />
      <LoadingBar />
      {/* Content with fade-in animation */}
      <div
        className={`relative flex flex-col min-h-screen w-full z-[1] transition-opacity duration-500 ease-in-out ${
          contentVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        {children}
      </div>
    </>
  );
}

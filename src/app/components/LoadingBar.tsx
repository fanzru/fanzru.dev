"use client";

import { useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export default function LoadingBar() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!isLoading) {
      setIsLoading(true);
      setProgress(0);

      // Quickly jump to 80%
      const timer1 = setTimeout(() => setProgress(80), 100);

      // Slowly progress to 98%
      const timer2 = setTimeout(() => setProgress(98), 300);

      // Complete and hide
      const timer3 = setTimeout(() => {
        setProgress(100);
        setTimeout(() => setIsLoading(false), 200); // Give time for completion animation
      }, 500);

      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
        clearTimeout(timer3);
      };
    }
  }, [pathname, searchParams]);

  if (!isLoading) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-0.5 bg-gray-800">
      <div
        className="h-full bg-[#9333EA] transition-all duration-300 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";

interface Heading {
  id: string;
  text: string;
  level: number;
}

export default function TableOfContents() {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    // Only get headings that already have IDs
    const elements = Array.from(
      document.querySelectorAll("h1[id], h2[id], h3[id]")
    ).map((element) => ({
      id: element.id,
      text: element.textContent || "",
      level: Number(element.tagName.charAt(1)),
    }));

    setHeadings(elements);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "0px 0px -80% 0px" }
    );

    elements.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  if (headings.length === 0) return null;

  return (
    <div className="hidden xl:block">
      <div className="fixed top-[120px] bottom-0 right-[max(0px,calc(50%-45rem))] w-[19rem] overflow-y-auto pt-10 pl-8">
        <h4 className="mb-4 text-sm font-semibold text-[#666666]">
          On this page
        </h4>
        <nav className="space-y-1">
          {headings.map((heading) => (
            <div
              key={heading.id}
              style={{
                paddingLeft: `${(heading.level - 1) * 12}px`,
              }}
              className="text-[13px] leading-[20px]"
            >
              <a
                href={`#${heading.id}`}
                className={`block py-1 transition-colors ${
                  activeId === heading.id
                    ? "text-white font-medium"
                    : "text-[#666666] hover:text-[#888888]"
                }`}
              >
                {heading.text}
              </a>
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
}

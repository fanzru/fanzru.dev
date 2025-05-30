"use client";

interface HeadingProps {
  children: React.ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

export default function HeaderWithCopy({
  children,
  className,
  as = "h1",
}: HeadingProps) {
  const id =
    typeof children === "string"
      ? children.toLowerCase().replace(/\s+/g, "-")
      : "";

  const Component = as;

  return (
    <div className="group relative flex items-center">
      <Component className={`${className} flex-grow`} id={id}>
        {children}
      </Component>
      <button
        onClick={() => {
          const text = typeof children === "string" ? children : "";
          navigator.clipboard.writeText(text);
        }}
        className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200
                   p-1 rounded bg-gray-700/50 hover:bg-gray-700/70 text-gray-400 hover:text-white"
        title="Copy heading"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
        </svg>
      </button>
    </div>
  );
}

import { ReactNode } from "react";

interface PageTitleProps {
  subtitle: string;
  title: string | ReactNode;
  description?: string;
}

export default function PageTitle({
  subtitle,
  title,
  description,
}: PageTitleProps) {
  return (
    <div className="mb-12">
      <div className="relative">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full border-t border-gray-800"></div>
        </div>
        <div className="relative flex justify-start">
          <span className="pr-4 pl-3 py-1.5 rounded-full bg-[#0B1120]/80 border border-[#9333EA]/20 text-sm text-[#9333EA] font-sans font-medium transition-all duration-300 hover:scale-105 hover:bg-[#9333EA]/10 hover:border-[#9333EA]/30 group">
            {subtitle}
            <span className="absolute inset-0 rounded-full bg-[#9333EA]/5 transform scale-0 transition-transform duration-300 group-hover:scale-100" />
          </span>
        </div>
      </div>

      <h1 className="mt-8 text-4xl sm:text-6xl font-bold tracking-tight text-white font-display">
        {title}
      </h1>
      {description && (
        <p className="mt-4 text-xl text-gray-400 max-w-3xl font-sans">
          {description}
        </p>
      )}
    </div>
  );
}

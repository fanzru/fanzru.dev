"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Logo from "./Logo";

const Navigation = () => {
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (pathname === path) {
      return "text-white after:scale-x-100 after:opacity-100";
    }
    return "text-gray-400 hover:text-white";
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/80 border-b border-white/5 backdrop-blur">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link
            href="/"
            className="text-white hover:opacity-80 transition-all duration-300 transform hover:scale-105"
          >
            <Logo />
          </Link>

          <nav className="flex items-center space-x-2">
            {[
              { path: "/", label: "Home" },
              { path: "/profile", label: "Profile" },
              { path: "/projects", label: "Projects" },
              { path: "/story", label: "Story" },
              { path: "/blog", label: "Blog" },
            ].map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`${isActive(
                  item.path
                )} px-4 py-2 relative transition-colors duration-200
                  after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full 
                  after:bg-[#9333EA] after:origin-left after:scale-x-0 after:opacity-0
                  after:transition-all after:duration-300 after:ease-out
                  hover:after:scale-x-100 hover:after:opacity-100`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navigation;

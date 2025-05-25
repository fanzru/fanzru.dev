"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Logo from "./Logo";
import { useState, useEffect } from "react";
import { FaXTwitter, FaGithub } from "react-icons/fa6";

const Navigation = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const isActive = (path: string) => {
    if (pathname === path) {
      return "text-white font-medium";
    }
    return "text-gray-300 hover:text-white";
  };

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/profile", label: "Profile" },
    { path: "/projects", label: "Projects" },
    { path: "/story", label: "Story" },
    { path: "/blog", label: "Blog" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full">
      {/* Glassmorphism background */}
      <div className="absolute inset-0 w-full bg-[#0B1120]/80 backdrop-blur-md border-b border-white/10" />

      <nav className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link
            href="/"
            className="text-white hover:opacity-80 transition-all duration-300 transform hover:scale-105 relative z-50"
          >
            <Logo />
          </Link>

          <div className="flex items-center gap-4">
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`${isActive(item.path)} 
                    relative transition-all duration-200 text-sm
                    group py-1`}
                >
                  <span>{item.label}</span>
                  <div
                    className={`absolute bottom-0 left-0 h-[2px] bg-white transition-all duration-300
                      ${
                        pathname === item.path
                          ? "w-full"
                          : "w-0 group-hover:w-full"
                      }`}
                  />
                </Link>
              ))}
            </div>

            {/* Social Icons */}
            <div className="hidden md:flex items-center space-x-4 ml-4">
              <a
                href="https://twitter.com/fanzru"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-all duration-200"
                aria-label="Twitter"
              >
                <FaXTwitter size={18} />
              </a>
              <a
                href="https://github.com/fanzru"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-all duration-200"
                aria-label="GitHub"
              >
                <FaGithub size={18} />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg text-gray-300 hover:text-white relative z-50 transition-all duration-300"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-6 relative flex items-center justify-center">
                <span
                  className={`block absolute h-0.5 w-6 bg-current transform transition-all duration-300 ease-in-out ${
                    isMenuOpen ? "rotate-45" : "-translate-y-1.5"
                  }`}
                />
                <span
                  className={`block absolute h-0.5 w-6 bg-current transform transition-all duration-300 ease-in-out ${
                    isMenuOpen ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`block absolute h-0.5 w-6 bg-current transform transition-all duration-300 ease-in-out ${
                    isMenuOpen ? "-rotate-45" : "translate-y-1.5"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Overlay */}
        <div
          className={`fixed inset-0 w-full transition-all duration-300 md:hidden ${
            isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
          style={{ zIndex: 40 }}
        >
          {/* Glassmorphism background for mobile menu */}
          <div className="absolute inset-0 w-full bg-[#0B1120]/95 backdrop-blur-lg" />

          <nav className="relative flex flex-col items-center justify-center h-screen">
            <div className="flex flex-col items-center space-y-6 w-full max-w-xs px-4">
              {navItems.map((item, index) => (
                <div
                  key={item.path}
                  className={`w-full text-center ${
                    isMenuOpen
                      ? "translate-y-0 opacity-100"
                      : "translate-y-4 opacity-0"
                  }`}
                  style={{
                    transitionDelay: `${index * 100}ms`,
                    transitionProperty: "all",
                    transitionDuration: "300ms",
                  }}
                >
                  <Link
                    href={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`${isActive(
                      item.path
                    )} text-base sm:text-lg font-medium inline-block relative px-4`}
                  >
                    {item.label}
                  </Link>
                  <div
                    className={`h-[1px] bg-white/70 mt-1.5 mx-auto transition-all duration-300
                      ${
                        pathname === item.path ? "w-12" : "w-0 group-hover:w-12"
                      }`}
                  />
                </div>
              ))}

              {/* Social Icons in Mobile Menu */}
              <div className="flex items-center space-x-6 mt-6">
                <a
                  href="https://twitter.com/fanzru"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-all duration-200"
                  aria-label="Twitter"
                >
                  <FaXTwitter size={18} />
                </a>
                <a
                  href="https://github.com/fanzru"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-all duration-200"
                  aria-label="GitHub"
                >
                  <FaGithub size={18} />
                </a>
              </div>
            </div>
          </nav>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;

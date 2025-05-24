/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-playfair)", "serif"],
      },
      colors: {
        border: "hsl(var(--border))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
      },
      typography: {
        DEFAULT: {
          css: {
            color: "#fff",
            a: {
              color: "#9333EA",
              "&:hover": {
                color: "#fff",
              },
            },
            h1: {
              color: "#fff",
              fontFamily: "var(--font-playfair)",
            },
            h2: {
              color: "#fff",
              fontFamily: "var(--font-playfair)",
            },
            h3: {
              color: "#fff",
              fontFamily: "var(--font-playfair)",
            },
            h4: {
              color: "#fff",
              fontFamily: "var(--font-playfair)",
            },
            strong: {
              color: "#fff",
            },
            code: {
              color: "#fff",
              background: "rgba(147, 51, 234, 0.1)",
              padding: "0.25rem 0.5rem",
              borderRadius: "0.25rem",
              border: "1px solid rgba(147, 51, 234, 0.2)",
            },
            pre: {
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              code: {
                background: "transparent",
                border: "none",
                padding: "0",
              },
            },
            "code::before": {
              content: '""',
            },
            "code::after": {
              content: '""',
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

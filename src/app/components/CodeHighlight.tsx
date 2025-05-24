"use client";

import React from "react";

interface CodeHighlightProps {
  code: string;
  language: string;
  showLineNumbers?: boolean;
  startLine?: number;
  highlightLines?: number[];
}

export default function CodeHighlight({
  code,
  language,
  showLineNumbers = true,
  startLine = 1,
  highlightLines = [],
}: CodeHighlightProps) {
  const lines = code.trim().split("\n");

  // Simple syntax highlighting colors based on token patterns
  const highlightSyntax = (line: string): React.ReactNode => {
    if (!line) return null;

    // Only apply syntax highlighting for supported languages
    if (
      ![
        "js",
        "jsx",
        "ts",
        "tsx",
        "go",
        "python",
        "java",
        "rust",
        "c",
        "cpp",
        "csharp",
        "php",
        "ruby",
        "json",
        "html",
        "css",
        "dockerfile",
      ].includes(language)
    ) {
      return <span>{line}</span>;
    }

    // Very basic syntax highlighting patterns - Next.js blog style colors
    const patterns = [
      // Strings
      { pattern: /(["'`])(.*?)\1/g, className: "text-yellow-300" },
      // Keywords
      {
        pattern:
          /\b(function|const|let|var|if|else|for|while|return|import|export|from|class|interface|type|extends|implements|new|this|super|async|await|try|catch|throw|finally)\b/g,
        className: "text-purple-400",
      },
      // Numbers
      { pattern: /\b(\d+(\.\d+)?)\b/g, className: "text-cyan-300" },
      // Comments
      { pattern: /(\/\/.*|\/\*[\s\S]*?\*\/|#.*)/g, className: "text-gray-500" },
      // Functions/methods
      {
        pattern: /\b([a-zA-Z_$][a-zA-Z0-9_$]*)\(/g,
        className: "text-blue-400",
      },
      // Properties
      { pattern: /\.([a-zA-Z_$][a-zA-Z0-9_$]*)/g, className: "text-white" },
      // Types/Classes
      { pattern: /\b([A-Z][a-zA-Z0-9_$]*)\b/g, className: "text-green-400" },
      // JSX/HTML tags
      {
        pattern: /(<\/?)([a-zA-Z][a-zA-Z0-9]*)(>)?/g,
        className: "text-pink-400",
      },
      // Go-specific
      {
        pattern:
          /\b(package|import|func|struct|interface|chan|go|defer|select|case)\b/g,
        className: "text-purple-400",
      },
      // Rust-specific
      {
        pattern:
          /\b(fn|use|let|mut|impl|trait|enum|pub|mod|match|self|crate|super|where|ref|async|await|move|dyn|type)\b/g,
        className: "text-purple-400",
      },
      // Special Rust types
      {
        pattern:
          /\b(String|str|i32|i64|u32|u64|f32|f64|bool|char|Vec|Option|Result|Box|Arc|Rc|RefCell|Mutex)\b/g,
        className: "text-cyan-400",
      },
    ];

    // Apply highlighting to specific types of tokens
    let spans: { text: string; className?: string; index: number }[] = [
      { text: line, index: 0 },
    ];

    patterns.forEach(({ pattern, className }) => {
      const newSpans: typeof spans = [];

      spans.forEach((span) => {
        if (!span.className) {
          let lastIndex = 0;
          const text = span.text;
          let match;

          pattern.lastIndex = 0; // Reset regex state
          while ((match = pattern.exec(text)) !== null) {
            // Add text before match
            if (match.index > lastIndex) {
              newSpans.push({
                text: text.substring(lastIndex, match.index),
                index: span.index + lastIndex,
              });
            }

            // Add the matched text with highlighting
            newSpans.push({
              text: match[0],
              className,
              index: span.index + match.index,
            });

            lastIndex = match.index + match[0].length;
          }

          // Add remaining text
          if (lastIndex < text.length) {
            newSpans.push({
              text: text.substring(lastIndex),
              index: span.index + lastIndex,
            });
          }
        } else {
          newSpans.push(span);
        }
      });

      if (newSpans.length > 0) {
        spans = newSpans.sort((a, b) => a.index - b.index);
      }
    });

    return (
      <>
        {spans.map((span, i) => (
          <span key={i} className={span.className || ""}>
            {span.text}
          </span>
        ))}
      </>
    );
  };

  return (
    <div className="relative font-mono text-sm leading-6 overflow-auto">
      <pre className="p-0 m-0 overflow-visible">
        <code className="grid">
          {lines.map((line, i) => {
            const lineNumber = startLine + i;
            const isHighlighted = highlightLines.includes(lineNumber);

            return (
              <div
                key={i}
                className={`px-4 py-0.5 ${
                  isHighlighted ? "bg-gray-800" : ""
                } whitespace-pre`}
              >
                {showLineNumbers && (
                  <span className="inline-block w-10 pr-4 text-right select-none text-gray-500 border-r border-gray-700 mr-4">
                    {lineNumber}
                  </span>
                )}
                <span className="text-gray-300">
                  {highlightSyntax(line) || " "}
                </span>
              </div>
            );
          })}
        </code>
      </pre>
    </div>
  );
}

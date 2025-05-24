import { MDXRemote } from "next-mdx-remote/rsc";
import { ElementType, ReactNode, createElement } from "react";
import CopyButton from "./CopyButton";
import TableOfContents from "./TableOfContents";
import { slugify } from "@/lib/utils";
import CodeHighlight from "./CodeHighlight";

interface MDXContentProps {
  content: any;
}

function TerminalBox({
  children,
  title = "Terminal",
}: {
  children: React.ReactNode;
  title?: string;
}) {
  return (
    <div className="relative mt-6 mb-6">
      <div className="absolute top-0 left-0 right-0 h-8 bg-[#111] rounded-t-lg flex items-center px-4 space-x-2 border-b border-[#333] z-10">
        <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
        <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
        <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
        <span className="ml-2 text-xs font-mono text-gray-400">{title}</span>
      </div>
      <div className="pt-8 bg-[#000] rounded-lg overflow-hidden border border-[#333]">
        {children}
      </div>
    </div>
  );
}

function CodeBlock({
  children,
  language,
  filename,
  showLineNumbers = true,
}: {
  children: React.ReactNode;
  language: string;
  filename?: string;
  showLineNumbers?: boolean;
}) {
  const codeString = children?.toString() || "";

  return (
    <div className="relative group rounded-lg my-6 overflow-hidden bg-[#000] border border-[#333]">
      {filename && (
        <div className="flex items-center px-4 py-2 bg-[#111] border-b border-[#333]">
          <span className="text-xs font-mono text-gray-300">{filename}</span>
        </div>
      )}
      <div className="relative overflow-auto">
        <CodeHighlight
          code={codeString}
          language={language}
          showLineNumbers={showLineNumbers}
        />
        <CopyButton code={codeString} />
        {language && !filename && (
          <span className="absolute top-3 right-12 text-xs text-gray-500 font-mono">
            {language}
          </span>
        )}
      </div>
    </div>
  );
}

function createHeadingComponent(level: number) {
  return function HeadingComponent(
    props: { children: ReactNode } & React.HTMLAttributes<HTMLHeadingElement>
  ) {
    const { children, ...rest } = props;
    const id = slugify(children?.toString() || "");
    const sizes: Record<number, string> = {
      1: "text-4xl leading-[1.2]",
      2: "text-2xl leading-[1.3]",
      3: "text-xl leading-[1.4]",
      4: "text-lg leading-[1.4]",
    };

    const className = `font-semibold tracking-tight text-white mt-12 mb-6 scroll-mt-24 ${
      sizes[level] || "text-base"
    }`;

    return createElement(
      `h${level}`,
      {
        id,
        className,
        ...rest,
      },
      <>
        <a
          href={`#${id}`}
          className="absolute -ml-8 pr-2 opacity-0 group-hover:opacity-100 transition-opacity"
        >
          #
        </a>
        {children}
      </>
    );
  };
}

export default function MDXContent({ content }: MDXContentProps) {
  const components = {
    h1: createHeadingComponent(1),
    h2: createHeadingComponent(2),
    h3: createHeadingComponent(3),
    h4: createHeadingComponent(4),
    p: (props: any) => (
      <p
        {...props}
        className="leading-7 [&:not(:first-child)]:mt-6 text-gray-400"
      />
    ),
    ul: (props: any) => (
      <ul
        {...props}
        className="my-6 ml-6 list-disc [&>li]:mt-2 text-gray-400"
      />
    ),
    ol: (props: any) => (
      <ol
        {...props}
        className="my-6 ml-6 list-decimal [&>li]:mt-2 text-gray-400"
      />
    ),
    li: (props: any) => <li {...props} className="text-gray-400" />,
    pre: (props: any) => {
      const codeString = props.children?.props?.children || "";
      let language =
        props.children?.props?.className?.replace("language-", "") || "";
      let filename = null;
      let showLineNumbers = true;
      let highlightLines: number[] = [];

      // Extract metadata from the language string
      // Format can be: language:filename.ext{1,3-5}
      // where {1,3-5} are line numbers to highlight
      if (language.includes(":")) {
        const parts = language.split(":");
        language = parts[0];

        // Check if we have a filename with highlight lines
        if (parts[1].includes("{")) {
          const fileAndMeta = parts[1].split("{");
          filename = fileAndMeta[0];

          // Extract highlight lines
          const highlightString = fileAndMeta[1].replace("}", "");
          highlightLines = parseHighlightLines(highlightString);
        } else {
          filename = parts[1];
        }
      }

      // Check if we have metadata without a filename
      if (language.includes("{")) {
        const parts = language.split("{");
        language = parts[0];
        const highlightString = parts[1].replace("}", "");
        highlightLines = parseHighlightLines(highlightString);
      }

      // Detect if this is a terminal code block
      const isTerminal =
        language === "terminal" || language === "bash" || language === "sh";

      if (isTerminal) {
        // Improved terminal display with command differentiation
        return (
          <TerminalBox title={filename || "Terminal"}>
            <div className="overflow-x-auto p-4 text-[13px] leading-6 font-mono text-gray-300">
              {codeString.split("\n").map((line: string, i: number) => {
                // Check if the line is a command (not output)
                const isCommand =
                  line.trim().length > 0 && !line.startsWith("#");

                if (line.trim() === "") {
                  return <div key={i} className="h-2"></div>; // Empty line spacing
                }

                if (line.startsWith("#")) {
                  // Comment line
                  return (
                    <div key={i} className="whitespace-pre-wrap text-gray-500">
                      {line}
                    </div>
                  );
                }

                return (
                  <div key={i} className="whitespace-pre-wrap">
                    {isCommand && (
                      <span className="text-green-400 mr-2">$</span>
                    )}
                    <span
                      className={isCommand ? "text-gray-200" : "text-gray-400"}
                    >
                      {line}
                    </span>
                  </div>
                );
              })}
            </div>
          </TerminalBox>
        );
      }

      return (
        <CodeBlock
          language={language}
          filename={filename}
          showLineNumbers={showLineNumbers}
        >
          {codeString}
        </CodeBlock>
      );
    },
    code: (props: any) => {
      if (props.className) {
        return <code {...props} />;
      }
      return (
        <code
          {...props}
          className="relative rounded bg-[#111] px-[0.3rem] py-[0.2rem] font-mono text-sm text-gray-200"
        />
      );
    },
    strong: (props: any) => (
      <strong {...props} className="font-semibold text-white" />
    ),
    a: (props: any) => (
      <a
        {...props}
        className="font-medium text-blue-500 underline underline-offset-4 hover:text-blue-400 transition-colors"
        target={props.href?.startsWith("http") ? "_blank" : undefined}
        rel={props.href?.startsWith("http") ? "noopener noreferrer" : undefined}
      />
    ),
    blockquote: (props: any) => (
      <blockquote
        {...props}
        className="mt-6 border-l-2 border-neutral-500 pl-6 italic text-gray-400 bg-[#111] py-2 pr-4 rounded-r"
      />
    ),
    img: (props: any) => (
      <img
        {...props}
        className="rounded-lg my-8 border border-neutral-800 max-w-full h-auto"
        loading="lazy"
      />
    ),
    hr: (props: any) => (
      <hr {...props} className="my-12 border-t border-neutral-800" />
    ),
    table: (props: any) => (
      <div className="overflow-x-auto my-8">
        <table {...props} className="w-full border-collapse text-sm" />
      </div>
    ),
    th: (props: any) => (
      <th
        {...props}
        className="border border-neutral-800 px-4 py-2 text-left font-bold bg-[#111]"
      />
    ),
    td: (props: any) => (
      <td
        {...props}
        className="border border-neutral-800 px-4 py-2 text-gray-400"
      />
    ),
    // Custom components could be added here
  };

  return (
    <div className="relative">
      <article className="prose prose-invert prose-gray mx-auto max-w-4xl pb-32">
        <div className="group">
          <MDXRemote
            source={content}
            components={components}
            options={{
              parseFrontmatter: false,
              mdxOptions: {
                development: process.env.NODE_ENV === "development",
              },
            }}
          />
        </div>
      </article>
      <TableOfContents />
    </div>
  );
}

// Helper function to parse highlight lines notation
// For example: "1,3-5,7" => [1, 3, 4, 5, 7]
function parseHighlightLines(highlightString: string): number[] {
  const result: number[] = [];

  if (!highlightString) return result;

  const parts = highlightString.split(",");

  for (const part of parts) {
    if (part.includes("-")) {
      const [start, end] = part.split("-").map(Number);
      for (let i = start; i <= end; i++) {
        result.push(i);
      }
    } else {
      result.push(Number(part));
    }
  }

  return result;
}

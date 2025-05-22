import type { MDXComponents } from "mdx/types";
import HeaderWithCopy from "@/app/components/HeaderWithCopy";
import CopyButton from "@/app/components/CopyButton";

function TerminalBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative mt-4 mb-4">
      <div
        className="absolute top-0 left-0 right-0 h-8 bg-[#1E1E1E] rounded-t-lg
                    flex items-center px-4 space-x-2"
      >
        <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
        <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
        <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
        <span className="ml-2 text-sm text-gray-400">Terminal</span>
      </div>
      <div className="pt-8 bg-[#1E1E1E] rounded-lg overflow-hidden">
        {children}
      </div>
    </div>
  );
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: (props) => (
      <HeaderWithCopy
        {...props}
        as="h1"
        className="text-3xl font-bold mt-8 mb-4 text-white"
      />
    ),
    h2: (props) => (
      <HeaderWithCopy
        {...props}
        as="h2"
        className="text-2xl font-bold mt-6 mb-3 text-white"
      />
    ),
    h3: (props) => (
      <HeaderWithCopy
        {...props}
        as="h3"
        className="text-xl font-bold mt-5 mb-2 text-white"
      />
    ),
    p: (props) => (
      <p {...props} className="mb-4 text-gray-300 leading-relaxed" />
    ),
    ul: (props) => <ul {...props} className="list-disc pl-6 mb-4 space-y-2" />,
    ol: (props) => (
      <ol {...props} className="list-decimal pl-6 mb-4 space-y-2" />
    ),
    li: (props) => <li {...props} className="text-gray-300" />,
    pre: (props) => {
      const codeString = props.children?.props?.children || "";
      const language =
        props.children?.props?.className?.replace("language-", "") || "";
      const isTerminal =
        language === "terminal" || language === "bash" || language === "sh";

      const CodeBlock = (
        <div className="relative group">
          <pre
            {...props}
            className="bg-[#1E1E1E] p-4 rounded-lg overflow-x-auto mb-4 font-mono text-sm"
          />
          <CopyButton code={codeString} />
          {language && (
            <span className="absolute top-3 left-3 text-xs text-gray-500 font-mono">
              {language}
            </span>
          )}
        </div>
      );

      return isTerminal ? <TerminalBox>{CodeBlock}</TerminalBox> : CodeBlock;
    },
    code: (props) => {
      if (props.className) {
        return <code {...props} />;
      }
      return (
        <code
          {...props}
          className="bg-[#1E1E1E] px-1.5 py-0.5 rounded text-sm font-mono text-gray-300"
        />
      );
    },
    strong: (props) => <strong {...props} className="font-bold text-white" />,
    a: (props) => (
      <a
        {...props}
        className="text-[#9333EA] hover:text-white transition-colors underline"
        target={props.href?.startsWith("http") ? "_blank" : undefined}
        rel={props.href?.startsWith("http") ? "noopener noreferrer" : undefined}
      />
    ),
    blockquote: (props) => (
      <blockquote
        {...props}
        className="border-l-4 border-[#9333EA] pl-4 my-4 italic text-gray-300"
      />
    ),
    img: (props) => (
      <img
        {...props}
        className="rounded-lg max-w-full h-auto my-4"
        loading="lazy"
      />
    ),
    hr: (props) => <hr {...props} className="my-8 border-t border-gray-800" />,
    ...components,
  };
}

import { MDXRemote } from "next-mdx-remote/rsc";
import { ElementType } from "react";
import CopyButton from "./CopyButton";
import TableOfContents from "./TableOfContents";
import { slugify } from "@/lib/utils";

interface MDXContentProps {
  content: any;
}

function TerminalBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative mt-6 mb-6">
      <div className="absolute top-0 left-0 right-0 h-8 bg-[#1E1E1E] rounded-t-lg flex items-center px-4 space-x-2">
        <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
        <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
        <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
        <span className="ml-2 text-sm font-medium text-gray-400">Terminal</span>
      </div>
      <div className="pt-8 bg-[#1E1E1E] rounded-lg overflow-hidden">
        {children}
      </div>
    </div>
  );
}

function createHeadingComponent(level: number) {
  return ({
    children,
    ...props
  }: {
    children: React.ReactNode;
    [key: string]: any;
  }) => {
    const id = slugify(children?.toString() || "");
    const Component = `h${level}` as ElementType;
    const sizes = {
      1: "text-4xl leading-[1.2]",
      2: "text-2xl leading-[1.3]",
      3: "text-xl leading-[1.4]",
    };

    return (
      <Component
        id={id}
        className={`font-semibold tracking-tight text-white mt-12 mb-6 scroll-mt-24 ${
          sizes[level as keyof typeof sizes]
        }`}
        {...props}
      >
        <a
          href={`#${id}`}
          className="absolute -ml-8 pr-2 opacity-0 group-hover:opacity-100 transition-opacity"
        >
          #
        </a>
        {children}
      </Component>
    );
  };
}

export default function MDXContent({ content }: MDXContentProps) {
  const components = {
    h1: createHeadingComponent(1),
    h2: createHeadingComponent(2),
    h3: createHeadingComponent(3),
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
      const language =
        props.children?.props?.className?.replace("language-", "") || "";
      const isTerminal =
        language === "terminal" || language === "bash" || language === "sh";

      const CodeBlock = (
        <div className="relative group">
          <pre
            {...props}
            className="mt-6 mb-6 overflow-x-auto rounded-lg bg-[#1E1E1E] p-4 text-[13px] leading-6"
          />
          <CopyButton code={codeString} />
          {language && (
            <span className="absolute top-3 right-3 text-xs text-gray-500 font-mono">
              {language}
            </span>
          )}
        </div>
      );

      return isTerminal ? <TerminalBox>{CodeBlock}</TerminalBox> : CodeBlock;
    },
    code: (props: any) => {
      if (props.className) {
        return <code {...props} />;
      }
      return (
        <code
          {...props}
          className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm"
        />
      );
    },
    strong: (props: any) => (
      <strong {...props} className="font-semibold text-white" />
    ),
    a: (props: any) => (
      <a
        {...props}
        className="font-medium text-primary underline underline-offset-4 hover:text-primary/80"
        target={props.href.startsWith("http") ? "_blank" : undefined}
        rel={props.href.startsWith("http") ? "noopener noreferrer" : undefined}
      />
    ),
    blockquote: (props: any) => (
      <blockquote
        {...props}
        className="mt-6 border-l-2 border-primary pl-6 italic text-gray-400"
      />
    ),
    img: (props: any) => (
      <img
        {...props}
        className="rounded-lg my-8 border border-border"
        loading="lazy"
      />
    ),
    hr: (props: any) => (
      <hr {...props} className="my-12 border-t border-border" />
    ),
  };

  return (
    <div className="relative">
      <article className="prose prose-invert prose-gray mx-auto max-w-4xl  pb-32">
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

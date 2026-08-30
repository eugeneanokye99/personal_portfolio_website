import type { MDXComponents } from "mdx/types";

const components: MDXComponents = {
  h1: (props) => <h1 className="prose-h1" {...props} />,
  h2: (props) => <h2 className="prose-h2" {...props} />,
  h3: (props) => <h3 className="prose-h3" {...props} />,
  p: (props) => <p className="prose-p" {...props} />,
  a: (props) => <a className="prose-a" target={props.href?.startsWith("http") ? "_blank" : undefined} rel={props.href?.startsWith("http") ? "noopener" : undefined} {...props} />,
  ul: (props) => <ul className="prose-list" {...props} />,
  ol: (props) => <ol className="prose-list" {...props} />,
  li: (props) => <li className="prose-li" {...props} />,
  blockquote: (props) => <blockquote className="prose-quote" {...props} />,
  code: (props) => <code className="prose-code" {...props} />,
  pre: (props) => <pre className="prose-pre" {...props} />,
  hr: (props) => <hr className="prose-hr" {...props} />,
  table: (props) => <div className="prose-table-wrap"><table {...props} /></div>,
};

export function useMDXComponents(): MDXComponents {
  return components;
}

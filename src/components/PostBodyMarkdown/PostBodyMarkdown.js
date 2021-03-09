import React from "react";
import { useCurrentPostData } from "../../hooks/useCurrentPostData";
import ReactMarkdown from "react-markdown/with-html";
import { PrismAsyncLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";
import gfm from "remark-gfm";

const MyImage = (props) => {
  return (
    <img
      className="img-fluid rounded mb-2 uk-animation-fade"
      src={`${props?.src}`}
      alt={props.alt}
      loading="lazy"
    />
  );
};
const renderers = {
  image: MyImage,
  code: ({ language, value }) => {
    return (
      <SyntaxHighlighter style={dark} language={language} children={value} />
    );
  },
};

export default function PostBodyMarkdown() {
  const { displayedPost } = useCurrentPostData();
  return (
    <>
      {displayedPost && displayedPost?.body ? (
        <div className="post-content-body">
          <h1 className="mb-5">{displayedPost?.title}</h1>
          <ReactMarkdown
            plugins={[gfm]}
            renderers={renderers}
            children={displayedPost?.body}
            allowDangerousHtml
          />
        </div>
      ) : null}
    </>
  );
}

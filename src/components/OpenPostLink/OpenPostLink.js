import React from "react";
import { Link } from "react-router-dom";

export default function OpenPostLink({ post, children, ...rest }) {
  return (
    <>
      {post && children ? (
        <Link
          to={{
            pathname: `/post/${post?.slug}`,
            state: { post: post },
          }}
          {...rest}
        >
          {children}
        </Link>
      ) : null}
    </>
  );
}

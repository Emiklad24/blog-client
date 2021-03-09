import React from "react";
import { Helmet } from "react-helmet";

export default function CustomHead({ title, description, keywords }) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />
    </Helmet>
  );
}

CustomHead.defaultProps = {
  title: "Isocroft.com | Lifestyle of a developer",

  description:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam enim minus perspiciatis dolor reprehenderit eius reiciendis dicta nisi illum molestiae?",
  keywords:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam enim minus perspiciatis dolor reprehenderit eius reiciendis dicta nisi illum molestiae?",
};

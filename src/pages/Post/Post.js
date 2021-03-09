import React from "react";
import { useLocation } from "react-router-dom";
import AllArticles from "../../components/AllArticles/AllArticles";
import PostBody from "../../components/PostBody/PostBody";
import SinglePostHero from "../../components/SinglePostHero/SinglePostHero";

export default function Post() {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <SinglePostHero />
      <PostBody />
      <AllArticles />
    </>
  );
}

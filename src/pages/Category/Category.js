import React from "react";
import { useLocation } from "react-router";
import AllArticles from "../../components/AllArticles/AllArticles";
import PostsForCategory from "../../components/PostsForCategory/PostsForCategory";
import SingleCategoryHero from "../../components/SingleCategoryHero/SingleCategoryHero";

export default function Category() {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <SingleCategoryHero />
      <PostsForCategory />
      <AllArticles />
    </>
  );
}

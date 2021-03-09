import React from "react";
import AllArticles from "../../components/AllArticles/AllArticles";
import CustomHead from "../../components/CustomHead/CustomHead";
import GridArticle from "../../components/GridArticle/GridArticle";
import Headlines from "../../components/Headlines/Headlines";
import PhotoGridArticle from "../../components/PhotoGridArticle/PhotoGridArticle";
import TopNewsHero from "../../components/TopNewsHero/TopNewsHero";

export default function Home(props) {
  return (
    <>
      <CustomHead />
      <TopNewsHero />
      <Headlines />
      <PhotoGridArticle />
      <GridArticle />
      <AllArticles />
    </>
  );
}

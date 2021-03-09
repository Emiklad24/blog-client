import React from "react";
import { useCurrentPostData } from "../../hooks/useCurrentPostData";
import { PostMarkDown } from "../../util/componentsImport";
import AuthorBioSinglePost from "../AuthorBioSinglePost/AuthorBioSinglePost";
import CategoriesSidebar from "../CategoriesSidebar/CategoriesSidebar";
import NoPost from "../NoPost/NoPost";
import OpenPostLink from "../OpenPostLink/OpenPostLink";
import SimilarPosts from "../SimilarPosts/SimilarPosts";
import SinglePostTags from "../SinglePostTags/SinglePostTags";
// import PostMarkdownSuspense from "../SuspenseComponents/PostMarkdownSuspense";

export default function PostBody() {
  const { displayedPost, isLoading } = useCurrentPostData();
  console.log(displayedPost);
  return (
    <>
      {displayedPost &&
      displayedPost?.categories &&
      Array.isArray(displayedPost?.categories) &&
      displayedPost?.categories?.length !== 0 ? (
        <section className="site-section py-lg mt-5 uk-animation-fade">
          <div className="container">
            <div className="row blog-entries element-animate">
              <div className="col-md-12 col-lg-8 main-content">
                <PostMarkDown />
                <div className="pt-5">
                  <p className="uk-animation-fade">
                    Categories:{" "}
                    {displayedPost?.categories?.map((item, index) => (
                      <OpenPostLink
                        key={index}
                        post={item}
                        className="text-capitalize"
                      >
                        {item?.name}{" "}
                      </OpenPostLink>
                    ))}
                  </p>
                </div>
              </div>

              <div className="col-md-12 col-lg-4 sidebar">
                <AuthorBioSinglePost />
                <SimilarPosts />
                <CategoriesSidebar />

                <SinglePostTags />
              </div>
            </div>
          </div>
        </section>
      ) : !isLoading && (!displayedPost || !displayedPost?.title) ? (
        <NoPost message={"Post has been deleted or does not exist"} />
      ) : null}
    </>
  );
}

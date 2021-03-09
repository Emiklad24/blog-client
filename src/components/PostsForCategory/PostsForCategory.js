import React from "react";
import PaginationTab from "../PaginationTab/PaginationTab";
import SimilarPosts from "../SimilarPosts/SimilarPosts";
import CategoriesSidebar from "../CategoriesSidebar/CategoriesSidebar";
import SinglePostTags from "../SinglePostTags/SinglePostTags";
import { useGetPostsCurrentCategory } from "../../hooks/useGetPostsCurrentCategory";
import { StartPositionStore } from "../../store/StartPosition.store";
import CategoryPill from "../CategoryPill.js/CategoryPill";
import moment from "moment";
import OpenPostLink from "../OpenPostLink/OpenPostLink";
import NoPost from "../NoPost/NoPost";

export default function PostsForCategory() {
  const startPosition = StartPositionStore((state) => state?.startPosition);
  const { data, isLoading } = useGetPostsCurrentCategory(startPosition);
  console.log(data);

  return (
    <>
      {data && Array.isArray(data) && data?.length !== 0 ? (
        <section className="site-section py-lg mt-5 uk-animation-fade">
          <div className="container">
            <div className="row blog-entries element-animate mb-5">
              <div className="col-md-12 col-lg-8 main-content">
                {data?.map((item, index) => (
                  <div className="entry2 mb-5" key={index}>
                    <OpenPostLink post={item}>
                      <img
                        src={`${item?.displayPicture?.url}`}
                        alt={item?.title}
                        className="img-fluid rounded  uk-animation-fade"
                      />
                    </OpenPostLink>
                    <CategoryPill categories={item?.categories} />
                    <h2 className="mt-3  uk-animation-fade">
                      <OpenPostLink post={item}>{item?.title}</OpenPostLink>
                    </h2>
                    <div className="post-meta align-items-center text-left clearfix">
                      <figure className="author-figure mb-0 mr-3 float-left">
                        <img
                          src={`${item?.authors?.[0]?.photo?.url}`}
                          alt={item?.authors?.[0]?.name}
                          className="img-fluid"
                        />
                      </figure>
                      <span className="d-inline-block mt-1">
                        By{" "}
                        <OpenPostLink post={item}>
                          {item?.authors?.[0]?.name}
                        </OpenPostLink>
                      </span>
                      <span>
                        &nbsp;-&nbsp;{" "}
                        {`${moment(item?.created_at).format(" MMMM Do, YYYY")}`}
                      </span>
                    </div>
                    <p>{item?.excerpt?.substring(0, 250) + " ..."}</p>
                  </div>
                ))}
                <PaginationTab />
              </div>

              <div className="col-md-12 col-lg-4 sidebar">
                <SimilarPosts />
                <CategoriesSidebar />
                <SinglePostTags />
              </div>
            </div>
          </div>
        </section>
      ) : !isLoading && (!data || data?.length === 0) ? (
        <NoPost message={"No post for this category"} />
      ) : null}
    </>
  );
}

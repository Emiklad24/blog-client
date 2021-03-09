import React from "react";
import { useQuery } from "react-query";
import { getAllPosts } from "../../services/getAllPosts.service";
import { getAllPostsKey } from "../../util/appCacheKeys";
import moment from "moment";
import CategoryPill from "../CategoryPill.js/CategoryPill";
import OpenPostLink from "../OpenPostLink/OpenPostLink";

export default function AllArticles() {
  const { data } = useQuery(getAllPostsKey, getAllPosts);
  return (
    <>
      {data && Array?.isArray?.(data) && data?.length !== 0 ? (
        <div className="site-section uk-animation-fade">
          <div className="container">
            <div className="row">
              {data?.map?.((item, index) => (
                <div className="col-lg-4 mb-5 mb-lg-0 mt-2" key={index}>
                  <div className="entry4 d-block d-sm-flex">
                    <figure className="figure order-2">
                      <OpenPostLink post={item}>
                        <img
                          src={`${item?.displayPicture?.url}`}
                          alt={item?.title}
                          className="img-fluid rounded"
                        />
                      </OpenPostLink>
                    </figure>
                    <div className="text mr-4 order-1">
                      <CategoryPill
                        categories={item?.categories?.slice?.(0, 3)}
                      />
                      <h2>
                        <OpenPostLink post={item}>{item?.title}</OpenPostLink>
                      </h2>
                      <span className="post-meta mb-3 d-block">
                        {`${moment(item?.created_at).format(" MMMM Do, YYYY")}`}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

import React from "react";
import { useQuery } from "react-query";
import { getAllPosts } from "../../services/getAllPosts.service";
import { getAllPostsKey } from "../../util/appCacheKeys";
import CategoryPill from "../CategoryPill.js/CategoryPill";
import moment from "moment";
import OpenPostLink from "../OpenPostLink/OpenPostLink";

export default function GridArticle() {
  const { data } = useQuery([getAllPostsKey, 4], getAllPosts);
  const leftPanelData = data?.slice?.(1, 4);
  return (
    <>
      {data && Array?.isArray?.(data) && data?.length !== 0 ? (
        <div className="site-section uk-animation-fade">
          <div className="container">
            <div className="row mb-5">
              <div className="col-12 section-heading">
                <h2>Trending Posts</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 mb-5 mb-lg-0 uk-animation-fade">
                <div className="entry2">
                  <OpenPostLink post={data?.[0]}>
                    <img
                      alt={`${data?.[0]?.title}`}
                      className="img-fluid rounded"
                      src={`${data?.[0]?.displayPicture?.url}`}
                    />
                  </OpenPostLink>
                  <CategoryPill categories={data?.[0]?.categories} />
                  <h2 className="mt-3">
                    <OpenPostLink post={data?.[0]}>
                      {data?.[0]?.title}
                    </OpenPostLink>
                  </h2>
                  <div className="post-meta align-items-center text-left clearfix uk-animation-fade">
                    <figure className="author-figure mb-0 mr-3 float-left">
                      <img
                        src={`${data?.[0]?.authors?.[0]?.photo?.url}`}
                        alt={data?.[0]?.authors?.[0]?.name}
                        className="img-fluid"
                      />
                    </figure>
                    <span className="d-inline-block mt-1">
                      By {/* <a href="#"> */}
                      {" " + data?.[0]?.authors?.[0]?.name}
                      {/* </a> */}
                    </span>
                    <span>
                      &nbsp;-&nbsp;{" "}
                      {`${moment(data?.[0]?.created_at).format(
                        "MMMM Do, YYYY"
                      )}`}
                    </span>
                  </div>
                  <p>{data?.[0]?.excerpt?.substring?.(0, 150)}...</p>
                </div>
              </div>

              <div className="col-lg-6 pl-lg-4 uk-animation-fade">
                {leftPanelData &&
                Array?.isArray?.(leftPanelData) &&
                leftPanelData?.length > 0
                  ? leftPanelData?.map((item, index) => (
                      <div className="entry3 d-block d-sm-flex" key={index}>
                        <figure className="figure order-2">
                          <OpenPostLink post={item}>
                            <img
                              src={`${item?.displayPicture?.url}`}
                              alt={`${item?.title}`}
                              className="img-fluid rounded"
                            />
                          </OpenPostLink>
                        </figure>
                        <div className="text mr-4 order-1">
                          <CategoryPill categories={[item?.categories?.[0]]} />
                          <h2 className="mt-3">
                            <OpenPostLink post={item}>
                              {item?.title}
                            </OpenPostLink>
                          </h2>
                          <span className="post-meta mb-3 d-block">
                            {`${moment(item?.created_at).format(
                              "MMMM Do, YYYY"
                            )}`}
                          </span>
                          <p>{item?.excerpt?.substring?.(0, 150)}...</p>
                        </div>
                      </div>
                    ))
                  : null}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

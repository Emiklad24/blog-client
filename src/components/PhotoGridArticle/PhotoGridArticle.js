import React from "react";
import { useQuery } from "react-query";
import { getAllPosts } from "../../services/getAllPosts.service";
import { getAllPostsKey } from "../../util/appCacheKeys";
import CategoryPill from "../CategoryPill.js/CategoryPill";
import moment from "moment";
import OpenPostLink from "../OpenPostLink/OpenPostLink";

export default function PhotoGridArticle() {
  const { data } = useQuery([getAllPostsKey, 4], getAllPosts);

  return (
    <>
      {data && Array.isArray(data) && data?.length !== 0 ? (
        <div className="site-section uk-animation-fade">
          <div className="container">
            <div className="row align-items-stretch retro-layout">
              <div className="col-md-5 uk-animation-fade">
                <OpenPostLink
                  post={data?.[0]}
                  className="hentry img-1 h-100 gradient"
                  style={{
                    backgroundImage: `url(${data?.[0]?.displayPicture?.url}
                )`,
                  }}
                >
                  <CategoryPill categories={data?.[0]?.categories} />
                  <div className="text">
                    <h2>{data?.[0]?.title}</h2>
                    <span>{`${moment(data?.[0]?.created_at).format(
                      "MMMM Do, YYYY"
                    )}`}</span>
                  </div>
                </OpenPostLink>
              </div>

              <div className="col-md-7 uk-animation-fade">
                <OpenPostLink
                  post={data?.[1]}
                  className="hentry img-2 v-height mb30 gradient"
                  style={{
                    backgroundImage: `url(${data?.[1]?.displayPicture?.url}
                )`,
                  }}
                >
                  <CategoryPill categories={data?.[1]?.categories} />
                  <div className="text text-sm">
                    <h2>{data?.[1]?.title}</h2>
                    <span>{`${moment(data?.[1]?.created_at).format(
                      "MMMM Do, YYYY"
                    )}`}</span>
                  </div>
                </OpenPostLink>

                <div className="two-col d-block d-md-flex uk-animation-fade">
                  <OpenPostLink
                    post={data?.[2]}
                    className="hentry v-height img-2 gradient "
                    style={{
                      backgroundImage: `url(${data?.[2]?.displayPicture?.url}
                )`,
                    }}
                  >
                    <CategoryPill categories={data?.[2]?.categories} />

                    <div className="text text-sm">
                      <h2>{data?.[2]?.title}</h2>
                      <span>{`${moment(data?.[2]?.created_at).format(
                        "MMMM Do, YYYY"
                      )}`}</span>
                    </div>
                  </OpenPostLink>
                  <OpenPostLink
                    post={data?.[3]}
                    className="hentry v-height img-2 ml-auto gradient"
                    style={{
                      backgroundImage: `url(${data?.[3]?.displayPicture?.url}
                )`,
                    }}
                  >
                    <CategoryPill categories={data?.[3]?.categories} />
                    <div className="text text-sm">
                      <h2>{data?.[3]?.title}</h2>
                      <span>{`${moment(data?.[3]?.created_at).format(
                        "MMMM Do, YYYY"
                      )}`}</span>
                    </div>
                  </OpenPostLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

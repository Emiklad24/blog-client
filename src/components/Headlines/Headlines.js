import React from "react";
import { useQuery } from "react-query";
import { getAllPosts } from "../../services/getAllPosts.service";
import { getAllPostsKey } from "../../util/appCacheKeys";
import CategoryPill from "../CategoryPill.js/CategoryPill";
import moment from "moment";
import OpenPostLink from "../OpenPostLink/OpenPostLink";
export default function Headlines() {
  const { data } = useQuery([getAllPostsKey, 3], getAllPosts);
  return (
    <>
      {data && Array.isArray(data) && data?.length !== 0 ? (
        <div className="py-5 uk-animation-fade">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="rounded border p-4">
                  <div className="row align-items-stretch">
                    {data?.map((item, index) => (
                      <div
                        className="col-md-6 col-lg-4 mb-3 mb-lg-0"
                        key={index}
                      >
                        <OpenPostLink
                          post={item}
                          className="d-flex post-sm-entry"
                        >
                          <figure className="mr-3 mb-0">
                            <img
                              src={`${item?.displayPicture?.url}`}
                              alt={`${item?.title}`}
                              className="rounded"
                            />
                          </figure>
                          <div>
                            <CategoryPill categories={[item?.categories[0]]} />
                            <h2 className="mb-0">{item?.title}</h2>
                            <p className="text-primary mt-1">
                              {item?.excerpt?.substring(0, 20)}...
                            </p>
                            <span className="text-primary">{`${moment(
                              item?.created_at
                            ).format("MMMM Do, YYYY")}`}</span>
                          </div>
                        </OpenPostLink>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

import React from "react";
import CategoryPill from "../CategoryPill.js/CategoryPill";
import moment from "moment";
import { useCurrentPostData } from "../../hooks/useCurrentPostData";
import CustomHead from "../CustomHead/CustomHead";
import { screenWidth } from "../../util/misc";
export default function SinglePostHero() {
  const { isLoading, displayedPost } = useCurrentPostData();
  return (
    <>
      {displayedPost ? (
        <CustomHead
          title={`Isocroft | ${displayedPost?.title}`}
          description={displayedPost?.description}
          keywords={displayedPost?.tags || displayedPost?.description}
        />
      ) : null}
      {!displayedPost && !isLoading ? null : (
        <div
          className={`site-cover site-cover-sm same-height overlay single-page ${
            screenWidth >= 1020 ? "uk-animation-kenburns" : ""
          }`}
          style={{
            backgroundImage: `url(${displayedPost?.displayPicture?.url})`,
          }}
        >
          <div className="container">
            <div className="row same-height justify-content-center">
              <div className="col-md-12 col-lg-10">
                <div className="post-entry text-center">
                  <CategoryPill categories={displayedPost?.categories} />
                  <h1 className="mb-4">{displayedPost?.title}</h1>
                  <div className="post-meta align-items-center text-center">
                    {displayedPost?.authors ? (
                      <>
                        <figure className="author-figure mb-0 mr-3 d-inline-block uk-animation-fade">
                          <img
                            src={`${displayedPost?.authors?.[0]?.photo?.url}`}
                            alt={`${displayedPost?.authors?.[0]?.name}`}
                            className="img-fluid uk-animation-fade"
                          />
                        </figure>
                        <span className="d-inline-block mt-1 uk-animation-fade">
                          By {displayedPost?.authors?.[0]?.name}
                        </span>
                        <span className="uk-animation-fade">
                          &nbsp;-&nbsp;{" "}
                          {`${moment(displayedPost?.created_at).format(
                            " MMMM Do, YYYY"
                          )}`}
                        </span>
                      </>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

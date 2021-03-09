import React from "react";
import { useQuery } from "react-query";
import { getAllFeaturedPosts } from "../../services/getAllFeaturedPosts.service";
import { getAllFeaturedPostsKey } from "../../util/appCacheKeys";
import CategoryPill from "../CategoryPill.js/CategoryPill";
import moment from "moment";
import OpenPostLink from "../OpenPostLink/OpenPostLink";
import CustomHead from "../CustomHead/CustomHead";
import { screenWidth } from "../../util/misc";
import "./TopNewsHero.scss";

export default function TopNewsHero() {
  const { data } = useQuery(getAllFeaturedPostsKey, getAllFeaturedPosts);
  return (
    <>
      {data && Array?.isArray?.(data) && data?.length !== 0 ? (
        <>
          <CustomHead
            title={`Isocroft | ${data?.[0]?.title}`}
            description={data?.[0]?.description}
            keywords={data?.[0]?.tags}
          />
          <div className="hero-container-azq uk-animation-fade">
            <section className="hero uk-animation-fade">
              <div className="hero-slide">
                <div uk-slideshow="autoplay: true; autoplay-interval: 5000; pause-on-hover: true; animation: kenburns;">
                  <ul
                    className="uk-slideshow-items"
                    uk-height-viewport="min-height: 300"
                  >
                    {data?.map((item, index) => (
                      <li
                        className={
                          screenWidth && screenWidth >= 1020
                            ? "uk-animation-kenburns"
                            : ""
                        }
                        key={index}
                      >
                        <img
                          src={`${item?.displayPicture?.url}`}
                          uk-cover="true"
                          width="100%"
                          height="100vh"
                          alt="movie"
                        />
                        <div className="hero-overlay"></div>
                        <div className="container">
                          <div className="">
                            <div className="">
                              <div className="movie-features">
                                <OpenPostLink post={item}>
                                  <h1 className="title">{item?.title}</h1>
                                </OpenPostLink>
                                {/* <div className="category">
                                  Lorem | ipsum | dolor
                                </div> */}
                                <div className="category">
                                  <CategoryPill categories={item?.categories} />
                                </div>
                                <div>
                                  <dd className="movie-overview mt-2">
                                    {item?.excerpt?.substring(0, 150)}...
                                  </dd>

                                  <span className="text-white">
                                    &nbsp;-&nbsp;{" "}
                                    <span className="text-white">
                                      {item?.authors?.[0]?.name}
                                    </span>
                                  </span>
                                  <div>
                                    <span className="text-white">
                                      {" "}
                                      {`${moment(item?.created_at).format(
                                        " MMMM Do, YYYY"
                                      )}`}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="dark-img"></div>
            </section>
          </div>
        </>
      ) : null}
    </>
  );
}

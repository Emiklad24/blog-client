import React from "react";
import { useGetSimilarPosts } from "../../hooks/useGetSimilarPosts";
import moment from "moment";
import OpenPostLink from "../OpenPostLink/OpenPostLink";
export default function SimilarPosts() {
  const { similarPosts } = useGetSimilarPosts();
  return (
    <>
      {similarPosts &&
      Array?.isArray(similarPosts) &&
      similarPosts?.length !== 0 ? (
        <div className="sidebar-box">
          <h3 className="heading">Similar Posts</h3>
          <div className="post-entry-sidebar">
            <ul>
              {similarPosts?.map((item, index) => (
                <li key={index}>
                  <OpenPostLink post={item}>
                    <img
                      src={`${item?.displayPicture?.url}`}
                      alt={item?.title}
                      className="mr-4"
                    />
                    <div className="text">
                      <h4>{item?.title}</h4>
                      <div className="post-meta">
                        <span className="mr-2">
                          {`${moment(item?.displayedPost?.created_at).format(
                            " MMMM Do, YYYY"
                          )}`}
                        </span>
                      </div>
                    </div>
                  </OpenPostLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : null}
    </>
  );
}

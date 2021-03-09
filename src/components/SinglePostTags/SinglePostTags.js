import React from "react";
import { useCurrentPostData } from "../../hooks/useCurrentPostData";

export default function SinglePostTags() {
  const { displayedPost } = useCurrentPostData();
  const tags = displayedPost?.tags?.split(",");
  return (
    <>
      {tags && Array.isArray(tags) && tags?.length !== 0 ? (
        <div className="sidebar-box uk-animation-fade">
          <h3 className="heading">Tags</h3>
          {tags?.map((tag, index) => (
            <ul className="tags" key={index}>
              <li>
                <a href="#" className="text-capitalize mt-1">
                  {tag}
                </a>
              </li>
            </ul>
          ))}
        </div>
      ) : null}
    </>
  );
}

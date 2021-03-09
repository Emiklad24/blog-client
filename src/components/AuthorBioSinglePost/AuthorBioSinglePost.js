import React from "react";
import { Link } from "react-router-dom";
import { useCurrentPostData } from "../../hooks/useCurrentPostData";
export default function AuthorBioSinglePost() {
  const { displayedPost } = useCurrentPostData();
  return (
    <>
      {displayedPost &&
      Array?.isArray?.(displayedPost?.authors) &&
      displayedPost?.authors?.length !== 0 ? (
        <div className="sidebar-box uk-animation-fade">
          <div className="bio text-center">
            <img
              src={`${displayedPost?.authors?.[0]?.photo?.url}`}
              alt={displayedPost?.authors?.[0]?.name}
              className="img-fluid mb-5 uk-animation-fade"
            />
            <div className="bio-body">
              <h2>{displayedPost?.authors?.[0]?.name}</h2>
              <p className="mb-4">{displayedPost?.authors?.[0]?.bio}</p>
              <p>
                <Link
                  to={`/authors/${displayedPost?.authors?.[0]?.slug}`}
                  className="btn btn-primary btn-sm rounded px-4 py-2"
                >
                  Read my bio
                </Link>
              </p>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

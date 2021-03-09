import React from "react";
import CategoryPill from "../CategoryPill.js/CategoryPill";
import { useGetPostsCurrentCategory } from "../../hooks/useGetPostsCurrentCategory";
import CustomHead from "../CustomHead/CustomHead";
import { screenWidth } from "../../util/misc";
export default function SingleCategoryHero() {
  const { urlSlug, result } = useGetPostsCurrentCategory();

  return (
    <>
      {result ? (
        <>
          <CustomHead
            title={`Isocroft | ${result?.name} category`}
            description={result?.description}
            keywords={result?.description}
          />
          <div
            className={`site-cover site-cover-sm same-height overlay single-page ${
              screenWidth >= 1020 ? "uk-animation-kenburns" : ""
            }`}
            style={{
              backgroundImage: `url(${result?.photo?.url})`,
            }}
          >
            <div className="container uk-animation-fade">
              <div className="row same-height justify-content-center">
                <div className="col-md-12 col-lg-10">
                  <div className="post-entry text-center uk-animation-fade">
                    <CategoryPill categories={[{ ...result }]} />
                    <h1 className="mb-4 text-capitalize">
                      '{result?.name || urlSlug}' Category
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}

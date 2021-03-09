import React from "react";

export default function CategoryPill({ categories }) {
  return (
    <>
      {categories && Array?.isArray(categories) && categories?.length !== 0
        ? categories?.map((cat, index) => (
            <span
              className="post-category text-white mr-2 uk-animation-fade"
              style={{
                backgroundColor: cat?.tabColor,
              }}
              key={index}
            >
              {cat?.name}
            </span>
          ))
        : null}
    </>
  );
}

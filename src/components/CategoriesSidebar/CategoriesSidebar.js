import React from "react";
import { Link } from "react-router-dom";
import { useGetAllCategories } from "../../hooks/useGetAllCategories";

export default function CategoriesSidebar() {
  const { data } = useGetAllCategories();
  return (
    <>
      {data && Array?.isArray(data) && data?.length !== 0 ? (
        <div className="sidebar-box uk-animation-fade">
          <h3 className="heading uk-animation-fade">Categories</h3>
          <ul className="categories">
            {data?.map((item, index) => (
              <li key={index}>
                <Link
                  to={`/category/${item?.name}`}
                  className="text-capitalize"
                >
                  {item?.name} <span>({item?.posts?.length})</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </>
  );
}

import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function CustomLink({ urlPath, children }) {
  const { pathname } = useLocation();
  return (
    <>
      {urlPath && children ? (
        <li
          className={`nav-item uk-animation-fade  ${
            pathname?.toLowerCase() === urlPath?.toLowerCase() ? "active" : ""
          }`}
        >
          <Link
            className="nav-link text-capitalize uk-animation-fade "
            to={urlPath}
          >
            {children}
          </Link>
        </li>
      ) : null}
    </>
  );
}

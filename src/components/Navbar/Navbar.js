import React from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import CustomLink from "../CustomLink/CustomLink";
import CategoriesDropdown from "../CategoriesDropdown/CategoriesDropdown";

function Navbar() {
  return (
    <div className="site-wrap">
      <div className="site-mobile-menu">
        <div className="site-mobile-menu-header">
          <div className="site-mobile-menu-close mt-3">
            <span className="icon-close2 js-menu-toggle"></span>
          </div>
        </div>
        <div className="site-mobile-menu-body"></div>
      </div>
      <header className="site-navbar pt-3" role="banner">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-6 col-xl-6 logo">
              <h1 className="mb-0">
                <Link to="/" className="text-black h2 mb-0">
                  Isocroft
                </Link>
              </h1>
            </div>

            <div
              className="col-6 mr-auto py-3 text-right"
              style={{ position: "relative", top: "3px" }}
            >
              <div className="social-icons d-inline">
                <a
                  href="https://twitter.com/isocroft"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="icon-twitter"></span>
                </a>
                <a
                  href="https://github.com/isocroft"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="icon-github"></span>
                </a>
                <a
                  href="https://web.facebook.com/ifeora.okechukwu"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="icon-facebook"></span>
                </a>
              </div>
              <span className="site-menu-toggle js-menu-toggle text-black d-inline-block d-xl-none">
                <span className="icon-menu h3"></span>
              </span>
            </div>
          </div>

          <div className="col-12 d-none d-xl-block border-top">
            <nav className="site-navigation text-center " role="navigation">
              <ul className="site-menu js-clone-nav mx-auto d-none d-lg-block mb-0">
                <CustomLink urlPath="/">Home</CustomLink>

                <CategoriesDropdown />
                <CustomLink urlPath="/about">About</CustomLink>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Navbar;

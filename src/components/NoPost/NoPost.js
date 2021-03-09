import React from "react";
export default function NoPost({ message }) {
  return (
    <div className="container-fluid mt-5">
      <div className="row">
        <div className="col">
          <div className="my-5 uk-aniamtion-fade">
            <h3 className="text-center font-weight-bold">{message}</h3>
          </div>
        </div>
      </div>
    </div>
    // document.getElementById("no-post-portal")
  );
}

NoPost.defaultProps = {
  message: "No post at this time",
};

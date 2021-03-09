import React from "react";
import CustomHead from "../../components/CustomHead/CustomHead";

export default function Error404() {
  return (
    <>
      <CustomHead />
      <div className="container">
        <div className="row">
          <div className="col">
            <div
              className="error-page-message-container"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "75vh",
              }}
            >
              <div>
                <span style={{ fontSize: "100px", fontWeight: "bold" }}>
                  404{" "}
                </span>
                <span style={{ fontSize: "20px", fontWeight: "bold" }}>
                  Page does not exist
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

import React from "react";
import "./index.scss";
export default function PageSuspense(props) {
  return (
    <div className="load-container uk-animation-fade">
      <div className="supense-gradient p-3">
        {props?.error ? (
          <div className="error-container">
            <p className="text-danger error-text  uk-animation-fade">
              Failed to load due to poor internet connection
            </p>
            <div>
              <button onClick={() => props.retry()}>Reload Page</button>
            </div>
          </div>
        ) : props.timedOut && !props.error ? (
          <div className="error-container">
            <p className="text-primary error-text uk-animation-fade">
              Taking time to load ...
            </p>
            <div>
              <button onClick={() => props.retry()}>Reload Page</button>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

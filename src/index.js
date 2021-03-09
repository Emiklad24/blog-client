import React from "react";
import { hydrate, render } from "react-dom";

import { BrowserRouter } from "react-router-dom";
import App from "./App";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
// import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.css";
import "./index.scss";

const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>,
    rootElement
  );
} else {
  render(
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>,
    rootElement
  );
}

serviceWorkerRegistration.register();

// function sendToAnalytics({ id, name, value }) {
//   ga('send', 'event', {
//     eventCategory: 'Web Vitals',
//     eventAction: name,
//     eventValue: Math.round(name === 'CLS' ? value * 1000 : value), // values must be integers
//     eventLabel: id, // id unique to current page load
//     nonInteraction: true, // avoids affecting bounce rate
//   });
// }

// reportWebVitals(sendToAnalytics);

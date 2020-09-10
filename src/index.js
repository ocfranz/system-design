import React from "react";
import ReactDOM from "react-dom";
import { Helmet } from "react-helmet";

import App from "./App";
import * as serviceWorker from "./serviceWorker";
import GlobalStyles from "./styles/globalStyles";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <Helmet>
      <link
        href="https://fonts.googleapis.com/css2?family=Overpass:wght@400;700&display=swap"
        rel="stylesheet"
      />
    </Helmet>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

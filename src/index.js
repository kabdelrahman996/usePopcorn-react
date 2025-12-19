import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating maxRating={5} />
    <StarRating
      maxRating={5}
      color="red"
      size={24}
      messages={["Terrible", "Ok", "Good", "Very Good", "Exellent"]}
    /> */}
  </React.StrictMode>
);

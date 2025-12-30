import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const products = [
  { id: 1, name: "Laptop", price: 1000 },
  { id: 2, name: "Phone", price: 600 },
  { id: 3, name: "Headphones", price: 200 }
];

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App products={products} />
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Bubble from "./components/Bubble";
import Insertion from "./components/Insertion";
import Merge from "./components/Merge";
import Selection from "./components/Selection";
import Quick from "./components/Quick";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="bubble" element={<Bubble />} />
      <Route path="insertion" element={<Insertion />} />
      <Route path="selection" element={<Selection />} />
      <Route path="quick" element={<Quick />} />
      <Route path="merge" element={<Merge />} />
      <Route path="/" element={<App />} />
    </Routes>
  </BrowserRouter>
);


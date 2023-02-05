import React from "react";
import Screen from "./Screen/Screen";
import "./Main.css";
import Aside from "./Aside/Aside";
import { Route, Routes } from "react-router-dom";
import About from "./Screen/About/About";
import Work from "./Screen/Work/Work";
import Portfolio from "./Screen/Portfolio/Portfolio";

export default function Main() {
  return (
    <main>
        <Routes>
          <Route path="/" element={<Screen />}>
            <Route path="/" element={<About />} />
            <Route path="about" element={<About />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="work_history" element={<Work />} />
          </Route>
        </Routes>
      <Aside />
    </main>
  );
}

import React from "react";
import { Routes, Route } from "react-router-dom";
import CssApproach from "./CssApproach";
import Navigation from "./Navigation";
import SassAppoach from "./SassApproach";

const App = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path='/css-approach' element={<CssApproach />} />
        <Route path='/sass-approach' element={<SassAppoach />} />
      </Routes>
    </>
  );
};

export default App;

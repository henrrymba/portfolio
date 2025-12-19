import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Landing } from "./pages/Landing";
import Desktop from "./pages/Desktop";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/portfolio" element={<Desktop />} />
      </Routes>
      <SpeedInsights />
    </BrowserRouter>
  );
};
export default App;

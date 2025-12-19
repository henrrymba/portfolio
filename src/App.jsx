import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Landing } from "./pages/Landing";
import Desktop from "./pages/Desktop";
import { Analytics } from "@vercel/analytics/react";
import CookieConsent from "./components/CookieConsent";

const App = () => {
  return (
    <BrowserRouter>
      <CookieConsent />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/portfolio" element={<Desktop />} />
      </Routes>
      <Analytics />
    </BrowserRouter>
  );
};
export default App;

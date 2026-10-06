import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import ThankYou from "./components/ThankYou";

import "./App.css";

/* =========================================================
   MAIN WEBSITE
========================================================= */

function MainWebsite() {
  return (
    <>
      <Navbar />

      <main>
        <Home />
      </main>

      <Footer />

      {/* Floating Call Button */}
      <a
        href="tel:18001234042"
        className="floating-call"
        aria-label="Call AK Paul Electronics"
      >
        <span className="floating-pulse"></span>

        <span className="floating-icon">
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M6.62 10.79a15.46 15.46 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1V20a1 1 0 01-1 1C10.61 21 3 13.39 3 4a1 1 0 011-1h3.5a1 1 0 011-1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1.02l-2.2 2.2z" />
          </svg>
        </span>

        <span className="floating-text">
          <small>TOLL FREE</small>
          <strong>1800 1234 042</strong>
        </span>
      </a>
    </>
  );
}

/* =========================================================
   APP
========================================================= */

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainWebsite />} />
      <Route path="/thank-you" element={<ThankYou />} />
    </Routes>
  );
}

export default App;
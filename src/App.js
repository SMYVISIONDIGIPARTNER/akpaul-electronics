import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import "./App.css";

function App() {
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
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M6.62 10.79a15.46 15.46 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1.02l-2.2 2.2Z" />
          </svg>
        </span>

        <span className="floating-text">
          <small>Toll Free</small>
          <strong>1800 1234 042</strong>
        </span>
      </a>
    </>
  );
}

export default App;
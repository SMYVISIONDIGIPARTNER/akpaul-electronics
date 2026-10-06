import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import ThankYou from "./components/ThankYou";

import "./App.css";

function MainWebsite() {
  return (
    <>
      <Navbar />

      <main>
        <Home />
      </main>

      <Footer />

      <a
        href="tel:18001234042"
        className="floating-call"
        aria-label="Call AK Paul Electronics"
      >
        <span className="floating-call-icon">☎</span>

        <span className="floating-call-text">
          <small>TOLL FREE</small>
          <strong>1800 1234 042</strong>
        </span>
      </a>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<MainWebsite />}
        />

        <Route
          path="/thank-you"
          element={<ThankYou />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import ThankYou from "./components/ThankYou";

import "./App.css";

function App() {
  return (
    <>
      {/* =========================================
          GLOBAL / FLOATING CALL BUTTON CSS
      ========================================== */}

      <style>{`
        .floating-call-button {
          position: fixed;
          right: 25px;
          bottom: 25px;
          z-index: 9999;

          min-height: 62px;
          padding: 7px 20px 7px 7px;

          display: flex;
          align-items: center;
          gap: 11px;

          background: #d7192d;
          color: #ffffff;

          border: 2px solid #ffffff;
          border-radius: 50px;

          text-decoration: none;

          box-shadow:
            0 12px 35px rgba(0, 0, 0, 0.22),
            0 5px 15px rgba(215, 25, 45, 0.25);

          transition:
            transform 0.3s ease,
            background 0.3s ease,
            box-shadow 0.3s ease;
        }

        .floating-call-button:hover {
          transform: translateY(-4px);

          background: #b91426;
          color: #ffffff;

          box-shadow:
            0 17px 40px rgba(0, 0, 0, 0.26),
            0 7px 20px rgba(215, 25, 45, 0.3);
        }

        /* =========================================
           PHONE ICON
        ========================================== */

        .floating-call-icon {
          position: relative;
          z-index: 2;

          width: 46px;
          height: 46px;

          flex-shrink: 0;

          display: flex;
          align-items: center;
          justify-content: center;

          background: #ffffff;
          color: #d7192d;

          border-radius: 50%;
        }

        .floating-call-icon svg {
          width: 21px;
          height: 21px;

          fill: currentColor;

          animation: floatingPhoneShake 2.5s ease-in-out infinite;
        }

        /* =========================================
           TEXT
        ========================================== */

        .floating-call-text {
          position: relative;
          z-index: 2;

          display: flex;
          flex-direction: column;

          line-height: 1.1;
        }

        .floating-call-text small {
          margin-bottom: 4px;

          color: rgba(255, 255, 255, 0.82);

          font-size: 9px;
          font-weight: 700;

          letter-spacing: 1.2px;
          text-transform: uppercase;
        }

        .floating-call-text strong {
          color: #ffffff;

          font-size: 15px;
          font-weight: 800;

          letter-spacing: 0.2px;

          white-space: nowrap;
        }

        /* =========================================
           PULSE EFFECT
        ========================================== */

        .floating-call-pulse {
          position: absolute;

          left: 7px;
          top: 7px;

          width: 46px;
          height: 46px;

          border-radius: 50%;

          background: rgba(255, 255, 255, 0.35);

          pointer-events: none;

          animation: floatingCallPulse 2s infinite;
        }

        @keyframes floatingCallPulse {
          0% {
            transform: scale(1);
            opacity: 0.7;
          }

          70% {
            transform: scale(1.65);
            opacity: 0;
          }

          100% {
            transform: scale(1.65);
            opacity: 0;
          }
        }

        /* =========================================
           PHONE SHAKE ANIMATION
        ========================================== */

        @keyframes floatingPhoneShake {
          0%,
          75%,
          100% {
            transform: rotate(0deg);
          }

          80% {
            transform: rotate(-12deg);
          }

          85% {
            transform: rotate(12deg);
          }

          90% {
            transform: rotate(-10deg);
          }

          95% {
            transform: rotate(10deg);
          }
        }

        /* =========================================
           MOBILE
        ========================================== */

        @media (max-width: 600px) {
          .floating-call-button {
            right: 16px;
            bottom: 18px;

            width: 58px;
            height: 58px;
            min-height: 58px;

            padding: 5px;

            justify-content: center;

            border-radius: 50%;

            box-shadow:
              0 10px 30px rgba(0, 0, 0, 0.25),
              0 5px 15px rgba(215, 25, 45, 0.3);
          }

          .floating-call-icon {
            width: 44px;
            height: 44px;
          }

          .floating-call-icon svg {
            width: 21px;
            height: 21px;
          }

          /* Hide phone number on mobile */
          .floating-call-text {
            display: none;
          }

          .floating-call-pulse {
            left: 6px;
            top: 6px;

            width: 44px;
            height: 44px;
          }
        }

        /* =========================================
           VERY SMALL MOBILE
        ========================================== */

        @media (max-width: 380px) {
          .floating-call-button {
            right: 13px;
            bottom: 15px;

            width: 55px;
            height: 55px;
            min-height: 55px;
          }

          .floating-call-icon {
            width: 41px;
            height: 41px;
          }

          .floating-call-pulse {
            left: 6px;
            top: 6px;

            width: 41px;
            height: 41px;
          }
        }

        /* =========================================
           REDUCED MOTION
        ========================================== */

        @media (prefers-reduced-motion: reduce) {
          .floating-call-icon svg,
          .floating-call-pulse {
            animation: none;
          }
        }
      `}</style>

      {/* =========================================
          SCROLL TO TOP ON ROUTE CHANGE
      ========================================== */}

      <ScrollToTop />

      {/* =========================================
          NAVBAR
      ========================================== */}

      <Navbar />

      {/* =========================================
          ROUTES
      ========================================== */}

      <Routes>
        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/about"
          element={<About />}
        />

        <Route
          path="/services"
          element={<Services />}
        />

        <Route
          path="/contact"
          element={<Contact />}
        />

        {/* THANK YOU PAGE */}
        <Route
          path="/thank-you"
          element={<ThankYou />}
        />
      </Routes>

      {/* =========================================
          FOOTER
      ========================================== */}

      <Footer />

      {/* =========================================
          FLOATING TOLL-FREE CALL BUTTON
      ========================================== */}

      <a
        href="tel:18001234240"
        className="floating-call-button"
        aria-label="Call AK Paul Electronics toll free at 1800 1234 240"
        title="Toll Free: 1800 1234 240"
      >
        <span className="floating-call-pulse"></span>

        <span className="floating-call-icon">
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M6.62 10.79a15.46 15.46 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1.02l-2.2 2.2Z" />
          </svg>
        </span>

        <span className="floating-call-text">
          <small>Toll Free</small>
          <strong>1800 1234 240</strong>
        </span>
      </a>
    </>
  );
}

export default App;
import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <style>{`
        .ak-footer {
          background: #032e4f;
          color: #ffffff;
          position: relative;
          overflow: hidden;
        }

        .ak-footer::before {
          content: "";
          position: absolute;
          width: 250px;
          height: 500px;
          right: 7%;
          top: -100px;
          background: rgba(215, 25, 45, 0.07);
          transform: rotate(25deg);
          pointer-events: none;
        }

        .ak-footer-main {
          position: relative;
          z-index: 2;
          width: 90%;
          max-width: 1350px;
          margin: auto;
          padding: 75px 0 60px;

          display: grid;
          grid-template-columns: 1.25fr 1fr 1fr;
          gap: 70px;
        }

        /* =========================
           BRAND
        ========================== */

        .ak-footer-brand img {
          width: 220px;
          height: auto;
          display: block;

          margin-bottom: 25px;
          padding: 10px 14px;

          background: #ffffff;
          border-radius: 4px;
        }

        .ak-footer-brand h2 {
          margin: 0 0 18px;

          color: #ffffff;

          font-size: 24px;
          font-weight: 700;
        }

        .ak-footer-brand h2 span {
          color: #e52235;
        }

        .ak-footer-brand p {
          max-width: 430px;
          margin: 0;

          color: #b9cad7;

          font-size: 15px;
          line-height: 1.8;
        }

        .ak-footer-line {
          width: 48px;
          height: 3px;

          margin-top: 25px;

          background: #d7192d;
        }

        /* =========================
           COLUMN
        ========================== */

        .ak-footer-column h3 {
          position: relative;

          margin: 0 0 30px;
          padding-bottom: 15px;

          color: #ffffff;

          font-size: 19px;
          font-weight: 700;
        }

        .ak-footer-column h3::after {
          content: "";

          position: absolute;

          left: 0;
          bottom: 0;

          width: 38px;
          height: 2px;

          background: #d7192d;
        }

        /* =========================
           SERVICES
        ========================== */

        .ak-footer-services {
          margin: 0;
          padding: 0;

          list-style: none;

          display: flex;
          flex-direction: column;

          gap: 17px;
        }

        .ak-footer-services li {
          position: relative;

          padding-left: 20px;

          color: #b9cad7;

          font-size: 14px;
          line-height: 1.6;
        }

        .ak-footer-services li::before {
          content: "";

          position: absolute;

          left: 0;
          top: 8px;

          width: 7px;
          height: 7px;

          border: 1px solid #d7192d;

          transform: rotate(45deg);
        }

        .ak-footer-services a {
          color: #b9cad7;

          text-decoration: none;

          transition: color 0.3s ease;
        }

        .ak-footer-services a:hover {
          color: #ffffff;
        }

        /* =========================
           CONTACT
        ========================== */

        .ak-contact-list {
          display: flex;
          flex-direction: column;

          gap: 23px;
        }

        .ak-contact-item {
          display: flex;
          align-items: flex-start;

          gap: 15px;
        }

        .ak-contact-icon {
          width: 39px;
          height: 39px;

          flex-shrink: 0;

          display: flex;
          align-items: center;
          justify-content: center;

          color: #ffffff;

          background: rgba(255, 255, 255, 0.06);

          border: 1px solid rgba(255, 255, 255, 0.13);
          border-radius: 3px;
        }

        .ak-contact-icon svg {
          width: 18px;
          height: 18px;

          fill: #d7192d;
        }

        .ak-contact-info span {
          display: block;

          margin-bottom: 5px;

          color: #ffffff;

          font-size: 12px;
          font-weight: 700;

          letter-spacing: 1px;
          text-transform: uppercase;
        }

        .ak-contact-info p,
        .ak-contact-info a {
          margin: 0;

          color: #b9cad7;

          font-size: 14px;
          line-height: 1.6;

          text-decoration: none;

          transition: color 0.3s ease;
        }

        .ak-contact-info a:hover {
          color: #ffffff;
        }

        .ak-toll-free-number {
          font-size: 16px !important;
          font-weight: 700;
          letter-spacing: 0.3px;
        }

        /* =========================
           BOTTOM FOOTER
        ========================== */

        .ak-footer-bottom {
          position: relative;
          z-index: 2;

          background: #02253f;

          border-top: 1px solid rgba(255, 255, 255, 0.09);
        }

        .ak-footer-bottom-container {
          width: 90%;
          max-width: 1350px;

          min-height: 78px;

          margin: auto;

          display: flex;
          align-items: center;
          justify-content: space-between;

          gap: 30px;
        }

        .ak-footer-copyright {
          margin: 0;

          color: #91a9b9;

          font-size: 13px;
          line-height: 1.7;
        }

        .ak-footer-copyright a {
          color: #b9cad7;

          text-decoration: none;

          transition: color 0.3s ease;
        }

        .ak-footer-copyright a:hover {
          color: #ffffff;
        }

        /* =========================
           DEVELOPER
        ========================== */

        .ak-developer {
          margin: 0;

          color: #91a9b9;

          font-size: 13px;

          white-space: nowrap;
        }

        .ak-developer a {
          position: relative;

          margin-left: 5px;

          color: #ffffff;

          font-weight: 700;
          letter-spacing: 0.3px;

          text-decoration: none;

          transition: color 0.3s ease;
        }

        .ak-developer a::after {
          content: "";

          position: absolute;

          left: 0;
          bottom: -5px;

          width: 100%;
          height: 2px;

          background: #d7192d;

          transform: scaleX(0);
          transform-origin: left;

          transition: transform 0.3s ease;
        }

        .ak-developer a:hover {
          color: #e52235;
        }

        .ak-developer a:hover::after {
          transform: scaleX(1);
        }

        /* =========================
           TABLET
        ========================== */

        @media (max-width: 1000px) {
          .ak-footer-main {
            grid-template-columns: 1fr 1fr;

            gap: 50px;
          }

          .ak-footer-brand {
            grid-column: 1 / -1;
          }

          .ak-footer-brand p {
            max-width: 650px;
          }

          .ak-footer-bottom-container {
            flex-direction: column;
            align-items: flex-start;

            padding: 20px 0;

            gap: 10px;
          }

          .ak-developer {
            white-space: normal;
          }
        }

        /* =========================
           MOBILE
        ========================== */

        @media (max-width: 650px) {
          .ak-footer-main {
            width: 88%;

            padding: 55px 0 45px;

            grid-template-columns: 1fr;

            gap: 42px;
          }

          .ak-footer-brand {
            grid-column: auto;
          }

          .ak-footer-brand img {
            width: 190px;
          }

          .ak-footer-brand h2 {
            font-size: 22px;
          }

          .ak-footer-column h3 {
            margin-bottom: 22px;
          }

          .ak-contact-item {
            gap: 13px;
          }

          .ak-toll-free-number {
            font-size: 15px !important;
          }

          .ak-footer-bottom-container {
            width: 88%;

            padding: 22px 0;

            align-items: flex-start;
          }

          .ak-footer-copyright,
          .ak-developer {
            font-size: 12px;
          }
        }
      `}</style>

      <footer className="ak-footer">

        <div className="ak-footer-main">

          {/* =========================
              COMPANY
          ========================== */}

          <div className="ak-footer-brand">

            <Link
              to="/"
              aria-label="AK Paul Electronics Home"
            >
              <img
                src="/logo.png"
                alt="AK Paul Electronics appliance repair services in Kolkata"
              />
            </Link>

            <h2>
              AK Paul <span>Electronics</span>
            </h2>

            <p>
              AK Paul Electronics provides professional AC repair,
              refrigerator repair, washing machine repair and microwave
              repair services in Kolkata. We offer quality household
              appliance repair and service at affordable prices.
              Contact us today for a free inspection.
            </p>

            <div className="ak-footer-line"></div>

          </div>

          {/* =========================
              SERVICES
          ========================== */}

          <div className="ak-footer-column">

            <h3>Our Services</h3>

            <ul className="ak-footer-services">

              <li>
                <Link to="/services">
                  AC Repair and Services
                </Link>
              </li>

              <li>
                <Link to="/services">
                  Washing Machine Repair and Services
                </Link>
              </li>

              <li>
                <Link to="/services">
                  Refrigerator Repair and Services
                </Link>
              </li>

              <li>
                <Link to="/services">
                  Microwave Repair and Services
                </Link>
              </li>

            </ul>

          </div>

          {/* =========================
              CONTACT
          ========================== */}

          <div className="ak-footer-column">

            <h3>Contact Us</h3>

            <div className="ak-contact-list">

              {/* ADDRESS */}

              <div className="ak-contact-item">

                <div className="ak-contact-icon">

                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5Z" />
                  </svg>

                </div>

                <div className="ak-contact-info">

                  <span>Service Area</span>

                  <p>
                    Kolkata, West Bengal
                  </p>

                </div>

              </div>

              {/* TOLL FREE PHONE */}

              <div className="ak-contact-item">

                <div className="ak-contact-icon">

                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M6.62 10.79a15.46 15.46 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1.02l-2.2 2.2Z" />
                  </svg>

                </div>

                <div className="ak-contact-info">

                  <span>Toll Free</span>

                  <a
                    href="tel:18001234042"
                    className="ak-toll-free-number"
                    aria-label="Call AK Paul Electronics toll free at 1800 1234 042"
                  >
                    1800 1234 042
                  </a>

                </div>

              </div>

              {/* EMAIL */}

              <div className="ak-contact-item">

                <div className="ak-contact-icon">

                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5-8-5V6l8 5 8-5v2Z" />
                  </svg>

                </div>

                <div className="ak-contact-info">

                  <span>Email</span>

                  <a href="mailto:babupaul2121@gmail.com">
                    babupaul2121@gmail.com
                  </a>

                </div>

              </div>

              {/* WEBSITE */}

              <div className="ak-contact-item">

                <div className="ak-contact-icon">

                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm6.92 6h-3.05a15.7 15.7 0 0 0-1.38-3.56A8.04 8.04 0 0 1 18.92 8ZM12 4c.83 1.2 1.47 2.54 1.84 4h-3.68A13.58 13.58 0 0 1 12 4ZM4.26 14A7.8 7.8 0 0 1 4 12c0-.69.09-1.36.26-2h3.39a16.7 16.7 0 0 0 0 4H4.26Zm.82 2h3.05c.3 1.26.77 2.45 1.38 3.56A8.04 8.04 0 0 1 5.08 16Zm3.05-8H5.08a8.04 8.04 0 0 1 4.43-3.56A15.7 15.7 0 0 0 8.13 8ZM12 20a13.58 13.58 0 0 1-1.84-4h3.68A13.58 13.58 0 0 1 12 20Zm2.25-6h-4.5a14.54 14.54 0 0 1 0-4h4.5a14.54 14.54 0 0 1 0 4Zm.24 5.56A15.7 15.7 0 0 0 15.87 16h3.05a8.04 8.04 0 0 1-4.43 3.56ZM16.35 14a16.7 16.7 0 0 0 0-4h3.39c.17.64.26 1.31.26 2s-.09 1.36-.26 2h-3.39Z" />
                  </svg>

                </div>

                <div className="ak-contact-info">

                  <span>Website</span>

                  <a
                    href="https://customerserviceonline.co.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    customerserviceonline.co.in
                  </a>

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* =========================
            BOTTOM FOOTER
        ========================== */}

        <div className="ak-footer-bottom">

          <div className="ak-footer-bottom-container">

            <p className="ak-footer-copyright">

              © {new Date().getFullYear()} AK Paul Electronics.
              All rights reserved |

              {" "}

              <a
                href="https://customerserviceonline.co.in/"
                target="_blank"
                rel="noopener noreferrer"
              >
                customerserviceonline.co.in
              </a>

              {" "} | AC Repair | Refrigerator Repair |
              Washing Machine Repair | Microwave Repair in Kolkata

            </p>

            <p className="ak-developer">

              Developed by

              <a
                href="https://smyvisiontechnologies.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                SMYVISION TECHNOLOGIES
              </a>

            </p>

          </div>

        </div>

      </footer>
    </>
  );
}

export default Footer;
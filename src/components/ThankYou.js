import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

function ThankYou() {
  return (
    <>
      <Helmet>
        <title>Thank You | AK Paul Electronics</title>

        <meta
          name="description"
          content="Thank you for contacting AK Paul Electronics. Your service enquiry has been received successfully."
        />

        {/* Thank-you pages normally should not appear in Google */}
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <style>{`
        .thank-you-page {
          min-height: 75vh;
          padding: 80px 20px;

          display: flex;
          align-items: center;
          justify-content: center;

          background:
            radial-gradient(
              circle at 20% 20%,
              rgba(9, 94, 151, 0.18),
              transparent 35%
            ),
            linear-gradient(
              135deg,
              #022640 0%,
              #03385e 55%,
              #032e4f 100%
            );

          font-family: inherit;
        }

        .thank-you-card {
          position: relative;

          width: 100%;
          max-width: 650px;

          padding: 60px 45px;

          overflow: hidden;

          background: #ffffff;

          border-top: 5px solid #d7192d;
          border-radius: 8px;

          text-align: center;

          box-shadow:
            0 25px 70px rgba(0, 0, 0, 0.25);

          animation: thankYouEnter 0.7s ease forwards;
        }

        .thank-you-card::before {
          content: "";

          position: absolute;

          width: 170px;
          height: 170px;

          top: -100px;
          right: -90px;

          border-radius: 50%;

          background: rgba(215, 25, 45, 0.08);
        }

        .thank-you-check {
          position: relative;

          width: 90px;
          height: 90px;

          margin: 0 auto 28px;

          display: flex;
          align-items: center;
          justify-content: center;

          background: #d7192d;
          color: #ffffff;

          border-radius: 50%;

          box-shadow:
            0 10px 30px rgba(215, 25, 45, 0.25);

          animation: thankYouCheck 0.6s 0.3s ease both;
        }

        .thank-you-check svg {
          width: 42px;
          height: 42px;

          fill: currentColor;
        }

        .thank-you-label {
          margin: 0 0 12px;

          color: #d7192d;

          font-size: 11px;
          font-weight: 800;

          letter-spacing: 3px;
          text-transform: uppercase;
        }

        .thank-you-card h1 {
          margin: 0;

          color: #032e4f;

          font-size: clamp(34px, 6vw, 52px);
          font-weight: 800;

          line-height: 1.1;

          letter-spacing: -1.5px;
        }

        .thank-you-card h1 span {
          color: #d7192d;
        }

        .thank-you-message {
          max-width: 500px;

          margin: 20px auto 0;

          color: #687985;

          font-size: 15px;
          line-height: 1.8;
        }

        .thank-you-contact {
          margin: 28px 0;

          padding: 20px;

          background: #f5f7f9;

          border-left: 3px solid #d7192d;
        }

        .thank-you-contact small {
          display: block;

          margin-bottom: 7px;

          color: #7b8992;

          font-size: 10px;
          font-weight: 800;

          letter-spacing: 1.5px;
          text-transform: uppercase;
        }

        .thank-you-contact a {
          color: #032e4f;

          font-size: 20px;
          font-weight: 800;

          text-decoration: none;
        }

        .thank-you-buttons {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;

          gap: 12px;

          margin-top: 28px;
        }

        .thank-you-home,
        .thank-you-call {
          min-height: 54px;

          padding: 0 25px;

          display: inline-flex;
          align-items: center;
          justify-content: center;

          border-radius: 4px;

          font-size: 13px;
          font-weight: 800;

          text-decoration: none;

          transition:
            transform 0.3s ease,
            background 0.3s ease;
        }

        .thank-you-home {
          background: #032e4f;
          color: #ffffff;
        }

        .thank-you-home:hover {
          transform: translateY(-3px);
          background: #074d7e;
        }

        .thank-you-call {
          background: #d7192d;
          color: #ffffff;
        }

        .thank-you-call:hover {
          transform: translateY(-3px);
          background: #b91426;
        }

        @keyframes thankYouEnter {
          from {
            opacity: 0;
            transform: translateY(35px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes thankYouCheck {
          from {
            opacity: 0;
            transform: scale(0.5);
          }

          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @media (max-width: 600px) {
          .thank-you-page {
            min-height: 70vh;

            padding: 55px 16px;
          }

          .thank-you-card {
            padding: 45px 22px;
          }

          .thank-you-check {
            width: 75px;
            height: 75px;
          }

          .thank-you-check svg {
            width: 35px;
            height: 35px;
          }

          .thank-you-message {
            font-size: 14px;
          }

          .thank-you-buttons {
            flex-direction: column;
          }

          .thank-you-home,
          .thank-you-call {
            width: 100%;
          }
        }
      `}</style>

      <main className="thank-you-page">
        <div className="thank-you-card">
          <div className="thank-you-check">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
            </svg>
          </div>

          <p className="thank-you-label">
            Enquiry Submitted
          </p>

          <h1>
            Thank <span>You!</span>
          </h1>

          <p className="thank-you-message">
            Your service enquiry has been submitted successfully.
            Thank you for contacting AK Paul Electronics. Our team
            will get in touch with you regarding your appliance
            service request.
          </p>

          <div className="thank-you-contact">
            <small>Need immediate assistance?</small>

            <a href="tel:18001234240">
              Toll Free: 1800 1234 240
            </a>
          </div>

          <div className="thank-you-buttons">
            <Link
              to="/"
              className="thank-you-home"
            >
              Back to Home
            </Link>

            <a
              href="tel:18001234240"
              className="thank-you-call"
            >
              Call Now
            </a>
          </div>
        </div>
      </main>
    </>
  );
}

export default ThankYou;
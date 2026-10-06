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
          content="Thank you for contacting AK Paul Electronics."
        />

        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <section className="thankyou-page">
        <div className="thankyou-card">
          <div className="thankyou-icon">✓</div>

          <span className="thankyou-label">ENQUIRY SUBMITTED</span>

          <h1>Thank You!</h1>

          <p>
            Thank you for submitting your enquiry.
            <br />
            Our team will get back to you soon.
          </p>

          <div className="thankyou-line"></div>

          <p className="thankyou-help">
            Need immediate assistance?
          </p>

          <a
            href="tel:18001234042"
            className="thankyou-call"
          >
            ☎ 1800 1234 042
          </a>

          <Link to="/" className="thankyou-home">
            Back to Home
          </Link>
        </div>
      </section>
    </>
  );
}

export default ThankYou;
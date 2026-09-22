import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  /* =========================================================
     SCROLL ANIMATIONS
  ========================================================= */

  useEffect(() => {
    const elements = document.querySelectorAll(".contact-reveal");

    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => {
        element.classList.add("contact-show");
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("contact-show");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  /* =========================================================
     FORM CHANGE
  ========================================================= */

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  return (
    <>
      <Helmet>
        <title>
          Contact AK Paul Electronics | Appliance Repair in Kolkata
        </title>
        <meta
          name="description"
          content="Contact AK Paul Electronics for AC, refrigerator, washing machine and microwave repair services in Kolkata. Call toll free 1800 1234 042 or email babupaul2121@gmail.com."
        />
        <meta
          name="keywords"
          content="appliance repair Kolkata, AC repair Kolkata, refrigerator repair Kolkata, washing machine repair Kolkata, microwave repair Kolkata, AK Paul Electronics contact"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://customerserviceonline.co.in/contact"
        />

        <meta name="geo.region" content="IN-WB" />
        <meta name="geo.placename" content="Kolkata" />

        <meta
          property="og:title"
          content="Contact AK Paul Electronics | Appliance Repair in Kolkata"
        />
        <meta
          property="og:description"
          content="Contact AK Paul Electronics for appliance repair services in Kolkata. Toll Free: 1800 1234 042."
        />
        <meta
          property="og:url"
          content="https://customerserviceonline.co.in/contact"
        />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_IN" />
        <meta
          property="og:image"
          content="https://customerserviceonline.co.in/images/hero-appliance-repair.jpg"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Contact AK Paul Electronics | Appliance Repair in Kolkata"
        />
        <meta
          name="twitter:description"
          content="AC, refrigerator, washing machine and microwave repair services in Kolkata. Toll Free: 1800 1234 042."
        />
        <meta
          name="twitter:image"
          content="https://customerserviceonline.co.in/images/hero-appliance-repair.jpg"
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "AK Paul Electronics",
            url: "https://customerserviceonline.co.in/",
            telephone: "18001234042",
            email: "babupaul2121@gmail.com",
            description:
              "AK Paul Electronics provides AC, refrigerator, washing machine and microwave repair services in Kolkata.",
            areaServed: {
              "@type": "City",
              name: "Kolkata",
            },
            address: {
              "@type": "PostalAddress",
              addressLocality: "Kolkata",
              addressRegion: "West Bengal",
              addressCountry: "IN",
            },
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "18001234042",
              contactType: "customer service",
              areaServed: "IN",
              availableLanguage: ["English"],
            },
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://customerserviceonline.co.in/",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Contact",
                item: "https://customerserviceonline.co.in/contact",
              },
            ],
          })}
        </script>
      </Helmet>

      <style>{`
        /* =====================================================
           GLOBAL
        ===================================================== */

        .ak-contact-page {
          width: 100%;
          overflow-x: hidden;
          background: #ffffff;
          color: #14222e;
        }

        .ak-contact-page *,
        .ak-contact-page *::before,
        .ak-contact-page *::after {
          box-sizing: border-box;
        }

        .contact-container {
          width: min(90%, 1360px);
          margin: 0 auto;
        }

        .contact-tag {
          margin: 0 0 16px;

          display: flex;
          align-items: center;
          gap: 12px;

          color: #d7192d;

          font-size: 12px;
          font-weight: 800;

          letter-spacing: 3.5px;
          text-transform: uppercase;
        }

        .contact-tag::before {
          content: "";

          width: 35px;
          height: 2px;

          flex-shrink: 0;

          background: #d7192d;
        }

        .contact-title {
          margin: 0;

          color: #032e4f;

          font-size: clamp(35px, 4vw, 56px);
          font-weight: 800;

          line-height: 1.1;

          letter-spacing: -1.7px;
        }

        .contact-title span {
          color: #d7192d;
        }

        .contact-description {
          max-width: 670px;

          margin: 20px 0 0;

          color: #697883;

          font-size: 16px;
          line-height: 1.85;
        }

        /* =====================================================
           ANIMATIONS
        ===================================================== */

        .contact-reveal {
          opacity: 0;

          transform: translateY(45px);

          transition:
            opacity 0.8s cubic-bezier(.2,.8,.2,1),
            transform 0.8s cubic-bezier(.2,.8,.2,1);
        }

        .contact-reveal.contact-show {
          opacity: 1;
          transform: translateY(0);
        }

        .contact-delay-1 {
          transition-delay: 0.1s;
        }

        .contact-delay-2 {
          transition-delay: 0.2s;
        }

        .contact-delay-3 {
          transition-delay: 0.3s;
        }

        @keyframes contactGridMove {
          from {
            background-position: 0 0;
          }

          to {
            background-position: 70px 70px;
          }
        }

        @keyframes contactPhonePulse {
          0% {
            box-shadow:
              0 0 0 0 rgba(215,25,45,0.4);
          }

          70% {
            box-shadow:
              0 0 0 14px rgba(215,25,45,0);
          }

          100% {
            box-shadow:
              0 0 0 0 rgba(215,25,45,0);
          }
        }

        /* =====================================================
           HERO
        ===================================================== */

        .contact-hero {
          position: relative;

          min-height: 500px;

          display: flex;
          align-items: center;

          overflow: hidden;

          background:
            radial-gradient(
              circle at 15% 30%,
              rgba(9,94,151,0.42),
              transparent 40%
            ),
            linear-gradient(
              135deg,
              #022640 0%,
              #03385e 55%,
              #032e4f 100%
            );
        }

        .contact-hero::before {
          content: "";

          position: absolute;
          inset: 0;

          background-image:
            linear-gradient(
              rgba(255,255,255,0.025) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(255,255,255,0.025) 1px,
              transparent 1px
            );

          background-size: 70px 70px;

          animation:
            contactGridMove 20s linear infinite;
        }

        .contact-hero::after {
          content: "";

          position: absolute;

          top: -180px;
          right: 14%;

          width: 105px;
          height: 850px;

          transform: rotate(25deg);

          background: #d7192d;

          opacity: 0.8;
        }

        .contact-hero-content {
          position: relative;
          z-index: 3;

          max-width: 850px;

          padding: 90px 0;
        }

        .contact-hero-label {
          margin: 0 0 18px;

          color: #ef3346;

          font-size: 12px;
          font-weight: 800;

          letter-spacing: 5px;
          text-transform: uppercase;
        }

        .contact-hero h1 {
          margin: 0;

          color: #ffffff;

          font-size: clamp(48px, 6vw, 78px);
          font-weight: 800;

          line-height: 1.03;

          letter-spacing: -2.5px;
        }

        .contact-hero h1 span {
          color: #ef2237;
        }

        .contact-hero-text {
          max-width: 720px;

          margin: 25px 0 0;

          color: #d0dfe8;

          font-size: 17px;
          line-height: 1.8;
        }

        .contact-breadcrumb {
          margin-top: 30px;

          display: flex;
          align-items: center;
          flex-wrap: wrap;

          gap: 10px;

          color: #b8cad7;

          font-size: 13px;
        }

        .contact-breadcrumb a {
          color: #ffffff;
          text-decoration: none;
        }

        .contact-breadcrumb span {
          color: #d7192d;
        }

        /* =====================================================
           CONTACT AREA
        ===================================================== */

        .contact-main {
          padding: 110px 0;

          background: #ffffff;
        }

        .contact-main-grid {
          display: grid;

          grid-template-columns:
            minmax(0, 0.85fr)
            minmax(0, 1.15fr);

          gap: clamp(55px, 7vw, 100px);

          align-items: start;
        }

        /* =====================================================
           LEFT CONTENT
        ===================================================== */

        .contact-left {
          min-width: 0;
        }

        .contact-info-list {
          margin-top: 40px;

          display: flex;
          flex-direction: column;

          gap: 15px;
        }

        .contact-info-card {
          width: 100%;

          padding: 22px;

          display: flex;
          align-items: center;

          gap: 18px;

          background: #f5f7f9;

          border-left: 3px solid transparent;

          text-decoration: none;

          transition:
            transform 0.3s ease,
            border-color 0.3s ease,
            background 0.3s ease,
            box-shadow 0.3s ease;
        }

        .contact-info-card:hover {
          transform: translateX(5px);

          background: #ffffff;

          border-color: #d7192d;

          box-shadow:
            0 12px 35px rgba(3,46,79,0.08);
        }

        .contact-info-icon {
          width: 52px;
          height: 52px;

          flex-shrink: 0;

          display: flex;
          align-items: center;
          justify-content: center;

          background: #032e4f;
          color: #ffffff;
        }

        .contact-info-card:first-child
        .contact-info-icon {
          background: #d7192d;

          animation:
            contactPhonePulse 2s infinite;
        }

        .contact-info-icon svg {
          width: 21px;
          height: 21px;

          fill: currentColor;
        }

        .contact-info-content {
          min-width: 0;
        }

        .contact-info-content small {
          display: block;

          margin-bottom: 5px;

          color: #7a8992;

          font-size: 10px;
          font-weight: 800;

          letter-spacing: 1.5px;
          text-transform: uppercase;
        }

        .contact-info-content strong,
        .contact-info-content span {
          display: block;

          overflow-wrap: anywhere;

          color: #032e4f;

          font-size: 16px;
          font-weight: 800;

          line-height: 1.5;
        }

        /* =====================================================
           FREE INSPECTION BOX
        ===================================================== */

        .contact-inspection {
          position: relative;

          margin-top: 28px;

          padding: 30px;

          overflow: hidden;

          background: #032e4f;
        }

        .contact-inspection::after {
          content: "";

          position: absolute;

          top: -60px;
          right: -40px;

          width: 100px;
          height: 250px;

          transform: rotate(30deg);

          background:
            rgba(215,25,45,0.7);
        }

        .contact-inspection-content {
          position: relative;
          z-index: 2;
        }

        .contact-inspection small {
          color: #ef3346;

          font-size: 10px;
          font-weight: 800;

          letter-spacing: 2.5px;
          text-transform: uppercase;
        }

        .contact-inspection h3 {
          max-width: 350px;

          margin: 9px 0 10px;

          color: #ffffff;

          font-size: 24px;
          line-height: 1.3;
        }

        .contact-inspection p {
          max-width: 420px;

          margin: 0;

          color: #b8c9d5;

          font-size: 13px;
          line-height: 1.8;
        }

        .contact-inspection a {
          min-height: 50px;

          margin-top: 20px;
          padding: 0 22px;

          display: inline-flex;
          align-items: center;
          justify-content: center;

          background: #d7192d;
          color: #ffffff;

          border-radius: 4px;

          text-decoration: none;

          font-size: 13px;
          font-weight: 800;

          transition:
            transform 0.3s ease,
            background 0.3s ease;
        }

        .contact-inspection a:hover {
          transform: translateY(-3px);

          background: #bd1527;
        }

        /* =====================================================
           FORM
        ===================================================== */

        .contact-form-wrapper {
          min-width: 0;

          padding: clamp(35px, 5vw, 55px);

          background: #f5f7f9;

          border-top: 4px solid #d7192d;

          box-shadow:
            0 18px 55px rgba(3,46,79,0.09);
        }

        .contact-form-heading {
          margin-bottom: 32px;
        }

        .contact-form-heading small {
          display: block;

          margin-bottom: 9px;

          color: #d7192d;

          font-size: 10px;
          font-weight: 800;

          letter-spacing: 2.5px;
          text-transform: uppercase;
        }

        .contact-form-heading h2 {
          margin: 0;

          color: #032e4f;

          font-size: clamp(28px, 3vw, 38px);

          line-height: 1.2;
        }

        .contact-form-heading p {
          margin: 13px 0 0;

          color: #72818b;

          font-size: 14px;
          line-height: 1.75;
        }

        .contact-form {
          width: 100%;
        }

        .contact-form-row {
          display: grid;

          grid-template-columns:
            repeat(2, minmax(0, 1fr));

          gap: 17px;
        }

        .contact-form-group {
          min-width: 0;

          margin-bottom: 18px;
        }

        .contact-form-group label {
          display: block;

          margin-bottom: 8px;

          color: #032e4f;

          font-size: 12px;
          font-weight: 800;
        }

        .contact-required {
          color: #d7192d;
        }

        .contact-form-group input,
        .contact-form-group select,
        .contact-form-group textarea {
          width: 100%;

          border: 1px solid #dce3e8;
          border-radius: 4px;

          outline: none;

          background: #ffffff;
          color: #172936;

          font-family: inherit;
          font-size: 14px;

          transition:
            border-color 0.25s ease,
            box-shadow 0.25s ease;
        }

        .contact-form-group input,
        .contact-form-group select {
          height: 56px;

          padding: 0 16px;
        }

        .contact-form-group textarea {
          min-height: 145px;

          padding: 16px;

          resize: vertical;
        }

        .contact-form-group input:focus,
        .contact-form-group select:focus,
        .contact-form-group textarea:focus {
          border-color: #d7192d;

          box-shadow:
            0 0 0 3px rgba(215,25,45,0.08);
        }

        .contact-form-group input::placeholder,
        .contact-form-group textarea::placeholder {
          color: #9aa7af;
        }

        .contact-submit {
          width: 100%;
          min-height: 58px;

          border: none;
          border-radius: 5px;

          cursor: pointer;

          display: flex;
          align-items: center;
          justify-content: center;

          gap: 10px;

          background: #d7192d;
          color: #ffffff;

          font-family: inherit;

          font-size: 14px;
          font-weight: 800;

          box-shadow:
            0 12px 30px rgba(215,25,45,0.2);

          transition:
            transform 0.3s ease,
            background 0.3s ease,
            box-shadow 0.3s ease;
        }

        .contact-submit:hover {
          transform: translateY(-3px);

          background: #b91426;

          box-shadow:
            0 17px 35px rgba(215,25,45,0.27);
        }

        .contact-submit svg {
          width: 18px;
          height: 18px;

          fill: currentColor;
        }

        .contact-form-note {
          margin: 15px 0 0;

          color: #829099;

          font-size: 11px;
          line-height: 1.6;

          text-align: center;
        }

        /* =====================================================
           SERVICE QUICK CARDS
        ===================================================== */

        .contact-services {
          padding: 105px 0;

          background: #f5f7f9;
        }

        .contact-services-heading {
          max-width: 720px;

          margin: 0 auto 50px;

          text-align: center;
        }

        .contact-services-heading
        .contact-tag {
          justify-content: center;
        }

        .contact-services-heading
        .contact-tag::before {
          display: none;
        }

        .contact-services-heading
        .contact-description {
          margin-left: auto;
          margin-right: auto;
        }

        .contact-service-grid {
          display: grid;

          grid-template-columns:
            repeat(4, minmax(0, 1fr));

          gap: 20px;
        }

        .contact-service-card {
          position: relative;

          min-width: 0;

          padding: 32px 25px;

          overflow: hidden;

          background: #ffffff;

          border-bottom: 3px solid transparent;

          text-decoration: none;

          transition:
            transform 0.35s ease,
            border-color 0.35s ease,
            box-shadow 0.35s ease;
        }

        .contact-service-card:hover {
          transform: translateY(-7px);

          border-color: #d7192d;

          box-shadow:
            0 18px 40px rgba(3,46,79,0.1);
        }

        .contact-service-number {
          display: block;

          margin-bottom: 22px;

          color: #d7192d;

          font-size: 12px;
          font-weight: 800;
        }

        .contact-service-card h3 {
          margin: 0 0 10px;

          color: #032e4f;

          font-size: 18px;
        }

        .contact-service-card p {
          margin: 0;

          color: #71808a;

          font-size: 13px;
          line-height: 1.75;
        }

        .contact-service-arrow {
          margin-top: 20px;

          display: inline-flex;

          color: #d7192d;

          font-size: 20px;

          transition: transform 0.3s ease;
        }

        .contact-service-card:hover
        .contact-service-arrow {
          transform: translateX(6px);
        }

        /* =====================================================
           BOTTOM CTA
        ===================================================== */

        .contact-bottom-cta {
          position: relative;

          padding: 80px 0;

          overflow: hidden;

          background: #d7192d;
        }

        .contact-bottom-cta::before {
          content: "";

          position: absolute;

          top: -200px;
          right: 13%;

          width: 260px;
          height: 650px;

          transform: rotate(30deg);

          background:
            rgba(255,255,255,0.07);
        }

        .contact-bottom-inner {
          position: relative;
          z-index: 2;

          display: flex;
          align-items: center;
          justify-content: space-between;

          gap: 40px;
        }

        .contact-bottom-text {
          max-width: 760px;
        }

        .contact-bottom-text span {
          color: #ffffff;

          font-size: 11px;
          font-weight: 800;

          letter-spacing: 4px;
        }

        .contact-bottom-text h2 {
          margin: 10px 0 0;

          color: #ffffff;

          font-size: clamp(30px, 4vw, 47px);

          line-height: 1.15;
        }

        .contact-bottom-call {
          min-height: 58px;

          padding: 0 28px;

          flex-shrink: 0;

          display: inline-flex;
          align-items: center;
          justify-content: center;

          background: #ffffff;
          color: #032e4f;

          border: 1px solid #ffffff;
          border-radius: 5px;

          text-decoration: none;
          text-align: center;

          font-size: 14px;
          font-weight: 800;

          transition:
            transform 0.3s ease,
            background 0.3s ease,
            color 0.3s ease;
        }

        .contact-bottom-call:hover {
          transform: translateY(-3px);

          background: #032e4f;
          color: #ffffff;

          border-color: #032e4f;
        }

        /* =====================================================
           TABLET
        ===================================================== */

        @media (max-width: 1000px) {
          .contact-main-grid {
            grid-template-columns: 1fr;

            gap: 55px;
          }

          .contact-left {
            max-width: 750px;
          }

          .contact-service-grid {
            grid-template-columns:
              repeat(2, minmax(0, 1fr));
          }

          .contact-bottom-inner {
            flex-direction: column;
            align-items: flex-start;
          }
        }

        /* =====================================================
           MOBILE
        ===================================================== */

        @media (max-width: 600px) {
          .contact-container {
            width: 90%;
          }

          .contact-tag {
            font-size: 10px;

            letter-spacing: 2.5px;
          }

          .contact-title {
            font-size: 34px;

            letter-spacing: -1px;
          }

          .contact-description {
            font-size: 14px;
          }

          /* HERO */

          .contact-hero {
            min-height: 400px;
          }

          .contact-hero::after {
            right: -50px;

            opacity: 0.3;
          }

          .contact-hero-content {
            padding: 65px 0;
          }

          .contact-hero-label {
            font-size: 10px;

            letter-spacing: 3px;
          }

          .contact-hero h1 {
            font-size: clamp(40px, 12vw, 52px);

            letter-spacing: -1.5px;
          }

          .contact-hero-text {
            font-size: 15px;
          }

          /* MAIN */

          .contact-main {
            padding: 70px 0;
          }

          .contact-info-card {
            padding: 18px;

            align-items: flex-start;
          }

          .contact-info-icon {
            width: 45px;
            height: 45px;
          }

          .contact-info-content strong,
          .contact-info-content span {
            font-size: 14px;
          }

          .contact-inspection {
            padding: 25px 20px;
          }

          .contact-inspection a {
            width: 100%;
          }

          /* FORM */

          .contact-form-wrapper {
            padding: 30px 20px;
          }

          .contact-form-row {
            grid-template-columns: 1fr;

            gap: 0;
          }

          .contact-form-group input,
          .contact-form-group select {
            height: 54px;
          }

          .contact-submit {
            min-height: 56px;

            padding: 14px 18px;
          }

          /* SERVICES */

          .contact-services {
            padding: 70px 0;
          }

          .contact-service-grid {
            grid-template-columns: 1fr;
          }

          /* CTA */

          .contact-bottom-cta {
            padding: 65px 0;
          }

          .contact-bottom-call {
            width: 100%;

            min-height: 55px;

            padding: 14px 18px;
          }
        }

        @media (max-width: 380px) {
          .contact-hero h1 {
            font-size: 37px;
          }

          .contact-form-wrapper {
            padding: 25px 16px;
          }
        }

        /* =====================================================
           REDUCED MOTION
        ===================================================== */

        @media (prefers-reduced-motion: reduce) {
          .contact-reveal {
            opacity: 1;

            transform: none;

            transition: none;
          }

          .contact-hero::before,
          .contact-info-card:first-child
          .contact-info-icon {
            animation: none;
          }
        }
      `}</style>

      <main className="ak-contact-page">

        {/* =================================================
            HERO
        ================================================= */}

        <section className="contact-hero">
          <div className="contact-container">

            <div className="contact-hero-content">

              <p className="contact-hero-label">
                AK PAUL ELECTRONICS
              </p>

              <h1>
                Contact <span>Us.</span>
              </h1>

              <p className="contact-hero-text">
                Need help with your AC, refrigerator, washing
                machine or microwave? Contact AK Paul Electronics
                for professional appliance repair and service in
                Kolkata.
              </p>

              <div className="contact-breadcrumb">
                <Link to="/">Home</Link>
                <span>→</span>
                <strong>Contact Us</strong>
              </div>

            </div>

          </div>
        </section>

        {/* =================================================
            CONTACT + FORM
        ================================================= */}

        <section className="contact-main">

          <div className="contact-container contact-main-grid">

            {/* LEFT */}

            <div className="contact-left">

              <div className="contact-reveal">

                <p className="contact-tag">
                  Get In Touch
                </p>

                <h2 className="contact-title">
                  Need Appliance
                  <span> Repair?</span>
                </h2>

                <p className="contact-description">
                  Contact AK Paul Electronics for AC, refrigerator,
                  washing machine and microwave repair and service
                  in Kolkata. Tell us about the problem and our
                  team will assist you.
                </p>

              </div>

              <div className="contact-info-list">

                {/* PHONE */}

                <a
                  href="tel:18001234042"
                  className="contact-info-card contact-reveal"
                >

                  <div className="contact-info-icon">

                    <svg viewBox="0 0 24 24">
                      <path d="M6.62 10.79a15.46 15.46 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1.02l-2.2 2.2Z" />
                    </svg>

                  </div>

                  <div className="contact-info-content">

                    <small>
                      Call Us
                    </small>

                    <strong>
                      1800 1234 042
                    </strong>

                  </div>

                </a>

                {/* EMAIL */}

                <a
                  href="mailto:babupaul2121@gmail.com"
                  className="contact-info-card contact-reveal contact-delay-1"
                >

                  <div className="contact-info-icon">

                    <svg viewBox="0 0 24 24">
                      <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5-8-5V6l8 5 8-5v2Z" />
                    </svg>

                  </div>

                  <div className="contact-info-content">

                    <small>
                      Email
                    </small>

                    <span>
                      babupaul2121@gmail.com
                    </span>

                  </div>

                </a>

                {/* LOCATION */}

                <div
                  className="contact-info-card contact-reveal contact-delay-2"
                >

                  <div className="contact-info-icon">

                    <svg viewBox="0 0 24 24">
                      <path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5Z" />
                    </svg>

                  </div>

                  <div className="contact-info-content">

                    <small>
                      Service Location
                    </small>

                    <strong>
                      Kolkata
                    </strong>

                  </div>

                </div>

              </div>

              {/* INSPECTION */}

              <div className="contact-inspection contact-reveal">

                <div className="contact-inspection-content">

                  <small>
                    AK PAUL ELECTRONICS
                  </small>

                  <h3>
                    Contact Us Today for Free Inspection
                  </h3>

                  <p>
                    Get your household appliance inspected by our
                    experienced technicians and receive an estimated
                    repair cost.
                  </p>

                  <a href="tel:18001234042">
                    Call 1800 1234 042 →
                  </a>

                </div>

              </div>

            </div>

            {/* =================================================
                FORM

                THIS FORM SENDS TO:
                babupaul2121@gmail.com
            ================================================= */}

            <div className="contact-form-wrapper contact-reveal contact-delay-1">

              <div className="contact-form-heading">

                <small>
                  Service Enquiry
                </small>

                <h2>
                  Request a Service
                </h2>

                <p>
                  Fill in your details and tell us which appliance
                  needs repair. Your enquiry will be sent directly
                  to our service team.
                </p>

              </div>

              <form
                className="contact-form"
                action="https://formsubmit.co/babupaul2121@gmail.com"
                method="POST"
              >

                {/* FORM SUBMIT SETTINGS */}

                <input
                  type="hidden"
                  name="_subject"
                  value="New Enquiry from customerserviceonline.co.in"
                />

                <input
                  type="hidden"
                  name="_template"
                  value="table"
                />

                <input
                  type="hidden"
                  name="_captcha"
                  value="false"
                />

                <input
                  type="hidden"
                  name="_next"
                  value="https://customerserviceonline.co.in/contact"
                />

                <input
                  type="hidden"
                  name="_autoresponse"
                  value="Thank you for contacting AK Paul Electronics. We have received your service enquiry and our team will contact you soon."
                />

                {/* NAME + PHONE */}

                <div className="contact-form-row">

                  <div className="contact-form-group">

                    <label htmlFor="contact-name">
                      Your Name
                      <span className="contact-required">
                        {" "}*
                      </span>
                    </label>

                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      required
                    />

                  </div>

                  <div className="contact-form-group">

                    <label htmlFor="contact-phone">
                      Phone Number
                      <span className="contact-required">
                        {" "}*
                      </span>
                    </label>

                    <input
                      id="contact-phone"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter phone number"
                      pattern="[0-9+ ]{10,15}"
                      required
                    />

                  </div>

                </div>

                {/* EMAIL */}

                <div className="contact-form-group">

                  <label htmlFor="contact-email">
                    Email Address
                  </label>

                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email address"
                  />

                </div>

                {/* SERVICE */}

                <div className="contact-form-group">

                  <label htmlFor="contact-service">
                    Select Service
                    <span className="contact-required">
                      {" "}*
                    </span>
                  </label>

                  <select
                    id="contact-service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                  >

                    <option value="">
                      Select appliance/service
                    </option>

                    <option value="AC Repair and Service">
                      AC Repair & Service
                    </option>

                    <option value="Refrigerator Repair and Service">
                      Refrigerator Repair & Service
                    </option>

                    <option value="Washing Machine Repair and Service">
                      Washing Machine Repair & Service
                    </option>

                    <option value="Microwave Repair and Service">
                      Microwave Repair & Service
                    </option>

                    <option value="Other Appliance Service">
                      Other
                    </option>

                  </select>

                </div>

                {/* MESSAGE */}

                <div className="contact-form-group">

                  <label htmlFor="contact-message">
                    Describe the Problem
                    <span className="contact-required">
                      {" "}*
                    </span>
                  </label>

                  <textarea
                    id="contact-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Example: My AC is running but not cooling properly..."
                    required
                  ></textarea>

                </div>

                {/* SUBMIT */}

                <button
                  type="submit"
                  className="contact-submit"
                >

                  Send Service Enquiry

                  <svg viewBox="0 0 24 24">
                    <path d="M2.01 21 23 12 2.01 3 2 10l15 2-15 2 .01 7Z" />
                  </svg>

                </button>

                <p className="contact-form-note">
                  By submitting this form, your service enquiry
                  will be sent to AK Paul Electronics.
                </p>

              </form>

            </div>

          </div>

        </section>

        {/* =================================================
            QUICK SERVICES
        ================================================= */}

        <section className="contact-services">

          <div className="contact-container">

            <div className="contact-services-heading contact-reveal">

              <p className="contact-tag">
                Our Services
              </p>

              <h2 className="contact-title">
                What Can We
                <span> Help With?</span>
              </h2>

              <p className="contact-description">
                Contact us for professional repair and service
                for common household appliances.
              </p>

            </div>

            <div className="contact-service-grid">

              <Link
                to="/services"
                className="contact-service-card contact-reveal"
              >

                <span className="contact-service-number">
                  01
                </span>

                <h3>
                  AC Repair & Services
                </h3>

                <p>
                  Professional AC inspection, servicing and
                  repair in Kolkata.
                </p>

                <span className="contact-service-arrow">
                  →
                </span>

              </Link>

              <Link
                to="/services"
                className="contact-service-card contact-reveal contact-delay-1"
              >

                <span className="contact-service-number">
                  02
                </span>

                <h3>
                  Refrigerator Repair
                </h3>

                <p>
                  Inspection and repair for common refrigerator
                  and cooling problems.
                </p>

                <span className="contact-service-arrow">
                  →
                </span>

              </Link>

              <Link
                to="/services"
                className="contact-service-card contact-reveal contact-delay-2"
              >

                <span className="contact-service-number">
                  03
                </span>

                <h3>
                  Washing Machine Repair
                </h3>

                <p>
                  Repair and service for different types and
                  brands of washing machines.
                </p>

                <span className="contact-service-arrow">
                  →
                </span>

              </Link>

              <Link
                to="/services"
                className="contact-service-card contact-reveal contact-delay-3"
              >

                <span className="contact-service-number">
                  04
                </span>

                <h3>
                  Microwave Repair
                </h3>

                <p>
                  Professional inspection and servicing for
                  common microwave problems.
                </p>

                <span className="contact-service-arrow">
                  →
                </span>

              </Link>

            </div>

          </div>

        </section>

        {/* =================================================
            FINAL CTA
        ================================================= */}

        <section className="contact-bottom-cta">

          <div className="contact-container contact-bottom-inner">

            <div className="contact-bottom-text contact-reveal">

              <span>
                FREE INSPECTION
              </span>

              <h2>
                Get your household appliance checked today.
              </h2>

            </div>

            <a
              href="tel:18001234042"
              className="contact-bottom-call contact-reveal contact-delay-1"
            >
              Call 1800 1234 042
            </a>

          </div>

        </section>

      </main>
    </>
  );
}

export default Contact;
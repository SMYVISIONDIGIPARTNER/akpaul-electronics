import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

function About() {
  /* =========================================================
     LOCAL IMAGE -> UNSPLASH FALLBACK
  ========================================================= */

  const handleImageError = (event, fallbackImage) => {
    const image = event.currentTarget;

    if (image.dataset.fallbackApplied === "true") {
      return;
    }

    image.dataset.fallbackApplied = "true";
    image.src = fallbackImage;
  };

  /* =========================================================
     SCROLL ANIMATION
  ========================================================= */

  useEffect(() => {
    const elements = document.querySelectorAll(".about-reveal");

    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => {
        element.classList.add("about-show");
      });

      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("about-show");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
      }
    );

    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const expertise = [
    {
      number: "01",
      title: "AC Repair",
      text: "Professional inspection, repair and servicing for different types and brands of air conditioners.",
    },
    {
      number: "02",
      title: "Refrigerator Repair",
      text: "Reliable refrigerator inspection and repair for common cooling, electrical and performance problems.",
    },
    {
      number: "03",
      title: "Washing Machine Repair",
      text: "Repair and servicing for different types and brands of washing machines at affordable prices.",
    },
    {
      number: "04",
      title: "Microwave Repair",
      text: "Professional assistance for common microwave problems, inspection, repair and servicing.",
    },
  ];

  const values = [
    {
      number: "01",
      title: "Experienced Technicians",
      text: "Our skilled technicians bring years of practical experience in household appliance repair and servicing.",
    },
    {
      number: "02",
      title: "Affordable Service",
      text: "We focus on providing practical repair solutions at affordable prices with an estimated cost before the work.",
    },
    {
      number: "03",
      title: "Quality Spare Parts",
      text: "Quality spare parts are used whenever replacement is required, with billing provided for the service.",
    },
    {
      number: "04",
      title: "Customer Focused",
      text: "We aim to provide clear communication, professional inspection and dependable service for every customer.",
    },
  ];

  const process = [
    {
      number: "01",
      title: "Call Us",
      text: "Tell us about the appliance and the problem you are facing.",
    },
    {
      number: "02",
      title: "Inspection",
      text: "Our technician inspects the appliance and identifies the issue.",
    },
    {
      number: "03",
      title: "Estimation",
      text: "You receive an estimated repair cost before proceeding with the work.",
    },
    {
      number: "04",
      title: "Repair",
      text: "After confirmation, our technician proceeds with the required repair or service.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>About AK Paul Electronics | Appliance Repair in Kolkata</title>
        <meta
          name="description"
          content="Learn about AK Paul Electronics, providing AC, refrigerator, washing machine and microwave repair services in Kolkata. Call toll free 1800 1234 042 for appliance service and inspection."
        />
        <meta
          name="keywords"
          content="AK Paul Electronics, appliance repair Kolkata, AC repair Kolkata, refrigerator repair Kolkata, washing machine repair Kolkata, microwave repair Kolkata, home appliance service Kolkata"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://customerserviceonline.co.in/about" />

        <meta name="geo.region" content="IN-WB" />
        <meta name="geo.placename" content="Kolkata" />

        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:site_name" content="AK Paul Electronics" />
        <meta property="og:title" content="About AK Paul Electronics | Appliance Repair in Kolkata" />
        <meta
          property="og:description"
          content="Professional household appliance repair services in Kolkata for ACs, refrigerators, washing machines and microwaves. Toll Free: 1800 1234 042."
        />
        <meta property="og:url" content="https://customerserviceonline.co.in/about" />
        <meta property="og:image" content="https://customerserviceonline.co.in/images/about-technician.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About AK Paul Electronics | Appliance Repair in Kolkata" />
        <meta
          name="twitter:description"
          content="Learn about AK Paul Electronics and our household appliance repair services in Kolkata. Toll Free: 1800 1234 042."
        />
        <meta name="twitter:image" content="https://customerserviceonline.co.in/images/about-technician.jpg" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": "https://customerserviceonline.co.in/#business",
            name: "AK Paul Electronics",
            url: "https://customerserviceonline.co.in/",
            telephone: "18001234042",
            email: "info@customerserviceonline.co.in",
            image: "https://customerserviceonline.co.in/images/about-technician.jpg",
            description:
              "AK Paul Electronics provides AC, refrigerator, washing machine and microwave repair and servicing in Kolkata.",
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
                name: "About Us",
                item: "https://customerserviceonline.co.in/about",
              },
            ],
          })}
        </script>
      </Helmet>
      <style>{`
        /* =====================================================
           ABOUT PAGE GLOBAL
        ===================================================== */

        .ak-about-page {
          width: 100%;
          overflow-x: hidden;
          background: #ffffff;
          color: #14222e;
        }

        .ak-about-page *,
        .ak-about-page *::before,
        .ak-about-page *::after {
          box-sizing: border-box;
        }

        .about-container {
          width: min(90%, 1360px);
          margin: 0 auto;
        }

        .about-tag {
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

        .about-tag::before {
          content: "";

          width: 35px;
          height: 2px;

          flex-shrink: 0;

          background: #d7192d;
        }

        .about-title {
          margin: 0;

          color: #032e4f;

          font-size: clamp(35px, 4vw, 56px);
          font-weight: 800;

          line-height: 1.1;

          letter-spacing: -1.7px;
        }

        .about-title span {
          color: #d7192d;
        }

        .about-description {
          max-width: 680px;

          margin: 20px 0 0;

          color: #697883;

          font-size: 16px;

          line-height: 1.85;
        }

        /* =====================================================
           ANIMATIONS
        ===================================================== */

        .about-reveal {
          opacity: 0;

          transform: translateY(45px);

          transition:
            opacity 0.8s cubic-bezier(.2,.8,.2,1),
            transform 0.8s cubic-bezier(.2,.8,.2,1);
        }

        .about-reveal.about-show {
          opacity: 1;
          transform: translateY(0);
        }

        .about-delay-1 {
          transition-delay: 0.1s;
        }

        .about-delay-2 {
          transition-delay: 0.2s;
        }

        .about-delay-3 {
          transition-delay: 0.3s;
        }

        @keyframes aboutFloat {
          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes aboutGrid {
          from {
            background-position: 0 0;
          }

          to {
            background-position: 70px 70px;
          }
        }

        /* =====================================================
           BUTTONS
        ===================================================== */

        .about-button {
          min-height: 57px;

          padding: 0 27px;

          display: inline-flex;
          align-items: center;
          justify-content: center;

          gap: 10px;

          border-radius: 6px;

          text-decoration: none;
          text-align: center;

          font-size: 15px;
          font-weight: 800;

          transition:
            transform 0.3s ease,
            background 0.3s ease,
            color 0.3s ease,
            border-color 0.3s ease,
            box-shadow 0.3s ease;
        }

        .about-button-red {
          border: 1px solid #d7192d;

          background: #d7192d;
          color: #ffffff;

          box-shadow:
            0 12px 30px rgba(215, 25, 45, 0.2);
        }

        .about-button-red:hover {
          transform: translateY(-3px);

          background: #b91426;
          border-color: #b91426;

          box-shadow:
            0 17px 35px rgba(215, 25, 45, 0.28);
        }

        .about-button-outline {
          border: 1px solid #032e4f;

          background: transparent;
          color: #032e4f;
        }

        .about-button-outline:hover {
          transform: translateY(-3px);

          background: #032e4f;
          color: #ffffff;
        }

        /* =====================================================
           PAGE HERO
        ===================================================== */

        .about-hero {
          position: relative;

          min-height: 500px;

          display: flex;
          align-items: center;

          overflow: hidden;

          background:
            radial-gradient(
              circle at 15% 30%,
              rgba(9, 94, 151, 0.42),
              transparent 40%
            ),
            linear-gradient(
              135deg,
              #022640 0%,
              #03385e 55%,
              #032e4f 100%
            );
        }

        .about-hero::before {
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

          animation: aboutGrid 20s linear infinite;
        }

        .about-hero::after {
          content: "";

          position: absolute;

          top: -150px;
          right: 14%;

          width: 100px;
          height: 800px;

          transform: rotate(25deg);

          background: #d7192d;

          opacity: 0.8;
        }

        .about-hero-content {
          position: relative;
          z-index: 3;

          max-width: 850px;

          padding: 90px 0;
        }

        .about-hero-small {
          margin: 0 0 18px;

          color: #ef3346;

          font-size: 12px;
          font-weight: 800;

          letter-spacing: 5px;
          text-transform: uppercase;
        }

        .about-hero h1 {
          margin: 0;

          color: #ffffff;

          font-size: clamp(48px, 6vw, 78px);
          font-weight: 800;

          line-height: 1.03;

          letter-spacing: -2.5px;
        }

        .about-hero h1 span {
          color: #ef2237;
        }

        .about-hero-text {
          max-width: 700px;

          margin: 25px 0 0;

          color: #d0dfe8;

          font-size: 17px;

          line-height: 1.8;
        }

        .about-breadcrumb {
          margin-top: 30px;

          display: flex;
          align-items: center;
          flex-wrap: wrap;

          gap: 10px;

          color: #b8cad7;

          font-size: 13px;
        }

        .about-breadcrumb a {
          color: #ffffff;

          text-decoration: none;
        }

        .about-breadcrumb span {
          color: #d7192d;
        }

        /* =====================================================
           INTRODUCTION
        ===================================================== */

        .about-introduction {
          padding: 115px 0;

          background: #ffffff;
        }

        .about-intro-grid {
          display: grid;

          grid-template-columns:
            minmax(0, 0.95fr)
            minmax(0, 1.05fr);

          align-items: center;

          gap: clamp(55px, 8vw, 100px);
        }

        .about-image-wrapper {
          position: relative;

          min-height: 610px;
        }

        .about-main-image {
          position: absolute;

          top: 0;
          left: 0;

          width: 88%;
          height: 535px;

          overflow: hidden;

          border-radius: 5px;

          background: #e8edf0;
        }

        .about-main-image img {
          width: 100%;
          height: 100%;

          display: block;

          object-fit: cover;

          transition: transform 0.8s ease;
        }

        .about-image-wrapper:hover
        .about-main-image img {
          transform: scale(1.05);
        }

        .about-experience-box {
          position: absolute;

          right: 0;
          bottom: 0;

          width: 215px;

          padding: 30px 26px;

          background: #d7192d;
          color: #ffffff;

          box-shadow:
            0 20px 50px rgba(215,25,45,0.25);

          animation:
            aboutFloat 5s ease-in-out infinite;
        }

        .about-experience-box strong {
          display: block;

          margin-bottom: 7px;

          font-size: 50px;
          line-height: 1;
        }

        .about-experience-box span {
          font-size: 13px;

          line-height: 1.5;
        }

        .about-intro-content {
          min-width: 0;
        }

        .about-intro-content p:not(.about-tag) {
          margin: 20px 0 0;

          color: #687680;

          font-size: 15px;

          line-height: 1.9;
        }

        .about-intro-highlight {
          margin-top: 27px;

          padding: 22px 24px;

          border-left: 4px solid #d7192d;

          background: #f5f7f9;
        }

        .about-intro-highlight strong {
          display: block;

          margin-bottom: 7px;

          color: #032e4f;

          font-size: 17px;
        }

        .about-intro-highlight p {
          margin: 0 !important;

          font-size: 14px !important;
        }

        .about-actions {
          width: 100%;

          margin-top: 30px;

          display: flex;
          flex-wrap: wrap;

          gap: 12px;
        }

        /* =====================================================
           STATS
        ===================================================== */

        .about-stats {
          padding: 0 0 110px;

          background: #ffffff;
        }

        .about-stats-grid {
          display: grid;

          grid-template-columns:
            repeat(4, minmax(0, 1fr));

          background: #032e4f;

          border-radius: 5px;

          overflow: hidden;
        }

        .about-stat {
          position: relative;

          min-width: 0;

          padding: 42px 25px;

          text-align: center;

          border-right:
            1px solid rgba(255,255,255,0.12);
        }

        .about-stat:last-child {
          border-right: none;
        }

        .about-stat strong {
          display: block;

          margin-bottom: 8px;

          color: #ffffff;

          font-size: clamp(31px, 4vw, 46px);
          font-weight: 800;
        }

        .about-stat span {
          color: #adc0cd;

          font-size: 12px;

          letter-spacing: 1px;
          text-transform: uppercase;
        }

        .about-stat::after {
          content: "";

          position: absolute;

          left: 50%;
          bottom: 0;

          width: 0;
          height: 3px;

          transform: translateX(-50%);

          background: #d7192d;

          transition: width 0.3s ease;
        }

        .about-stat:hover::after {
          width: 100%;
        }

        /* =====================================================
           EXPERTISE
        ===================================================== */

        .about-expertise {
          padding: 110px 0;

          background: #f5f7f9;
        }

        .about-expertise-heading {
          max-width: 760px;

          margin: 0 auto 55px;

          text-align: center;
        }

        .about-expertise-heading .about-tag {
          justify-content: center;
        }

        .about-expertise-heading
        .about-tag::before {
          display: none;
        }

        .about-expertise-heading
        .about-description {
          margin-left: auto;
          margin-right: auto;
        }

        .about-expertise-grid {
          display: grid;

          grid-template-columns:
            repeat(4, minmax(0, 1fr));

          gap: 20px;
        }

        .about-expertise-card {
          position: relative;

          min-width: 0;

          padding: 35px 27px;

          overflow: hidden;

          background: #ffffff;

          border-bottom: 3px solid transparent;

          box-shadow:
            0 10px 35px rgba(3,46,79,0.06);

          transition:
            transform 0.35s ease,
            box-shadow 0.35s ease,
            border-color 0.35s ease;
        }

        .about-expertise-card:hover {
          transform: translateY(-8px);

          border-color: #d7192d;

          box-shadow:
            0 20px 45px rgba(3,46,79,0.12);
        }

        .about-expertise-number {
          margin-bottom: 25px;

          display: inline-flex;

          color: #d7192d;

          font-size: 13px;
          font-weight: 800;
        }

        .about-expertise-card h3 {
          margin: 0 0 13px;

          color: #032e4f;

          font-size: 20px;

          line-height: 1.35;
        }

        .about-expertise-card p {
          margin: 0;

          color: #6d7b85;

          font-size: 13px;

          line-height: 1.8;
        }

        /* =====================================================
           WHY / VALUES
        ===================================================== */

        .about-values {
          padding: 115px 0;

          background: #ffffff;
        }

        .about-values-grid {
          display: grid;

          grid-template-columns:
            minmax(0, 1.05fr)
            minmax(0, 0.95fr);

          align-items: center;

          gap: clamp(55px, 8vw, 95px);
        }

        .about-values-content {
          min-width: 0;
        }

        .about-values-list {
          margin-top: 37px;

          display: grid;

          grid-template-columns:
            repeat(2, minmax(0, 1fr));

          gap: 17px;
        }

        .about-value-card {
          min-width: 0;

          padding: 23px;

          background: #f5f7f9;

          border-left: 3px solid transparent;

          transition:
            transform 0.3s ease,
            background 0.3s ease,
            box-shadow 0.3s ease,
            border-color 0.3s ease;
        }

        .about-value-card:hover {
          transform: translateY(-4px);

          background: #ffffff;

          border-color: #d7192d;

          box-shadow:
            0 12px 30px rgba(3,46,79,0.08);
        }

        .about-value-number {
          display: block;

          margin-bottom: 12px;

          color: #d7192d;

          font-size: 11px;
          font-weight: 800;
        }

        .about-value-card h3 {
          margin: 0 0 9px;

          color: #032e4f;

          font-size: 16px;
        }

        .about-value-card p {
          margin: 0;

          color: #70808a;

          font-size: 13px;

          line-height: 1.7;
        }

        .about-values-image {
          position: relative;

          height: 610px;

          overflow: hidden;

          border-radius: 5px;

          background: #e8edf0;
        }

        .about-values-image img {
          width: 100%;
          height: 100%;

          display: block;

          object-fit: cover;

          transition: transform 0.8s ease;
        }

        .about-values-image:hover img {
          transform: scale(1.05);
        }

        .about-values-image::after {
          content: "";

          position: absolute;
          inset: 0;

          background:
            linear-gradient(
              0deg,
              rgba(3,46,79,0.42),
              transparent 55%
            );
        }

        .about-image-label {
          position: absolute;

          z-index: 3;

          left: 25px;
          right: 25px;
          bottom: 25px;

          padding: 20px 22px;

          background: #ffffff;

          border-left: 4px solid #d7192d;

          color: #032e4f;

          font-size: 14px;
          font-weight: 800;

          line-height: 1.5;
        }

        /* =====================================================
           PROCESS
        ===================================================== */

        .about-process {
          padding: 110px 0;

          background: #032e4f;
        }

        .about-process-heading {
          max-width: 720px;

          margin: 0 auto 60px;

          text-align: center;
        }

        .about-process-heading .about-tag {
          justify-content: center;

          color: #ef3346;
        }

        .about-process-heading
        .about-tag::before {
          display: none;
        }

        .about-process-heading
        .about-title {
          color: #ffffff;
        }

        .about-process-heading
        .about-description {
          margin-left: auto;
          margin-right: auto;

          color: #b5c7d3;
        }

        .about-process-grid {
          display: grid;

          grid-template-columns:
            repeat(4, minmax(0, 1fr));

          gap: 20px;
        }

        .about-process-card {
          position: relative;

          min-width: 0;

          padding: 32px 27px;

          background:
            rgba(255,255,255,0.06);

          border:
            1px solid rgba(255,255,255,0.1);

          transition:
            transform 0.35s ease,
            background 0.35s ease;
        }

        .about-process-card:hover {
          transform: translateY(-7px);

          background:
            rgba(255,255,255,0.1);
        }

        .about-process-number {
          width: 50px;
          height: 50px;

          margin-bottom: 24px;

          display: flex;
          align-items: center;
          justify-content: center;

          background: #d7192d;
          color: #ffffff;

          font-size: 13px;
          font-weight: 800;
        }

        .about-process-card h3 {
          margin: 0 0 12px;

          color: #ffffff;

          font-size: 20px;
        }

        .about-process-card p {
          margin: 0;

          color: #b5c7d3;

          font-size: 13px;

          line-height: 1.8;
        }

        /* =====================================================
           CTA
        ===================================================== */

        .about-cta {
          position: relative;

          padding: 85px 0;

          overflow: hidden;

          background: #d7192d;
        }

        .about-cta::before {
          content: "";

          position: absolute;

          width: 280px;
          height: 600px;

          top: -200px;
          right: 12%;

          transform: rotate(30deg);

          background:
            rgba(255,255,255,0.07);
        }

        .about-cta-inner {
          position: relative;
          z-index: 2;

          display: flex;
          align-items: center;
          justify-content: space-between;

          gap: 45px;
        }

        .about-cta-text {
          min-width: 0;

          max-width: 750px;
        }

        .about-cta-text span {
          color: #ffffff;

          font-size: 11px;
          font-weight: 800;

          letter-spacing: 4px;
        }

        .about-cta-text h2 {
          margin: 11px 0 0;

          color: #ffffff;

          font-size: clamp(31px, 4vw, 48px);

          line-height: 1.15;
        }

        .about-cta-buttons {
          flex-shrink: 0;

          display: flex;
          flex-wrap: wrap;

          gap: 12px;
        }

        .about-cta-button {
          min-height: 57px;

          padding: 0 25px;

          display: inline-flex;
          align-items: center;
          justify-content: center;

          border: 1px solid #ffffff;
          border-radius: 5px;

          background: #ffffff;
          color: #032e4f;

          text-decoration: none;
          text-align: center;

          font-size: 14px;
          font-weight: 800;

          transition:
            transform 0.3s ease,
            background 0.3s ease,
            color 0.3s ease;
        }

        .about-cta-button:hover {
          transform: translateY(-3px);

          background: #032e4f;
          color: #ffffff;

          border-color: #032e4f;
        }

        /* =====================================================
           TABLET
        ===================================================== */

        @media (max-width: 1000px) {
          .about-intro-grid,
          .about-values-grid {
            grid-template-columns: 1fr;

            gap: 55px;
          }

          .about-image-wrapper {
            width: 100%;
            max-width: 680px;

            margin: 0 auto;
          }

          .about-values-image {
            width: 100%;
            max-width: 680px;

            margin: 0 auto;

            height: 530px;
          }

          .about-expertise-grid,
          .about-process-grid {
            grid-template-columns:
              repeat(2, minmax(0, 1fr));
          }

          .about-cta-inner {
            flex-direction: column;
            align-items: flex-start;
          }

          .about-cta-buttons {
            width: 100%;
          }
        }

        /* =====================================================
           MOBILE TABLET
        ===================================================== */

        @media (max-width: 750px) {
          .about-hero {
            min-height: 440px;
          }

          .about-hero::after {
            right: -30px;

            opacity: 0.35;
          }

          .about-hero-content {
            padding: 75px 0;
          }

          .about-stats-grid {
            grid-template-columns:
              repeat(2, minmax(0, 1fr));
          }

          .about-stat:nth-child(2) {
            border-right: none;
          }

          .about-stat:nth-child(1),
          .about-stat:nth-child(2) {
            border-bottom:
              1px solid rgba(255,255,255,0.12);
          }

          .about-values-list {
            grid-template-columns: 1fr;
          }
        }

        /* =====================================================
           MOBILE
        ===================================================== */

        @media (max-width: 600px) {
          .about-container {
            width: 90%;
          }

          .about-tag {
            font-size: 10px;

            letter-spacing: 2.5px;
          }

          .about-title {
            font-size: 34px;

            letter-spacing: -1px;
          }

          .about-description {
            font-size: 14px;
          }

          /* HERO */

          .about-hero {
            min-height: 400px;
          }

          .about-hero-content {
            padding: 65px 0;
          }

          .about-hero-small {
            font-size: 10px;

            letter-spacing: 3.5px;
          }

          .about-hero h1 {
            font-size: clamp(40px, 12vw, 52px);

            letter-spacing: -1.5px;
          }

          .about-hero-text {
            font-size: 15px;
          }

          /* INTRO */

          .about-introduction,
          .about-expertise,
          .about-values,
          .about-process {
            padding: 70px 0;
          }

          .about-image-wrapper {
            min-height: 430px;
          }

          .about-main-image {
            width: 100%;
            height: 380px;
          }

          .about-experience-box {
            right: 12px;

            width: 170px;

            padding: 22px;
          }

          .about-experience-box strong {
            font-size: 39px;
          }

          .about-intro-content p:not(.about-tag) {
            font-size: 14px;
          }

          .about-actions {
            flex-direction: column;
          }

          .about-actions .about-button {
            width: 100%;

            min-height: 55px;

            padding: 14px 18px;
          }

          /* STATS */

          .about-stats {
            padding-bottom: 70px;
          }

          .about-stat {
            padding: 30px 15px;
          }

          .about-stat strong {
            font-size: 30px;
          }

          .about-stat span {
            font-size: 10px;
          }

          /* EXPERTISE */

          .about-expertise-grid {
            grid-template-columns: 1fr;
          }

          .about-expertise-card {
            padding: 28px 23px;
          }

          /* VALUES */

          .about-values-image {
            height: 400px;
          }

          .about-image-label {
            left: 15px;
            right: 15px;
            bottom: 15px;
          }

          /* PROCESS */

          .about-process-grid {
            grid-template-columns: 1fr;
          }

          /* CTA */

          .about-cta {
            padding: 65px 0;
          }

          .about-cta-buttons {
            flex-direction: column;
          }

          .about-cta-button {
            width: 100%;

            min-height: 55px;

            padding: 14px 18px;
          }
        }

        /* =====================================================
           VERY SMALL MOBILE
        ===================================================== */

        @media (max-width: 380px) {
          .about-hero h1 {
            font-size: 37px;
          }

          .about-image-wrapper {
            min-height: 390px;
          }

          .about-main-image {
            height: 340px;
          }

          .about-experience-box {
            width: 155px;
          }

          .about-values-image {
            height: 350px;
          }
        }

        /* =====================================================
           REDUCED MOTION
        ===================================================== */

        @media (prefers-reduced-motion: reduce) {
          .about-reveal {
            opacity: 1;

            transform: none;

            transition: none;
          }

          .about-experience-box,
          .about-hero::before {
            animation: none;
          }
        }
      `}</style>

      <main className="ak-about-page">

        {/* =====================================================
            HERO
        ===================================================== */}

        <section className="about-hero">
          <div className="about-container">
            <div className="about-hero-content">

              <p className="about-hero-small">
                AK PAUL ELECTRONICS
              </p>

              <h1>
                About <span>Us.</span>
              </h1>

              <p className="about-hero-text">
                Professional household appliance repair and service
                in Kolkata, backed by experienced technicians,
                affordable pricing and a focus on quality service.
              </p>

              <div className="about-breadcrumb">
                <Link to="/">Home</Link>
                <span>→</span>
                <strong>About Us</strong>
              </div>

            </div>
          </div>
        </section>

        {/* =====================================================
            INTRODUCTION
        ===================================================== */}

        <section className="about-introduction">

          <div className="about-container about-intro-grid">

            <div className="about-image-wrapper about-reveal">

              <div className="about-main-image">

                <img
                  src="/images/about-technician.jpg"
                  alt="AK Paul Electronics appliance repair technician"
                  onError={(event) =>
                    handleImageError(
                      event,
                      "https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=1200&q=85"
                    )
                  }
                />

              </div>

              <div className="about-experience-box">

                <strong>15+</strong>

                <span>
                  Years of Technical Experience
                </span>

              </div>

            </div>

            <div className="about-intro-content about-reveal about-delay-1">

              <p className="about-tag">
                Who We Are
              </p>

              <h2 className="about-title">
                Welcome to AK Paul
                <span> Electronics.</span>
              </h2>

              <p>
                If you are looking for AC, Refrigerator or Washing
                Machine Repair and Services in and around Kolkata,
                then you are at the right place.
              </p>

              <p>
                At AK Paul Electronics, we provide quality repair
                and service for different types and brands of ACs,
                refrigerators and washing machines. Our skilled
                technicians have 15+ years of experience in
                household appliance servicing.
              </p>

              <p>
                Simply give us a call to inspect your household
                appliance. After inspection, we provide an estimated
                quote so that you understand the expected repair
                cost before proceeding with the service.
              </p>

              <p>
                We focus on quality service, professional
                workmanship and quality spare parts whenever
                replacement is required.
              </p>

              <div className="about-intro-highlight">

                <strong>
                  Appliance giving you trouble?
                </strong>

                <p>
                  Contact our team for an inspection and estimated
                  repair cost.
                </p>

              </div>

              <div className="about-actions">

                <a
                  href="tel:18001234042"
                  className="about-button about-button-red"
                >
                  Call Toll Free 1800 1234 042 →
                </a>

                <Link
                  to="/services"
                  className="about-button about-button-outline"
                >
                  View Our Services
                </Link>

              </div>

            </div>

          </div>

        </section>

        {/* =====================================================
            STATS
        ===================================================== */}

        <section className="about-stats">

          <div className="about-container">

            <div className="about-stats-grid about-reveal">

              <div className="about-stat">
                <strong>15+</strong>
                <span>Years Experience</span>
              </div>

              <div className="about-stat">
                <strong>4+</strong>
                <span>Service Categories</span>
              </div>

              <div className="about-stat">
                <strong>Free</strong>
                <span>Inspection</span>
              </div>

              <div className="about-stat">
                <strong>Kolkata</strong>
                <span>Service Area</span>
              </div>

            </div>

          </div>

        </section>

        {/* =====================================================
            EXPERTISE
        ===================================================== */}

        <section className="about-expertise">

          <div className="about-container">

            <div className="about-expertise-heading about-reveal">

              <p className="about-tag">
                What We Do
              </p>

              <h2 className="about-title">
                Our Appliance
                <span> Expertise.</span>
              </h2>

              <p className="about-description">
                We provide repair and servicing for commonly used
                household appliances with a focus on professional
                inspection and practical solutions.
              </p>

            </div>

            <div className="about-expertise-grid">

              {expertise.map((item, index) => (
                <article
                  key={item.title}
                  className={`about-expertise-card about-reveal about-delay-${
                    (index % 3) + 1
                  }`}
                >

                  <span className="about-expertise-number">
                    {item.number}
                  </span>

                  <h3>{item.title}</h3>

                  <p>{item.text}</p>

                </article>
              ))}

            </div>

          </div>

        </section>

        {/* =====================================================
            WHY CHOOSE US
        ===================================================== */}

        <section className="about-values">

          <div className="about-container about-values-grid">

            <div className="about-values-content">

              <div className="about-reveal">

                <p className="about-tag">
                  Why AK Paul Electronics
                </p>

                <h2 className="about-title">
                  Quality Service With
                  <span> Customer Focus.</span>
                </h2>

                <p className="about-description">
                  Our goal is to make appliance repair simpler by
                  providing professional inspection, clear
                  communication and affordable service.
                </p>

              </div>

              <div className="about-values-list">

                {values.map((item, index) => (
                  <article
                    key={item.title}
                    className={`about-value-card about-reveal about-delay-${
                      (index % 3) + 1
                    }`}
                  >

                    <span className="about-value-number">
                      {item.number}
                    </span>

                    <h3>{item.title}</h3>

                    <p>{item.text}</p>

                  </article>
                ))}

              </div>

            </div>

            <div className="about-values-image about-reveal about-delay-1">

              {/* LOCAL IMAGE FIRST -> UNSPLASH IF IT FAILS */}

              <img
                src="/images/hero-appliance-repair.jpg"
                alt="AK Paul Electronics professional repair service"
                onError={(event) =>
                  handleImageError(
                    event,
                    "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=85"
                  )
                }
              />

              <div className="about-image-label">
                Professional household appliance repair and
                service in Kolkata.
              </div>

            </div>

          </div>

        </section>

        {/* =====================================================
            PROCESS
        ===================================================== */}

        <section className="about-process">

          <div className="about-container">

            <div className="about-process-heading about-reveal">

              <p className="about-tag">
                How We Work
              </p>

              <h2 className="about-title">
                Simple Repair
                <span> Process.</span>
              </h2>

              <p className="about-description">
                From your first call to appliance repair, we keep
                the service process straightforward.
              </p>

            </div>

            <div className="about-process-grid">

              {process.map((item, index) => (
                <article
                  key={item.title}
                  className={`about-process-card about-reveal about-delay-${
                    (index % 3) + 1
                  }`}
                >

                  <div className="about-process-number">
                    {item.number}
                  </div>

                  <h3>{item.title}</h3>

                  <p>{item.text}</p>

                </article>
              ))}

            </div>

          </div>

        </section>

        {/* =====================================================
            FINAL CTA
        ===================================================== */}

        <section className="about-cta">

          <div className="about-container about-cta-inner">

            <div className="about-cta-text about-reveal">

              <span>
                AK PAUL ELECTRONICS
              </span>

              <h2>
                Need professional help with your household
                appliance?
              </h2>

            </div>

            <div className="about-cta-buttons about-reveal about-delay-1">

              <a
                href="tel:18001234042"
                className="about-cta-button"
              >
                Call Toll Free 1800 1234 042
              </a>

              <Link
                to="/contact"
                className="about-cta-button"
              >
                Contact Us
              </Link>

            </div>

          </div>

        </section>

      </main>
    </>
  );
}

export default About;
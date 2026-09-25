import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

function Services() {
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
    const elements = document.querySelectorAll(".services-reveal");

    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => {
        element.classList.add("services-show");
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("services-show");
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
     SERVICES DATA
  ========================================================= */

  const services = [
    {
      number: "01",
      title: "AC Repair & Services",
      shortTitle: "Air Conditioner",
      image: "/images/ac-repair.jpg",
      fallback:
        "https://images.unsplash.com/photo-1631545806609-53c8e6e0f42e?auto=format&fit=crop&w=1400&q=85",
      description:
        "Looking for AC Repair or Service in Kolkata? AK Paul Electronics provides professional repair and servicing for air conditioners at affordable prices.",
      points: [
        "AC inspection and troubleshooting",
        "Cooling problem inspection",
        "General AC servicing",
        "Repair and maintenance",
      ],
    },
    {
      number: "02",
      title: "Refrigerator Repair & Services",
      shortTitle: "Refrigerator",
      image: "/images/fridge-repair.jpg",
      fallback:
        "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?auto=format&fit=crop&w=1400&q=85",
      description:
        "A refrigerator is an essential household appliance. If it is not cooling properly or experiencing other problems, our technicians can inspect and assist with the repair.",
      points: [
        "Cooling problem inspection",
        "General refrigerator repair",
        "Component inspection",
        "Repair and maintenance",
      ],
    },
    {
      number: "03",
      title: "Washing Machine Repair",
      shortTitle: "Washing Machine",
      image: "/images/washing-machine-repair.jpg",
      fallback:
        "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&w=1400&q=85",
      description:
        "We repair and service different types and brands of washing machines. Our technicians can inspect the appliance and provide an estimated repair cost.",
      points: [
        "Washing machine inspection",
        "Drainage problem inspection",
        "General servicing",
        "Repair and maintenance",
      ],
    },
    {
      number: "04",
      title: "Microwave Repair & Services",
      shortTitle: "Microwave",
      image: "/images/microwave-repair.jpg",
      fallback:
        "https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?auto=format&fit=crop&w=1400&q=85",
      description:
        "AK Paul Electronics also provides professional inspection and servicing for common microwave problems and household microwave requirements.",
      points: [
        "Microwave inspection",
        "Heating problem inspection",
        "Electrical problem inspection",
        "Repair and servicing",
      ],
    },
  ];

  const benefits = [
    {
      number: "01",
      title: "Free Inspection",
      text: "Contact our team to arrange an inspection of your household appliance.",
    },
    {
      number: "02",
      title: "15+ Years Experience",
      text: "Experienced technicians with years of practical appliance repair experience.",
    },
    {
      number: "03",
      title: "Quality Service",
      text: "We focus on professional workmanship and dependable appliance servicing.",
    },
    {
      number: "04",
      title: "Affordable Pricing",
      text: "Get an estimated repair cost before proceeding with the required service.",
    },
  ];

  const process = [
    {
      number: "01",
      title: "Call Us",
      text: "Call our toll-free number 1800 1234 240 and tell us about your appliance and the problem.",
    },
    {
      number: "02",
      title: "Inspection",
      text: "Our technician inspects the appliance to understand the problem.",
    },
    {
      number: "03",
      title: "Estimation",
      text: "We provide an estimated repair cost before the repair work begins.",
    },
    {
      number: "04",
      title: "Repair & Service",
      text: "After confirmation, the required repair or service is carried out.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Appliance Repair Services in Kolkata | AK Paul Electronics</title>
        <meta name="description" content="AK Paul Electronics provides AC, refrigerator, washing machine and microwave repair services in Kolkata. Call toll free 1800 1234 240 or email babupaul2121@gmail.com." />
        <meta name="keywords" content="AC repair Kolkata, refrigerator repair Kolkata, fridge repair Kolkata, washing machine repair Kolkata, microwave repair Kolkata, appliance repair Kolkata, AK Paul Electronics" />
        <link rel="canonical" href="https://customerserviceonline.co.in/services" />

        <meta name="geo.region" content="IN-WB" />
        <meta name="geo.placename" content="Kolkata, West Bengal" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Appliance Repair Services in Kolkata | AK Paul Electronics" />
        <meta property="og:description" content="Professional AC, refrigerator, washing machine and microwave repair services in Kolkata. Toll Free: 1800 1234 240." />
        <meta property="og:url" content="https://customerserviceonline.co.in/services" />
        <meta property="og:site_name" content="AK Paul Electronics" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Appliance Repair Services in Kolkata | AK Paul Electronics" />
        <meta name="twitter:description" content="Professional household appliance repair services in Kolkata. Toll Free: 1800 1234 240." />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "AK Paul Electronics",
            url: "https://customerserviceonline.co.in/",
            telephone: "18001234240",
            email: "babupaul2121@gmail.com",
            areaServed: { "@type": "City", name: "Kolkata" },
            address: {
              "@type": "PostalAddress",
              addressLocality: "Kolkata",
              addressRegion: "West Bengal",
              addressCountry: "IN"
            },
            serviceType: [
              "AC Repair and Service",
              "Refrigerator Repair and Service",
              "Washing Machine Repair and Service",
              "Microwave Repair and Service"
            ]
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://customerserviceonline.co.in/" },
              { "@type": "ListItem", position: 2, name: "Services", item: "https://customerserviceonline.co.in/services" }
            ]
          })}
        </script>
      </Helmet>

      <style>{`
        /* =====================================================
           SERVICES GLOBAL
        ===================================================== */

        .ak-services-page {
          width: 100%;
          overflow-x: hidden;
          background: #ffffff;
          color: #14222e;
        }

        .ak-services-page *,
        .ak-services-page *::before,
        .ak-services-page *::after {
          box-sizing: border-box;
        }

        .services-container {
          width: min(90%, 1360px);
          margin: 0 auto;
        }

        .services-tag {
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

        .services-tag::before {
          content: "";

          width: 35px;
          height: 2px;

          flex-shrink: 0;

          background: #d7192d;
        }

        .services-title {
          margin: 0;

          color: #032e4f;

          font-size: clamp(35px, 4vw, 56px);
          font-weight: 800;

          line-height: 1.1;

          letter-spacing: -1.7px;
        }

        .services-title span {
          color: #d7192d;
        }

        .services-description {
          max-width: 690px;

          margin: 20px 0 0;

          color: #697883;

          font-size: 16px;
          line-height: 1.85;
        }

        /* =====================================================
           REVEAL
        ===================================================== */

        .services-reveal {
          opacity: 0;

          transform: translateY(45px);

          transition:
            opacity 0.8s cubic-bezier(.2,.8,.2,1),
            transform 0.8s cubic-bezier(.2,.8,.2,1);
        }

        .services-reveal.services-show {
          opacity: 1;
          transform: translateY(0);
        }

        .services-delay-1 {
          transition-delay: 0.1s;
        }

        .services-delay-2 {
          transition-delay: 0.2s;
        }

        .services-delay-3 {
          transition-delay: 0.3s;
        }

        @keyframes servicesGrid {
          from {
            background-position: 0 0;
          }

          to {
            background-position: 70px 70px;
          }
        }

        @keyframes servicesPulse {
          0% {
            box-shadow: 0 0 0 0 rgba(215, 25, 45, 0.35);
          }

          70% {
            box-shadow: 0 0 0 15px rgba(215, 25, 45, 0);
          }

          100% {
            box-shadow: 0 0 0 0 rgba(215, 25, 45, 0);
          }
        }

        /* =====================================================
           BUTTON
        ===================================================== */

        .services-button {
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

        .services-button-red {
          border: 1px solid #d7192d;

          background: #d7192d;
          color: #ffffff;

          box-shadow:
            0 12px 30px rgba(215, 25, 45, 0.2);
        }

        .services-button-red:hover {
          transform: translateY(-3px);

          background: #b91426;
          border-color: #b91426;

          box-shadow:
            0 17px 35px rgba(215, 25, 45, 0.28);
        }

        .services-button-outline {
          border: 1px solid #032e4f;

          background: transparent;
          color: #032e4f;
        }

        .services-button-outline:hover {
          transform: translateY(-3px);

          background: #032e4f;
          color: #ffffff;
        }

        /* =====================================================
           HERO
        ===================================================== */

        .services-page-hero {
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

        .services-page-hero::before {
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

          animation: servicesGrid 20s linear infinite;
        }

        .services-page-hero::after {
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

        .services-hero-content {
          position: relative;
          z-index: 3;

          max-width: 880px;

          padding: 90px 0;
        }

        .services-hero-label {
          margin: 0 0 18px;

          color: #ef3346;

          font-size: 12px;
          font-weight: 800;

          letter-spacing: 5px;
          text-transform: uppercase;
        }

        .services-page-hero h1 {
          margin: 0;

          color: #ffffff;

          font-size: clamp(48px, 6vw, 78px);
          font-weight: 800;

          line-height: 1.03;

          letter-spacing: -2.5px;
        }

        .services-page-hero h1 span {
          color: #ef2237;
        }

        .services-hero-text {
          max-width: 730px;

          margin: 25px 0 0;

          color: #d0dfe8;

          font-size: 17px;
          line-height: 1.8;
        }

        .services-breadcrumb {
          margin-top: 30px;

          display: flex;
          align-items: center;
          flex-wrap: wrap;

          gap: 10px;

          color: #b8cad7;

          font-size: 13px;
        }

        .services-breadcrumb a {
          color: #ffffff;

          text-decoration: none;
        }

        .services-breadcrumb span {
          color: #d7192d;
        }

        /* =====================================================
           INTRO
        ===================================================== */

        .services-intro {
          padding: 105px 0 65px;

          background: #ffffff;
        }

        .services-intro-inner {
          display: grid;

          grid-template-columns:
            minmax(0, 1fr) auto;

          align-items: end;

          gap: 50px;
        }

        .services-intro-content {
          min-width: 0;
        }

        .services-intro-call {
          min-width: 260px;

          padding: 24px;

          display: flex;
          align-items: center;
          gap: 15px;

          background: #f5f7f9;

          border-left: 4px solid #d7192d;

          text-decoration: none;

          transition:
            transform 0.3s ease,
            box-shadow 0.3s ease;
        }

        .services-intro-call:hover {
          transform: translateY(-4px);

          box-shadow:
            0 15px 35px rgba(3,46,79,0.1);
        }

        .services-call-icon {
          width: 48px;
          height: 48px;

          flex-shrink: 0;

          display: flex;
          align-items: center;
          justify-content: center;

          border-radius: 50%;

          background: #d7192d;
          color: #ffffff;

          animation: servicesPulse 2s infinite;
        }

        .services-call-icon svg {
          width: 20px;
          height: 20px;

          fill: currentColor;
        }

        .services-call-text small {
          display: block;

          margin-bottom: 4px;

          color: #74828b;

          font-size: 11px;
          font-weight: 700;

          letter-spacing: 1px;
          text-transform: uppercase;
        }

        .services-call-text strong {
          color: #032e4f;

          font-size: 20px;
        }

        /* =====================================================
           SERVICE SECTIONS
        ===================================================== */

        .services-list {
          padding: 35px 0 115px;

          background: #ffffff;
        }

        .services-item {
          display: grid;

          grid-template-columns:
            minmax(0, 1fr)
            minmax(0, 1fr);

          align-items: stretch;

          margin-bottom: 65px;

          overflow: hidden;

          border-radius: 5px;

          background: #f5f7f9;

          box-shadow:
            0 15px 45px rgba(3,46,79,0.06);
        }

        .services-item:last-child {
          margin-bottom: 0;
        }

        .services-item:nth-child(even)
        .services-item-image {
          order: 2;
        }

        .services-item:nth-child(even)
        .services-item-content {
          order: 1;
        }

        .services-item-image {
          position: relative;

          min-height: 500px;

          overflow: hidden;

          background: #e8edf0;
        }

        .services-item-image img {
          position: absolute;
          inset: 0;

          width: 100%;
          height: 100%;

          display: block;

          object-fit: cover;

          transition: transform 0.8s ease;
        }

        .services-item:hover
        .services-item-image img {
          transform: scale(1.06);
        }

        .services-item-image::after {
          content: "";

          position: absolute;
          inset: 0;

          background:
            linear-gradient(
              0deg,
              rgba(3,46,79,0.42),
              transparent 60%
            );
        }

        .services-item-number {
          position: absolute;
          z-index: 3;

          top: 30px;
          left: 30px;

          width: 65px;
          height: 65px;

          display: flex;
          align-items: center;
          justify-content: center;

          background: #d7192d;
          color: #ffffff;

          font-size: 14px;
          font-weight: 800;

          box-shadow:
            0 12px 30px rgba(215,25,45,0.25);
        }

        .services-image-label {
          position: absolute;
          z-index: 3;

          left: 30px;
          bottom: 30px;

          max-width: calc(100% - 60px);

          padding: 17px 20px;

          background: #ffffff;
          color: #032e4f;

          border-left: 4px solid #d7192d;

          font-size: 13px;
          font-weight: 800;
        }

        .services-item-content {
          min-width: 0;

          padding:
            clamp(45px, 6vw, 75px);

          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .services-item-small {
          margin: 0 0 13px;

          color: #d7192d;

          font-size: 11px;
          font-weight: 800;

          letter-spacing: 3px;
          text-transform: uppercase;
        }

        .services-item-content h2 {
          margin: 0;

          color: #032e4f;

          font-size: clamp(30px, 3vw, 43px);

          line-height: 1.15;

          letter-spacing: -1px;
        }

        .services-item-description {
          margin: 20px 0 0;

          color: #687680;

          font-size: 15px;
          line-height: 1.85;
        }

        .services-points {
          margin: 27px 0 0;
          padding: 0;

          display: grid;

          grid-template-columns:
            repeat(2, minmax(0, 1fr));

          gap: 13px 18px;

          list-style: none;
        }

        .services-points li {
          position: relative;

          min-width: 0;

          padding-left: 25px;

          color: #455762;

          font-size: 13px;
          line-height: 1.6;
        }

        .services-points li::before {
          content: "✓";

          position: absolute;

          left: 0;
          top: 0;

          color: #d7192d;

          font-weight: 900;
        }

        .services-item-buttons {
          width: 100%;

          margin-top: 32px;

          display: flex;
          flex-wrap: wrap;

          gap: 12px;
        }

        /* =====================================================
           BENEFITS
        ===================================================== */

        .services-benefits {
          padding: 110px 0;

          background: #f5f7f9;
        }

        .services-benefits-heading {
          max-width: 730px;

          margin: 0 auto 55px;

          text-align: center;
        }

        .services-benefits-heading .services-tag {
          justify-content: center;
        }

        .services-benefits-heading
        .services-tag::before {
          display: none;
        }

        .services-benefits-heading
        .services-description {
          margin-left: auto;
          margin-right: auto;
        }

        .services-benefit-grid {
          display: grid;

          grid-template-columns:
            repeat(4, minmax(0, 1fr));

          gap: 20px;
        }

        .services-benefit-card {
          min-width: 0;

          padding: 34px 27px;

          background: #ffffff;

          border-bottom: 3px solid transparent;

          box-shadow:
            0 10px 30px rgba(3,46,79,0.05);

          transition:
            transform 0.35s ease,
            box-shadow 0.35s ease,
            border-color 0.35s ease;
        }

        .services-benefit-card:hover {
          transform: translateY(-8px);

          border-color: #d7192d;

          box-shadow:
            0 20px 45px rgba(3,46,79,0.11);
        }

        .services-benefit-number {
          margin-bottom: 22px;

          display: block;

          color: #d7192d;

          font-size: 12px;
          font-weight: 800;
        }

        .services-benefit-card h3 {
          margin: 0 0 12px;

          color: #032e4f;

          font-size: 19px;
        }

        .services-benefit-card p {
          margin: 0;

          color: #6d7c86;

          font-size: 13px;
          line-height: 1.8;
        }

        /* =====================================================
           PROCESS
        ===================================================== */

        .services-process {
          padding: 110px 0;

          background: #032e4f;
        }

        .services-process-heading {
          max-width: 730px;

          margin: 0 auto 60px;

          text-align: center;
        }

        .services-process-heading
        .services-tag {
          justify-content: center;

          color: #ef3346;
        }

        .services-process-heading
        .services-tag::before {
          display: none;
        }

        .services-process-heading
        .services-title {
          color: #ffffff;
        }

        .services-process-heading
        .services-description {
          margin-left: auto;
          margin-right: auto;

          color: #b7c8d3;
        }

        .services-process-grid {
          position: relative;

          display: grid;

          grid-template-columns:
            repeat(4, minmax(0, 1fr));

          gap: 20px;
        }

        .services-process-grid::before {
          content: "";

          position: absolute;

          top: 25px;
          left: 12%;
          right: 12%;

          height: 1px;

          background:
            rgba(255,255,255,0.15);
        }

        .services-process-card {
          position: relative;
          z-index: 2;

          min-width: 0;

          text-align: center;
        }

        .services-process-number {
          width: 52px;
          height: 52px;

          margin: 0 auto 25px;

          display: flex;
          align-items: center;
          justify-content: center;

          background: #d7192d;
          color: #ffffff;

          font-size: 12px;
          font-weight: 800;

          box-shadow:
            0 0 0 8px #032e4f;
        }

        .services-process-card h3 {
          margin: 0 0 12px;

          color: #ffffff;

          font-size: 19px;
        }

        .services-process-card p {
          max-width: 240px;

          margin: 0 auto;

          color: #b4c5d1;

          font-size: 13px;
          line-height: 1.8;
        }

        /* =====================================================
           CTA
        ===================================================== */

        .services-cta {
          position: relative;

          padding: 85px 0;

          overflow: hidden;

          background: #d7192d;
        }

        .services-cta::before {
          content: "";

          position: absolute;

          top: -200px;
          right: 12%;

          width: 260px;
          height: 650px;

          transform: rotate(30deg);

          background:
            rgba(255,255,255,0.07);
        }

        .services-cta-inner {
          position: relative;
          z-index: 2;

          display: flex;
          align-items: center;
          justify-content: space-between;

          gap: 45px;
        }

        .services-cta-content {
          min-width: 0;

          max-width: 750px;
        }

        .services-cta-content span {
          color: #ffffff;

          font-size: 11px;
          font-weight: 800;

          letter-spacing: 4px;
        }

        .services-cta-content h2 {
          margin: 11px 0 0;

          color: #ffffff;

          font-size: clamp(31px, 4vw, 48px);

          line-height: 1.15;
        }

        .services-cta-buttons {
          flex-shrink: 0;

          display: flex;
          flex-wrap: wrap;

          gap: 12px;
        }

        .services-cta-button {
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

        .services-cta-button:hover {
          transform: translateY(-3px);

          background: #032e4f;
          color: #ffffff;

          border-color: #032e4f;
        }

        /* =====================================================
           LAPTOP
        ===================================================== */

        @media (max-width: 1100px) {
          .services-item-content {
            padding: 45px;
          }

          .services-benefit-grid {
            grid-template-columns:
              repeat(2, minmax(0, 1fr));
          }
        }

        /* =====================================================
           TABLET
        ===================================================== */

        @media (max-width: 900px) {
          .services-intro-inner {
            grid-template-columns: 1fr;

            align-items: start;
          }

          .services-intro-call {
            width: fit-content;
          }

          .services-item {
            grid-template-columns: 1fr;
          }

          .services-item:nth-child(even)
          .services-item-image,
          .services-item:nth-child(even)
          .services-item-content {
            order: initial;
          }

          .services-item-image {
            min-height: 450px;
          }

          .services-process-grid {
            grid-template-columns:
              repeat(2, minmax(0, 1fr));

            gap: 45px 20px;
          }

          .services-process-grid::before {
            display: none;
          }

          .services-cta-inner {
            flex-direction: column;
            align-items: flex-start;
          }

          .services-cta-buttons {
            width: 100%;
          }
        }

        /* =====================================================
           MOBILE
        ===================================================== */

        @media (max-width: 600px) {
          .services-container {
            width: 90%;
          }

          .services-tag {
            font-size: 10px;

            letter-spacing: 2.5px;
          }

          .services-title {
            font-size: 34px;

            letter-spacing: -1px;
          }

          .services-description {
            font-size: 14px;
          }

          /* HERO */

          .services-page-hero {
            min-height: 400px;
          }

          .services-page-hero::after {
            right: -50px;

            opacity: 0.3;
          }

          .services-hero-content {
            padding: 65px 0;
          }

          .services-hero-label {
            font-size: 10px;

            letter-spacing: 3px;
          }

          .services-page-hero h1 {
            font-size: clamp(40px, 12vw, 52px);

            letter-spacing: -1.5px;
          }

          .services-hero-text {
            font-size: 15px;
          }

          /* INTRO */

          .services-intro {
            padding: 70px 0 40px;
          }

          .services-intro-call {
            width: 100%;

            min-width: 0;

            padding: 20px;
          }

          .services-call-text strong {
            font-size: 17px;
          }

          /* SERVICES */

          .services-list {
            padding: 25px 0 70px;
          }

          .services-item {
            margin-bottom: 35px;
          }

          .services-item-image {
            min-height: 300px;
          }

          .services-item-number {
            top: 18px;
            left: 18px;

            width: 52px;
            height: 52px;
          }

          .services-image-label {
            left: 15px;
            right: 15px;
            bottom: 15px;

            max-width: none;
          }

          .services-item-content {
            padding: 35px 22px;
          }

          .services-item-content h2 {
            font-size: 29px;
          }

          .services-item-description {
            font-size: 14px;
          }

          .services-points {
            grid-template-columns: 1fr;
          }

          .services-item-buttons {
            flex-direction: column;
          }

          .services-item-buttons
          .services-button {
            width: 100%;

            min-height: 55px;

            padding: 14px 18px;
          }

          /* BENEFITS */

          .services-benefits,
          .services-process {
            padding: 70px 0;
          }

          .services-benefit-grid {
            grid-template-columns: 1fr;
          }

          /* PROCESS */

          .services-process-grid {
            grid-template-columns: 1fr;

            gap: 25px;
          }

          .services-process-card {
            padding: 25px;

            background:
              rgba(255,255,255,0.05);

            text-align: left;
          }

          .services-process-number {
            margin:
              0 0 20px;

            box-shadow: none;
          }

          .services-process-card p {
            max-width: none;

            margin: 0;
          }

          /* CTA */

          .services-cta {
            padding: 65px 0;
          }

          .services-cta-buttons {
            flex-direction: column;
          }

          .services-cta-button {
            width: 100%;

            min-height: 55px;

            padding: 14px 18px;
          }
        }

        /* =====================================================
           VERY SMALL MOBILE
        ===================================================== */

        @media (max-width: 380px) {
          .services-page-hero h1 {
            font-size: 37px;
          }

          .services-item-image {
            min-height: 260px;
          }

          .services-item-content h2 {
            font-size: 26px;
          }
        }

        /* =====================================================
           REDUCED MOTION
        ===================================================== */

        @media (prefers-reduced-motion: reduce) {
          .services-reveal {
            opacity: 1;

            transform: none;

            transition: none;
          }

          .services-page-hero::before,
          .services-call-icon {
            animation: none;
          }
        }
      `}</style>

      <main className="ak-services-page">

        {/* =================================================
            HERO
        ================================================= */}

        <section className="services-page-hero">
          <div className="services-container">
            <div className="services-hero-content">

              <p className="services-hero-label">
                AK PAUL ELECTRONICS
              </p>

              <h1>
                Our <span>Services.</span>
              </h1>

              <p className="services-hero-text">
                Professional AC, refrigerator, washing machine and
                microwave repair services in Kolkata at affordable
                prices.
              </p>

              <div className="services-breadcrumb">
                <Link to="/">Home</Link>
                <span>→</span>
                <strong>Services</strong>
              </div>

            </div>
          </div>
        </section>

        {/* =================================================
            INTRO
        ================================================= */}

        <section className="services-intro">

          <div className="services-container services-intro-inner">

            <div className="services-intro-content services-reveal">

              <p className="services-tag">
                Appliance Repair & Service
              </p>

              <h2 className="services-title">
                Professional Service for Your
                <span> Household Appliances.</span>
              </h2>

              <p className="services-description">
                AK Paul Electronics offers repair and servicing
                for essential household appliances. Our experienced
                technicians inspect the appliance, identify the
                problem and provide an estimated repair cost before
                proceeding with the required work. For enquiries, email us at babupaul2121@gmail.com.
              </p>

            </div>

            <a
              href="tel:18001234240"
              className="services-intro-call services-reveal services-delay-1"
            >

              <span className="services-call-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M6.62 10.79a15.46 15.46 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1.02l-2.2 2.2Z" />
                </svg>
              </span>

              <span className="services-call-text">
                <small>Call for Inspection</small>
                <strong>1800 1234 240</strong>
              </span>

            </a>

          </div>

        </section>

        {/* =================================================
            MAIN SERVICES
        ================================================= */}

        <section className="services-list">

          <div className="services-container">

            {services.map((service, index) => (
              <article
                className="services-item services-reveal"
                key={service.title}
              >

                <div className="services-item-image">

                  {/* LOCAL IMAGE FIRST */}
                  <img
                    src={service.image}
                    alt={service.title}
                    onError={(event) =>
                      handleImageError(
                        event,
                        service.fallback
                      )
                    }
                  />

                  <span className="services-item-number">
                    {service.number}
                  </span>

                  <div className="services-image-label">
                    {service.shortTitle} Repair & Service
                  </div>

                </div>

                <div className="services-item-content">

                  <p className="services-item-small">
                    AK Paul Electronics
                  </p>

                  <h2>
                    {service.title}
                  </h2>

                  <p className="services-item-description">
                    {service.description}
                  </p>

                  <ul className="services-points">

                    {service.points.map((point) => (
                      <li key={point}>
                        {point}
                      </li>
                    ))}

                  </ul>

                  <div className="services-item-buttons">

                    <a
                      href="tel:18001234240"
                      className="services-button services-button-red"
                    >
                      Call 1800 1234 240 →
                    </a>

                    <Link
                      to="/contact"
                      className="services-button services-button-outline"
                    >
                      Request Service
                    </Link>

                  </div>

                </div>

              </article>
            ))}

          </div>

        </section>

        {/* =================================================
            BENEFITS
        ================================================= */}

        <section className="services-benefits">

          <div className="services-container">

            <div className="services-benefits-heading services-reveal">

              <p className="services-tag">
                Why Choose Us
              </p>

              <h2 className="services-title">
                Reliable Service.
                <span> Simple Process.</span>
              </h2>

              <p className="services-description">
                We focus on professional inspection, affordable
                service and clear communication throughout the
                appliance repair process.
              </p>

            </div>

            <div className="services-benefit-grid">

              {benefits.map((benefit, index) => (
                <article
                  key={benefit.title}
                  className={`services-benefit-card services-reveal services-delay-${
                    (index % 3) + 1
                  }`}
                >

                  <span className="services-benefit-number">
                    {benefit.number}
                  </span>

                  <h3>
                    {benefit.title}
                  </h3>

                  <p>
                    {benefit.text}
                  </p>

                </article>
              ))}

            </div>

          </div>

        </section>

        {/* =================================================
            PROCESS
        ================================================= */}

        <section className="services-process">

          <div className="services-container">

            <div className="services-process-heading services-reveal">

              <p className="services-tag">
                How It Works
              </p>

              <h2 className="services-title">
                From Inspection to
                <span> Repair.</span>
              </h2>

              <p className="services-description">
                Getting your household appliance inspected and
                repaired is simple with AK Paul Electronics.
              </p>

            </div>

            <div className="services-process-grid">

              {process.map((item, index) => (
                <article
                  key={item.title}
                  className={`services-process-card services-reveal services-delay-${
                    (index % 3) + 1
                  }`}
                >

                  <div className="services-process-number">
                    {item.number}
                  </div>

                  <h3>
                    {item.title}
                  </h3>

                  <p>
                    {item.text}
                  </p>

                </article>
              ))}

            </div>

          </div>

        </section>

        {/* =================================================
            FINAL CTA
        ================================================= */}

        <section className="services-cta">

          <div className="services-container services-cta-inner">

            <div className="services-cta-content services-reveal">

              <span>
                AK PAUL ELECTRONICS
              </span>

              <h2>
                Is your AC, refrigerator or washing machine
                giving you trouble?
              </h2>

            </div>

            <div className="services-cta-buttons services-reveal services-delay-1">

              <a
                href="tel:18001234240"
                className="services-cta-button"
              >
                Call 1800 1234 240
              </a>

              <Link
                to="/contact"
                className="services-cta-button"
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

export default Services;
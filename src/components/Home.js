import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

function Home() {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleServiceEnquiry = async (event) => {
    event.preventDefault();

    if (isSubmitting) return;

    setIsSubmitting(true);

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/babupaul2121@gmail.com",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
          },
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      const result = await response.json();

      if (result.success) {
        form.reset();
        navigate("/thank-you");
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      console.error("Service enquiry error:", error);
      alert(
        "Unable to submit your enquiry right now. Please try again or call 1800 1234 240."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  /* =========================================================
     LOCAL IMAGE -> UNSPLASH FALLBACK
  ========================================================= */

  const handleImageError = (event, fallbackImage) => {
    const image = event.currentTarget;

    // Prevent infinite error loop
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
    const elements = document.querySelectorAll(".home-reveal");

    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => {
        element.classList.add("home-show");
      });

      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("home-show");
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

  /* =========================================================
     SERVICES
  ========================================================= */

  const services = [
    {
      number: "01",
      title: "AC Repair & Services",
      localImage: "/images/ac-repair.jpg",
      fallbackImage:
        "https://images.unsplash.com/photo-1631545806609-53c8e6e0f42e?auto=format&fit=crop&w=1200&q=85",
      description:
        "Looking for AC Repair or Service in Kolkata? We at AK Paul Electronics provide quality repair and services for Air Conditioners. We deal with different types and brands at affordable prices. Contact us now for inspection.",
    },

    {
      number: "02",
      title: "Fridge Repair & Services",
      localImage: "/images/fridge-repair.jpg",
      fallbackImage:
        "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?auto=format&fit=crop&w=1200&q=85",
      description:
        "Nowadays refrigerators are common household kitchen appliances. Due to power fluctuations, component problems or regular usage, your refrigerator may not work properly. We are here to inspect and help fix the problem.",
    },

    {
      number: "03",
      title: "Washing Machine Repair",
      localImage: "/images/washing-machine-repair.jpg",
      fallbackImage:
        "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&w=1200&q=85",
      description:
        "We repair and service different types and brands of washing machines. Our technicians can visit your place, inspect the appliance and provide an estimated cost before proceeding with the repair.",
    },
  ];

  /* =========================================================
     BENEFITS
  ========================================================= */

  const benefits = [
    {
      icon: "01",
      title: "Free Installation & Free Inspection",
      description:
        "Professional team available for your service requirements. We offer free inspection of your AC for different types of requirements.",
    },

    {
      icon: "02",
      title: "Quality Warranty Assured",
      description:
        "We provide quality repair and service for your household appliances with the bill and applicable warranty.",
    },

    {
      icon: "03",
      title: "Trusted By Customers",
      description:
        "Our long existence in this field is supported by the quality standards we follow while serving our customers.",
    },

    {
      icon: "04",
      title: "Affordable Cost With Estimation",
      description:
        "Get your home appliances inspected and receive an estimated repair cost before proceeding with the service.",
    },
  ];

  /* =========================================================
     TESTIMONIALS
  ========================================================= */

  const testimonials = [
    {
      name: "Ramesh",
      letter: "R",
      review:
        "Exceptional service and top-notch quality! AK Paul Electronics provided professional service and handled our requirement efficiently.",
    },

    {
      name: "Manasa Raj",
      letter: "M",
      review:
        "AK Paul Electronics exceeded our expectations. The service was professional, responsive and the entire process was handled smoothly.",
    },

    {
      name: "Raju K",
      letter: "R",
      review:
        "A dependable service experience. The team explained the requirement clearly and provided professional assistance.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>AC, Refrigerator & Washing Machine Repair in Kolkata | AK Paul Electronics</title>
        <meta
          name="description"
          content="AK Paul Electronics provides AC repair, refrigerator repair, washing machine repair and microwave repair services in Kolkata. Call toll free 1800 1234 240 for appliance service and inspection."
        />
        <meta
          name="keywords"
          content="AC repair Kolkata, AC service Kolkata, refrigerator repair Kolkata, fridge repair Kolkata, washing machine repair Kolkata, microwave repair Kolkata, appliance repair Kolkata, home appliance repair Kolkata, AK Paul Electronics"
        />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta name="author" content="AK Paul Electronics" />
        <link rel="canonical" href="https://customerserviceonline.co.in/" />

        <meta name="geo.region" content="IN-WB" />
        <meta name="geo.placename" content="Kolkata" />

        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:site_name" content="AK Paul Electronics" />
        <meta property="og:title" content="Appliance Repair Services in Kolkata | AK Paul Electronics" />
        <meta
          property="og:description"
          content="Professional AC, refrigerator, washing machine and microwave repair services in Kolkata. Toll Free: 1800 1234 240."
        />
        <meta property="og:url" content="https://customerserviceonline.co.in/" />
        <meta
          property="og:image"
          content="https://customerserviceonline.co.in/images/hero-appliance-repair.jpg"
        />
        <meta property="og:image:alt" content="AK Paul Electronics appliance repair service in Kolkata" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Appliance Repair Services in Kolkata | AK Paul Electronics" />
        <meta
          name="twitter:description"
          content="AC, refrigerator, washing machine and microwave repair services in Kolkata. Toll Free: 1800 1234 240."
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
            telephone: "18001234240",
            email: "babupaul2121@gmail.com",
            image: "https://customerserviceonline.co.in/images/hero-appliance-repair.jpg",
            description:
              "AK Paul Electronics provides AC, refrigerator, washing machine and microwave repair and service in Kolkata.",
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
              telephone: "18001234240",
              contactType: "customer service",
              areaServed: "IN",
              availableLanguage: ["English"],
            },
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Appliance Repair Services",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "AC Repair and Service",
                    areaServed: "Kolkata",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Refrigerator Repair and Service",
                    areaServed: "Kolkata",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Washing Machine Repair and Service",
                    areaServed: "Kolkata",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Microwave Repair and Service",
                    areaServed: "Kolkata",
                  },
                },
              ],
            },
          })}
        </script>
      </Helmet>

      <style>{`

        /* =====================================================
           GLOBAL HOME
        ===================================================== */

        .ak-home-page {
          width: 100%;
          overflow-x: hidden;
          background: #ffffff;
          color: #14222e;
        }

        .ak-home-page *,
        .ak-home-page *::before,
        .ak-home-page *::after {
          box-sizing: border-box;
        }

        .home-container {
          width: min(90%, 1360px);
          margin: 0 auto;
        }

        .home-section-tag {
          margin: 0 0 15px;

          display: flex;
          align-items: center;
          gap: 12px;

          color: #d7192d;

          font-size: 12px;
          font-weight: 800;

          letter-spacing: 3.5px;
          text-transform: uppercase;
        }

        .home-section-tag::before {
          content: "";

          width: 34px;
          height: 2px;

          flex-shrink: 0;

          background: #d7192d;
        }

        .home-section-title {
          margin: 0;

          color: #032e4f;

          font-size: clamp(34px, 4vw, 55px);
          font-weight: 800;

          line-height: 1.1;

          letter-spacing: -1.8px;
        }

        .home-section-title span {
          color: #d7192d;
        }

        .home-section-description {
          max-width: 680px;

          margin: 20px 0 0;

          color: #6b7882;

          font-size: 16px;
          line-height: 1.85;
        }


        /* =====================================================
           REVEAL ANIMATION
        ===================================================== */

        .home-reveal {
          opacity: 0;

          transform: translateY(45px);

          transition:
            opacity 0.8s cubic-bezier(.2,.8,.2,1),
            transform 0.8s cubic-bezier(.2,.8,.2,1);
        }

        .home-reveal.home-show {
          opacity: 1;

          transform: translateY(0);
        }

        .home-delay-1 {
          transition-delay: 0.1s;
        }

        .home-delay-2 {
          transition-delay: 0.2s;
        }

        .home-delay-3 {
          transition-delay: 0.3s;
        }


        /* =====================================================
           KEYFRAMES
        ===================================================== */

        @keyframes homeFloat {
          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes homePulse {
          0% {
            box-shadow:
              0 0 0 0 rgba(215, 25, 45, 0.4);
          }

          70% {
            box-shadow:
              0 0 0 15px rgba(215, 25, 45, 0);
          }

          100% {
            box-shadow:
              0 0 0 0 rgba(215, 25, 45, 0);
          }
        }

        @keyframes homeGridMove {
          from {
            background-position: 0 0;
          }

          to {
            background-position: 70px 70px;
          }
        }


        /* =====================================================
           COMMON BUTTON
        ===================================================== */

        .home-button {
          min-height: 58px;

          padding: 0 27px;

          display: inline-flex;
          align-items: center;
          justify-content: center;

          gap: 11px;

          border: none;
          border-radius: 6px;

          font-size: 15px;
          font-weight: 700;

          line-height: 1.3;

          text-decoration: none;
          text-align: center;

          cursor: pointer;

          transition:
            transform 0.3s ease,
            background 0.3s ease,
            color 0.3s ease,
            border-color 0.3s ease,
            box-shadow 0.3s ease;
        }

        .home-button-red {
          background: #d7192d;
          color: #ffffff;

          box-shadow:
            0 12px 30px rgba(215, 25, 45, 0.2);
        }

        .home-button-red:hover {
          transform: translateY(-3px);

          background: #b91426;

          box-shadow:
            0 17px 35px rgba(215, 25, 45, 0.28);
        }

        .home-button-outline {
          border: 1px solid rgba(255, 255, 255, 0.55);

          background: transparent;
          color: #ffffff;
        }

        .home-button-outline:hover {
          transform: translateY(-3px);

          background: #ffffff;
          color: #032e4f;

          border-color: #ffffff;
        }

        .home-button svg {
          width: 19px;
          height: 19px;

          flex-shrink: 0;

          fill: currentColor;
        }


        /* =====================================================
           HERO
        ===================================================== */

        .home-hero {
          position: relative;

          min-height: 700px;

          display: grid;
          grid-template-columns: 56% 44%;

          overflow: hidden;

          background: #032e4f;
        }

        .home-hero-content {
          position: relative;
          z-index: 3;

          min-width: 0;

          padding:
            clamp(70px, 8vw, 120px)
            clamp(35px, 6vw, 100px);

          display: flex;
          flex-direction: column;
          justify-content: center;

          background:
            radial-gradient(
              circle at 25% 25%,
              rgba(9, 94, 151, 0.42),
              transparent 45%
            ),
            linear-gradient(
              135deg,
              #022640 0%,
              #03385e 55%,
              #032e4f 100%
            );
        }

        .home-hero-content::before {
          content: "";

          position: absolute;
          inset: 0;

          z-index: -1;

          background-image:
            linear-gradient(
              rgba(255, 255, 255, 0.025) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(255, 255, 255, 0.025) 1px,
              transparent 1px
            );

          background-size: 70px 70px;

          animation:
            homeGridMove 20s linear infinite;
        }

        .home-hero-content::after {
          content: "";

          position: absolute;

          z-index: -1;

          top: -15%;
          right: -65px;

          width: 110px;
          height: 135%;

          transform: rotate(8deg);

          background:
            linear-gradient(
              180deg,
              #f02238,
              #b50e21
            );
        }

        .home-hero-tag {
          margin: 0 0 20px;

          color: #c1d4e1;

          font-size: 12px;
          font-weight: 700;

          letter-spacing: 5px;

          text-transform: uppercase;
        }

        .home-hero-title {
          max-width: 760px;

          margin: 0;

          color: #ffffff;

          font-size: clamp(47px, 5vw, 76px);
          font-weight: 800;

          line-height: 1.03;

          letter-spacing: -2.5px;
        }

        .home-hero-title span {
          display: block;

          color: #ef2237;
        }

        .home-hero-text {
          max-width: 650px;

          margin: 25px 0 0;

          color: #d0dfe8;

          font-size: clamp(15px, 1.3vw, 18px);

          line-height: 1.75;
        }

        .home-hero-buttons {
          width: 100%;

          margin-top: 34px;

          display: flex;
          align-items: stretch;
          flex-wrap: wrap;

          gap: 14px;
        }

        .home-hero-stats {
          width: 100%;

          margin-top: 55px;

          display: grid;
          grid-template-columns:
            repeat(4, minmax(0, 1fr));

          max-width: 700px;
        }

        .home-hero-stat {
          min-width: 0;

          padding: 0 20px;

          border-right:
            1px solid rgba(255, 255, 255, 0.16);
        }

        .home-hero-stat:first-child {
          padding-left: 0;
        }

        .home-hero-stat:last-child {
          border-right: none;
        }

        .home-hero-stat strong {
          display: block;

          margin-bottom: 6px;

          color: #ffffff;

          font-size: 18px;
          font-weight: 800;
        }

        .home-hero-stat span {
          display: block;

          color: #9eb6c6;

          font-size: 11px;

          line-height: 1.5;

          letter-spacing: 0.6px;
        }


        /* =====================================================
           HERO IMAGE
        ===================================================== */

        .home-hero-image {
          position: relative;

          min-width: 0;

          overflow: hidden;

          background: #dfe5e9;
        }

        .home-hero-image > img {
          position: absolute;

          width: 100%;
          height: 100%;

          inset: 0;

          display: block;

          object-fit: cover;

          transition:
            transform 7s ease;
        }

        .home-hero:hover
        .home-hero-image > img {
          transform: scale(1.06);
        }

        .home-hero-image::after {
          content: "";

          position: absolute;
          inset: 0;

          background:
            linear-gradient(
              90deg,
              rgba(3, 46, 79, 0.35),
              transparent 55%
            ),
            linear-gradient(
              0deg,
              rgba(3, 35, 58, 0.3),
              transparent 50%
            );
        }

        .home-hero-image-label {
          position: absolute;

          z-index: 4;

          top: 120px;
          left: 65px;

          padding-left: 20px;

          display: flex;
          flex-direction: column;

          gap: 12px;

          border-left: 3px solid #d7192d;

          color: #ffffff;

          font-size: 11px;
          font-weight: 800;

          letter-spacing: 4px;
        }


        /* =====================================================
           SERVICE ENQUIRY FORM
        ===================================================== */

        .home-enquiry {
          padding: 90px 0;
          background: #ffffff;
        }

        .home-enquiry-wrapper {
          width: min(90%, 1050px);
          margin: 0 auto;
          padding: clamp(30px, 5vw, 55px);
          background: #f5f7f9;
          border-top: 4px solid #d7192d;
          box-shadow: 0 18px 55px rgba(3, 46, 79, 0.09);
        }

        .home-enquiry-heading {
          max-width: 700px;
          margin: 0 auto 35px;
          text-align: center;
        }

        .home-enquiry-heading small {
          display: block;
          margin-bottom: 10px;
          color: #d7192d;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 2.5px;
          text-transform: uppercase;
        }

        .home-enquiry-heading h2 {
          margin: 0;
          color: #032e4f;
          font-size: clamp(30px, 4vw, 42px);
          line-height: 1.2;
        }

        .home-enquiry-heading p {
          margin: 14px auto 0;
          color: #72818b;
          font-size: 14px;
          line-height: 1.75;
        }

        .home-enquiry-form {
          width: 100%;
        }

        .home-enquiry-row {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 18px;
        }

        .home-enquiry-group {
          min-width: 0;
          margin-bottom: 18px;
        }

        .home-enquiry-group label {
          display: block;
          margin-bottom: 8px;
          color: #032e4f;
          font-size: 12px;
          font-weight: 800;
        }

        .home-enquiry-required {
          color: #d7192d;
        }

        .home-enquiry-group input,
        .home-enquiry-group select,
        .home-enquiry-group textarea {
          width: 100%;
          border: 1px solid #dce3e8;
          border-radius: 4px;
          outline: none;
          background: #ffffff;
          color: #172936;
          font-family: inherit;
          font-size: 14px;
          transition: border-color 0.25s ease, box-shadow 0.25s ease;
        }

        .home-enquiry-group input,
        .home-enquiry-group select {
          height: 56px;
          padding: 0 16px;
        }

        .home-enquiry-group textarea {
          min-height: 145px;
          padding: 16px;
          resize: vertical;
        }

        .home-enquiry-group input:focus,
        .home-enquiry-group select:focus,
        .home-enquiry-group textarea:focus {
          border-color: #d7192d;
          box-shadow: 0 0 0 3px rgba(215, 25, 45, 0.08);
        }

        .home-enquiry-submit {
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
          box-shadow: 0 12px 30px rgba(215, 25, 45, 0.2);
          transition: transform 0.3s ease, background 0.3s ease, box-shadow 0.3s ease;
        }

        .home-enquiry-submit:hover {
          transform: translateY(-3px);
          background: #b91426;
          box-shadow: 0 17px 35px rgba(215, 25, 45, 0.27);
        }

        .home-enquiry-submit:disabled {
          cursor: not-allowed;
          opacity: 0.75;
          transform: none;
          box-shadow: none;
        }

        .home-enquiry-submit svg {
          width: 18px;
          height: 18px;
          fill: currentColor;
        }

        /* =====================================================
           ABOUT / WELCOME
        ===================================================== */

        .home-about {
          padding: 115px 0;

          background: #ffffff;
        }

        .home-about-grid {
          display: grid;

          grid-template-columns:
            minmax(0, 0.95fr)
            minmax(0, 1.05fr);

          align-items: center;

          gap: clamp(50px, 7vw, 95px);
        }

        .home-about-image {
          position: relative;

          min-width: 0;

          min-height: 570px;
        }

        .home-about-image-main {
          position: absolute;

          top: 0;
          left: 0;

          width: 88%;
          height: 510px;

          overflow: hidden;

          border-radius: 5px;

          background: #e9eef1;
        }

        .home-about-image-main img {
          width: 100%;
          height: 100%;

          display: block;

          object-fit: cover;

          transition:
            transform 0.7s ease;
        }

        .home-about-image:hover
        .home-about-image-main img {
          transform: scale(1.05);
        }

        .home-experience {
          position: absolute;

          right: 0;
          bottom: 0;

          width: 205px;

          padding: 28px;

          background: #d7192d;
          color: #ffffff;

          box-shadow:
            0 20px 45px rgba(215, 25, 45, 0.25);

          animation:
            homeFloat 5s ease-in-out infinite;
        }

        .home-experience strong {
          display: block;

          margin-bottom: 6px;

          font-size: 48px;

          line-height: 1;
        }

        .home-experience span {
          font-size: 13px;

          line-height: 1.5;
        }

        .home-about-content {
          min-width: 0;
        }

        .home-about-content
        .home-about-paragraph {
          margin: 20px 0 0;

          color: #667680;

          font-size: 15px;

          line-height: 1.9;
        }

        .home-about-actions {
          width: 100%;

          margin-top: 30px;

          display: flex;
          flex-wrap: wrap;

          gap: 12px;
        }


        /* =====================================================
           SERVICES
        ===================================================== */

        .home-services {
          padding: 110px 0;

          background: #f5f7f9;
        }

        .home-services-heading {
          max-width: 760px;

          margin: 0 auto 55px;

          text-align: center;
        }

        .home-services-heading
        .home-section-tag {
          justify-content: center;
        }

        .home-services-heading
        .home-section-tag::before {
          display: none;
        }

        .home-services-heading
        .home-section-description {
          margin-left: auto;
          margin-right: auto;
        }

        .home-services-grid {
          display: grid;

          grid-template-columns:
            repeat(3, minmax(0, 1fr));

          gap: 28px;
        }

        .home-service-card {
          min-width: 0;

          overflow: hidden;

          background: #ffffff;

          border-radius: 5px;

          box-shadow:
            0 12px 35px rgba(3, 46, 79, 0.07);

          transition:
            transform 0.4s ease,
            box-shadow 0.4s ease;
        }

        .home-service-card:hover {
          transform: translateY(-10px);

          box-shadow:
            0 22px 50px rgba(3, 46, 79, 0.13);
        }

        .home-service-image {
          position: relative;

          height: 245px;

          overflow: hidden;

          background: #e9eef1;
        }

        .home-service-image img {
          width: 100%;
          height: 100%;

          display: block;

          object-fit: cover;

          transition:
            transform 0.7s ease;
        }

        .home-service-card:hover
        .home-service-image img {
          transform: scale(1.08);
        }

        .home-service-image::after {
          content: "";

          position: absolute;
          inset: 0;

          background:
            linear-gradient(
              0deg,
              rgba(3, 46, 79, 0.4),
              transparent 60%
            );
        }

        .home-service-number {
          position: absolute;

          z-index: 3;

          right: 20px;
          bottom: -26px;

          width: 56px;
          height: 56px;

          display: flex;
          align-items: center;
          justify-content: center;

          background: #d7192d;
          color: #ffffff;

          font-size: 13px;
          font-weight: 800;

          box-shadow:
            0 8px 20px rgba(215, 25, 45, 0.25);
        }

        .home-service-content {
          padding: 40px 30px 32px;
        }

        .home-service-content h3 {
          margin: 0 0 15px;

          color: #032e4f;

          font-size: 22px;

          line-height: 1.3;
        }

        .home-service-content p {
          margin: 0;

          min-height: 155px;

          color: #687680;

          font-size: 14px;

          line-height: 1.8;
        }

        .home-service-call {
          margin-top: 25px;

          display: inline-flex;
          align-items: center;

          gap: 8px;

          color: #d7192d;

          text-decoration: none;

          font-size: 14px;
          font-weight: 800;
        }

        .home-service-call span {
          transition:
            transform 0.3s ease;
        }

        .home-service-call:hover span {
          transform: translateX(5px);
        }


        /* =====================================================
           WHY CHOOSE US
        ===================================================== */

        .home-why {
          padding: 115px 0;

          background: #ffffff;
        }

        .home-why-grid {
          display: grid;

          grid-template-columns:
            minmax(0, 0.9fr)
            minmax(0, 1.1fr);

          align-items: center;

          gap: clamp(50px, 7vw, 90px);
        }

        .home-why-image {
          position: relative;

          min-width: 0;

          height: 620px;

          overflow: hidden;

          border-radius: 5px;

          background: #e9eef1;
        }

        .home-why-image img {
          width: 100%;
          height: 100%;

          display: block;

          object-fit: cover;

          transition:
            transform 0.8s ease;
        }

        .home-why-image:hover img {
          transform: scale(1.05);
        }

        .home-why-image::after {
          content: "";

          position: absolute;
          inset: 0;

          background:
            linear-gradient(
              0deg,
              rgba(3, 46, 79, 0.4),
              transparent 55%
            );
        }

        .home-why-badge {
          position: absolute;

          z-index: 3;

          left: 28px;
          right: 28px;
          bottom: 28px;

          max-width: 310px;

          padding: 20px 22px;

          background: #ffffff;
          color: #032e4f;

          border-left: 4px solid #d7192d;

          font-size: 14px;
          font-weight: 800;

          line-height: 1.5;
        }

        .home-why-content {
          min-width: 0;
        }

        .home-benefits-grid {
          margin-top: 38px;

          display: grid;

          grid-template-columns:
            repeat(2, minmax(0, 1fr));

          gap: 18px;
        }

        .home-benefit-card {
          min-width: 0;

          padding: 25px;

          background: #f5f7f9;

          border-bottom: 3px solid transparent;

          transition:
            transform 0.3s ease,
            background 0.3s ease,
            box-shadow 0.3s ease,
            border-color 0.3s ease;
        }

        .home-benefit-card:hover {
          transform: translateY(-5px);

          background: #ffffff;

          border-color: #d7192d;

          box-shadow:
            0 15px 35px rgba(3, 46, 79, 0.08);
        }

        .home-benefit-number {
          display: inline-flex;

          margin-bottom: 14px;

          color: #d7192d;

          font-size: 12px;
          font-weight: 800;
        }

        .home-benefit-card h3 {
          margin: 0 0 10px;

          color: #032e4f;

          font-size: 17px;

          line-height: 1.4;
        }

        .home-benefit-card p {
          margin: 0;

          color: #71808a;

          font-size: 13px;

          line-height: 1.75;
        }


        /* =====================================================
           DARK CTA
        ===================================================== */

        .home-dark-cta {
          position: relative;

          overflow: hidden;

          padding: 90px 0;

          background:
            linear-gradient(
              100deg,
              #022640 0%,
              #033b63 100%
            );
        }

        .home-dark-cta::before {
          content: "";

          position: absolute;

          top: -150px;
          right: 12%;

          width: 100px;
          height: 500px;

          transform: rotate(25deg);

          background: #d7192d;

          opacity: 0.85;
        }

        .home-dark-cta-inner {
          position: relative;

          z-index: 2;

          display: flex;
          align-items: center;
          justify-content: space-between;

          gap: 50px;
        }

        .home-dark-cta-text {
          min-width: 0;

          max-width: 750px;
        }

        .home-dark-cta-text span {
          color: #ef3346;

          font-size: 11px;
          font-weight: 800;

          letter-spacing: 4px;
        }

        .home-dark-cta-text h2 {
          margin: 13px 0 0;

          color: #ffffff;

          font-size: clamp(33px, 4vw, 51px);

          line-height: 1.15;
        }

        .home-dark-call {
          min-width: 235px;
          min-height: 68px;

          padding: 0 25px;

          flex-shrink: 0;

          display: inline-flex;
          align-items: center;
          justify-content: center;

          gap: 10px;

          border-radius: 5px;

          background: #d7192d;
          color: #ffffff;

          text-decoration: none;

          font-size: 18px;
          font-weight: 800;

          transition:
            transform 0.3s ease,
            background 0.3s ease,
            color 0.3s ease;
        }

        .home-dark-call:hover {
          transform: translateY(-4px);

          background: #ffffff;
          color: #032e4f;
        }


        /* =====================================================
           TESTIMONIALS
        ===================================================== */

        .home-testimonials {
          padding: 115px 0;

          background: #f5f7f9;
        }

        .home-testimonials-heading {
          max-width: 720px;

          margin: 0 auto 55px;

          text-align: center;
        }

        .home-testimonials-heading
        .home-section-tag {
          justify-content: center;
        }

        .home-testimonials-heading
        .home-section-tag::before {
          display: none;
        }

        .home-testimonials-heading
        .home-section-description {
          margin-left: auto;
          margin-right: auto;
        }

        .home-testimonials-grid {
          display: grid;

          grid-template-columns:
            repeat(3, minmax(0, 1fr));

          gap: 25px;
        }

        .home-testimonial {
          min-width: 0;

          padding: 38px 32px;

          background: #ffffff;

          border-radius: 5px;

          box-shadow:
            0 10px 35px rgba(3, 46, 79, 0.06);

          transition:
            transform 0.4s ease,
            box-shadow 0.4s ease;
        }

        .home-testimonial:hover {
          transform: translateY(-8px);

          box-shadow:
            0 20px 45px rgba(3, 46, 79, 0.12);
        }

        .home-testimonial-quote {
          height: 42px;

          color: #d7192d;

          font-family: Georgia, serif;
          font-size: 65px;

          line-height: 0.8;
        }

        .home-testimonial-stars {
          margin: 12px 0 18px;

          color: #d7192d;

          font-size: 13px;

          letter-spacing: 3px;
        }

        .home-testimonial-review {
          margin: 0;

          min-height: 120px;

          color: #687680;

          font-size: 14px;

          line-height: 1.85;
        }

        .home-client {
          margin-top: 24px;
          padding-top: 20px;

          display: flex;
          align-items: center;

          gap: 13px;

          border-top: 1px solid #edf0f2;
        }

        .home-client-avatar {
          width: 48px;
          height: 48px;

          flex-shrink: 0;

          display: flex;
          align-items: center;
          justify-content: center;

          border-radius: 50%;

          background: #032e4f;
          color: #ffffff;

          font-weight: 800;
        }

        .home-client-info {
          min-width: 0;
        }

        .home-client-info strong {
          display: block;

          color: #032e4f;

          font-size: 15px;
        }

        .home-client-info span {
          display: block;

          margin-top: 3px;

          color: #9aa5ad;

          font-size: 12px;
        }


        /* =====================================================
           FINAL CTA
        ===================================================== */

        .home-final-cta {
          padding: 80px 0;

          background: #d7192d;
        }

        .home-final-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;

          gap: 45px;
        }

        .home-final-text {
          min-width: 0;
        }

        .home-final-text span {
          color: #ffffff;

          font-size: 11px;
          font-weight: 800;

          letter-spacing: 4px;
        }

        .home-final-text h2 {
          margin: 10px 0 0;

          color: #ffffff;

          font-size: clamp(30px, 4vw, 45px);

          line-height: 1.2;
        }

        .home-final-buttons {
          flex-shrink: 0;

          display: flex;
          flex-wrap: wrap;

          gap: 12px;
        }

        .home-final-button {
          min-height: 56px;

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

        .home-final-button:hover {
          transform: translateY(-3px);

          background: #032e4f;
          color: #ffffff;
        }


        /* =====================================================
           LAPTOP
        ===================================================== */

        @media (max-width: 1150px) {

          .home-hero {
            grid-template-columns: 60% 40%;
          }

          .home-hero-content {
            padding-left: 5%;
            padding-right: 5%;
          }

          .home-hero-title {
            font-size: clamp(47px, 5.5vw, 65px);
          }

          .home-services-grid {
            gap: 20px;
          }

          .home-service-content {
            padding-left: 24px;
            padding-right: 24px;
          }

        }


        /* =====================================================
           TABLET
        ===================================================== */

        @media (max-width: 900px) {

          .home-container {
            width: 90%;
          }

          /* HERO */

          .home-hero {
            display: flex;
            flex-direction: column;

            min-height: auto;
          }

          .home-hero-content {
            width: 100%;

            min-height: 620px;

            padding:
              80px 6%
              70px;
          }

          .home-hero-content::after {
            display: none;
          }

          .home-hero-image {
            width: 100%;
            height: 470px;
          }

          .home-hero-image > img {
            position: absolute;
          }

          /* INTRO */

          .home-intro-inner {
            grid-template-columns: 1fr;

            gap: 22px;

            padding: 30px 0;
          }

          .home-intro-phone {
            width: fit-content;

            padding: 0;

            border: none;
          }

          /* ABOUT */

          .home-about,
          .home-services,
          .home-why,
          .home-testimonials {
            padding: 85px 0;
          }

          .home-about-grid {
            grid-template-columns: 1fr;

            gap: 55px;
          }

          .home-about-image {
            width: 100%;

            max-width: 650px;

            margin: 0 auto;
          }

          /* SERVICES */

          .home-services-grid {
            grid-template-columns:
              repeat(2, minmax(0, 1fr));
          }

          .home-service-card:last-child {
            grid-column: 1 / -1;

            width: calc(50% - 10px);

            justify-self: center;
          }

          /* WHY */

          .home-why-grid {
            grid-template-columns: 1fr;
          }

          .home-why-image {
            max-width: 650px;

            width: 100%;

            margin: 0 auto;

            height: 540px;
          }

          /* CTA */

          .home-dark-cta-inner {
            flex-direction: column;
            align-items: flex-start;
          }

          /* TESTIMONIALS */

          .home-testimonials-grid {
            grid-template-columns: 1fr;
          }

          .home-testimonial-review {
            min-height: auto;
          }

          /* FINAL CTA */

          .home-final-inner {
            flex-direction: column;
            align-items: flex-start;
          }

          .home-final-buttons {
            width: 100%;
          }

        }


        /* =====================================================
           MOBILE
        ===================================================== */

        @media (max-width: 600px) {

          .home-container {
            width: 90%;
          }

          .home-section-tag {
            font-size: 10px;

            letter-spacing: 2.5px;
          }

          .home-section-title {
            font-size: 34px;

            letter-spacing: -1px;
          }

          .home-section-description {
            font-size: 14px;
          }

          /* HERO */

          .home-hero-content {
            min-height: auto;

            padding:
              65px 5%
              60px;
          }

          .home-hero-tag {
            font-size: 10px;

            letter-spacing: 3.5px;
          }

          .home-hero-title {
            font-size: clamp(40px, 12vw, 52px);

            letter-spacing: -1.5px;
          }

          .home-hero-text {
            font-size: 15px;
          }

          .home-hero-buttons {
            flex-direction: column;
          }

          .home-hero-buttons
          .home-button {
            width: 100%;

            min-height: 56px;

            padding: 14px 18px;
          }

          .home-hero-stats {
            grid-template-columns:
              repeat(2, minmax(0, 1fr));

            gap: 25px 15px;

            margin-top: 45px;
          }

          .home-hero-stat,
          .home-hero-stat:first-child {
            padding: 0;

            border: none;
          }

          .home-hero-image {
            height: 350px;
          }

          .home-hero-image-label {
            top: 35px;
            left: 25px;

            font-size: 9px;

            letter-spacing: 3px;
          }

          /* INTRO */

          .home-intro-inner {
            min-height: auto;
          }

          .home-intro-text h2 {
            font-size: 21px;
          }

          .home-intro-phone {
            width: 100%;

            font-size: 18px;

            white-space: normal;
          }

          .home-phone-circle {
            width: 45px;
            height: 45px;
          }

          /* SERVICE ENQUIRY */

          .home-enquiry {
            padding: 60px 0;
          }

          .home-enquiry-wrapper {
            width: 90%;
            padding: 30px 20px;
          }

          .home-enquiry-row {
            grid-template-columns: 1fr;
            gap: 0;
          }

          .home-enquiry-group input,
          .home-enquiry-group select {
            height: 54px;
          }

          .home-enquiry-submit {
            min-height: 56px;
            padding: 14px 18px;
          }

          /* ABOUT */

          .home-about,
          .home-services,
          .home-why,
          .home-testimonials {
            padding: 70px 0;
          }

          .home-about-image {
            min-height: 420px;
          }

          .home-about-image-main {
            width: 100%;
            height: 370px;
          }

          .home-experience {
            right: 12px;

            width: 170px;

            padding: 21px;
          }

          .home-experience strong {
            font-size: 38px;
          }

          .home-about-content
          .home-about-paragraph {
            font-size: 14px;
          }

          .home-about-actions {
            flex-direction: column;
          }

          .home-about-actions
          .home-button {
            width: 100%;

            min-height: 55px;

            padding: 14px 18px;
          }

          /* SERVICES */

          .home-services-heading {
            margin-bottom: 40px;
          }

          .home-services-grid {
            grid-template-columns: 1fr;
          }

          .home-service-card:last-child {
            grid-column: auto;

            width: 100%;
          }

          .home-service-image {
            height: 225px;
          }

          .home-service-content {
            padding:
              38px 22px
              28px;
          }

          .home-service-content h3 {
            font-size: 20px;
          }

          .home-service-content p {
            min-height: auto;

            font-size: 13px;
          }

          .home-service-call {
            width: 100%;

            min-height: 50px;

            padding: 0 18px;

            justify-content: center;

            border-radius: 5px;

            background: #d7192d;
            color: #ffffff;
          }

          /* WHY */

          .home-why-image {
            height: 400px;
          }

          .home-why-badge {
            left: 15px;
            right: 15px;
            bottom: 15px;

            max-width: none;

            padding: 17px;
          }

          .home-benefits-grid {
            grid-template-columns: 1fr;
          }

          .home-benefit-card {
            padding: 22px;
          }

          /* DARK CTA */

          .home-dark-cta {
            padding: 70px 0;
          }

          .home-dark-cta::before {
            opacity: 0.25;
          }

          .home-dark-call {
            width: 100%;

            min-width: 0;

            min-height: 58px;

            padding: 14px 18px;

            text-align: center;
          }

          /* TESTIMONIAL */

          .home-testimonial {
            padding: 32px 24px;
          }

          /* FINAL */

          .home-final-cta {
            padding: 65px 0;
          }

          .home-final-buttons {
            flex-direction: column;
          }

          .home-final-button {
            width: 100%;

            min-height: 55px;

            padding: 14px 18px;
          }

        }


        /* =====================================================
           VERY SMALL MOBILE
        ===================================================== */

        @media (max-width: 380px) {

          .home-hero-title {
            font-size: 37px;
          }

          .home-hero-stats {
            grid-template-columns: 1fr 1fr;
          }

          .home-about-image {
            min-height: 375px;
          }

          .home-about-image-main {
            height: 330px;
          }

          .home-experience {
            width: 155px;
          }

          .home-why-image {
            height: 350px;
          }

        }


        /* =====================================================
           REDUCED MOTION
        ===================================================== */

        @media (prefers-reduced-motion: reduce) {

          .home-reveal {
            opacity: 1;

            transform: none;

            transition: none;
          }

          .home-hero-content::before,
          .home-experience,
          .home-phone-circle {
            animation: none;
          }

        }

      `}</style>

      <main className="ak-home-page">

        {/* =================================================
            HERO
        ================================================= */}

        <section className="home-hero">

          <div className="home-hero-content">

            <p className="home-hero-tag">
              AK PAUL ELECTRONICS
            </p>

            <h1 className="home-hero-title">
  Reliable Home Appliance
  <span>
    Repair in Kolkata.
  </span>
</h1>

            <p className="home-hero-text">
              AC Repair | Washing Machine Repair |
              Refrigerator Repair at affordable prices in
              Kolkata. Professional repair and service for
              your essential household appliances.
            </p>


            <div className="home-hero-buttons">

              <a
                href="tel:18001234240"
                className="home-button home-button-red"
              >

                <svg viewBox="0 0 24 24">
                  <path d="M6.62 10.79a15.46 15.46 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1.02l-2.2 2.2Z" />
                </svg>

                Call 1800 1234 240

              </a>


              <Link
                to="/contact"
                className="home-button home-button-outline"
              >
                Contact Us
                <span>→</span>
              </Link>

            </div>


            <div className="home-hero-stats">

              <div className="home-hero-stat">
                <strong>15+</strong>
                <span>Years Experience</span>
              </div>

              <div className="home-hero-stat">
                <strong>Free</strong>
                <span>Inspection</span>
              </div>

              <div className="home-hero-stat">
                <strong>Quality</strong>
                <span>Spare Parts</span>
              </div>

              <div className="home-hero-stat">
                <strong>Kolkata</strong>
                <span>Service Area</span>
              </div>

            </div>

          </div>


          {/* HERO IMAGE */}

          <div className="home-hero-image">

            <img
              src="/images/hero-appliance-repair.jpg"
              alt="AK Paul Electronics appliance repair"
              onError={(event) =>
                handleImageError(
                  event,
                  "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1600&q=85"
                )
              }
            />

            <div className="home-hero-image-label">
              <span>PROFESSIONAL</span>
              <span>RELIABLE</span>
              <span>AFFORDABLE</span>
            </div>

          </div>

        </section>


        {/* =================================================
            SERVICE ENQUIRY
        ================================================= */}

        <section className="home-enquiry">

          <div className="home-enquiry-wrapper home-reveal">

            <div className="home-enquiry-heading">

              <small>
                Service Enquiry
              </small>

              <h2>
                Request a Service
              </h2>

              <p>
                Fill in your details and tell us which appliance needs
                repair. Your enquiry will be sent directly to our service
                team.
              </p>

            </div>

            <form
              className="home-enquiry-form"
              onSubmit={handleServiceEnquiry}
            >

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
                name="_autoresponse"
                value="Thank you for contacting AK Paul Electronics. We have received your service enquiry and our team will contact you soon."
              />

              <div className="home-enquiry-row">

                <div className="home-enquiry-group">
                  <label htmlFor="home-name">
                    Your Name <span className="home-enquiry-required">*</span>
                  </label>

                  <input
                    id="home-name"
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <div className="home-enquiry-group">
                  <label htmlFor="home-phone">
                    Phone Number <span className="home-enquiry-required">*</span>
                  </label>

                  <input
                    id="home-phone"
                    type="tel"
                    name="phone"
                    placeholder="Enter phone number"
                    pattern="[0-9+ ]{10,15}"
                    required
                  />
                </div>

              </div>

              <div className="home-enquiry-group">
                <label htmlFor="home-email">
                  Email Address
                </label>

                <input
                  id="home-email"
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                />
              </div>

              <div className="home-enquiry-group">
                <label htmlFor="home-service">
                  Select Service <span className="home-enquiry-required">*</span>
                </label>

                <select
                  id="home-service"
                  name="service"
                  defaultValue=""
                  required
                >
                  <option value="" disabled>
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

              <div className="home-enquiry-group">
                <label htmlFor="home-message">
                  Describe the Problem <span className="home-enquiry-required">*</span>
                </label>

                <textarea
                  id="home-message"
                  name="message"
                  placeholder="Example: My AC is running but not cooling properly..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="home-enquiry-submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending Enquiry..." : "Send Service Enquiry"}

                {!isSubmitting && (
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M2.01 21 23 12 2.01 3 2 10l15 2-15 2 .01 7Z" />
                  </svg>
                )}
              </button>

            </form>

          </div>

        </section>


        {/* =================================================
            ABOUT
        ================================================= */}

        <section className="home-about">

          <div className="home-container home-about-grid">

            <div className="home-about-image home-reveal">

              <div className="home-about-image-main">

                <img
                  src="/images/about-technician.jpg"
                  alt="AK Paul Electronics technician"
                  onError={(event) =>
                    handleImageError(
                      event,
                      "https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=1200&q=85"
                    )
                  }
                />

              </div>


              <div className="home-experience">

                <strong>
                  15+
                </strong>

                <span>
                  Years of Technical Experience
                </span>

              </div>

            </div>


            <div className="home-about-content home-reveal home-delay-1">

              <p className="home-section-tag">
                About Us
              </p>



              <p className="home-section-description">
                If you are looking for AC, Refrigerator or
                Washing Machine Repair and Services in and
                around Kolkata, then you are at the right
                place.
              </p>


              <p className="home-about-paragraph">
                We at AK Paul Electronics provide quality
                repair and service for different types and
                brands of ACs, refrigerators and washing
                machines. Our skilled technicians have 15+
                years of experience.
              </p>


              <p className="home-about-paragraph">
                Just give us a call to inspect your household
                appliance and we will give you an estimated
                quote which you can compare with other service
                providers. We provide quality spare parts with
                the bill.
              </p>


              <p className="home-about-paragraph">
                If your AC, Refrigerator or Washing Machine is
                troubling you, contact AK Paul Electronics
                today.
              </p>


              <div className="home-about-actions">

                <a
                  href="tel:18001234240"
                  className="home-button home-button-red"
                >

                  <svg viewBox="0 0 24 24">
                    <path d="M6.62 10.79a15.46 15.46 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1.02l-2.2 2.2Z" />
                  </svg>

                  Call 1800 1234 240

                </a>


                <Link
                  to="/contact"
                  className="home-button"
                  style={{
                    border: "1px solid #032e4f",
                    color: "#032e4f",
                  }}
                >
                  Contact Us →
                </Link>

              </div>

            </div>

          </div>

        </section>


        {/* =================================================
            SERVICES
        ================================================= */}

        <section className="home-services">

          <div className="home-container">

            <div className="home-services-heading home-reveal">

              <p className="home-section-tag">
                We Are Expert In
              </p>

              <h2 className="home-section-title">
                Our
                <span> Services</span>
              </h2>

              <p className="home-section-description">
                Professional repair and maintenance services
                for your essential household appliances in
                Kolkata.
              </p>

            </div>


            <div className="home-services-grid">

              {services.map((service, index) => (

                <article
                  className={`home-service-card home-reveal home-delay-${
                    index + 1
                  }`}
                  key={service.title}
                >

                  <div className="home-service-image">

                    {/* 
                       LOCAL IMAGE FIRST
                       UNSPLASH ONLY IF LOCAL IMAGE FAILS
                    */}

                    <img
                      src={service.localImage}
                      alt={service.title}
                      onError={(event) =>
                        handleImageError(
                          event,
                          service.fallbackImage
                        )
                      }
                    />

                    <span className="home-service-number">
                      {service.number}
                    </span>

                  </div>


                  <div className="home-service-content">

                    <h3>
                      {service.title}
                    </h3>

                    <p>
                      {service.description}
                    </p>


                    <a
                      href="tel:18001234240"
                      className="home-service-call"
                    >
                      Call 1800 1234 240
                      <span>→</span>
                    </a>

                  </div>

                </article>

              ))}

            </div>

          </div>

        </section>


        {/* =================================================
            WHY CHOOSE US
        ================================================= */}

        <section className="home-why">

          <div className="home-container home-why-grid">

            <div className="home-why-image home-reveal">

              <img
                src="/images/hero-appliance-repair.jpg"
                alt="Professional appliance repair service"
                onError={(event) =>
                  handleImageError(
                    event,
                    "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=85"
                  )
                }
              />


              <div className="home-why-badge">
                Professional Household Appliance
                Repair & Service
              </div>

            </div>


            <div className="home-why-content">

              <div className="home-reveal">

                <p className="home-section-tag">
                  Why Choose Us
                </p>

                <h2 className="home-section-title">
                  Service Built Around
                  <span>
                    {" "}Quality & Trust.
                  </span>
                </h2>

                <p className="home-section-description">
                  From inspection to repair, we focus on
                  quality service, clear communication and
                  affordable solutions for your household
                  appliances.
                </p>

              </div>


              <div className="home-benefits-grid">

                {benefits.map((benefit, index) => (

                  <article
                    className={`home-benefit-card home-reveal home-delay-${
                      (index % 3) + 1
                    }`}
                    key={benefit.title}
                  >

                    <span className="home-benefit-number">
                      {benefit.icon}
                    </span>

                    <h3>
                      {benefit.title}
                    </h3>

                    <p>
                      {benefit.description}
                    </p>

                  </article>

                ))}

              </div>

            </div>

          </div>

        </section>


        {/* =================================================
            CALL CTA
        ================================================= */}

        <section className="home-dark-cta">

          <div className="home-container home-dark-cta-inner">

            <div className="home-dark-cta-text home-reveal">

              <span>
                NEED APPLIANCE REPAIR?
              </span>

              <h2>
                Get your household appliance inspected by
                our experienced service team.
              </h2>

            </div>


            <a
              href="tel:18001234240"
              className="home-dark-call home-reveal home-delay-1"
            >
              Call 1800 1234 240
            </a>

          </div>

        </section>


        {/* =================================================
            TESTIMONIALS
        ================================================= */}

        <section className="home-testimonials">

          <div className="home-container">

            <div className="home-testimonials-heading home-reveal">

              <p className="home-section-tag">
                What Our Client Says
              </p>

              <h2 className="home-section-title">
                Customer
                <span> Testimonials</span>
              </h2>

              <p className="home-section-description">
                See what customers say about their experience
                with AK Paul Electronics.
              </p>

            </div>


            <div className="home-testimonials-grid">

              {testimonials.map((testimonial, index) => (

                <article
                  className={`home-testimonial home-reveal home-delay-${
                    index + 1
                  }`}
                  key={testimonial.name}
                >

                  <div className="home-testimonial-quote">
                    “
                  </div>

                  <div className="home-testimonial-stars">
                    ★★★★★
                  </div>


                  <p className="home-testimonial-review">
                    {testimonial.review}
                  </p>


                  <div className="home-client">

                    <div className="home-client-avatar">
                      {testimonial.letter}
                    </div>


                    <div className="home-client-info">

                      <strong>
                        {testimonial.name}
                      </strong>

                      <span>
                        Customer
                      </span>

                    </div>

                  </div>

                </article>

              ))}

            </div>

          </div>

        </section>


        {/* =================================================
            FINAL CTA
        ================================================= */}

        <section className="home-final-cta">

          <div className="home-container home-final-inner">

            <div className="home-final-text home-reveal">

              <span>
                AK PAUL ELECTRONICS
              </span>

              <h2>
                Is your home appliance troubling you?
              </h2>

            </div>


            <div className="home-final-buttons home-reveal home-delay-1">

              <a
                href="tel:18001234240"
                className="home-final-button"
              >
                Call 1800 1234 240
              </a>

              <Link
                to="/contact"
                className="home-final-button"
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

export default Home;
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

const services = [
  {
    number: "01",
    title: "AC Repair & Services",
    image: "/images/acrepaot.png",
    description:
      "Professional AC inspection, cooling diagnosis, gas charging, servicing and repair support in Kolkata.",
  },
  {
    number: "02",
    title: "Refrigerator Repair & Services",
    image: "/images/fridge-repair.jpg",
    description:
      "Professional refrigerator repair for cooling problems, excessive ice, unusual noise and other common issues.",
  },
  {
    number: "03",
    title: "Washing Machine Repair",
    image: "/images/washing-machine-repair.jpg",
    description:
      "Washing machine repair for drainage, spinning, leakage, vibration, noise and other common problems.",
  },
  {
    number: "04",
    title: "Microwave Repair & Services",
    image: "/images/microwave-repair.jpg",
    description:
      "Professional microwave inspection and servicing for heating, electrical and operational problems.",
  },
];

const problemData = {
  refrigerator: {
    title: "Refrigerator Common Problems",
    items: [
      "Refrigerator not cooling",
      "Refrigerator shuts off",
      "Light works but refrigerator is not cooling",
      "Refrigerator runs too long but does not cool properly",
      "Moisture forms on outside of refrigerator",
      "Moisture forms inside refrigerator",
      "Refrigerator making noise or vibrating",
      "Refrigerator door does not close properly",
      "Inside light not working",
      "Door alarm always making sound",
      "Ice formation in refrigerator compartment",
      "Does not make ice in freezer",
      "Freezer is cold but refrigerator compartment is warm",
      "Excess ice formation in freezer",
    ],
  },

  window: {
    title: "Window AC Common Problems",
    items: [
      "AC unit does not start",
      "AC running but no cooling effect",
      "Water dripping from the unit",
      "AC making noise or vibrating",
      "Gas leak in the unit",
      "Compressor does not start",
      "AC airflow problem",
      "AC remote not working",
    ],
  },

  split: {
    title: "Split AC Common Problems",
    items: [
      "AC running without cooling effect",
      "AC does not start",
      "AC automatically switches off",
      "AC display does not show digits",
      "Unit making noise or vibrating",
      "Noisy fan operation",
      "Water dripping from AC",
      "AC not cooling properly",
      "Ice formation in indoor unit",
      "Swing does not work",
      "Compressor switches off too quickly",
      "Gas leak in the unit",
      "AC remote not working",
    ],
  },

  washing: {
    title: "Washing Machine Common Problems",
    items: [
      "Washer does not work",
      "Washer does not spin or dry",
      "Washer does not drain",
      "Washer lid or door lock not working",
      "Washer making noise or vibrating",
      "Poor drainage",
      "Water leakage inside the washer",
      "Washer stops in middle of cycle",
      "Buzzer not working",
      "Making noise while washing",
      "Making noise while spinning",
      "Panel / PCB / buttons not working",
      "Washer automatically drains water",
      "Water flow will not stop",
      "Water will not enter washer tub",
    ],
  },
};

function Home() {
  const [problemTab, setProblemTab] = useState("refrigerator");

  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
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

  const bookNow = () => {
    document.getElementById("book-service")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const handleImageError = (event, fallback) => {
    if (event.currentTarget.dataset.fallback) return;

    event.currentTarget.dataset.fallback = "true";
    event.currentTarget.src = fallback;
  };

  return (
    <>
      <Helmet>
        <title>
          AC, Refrigerator & Washing Machine Repair in Kolkata | AK Paul
          Electronics
        </title>

        <meta
          name="description"
          content="AK Paul Electronics provides AC repair, refrigerator repair, washing machine repair and microwave repair services in Kolkata. Book appliance repair online or call 1800 1234 042."
        />

        <meta
          name="keywords"
          content="AC repair Kolkata, refrigerator repair Kolkata, washing machine repair Kolkata, microwave repair Kolkata, appliance repair Kolkata"
        />

        <meta name="robots" content="index, follow" />

        <meta name="geo.region" content="IN-WB" />
        <meta name="geo.placename" content="Kolkata" />

        <link
          rel="canonical"
          href="https://customerserviceonline.co.in/"
        />

        <meta
          property="og:title"
          content="AK Paul Electronics | Appliance Repair Kolkata"
        />

        <meta
          property="og:description"
          content="Professional AC, refrigerator, washing machine and microwave repair services in Kolkata."
        />

        <meta
          property="og:url"
          content="https://customerserviceonline.co.in/"
        />

        <meta property="og:type" content="website" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "AK Paul Electronics",
            url: "https://customerserviceonline.co.in/",
            telephone: "18001234042",
            email: "info@customerserviceonline.co.in",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Kolkata",
              addressRegion: "West Bengal",
              addressCountry: "IN",
            },
            areaServed: {
              "@type": "City",
              name: "Kolkata",
            },
          })}
        </script>
      </Helmet>

      {/* =====================================================
          BOOK SERVICE - FIRST SECTION
      ===================================================== */}

      <section id="book-service" className="booking">
        <div className="booking-container">
          <div className="booking-heading reveal">
            <span>ONLINE SERVICE BOOKING</span>

            <h1>Book Your Appliance Repair Service, It's easy !</h1>

            <p>
              Submit your appliance details and our support team will contact
              you for confirmation.
            </p>
          </div>

          <div className="booking-steps reveal">
            <div className="booking-step">
              <span>1</span>
              <strong>Select Your Product</strong>
            </div>

            <div className="booking-step">
              <span>2</span>
              <strong>Select Warranty, Yes/No</strong>
            </div>

            <div className="booking-step">
              <span>3</span>
              <strong>Enter Your Address</strong>
            </div>

            <div className="booking-step">
              <span>4</span>
              <strong>Complaint Launch</strong>
            </div>
          </div>

          <div className="booking-grid">
            <div className="booking-form-box reveal">
              <div className="booking-form-title">
                <span>✎</span>
                MAKE A SERVICE REQUEST
              </div>

              <form
                className="booking-form"
                action="https://formsubmit.co/babupaul2121@gmail.com"
                method="POST"
              >
                <input
                  type="hidden"
                  name="_subject"
                  value="New Appliance Repair Service Request - AK Paul Electronics"
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

                {/* After successful submit redirect to home */}
                <input
                  type="hidden"
                  name="_next"
                  value="https://customerserviceonline.co.in/thank-you"
                />

                <input
                  type="hidden"
                  name="_autoresponse"
                  value="Thank you for contacting AK Paul Electronics. We have received your service request. Our team will contact you shortly."
                />

                <div className="form-row first-form-row">
                  <div className="field">
                    <label>Product Type</label>

                    <select
                      name="Product Type"
                      defaultValue=""
                      required
                    >
                      <option value="" disabled>
                        --Select--
                      </option>

                      <option value="AC">AC</option>

                      <option value="Refrigerator">
                        Refrigerator
                      </option>

                      <option value="Washing Machine">
                        Washing Machine
                      </option>

                      <option value="Microwave">
                        Microwave
                      </option>
                    </select>
                  </div>

                  <div className="field">
                    <label>Under Warranty</label>

                    <select
                      name="Under Warranty"
                      defaultValue=""
                      required
                    >
                      <option value="" disabled>
                        --Select--
                      </option>

                      <option value="Yes">Yes</option>

                      <option value="No">No</option>
                    </select>
                  </div>
                </div>

                <div className="form-row">
                  <div className="field">
                    <label>Name</label>

                    <input
                      type="text"
                      name="Name"
                      placeholder="Name"
                      required
                    />
                  </div>

                  <div className="field">
                    <label>Phone Number</label>

                    <input
                      type="tel"
                      name="Phone Number"
                      placeholder="Phone Number"
                      pattern="[0-9+ ]{10,15}"
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="field">
                    <label>Email</label>

                    <input
                      type="email"
                      name="Email"
                      placeholder="Email"
                    />
                  </div>

                  <div className="field">
                    <label>Pincode</label>

                    <input
                      type="text"
                      name="Pincode"
                      placeholder="Pincode"
                      inputMode="numeric"
                      pattern="[0-9]{6}"
                      maxLength="6"
                      required
                    />
                  </div>
                </div>

                <div className="field">
                  <label>Address</label>

                  <input
                    type="text"
                    name="Address"
                    placeholder="Enter your complete address"
                    required
                  />
                </div>

                <div className="field">
                  <label>Message</label>

                  <textarea
                    name="Message"
                    placeholder="Describe your appliance problem"
                    required
                  ></textarea>
                </div>

                <button type="submit" className="booking-submit">
                  Submit
                </button>
              </form>
            </div>

            <div className="booking-info reveal">
              <div className="booking-info-label">
                WHAT HAPPENS NEXT?
              </div>

              <h3>Simple Service Booking Process</h3>

              <div className="booking-info-item">
                <span>✓</span>

                <p>
                  Book your appliance repair and service through our online
                  form.
                </p>
              </div>

              <div className="booking-info-item">
                <span>✓</span>

                <p>
                  After submitting the request, our team receives your booking
                  details.
                </p>
              </div>

              <div className="booking-info-item">
                <span>✓</span>

                <p>
                  You will receive a confirmation call from our customer
                  support team.
                </p>
              </div>

              <div className="booking-info-item">
                <span>✓</span>

                <p>
                  Our technician will contact you to confirm the appointment
                  before arriving.
                </p>
              </div>

              <div className="booking-info-item">
                <span>✓</span>

                <p>
                  After service, you can contact our team again if additional
                  support is required.
                </p>
              </div>

              <div className="booking-info-item">
                <span>✓</span>

                <p>
                  Call{" "}
                  <a href="tel:18001234042">
                    1800 1234 042
                  </a>{" "}
                  for service support.
                </p>
              </div>

              <a
                href="tel:18001234042"
                className="booking-call"
              >
                <span>☎</span>

                <div>
                  <small>NEED HELP BOOKING?</small>
                  <strong>1800 1234 042</strong>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          ABOUT
      ===================================================== */}

      <section id="about" className="section">
        <div className="container about-grid">
          <div className="about-image reveal">
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

            <div className="experience">
              <strong>15+</strong>
              <span>Years Technical Experience</span>
            </div>
          </div>

          <div className="about-content reveal">
            <div className="eyebrow">
              ABOUT AK PAUL ELECTRONICS
            </div>

            <h2>
              Professional Appliance Repair
              <span> in Kolkata.</span>
            </h2>

            <p>
              If you are looking for AC, Refrigerator, Washing Machine or
              Microwave Repair and Services in and around Kolkata, you are at
              the right place.
            </p>

            <p>
              AK Paul Electronics provides professional repair and service
              support for different types and brands of household appliances.
            </p>

            <p>
              Our technicians inspect your appliance, identify the problem and
              provide an estimated repair cost before proceeding with the
              required service.
            </p>

            <div className="about-features">
              <div>
                <span>✓</span>
                <strong>Experienced Technicians</strong>
              </div>

              <div>
                <span>✓</span>
                <strong>Affordable Service</strong>
              </div>

              <div>
                <span>✓</span>
                <strong>Professional Support</strong>
              </div>

              <div>
                <span>✓</span>
                <strong>Multi-Brand Service</strong>
              </div>
            </div>

            <div className="about-actions">
              <a href="tel:18001234042" className="btn-red">
                ☎ Call 1800 1234 042
              </a>

              <button
                className="btn-outline-dark"
                onClick={bookNow}
              >
                Book Service →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SERVICES
      ===================================================== */}

      <section id="services" className="section services-section">
        <div className="container">
          <div className="section-heading reveal">
            <div className="eyebrow">
              OUR SERVICES
            </div>

            <h2>
              Professional Service for Your
              <span> Household Appliances.</span>
            </h2>

            <p>
              Professional appliance inspection, servicing and repair
              solutions in Kolkata.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service) => (
              <article
                className="service-card reveal"
                key={service.number}
              >
                <div className="service-image">
                  <img
                    src={service.image}
                    alt={service.title}
                    onError={(event) =>
                      handleImageError(
                        event,
                        "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1000&q=80"
                      )
                    }
                  />

                  <span>{service.number}</span>
                </div>

                <div className="service-content">
                  <h3>{service.title}</h3>

                  <p>{service.description}</p>

                  <button onClick={bookNow}>
                    Book Service <span>→</span>
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          WHY CHOOSE US
      ===================================================== */}

      <section className="why">
        <div className="container">
          <div className="section-heading light reveal">
            <div className="eyebrow">
              WHY CHOOSE US
            </div>

            <h2>
              Reliable Service.
              <span> Simple Process.</span>
            </h2>

            <p>
              A straightforward service process from your initial enquiry to
              appliance inspection and repair.
            </p>
          </div>

          <div className="benefits">
            <article className="benefit reveal">
              <span>01</span>

              <h3>Free Inspection</h3>

              <p>
                Contact our team to arrange an inspection of your household
                appliance.
              </p>
            </article>

            <article className="benefit reveal">
              <span>02</span>

              <h3>15+ Years Experience</h3>

              <p>
                Experienced technicians with practical appliance repair and
                servicing knowledge.
              </p>
            </article>

            <article className="benefit reveal">
              <span>03</span>

              <h3>Quality Service</h3>

              <p>
                Professional workmanship with a focus on dependable appliance
                servicing.
              </p>
            </article>

            <article className="benefit reveal">
              <span>04</span>

              <h3>Affordable Pricing</h3>

              <p>
                Receive an estimated repair cost before the required work
                begins.
              </p>
            </article>
          </div>

          <div className="process">
            <div className="process-item reveal">
              <span>01</span>
              <h3>Book</h3>
              <p>Call us or submit your request online.</p>
            </div>

            <div className="process-line"></div>

            <div className="process-item reveal">
              <span>02</span>
              <h3>Inspection</h3>
              <p>Our technician checks your appliance.</p>
            </div>

            <div className="process-line"></div>

            <div className="process-item reveal">
              <span>03</span>
              <h3>Estimation</h3>
              <p>Get an estimated repair cost.</p>
            </div>

            <div className="process-line"></div>

            <div className="process-item reveal">
              <span>04</span>
              <h3>Repair</h3>
              <p>The required service work is completed.</p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          COMMON PROBLEMS
      ===================================================== */}

      <section id="problems" className="section problems">
        <div className="container">
          <div className="section-heading reveal">
            <div className="eyebrow">
              COMMON APPLIANCE PROBLEMS
            </div>

            <h2>
              Is Your Appliance Showing
              <span> These Problems?</span>
            </h2>

            <p>
              Select your appliance to see some of the common problems
              customers experience.
            </p>
          </div>

          <div className="problem-tabs reveal">
            <button
              className={
                problemTab === "refrigerator"
                  ? "active"
                  : ""
              }
              onClick={() =>
                setProblemTab("refrigerator")
              }
            >
              Refrigerator
            </button>

            <button
              className={
                problemTab === "window"
                  ? "active"
                  : ""
              }
              onClick={() =>
                setProblemTab("window")
              }
            >
              Window AC
            </button>

            <button
              className={
                problemTab === "split"
                  ? "active"
                  : ""
              }
              onClick={() =>
                setProblemTab("split")
              }
            >
              Split AC
            </button>

            <button
              className={
                problemTab === "washing"
                  ? "active"
                  : ""
              }
              onClick={() =>
                setProblemTab("washing")
              }
            >
              Washing Machine
            </button>
          </div>

          <div className="problem-box reveal">
            <h3>
              {problemData[problemTab].title}
            </h3>

            <div className="problem-list">
              {problemData[problemTab].items.map(
                (problem) => (
                  <div
                    className="problem-item"
                    key={problem}
                  >
                    <span>✓</span>

                    <p>{problem}</p>
                  </div>
                )
              )}
            </div>

            <button
              className="btn-red problem-book"
              onClick={bookNow}
            >
              Book Repair Service →
            </button>
          </div>
        </div>
      </section>

      {/* =====================================================
          REVIEWS
      ===================================================== */}

      <section className="section reviews">
        <div className="container">
          <div className="section-heading reveal">
            <div className="eyebrow">
              CUSTOMER REVIEWS
            </div>

            <h2>
              Trusted for Professional
              <span> Service.</span>
            </h2>
          </div>

          <div className="reviews-grid">
            <article className="review reveal">
              <div className="review-top">
                <span>R</span>

                <div>
                  <strong>Ramesh</strong>
                  <small>★★★★★</small>
                </div>
              </div>

              <p>
                “Exceptional service and professional support. The appliance
                issue was handled efficiently and the process was clearly
                explained.”
              </p>
            </article>

            <article className="review reveal">
              <div className="review-top">
                <span>M</span>

                <div>
                  <strong>Manasa Raj</strong>
                  <small>★★★★★</small>
                </div>
              </div>

              <p>
                “The service was professional and responsive. The entire
                process was handled smoothly from inspection to completion.”
              </p>
            </article>

            <article className="review reveal">
              <div className="review-top">
                <span>R</span>

                <div>
                  <strong>Raju K</strong>
                  <small>★★★★★</small>
                </div>
              </div>

              <p>
                “A dependable service experience. The team explained the
                requirement clearly and provided professional assistance.”
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* =====================================================
          CONTACT
      ===================================================== */}

      <section id="contact" className="section contact">
        <div className="container contact-grid">
          <div className="contact-info reveal">
            <div className="eyebrow">
              CONTACT US
            </div>

            <h2>
              Need Appliance
              <span> Repair?</span>
            </h2>

            <p>
              Contact AK Paul Electronics for AC, refrigerator, washing
              machine and microwave repair and service in Kolkata.
            </p>

            <a
              href="tel:18001234042"
              className="contact-card"
            >
              <span>☎</span>

              <div>
                <small>TOLL FREE</small>
                <strong>1800 1234 042</strong>
              </div>
            </a>

            <a
              href="mailto:info@customerserviceonline.co.in"
              className="contact-card"
            >
              <span>✉</span>

              <div>
                <small>EMAIL</small>

                <strong>
                  info@customerserviceonline.co.in
                </strong>
              </div>
            </a>

            <div className="contact-card">
              <span>⌖</span>

              <div>
                <small>SERVICE AREA</small>
                <strong>Kolkata, West Bengal</strong>
              </div>
            </div>
          </div>

          <form
            className="contact-form reveal"
            action="https://formsubmit.co/babupaul2121@gmail.com"
            method="POST"
          >
            <input
              type="hidden"
              name="_subject"
              value="New Website Enquiry - AK Paul Electronics"
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

            {/* Redirect back to home */}
            <input
              type="hidden"
              name="_next"
              value="https://customerserviceonline.co.in/thank-you"
            />

            <div className="contact-form-heading">
              <small>SERVICE ENQUIRY</small>

              <h3>Request a Service</h3>

              <p>
                Share your details and our team will contact you.
              </p>
            </div>

            <div className="contact-fields">
              <div className="field">
                <label>Name *</label>

                <input
                  type="text"
                  name="Name"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="field">
                <label>Phone Number *</label>

                <input
                  type="tel"
                  name="Phone"
                  placeholder="Phone number"
                  required
                />
              </div>

              <div className="field full">
                <label>Email</label>

                <input
                  type="email"
                  name="Email"
                  placeholder="Email address"
                />
              </div>

              <div className="field full">
                <label>Service *</label>

                <select
                  name="Service"
                  defaultValue=""
                  required
                >
                  <option value="" disabled>
                    Select Service
                  </option>

                  <option value="AC Repair">
                    AC Repair & Service
                  </option>

                  <option value="Refrigerator Repair">
                    Refrigerator Repair
                  </option>

                  <option value="Washing Machine Repair">
                    Washing Machine Repair
                  </option>

                  <option value="Microwave Repair">
                    Microwave Repair
                  </option>
                </select>
              </div>

              <div className="field full">
                <label>Message *</label>

                <textarea
                  name="Message"
                  placeholder="Describe the appliance problem"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn-red full"
              >
                Send Service Enquiry →
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="final-cta">
        <div className="container final-cta-inner">
          <div>
            <small>
              NEED APPLIANCE SERVICE?
            </small>

            <h2>
              Get your household appliance checked today.
            </h2>
          </div>

          <a href="tel:18001234042">
            ☎ Call 1800 1234 042
          </a>
        </div>
      </section>
    </>
  );
}

export default Home;
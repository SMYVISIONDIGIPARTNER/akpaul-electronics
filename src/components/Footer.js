import React from "react";

function Footer() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <footer className="footer">
      <div className="container footer-grid">
        {/* No Logo */}

        <div className="footer-brand">
          <h2>
            AK Paul <span>Electronics</span>
          </h2>

          <p>
            Professional AC, refrigerator, washing machine and microwave
            repair services in Kolkata at affordable prices.
          </p>

          <a
            href="tel:18001234042"
            className="footer-main-call"
          >
            ☎ 1800 1234 042
          </a>
        </div>

        <div className="footer-column">
          <h3>Quick Links</h3>

          <button onClick={() => scrollTo("book-service")}>
            Book Service
          </button>

          <button onClick={() => scrollTo("about")}>
            About Us
          </button>

          <button onClick={() => scrollTo("services")}>
            Our Services
          </button>

          <button onClick={() => scrollTo("problems")}>
            Common Problems
          </button>

          <button onClick={() => scrollTo("contact")}>
            Contact Us
          </button>
        </div>

        <div className="footer-column">
          <h3>Our Services</h3>

          <button onClick={() => scrollTo("services")}>
            AC Repair & Services
          </button>

          <button onClick={() => scrollTo("services")}>
            Refrigerator Repair
          </button>

          <button onClick={() => scrollTo("services")}>
            Washing Machine Repair
          </button>

          <button onClick={() => scrollTo("services")}>
            Microwave Repair
          </button>
        </div>

        <div className="footer-column">
          <h3>Contact</h3>

          <p>Kolkata, West Bengal</p>

          <a href="tel:18001234042">
            1800 1234 042
          </a>

          <a href="mailto:info@customerserviceonline.co.in">
            info@customerserviceonline.co.in
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>
            © {new Date().getFullYear()} AK Paul Electronics. All rights
            reserved.
          </p>

          <p>
            Developed by{" "}
            <a
              href="https://smyvisiontechnologies.com"
              target="_blank"
              rel="noreferrer"
            >
              SMYVISION TECHNOLOGIES
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
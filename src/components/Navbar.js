import React from "react";

function Navbar() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <header className="header">
      <div className="container navbar">
        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          <button onClick={() => scrollTo("book-service")}>
            Book Service
          </button>

          <button onClick={() => scrollTo("about")}>
            About
          </button>

          <button onClick={() => scrollTo("services")}>
            Services
          </button>

          <button onClick={() => scrollTo("problems")}>
            Common Problems
          </button>

          <button onClick={() => scrollTo("contact")}>
            Contact
          </button>
        </nav>

        <div className="nav-actions">
          <a href="tel:18001234042" className="nav-call">
            <span>☎</span>

            <div>
              <small>TOLL FREE</small>
              <strong>1800 1234 042</strong>
            </div>
          </a>

          <button
            className="nav-contact"
            onClick={() => scrollTo("book-service")}
          >
            Book Service →
          </button>
        </div>

        {/* Mobile Direct Navigation - No Toggle */}
        <nav className="mobile-direct-nav">
          <button onClick={() => scrollTo("book-service")}>
            Book
          </button>

          <button onClick={() => scrollTo("about")}>
            About
          </button>

          <button onClick={() => scrollTo("services")}>
            Services
          </button>

          <button onClick={() => scrollTo("problems")}>
            Problems
          </button>

          <button onClick={() => scrollTo("contact")}>
            Contact
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
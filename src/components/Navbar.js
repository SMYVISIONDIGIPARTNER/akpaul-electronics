import React, { useEffect, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu whenever route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // Prevent body scrolling while mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <style>{`
        /* ================================
           PAUL ELECTRONICS NAVBAR
        ================================= */

        .paul-header {
          width: 100%;
          height: 112px;
          background: #ffffff;
          border-bottom: 1px solid #eeeeee;
          position: sticky;
          top: 0;
          z-index: 9999;
        }

        .paul-navbar {
          width: 90%;
          max-width: 1500px;
          height: 100%;
          margin: 0 auto;

          display: grid;
          grid-template-columns: 280px 1fr auto;
          align-items: center;
          gap: 35px;
        }

        /* ================================
           LOGO
        ================================= */

        .paul-logo {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          text-decoration: none;
        }

        .paul-logo img {
          display: block;
          width: 245px;
          max-width: 100%;
          height: auto;
          object-fit: contain;
        }

        /* ================================
           DESKTOP RIGHT AREA
        ================================= */

        .paul-desktop-area {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 55px;
        }

        /* ================================
           NAV LINKS
        ================================= */

        .paul-nav-links {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 50px;
        }

        .paul-nav-link {
          position: relative;
          display: flex;
          align-items: center;

          height: 112px;

          color: #111111;
          text-decoration: none;

          font-size: 17px;
          font-weight: 600;
          line-height: 1;

          transition:
            color 0.25s ease,
            opacity 0.25s ease;
        }

        .paul-nav-link::after {
          content: "";

          position: absolute;
          left: 0;
          bottom: 29px;

          width: 0;
          height: 3px;

          background: #d7192d;

          transition: width 0.3s ease;
        }

        .paul-nav-link:hover {
          color: #d7192d;
        }

        .paul-nav-link:hover::after {
          width: 100%;
        }

        .paul-nav-link.active {
          color: #d7192d;
        }

        .paul-nav-link.active::after {
          width: 100%;
        }

        /* ================================
           TOLL FREE PHONE
        ================================= */

        .paul-phone {
          display: flex;
          align-items: center;
          gap: 13px;

          color: #101010;
          text-decoration: none;

          white-space: nowrap;

          font-size: 17px;
          font-weight: 600;

          transition: color 0.25s ease;
        }

        .paul-phone:hover {
          color: #d7192d;
        }

        .paul-phone-icon {
          width: 24px;
          height: 24px;

          display: flex;
          align-items: center;
          justify-content: center;

          color: #073f68;
        }

        .paul-phone-icon svg {
          width: 22px;
          height: 22px;
          fill: currentColor;
        }

        .paul-phone-details {
          display: flex;
          flex-direction: column;
          gap: 3px;
        }

        .paul-phone-label {
          color: #d7192d;
          font-size: 9px;
          font-weight: 800;
          line-height: 1;
          letter-spacing: 1.3px;
          text-transform: uppercase;
        }

        .paul-phone-number {
          color: inherit;
          font-size: 16px;
          font-weight: 700;
          line-height: 1.1;
        }

        /* ================================
           GET IN TOUCH
        ================================= */

        .paul-contact-btn {
          min-width: 185px;
          height: 58px;

          display: flex;
          align-items: center;
          justify-content: center;
          gap: 11px;

          padding: 0 25px;

          background: #d7192d;
          color: #ffffff;

          border-radius: 8px;

          text-decoration: none;

          font-size: 16px;
          font-weight: 700;

          box-shadow: 0 8px 22px rgba(215, 25, 45, 0.14);

          transition:
            background 0.3s ease,
            transform 0.3s ease,
            box-shadow 0.3s ease;
        }

        .paul-contact-btn:hover {
          background: #073f68;
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(7, 63, 104, 0.18);
        }

        .paul-contact-icon {
          width: 21px;
          height: 21px;

          display: flex;
          align-items: center;
          justify-content: center;
        }

        .paul-contact-icon svg {
          width: 21px;
          height: 21px;
          fill: currentColor;
        }

        /* ================================
           HAMBURGER
        ================================= */

        .paul-menu-btn {
          width: 46px;
          height: 46px;

          display: none;
          align-items: center;
          justify-content: center;
          flex-direction: column;

          gap: 6px;

          padding: 0;

          border: none;
          border-radius: 5px;

          background: #073f68;

          cursor: pointer;
        }

        .paul-menu-btn span {
          display: block;

          width: 23px;
          height: 2px;

          background: #ffffff;

          border-radius: 20px;

          transition:
            transform 0.3s ease,
            opacity 0.3s ease;
        }

        .paul-menu-btn.open span:nth-child(1) {
          transform: translateY(8px) rotate(45deg);
        }

        .paul-menu-btn.open span:nth-child(2) {
          opacity: 0;
        }

        .paul-menu-btn.open span:nth-child(3) {
          transform: translateY(-8px) rotate(-45deg);
        }

        /* ================================
           MOBILE MENU
        ================================= */

        .paul-mobile-menu {
          display: none;
        }

        .paul-mobile-overlay {
          display: none;
        }

        /* ================================
           LARGE SCREEN
        ================================= */

        @media (min-width: 1500px) {
          .paul-navbar {
            max-width: 1500px;
          }

          .paul-nav-links {
            gap: 55px;
          }

          .paul-desktop-area {
            gap: 65px;
          }
        }

        /* ================================
           LAPTOP
        ================================= */

        @media (max-width: 1250px) {
          .paul-navbar {
            width: 94%;
            grid-template-columns: 220px 1fr auto;
            gap: 20px;
          }

          .paul-logo img {
            width: 200px;
          }

          .paul-desktop-area {
            gap: 25px;
          }

          .paul-nav-links {
            gap: 28px;
          }

          .paul-nav-link {
            font-size: 15px;
          }

          .paul-phone {
            font-size: 14px;
          }

          .paul-phone-number {
            font-size: 14px;
          }

          .paul-contact-btn {
            min-width: 150px;
            height: 52px;
            padding: 0 18px;
            font-size: 14px;
          }
        }

        /* ================================
           TABLET + MOBILE NAVBAR
        ================================= */

        @media (max-width: 1024px) {
          .paul-header {
            height: 82px;
          }

          .paul-navbar {
            width: 92%;
            height: 82px;

            display: flex;
            justify-content: space-between;

            gap: 20px;
          }

          .paul-logo img {
            width: 190px;
          }

          .paul-desktop-area {
            display: none;
          }

          .paul-menu-btn {
            display: flex;
          }

          /* MOBILE OVERLAY */

          .paul-mobile-overlay {
            display: block;

            position: fixed;
            top: 82px;
            left: 0;

            width: 100%;
            height: calc(100vh - 82px);

            background: rgba(0, 24, 43, 0.55);

            opacity: 0;
            visibility: hidden;

            transition:
              opacity 0.3s ease,
              visibility 0.3s ease;

            z-index: 9997;
          }

          .paul-mobile-overlay.open {
            opacity: 1;
            visibility: visible;
          }

          /* MOBILE MENU */

          .paul-mobile-menu {
            position: fixed;
            top: 82px;
            right: 0;

            width: 360px;
            max-width: 88%;

            height: calc(100vh - 82px);

            display: flex;
            flex-direction: column;

            padding: 35px 28px;

            background: #ffffff;

            transform: translateX(100%);

            visibility: hidden;

            transition:
              transform 0.35s ease,
              visibility 0.35s ease;

            z-index: 9998;

            box-shadow: -10px 20px 40px rgba(0, 0, 0, 0.12);
          }

          .paul-mobile-menu.open {
            transform: translateX(0);
            visibility: visible;
          }

          .paul-mobile-links {
            display: flex;
            flex-direction: column;
          }

          .paul-mobile-link {
            position: relative;

            display: flex;
            align-items: center;
            justify-content: space-between;

            padding: 18px 4px;

            color: #15202a;

            border-bottom: 1px solid #eeeeee;

            text-decoration: none;

            font-size: 17px;
            font-weight: 600;

            transition: color 0.25s ease;
          }

          .paul-mobile-link::after {
            content: "›";

            color: #9ba4aa;

            font-size: 24px;
            font-weight: 400;
          }

          .paul-mobile-link:hover,
          .paul-mobile-link.active {
            color: #d7192d;
          }

          .paul-mobile-contact {
            margin-top: 35px;
          }

          .paul-mobile-phone {
            display: flex;
            align-items: center;
            gap: 13px;

            margin-bottom: 18px;

            color: #073f68;

            text-decoration: none;

            font-size: 16px;
            font-weight: 700;
          }

          .paul-mobile-phone svg {
            width: 21px;
            height: 21px;
            flex-shrink: 0;
            fill: currentColor;
          }

          .paul-mobile-phone-details {
            display: flex;
            flex-direction: column;
            gap: 4px;
          }

          .paul-mobile-phone-label {
            color: #d7192d;

            font-size: 10px;
            font-weight: 800;

            letter-spacing: 1.2px;
            text-transform: uppercase;
          }

          .paul-mobile-phone-number {
            color: #073f68;
            font-size: 17px;
            font-weight: 800;
          }

          .paul-mobile-btn {
            width: 100%;
            height: 55px;

            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;

            background: #d7192d;
            color: #ffffff;

            border-radius: 6px;

            text-decoration: none;

            font-size: 15px;
            font-weight: 700;
          }

          .paul-mobile-btn svg {
            width: 20px;
            height: 20px;
            fill: currentColor;
          }
        }

        /* ================================
           MOBILE
        ================================= */

        @media (max-width: 600px) {
          .paul-header {
            height: 72px;
          }

          .paul-navbar {
            width: 90%;
            height: 72px;
          }

          .paul-logo img {
            width: 160px;
          }

          .paul-menu-btn {
            width: 42px;
            height: 42px;
          }

          .paul-mobile-overlay {
            top: 72px;
            height: calc(100vh - 72px);
          }

          .paul-mobile-menu {
            top: 72px;

            width: 310px;
            max-width: 90%;

            height: calc(100vh - 72px);

            padding: 25px 22px;
          }
        }

        /* ================================
           VERY SMALL MOBILE
        ================================= */

        @media (max-width: 380px) {
          .paul-logo img {
            width: 145px;
          }

          .paul-menu-btn {
            width: 40px;
            height: 40px;
          }

          .paul-mobile-menu {
            width: 290px;
          }
        }
      `}</style>

      <header className="paul-header">
        <nav className="paul-navbar">

          {/* LOGO */}

          <Link
            to="/"
            className="paul-logo"
            onClick={() => setMenuOpen(false)}
          >
            <img
              src="/logo.png"
              alt="AK Paul Electronics"
            />
          </Link>

          {/* DESKTOP */}

          <div className="paul-desktop-area">

            <div className="paul-nav-links">

              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  isActive
                    ? "paul-nav-link active"
                    : "paul-nav-link"
                }
              >
                Home
              </NavLink>

              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "paul-nav-link active"
                    : "paul-nav-link"
                }
              >
                About
              </NavLink>

              <NavLink
                to="/services"
                className={({ isActive }) =>
                  isActive
                    ? "paul-nav-link active"
                    : "paul-nav-link"
                }
              >
                Services
              </NavLink>

              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? "paul-nav-link active"
                    : "paul-nav-link"
                }
              >
                Contact
              </NavLink>

            </div>

            {/* TOLL FREE NUMBER */}

            <a
              href="tel:18001234042"
              className="paul-phone"
              aria-label="Call toll free number 1800 1234 042"
            >

              <span className="paul-phone-icon">

                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M6.62 10.79a15.46 15.46 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1.02l-2.2 2.2Z" />
                </svg>

              </span>

              <span className="paul-phone-details">

                <small className="paul-phone-label">
                  Toll Free
                </small>

                <span className="paul-phone-number">
                  1800 1234 042
                </span>

              </span>

            </a>

            {/* GET IN TOUCH */}

            <Link
              to="/contact"
              className="paul-contact-btn"
            >

              <span className="paul-contact-icon">

                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M21.8 2.2a1 1 0 0 0-1.05-.23L2.6 9.12a1 1 0 0 0 .07 1.89l7.09 2.36 2.36 7.09a1 1 0 0 0 .92.68h.04a1 1 0 0 0 .93-.61L21.97 3.25a1 1 0 0 0-.17-1.05ZM13.2 17.26l-1.58-4.74 5.89-5.89-4.31 10.63Zm-2.68-5.64-4.74-1.58 10.63-4.31-5.89 5.89Z" />
                </svg>

              </span>

              <span>Get in Touch</span>

            </Link>

          </div>

          {/* MOBILE HAMBURGER */}

          <button
            type="button"
            className={
              menuOpen
                ? "paul-menu-btn open"
                : "paul-menu-btn"
            }
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

        </nav>
      </header>

      {/* MOBILE DARK OVERLAY */}

      <div
        className={
          menuOpen
            ? "paul-mobile-overlay open"
            : "paul-mobile-overlay"
        }
        onClick={() => setMenuOpen(false)}
      ></div>

      {/* MOBILE MENU */}

      <aside
        className={
          menuOpen
            ? "paul-mobile-menu open"
            : "paul-mobile-menu"
        }
      >

        <div className="paul-mobile-links">

          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive
                ? "paul-mobile-link active"
                : "paul-mobile-link"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "paul-mobile-link active"
                : "paul-mobile-link"
            }
          >
            About
          </NavLink>

          <NavLink
            to="/services"
            className={({ isActive }) =>
              isActive
                ? "paul-mobile-link active"
                : "paul-mobile-link"
            }
          >
            Services
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "paul-mobile-link active"
                : "paul-mobile-link"
            }
          >
            Contact
          </NavLink>

        </div>

        <div className="paul-mobile-contact">

          {/* MOBILE TOLL FREE NUMBER */}

          <a
            href="tel:18001234042"
            className="paul-mobile-phone"
            aria-label="Call toll free number 1800 1234 042"
          >

            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M6.62 10.79a15.46 15.46 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1.02l-2.2 2.2Z" />
            </svg>

            <span className="paul-mobile-phone-details">

              <small className="paul-mobile-phone-label">
                Toll Free
              </small>

              <span className="paul-mobile-phone-number">
                1800 1234 042
              </span>

            </span>

          </a>

          <Link
            to="/contact"
            className="paul-mobile-btn"
          >

            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M21.8 2.2a1 1 0 0 0-1.05-.23L2.6 9.12a1 1 0 0 0 .07 1.89l7.09 2.36 2.36 7.09a1 1 0 0 0 .92.68h.04a1 1 0 0 0 .93-.61L21.97 3.25a1 1 0 0 0-.17-1.05ZM13.2 17.26l-1.58-4.74 5.89-5.89-4.31 10.63Zm-2.68-5.64-4.74-1.58 10.63-4.31-5.89 5.89Z" />
            </svg>

            Get in Touch

          </Link>

        </div>

      </aside>
    </>
  );
}

export default Navbar;
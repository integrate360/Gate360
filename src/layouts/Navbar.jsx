import { useState, useEffect } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { ArrowUpRight, Menu, X } from "lucide-react";
import logoImg from "../assets/logo.png";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Features" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600&family=DM+Mono:wght@500&display=swap');

        .g360-nav {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 1000;
          font-family: 'DM Sans', sans-serif;
          transition: background 0.3s ease, box-shadow 0.3s ease, padding 0.3s ease;
        }
        .g360-nav.scrolled {
          background: rgba(255, 255, 255, 0.97);
          box-shadow: 0 0 0 1px rgba(0,0,0,0.06), 0 2px 16px rgba(0,0,0,0.05);
          padding-top: 0;
          padding-bottom: 0;
        }
        .g360-nav.top {
          background: #ffffff;
          box-shadow: 0 1px 0 rgba(0,0,0,0.08);
        }

        .g360-inner {
          max-width: 1440px;
          margin: 0 auto;
          padding: 0 40px;
          height: 72px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 32px;
        }

        /* LOGO */
        .g360-logo {
          display: flex;
          align-items: center;
          text-decoration: none;
          flex-shrink: 0;
        }
        .g360-logo img {
          height: 42px;
          width: auto;
          display: block;
        }

        /* NAV LINKS */
        .g360-links {
          display: flex;
          align-items: center;
          gap: 2px;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        .g360-link {
          text-decoration: none;
          font-size: 15px;
          font-weight: 500;
          letter-spacing: 0.008em;
          color: rgba(14, 14, 14, 0.55);
          padding: 6px 14px;
          border-radius: 7px;
          transition: color 0.15s ease, background 0.15s ease;
          position: relative;
          white-space: nowrap;
        }
        .g360-link:hover {
          color: rgba(14, 14, 14, 0.9);
          background: rgba(14,14,14,0.04);
        }
        .g360-link.active {
          color: #2563EB;
          font-weight: 600;
        }
        .g360-link.active::after {
          content: '';
          position: absolute;
          bottom: 2px;
          left: 50%;
          transform: translateX(-50%);
          width: 18px;
          height: 2px;
          background: #2563EB;
          border-radius: 99px;
        }

        /* DIVIDER */
        .g360-divider {
          width: 1px;
          height: 20px;
          background: rgba(0,0,0,0.1);
          flex-shrink: 0;
        }

        /* RIGHT SIDE */
        .g360-right {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-shrink: 0;
        }

        /* GHOST BUTTON */
        .g360-btn-ghost {
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          font-weight: 500;
          color: rgba(14,14,14,0.6);
          background: transparent;
          border: 1px solid rgba(14,14,14,0.12);
          border-radius: 8px;
          padding: 0 16px;
          height: 40px;
          cursor: pointer;
          transition: border-color 0.15s, color 0.15s, background 0.15s;
          letter-spacing: 0.01em;
        }
        .g360-btn-ghost:hover {
          color: rgba(14,14,14,0.9);
          border-color: rgba(14,14,14,0.25);
          background: rgba(14,14,14,0.02);
        }
        .g360-btn-ghost:active {
          transform: scale(0.98);
        }

        /* PRIMARY BUTTON */
        .g360-btn-primary {
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          font-weight: 600;
          color: #ffffff;
          background: linear-gradient(135deg, #3B82F6 0%, #2563EB 50%, #4F46E5 100%);
          border: none;
          border-radius: 8px;
          padding: 0 18px;
          height: 40px;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 6px;
          letter-spacing: 0.01em;
          transition: opacity 0.15s ease, transform 0.15s ease, box-shadow 0.15s ease;
          box-shadow: 0 1px 2px rgba(37,99,235,0.2), 0 2px 8px rgba(79,70,229,0.25);
        }
        .g360-btn-primary:hover {
          opacity: 0.9;
          box-shadow: 0 2px 4px rgba(37,99,235,0.25), 0 6px 20px rgba(79,70,229,0.3);
        }
        .g360-btn-primary:active {
          transform: scale(0.97);
        }
        .g360-btn-primary svg {
          flex-shrink: 0;
        }

        /* HAMBURGER */
        .g360-hamburger {
          display: none;
          align-items: center;
          justify-content: center;
          width: 38px;
          height: 38px;
          border: 1px solid rgba(14,14,14,0.12);
          border-radius: 8px;
          background: transparent;
          cursor: pointer;
          transition: background 0.15s, border-color 0.15s;
          flex-shrink: 0;
        }
        .g360-hamburger:hover {
          background: rgba(14,14,14,0.03);
          border-color: rgba(14,14,14,0.2);
        }
        .g360-hamburger:active {
          transform: scale(0.96);
        }

        /* MOBILE MENU */
        .g360-mobile {
          display: none;
          flex-direction: column;
          border-top: 1px solid rgba(0,0,0,0.07);
          background: #fff;
          padding: 8px 20px 20px;
          overflow: hidden;
          transition: max-height 0.35s cubic-bezier(0.4,0,0.2,1);
        }

        .g360-mobile-link {
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          font-weight: 500;
          color: rgba(14,14,14,0.6);
          text-decoration: none;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 8px;
          border-bottom: 1px solid rgba(0,0,0,0.05);
          transition: color 0.15s ease;
          letter-spacing: 0.005em;
        }
        .g360-mobile-link:last-of-type {
          border-bottom: none;
        }
        .g360-mobile-link:hover,
        .g360-mobile-link.active {
          color: #2563EB;
        }
        .g360-mobile-link .dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #2563EB;
          opacity: 0;
          transition: opacity 0.15s;
          flex-shrink: 0;
        }
        .g360-mobile-link.active .dot {
          opacity: 1;
        }

        .g360-mobile-cta {
          margin-top: 14px;
          font-family: 'DM Sans', sans-serif;
          font-size: 13.5px;
          font-weight: 600;
          color: #fff;
          background: linear-gradient(135deg, #3B82F6 0%, #2563EB 50%, #4F46E5 100%);
          border: none;
          border-radius: 9px;
          height: 44px;
          width: 100%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 7px;
          letter-spacing: 0.01em;
          transition: opacity 0.15s ease;
          box-shadow: 0 2px 12px rgba(79,70,229,0.25);
        }
        .g360-mobile-cta:hover {
          opacity: 0.88;
        }

        /* RESPONSIVE */
        @media (max-width: 1024px) {
          .g360-links { display: none; }
          .g360-divider { display: none; }
          .g360-btn-ghost { display: none; }
          .g360-hamburger { display: flex; }
          .g360-inner { padding: 0 20px; }
        }

        @media (max-width: 640px) {
          .g360-btn-primary { display: none; }
        }

        .g360-mobile.open {
          display: flex;
        }
      `}</style>

      <nav className={`g360-nav ${scrolled ? "scrolled" : "top"}`}>
        <div className="g360-inner">

          {/* Logo */}
          <NavLink to="/" className="g360-logo">
            <img src={logoImg} alt="Gate360" />
          </NavLink>

          {/* Desktop links */}
          <ul className="g360-links">
            {navLinks.map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  className={({ isActive }) =>
                    `g360-link${isActive ? " active" : ""}`
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Right side */}
          <div className="g360-right">
            <div className="g360-divider" />
            <button className="g360-btn-ghost" onClick={() => navigate("/contact")}>
              Contact
            </button>
            <button
              className="g360-btn-primary"
              onClick={() => navigate("/contact")}
            >
              Get Started
              <ArrowUpRight size={13} strokeWidth={2.5} />
            </button>
            <button
              className="g360-hamburger"
              onClick={() => setMenuOpen((o) => !o)}
              aria-label="Toggle menu"
            >
              {menuOpen
                ? <X size={17} strokeWidth={2} color="#121414" />
                : <Menu size={17} strokeWidth={2} color="#121414" />
              }
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`g360-mobile${menuOpen ? " open" : ""}`}>
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `g360-mobile-link${isActive ? " active" : ""}`
              }
            >
              <span>{label}</span>
              <span className="dot" />
            </NavLink>
          ))}
          <button
            className="g360-mobile-cta"
            onClick={() => { navigate("/contact"); setMenuOpen(false); }}
          >
            Get Started
            <ArrowUpRight size={14} strokeWidth={2.5} />
          </button>
        </div>
      </nav>
    </>
  );
}
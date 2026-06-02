import { useState } from "react";
import { Mail, MapPin, Phone, ShieldCheck, ArrowRight, CheckCircle, Send } from "lucide-react";
import { useNavigate } from "react-router-dom";
import logoImg from "../assets/logo.png";

/* ─── Social Icon SVGs ─── */
const Facebook = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const Instagram = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const Twitter = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const LinkedIn = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Footer() {
  const navigate = useNavigate();

  const go = (path, state) => {
    navigate(path, state ? { state } : undefined);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "Features", path: "/services" },
    { label: "Contact Us", path: "/contact" },
  ];

  const moduleLinks = [
    { label: "Society Admin Features", path: "/services", state: { category: "admin" } },
    { label: "Resident Portal Features", path: "/services", state: { category: "resident" } },
    { label: "Security Guard Features", path: "/services", state: { category: "guard" } },
    { label: "Accountant Features", path: "/services", state: { category: "accountant" } },
  ];

  const socialLinks = [
    { Icon: Facebook,  label: "Facebook",  href: "#" },
    { Icon: Instagram, label: "Instagram", href: "#" },
    { Icon: Twitter,   label: "Twitter",   href: "#" },
    { Icon: LinkedIn,  label: "LinkedIn",  href: "#" },
  ];

  return (
    <footer className="ft-root">

      {/* ══════════════════════ FOOTER BODY ══════════════════════ */}
      <div className="ft-body">
        <div className="ft-grid-line" />

        <div className="ft-container">
          {/* Top grid */}
          <div className="ft-cols">

            {/* Brand column */}
            <div className="ft-col ft-col-brand">
              <img src={logoImg} alt="Gate360" className="ft-logo" />
              <p className="ft-brand-desc">
                Empowering gated communities across India with unified cloud security, automated billing, live guard dispatch, and multi-tenant SaaS excellence.
              </p>

              {/* Social icons */}
              <div className="ft-social-row">
                {socialLinks.map(({ Icon, label, href }) => (
                  <a key={label} href={href} aria-label={label} className="ft-social-btn">
                    <Icon size={16} />
                  </a>
                ))}
              </div>

              {/* Verified badge */}
              <div className="ft-verify-badge">
                <ShieldCheck size={14} />
                <span>ISO 27001 Compliant Infrastructure</span>
              </div>
            </div>

            {/* Quick Links */}
            <div className="ft-col">
              <h4 className="ft-col-heading">Quick Links</h4>
              <ul className="ft-link-list">
                {navLinks.map(({ label, path }) => (
                  <li key={label}>
                    <button onClick={() => go(path)} className="ft-link">
                      <span className="ft-link-dot" />
                      {label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Modules */}
            <div className="ft-col">
              <h4 className="ft-col-heading">Service Features</h4>
              <ul className="ft-link-list">
                {moduleLinks.map(({ label, path, state }) => (
                  <li key={label}>
                    <button onClick={() => go(path, state)} className="ft-link">
                      <span className="ft-link-dot" />
                      {label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="ft-col">
              <h4 className="ft-col-heading">Get In Touch</h4>
              <ul className="ft-contact-list">
                <li className="ft-contact-item">
                  <div className="ft-contact-icon">
                    <MapPin size={14} />
                  </div>
                  <span>
                    Amir Industrial Estate, 209, Sun Mill Compound,
                    opposite Phoenix Mall, Parel,
                    Mumbai, Maharashtra 400013
                  </span>
                </li>
                <li className="ft-contact-item">
                  <div className="ft-contact-icon">
                    <Phone size={14} />
                  </div>
                  <a href="tel:+917977105170" className="ft-contact-link">
                    +91 79 7710 5170
                  </a>
                </li>
                <li className="ft-contact-item">
                  <div className="ft-contact-icon">
                    <Mail size={14} />
                  </div>
                  <a href="mailto:support@gate360.in" className="ft-contact-link">
                    support@gate360.in
                  </a>
                </li>
              </ul>

              <button onClick={() => go("/contact")} className="ft-contact-cta">
                <span>Contact Sales</span>
                <ArrowRight size={13} />
              </button>
            </div>
          </div>

          {/* Divider */}
          <div className="ft-divider" />

          {/* Bottom bar */}
          <div className="ft-bottom">
            <p className="ft-copyright">
              © {new Date().getFullYear()} Gate360 SaaS Ltd. All rights reserved.
            </p>
            <div className="ft-bottom-links">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((t, i) => (
                <span key={i} className="ft-bottom-link">{t}</span>
              ))}
            </div>
            <p className="ft-credit">
              Designed &amp; Developed by{" "}
              <a href="https://integrate360.in" target="_blank" rel="noopener noreferrer" className="ft-credit-brand ft-credit-link">integrate360</a>
            </p>
          </div>
        </div>
      </div>

      {/* ══════════════════════ STYLES ══════════════════════ */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

        .ft-root {
          width: 100%;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        }

        /* ─── NEWSLETTER ─── */
        .nl-section {
          position: relative;
          overflow: hidden;
          background: linear-gradient(135deg, #eef2ff 0%, #e0e7ff 40%, #ede9fe 100%);
          border-top: 1px solid #e2e8f0;
          padding: 100px 0;
        }

        /* Decorative glowing blobs */
        .nl-blob {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          filter: blur(80px);
        }
        .nl-blob-1 {
          width: 500px; height: 500px;
          top: -120px; left: -100px;
          background: radial-gradient(circle, rgba(99, 102, 241, 0.12) 0%, transparent 70%);
        }
        .nl-blob-2 {
          width: 400px; height: 400px;
          bottom: -80px; right: -60px;
          background: radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, transparent 70%);
        }
        .nl-blob-3 {
          width: 300px; height: 300px;
          top: 50%; right: 35%;
          background: radial-gradient(circle, rgba(59, 130, 246, 0.08) 0%, transparent 70%);
        }

        .nl-inner {
          position: relative;
          z-index: 2;
          max-width: 1440px;
          margin: 0 auto;
          padding: 0 40px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }

        /* Left */
        .nl-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 1.8px;
          text-transform: uppercase;
          color: #4f46e5;
          background: rgba(79, 70, 229, 0.08);
          border: 1px solid rgba(79, 70, 229, 0.18);
          padding: 6px 14px;
          border-radius: 99px;
          margin-bottom: 24px;
        }

        .nl-heading {
          font-size: 46px;
          font-weight: 800;
          line-height: 1.15;
          color: #0f172a;
          margin: 0 0 18px;
          letter-spacing: -0.025em;
        }

        .nl-grad {
          background: linear-gradient(135deg, #2563eb 0%, #7c3aed 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .nl-sub {
          font-size: 16px;
          line-height: 1.7;
          color: #64748b;
          margin: 0 0 28px;
          max-width: 440px;
        }

        .nl-trust {
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
        }

        .nl-trust-item {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 12.5px;
          font-weight: 500;
          color: #475569;
        }

        .nl-trust-item svg { color: #10b981; }

        /* Right */
        .nl-form-card {
          background: #ffffff;
          border: 1.5px solid #e2e8f0;
          border-radius: 24px;
          padding: 40px;
          box-shadow: 0 8px 40px rgba(79, 70, 229, 0.08), 0 2px 12px rgba(0,0,0,0.04);
        }

        .nl-form-label {
          font-size: 13px;
          font-weight: 600;
          color: #475569;
          margin: 0 0 12px;
          text-transform: uppercase;
          letter-spacing: 0.8px;
        }

        .nl-form {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .nl-input-wrap {
          position: relative;
          display: flex;
          align-items: center;
        }

        .nl-input-wrap.has-error .nl-input {
          border-color: rgba(239, 68, 68, 0.5);
        }

        .nl-input-icon {
          position: absolute;
          left: 16px;
          color: #64748b;
          pointer-events: none;
        }

        .nl-input {
          width: 100%;
          background: #f8fafc;
          border: 1.5px solid #e2e8f0;
          border-radius: 14px;
          padding: 14px 16px 14px 44px;
          font-size: 15px;
          color: #0f172a;
          outline: none;
          transition: border-color 0.25s, box-shadow 0.25s;
          font-family: inherit;
        }

        .nl-input::placeholder { color: #94a3b8; }

        .nl-input:focus {
          background: #ffffff;
          border-color: #6366f1;
          box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.12);
        }

        .nl-error {
          font-size: 12.5px;
          color: #f87171;
          margin: 0;
        }

        .nl-submit-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          width: 100%;
          background: linear-gradient(135deg, #3b82f6 0%, #2563eb 50%, #4f46e5 100%);
          color: #ffffff;
          border: none;
          border-radius: 14px;
          padding: 15px 24px;
          font-size: 15px;
          font-weight: 700;
          cursor: pointer;
          transition: opacity 0.2s, transform 0.2s, box-shadow 0.2s;
          box-shadow: 0 4px 20px rgba(37, 99, 235, 0.35);
          font-family: inherit;
        }

        .nl-submit-btn:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 8px 28px rgba(37, 99, 235, 0.5);
        }

        .nl-submit-btn:disabled { opacity: 0.65; cursor: not-allowed; }

        .nl-loading {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .nl-spinner {
          width: 16px; height: 16px;
          border: 2px solid rgba(255,255,255,0.3);
          border-top-color: #fff;
          border-radius: 50%;
          animation: nlSpin 0.7s linear infinite;
        }

        @keyframes nlSpin {
          to { transform: rotate(360deg); }
        }

        .nl-fine-print {
          font-size: 12px;
          color: #94a3b8;
          margin: 14px 0 0;
          padding-top: 14px;
          border-top: 1px solid #f1f5f9;
          text-align: center;
        }

        .nl-link {
          color: #4f46e5;
          cursor: pointer;
          text-decoration: underline;
        }

        /* Success state */
        .nl-success {
          text-align: center;
          padding: 20px 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
        }

        .nl-success-icon {
          width: 60px; height: 60px;
          border-radius: 50%;
          background: rgba(52, 211, 153, 0.12);
          border: 1px solid rgba(52, 211, 153, 0.25);
          display: flex; align-items: center; justify-content: center;
          color: #34d399;
        }

        .nl-success-title {
          font-size: 22px;
          font-weight: 800;
          color: #0f172a;
          margin: 0;
        }

        .nl-success-sub {
          font-size: 14px;
          color: #64748b;
          line-height: 1.6;
          margin: 0;
          max-width: 280px;
        }

        .nl-resub-btn {
          font-size: 13px;
          font-weight: 600;
          color: #4f46e5;
          background: none;
          border: none;
          cursor: pointer;
          text-decoration: underline;
          font-family: inherit;
          padding: 4px 0;
        }

        /* ─── FOOTER BODY ─── */
        .ft-body {
          background: #f8fafc;
          border-top: 1px solid #e2e8f0;
          position: relative;
          overflow: hidden;
        }

        .ft-grid-line {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(0,0,0,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.025) 1px, transparent 1px);
          background-size: 48px 48px;
          pointer-events: none;
        }

        .ft-container {
          position: relative;
          z-index: 2;
          max-width: 1440px;
          margin: 0 auto;
          padding: 72px 40px 0;
          box-sizing: border-box;
          width: 100%;
        }

        /* Grid */
        .ft-cols {
          display: grid;
          grid-template-columns: 1.6fr 1fr 1.4fr 1.3fr;
          gap: 48px;
          padding-bottom: 60px;
        }

        .ft-col {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .ft-logo {
          height: 36px;
          width: auto;
          object-fit: contain;
          margin-bottom: 18px;
        }

        .ft-brand-desc {
          font-size: 14px;
          line-height: 1.75;
          color: #475569;
          margin: 0 0 22px;
          max-width: 280px;
        }

        /* Social */
        .ft-social-row {
          display: flex;
          gap: 10px;
          margin-bottom: 20px;
        }

        .ft-social-btn {
          width: 36px; height: 36px;
          border-radius: 10px;
          border: 1.5px solid #e2e8f0;
          background: #ffffff;
          color: #64748b;
          display: flex; align-items: center; justify-content: center;
          text-decoration: none;
          transition: all 0.22s ease;
          box-shadow: 0 1px 4px rgba(0,0,0,0.04);
        }

        .ft-social-btn:hover {
          background: #eff6ff;
          border-color: #bfdbfe;
          color: #2563eb;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(37,99,235,0.12);
        }

        /* ISO badge */
        .ft-verify-badge {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          font-size: 11.5px;
          font-weight: 600;
          color: #059669;
          background: rgba(16, 185, 129, 0.07);
          border: 1px solid rgba(16, 185, 129, 0.2);
          padding: 7px 12px;
          border-radius: 10px;
          width: fit-content;
        }

        /* Column headings */
        .ft-col-heading {
          font-size: 10.5px;
          font-weight: 700;
          letter-spacing: 1.8px;
          text-transform: uppercase;
          color: #0f172a;
          margin: 0 0 20px;
        }

        /* Link list */
        .ft-link-list {
          list-style: none;
          margin: 0; padding: 0;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .ft-link {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 14px;
          font-weight: 400;
          color: #475569;
          background: none;
          border: none;
          padding: 6px 0;
          cursor: pointer;
          text-align: left;
          transition: color 0.2s ease, gap 0.2s ease;
          font-family: inherit;
        }

        .ft-link:hover {
          color: #2563eb;
          gap: 14px;
        }

        .ft-link-dot {
          width: 4px; height: 4px;
          border-radius: 50%;
          background: #cbd5e1;
          flex-shrink: 0;
          transition: background 0.2s;
        }

        .ft-link:hover .ft-link-dot {
          background: #2563eb;
        }

        /* Contact list */
        .ft-contact-list {
          list-style: none;
          margin: 0; padding: 0;
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-bottom: 24px;
        }

        .ft-contact-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          font-size: 13.5px;
          line-height: 1.6;
          color: #475569;
        }

        .ft-contact-icon {
          width: 28px; height: 28px;
          border-radius: 8px;
          background: #eff6ff;
          border: 1px solid #bfdbfe;
          color: #2563eb;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
          margin-top: 1px;
        }

        .ft-contact-link {
          color: #475569;
          text-decoration: none;
          transition: color 0.2s;
          font-size: 13.5px;
        }

        .ft-contact-link:hover { color: #2563eb; }

        .ft-contact-cta {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          font-weight: 600;
          color: #3b82f6;
          background: rgba(59, 130, 246, 0.08);
          border: 1px solid rgba(59, 130, 246, 0.2);
          border-radius: 10px;
          padding: 10px 16px;
          cursor: pointer;
          transition: all 0.22s ease;
          font-family: inherit;
          width: fit-content;
        }

        .ft-contact-cta:hover {
          background: rgba(59, 130, 246, 0.16);
          border-color: rgba(59, 130, 246, 0.4);
          transform: translateY(-1px);
        }

        /* Divider */
        .ft-divider {
          height: 1px;
          background: linear-gradient(90deg, transparent, #e2e8f0 20%, #e2e8f0 80%, transparent);
        }

        /* Bottom bar */
        .ft-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 22px 0 28px;
          gap: 16px;
          flex-wrap: wrap;
        }

        .ft-copyright {
          font-size: 12.5px;
          color: #64748b;
          margin: 0;
          font-weight: 500;
        }

        .ft-bottom-links {
          display: flex;
          align-items: center;
          gap: 20px;
          flex-wrap: wrap;
        }

        .ft-bottom-link {
          font-size: 12px;
          color: #64748b;
          cursor: pointer;
          transition: color 0.2s;
        }

        .ft-bottom-link:hover { color: #2563eb; }

        .ft-credit {
          font-size: 12px;
          color: #94a3b8;
          margin: 0;
          font-weight: 500;
        }

        .ft-credit-brand {
          color: #2563eb;
          font-weight: 700;
        }

        .ft-credit-link {
          text-decoration: none;
          transition: color 0.2s, text-decoration 0.2s;
        }

        .ft-credit-link:hover {
          color: #1d4ed8;
          text-decoration: underline;
        }

        /* ─── RESPONSIVE ─── */
        @media (max-width: 1100px) {
          .nl-heading { font-size: 38px; }
          .ft-cols { grid-template-columns: 1.4fr 1fr 1.2fr; }
          .ft-col-brand { grid-column: 1 / -1; }
        }

        @media (max-width: 860px) {
          .nl-section { padding: 72px 0; }
          .nl-inner { grid-template-columns: 1fr; gap: 48px; padding: 0 24px; }
          .nl-heading { font-size: 34px; }
          .ft-container { padding: 52px 24px 0; }
          .ft-cols { grid-template-columns: 1fr 1fr; gap: 36px; }
          .ft-col-brand { grid-column: 1 / -1; }
          .ft-bottom { flex-direction: column; align-items: flex-start; gap: 12px; }
        }

        @media (max-width: 560px) {
          .nl-inner { padding: 0 20px; }
          .nl-heading { font-size: 28px; }
          .nl-form-card { padding: 28px 22px; }
          .ft-container { padding: 40px 20px 0; }
          .ft-cols { grid-template-columns: 1fr; }
          .ft-bottom-links { gap: 12px; }
        }
      `}</style>
    </footer>
  );
}

import { useState, useEffect } from "react";
import {
  ShieldCheck,
  Mail,
  Phone,
  MapPin,
  Calendar,
  CheckCircle,
  Sparkles,
  ArrowRight
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    societyName: "",
    flatCount: "50-150",
    modules: [],
    date: "",
    time: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Scroll animations observer
  useEffect(() => {
    const els = document.querySelectorAll(".reveal-auto");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const toggleModule = (moduleName) => {
    setFormData((prev) => {
      const alreadyChecked = prev.modules.includes(moduleName);
      return {
        ...prev,
        modules: alreadyChecked
          ? prev.modules.filter((m) => m !== moduleName)
          : [...prev.modules, moduleName],
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="w-full flex flex-col bg-white">
      {/* ================= HERO HEADER ================= */}
      <section className="hero-section-contact">
        <div className="section-container text-center reveal-auto">
          <div className="hero-badge-contact">
            <Sparkles size={14} className="badge-icon" />
            <span>Book a Product Demo</span>
          </div>

          <h1 className="hero-title-contact">
            Bring Gate360 to Your <span className="gradient-text">Housing Committee</span>
          </h1>

          <p className="hero-desc-contact">
            Schedule a dedicated, interactive product presentation with our community engineering architects. Learn how Gate360 can elevate safety and simplify accounting for your apartments.
          </p>
        </div>
      </section>

      {/* ================= CONTENT BODY ================= */}
      <section className="body-section-contact">
        <div className="section-container">
          <div className="contact-grid-layout">
            
            {/* Left Column: Office Contacts (Styled with Dark SaaS Theme) */}
            <div className="office-card-dark reveal-auto">
              <div className="card-top-content">
                <span className="office-eyebrow">Corporate Office</span>
                <h3 className="office-title">Gate360 Headquarters</h3>

                <ul className="office-details-list">
                  {/* Address */}
                  <li className="office-detail-item">
                    <div className="office-icon-wrapper">
                      <MapPin size={18} />
                    </div>
                    <div className="office-text-block">
                      <span className="office-label">Head Office Address</span>
                      <p className="office-value">
                        Gate360 SaaS Ltd,<br />
                        Amir Industrial Estate, 209, Sun Mill Compound,<br />
                        opposite Phoenix Mall, Parel, Mumbai, MH 400013
                      </p>
                    </div>
                  </li>

                  {/* Phone */}
                  <li className="office-detail-item">
                    <div className="office-icon-wrapper">
                      <Phone size={18} />
                    </div>
                    <div className="office-text-block">
                      <span className="office-label">Cooperative Helpline</span>
                      <a href="tel:+917738048925" className="office-link">
                        +91 79 7710 5170
                      </a>
                    </div>
                  </li>

                  {/* Email */}
                  <li className="office-detail-item">
                    <div className="office-icon-wrapper">
                      <Mail size={18} />
                    </div>
                    <div className="office-text-block">
                      <span className="office-label">Support Desk</span>
                      <a href="mailto:support@gate360.in" className="office-link">
                        support@gate360.in
                      </a>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Trust Badge Section */}
              <div className="trust-badge-block">
                <div className="badge-icon-box">
                  <ShieldCheck size={22} />
                </div>
                <div className="badge-text-box">
                  <span className="badge-title">ISO 27001 Certified Security</span>
                  <span className="badge-desc">
                    Guaranteed 99.9% uptime & strict multi-tenant collection isolation
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Dynamic Scheduler Form */}
            <div className="form-card-light reveal-auto">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="scheduler-form">
                  <span className="form-eyebrow">Scheduler Engine</span>
                  <h2>Select Your Presentation Slot</h2>
                  
                  <div className="form-row-grid">
                    {/* Name */}
                    <div className="input-field-group">
                      <label>Your Name</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Vinod Kumar"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>

                    {/* Email */}
                    <div className="input-field-group">
                      <label>Email Address</label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. vinodkumar@gmail.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="form-row-grid">
                    {/* Phone */}
                    <div className="input-field-group">
                      <label>Mobile Number</label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. 7977105170"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>

                    {/* Society Name */}
                    <div className="input-field-group">
                      <label>Gated Society Name</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Windsor Castle CHS"
                        value={formData.societyName}
                        onChange={(e) => setFormData({ ...formData, societyName: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="form-row-grid">
                    {/* Unit/Flat Size */}
                    <div className="input-field-group">
                      <label>Flats/Units Count</label>
                      <div className="select-input-container">
                        <select
                          value={formData.flatCount}
                          onChange={(e) => setFormData({ ...formData, flatCount: e.target.value })}
                        >
                          <option value="<50">Less than 50 Units</option>
                          <option value="50-150">50 - 150 Units</option>
                          <option value="150-250">150 - 250 Units</option>
                          <option value="250+">More than 250 Units</option>
                        </select>
                      </div>
                    </div>

                    {/* Target Booking Date */}
                    <div className="input-field-group">
                      <label>Preferred Demo Date</label>
                      <input
                        type="date"
                        required
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      />
                    </div>
                  </div>

                  {/* Modules of Interest */}
                  <div className="modules-selector-group">
                    <label>Target Modules of Interest</label>
                    <div className="modules-grid-options">
                      {[
                        "Gate Security",
                        "Billing Hub",
                        "SOS Panic Alerts",
                        "RWA Forums",
                      ].map((m) => {
                        const checked = formData.modules.includes(m);
                        return (
                          <button
                            key={m}
                            type="button"
                            onClick={() => toggleModule(m)}
                            className={`module-toggle-capsule ${checked ? "active" : ""}`}
                          >
                            {m}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Submit */}
                  <button type="submit" className="form-submit-btn-custom">
                    <Sparkles size={15} />
                    <span>Confirm Presentation Slot</span>
                  </button>
                </form>
              ) : (
                <div className="success-screen-block">
                  <div className="success-icon-box">
                    <CheckCircle size={32} />
                  </div>

                  <h3 className="success-title">Slot Booked Successfully!</h3>
                  
                  <p className="success-desc">
                    Congratulations <strong>{formData.name}</strong>, our community onboarding specialist will reach out to you at <strong>{formData.email}</strong> or <strong>{formData.phone}</strong> to confirm your walkthrough slot for <strong>{formData.societyName}</strong> ({formData.flatCount} units) on {formData.date}.
                  </p>

                  <button onClick={() => setIsSubmitted(false)} className="success-reset-btn">
                    <span>Schedule Another Presentation</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* ================= CUSTOM STYLES ================= */}
      <style jsx>{`
        .section-container {
          max-width: 1440px;
          margin: 0 auto;
          padding: 0 40px;
          width: 100%;
        }

        /* HERO HEADER */
        .hero-section-contact {
          padding: 140px 0 80px;
          background: radial-gradient(circle at 80% 20%, rgba(59, 130, 246, 0.08) 0%, rgba(79, 70, 229, 0.04) 50%, rgba(255, 255, 255, 0) 100%),
                      linear-gradient(180deg, #f8fafc 0%, #ffffff 100%);
          overflow: hidden;
          border-b: 1px solid #edf2f7;
        }

        .hero-badge-contact {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 1.5px;
          color: #2563eb;
          background: rgba(37, 99, 235, 0.07);
          padding: 6px 14px;
          border-radius: 99px;
          text-transform: uppercase;
          margin-bottom: 24px;
        }

        .hero-title-contact {
          font-size: 58px;
          font-weight: 800;
          line-height: 1.15;
          color: #0f172a;
          margin: 0 0 20px 0;
          letter-spacing: -0.02em;
        }

        .gradient-text {
          background: linear-gradient(135deg, #2563eb 0%, #4f46e5 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero-desc-contact {
          max-width: 800px;
          margin: 0 auto;
          font-size: 18px;
          line-height: 1.6;
          color: #475569;
        }

        /* BODY SECTION */
        .body-section-contact {
          padding: 100px 0;
          background: #ffffff;
        }

        .contact-grid-layout {
          display: grid;
          grid-template-columns: 0.95fr 1.05fr;
          gap: 48px;
          align-items: stretch;
        }

        /* OFFICE CARD - DARK SAAS STYLING */
        .office-card-dark {
          background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
          border-radius: 32px;
          padding: 48px;
          color: #ffffff;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          border: 1px solid rgba(255, 255, 255, 0.04);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.04);
        }

        .office-eyebrow {
          display: block;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 1.5px;
          color: #60a5fa;
          text-transform: uppercase;
          margin-bottom: 12px;
        }

        .office-title {
          font-size: 28px;
          font-weight: 800;
          margin: 0 0 36px 0;
          background: linear-gradient(135deg, #ffffff 0%, #93c5fd 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .office-details-list {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 32px;
        }

        .office-detail-item {
          display: flex;
          align-items: flex-start;
          gap: 16px;
        }

        .office-icon-wrapper {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.08);
          color: #60a5fa;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .office-text-block {
          text-align: left;
        }

        .office-label {
          display: block;
          font-size: 11px;
          font-weight: 700;
          color: #94a3b8;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 4px;
        }

        .office-value {
          font-size: 15px;
          line-height: 1.6;
          color: #e2e8f0;
          margin: 0;
        }

        .office-link {
          font-size: 16px;
          font-weight: 700;
          color: #ffffff;
          text-decoration: none;
          transition: color 0.2s;
        }

        .office-link:hover {
          color: #60a5fa;
        }

        /* ISO Badge */
        .trust-badge-block {
          margin-top: 48px;
          padding-top: 32px;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          display: flex;
          align-items: center;
          gap: 16px;
          text-align: left;
        }

        .badge-icon-box {
          width: 48px;
          height: 48px;
          border-radius: 14px;
          background: rgba(16, 185, 129, 0.1);
          border: 1px solid rgba(16, 185, 129, 0.2);
          color: #10b981;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .badge-text-box {
          display: flex;
          flex-direction: column;
        }

        .badge-title {
          font-size: 13.5px;
          font-weight: 700;
          color: #ffffff;
        }

        .badge-desc {
          font-size: 11.5px;
          color: #94a3b8;
          line-height: 1.4;
          margin-top: 2px;
        }

        /* LIGHT FORM CARD STYLING */
        .form-card-light {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 32px;
          padding: 48px;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.02);
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .scheduler-form {
          display: flex;
          flex-direction: column;
        }

        .form-eyebrow {
          display: block;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 1.5px;
          color: #2563eb;
          text-transform: uppercase;
          margin-bottom: 8px;
          text-align: left;
        }

        .scheduler-form h2 {
          font-size: 28px;
          font-weight: 800;
          color: #0f172a;
          margin: 0 0 32px 0;
          letter-spacing: -0.01em;
          text-align: left;
        }

        .form-row-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          margin-bottom: 20px;
        }

        .input-field-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
          text-align: left;
        }

        .input-field-group label {
          font-size: 11.5px;
          font-weight: 700;
          color: #475569;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .input-field-group input,
        .input-field-group select {
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          padding: 13px 16px;
          font-size: 14.5px;
          color: #0f172a;
          outline: none;
          transition: border-color 0.2s, background-color 0.2s, box-shadow 0.2s;
        }

        .input-field-group input:focus,
        .input-field-group select:focus {
          border-color: #3b82f6;
          background: #ffffff;
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.15);
        }

        .input-field-group input::placeholder {
          color: #cbd5e1;
        }

        /* Custom select styling */
        .select-input-container {
          position: relative;
          display: flex;
          width: 100%;
        }

        .select-input-container select {
          width: 100%;
          appearance: none;
          cursor: pointer;
        }

        /* Modules Capsule options */
        .modules-selector-group {
          display: flex;
          flex-direction: column;
          gap: 10px;
          text-align: left;
          margin-bottom: 32px;
        }

        .modules-selector-group label {
          font-size: 11.5px;
          font-weight: 700;
          color: #475569;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .modules-grid-options {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 8px;
        }

        .module-toggle-capsule {
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          color: #64748b;
          border-radius: 12px;
          padding: 10px 6px;
          font-size: 11px;
          font-weight: 700;
          transition: all 0.2s ease;
          cursor: pointer;
          white-space: nowrap;
          text-align: center;
        }

        .module-toggle-capsule:hover {
          background: #f1f5f9;
          border-color: #cbd5e1;
          color: #334155;
        }

        .module-toggle-capsule.active {
          background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
          color: #ffffff;
          border-color: transparent;
          box-shadow: 0 4px 10px rgba(37, 99, 235, 0.2);
        }

        /* Submit button */
        .form-submit-btn-custom {
          background: linear-gradient(135deg, #3b82f6 0%, #2563eb 50%, #4f46e5 100%);
          color: #ffffff;
          border: none;
          padding: 15px 30px;
          border-radius: 99px;
          font-weight: 700;
          font-size: 13.5px;
          text-transform: uppercase;
          letter-spacing: 1px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          cursor: pointer;
          box-shadow: 0 4px 14px rgba(37, 99, 235, 0.3);
          transition: transform 0.2s, opacity 0.2s, box-shadow 0.2s;
        }

        .form-submit-btn-custom:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(37, 99, 235, 0.45);
        }

        .form-submit-btn-custom:active {
          transform: scale(0.98);
        }

        /* SUCCESS STATE SCREEN */
        .success-screen-block {
          text-align: center;
          padding: 32px 10px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .success-icon-box {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background: rgba(16, 185, 129, 0.1);
          border: 1px solid rgba(16, 185, 129, 0.2);
          color: #10b981;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 24px;
          box-shadow: 0 8px 16px rgba(16, 185, 129, 0.1);
        }

        .success-title {
          font-size: 28px;
          font-weight: 800;
          color: #0f172a;
          margin: 0 0 12px 0;
          letter-spacing: -0.02em;
        }

        .success-desc {
          font-size: 15px;
          line-height: 1.65;
          color: #475569;
          max-width: 480px;
          margin: 0 auto 32px;
        }

        .success-reset-btn {
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          color: #475569;
          padding: 12px 28px;
          border-radius: 99px;
          font-weight: 700;
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          display: flex;
          align-items: center;
          gap: 6px;
          cursor: pointer;
          transition: all 0.2s;
        }

        .success-reset-btn:hover {
          background: #f1f5f9;
          border-color: #cbd5e1;
          color: #1e293b;
        }

        /* MEDIA QUERIES */
        @media (max-width: 1024px) {
          .hero-title-contact { font-size: 42px; }
          .contact-grid-layout { grid-template-columns: 1fr; gap: 40px; }
          .office-card-dark { padding: 40px; }
          .form-card-light { padding: 40px; }
        }

        @media (max-width: 640px) {
          .section-container { padding: 0 20px; }
          .form-row-grid { grid-template-columns: 1fr; gap: 16px; }
          .modules-grid-options { grid-template-columns: repeat(2, 1fr); }
          .office-card-dark { padding: 32px 20px; }
          .form-card-light { padding: 32px 20px; }
          .office-title { font-size: 24px; }
          .scheduler-form h2 { font-size: 22px; }
        }

        /* REVEAL ON SCROLL */
        :global(.reveal-auto) {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.85s cubic-bezier(0.25, 1, 0.5, 1), transform 0.85s cubic-bezier(0.25, 1, 0.5, 1);
        }
        :global(.reveal-auto.is-revealed) {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </div>
  );
}

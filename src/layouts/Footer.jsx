import { useState } from "react";
import { Mail, MapPin, Phone, ShieldCheck } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";

/* ─── Custom Icons ─── */
const Facebook = ({ size = 24, strokeWidth = 2, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const Instagram = ({ size = 24, strokeWidth = 2, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

/* ─── Typographic Logo ─── */
const Gate360Logo = () => (
  <div className="flex items-center gap-2 group">
    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#062417] to-[#0D5C3A] flex items-center justify-center shadow-md">
      <ShieldCheck size={22} className="text-[#10B981]" />
    </div>
    <div className="flex flex-col">
      <span
        className="text-xl font-bold tracking-tight text-[#121414]"
        style={{ fontFamily: '"Syne", sans-serif' }}
      >
        Gate
        <span className="bg-gradient-to-r from-[#059669] to-[#C9A86A] bg-clip-text text-transparent">
          360
        </span>
      </span>
      <span className="text-[9px] font-medium tracking-[0.15em] text-[#998F81] uppercase -mt-1 font-poppins">
        SOCIETY SAAS PLATFORM
      </span>
    </div>
  </div>
);

/* ─── Reusable column heading ─── */
const ColHeading = ({ children }) => (
  <h3
    className="
      text-[13px]
      sm:text-[14px]
      font-semibold
      tracking-[2px]
      uppercase
      text-[#121414]
      mb-5
    "
    style={{
      fontFamily: '"Plus Jakarta Sans", sans-serif',
    }}
  >
    {children}
  </h3>
);

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error'
  const [statusMessage, setStatusMessage] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setSubmitStatus("error");
      setStatusMessage("Please enter a valid email address.");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);
    setStatusMessage("");

    // Simulate database subscription successfully
    setTimeout(() => {
      setSubmitStatus("success");
      setStatusMessage("Thank you for subscribing to the Gate360 newsletter!");
      setEmail("");
      setIsSubmitting(false);
    }, 800);
  };

  const handleScrollClick = (e, targetPage) => {
    e.preventDefault();
    navigate(targetPage);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const quickLinksData = [
    { label: "Home", to: "/" },
    { label: "Features", to: "/services" },
    { label: "Product SRD", to: "/srd" },
    { label: "Interactive Demo", to: "/demo" },
    { label: "Contact Us", to: "/contact" },
  ];

  const features = [
    { label: "Gate & Visitor Security", to: "/services" },
    { label: "1-Click Emergency SOS", to: "/services" },
    { label: "Invoicing & Billing Hub", to: "/services" },
    { label: "Multi-tenant Dashboard", to: "/services" },
    { label: "Classifieds Marketplace", to: "/services" },
  ];

  return (
    <footer className="w-full">
      {/* ═════════════════ NEWSLETTER ═════════════════ */}
      <section
        className="
          w-full
          flex flex-col items-center justify-center text-center
          px-5 py-12
          sm:px-8 sm:py-14
          md:px-10 md:py-16
          lg:px-16 lg:py-20
          xl:px-20
          overflow-hidden
        "
        style={{ backgroundColor: "#F7F4EF" }}
      >
        <div className="w-full max-w-[920px] mx-auto">
          {/* Eyebrow */}
          <div className="mb-[18px]">
            <span
              className="
                inline-flex
                items-center
                gap-2
                text-[12px]
                sm:text-[13px]
                lg:text-[14px]
                uppercase
                tracking-[2px]
                font-medium
              "
              style={{
                color: "#059669",
                fontFamily: '"Plus Jakarta Sans", sans-serif',
              }}
            >
              <Mail size={15} strokeWidth={2.5} />
              NEWSLETTER
            </span>
          </div>

          {/* Heading */}
          <h2
            className="
              font-semibold
              text-[28px]
              sm:text-[42px]
              lg:text-[52px]
              xl:text-[56px]
              2xl:text-[60px]
              leading-[118%]
              tracking-[-0.5px]
              mb-[16px]
              text-[#121414]
              max-w-[340px]
              sm:max-w-[900px]
              mx-auto
            "
            style={{
              fontFamily: '"Plus Jakarta Sans", sans-serif',
            }}
          >
            Stay Updated with Gate360
          </h2>

          {/* Subtitle */}
          <p
            className="
              max-w-[640px]
              mx-auto
              mb-10 sm:mb-12
              text-[15px]
              sm:text-[16px]
              lg:text-[17px]
              leading-[180%]
              lg:leading-[32px]
            "
            style={{
              color: "#5C5A54",
              fontFamily: '"Plus Jakarta Sans", sans-serif',
              fontWeight: 400,
            }}
          >
            Insights, security bulletins, and smart gating trends delivered
            straight to your inbox.
          </p>

          {/* Input Wrapper */}
          <form
            onSubmit={handleSubscribe}
            className="w-full max-w-[540px] mx-auto px-1 sm:px-0"
          >
            <div
              className="
                flex items-stretch
                w-full
                overflow-hidden
                rounded-xl
              "
              style={{
                border: "1px solid rgba(18,20,20,0.18)",
                backgroundColor: "#FFFFFF",
              }}
            >
              {/* INPUT */}
              <input
                type="email"
                required
                disabled={isSubmitting}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="
                  flex-1
                  min-w-0
                  bg-transparent
                  outline-none
                  text-[13px]
                  sm:text-[15px]
                  lg:text-[16px]
                  placeholder:text-[#8E8A82]
                "
                style={{
                  color: "#121414",
                  padding: "15px 16px",
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                  fontWeight: 400,
                }}
              />

              {/* BUTTON */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="
                  shrink-0
                  min-w-[108px]
                  sm:min-w-[140px]
                  flex items-center justify-center
                  px-4
                  sm:px-8
                  text-[11px]
                  sm:text-[14px]
                  lg:text-[15px]
                  font-semibold
                  tracking-[1px]
                  sm:tracking-[1.5px]
                  uppercase
                  transition-all duration-300
                  hover:opacity-90
                  disabled:opacity-50
                  disabled:cursor-not-allowed
                  cursor-pointer
                "
                style={{
                  backgroundColor: "#059669",
                  color: "#FFFFFF",
                  borderLeft: "1px solid rgba(18,20,20,0.12)",
                  fontFamily: '"Plus Jakarta Sans", sans-serif',
                }}
                aria-label="Subscribe"
              >
                {isSubmitting ? "Subscribing..." : "Subscribe"}
              </button>
            </div>

            {submitStatus && (
              <div
                className={`mt-4 p-3 rounded-xl text-[13px] font-medium border text-center transition-all ${
                  submitStatus === "success"
                    ? "bg-emerald-50 text-emerald-800 border-emerald-200"
                    : "bg-rose-50 text-rose-800 border-rose-200"
                }`}
                style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
              >
                {statusMessage}
              </div>
            )}
          </form>
        </div>
      </section>

      {/* ═════════════════ FOOTER BODY ═════════════════ */}
      <div className="w-full bg-white">
        {/* Divider */}
        <div className="w-full h-px bg-[#E9E9E9]" />

        {/* Grid */}
        <div
          className="
            w-full
            max-w-[1680px]
            mx-auto
            grid
            grid-cols-2
            gap-x-8
            gap-y-12
            px-5 pt-10 pb-8
            lg:grid-cols-2
            lg:px-8 lg:pt-12 lg:pb-10
            xl:grid-cols-4
            xl:gap-x-8
            xl:gap-y-0
            xl:px-24 xl:pt-14 xl:pb-12
          "
        >
          {/* Brand */}
          <div className="col-span-2 xl:col-span-1 flex flex-col gap-5 text-left items-start">
            <Gate360Logo />

            <p
              className="
                text-[14px]
                sm:text-[15px]
                lg:text-[15px]
                leading-[170%]
                max-w-[320px]
              "
              style={{
                color: "rgba(0, 0, 0, 0.7)",
                fontFamily: '"Plus Jakarta Sans", sans-serif',
                fontWeight: 400,
              }}
            >
              Empowering gated communities across India with unified cloud
              security, automated billing, live guard dispatch, and multi-tenant
              SaaS excellence.
            </p>

            {/* Social */}
            <div className="flex items-center gap-[10px] mt-1">
              {[
                {
                  Icon: Facebook,
                  label: "Facebook",
                  href: "#",
                },
                {
                  Icon: Instagram,
                  label: "Instagram",
                  href: "#",
                },
                {
                  Icon: Mail,
                  label: "Email",
                  href: "mailto:support@gate360.in",
                },
              ].map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="
                    flex items-center justify-center
                    rounded-xl border
                    w-[38px] h-[38px]
                    transition-all duration-200
                    hover:border-[#059669]
                    hover:text-[#059669]
                  "
                  style={{
                    borderColor: "#E9E9E9",
                    color: "#121414",
                    backgroundColor: "#FAF9F6",
                  }}
                  aria-label={label}
                >
                  <Icon size={16} strokeWidth={1.8} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-left">
            <ColHeading>Quick Links</ColHeading>

            <ul className="flex flex-col gap-[12px]">
              {quickLinksData.map(({ label, to }) => (
                <li key={label}>
                  <button
                    onClick={(e) => handleScrollClick(e, to)}
                    className="
                      text-[14px]
                      sm:text-[15px]
                      transition-colors duration-200
                      hover:text-[#059669]
                      bg-transparent border-none outline-none p-0
                      cursor-pointer text-left
                    "
                    style={{
                      color: "rgba(0, 0, 0, 0.75)",
                      lineHeight: "180%",
                      fontFamily: '"Plus Jakarta Sans", sans-serif',
                    }}
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Modules */}
          <div className="text-left">
            <ColHeading>Core Modules</ColHeading>

            <ul className="flex flex-col gap-[12px]">
              {features.map((res) => (
                <li key={res.label}>
                  <button
                    onClick={(e) => handleScrollClick(e, res.to)}
                    className="
                      text-[14px]
                      sm:text-[15px]
                      transition-colors duration-200
                      hover:text-[#059669]
                      bg-transparent border-none outline-none p-0
                      cursor-pointer text-left
                    "
                    style={{
                      color: "rgba(0, 0, 0, 0.75)",
                      lineHeight: "180%",
                      fontFamily: '"Plus Jakarta Sans", sans-serif',
                    }}
                  >
                    {res.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-2 xl:col-span-1 text-left">
            <ColHeading>Get In Touch</ColHeading>

            <ul className="flex flex-col gap-[18px]">
              {/* Address */}
              <li className="flex items-start gap-[10px]">
                <span className="text-[#121414] mt-[2px] shrink-0">
                  <MapPin size={15} strokeWidth={1.8} />
                </span>

                <span
                  className="
                    text-[14px]
                    sm:text-[15px]
                  "
                  style={{
                    color: "rgba(0, 0, 0, 0.75)",
                    lineHeight: "160%",
                    fontFamily: '"Plus Jakarta Sans", sans-serif',
                  }}
                >
                  Gate360 Headquarters,
                  <br />
                  Amir Industrial Estate, 209, Sun Mill Compound,
                  <br />
                  opposite Phoenix Mall, Parel, Mumbai, Maharashtra 400013
                </span>
              </li>

              {/* Phone */}
              <li className="flex items-center gap-[10px]">
                <span className="text-[#121414] shrink-0">
                  <Phone size={15} strokeWidth={1.8} />
                </span>

                <a
                  href="tel:+917738048925"
                  className="
                    text-[14px]
                    sm:text-[15px]
                    transition-colors duration-200
                    hover:text-[#059669]
                  "
                  style={{
                    color: "rgba(0, 0, 0, 0.75)",
                    lineHeight: "160%",
                    fontFamily: '"Plus Jakarta Sans", sans-serif',
                  }}
                >
                  +91 79 7710 5170
                </a>
              </li>

              {/* Email */}
              <li className="flex items-center gap-[10px]">
                <span className="text-[#121414] shrink-0">
                  <Mail size={15} strokeWidth={1.8} />
                </span>

                <a
                  href="mailto:support@gate360.in"
                  className="
                    text-[14px]
                    sm:text-[15px]
                    transition-colors duration-200
                    hover:text-[#059669]
                    break-all
                  "
                  style={{
                    color: "rgba(0, 0, 0, 0.75)",
                    lineHeight: "160%",
                    fontFamily: '"Plus Jakarta Sans", sans-serif',
                  }}
                >
                  support@gate360.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-[#E9E9E9]" />

        {/* Bottom */}
        <div
          className="
            w-full
            flex flex-col
            items-center justify-center
            text-center
            gap-3
            py-6 px-5
          "
        >
          <p
            style={{
              fontFamily: '"Plus Jakarta Sans", sans-serif',
              fontWeight: 600,
              fontSize: "12px",
              color: "rgba(0, 0, 0, 0.6)",
              lineHeight: "170%",
              letterSpacing: "1.2px",
            }}
          >
            © {new Date().getFullYear()} Gate360 SaaS Ltd. All rights reserved.
            Secure community living begins here.
          </p>

          <div
            className="mt-1 font-medium"
            style={{
              fontFamily: '"Plus Jakarta Sans", sans-serif',
              fontSize: "11px",
              color: "rgba(0, 0, 0, 0.6)",
              letterSpacing: "1.2px",
              textTransform: "uppercase",
            }}
          >
            Designed by{" "}
            <span
              style={{
                color: "#059669",
                fontWeight: 800,
              }}
            >
              Gate360 Creative Lab
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

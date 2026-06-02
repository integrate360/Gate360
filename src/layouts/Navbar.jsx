import { useState, useEffect } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { ArrowRight, Menu, X, ShieldCheck } from "lucide-react";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Features" },
  { to: "/srd", label: "Product SRD" },
  { to: "/demo", label: "Interactive Demo" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Track scrolling to toggle navbar background styling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle active link styles
  const getLinkStyle = (isActive) => {
    return {
      fontFamily: '"Plus Jakarta Sans", sans-serif',
      fontWeight: 600,
      fontSize: "14px",
      letterSpacing: "0.02em",
      color: isActive ? "#059669" : "rgba(0, 0, 0, 0.75)",
      transition: "all 0.2s ease-in-out",
    };
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm border-[#E9E9E9]/60 py-3"
          : "bg-white border-[#E9E9E9] py-4"
      }`}
    >
      <div className="max-w-[1680px] mx-auto px-5 sm:px-8 lg:px-16 xl:px-24 flex items-center justify-between">
        
        {/* ================= BRAND LOGO ================= */}
        <NavLink to="/" className="flex items-center gap-2.5 group shrink-0">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#062417] to-[#0D5C3A] flex items-center justify-center shadow-md transition-all duration-300 group-hover:scale-105">
            <ShieldCheck size={22} className="text-[#10B981]" />
          </div>
          <div className="flex flex-col">
            <span
              className="text-xl font-bold tracking-tight text-[#121414]"
              style={{ fontFamily: '"Syne", sans-serif' }}
            >
              Gate<span className="bg-gradient-to-r from-[#059669] to-[#C9A86A] bg-clip-text text-transparent">360</span>
            </span>
            <span className="text-[9px] font-medium tracking-[0.15em] text-[#998F81] uppercase -mt-1 font-poppins">
              SOCIETY SAAS PLATFORM
            </span>
          </div>
        </NavLink>

        {/* ================= DESKTOP NAV ================= */}
        <div className="hidden lg:flex items-center gap-9">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className="relative py-1 hover:text-[#059669] transition-colors"
              style={({ isActive }) => getLinkStyle(isActive)}
            >
              {({ isActive }) => (
                <div className="flex flex-col items-center">
                  <span>{label}</span>
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 w-full h-[2.5px] bg-[#059669] rounded-full animate-pulse" />
                  )}
                </div>
              )}
            </NavLink>
          ))}
        </div>

        {/* ================= ACTION BUTTONS / HAMBURGER ================= */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate("/demo")}
            className="hidden sm:flex items-center justify-center gap-2 h-[44px] px-6 rounded-xl text-sm font-semibold tracking-wider uppercase transition-all duration-300 hover:scale-[1.02] shadow-sm hover:shadow-md cursor-pointer"
            style={{
              backgroundColor: "#059669",
              color: "#FFFFFF",
              fontFamily: '"Plus Jakarta Sans", sans-serif',
            }}
          >
            <span>Portal Demo</span>
            <ArrowRight size={15} strokeWidth={2.5} className="text-white" />
          </button>

          {/* Hamburger button */}
          <button
            onClick={() => setMenuOpen((o) => !o)}
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-xl border border-[#DADADA] transition-all hover:bg-neutral-50 active:scale-95"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <X size={20} color="#121414" /> : <Menu size={20} color="#121414" />}
          </button>
        </div>
      </div>

      {/* ================= MOBILE / TABLET MENU ================= */}
      {menuOpen && (
        <div className="lg:hidden w-full bg-white border-t border-[#ECECEC] px-6 py-6 flex flex-col gap-4 shadow-inner">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              onClick={() => setMenuOpen(false)}
              className="py-2 hover:text-[#C9A86A] transition-colors"
              style={({ isActive }) => ({
                fontFamily: '"Plus Jakarta Sans", sans-serif',
                fontWeight: 600,
                fontSize: "15px",
                color: isActive ? "#059669" : "rgba(0, 0, 0, 0.8)",
              })}
            >
              {label}
            </NavLink>
          ))}

          {/* Mobile CTA */}
          <button
            onClick={() => {
              navigate("/demo");
              setMenuOpen(false);
            }}
            className="sm:hidden mt-2 w-full h-[46px] rounded-xl flex items-center justify-center gap-2 cursor-pointer transition-all active:scale-95 shadow-sm"
            style={{
              backgroundColor: "#059669",
              color: "#FFFFFF",
              fontFamily: '"Plus Jakarta Sans", sans-serif',
              fontWeight: 600,
              fontSize: "14px",
            }}
          >
            <span>Launch Portal Demo</span>
            <ArrowRight size={15} strokeWidth={2.5} />
          </button>
        </div>
      )}
    </nav>
  );
}
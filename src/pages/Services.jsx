import { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Search,
  ShieldCheck,
  CreditCard,
  Radio,
  Sliders,
  DollarSign,
  Users,
  Smartphone,
  ShieldAlert,
  Clock,
  Layers,
  ArrowRight,
  Sparkles,
  ClipboardList,
  Mail,
  Zap,
  CheckCircle2,
  Lock,
  Server,
  Building,
  MessageSquare,
  Briefcase,
  Calendar,
  FileText,
  Image,
  Star,
  Megaphone,
  Store,
  HelpCircle,
  ChevronRight
} from "lucide-react";

// BookOpen SVG stub
const BookOpenStub = ({ size = 20, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
  </svg>
);

const CATEGORIES = [
  {
    id: "admin",
    label: "Society Admin Features",
    shortLabel: "Society Admin",
    accentHsl: "217, 91%, 60%",   // blue
    accentRaw: "#2563eb",
    gradFrom: "#3b82f6",
    gradTo: "#4f46e5",
    bgLight: "rgba(37,99,235,0.06)",
    borderLight: "rgba(37,99,235,0.18)",
    description: "Manage society databases, wings, towers, security guards, domestic helpers, notice boards, polls, events, and complex routing workflows."
  },
  {
    id: "resident",
    label: "Resident Portal Features",
    shortLabel: "Resident Portal",
    accentHsl: "271, 81%, 56%",   // purple
    accentRaw: "#9333ea",
    gradFrom: "#a855f7",
    gradTo: "#7c3aed",
    bgLight: "rgba(147,51,234,0.06)",
    borderLight: "rgba(147,51,234,0.18)",
    description: "A secure digital resident dashboard to manage gate passes, request services, book amenities, browse marketplace, and trigger instant SOS alerts."
  },
  {
    id: "guard",
    label: "Security Guard Features",
    shortLabel: "Security Guard",
    accentHsl: "22, 90%, 48%",    // orange
    accentRaw: "#ea580c",
    gradFrom: "#f97316",
    gradTo: "#ea580c",
    bgLight: "rgba(234,88,12,0.06)",
    borderLight: "rgba(234,88,12,0.18)",
    description: "Real-time tablet console for security staff to authenticate visitor pre-approvals, log deliveries, trace attendance, and monitor SOS triggers."
  },
  {
    id: "accountant",
    label: "Accountant Features",
    shortLabel: "Accountant",
    accentHsl: "142, 71%, 45%",   // green
    accentRaw: "#16a34a",
    gradFrom: "#22c55e",
    gradTo: "#16a34a",
    bgLight: "rgba(22,163,74,0.06)",
    borderLight: "rgba(22,163,74,0.18)",
    description: "Dedicated financial suite to configure rates, track outstanding dues, manage collections, record payments, and compile PDF statements."
  }
];

const MODULES = [
  // SOCIETY ADMIN FEATURES
  { id: 1,  category: "admin", icon: Users,           title: "Resident Management",       desc: "Add residents to wings and flats with full profile details, contact info, and ownership records.", keyPoints: ["Wing & flat association", "Full profile detailing", "Owner/tenant status tracking"] },
  { id: 2,  category: "admin", icon: Building,        title: "Units Structure",           desc: "Configure multi-tower layouts, wings, and flexible flat numbering schemas inside the portal.", keyPoints: ["Tower & wing builder", "Flat classification", "Custom numbering support"] },
  { id: 3,  category: "admin", icon: ShieldAlert,      title: "SOS Console",               desc: "Receive real-time local society emergency alerts, view unit coordinates, log resolution notes, and close cases.", keyPoints: ["Real-time alert receiver", "Visual unit mapping", "Audit trail resolution logs"] },
  { id: 4,  category: "admin", icon: DollarSign,       title: "Bill Management",           desc: "Generate society invoices, track active paid/unpaid/overdue balances, and download digital PDF receipts.", keyPoints: ["Bulk invoice generator", "Real-time payment tracking", "PDF receipt downloads"] },
  { id: 5,  category: "admin", icon: ClipboardList,    title: "Visitor Registry",          desc: "Audit society-wide visitor logs and verify resident-generated pre-approved access codes instantly.", keyPoints: ["Full visitor history logs", "Pre-approval code lookup", "Access validation logs"] },
  { id: 6,  category: "admin", icon: Layers,           title: "Delivery Management",       desc: "Log incoming courier parcels at the gate and send automated pick-up alerts to resident accounts.", keyPoints: ["Parcel status tracking", "Automated resident alerts", "Digital handover signatures"] },
  { id: 7,  category: "admin", icon: Sliders,          title: "Service Requests",          desc: "Track and assign plumbing, electrical, carpentry, and general maintenance tasks to on-duty staff.", keyPoints: ["Technician assignment board", "SLA & status tracking", "Resident feedback loop"] },
  { id: 8,  category: "admin", icon: Megaphone,        title: "Notice Board",              desc: "Publish categorized official notices, announcements, and RWA circulars directly to the resident feed.", keyPoints: ["Rich text publisher", "Priority alert tiers", "Circular history archive"] },
  { id: 9,  category: "admin", icon: FileText,         title: "Polls & Surveys",           desc: "Create community decision polls and run surveys with real-time transparent voting counts.", keyPoints: ["Instant decision voting", "Anonymity toggle controls", "Live results visualization"] },
  { id: 10, category: "admin", icon: Lock,             title: "Security Management",       desc: "Register guards, configure entry-gate checkpoints, assign shifts, and manage active status logs.", keyPoints: ["Guard profile directory", "Gate checkpoint mapping", "Shift roster scheduler"] },
  { id: 11, category: "admin", icon: Clock,            title: "Staff Attendance",          desc: "Digitize shift check-in/out logs for guards, helpers, and general maintenance contractors.", keyPoints: ["Real-time check-in logs", "Overtime hour calculations", "Biometric/QR scanning integration"] },
  { id: 12, category: "admin", icon: BookOpenStub,     title: "Daily Help Directory",      desc: "Maintain a verified directory of local maids, drivers, and cooks linked directly to resident flats.", keyPoints: ["Verified helper indexing", "Flat mapping link", "Emergency contact info"] },
  { id: 13, category: "admin", icon: Calendar,         title: "Events Coordinator",        desc: "Organize community cultural gatherings, sports tournaments, and festivals while managing RSVPs.", keyPoints: ["Gathering scheduler", "RSVP tracking console", "Event image galleries"] },
  { id: 14, category: "admin", icon: Calendar,         title: "Amenities Booking",         desc: "Manage shared facility reservations with automatic conflict checks and holiday schedule blocks.", keyPoints: ["Conflict resolution engine", "Usage duration limits", "Block-out day scheduler"] },
  { id: 15, category: "admin", icon: Store,            title: "Classifieds Marketplace",   desc: "Approve and monitor buy-sell listings, real estate posts, and local job boards within the community.", keyPoints: ["Market moderation console", "Ad category filter", "Spam/abuse protection"] },
  { id: 16, category: "admin", icon: MessageSquare,    title: "Community Blogs",           desc: "Review, edit, and approve resident-submitted articles and lifestyle updates before public feed post.", keyPoints: ["Content approval queue", "Rich text editor", "Resident author indexing"] },
  { id: 17, category: "admin", icon: MessageSquare,    title: "Chat & Messaging",          desc: "Direct and group messaging pipelines to communicate directly with residents and security guards.", keyPoints: ["Real-time messaging channels", "Group channel broadcast", "File & image sharing support"] },

  // RESIDENT PORTAL FEATURES
  { id: 18, category: "resident", icon: Building,      title: "Personal Dashboard",        desc: "View official notices, upcoming events, real-time invoice status, and parcel delivery alerts.", keyPoints: ["Centralized feed view", "Real-time notice ticker", "Unread counts badge"] },
  { id: 19, category: "resident", icon: ShieldCheck,   title: "Pre-Approved Visitor Entry",desc: "Generate secure digital gate passes with custom dates and timeframes for your guests.", keyPoints: ["Custom active dates", "One-tap pass share", "Instant gate entry notification"] },
  { id: 20, category: "resident", icon: ClipboardList, title: "Service Ticket Panel",      desc: "File home maintenance requests with photos, track technician progress, and rate resolution quality.", keyPoints: ["Photo upload support", "Real-time status updates", "5-star rating & feedback"] },
  { id: 21, category: "resident", icon: Store,         title: "Classifieds Hub",           desc: "Post, edit, or browse household items, furniture, and gadgets for sale from fellow residents.", keyPoints: ["Buy-sell listings", "In-app peer chat link", "Item image gallery"] },
  { id: 22, category: "resident", icon: Building,      title: "Property Exchange",         desc: "List your unit for sale or rent and coordinate directly with potential buyers or tenants.", keyPoints: ["Rent/sale ad builder", "Verified resident badge", "Direct inquiry routing"] },
  { id: 23, category: "resident", icon: Calendar,      title: "Facility Reservations",     desc: "Book clubhouse, tennis courts, or the swimming pool using visual real-time calendars.", keyPoints: ["Visual calendar slot book", "Instant email confirm", "Booking cancel policy rules"] },
  { id: 24, category: "resident", icon: Zap,           title: "Emergency SOS Trigger",     desc: "One-click panic button that alerts security guards and society administrators in under 300ms.", keyPoints: ["Instant 1-click trigger", "Under 300ms guard dispatch", "Direct location broadcast"] },
  { id: 25, category: "resident", icon: BookOpenStub,  title: "Help Directory",            desc: "Search verified local service providers, domestic helpers, and add them to your household roster.", keyPoints: ["Verified vendor index", "Helper rating display", "Add-to-flat listing"] },
  { id: 26, category: "resident", icon: FileText,      title: "Invoices & Receipts",       desc: "View complete billing history, track outstanding payments, and download official PDF receipts.", keyPoints: ["Billing history archive", "Outstanding balance details", "PDF receipt downloads"] },
  { id: 27, category: "resident", icon: MessageSquare, title: "Chat & Messaging",          desc: "Secure direct messaging channel to reach society administrators or guard gates instantly.", keyPoints: ["Direct guard desk chat", "Admin helpline ticket link", "Instant notification relays"] },

  // SECURITY GUARD FEATURES
  { id: 28, category: "guard", icon: Users,           title: "Visitor Interface",         desc: "Log visitor names, contact details, vehicle numbers, target flat unit, and purpose of visit.", keyPoints: ["Fast-fill contact logger", "Vehicle plate number index", "Real-time visitor mapping"] },
  { id: 29, category: "guard", icon: ShieldCheck,     title: "Entry Code Validator",      desc: "Verify resident-generated digital pre-approval gate passes with instant system validation.", keyPoints: ["Numeric/QR code validation", "Expired code rejection", "Auto-clear check-in"] },
  { id: 30, category: "guard", icon: Mail,            title: "Delivery Logger",           desc: "Record parcels with carrier details, log flat number, and trigger automatic resident notification.", keyPoints: ["Carrier profile dropdown", "Automated alert trigger", "Parcel storage status"] },
  { id: 31, category: "guard", icon: ShieldAlert,     title: "SOS Monitor",               desc: "High-priority red alert panel with auditory alarms, displaying flat coordinates and owner details.", keyPoints: ["Auditory alarm trigger", "Red-alert flashing banner", "One-tap responder route"] },
  { id: 32, category: "guard", icon: Clock,           title: "Helper Attendance",         desc: "Scan digital check-in/out codes for domestic helper entries and exits.", keyPoints: ["Fast helper check-in", "Gate timestamp tracking", "Resident helper notifications"] },
  { id: 33, category: "guard", icon: Lock,            title: "Blacklist Check",           desc: "System instantly flags and blocks entries from blacklisted visitor or helper profiles.", keyPoints: ["Instant security warning", "Auto-block gate entry", "RWA alert dispatch"] },
  { id: 34, category: "guard", icon: MessageSquare,   title: "Chat & Messaging",          desc: "Stay in constant sync with society administrators and active residents with instant messaging.", keyPoints: ["Guard-to-admin help desk", "Resident emergency ping", "Pre-set quick response templates"] },

  // ACCOUNTANT FEATURES
  { id: 35, category: "accountant", icon: DollarSign,  title: "Ledger Dashboard",          desc: "Track total collections, outstanding maintenance dues, cash flows, and overall RWA financial health.", keyPoints: ["Real-time cash flow chart", "Outstanding collection index", "RWA dashboard report"] },
  { id: 36, category: "accountant", icon: Sliders,     title: "Fee Setup",                 desc: "Configure monthly or quarterly maintenance rates and structure custom line-item society charges.", keyPoints: ["Flexible billing scheduler", "Line-item tax builder", "Flat-area based pricing"] },
  { id: 37, category: "accountant", icon: FileText,    title: "Invoicing Registry",        desc: "Review active bill registers, identify delinquent units, and dispatch payment reminder templates.", keyPoints: ["Unpaid bill index tracker", "Delinquent unit highlighting", "Bulk email/SMS reminders"] },
  { id: 38, category: "accountant", icon: CreditCard,  title: "Billing Adjustments",       desc: "Record and allocate manual cash, check, or direct bank transfer payments to update balances.", keyPoints: ["Manual payment logging", "Multi-method allocation", "Balance offset calculator"] },
  { id: 39, category: "accountant", icon: FileText,    title: "PDF Bill Compiler",         desc: "Generate, preview, compile, and print customized official society maintenance statements.", keyPoints: ["Bulk PDF compilation", "Custom letterhead billing", "Direct print optimization"] }
];

const SPECS = [
  { icon: Layers,      title: "Multi-Tenant DB Isolation",   desc: "Strict database-level separation ensures full transactional privacy. Every request is scoped by an indexed x-society-id context header." },
  { icon: Zap,         title: "Real-Time Socket SOS Relay",  desc: "Dual Socket.io broadcast listeners route emergency triggers between residents, guards, and RWA committees in under 300 milliseconds." },
  { icon: Clock,       title: "Automatic Cron Schedulers",   desc: "High-frequency node-cron engines monitor payment cycles, calculate dynamic late fees, and auto-resolve expired SOS alerts." },
  { icon: Server,      title: "AWS Cloud Storage Vaults",    desc: "Direct AWS S3 integration provides a role-shielded repository for building plans, bylaws, audit PDFs, and circular documents." },
  { icon: Smartphone,  title: "FCM Push Notification Hubs",  desc: "Cross-platform mobile push with custom sound alerts for gate passes, package deliveries, and RWA committee notices." },
  { icon: ShieldCheck, title: "Deep Security Middleware",    desc: "Multi-layer API filters enforce strict society context, protecting resident databases with bank-grade request-level defenses." }
];

export default function Services() {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState("");

  // Determine initial state based on router location state if coming from home or footer clicks
  const initialCategory = location.state?.category || "admin";
  const initialModuleId = location.state?.moduleId || (
    initialCategory === "admin" ? 1 :
    initialCategory === "resident" ? 18 :
    initialCategory === "guard" ? 28 : 35
  );

  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [activeModuleId, setActiveModuleId] = useState(initialModuleId);
  const contentRef = useRef(null);

  // Sync category and module when location state changes (e.g. from footer clicks on same page)
  useEffect(() => {
    if (location.state?.category) {
      setActiveCategory(location.state.category);
      const first = MODULES.find(m => m.category === location.state.category);
      if (first) {
        setActiveModuleId(location.state.moduleId || first.id);
      }
      // Scroll smoothly to showcase section with a top offset for the sticky header
      setTimeout(() => {
        if (contentRef.current) {
          const yOffset = -80; // Navbar height offset
          const y = contentRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      }, 80);
    }
  }, [location.state]);

  // IntersectionObserver for scroll reveals
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
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [activeCategory]);

  // When switching category, reset active module to first in that category
  const handleCategoryChange = (catId) => {
    setActiveCategory(catId);
    const first = MODULES.find(m => m.category === catId);
    if (first) setActiveModuleId(first.id);
  };

  const currentCat = CATEGORIES.find(c => c.id === activeCategory) || CATEGORIES[0];

  // Filtered modules for search
  const searchResults = searchQuery.trim()
    ? MODULES.filter(m =>
        m.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        m.desc.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : null;

  const displayModules = searchResults || MODULES.filter(m => m.category === activeCategory);
  const activeModule = MODULES.find(m => m.id === activeModuleId) || displayModules[0];

  return (
    <div className="svc-root">

      {/* ═══════════════════ HERO ═══════════════════ */}
      <section className="svc-hero reveal-auto">
        <div className="svc-hero-glow" style={{ background: `radial-gradient(ellipse at 60% 0%, ${currentCat.bgLight.replace('0.06','0.12')} 0%, transparent 70%)` }} />
        <div className="svc-container text-center">
          <div className="svc-badge" style={{ color: currentCat.accentRaw, background: currentCat.bgLight, border: `1px solid ${currentCat.borderLight}` }}>
            <Sparkles size={13} />
            <span>Platform Features</span>
          </div>

          <h1 className="svc-hero-h1">
            The Complete <span className="svc-grad-text" style={{ backgroundImage: `linear-gradient(135deg, ${currentCat.gradFrom}, ${currentCat.gradTo})` }}>27-Module Platform</span>
          </h1>

          <p className="svc-hero-sub">
            Gate360 is engineered as an exhaustive gated-community operating system. Explore every module below — from security to SaaS infrastructure.
          </p>

          {/* Search */}
          <div className="svc-search-wrap">
            <Search className="svc-search-icon" size={16} />
            <input
              type="text"
              placeholder="Search any module — SOS, QR, UPI, Amenity…"
              value={searchQuery}
              onChange={e => { setSearchQuery(e.target.value); }}
              className="svc-search-input"
              style={{ "--focus-color": currentCat.accentRaw }}
            />
            {searchQuery && (
              <button className="svc-search-clear" onClick={() => setSearchQuery("")}>✕</button>
            )}
          </div>

          {/* Stats Row */}
          <div className="svc-stats-row reveal-auto">
            {[
              { num: "27", label: "Feature Modules" },
              { num: "4",  label: "Core Categories" },
              { num: "300ms", label: "SOS Relay Time" },
              { num: "∞",  label: "Connected Societies" }
            ].map((s, i) => (
              <div key={i} className="svc-stat-item">
                <span className="svc-stat-num" style={{ backgroundImage: `linear-gradient(135deg, ${currentCat.gradFrom}, ${currentCat.gradTo})` }}>{s.num}</span>
                <span className="svc-stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ SEARCH RESULTS (shown only when searching) ═══════════════════ */}
      {searchResults && (
        <section className="svc-search-results-section">
          <div className="svc-container">
            <p className="svc-results-label">{searchResults.length} result{searchResults.length !== 1 ? "s" : ""} for "<strong>{searchQuery}</strong>"</p>
            <div className="svc-results-list">
              {searchResults.length === 0 ? (
                <div className="svc-no-results">
                  <span>No modules found. Try "SOS", "QR", "billing", or "parking".</span>
                </div>
              ) : (
                searchResults.map(m => {
                  const Icon = m.icon;
                  const cat = CATEGORIES.find(c => c.id === m.category);
                  return (
                    <div key={m.id} className="svc-result-row reveal-auto" style={{ "--cat-accent": cat.accentRaw, "--cat-bg": cat.bgLight, "--cat-border": cat.borderLight }}>
                      <div className="svc-result-icon-wrap">
                        <Icon size={18} />
                      </div>
                      <div className="svc-result-body">
                        <div className="svc-result-cat">{cat.shortLabel}</div>
                        <div className="svc-result-title">{m.title}</div>
                        <div className="svc-result-desc">{m.desc}</div>
                      </div>
                      <div className="svc-result-points">
                        {m.keyPoints.map((kp, ki) => (
                          <span key={ki} className="svc-key-point"><CheckCircle2 size={12} /> {kp}</span>
                        ))}
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </section>
      )}

      {/* ═══════════════════ SHOWCASE (hidden when searching) ═══════════════════ */}
      {!searchResults && (
        <section ref={contentRef} className="svc-showcase-section">
          <div className="svc-container svc-showcase-layout">

            {/* ── Left: sticky category nav ── */}
            <aside className="svc-cat-nav">
              <p className="svc-cat-nav-heading">Categories</p>
              {CATEGORIES.map(cat => (
                <button
                  key={cat.id}
                  className={`svc-cat-btn ${activeCategory === cat.id ? "active" : ""}`}
                  style={activeCategory === cat.id ? {
                    "--cat-from": cat.gradFrom,
                    "--cat-to": cat.gradTo,
                    "--cat-accent": cat.accentRaw,
                    "--cat-bg": cat.bgLight,
                    "--cat-border": cat.borderLight
                  } : {}}
                  onClick={() => handleCategoryChange(cat.id)}
                >
                  <span className="svc-cat-dot" style={activeCategory === cat.id ? { background: `linear-gradient(135deg, ${cat.gradFrom}, ${cat.gradTo})` } : {}} />
                  <span className="svc-cat-btn-label">{cat.label}</span>
                  <span className="svc-cat-count">{MODULES.filter(m => m.category === cat.id).length}</span>
                </button>
              ))}

              {/* Category info card */}
              <div className="svc-cat-info-card reveal-auto" style={{ "--cat-accent": currentCat.accentRaw, "--cat-bg": currentCat.bgLight, "--cat-border": currentCat.borderLight }}>
                <div className="svc-cat-info-icon" style={{ background: `linear-gradient(135deg, ${currentCat.gradFrom}, ${currentCat.gradTo})` }}>
                  <Sparkles size={14} color="#fff" />
                </div>
                <p className="svc-cat-info-text">{currentCat.description}</p>
              </div>
            </aside>

            {/* ── Right: feature rows + detail panel ── */}
            <div className="svc-feature-area" ref={contentRef}>
              {/* Category header */}
              <div className="svc-feature-cat-header reveal-auto">
                <span className="svc-feature-cat-pill" style={{ color: currentCat.accentRaw, background: currentCat.bgLight, border: `1px solid ${currentCat.borderLight}` }}>
                  {currentCat.shortLabel}
                </span>
                <h2 className="svc-feature-cat-title">{currentCat.label}</h2>
                <span className="svc-feature-module-count">{MODULES.filter(m => m.category === activeCategory).length} Modules</span>
              </div>

              {/* Feature row list */}
              <div className="svc-feature-list">
                {MODULES.filter(m => m.category === activeCategory).map((m, idx) => {
                  const Icon = m.icon;
                  const isActive = m.id === activeModuleId;
                  return (
                    <div
                      key={m.id}
                      className={`svc-feature-row reveal-auto ${isActive ? "active" : ""}`}
                      style={{ "--cat-from": currentCat.gradFrom, "--cat-to": currentCat.gradTo, "--cat-accent": currentCat.accentRaw, "--cat-bg": currentCat.bgLight, "--cat-border": currentCat.borderLight, animationDelay: `${idx * 40}ms` }}
                      onClick={() => setActiveModuleId(isActive ? null : m.id)}
                    >
                      {/* Row number */}
                      <span className="svc-row-num">{String(idx + 1).padStart(2, "0")}</span>

                      {/* Icon */}
                      <div className="svc-row-icon">
                        <Icon size={18} />
                      </div>

                      {/* Main content */}
                      <div className="svc-row-content">
                        <div className="svc-row-title-wrap">
                          <span className="svc-row-title">{m.title}</span>
                          <ChevronRight size={16} className={`svc-row-chevron ${isActive ? "rotated" : ""}`} />
                        </div>
                        {isActive && (
                          <div className="svc-row-detail">
                            <p className="svc-row-desc">{m.desc}</p>
                            <div className="svc-row-keypoints">
                              {m.keyPoints.map((kp, ki) => (
                                <span key={ki} className="svc-kp-chip">
                                  <CheckCircle2 size={11} />
                                  {kp}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ═══════════════════ BACKEND SPECS ═══════════════════ */}
      <section className="svc-specs-section">
        <div className="svc-specs-glow" />
        <div className="svc-container">
          <div className="svc-specs-header reveal-auto">
            <span className="svc-badge" style={{ color: "#4f46e5", background: "rgba(79,70,229,0.07)", border: "1px solid rgba(79,70,229,0.15)" }}>
              <Server size={12} /> Enterprise Engine
            </span>
            <h2 className="svc-specs-h2">Ultra-Low Latency Backend Infrastructure</h2>
            <p className="svc-specs-sub">Behind the beautiful Gate360 interface is a highly reliable, cluster-ready API ecosystem built to scale to millions of connected homes.</p>
          </div>

          <div className="svc-specs-grid">
            {SPECS.map((sp, i) => {
              const Icon = sp.icon;
              return (
                <div key={i} className="svc-spec-card reveal-auto" style={{ transitionDelay: `${i * 60}ms` }}>
                  <div className="svc-spec-num">0{i + 1}</div>
                  <div className="svc-spec-icon">
                    <Icon size={20} />
                  </div>
                  <h3 className="svc-spec-title">{sp.title}</h3>
                  <p className="svc-spec-desc">{sp.desc}</p>
                  <div className="svc-spec-bar" />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════ CTA ═══════════════════ */}
      <section className="svc-cta-section">
        <div className="svc-container">
          <div className="svc-cta-box reveal-auto">
            <div className="svc-cta-glow" />
            <div className="svc-cta-inner">
              <span className="svc-cta-badge">Personalized Product Walkthrough</span>
              <h2 className="svc-cta-h2">Ready to Elevate Your Gated Community?</h2>
              <p className="svc-cta-p">Schedule a direct product walkthrough with our onboarding specialists and see how Gate360 automates gates, finance, and community — all in one platform.</p>
              <div className="svc-cta-btns">
                <button onClick={() => navigate("/contact")} className="svc-btn-primary">
                  <span>Schedule Product Demo</span>
                  <ArrowRight size={15} />
                </button>
                <button onClick={() => navigate("/contact")} className="svc-btn-ghost">
                  <span>Contact Onboarding</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ STYLES ═══════════════════ */}
      <style jsx>{`
        /* ── ROOT ── */
        .svc-root {
          width: 100%;
          display: flex;
          flex-direction: column;
          background: #ffffff;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        }

        .svc-container {
          max-width: 1320px;
          margin: 0 auto;
          padding: 0 48px;
          width: 100%;
        }

        /* ── HERO ── */
        .svc-hero {
          padding: 140px 0 80px;
          position: relative;
          overflow: hidden;
          background: linear-gradient(180deg, #f8fafc 0%, #ffffff 100%);
          border-bottom: 1px solid #edf2f7;
          text-align: center;
        }

        .svc-hero-glow {
          position: absolute;
          inset: 0;
          pointer-events: none;
          transition: background 0.6s ease;
        }

        .svc-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 1.4px;
          text-transform: uppercase;
          padding: 6px 14px;
          border-radius: 99px;
          margin-bottom: 22px;
          transition: all 0.4s ease;
        }

        .svc-hero-h1 {
          font-size: 60px;
          font-weight: 800;
          line-height: 1.12;
          color: #0f172a;
          margin: 0 0 20px;
          letter-spacing: -0.025em;
        }

        .svc-grad-text {
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          transition: background-image 0.5s ease;
        }

        .svc-hero-sub {
          max-width: 700px;
          margin: 0 auto 36px;
          font-size: 18px;
          line-height: 1.65;
          color: #475569;
        }

        /* SEARCH */
        .svc-search-wrap {
          max-width: 520px;
          margin: 0 auto 48px;
          position: relative;
        }

        .svc-search-icon {
          position: absolute;
          left: 18px;
          top: 50%;
          transform: translateY(-50%);
          color: #94a3b8;
          pointer-events: none;
          transition: color 0.25s;
        }

        .svc-search-input {
          width: 100%;
          background: #ffffff;
          border: 1.5px solid #e2e8f0;
          border-radius: 20px;
          padding: 14px 44px 14px 46px;
          font-size: 15px;
          color: #0f172a;
          outline: none;
          box-shadow: 0 4px 16px rgba(0,0,0,0.03);
          transition: all 0.25s ease;
        }

        .svc-search-input:focus {
          border-color: var(--focus-color, #2563eb);
          box-shadow: 0 8px 28px rgba(37,99,235,0.07), 0 0 0 3px rgba(37,99,235,0.10);
        }

        .svc-search-clear {
          position: absolute;
          right: 16px;
          top: 50%;
          transform: translateY(-50%);
          background: none;
          border: none;
          color: #94a3b8;
          font-size: 14px;
          cursor: pointer;
          padding: 4px;
          line-height: 1;
          transition: color 0.2s;
        }

        .svc-search-clear:hover { color: #475569; }

        /* STATS ROW */
        .svc-stats-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0;
          border: 1px solid #edf2f7;
          border-radius: 20px;
          background: #ffffff;
          overflow: hidden;
          max-width: 680px;
          margin: 0 auto;
          box-shadow: 0 4px 20px rgba(0,0,0,0.03);
        }

        .svc-stat-item {
          flex: 1;
          padding: 20px 16px;
          text-align: center;
          border-right: 1px solid #edf2f7;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .svc-stat-item:last-child { border-right: none; }

        .svc-stat-num {
          font-size: 26px;
          font-weight: 800;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          transition: background-image 0.5s ease;
        }

        .svc-stat-label {
          font-size: 11px;
          font-weight: 600;
          color: #94a3b8;
          text-transform: uppercase;
          letter-spacing: 0.8px;
        }

        /* ── SHOWCASE SECTION ── */
        .svc-showcase-section {
          padding: 80px 0 100px;
          background: #f8fafc;
          border-bottom: 1px solid #edf2f7;
        }

        .svc-showcase-layout {
          display: grid;
          grid-template-columns: 280px 1fr;
          gap: 48px;
          align-items: start;
        }

        /* CATEGORY NAV */
        .svc-cat-nav {
          position: sticky;
          top: 88px;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .svc-cat-nav-heading {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: #94a3b8;
          margin: 0 0 12px 12px;
        }

        .svc-cat-btn {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px 16px;
          border-radius: 14px;
          border: 1.5px solid transparent;
          background: transparent;
          cursor: pointer;
          transition: all 0.25s ease;
          text-align: left;
          width: 100%;
        }

        .svc-cat-btn:hover:not(.active) {
          background: rgba(0,0,0,0.03);
          border-color: #edf2f7;
        }

        .svc-cat-btn.active {
          background: var(--cat-bg, rgba(37,99,235,0.06));
          border-color: var(--cat-border, rgba(37,99,235,0.18));
        }

        .svc-cat-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #cbd5e1;
          flex-shrink: 0;
          transition: background 0.3s ease;
        }

        .svc-cat-btn.active .svc-cat-dot {
          background: linear-gradient(135deg, var(--cat-from, #3b82f6), var(--cat-to, #4f46e5));
        }

        .svc-cat-btn-label {
          font-size: 13.5px;
          font-weight: 600;
          color: #64748b;
          flex: 1;
          transition: color 0.25s;
        }

        .svc-cat-btn.active .svc-cat-btn-label {
          color: var(--cat-accent, #2563eb);
        }

        .svc-cat-count {
          font-size: 11px;
          font-weight: 700;
          color: #94a3b8;
          background: #f1f5f9;
          padding: 2px 8px;
          border-radius: 99px;
          flex-shrink: 0;
        }

        .svc-cat-btn.active .svc-cat-count {
          background: var(--cat-bg, rgba(37,99,235,0.08));
          color: var(--cat-accent, #2563eb);
        }

        /* Category info card */
        .svc-cat-info-card {
          margin-top: 20px;
          background: var(--cat-bg, rgba(37,99,235,0.05));
          border: 1px solid var(--cat-border, rgba(37,99,235,0.15));
          border-radius: 16px;
          padding: 20px 16px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          transition: all 0.4s ease;
        }

        .svc-cat-info-icon {
          width: 36px;
          height: 36px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .svc-cat-info-text {
          font-size: 12.5px;
          line-height: 1.6;
          color: #475569;
          margin: 0;
        }

        /* FEATURE AREA */
        .svc-feature-area {
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        .svc-feature-cat-header {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 28px;
          flex-wrap: wrap;
        }

        .svc-feature-cat-pill {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 1.2px;
          text-transform: uppercase;
          padding: 4px 12px;
          border-radius: 99px;
        }

        .svc-feature-cat-title {
          font-size: 24px;
          font-weight: 800;
          color: #0f172a;
          margin: 0;
          letter-spacing: -0.02em;
        }

        .svc-feature-module-count {
          font-size: 11px;
          font-weight: 600;
          color: #94a3b8;
          background: #f1f5f9;
          padding: 3px 10px;
          border-radius: 99px;
          margin-left: auto;
        }

        /* FEATURE ROWS (accordion) */
        .svc-feature-list {
          display: flex;
          flex-direction: column;
          gap: 0;
          border: 1.5px solid #edf2f7;
          border-radius: 20px;
          overflow: hidden;
          background: #ffffff;
          box-shadow: 0 4px 24px rgba(0,0,0,0.03);
        }

        .svc-feature-row {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          padding: 20px 24px;
          border-bottom: 1px solid #f1f5f9;
          cursor: pointer;
          transition: background 0.2s ease, padding 0.3s ease;
          position: relative;
        }

        .svc-feature-row:last-child { border-bottom: none; }

        .svc-feature-row:hover:not(.active) {
          background: #fafcff;
        }

        .svc-feature-row.active {
          background: var(--cat-bg, rgba(37,99,235,0.04));
          border-bottom-color: var(--cat-border, rgba(37,99,235,0.12));
          padding-top: 24px;
          padding-bottom: 24px;
        }

        .svc-feature-row.active::before {
          content: '';
          position: absolute;
          left: 0; top: 0; bottom: 0;
          width: 3px;
          background: linear-gradient(180deg, var(--cat-from, #3b82f6), var(--cat-to, #4f46e5));
          border-radius: 0 3px 3px 0;
        }

        .svc-row-num {
          font-size: 11px;
          font-weight: 700;
          color: #cbd5e1;
          font-variant-numeric: tabular-nums;
          flex-shrink: 0;
          width: 24px;
          line-height: 26px;
          letter-spacing: 0.5px;
          transition: color 0.25s;
        }

        .svc-feature-row.active .svc-row-num {
          color: var(--cat-accent, #2563eb);
        }

        .svc-row-icon {
          width: 36px;
          height: 36px;
          border-radius: 10px;
          background: #f8fafc;
          border: 1px solid #edf2f7;
          color: #64748b;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: all 0.3s ease;
        }

        .svc-feature-row.active .svc-row-icon {
          background: linear-gradient(135deg, var(--cat-from, #3b82f6), var(--cat-to, #4f46e5));
          color: #ffffff;
          border-color: transparent;
          box-shadow: 0 4px 12px rgba(37,99,235,0.18);
        }

        .svc-row-content {
          flex: 1;
          min-width: 0;
        }

        .svc-row-title-wrap {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 8px;
        }

        .svc-row-title {
          font-size: 15px;
          font-weight: 700;
          color: #1e293b;
          transition: color 0.25s;
        }

        .svc-feature-row.active .svc-row-title {
          color: var(--cat-accent, #2563eb);
        }

        .svc-row-chevron {
          color: #cbd5e1;
          flex-shrink: 0;
          transition: transform 0.3s ease, color 0.25s;
        }

        .svc-row-chevron.rotated {
          transform: rotate(90deg);
          color: var(--cat-accent, #2563eb);
        }

        /* Expanded detail */
        .svc-row-detail {
          margin-top: 12px;
          animation: expandDetail 0.3s ease;
        }

        @keyframes expandDetail {
          from { opacity: 0; transform: translateY(-6px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .svc-row-desc {
          font-size: 14px;
          line-height: 1.65;
          color: #475569;
          margin: 0 0 14px;
        }

        .svc-row-keypoints {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .svc-kp-chip {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          font-size: 11.5px;
          font-weight: 600;
          color: var(--cat-accent, #2563eb);
          background: var(--cat-bg, rgba(37,99,235,0.06));
          border: 1px solid var(--cat-border, rgba(37,99,235,0.15));
          padding: 4px 10px;
          border-radius: 99px;
        }

        /* ── SEARCH RESULTS ── */
        .svc-search-results-section {
          padding: 60px 0 80px;
          background: #f8fafc;
        }

        .svc-results-label {
          font-size: 14px;
          color: #64748b;
          margin-bottom: 24px;
        }

        .svc-results-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .svc-result-row {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          background: #ffffff;
          border: 1.5px solid #edf2f7;
          border-radius: 18px;
          padding: 22px 24px;
          transition: border-color 0.2s, box-shadow 0.2s;
        }

        .svc-result-row:hover {
          border-color: var(--cat-border, #e2e8f0);
          box-shadow: 0 8px 24px rgba(0,0,0,0.04);
        }

        .svc-result-icon-wrap {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: var(--cat-bg, rgba(37,99,235,0.07));
          color: var(--cat-accent, #2563eb);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .svc-result-body {
          flex: 1;
          min-width: 0;
        }

        .svc-result-cat {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
          color: var(--cat-accent, #2563eb);
          margin-bottom: 4px;
        }

        .svc-result-title {
          font-size: 16px;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 6px;
        }

        .svc-result-desc {
          font-size: 13.5px;
          line-height: 1.6;
          color: #64748b;
        }

        .svc-result-points {
          display: flex;
          flex-direction: column;
          gap: 6px;
          flex-shrink: 0;
          min-width: 200px;
        }

        .svc-key-point {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 12px;
          font-weight: 600;
          color: #64748b;
        }

        .svc-no-results {
          text-align: center;
          padding: 60px 20px;
          background: #ffffff;
          border: 1px dashed #e2e8f0;
          border-radius: 20px;
          color: #64748b;
          font-size: 15px;
        }

        /* ── BACKEND SPECS ── */
        .svc-specs-section {
          padding: 100px 0;
          background: #ffffff;
          border-bottom: 1px solid #edf2f7;
          position: relative;
          overflow: hidden;
        }

        .svc-specs-glow {
          position: absolute;
          width: 600px; height: 600px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(79,70,229,0.05) 0%, transparent 70%);
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          pointer-events: none;
        }

        .svc-specs-header {
          text-align: center;
          margin-bottom: 64px;
        }

        .svc-specs-h2 {
          font-size: 40px;
          font-weight: 800;
          color: #0f172a;
          margin: 16px 0 16px;
          letter-spacing: -0.02em;
        }

        .svc-specs-sub {
          font-size: 17px;
          color: #64748b;
          max-width: 640px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .svc-specs-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .svc-spec-card {
          background: #f8fafc;
          border: 1.5px solid #edf2f7;
          border-radius: 22px;
          padding: 36px 32px;
          position: relative;
          overflow: hidden;
          transition: transform 0.3s cubic-bezier(0.4,0,0.2,1), box-shadow 0.3s ease, border-color 0.3s ease;
        }

        .svc-spec-card:hover {
          transform: translateY(-5px);
          border-color: #d1d5db;
          box-shadow: 0 16px 40px rgba(0,0,0,0.05);
        }

        .svc-spec-num {
          font-size: 11px;
          font-weight: 700;
          color: #cbd5e1;
          letter-spacing: 1px;
          margin-bottom: 16px;
          display: block;
        }

        .svc-spec-icon {
          width: 52px;
          height: 52px;
          border-radius: 14px;
          background: rgba(79,70,229,0.07);
          color: #4f46e5;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
        }

        .svc-spec-title {
          font-size: 19px;
          font-weight: 700;
          color: #0f172a;
          margin: 0 0 10px;
        }

        .svc-spec-desc {
          font-size: 14px;
          line-height: 1.65;
          color: #64748b;
          margin: 0;
        }

        .svc-spec-bar {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(90deg, #4f46e5, #3b82f6);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .svc-spec-card:hover .svc-spec-bar { opacity: 1; }

        /* ── CTA ── */
        .svc-cta-section {
          padding: 80px 0 100px;
          background: #f8fafc;
        }

        .svc-cta-box {
          background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
          border-radius: 32px;
          padding: 72px 60px;
          position: relative;
          overflow: hidden;
          text-align: center;
        }

        .svc-cta-glow {
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at 50% 0%, rgba(59,130,246,0.12) 0%, transparent 60%);
          pointer-events: none;
        }

        .svc-cta-inner {
          position: relative;
          z-index: 2;
          max-width: 760px;
          margin: 0 auto;
        }

        .svc-cta-badge {
          display: inline-block;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 1.5px;
          color: #60a5fa;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.1);
          padding: 6px 16px;
          border-radius: 99px;
          text-transform: uppercase;
          margin-bottom: 22px;
        }

        .svc-cta-h2 {
          font-size: 44px;
          font-weight: 800;
          line-height: 1.18;
          margin: 0 0 18px;
          background: linear-gradient(135deg, #ffffff 0%, #93c5fd 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .svc-cta-p {
          font-size: 17px;
          color: #94a3b8;
          line-height: 1.65;
          margin-bottom: 40px;
        }

        .svc-cta-btns {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          flex-wrap: wrap;
        }

        .svc-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: linear-gradient(135deg, #3b82f6, #2563eb 50%, #4f46e5);
          color: #ffffff;
          padding: 15px 32px;
          border-radius: 99px;
          font-weight: 600;
          font-size: 15px;
          border: none;
          box-shadow: 0 4px 18px rgba(37,99,235,0.32);
          cursor: pointer;
          transition: transform 0.2s, box-shadow 0.2s;
        }

        .svc-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(37,99,235,0.48);
        }

        .svc-btn-ghost {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          border: 1.5px solid rgba(255,255,255,0.15);
          color: #ffffff;
          background: rgba(255,255,255,0.04);
          padding: 15px 32px;
          border-radius: 99px;
          font-weight: 600;
          font-size: 15px;
          cursor: pointer;
          transition: all 0.2s;
        }

        .svc-btn-ghost:hover {
          background: rgba(255,255,255,0.09);
          border-color: rgba(255,255,255,0.28);
        }

        /* ── SCROLL REVEAL ── */
        :global(.reveal-auto) {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.75s cubic-bezier(0.25,1,0.5,1), transform 0.75s cubic-bezier(0.25,1,0.5,1);
        }

        :global(.reveal-auto.is-revealed) {
          opacity: 1;
          transform: translateY(0);
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 1100px) {
          .svc-showcase-layout {
            grid-template-columns: 240px 1fr;
            gap: 32px;
          }
          .svc-specs-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 880px) {
          .svc-hero-h1 { font-size: 42px; }
          .svc-showcase-layout {
            grid-template-columns: 1fr;
          }
          .svc-cat-nav {
            position: static;
            flex-direction: row;
            flex-wrap: wrap;
            gap: 8px;
          }
          .svc-cat-nav-heading { display: none; }
          .svc-cat-info-card { display: none; }
          .svc-cat-btn { width: auto; flex: none; }
          .svc-specs-grid { grid-template-columns: 1fr; }
          .svc-cta-h2 { font-size: 32px; }
          .svc-cta-box { padding: 48px 28px; }
          .svc-stats-row { gap: 0; flex-wrap: wrap; }
          .svc-stat-item { min-width: 50%; border-bottom: 1px solid #edf2f7; }
          .svc-result-points { display: none; }
        }

        @media (max-width: 600px) {
          .svc-container { padding: 0 20px; }
          .svc-hero-h1 { font-size: 34px; }
          .svc-hero { padding: 110px 0 60px; }
          .svc-spec-card { padding: 28px 22px; }
          .svc-feature-cat-header { gap: 8px; }
          .svc-feature-module-count { margin-left: 0; }
        }
      `}</style>
    </div>
  );
}

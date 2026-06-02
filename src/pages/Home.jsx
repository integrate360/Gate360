import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Shield,
  AlertTriangle,
  Car,
  Receipt,
  Wrench,
  Calendar,
  Users,
  UserCheck,
  FileWarning,
  Megaphone,
  Vote,
  PartyPopper,
  BookOpen,
  BarChart,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Lock,
  ChevronDown,
  Play,
  Star,
  Smartphone,
  Server,
  Activity,
  DollarSign,
  TrendingUp,
  FileCheck2,
  Moon,
  Sun,
  ShieldCheck,
} from "lucide-react";

export default function Home() {
  const navigate = useNavigate();
  const [activeFaq, setActiveFaq] = useState(-1);
  const [activeDashboardTab, setActiveDashboardTab] = useState("revenue");

  const coreModules = [
    {
      title: "Security & Visitor Management",
      icon: Shield,
      features: [
        "Visitor Entry Logs",
        "Visitor Approval",
        "Delivery Management",
        "Security Check-in & Out",
        "QR Visitor Pass",
        "Gate Logs",
        "Visitor Analytics",
      ],
      color: "from-blue-500/10 to-indigo-500/10",
      borderColor: "hover:border-blue-500/50",
      iconColor: "text-blue-500 bg-blue-500/10",
    },
    {
      title: "SOS Emergency System",
      icon: AlertTriangle,
      features: [
        "Emergency Alert Hub",
        "Panic Button Trigger",
        "Immediate Push Notifications",
        "Security Dispatch Alerts",
        "Emergency Contact Sync",
      ],
      color: "from-red-500/10 to-orange-500/10",
      borderColor: "hover:border-red-500/50",
      iconColor: "text-red-500 bg-red-500/10",
    },
    {
      title: "Parking Management",
      icon: Car,
      features: [
        "Resident Reserved Parking",
        "Visitor Bay Allocation",
        "Parking Spot Allocation",
        "Vehicle Tracking & RFID",
        "Parking Usage Reports",
      ],
      color: "from-amber-500/10 to-yellow-500/10",
      borderColor: "hover:border-amber-500/50",
      iconColor: "text-amber-500 bg-amber-500/10",
    },
    {
      title: "Billing & Accounting",
      icon: Receipt,
      features: [
        "Maintenance Bill Generation",
        "Automated Invoices",
        "Razorpay/UPI Online Payments",
        "Due Reminders & SMS Notifications",
        "GST Financial Ledgers",
      ],
      color: "from-emerald-500/10 to-teal-500/10",
      borderColor: "hover:border-emerald-500/50",
      iconColor: "text-emerald-500 bg-emerald-500/10",
    },
    {
      title: "Service Requests",
      icon: Wrench,
      features: [
        "Complaint Management Desk",
        "Ticket Tracking Status",
        "Maintenance Dispatch Logs",
        "Vendor Job Assignment",
        "Resolution SLA Workflows",
      ],
      color: "from-purple-500/10 to-pink-500/10",
      borderColor: "hover:border-purple-500/50",
      iconColor: "text-purple-500 bg-purple-500/10",
    },
    {
      title: "Amenity Booking",
      icon: Calendar,
      features: [
        "Clubhouse Slot Booking",
        "Party Hall Bookings",
        "Sports Court Schedules",
        "Swimming Pool Timings",
        "Calendar Lockout Conflicts",
      ],
      color: "from-cyan-500/10 to-blue-500/10",
      borderColor: "hover:border-cyan-500/50",
      iconColor: "text-cyan-500 bg-cyan-500/10",
    },
    {
      title: "Resident Management",
      icon: Users,
      features: [
        "Resident Unit Profiles",
        "Family Members Registry",
        "Tenant Occupancy Status",
        "Rented/Owned Ratios",
        "Cooperative Directory Search",
      ],
      color: "from-indigo-500/10 to-purple-500/10",
      borderColor: "hover:border-indigo-500/50",
      iconColor: "text-indigo-500 bg-indigo-500/10",
    },
    {
      title: "Staff Management",
      icon: UserCheck,
      features: [
        "Domestic Help Attendance",
        "Biometric Punch-in Sync",
        "Staff Roster Sheets",
        "Duty Shift Allocation",
        "Performance Review Logs",
      ],
      color: "from-rose-500/10 to-pink-500/10",
      borderColor: "hover:border-rose-500/50",
      iconColor: "text-rose-500 bg-rose-500/10",
    },
    {
      title: "Incident Management",
      icon: FileWarning,
      features: [
        "Incident Reports Log",
        "Security Breach Events",
        "Investigation Audit Trails",
        "Action Tracking Ledgers",
      ],
      color: "from-orange-500/10 to-red-500/10",
      borderColor: "hover:border-orange-500/50",
      iconColor: "text-orange-500 bg-orange-500/10",
    },
    {
      title: "Notice Board",
      icon: Megaphone,
      features: [
        "Society Circular Broadcasts",
        "Push notifications to Feed",
        "Announcement Templates",
        "Read Acknowledgement Stats",
      ],
      color: "from-yellow-500/10 to-amber-500/10",
      borderColor: "hover:border-yellow-500/50",
      iconColor: "text-yellow-600 bg-yellow-500/10",
    },
    {
      title: "Polls & Surveys",
      icon: Vote,
      features: [
        "Society Ballot Voting",
        "Resident Survey Polls",
        "Real-time dynamic charts",
        "Ledger Audit Reports",
      ],
      color: "from-violet-500/10 to-fuchsia-500/10",
      borderColor: "hover:border-violet-500/50",
      iconColor: "text-violet-500 bg-violet-500/10",
    },
    {
      title: "Events Management",
      icon: PartyPopper,
      features: [
        "Community Event Schedules",
        "Festival RSVP Handlers",
        "Pass Reservation Ledger",
        "Society Gallery Archives",
      ],
      color: "from-sky-500/10 to-indigo-500/10",
      borderColor: "hover:border-sky-500/50",
      iconColor: "text-sky-500 bg-sky-500/10",
    },
    {
      title: "Community Blogs",
      icon: BookOpen,
      features: [
        "Eco-living Tips Publishing",
        "Resident Story Articles",
        "Local Shop/Laundromat reviews",
        "Knowledge Sharing boards",
      ],
      color: "from-lime-500/10 to-emerald-500/10",
      borderColor: "hover:border-lime-500/50",
      iconColor: "text-lime-600 bg-lime-500/10",
    },
    {
      title: "Reports & Analytics",
      icon: BarChart,
      features: [
        "Wing-wise Maintenance reports",
        "Biometric Punch trends",
        "Visitor density statistics",
        "Occupancy ratio timelines",
      ],
      color: "from-teal-500/10 to-cyan-500/10",
      borderColor: "hover:border-teal-500/50",
      iconColor: "text-teal-500 bg-teal-500/10",
    },
  ];

  const marketplaceModules = [
    {
      title: "Product Buy & Sell",
      desc: "Pre-loved furniture, home appliances, and textbooks listings directly within the gated society. Cut out external broker middle layers safely.",
      badge: "Classifieds System",
      points: ["Safe within-society deal making", "Instant seller chat links", "Zero logistics/shipping friction"],
      icon: ShoppingBagIcon,
    },
    {
      title: "Local Jobs Portal",
      desc: "Connect local resident students or developers with part-time tutoring, resume reviews, pet walking, or typing vacancies posted by society families.",
      badge: "Employment Workspace",
      points: ["Biometric verified resume files", "Dynamic direct-apply statuses", "Local student hiring options"],
      icon: BriefcaseIcon,
    },
    {
      title: "Verified Real Estate",
      desc: "List flats for lease, sale, or rent without dealing with annoying spam calls. Show floor architecture profiles and designated parking allocations clearly.",
      badge: "Property Listings",
      points: ["100% verified unit owners", "Modular kitchen details capture", "Instant visit scheduling"],
      icon: BuildingIcon,
    },
    {
      title: "Business Directory Hub",
      desc: "List dry-cleaners, supermarkets, hardwares, tailors, or daily cooks functioning in base floors or around gates. Tap-order with resident discount schemes.",
      badge: "Local Service Providers",
      points: ["Exclusive resident coupons", "Real-time contact dialing", " Biometric identity checks"],
      icon: ClipboardIcon,
    },
  ];

  const subscriptionPlans = [
    {
      name: "Free Trial",
      price: "₹0",
      billing: "For 14 Days",
      bestFor: "Risk-free validation",
      features: [
        "Basic Visitor Management Log",
        "Core Security Desk Check-in",
        "Standard Resident Directory Roster",
        "1-Click SOS panic triggers",
        "Mobile App Access for Guard",
      ],
      buttonText: "Start Free Trial",
      accent: "bg-slate-100 text-slate-800 border-neutral-200",
      highlight: false,
    },
    {
      name: "Lite Portal",
      price: "₹4,999",
      billing: "per month / billed annually",
      bestFor: "Small cooperative societies",
      features: [
        "Visitor & Courier Check-in Logs",
        "Gate Logs & Security Records",
        "Resident Verification Directories",
        "Notice Board Broadcast push triggers",
        "Complaint Lodger Ticket desk",
        "Basic Excel Reports Download",
      ],
      buttonText: "Get Started",
      accent: "bg-slate-900 text-white hover:bg-slate-800 border-slate-900",
      highlight: false,
    },
    {
      name: "Society Tier",
      price: "₹14,999",
      billing: "per month / billed annually",
      bestFor: "Medium & large housing societies",
      features: [
        "Everything in Lite Portal Plan",
        "Amenity Reservations & Calendars",
        "Assigned Resident Parking bays",
        "Guard panic auditory SOS sirens",
        "Opinion surveys & dynamic poll charts",
        "Events RSVPs ticket checkouts",
        "Incident investigation workflows",
        "Roster biometrics attendance reports",
      ],
      buttonText: "Choose Plan",
      accent: "bg-[#059669] text-white hover:bg-[#047857] border-[#059669]",
      highlight: true,
      badgeText: "Recommended",
    },
    {
      name: "Enterprise Tier",
      price: "Custom Pricing",
      billing: "Bespoke MRR contracts",
      bestFor: "Townships & Multi-complexes",
      features: [
        "Everything in Society Tier",
        "Product Classifieds Marketplace",
        "Property Rent & Sell Boards",
        "Business Coupon Directories",
        "Jobs Roster & Apply workflows",
        "Multi-society Global Master console",
        "White-label custom app branding",
        "GST Invoicing & API Webhook Syncs",
        "Dedicated SLA account engineer",
      ],
      buttonText: "Contact Sales",
      accent: "bg-purple-600 text-white hover:bg-purple-700 border-purple-600",
      highlight: false,
      badgeText: "Premium",
    },
  ];

  const faqs = [
    {
      q: "How does Gate360 manage tenant database separation?",
      a: "Gate360 is architected as a modern multi-tenant operating system. Each cooperative housing society gets complete logical separation of collections. Our security framework filters every single search query with a strict society-level tenant context, preventing leaks of directory records, visitor entries, and ledger invoices.",
    },
    {
      q: "What is the auditory alarm trigger delay in the SOS emergency system?",
      a: "The resident app SOS panic trigger communicates directly over high-speed secure socket channels. Once tapped on a smartphone, it triggers a screen-flash flashing auditory warning at the main gate Security Guard Terminal in under 1.8 seconds. It also initiates automated fallback SMS pings.",
    },
    {
      q: "Can society accountants generate automated GST invoice ledgers?",
      a: "Yes. Our Billing & Accounting system lets management boards declare society tax codes, legal entities, and custom service charge parameters. Serial receipts are automatically compiled and broadcasted, allowing occupants to pay online (UPI, Razorpay, NetBanking) and download GST receipts.",
    },
    {
      q: "How does the Pre-approved Visitor QR pass operate?",
      a: "Residents declare visitor types, times, and vehicle plates inside their app and share a customized QR link. When a guest arrives, security scans the pass digits with the scanner. The dashboard does active biometric validation and registers check-in logs in real time.",
    },
    {
      q: "Are the property real estate listings verified or prone to broker spam?",
      a: "They are 100% verified. Only occupants registered in the society directory can publish apartments for sale or rent. This completely eliminates third-party broker calls and fraudulent listings.",
    },
    {
      q: "Does the Domestic Helper attendance log send auto-alerts?",
      a: "Absolutely. Maids, cooks, or drivers punch in biometrically using RFID or gate registers. Gate360 matches the helper with their registered units and pings immediate check-in/out notices to the residents' smartphones.",
    },
    {
      q: "Is the job board secure for kids applying for tutoring or dog walking?",
      a: "Yes, the job board functions exclusively within the society network boundaries. No external accounts can browse postings or submit resumes, assuring safety and reliability.",
    },
    {
      q: "How does the Opinion Poll analytics board prevent ballot tampering?",
      a: "Each resident has precisely one ballot allocation linked to their verified flat index. Once cast, the vote is logged with cryptographic validation signatures. Live dynamic bar charts represent trends in real time.",
    },
    {
      q: "Can the Notice Board integrate push notifications and SMS?",
      a: "Yes, notices can be broadcasted via multiple channels. Society admins choose to ping notices directly to occupant app feeds, drop automated WhatsApp notifications, or dispatch SMS circulars.",
    },
    {
      q: "What API custom integrations are available on the Enterprise Tier?",
      a: "Our Enterprise Tier supports secure webhook endpoints to sync maintenance accounting data with platforms like Tally or SAP. It also interfaces with third-party RFID boombar gate cameras and CCTV face recognition APIs.",
    },
  ];

  return (
    <div className="w-full flex flex-col bg-white overflow-x-hidden text-slate-800" style={{ fontFamily: '"Plus Jakarta Sans", "Poppins", sans-serif' }}>
      {/* ============================================================== */}
      {/* 1. HERO SECTION */}
      {/* ============================================================== */}
      <section className="relative w-full pt-28 pb-20 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-32 bg-[#F4F8F6] overflow-hidden border-b border-[#E2ECE7] text-left">
        {/* Subtle Ambient Glow */}
        <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-gradient-to-br from-[#10B981]/15 to-transparent blur-3xl opacity-60 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[30%] h-[30%] bg-gradient-to-tr from-[#4f46e5]/10 to-transparent blur-3xl opacity-50 pointer-events-none" />

        <div className="max-w-[1680px] mx-auto px-6 sm:px-12 lg:px-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Headline & Copy */}
            <div className="lg:col-span-7 flex flex-col items-start space-y-6">
              {/* Premium Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#061c12] text-[#10B981] shadow-sm border border-emerald-950">
                <ShieldCheck size={14} className="text-[#10B981]" />
                <span className="text-[10px] font-bold uppercase tracking-[2px] font-poppins">
                  Next-Gen Gated Community SaaS
                </span>
              </div>

              {/* Main Title */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-950 leading-[112%] font-headline-lg" style={{ fontFamily: '"Syne", sans-serif' }}>
                One Platform to Manage Every <br className="hidden sm:block" />
                <span className="bg-gradient-to-r from-[#061c12] via-[#059669] to-[#4f46e5] bg-clip-text text-transparent">
                  Society, Resident, Business & Community
                </span>{" "}
                Activity.
              </h1>

              {/* Subheading */}
              <p className="text-slate-600 text-sm sm:text-base lg:text-lg leading-[170%] font-poppins max-w-[680px]">
                Manage visitors, gate security check-ins, automated maintenance invoicing, emergency SOS distress alarms, shared amenity reservations, domestic help biometrics, jobs directories, classifieds, properties, and community blogs from a single unified workspace.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto pt-3">
                <button
                  onClick={() => navigate("/demo")}
                  className="w-full sm:w-auto min-w-[200px] h-[54px] bg-[#059669] hover:bg-[#047857] text-white rounded-xl flex items-center justify-center gap-2.5 font-bold text-xs uppercase tracking-wider transition cursor-pointer shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
                >
                  <span>Start Free Trial</span>
                  <ArrowRight size={14} strokeWidth={2.5} />
                </button>
                <button
                  onClick={() => navigate("/demo")}
                  className="w-full sm:w-auto min-w-[200px] h-[54px] bg-white border border-[#E9E9E9] text-slate-800 hover:bg-neutral-50 rounded-xl flex items-center justify-center gap-2.5 font-bold text-xs uppercase tracking-wider transition cursor-pointer shadow-sm"
                >
                  <Play size={12} className="fill-[#059669] text-[#059669]" />
                  <span>Book Demo</span>
                </button>
              </div>
            </div>

            {/* Elite Dashboard Mockup Graphic Preview */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-[500px] bg-white border border-[#e9e9e9] rounded-3xl p-5 shadow-2xl relative overflow-hidden group select-none">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#059669]/10 to-transparent blur-xl rounded-full" />
                
                {/* Simulated Header */}
                <div className="flex justify-between items-center border-b border-neutral-100 pb-3.5 mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#10B981] animate-pulse" />
                    <span className="text-[10px] font-extrabold tracking-wider text-slate-500 uppercase font-poppins">WINDSOR CASTLE OS</span>
                  </div>
                  <span className="text-[9px] bg-emerald-50 text-emerald-600 border border-emerald-100 font-extrabold uppercase px-2 py-0.5 rounded-full">ACTIVE SUITE</span>
                </div>

                {/* Simulated Live Grid widgets */}
                <div className="grid grid-cols-2 gap-3 mb-4 text-left">
                  <div className="bg-[#FAF9F6] border border-neutral-200/60 rounded-2xl p-3.5">
                    <span className="text-[9px] font-bold text-slate-400 block uppercase font-poppins">Daily Helper Punch</span>
                    <span className="text-sm font-extrabold text-slate-800 block mt-1">12 Checked In</span>
                  </div>
                  <div className="bg-[#FAF9F6] border border-neutral-200/60 rounded-2xl p-3.5">
                    <span className="text-[9px] font-bold text-slate-400 block uppercase font-poppins">Visitors Logged</span>
                    <span className="text-sm font-extrabold text-slate-800 block mt-1">42 Vehicles</span>
                  </div>
                </div>

                {/* SOS Alarm Trigger Bar */}
                <div className="bg-red-50 border border-red-200 rounded-2xl p-4 flex items-center justify-between gap-3 text-left">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-red-600 text-white flex items-center justify-center shrink-0 shadow-sm animate-pulse">
                      <AlertTriangle size={16} />
                    </div>
                    <div>
                      <strong className="text-xs font-bold text-red-900 block font-poppins">SOS Console Idle</strong>
                      <span className="text-[9px] text-red-700 block">No alerts reported in last 24h</span>
                    </div>
                  </div>
                  <span className="text-[8px] font-extrabold bg-red-600 text-white px-2 py-0.5 rounded">READY</span>
                </div>

                {/* Core Marketplace Mock Listing */}
                <div className="border border-neutral-200/60 rounded-2xl p-3.5 bg-indigo-50/10 mt-3 text-left space-y-1">
                  <div className="flex justify-between items-center">
                    <span className="text-[8px] font-bold bg-[#faf8f3] text-indigo-600 border border-indigo-100 px-2 py-0.5 rounded uppercase tracking-wider font-poppins">Marketplace Classified</span>
                    <span className="text-xs font-bold text-indigo-700">₹2,500</span>
                  </div>
                  <strong className="text-xs font-extrabold text-slate-900 block mt-1 font-poppins">Teak Wood Ergonomic Chair</strong>
                  <span className="text-[9px] text-slate-400 block">Posted by Unit B-202 • mohit@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 2. PLATFORM STATISTICS (COUNTER DISPLAY) */}
      {/* ============================================================== */}
      <section className="w-full bg-[#061c12] py-8 sm:py-10 border-b border-emerald-950">
        <div className="max-w-[1680px] mx-auto px-6 sm:px-12 lg:px-20">
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-y-8 gap-x-4 divide-y lg:divide-y-0 lg:divide-x divide-emerald-900/40 text-center">
            {[
              { value: "100+", label: "Verified Gated Societies" },
              { value: "50,000+", label: "Happy Gated Residents" },
              { value: "1.2M+", label: "Visitor Passes Scanned" },
              { value: "99.9%", label: "Platform Uptime SLA" },
              { value: "24/7", label: "Committee Support Help" },
            ].map(({ value, label }, index) => (
              <div key={label} className={`flex flex-col items-center justify-center p-3 ${index > 1 ? "pt-6 lg:pt-3" : ""}`}>
                <span className="text-3xl sm:text-4xl font-extrabold text-[#10B981] leading-none mb-2" style={{ fontFamily: '"Syne", sans-serif' }}>
                  {value}
                </span>
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-emerald-400/70 font-poppins">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 3. CORE MODULES SECTION (14 CARD GIRD) */}
      {/* ============================================================== */}
      <section className="w-full py-20 lg:py-28 bg-white border-b border-[#E2ECE7]">
        <div className="max-w-[1680px] mx-auto px-6 sm:px-12 lg:px-20">
          {/* Section Header */}
          <div className="max-w-[800px] mb-16 lg:mb-20 text-left">
            <span className="text-[11px] font-bold tracking-[3px] text-[#059669] uppercase block mb-3 font-poppins">
              SOCIETY TIER CORE CAPABILITIES
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-950 leading-[115%] font-poppins" style={{ fontFamily: '"Syne", sans-serif' }}>
              Core Operations & Gate Security <br />
              Digitized in a Single Native Suite.
            </h2>
            <div className="w-16 h-1.5 bg-[#059669] mt-6 rounded-full" />
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 items-stretch">
            {coreModules.map((mod) => {
              const IconComponent = mod.icon;
              return (
                <div key={mod.title} className={`bg-gradient-to-br ${mod.color} border border-neutral-200/80 hover:border-slate-300 rounded-3xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group`}>
                  <div className="space-y-4">
                    {/* Icon container */}
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${mod.iconColor} group-hover:scale-105 transition-transform duration-300`}>
                      <IconComponent size={18} />
                    </div>

                    <h3 className="text-base font-extrabold text-slate-900 font-poppins text-left">
                      {mod.title}
                    </h3>

                    {/* Features list */}
                    <ul className="space-y-2 text-left">
                      {mod.features.map((feat) => (
                        <li key={feat} className="flex items-start gap-2 text-[11px] text-slate-600 font-semibold font-poppins">
                          <CheckCircle2 size={13} className="text-[#059669] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 4. ENTERPRISE COMMUNITY MARKETPLACE (PREMIUM SECTION) */}
      {/* ============================================================== */}
      <section className="w-full py-20 lg:py-28 bg-[#faf9f6]/40 border-b border-[#E2ECE7] text-left">
        <div className="max-w-[1680px] mx-auto px-6 sm:px-12 lg:px-20">
          {/* Header */}
          <div className="max-w-[800px] mb-16 lg:mb-20">
            <span className="text-[11px] font-bold tracking-[3px] text-purple-600 uppercase block mb-3 font-poppins">
              ENTERPRISE TIER SUITE
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-950 leading-[115%]" style={{ fontFamily: '"Syne", sans-serif' }}>
              Enterprise Community Marketplace
            </h2>
            <p className="text-slate-500 text-sm mt-3.5 leading-relaxed font-poppins">
              Generate additional revenue flows, facilitate trade directories, list apartments, and coordinate jobs exclusively within society borders. Built strictly as an asset in the Enterprise Tier.
            </p>
            <div className="w-16 h-1.5 bg-purple-600 mt-6 rounded-full" />
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {marketplaceModules.map((item) => {
              const IconC = item.icon;
              return (
                <div key={item.title} className="bg-white border border-neutral-200/80 hover:border-purple-300 rounded-3xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <span className="text-[8px] font-extrabold uppercase px-2 py-0.5 rounded bg-purple-50 text-purple-600 border border-purple-100 tracking-wider font-poppins">
                      {item.badge}
                    </span>
                    <h3 className="text-lg font-extrabold text-slate-900 font-poppins mt-2">{item.title}</h3>
                    <p className="text-slate-500 text-xs leading-relaxed font-normal">{item.desc}</p>
                    
                    <ul className="space-y-1.5 border-t border-slate-100 pt-3">
                      {item.points.map(pt => (
                        <li key={pt} className="flex items-center gap-2 text-[10px] font-bold text-slate-700">
                          <span className="w-1.5 h-1.5 rounded-full bg-purple-600 shrink-0" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button onClick={() => navigate("/demo")} className="w-full py-2.5 bg-[#FAF9F6] border border-neutral-200 hover:border-purple-300 text-purple-600 font-extrabold rounded-xl text-xs uppercase tracking-wider transition text-center cursor-pointer">
                    Explore Portal Demo
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 5. INTERACTIVE LIVE DASHBOARD PREVIEW WIDGET */}
      {/* ============================================================== */}
      <section className="w-full py-20 lg:py-28 bg-white border-b border-[#E2ECE7] text-left">
        <div className="max-w-[1680px] mx-auto px-6 sm:px-12 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Headline and controls */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-[11px] font-bold tracking-[3px] text-[#059669] uppercase block font-poppins">
                LIVE ADMIN CONSOLE DEMO
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-950 leading-[115%]" style={{ fontFamily: '"Syne", sans-serif' }}>
                Preview the Premium SaaS Dashboard
              </h2>
              <p className="text-slate-600 text-sm leading-[165%] font-poppins">
                Committee chairman and super administrators receive full authority over wings, resident listings, payment statements, and audit ledgers. Tap a tab below to preview the metrics:
              </p>

              {/* Selector Tabs */}
              <div className="flex flex-col sm:flex-row gap-2 w-full pt-2">
                {[
                  { id: "revenue", label: "Monthly Revenue", icon: DollarSign },
                  { id: "visitors", label: "Visitor Analytics", icon: Users },
                  { id: "complaints", label: "Complaint Analytics", icon: ClipboardListIcon },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveDashboardTab(tab.id)}
                    className={`flex items-center gap-2 px-4 py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition text-left cursor-pointer border ${
                      activeDashboardTab === tab.id
                        ? "bg-[#059669] text-white border-[#059669] shadow-md shadow-emerald-500/10"
                        : "bg-white text-slate-600 border-neutral-200 hover:bg-neutral-50"
                    }`}
                  >
                    <span>{tab.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Dashboard Display Card */}
            <div className="lg:col-span-7 bg-[#FAF9F6] border border-neutral-200/80 rounded-3xl p-6 sm:p-8 shadow-2xl relative select-none">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#059669]/10 to-transparent blur-2xl rounded-full" />
              
              {/* Header Info */}
              <div className="flex justify-between items-center border-b border-neutral-200/80 pb-4 mb-6">
                <div>
                  <h3 className="text-base font-extrabold text-slate-950 font-poppins">Windsor Castle Cooperative</h3>
                  <span className="text-[10px] text-slate-400 block font-semibold">TOWNSHIP CODE: WCS-101 • Mumbai</span>
                </div>
                <span className="text-[9px] font-extrabold bg-[#059669]/10 text-[#059669] px-2.5 py-0.5 rounded-full uppercase tracking-wider">ENTERPRISE TIER</span>
              </div>

              {/* Dynamic Content Views */}
              {activeDashboardTab === "revenue" && (
                <div className="space-y-6">
                  {/* Top indicators */}
                  <div className="grid grid-cols-3 gap-3">
                    <div className="bg-white border border-neutral-200/60 rounded-2xl p-4">
                      <span className="text-[8px] font-bold text-slate-400 uppercase tracking-widest font-poppins">Collections Rate</span>
                      <strong className="text-lg font-black text-slate-900 block mt-1">94%</strong>
                    </div>
                    <div className="bg-white border border-neutral-200/60 rounded-2xl p-4">
                      <span className="text-[8px] font-bold text-slate-400 uppercase tracking-widest font-poppins">Outstanding Dues</span>
                      <strong className="text-lg font-black text-amber-500 block mt-1">₹45,500</strong>
                    </div>
                    <div className="bg-white border border-neutral-200/60 rounded-2xl p-4">
                      <span className="text-[8px] font-bold text-slate-400 uppercase tracking-widest font-poppins">MRR Collected</span>
                      <strong className="text-lg font-black text-emerald-600 block mt-1">₹1,44,200</strong>
                    </div>
                  </div>

                  {/* Dynamic mini bar graph chart */}
                  <div className="bg-white border border-neutral-200/60 rounded-2xl p-4 space-y-4">
                    <span className="text-[9px] font-extrabold text-slate-400 uppercase block tracking-wider font-poppins">Monthly Revenue Influx</span>
                    <div className="flex items-end justify-between h-24 gap-3 px-2 pt-2 pb-1 border-b border-neutral-100">
                      <div className="w-full bg-slate-200 h-10 rounded-lg hover:bg-[#059669] transition" title="March" />
                      <div className="w-full bg-slate-200 h-14 rounded-lg hover:bg-[#059669] transition" title="April" />
                      <div className="w-full bg-[#059669] h-20 rounded-lg" title="May" />
                    </div>
                    <div className="flex justify-between text-[8px] font-bold text-slate-400 uppercase font-poppins">
                      <span>March</span>
                      <span>April</span>
                      <span>May (Collected)</span>
                    </div>
                  </div>
                </div>
              )}

              {activeDashboardTab === "visitors" && (
                <div className="space-y-6">
                  {/* Top indicators */}
                  <div className="grid grid-cols-3 gap-3">
                    <div className="bg-white border border-neutral-200/60 rounded-2xl p-4">
                      <span className="text-[8px] font-bold text-slate-400 uppercase tracking-widest font-poppins">Daily check-ins</span>
                      <strong className="text-lg font-black text-slate-900 block mt-1">112 passes</strong>
                    </div>
                    <div className="bg-white border border-neutral-200/60 rounded-2xl p-4">
                      <span className="text-[8px] font-bold text-slate-400 uppercase tracking-widest font-poppins">Delivery Agents</span>
                      <strong className="text-lg font-black text-indigo-600 block mt-1">42 verified</strong>
                    </div>
                    <div className="bg-white border border-neutral-200/60 rounded-2xl p-4">
                      <span className="text-[8px] font-bold text-slate-400 uppercase tracking-widest font-poppins">Active SOS Sirens</span>
                      <strong className="text-lg font-black text-slate-900 block mt-1">0 alerts</strong>
                    </div>
                  </div>

                  {/* Active Visitors log mock */}
                  <div className="bg-white border border-neutral-200/60 rounded-2xl p-4 space-y-3">
                    <span className="text-[9px] font-extrabold text-slate-400 uppercase block tracking-wider font-poppins">Real-Time Visitors Scanner Logs</span>
                    <div className="space-y-2 text-xs">
                      <div className="flex justify-between items-center text-slate-600 border-b border-neutral-100 pb-2">
                        <span>Rohan Verma (Dinner Guest) • Flat B-202</span>
                        <span className="bg-amber-50 text-amber-600 border border-amber-100 text-[8px] font-bold px-2 py-0.5 rounded">Checked In</span>
                      </div>
                      <div className="flex justify-between items-center text-slate-600">
                        <span>Kamla Bai (Maid Daily help) • Flat A-102</span>
                        <span className="bg-emerald-50 text-emerald-600 border border-emerald-100 text-[8px] font-bold px-2 py-0.5 rounded">Check Out</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeDashboardTab === "complaints" && (
                <div className="space-y-6">
                  {/* Top indicators */}
                  <div className="grid grid-cols-3 gap-3">
                    <div className="bg-white border border-neutral-200/60 rounded-2xl p-4">
                      <span className="text-[8px] font-bold text-slate-400 uppercase tracking-widest font-poppins">Total Lodged</span>
                      <strong className="text-lg font-black text-slate-900 block mt-1">20 Tickets</strong>
                    </div>
                    <div className="bg-white border border-neutral-200/60 rounded-2xl p-4">
                      <span className="text-[8px] font-bold text-slate-400 uppercase tracking-widest font-poppins">In Progress</span>
                      <strong className="text-lg font-black text-amber-500 block mt-1">2 Open</strong>
                    </div>
                    <div className="bg-white border border-neutral-200/60 rounded-2xl p-4">
                      <span className="text-[8px] font-bold text-slate-400 uppercase tracking-widest font-poppins">Resolution SLA</span>
                      <strong className="text-lg font-black text-emerald-600 block mt-1">98% Resolved</strong>
                    </div>
                  </div>

                  {/* Active complaints dispatcher */}
                  <div className="bg-white border border-neutral-200/60 rounded-2xl p-4 space-y-3">
                    <span className="text-[9px] font-extrabold text-slate-400 uppercase block tracking-wider font-poppins">Support SLA dispatch</span>
                    <div className="space-y-2 text-xs">
                      <div className="flex justify-between items-center text-slate-600 border-b border-neutral-100 pb-2">
                        <span>Bathroom leakage (Flat B-202)</span>
                        <span className="bg-amber-50 text-amber-600 border border-amber-100 text-[8px] font-bold px-2 py-0.5 rounded">Ramesh Dispatched</span>
                      </div>
                      <div className="flex justify-between items-center text-slate-600">
                        <span>Elevator B panel flickering (Block A)</span>
                        <span className="bg-emerald-50 text-emerald-600 border border-emerald-100 text-[8px] font-bold px-2 py-0.5 rounded">Resolved SLA</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 6. MOBILE APP SHOWCASE */}
      {/* ============================================================== */}
      <section className="w-full py-20 lg:py-28 bg-[#F4F8F6] border-b border-[#E2ECE7] text-left">
        <div className="max-w-[1680px] mx-auto px-6 sm:px-12 lg:px-20">
          <div className="text-center max-w-[800px] mx-auto mb-16">
            <span className="text-[11px] font-bold tracking-[3px] text-[#059669] uppercase block mb-3 font-poppins">
              NATIVE MOBILE ECOSYSTEMS
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-950 font-poppins" style={{ fontFamily: '"Syne", sans-serif' }}>
              Apps Designed for Every stakeholder
            </h2>
            <p className="text-slate-500 text-sm mt-3 font-poppins font-normal">
              Gate360 coordinates operations across 3 native apps, ensuring seamless synchronization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1300px] mx-auto items-stretch">
            {/* Mockup 1: Resident */}
            <div className="bg-white border border-neutral-200 rounded-3xl p-6 flex flex-col justify-between space-y-6">
              <div className="space-y-4 text-center sm:text-left">
                <span className="text-[9px] font-extrabold uppercase px-2.5 py-0.5 rounded bg-emerald-50 text-[#059669] border border-emerald-100 tracking-wider inline-block">Resident Hub App</span>
                <h4 className="text-lg font-extrabold text-slate-900 font-poppins mt-2">Simplify Flat Conveniences</h4>
                <p className="text-slate-500 text-xs leading-relaxed">Residents pre-approve guest QR passes, pay maintenance bills with 1-tap, reserves clubhouses, and triggers emergency panic SOS alerts immediately.</p>
              </div>

              {/* Phone Mockup Representation */}
              <div className="bg-neutral-900 rounded-[28px] border-4 border-slate-900 p-2.5 max-w-[280px] mx-auto w-full shadow-lg">
                <div className="bg-[#061c12] rounded-[20px] p-3 text-white text-[10px] font-poppins space-y-3 text-left">
                  <div className="flex justify-between items-center border-b border-emerald-950 pb-1.5">
                    <span>Flat B-202</span>
                    <span className="text-[7px] text-emerald-400">RESIDENT APP</span>
                  </div>
                  <div className="bg-slate-900 p-2 rounded-xl border border-slate-800 space-y-1">
                    <span className="text-[7px] text-slate-400 uppercase">Pre-approved Guest pass</span>
                    <strong className="block text-[#10B981] font-mono select-all">V-4820 (Approved)</strong>
                  </div>
                  <button className="w-full bg-red-600 text-white font-bold py-2 rounded-xl text-[9px] uppercase cursor-pointer">TRIGGER SOS PANIC</button>
                </div>
              </div>
            </div>

            {/* Mockup 2: Guard */}
            <div className="bg-white border border-neutral-200 rounded-3xl p-6 flex flex-col justify-between space-y-6">
              <div className="space-y-4 text-center sm:text-left">
                <span className="text-[9px] font-extrabold uppercase px-2.5 py-0.5 rounded bg-amber-50 text-amber-600 border border-amber-100 tracking-wider inline-block">Security Guard App</span>
                <h4 className="text-lg font-extrabold text-slate-900 font-poppins mt-2">Gate Scanning Operations</h4>
                <p className="text-slate-500 text-xs leading-relaxed">Guards capture vehicle plates with OCR scanners, validate visitor QR slips against logical tenant directories, and track domestic helpers biometric punch cards.</p>
              </div>

              {/* Phone Mockup Representation */}
              <div className="bg-neutral-900 rounded-[28px] border-4 border-slate-900 p-2.5 max-w-[280px] mx-auto w-full shadow-lg">
                <div className="bg-[#061c12] rounded-[20px] p-3 text-white text-[10px] font-poppins space-y-3 text-left">
                  <div className="flex justify-between items-center border-b border-emerald-950 pb-1.5">
                    <span>Main Gate 1</span>
                    <span className="text-[7px] text-amber-400">GUARD TERMINAL</span>
                  </div>
                  <div className="bg-slate-900 p-2 rounded-xl border border-slate-800 space-y-1">
                    <span className="text-[7px] text-slate-400 uppercase">QR scanner validator</span>
                    <input type="text" defaultValue="V-4820" disabled className="w-full bg-slate-950 text-neutral-300 rounded border border-slate-800 p-1 text-[8px]" />
                  </div>
                  <button className="w-full bg-[#059669] text-white font-bold py-2 rounded-xl text-[9px] uppercase cursor-pointer">VALIDATE CHECK-IN</button>
                </div>
              </div>
            </div>

            {/* Mockup 3: Admin */}
            <div className="bg-white border border-neutral-200 rounded-3xl p-6 flex flex-col justify-between space-y-6">
              <div className="space-y-4 text-center sm:text-left">
                <span className="text-[9px] font-extrabold uppercase px-2.5 py-0.5 rounded bg-purple-50 text-purple-600 border border-purple-100 tracking-wider inline-block">Society Admin Hub</span>
                <h4 className="text-lg font-extrabold text-slate-900 font-poppins mt-2">Manage & Audits Desk</h4>
                <p className="text-slate-500 text-xs leading-relaxed">Society committees access full financial analytics tools, close plumbing/electrical help tickets, broadcast notice boards, and review SOS panic incident logs.</p>
              </div>

              {/* Phone Mockup Representation */}
              <div className="bg-neutral-900 rounded-[28px] border-4 border-slate-900 p-2.5 max-w-[280px] mx-auto w-full shadow-lg">
                <div className="bg-[#061c12] rounded-[20px] p-3 text-white text-[10px] font-poppins space-y-3 text-left">
                  <div className="flex justify-between items-center border-b border-emerald-950 pb-1.5">
                    <span>Admin Central</span>
                    <span className="text-[7px] text-purple-400">ADMIN CONTROL</span>
                  </div>
                  <div className="bg-slate-900 p-2 rounded-xl border border-slate-800 space-y-1">
                    <span className="text-[7px] text-slate-400 uppercase">Active complaints SLA</span>
                    <strong className="block text-[#10B981]">12 Closed today</strong>
                  </div>
                  <button className="w-full bg-[#059669] text-white font-bold py-2 rounded-xl text-[9px] uppercase cursor-pointer">AUDIT STATEMENTS</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 7. SUBSCRIPTION PLANS (PRICING GRID) */}
      {/* ============================================================== */}
      <section className="w-full py-20 lg:py-28 bg-white border-b border-[#E2ECE7]" id="pricing">
        <div className="max-w-[1680px] mx-auto px-6 sm:px-12 lg:px-20 text-left">
          {/* Header */}
          <div className="text-center max-w-[800px] mx-auto mb-16">
            <span className="text-[11px] font-bold tracking-[3px] text-[#059669] uppercase block mb-3 font-poppins">
              SOCIETY OPERATING PLANS
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-950 leading-[115%]" style={{ fontFamily: '"Syne", sans-serif' }}>
              Bespoke Pricing Schemes for Gated complexes
            </h2>
            <p className="text-slate-500 text-sm mt-3.5 leading-relaxed font-poppins font-normal">
              Select the optimal plan to scale visitor check-ins, security biometrics, and resident directories.
            </p>
          </div>

          {/* Pricing Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 max-w-[1500px] mx-auto items-stretch">
            {subscriptionPlans.map((plan) => (
              <div key={plan.name} className={`border rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 relative ${
                plan.highlight 
                  ? "border-[#059669] bg-white shadow-xl shadow-emerald-500/5 hover:-translate-y-1" 
                  : "border-neutral-200/80 bg-[#FAF9F6]/50 hover:border-slate-300"
              }`}>
                {plan.badgeText && (
                  <span className={`absolute -top-3.5 left-1/2 -translate-x-1/2 text-[8px] font-extrabold uppercase px-3 py-1 rounded-full border border-white tracking-widest inline-block ${
                    plan.highlight ? "bg-[#059669] text-white" : "bg-purple-600 text-white"
                  }`}>
                    {plan.badgeText}
                  </span>
                )}

                <div className="space-y-4">
                  <span className={`text-[10px] font-extrabold tracking-[2px] uppercase block ${plan.highlight ? "text-[#059669]" : "text-slate-400"}`}>
                    {plan.name}
                  </span>
                  <div className="flex items-baseline gap-1 mt-2">
                    <span className="text-3xl sm:text-4xl font-extrabold text-slate-950 leading-none">{plan.price}</span>
                    <span className="text-[10px] text-slate-400 font-semibold font-poppins">/ Month</span>
                  </div>
                  <p className="text-slate-500 text-[10px] font-bold font-poppins uppercase">{plan.bestFor}</p>

                  <ul className="space-y-3.5 border-t border-slate-200/60 pt-6 flex-grow text-left">
                    {plan.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-2.5 text-xs text-slate-700 leading-normal">
                        <CheckCircle2 size={14} className="text-[#059669] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => navigate("/demo")}
                  className={`w-full py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition text-center cursor-pointer mt-8 ${
                    plan.highlight 
                      ? "bg-[#059669] hover:bg-[#047857] text-white shadow-md shadow-emerald-500/10" 
                      : "bg-white border border-[#E9E9E9] text-slate-800 hover:bg-neutral-50 shadow-sm"
                  }`}
                >
                  {plan.buttonText}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 8. TESTIMONIALS SLIDER SECTION */}
      {/* ============================================================== */}
      <section className="w-full py-20 lg:py-28 bg-[#faf9f6]/40 border-b border-[#E2ECE7] text-left">
        <div className="max-w-[1680px] mx-auto px-6 sm:px-12 lg:px-20">
          <div className="text-center max-w-[800px] mx-auto mb-16">
            <span className="text-[11px] font-bold tracking-[3px] text-[#059669] uppercase block mb-3 font-poppins">
              TRUSTED PLATFORM FEEDBACK
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-950 font-poppins" style={{ fontFamily: '"Syne", sans-serif' }}>
              Feedback from Gated Communities
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1300px] mx-auto">
            {[
              { name: "Vinod Kumar", role: "Committee President (450 flats)", comment: "ThePanic SOS system saved a resident in Block A during a medical hazard last month! The guard console fired auditory alerts immediately, dispatching technicians in under 2 minutes. Outstanding security ecosystem." },
              { name: "Meera Deshmukh", role: "Treasurer (Windsor Castle)", comment: "Gate360 automated billing ledgers are incredibly efficient! Residents pay maintenance bills using Razorpay directly on their app. Receivables collections increased by 30% in just two cycles." },
              { name: "Amit Saxena", role: "Resident Owner (C-104)", comment: "The Enterprise Marketplace has completely changed our internal society communications. I sold a pre-loved desk to my Block A neighbor safely without broker commission or spam calls." },
            ].map((test, index) => (
              <div key={index} className="bg-white border border-neutral-200/80 rounded-3xl p-6 shadow-sm flex flex-col justify-between space-y-4 hover:border-[#059669]/40 transition">
                <p className="text-slate-600 text-xs leading-relaxed italic">"{test.comment}"</p>
                <div className="flex items-center gap-3 border-t border-slate-100 pt-4">
                  <div className="w-10 h-10 rounded-full bg-[#059669]/10 text-[#059669] flex items-center justify-center font-extrabold text-sm shadow-inner">
                    {test.name[0]}
                  </div>
                  <div>
                    <strong className="text-slate-900 block text-xs font-poppins">{test.name}</strong>
                    <span className="text-[9px] text-[#059669] font-bold uppercase tracking-wider block mt-0.5">{test.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 9. FAQ ACCORDION SECTION (10 Drawers) */}
      {/* ============================================================== */}
      <section className="w-full py-20 lg:py-28 bg-white border-b border-[#E2ECE7] text-left">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-12">
          <div className="text-center max-w-[800px] mx-auto mb-16">
            <span className="text-[11px] font-bold tracking-[3px] text-[#059669] uppercase block mb-3 font-poppins">
              FAQ DOCUMENTATIONS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-950 font-poppins" style={{ fontFamily: '"Syne", sans-serif' }}>
              Frequently Answered Inquiries
            </h2>
          </div>

          <div className="bg-[#FAF9F6] border border-neutral-200/80 rounded-3xl divide-y divide-neutral-200/60 shadow-sm overflow-hidden">
            {faqs.map((faq, index) => (
              <div key={index} className="w-full transition">
                <button
                  onClick={() => setActiveFaq(activeFaq === index ? -1 : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left cursor-pointer hover:bg-neutral-50 transition focus:outline-none"
                >
                  <span className="font-extrabold text-xs sm:text-sm text-slate-950 pr-4 font-poppins">
                    {faq.q}
                  </span>
                  <ChevronDown
                    size={16}
                    className={`text-[#059669] shrink-0 transition-transform duration-300 ${
                      activeFaq === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {activeFaq === index && (
                  <div className="px-6 pb-6 pt-0 bg-neutral-50/50">
                    <p className="text-slate-600 text-xs leading-[170%] font-poppins font-normal">
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 10. PREMIUM Footer */}
      {/* ============================================================== */}
      <footer className="w-full bg-[#061c12] text-white pt-16 pb-8 border-t border-emerald-950 text-left select-none">
        <div className="max-w-[1680px] mx-auto px-6 sm:px-12 lg:px-20">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 pb-12 border-b border-emerald-900/40">
            {/* Brand column */}
            <div className="col-span-2 space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#062417] to-[#0D5C3A] flex items-center justify-center shadow-sm border border-emerald-800">
                  <ShieldCheck size={18} className="text-[#10B981]" />
                </div>
                <span className="text-lg font-extrabold tracking-tight text-white font-syne uppercase">
                  Gate<span className="text-[#059669]">360</span>
                </span>
              </div>
              <p className="text-emerald-400/60 text-xs leading-relaxed max-w-[300px]">
                The enterprise society operating system. Manage visitor passes, accounting ledgers, parking bays, and domestic check-ins efficiently.
              </p>
            </div>

            {/* Directories */}
            <div className="space-y-4">
              <span className="text-[10px] font-extrabold text-[#10B981] uppercase tracking-[2px] block">Product</span>
              <ul className="space-y-2 text-xs text-slate-400">
                <li><button onClick={() => navigate("/demo")} className="hover:text-white transition">Interactive Demo</button></li>
                <li><button onClick={() => navigate("/demo")} className="hover:text-white transition">Simulator Desk</button></li>
                <li><button onClick={() => navigate("/srd")} className="hover:text-white transition">Platform SRD</button></li>
              </ul>
            </div>

            <div className="space-y-4">
              <span className="text-[10px] font-extrabold text-[#10B981] uppercase tracking-[2px] block">Features</span>
              <ul className="space-y-2 text-xs text-slate-400">
                <li><span className="block">Panic SOS System</span></li>
                <li><span className="block">GST Invoice Invoicing</span></li>
                <li><span className="block">Biometric Attendance</span></li>
                <li><span className="block">Real Estate rent/lease</span></li>
              </ul>
            </div>

            <div className="space-y-4">
              <span className="text-[10px] font-extrabold text-[#10B981] uppercase tracking-[2px] block">Pricing</span>
              <ul className="space-y-2 text-xs text-slate-400">
                <li><span className="block">Lite Plan (₹4,999/mo)</span></li>
                <li><span className="block">Society Tier (₹14,999/mo)</span></li>
                <li><span className="block">Enterprise township pricing</span></li>
              </ul>
            </div>

            <div className="space-y-4">
              <span className="text-[10px] font-extrabold text-[#10B981] uppercase tracking-[2px] block">Legal</span>
              <ul className="space-y-2 text-xs text-slate-400">
                <li><button onClick={() => navigate("/privacy-policy")} className="hover:text-white transition">Privacy Policy</button></li>
                <li><button onClick={() => navigate("/terms-of-service")} className="hover:text-white transition">Terms of Service</button></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-[10px] text-emerald-400/50 font-semibold font-poppins">
            <span>© 2026 GATE360 SAAS PLATFORM OS • ALL RIGHTS RESERVED.</span>
            <span className="mt-2 sm:mt-0 uppercase tracking-widest">Designed for verified gated communities</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Inline unique sub-icons declarations for the marketplace
function ShoppingBagIcon(props) {
  return <Shield {...props} className="text-purple-600" />;
}
function BriefcaseIcon(props) {
  return <UserCheck {...props} className="text-purple-600" />;
}
function BuildingIcon(props) {
  return <Building2Icon {...props} className="text-purple-600" />;
}
function ClipboardIcon(props) {
  return <Receipt {...props} className="text-purple-600" />;
}
function Building2Icon(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
      <path d="M9 22v-4h6v4" />
      <path d="M8 6h.01" />
      <path d="M16 6h.01" />
      <path d="M8 10h.01" />
      <path d="M16 10h.01" />
      <path d="M12 14h.01" />
      <path d="M12 10h.01" />
      <path d="M12 6h.01" />
    </svg>
  );
}
function ClipboardListIcon(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
      <path d="M9 14h6" />
      <path d="M9 18h6" />
      <path d="M9 10h6" />
    </svg>
  );
}

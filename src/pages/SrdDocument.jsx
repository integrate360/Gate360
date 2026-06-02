import { useState } from "react";
import {
  FileText,
  Search,
  Printer,
  ShieldCheck,
  CheckCircle2,
  Key,
  Users,
  Compass,
  Zap,
  Info
} from "lucide-react";

export default function SrdDocument() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const roles = [
    {
      role: "Super Admin",
      portal: "Web Portal",
      email: "mohitsingh@gmail.com",
      pass: "Mohit@12345",
      desc: "Global platform owner — tenant provisioning, AWS analytics, feature flags, global blacklists."
    },
    {
      role: "Society Admin",
      portal: "Web Portal",
      email: "mohitkumar143680@gmail.com",
      pass: "Mohit@12345",
      desc: "Community executive — resident directory, invoicing configuration, announcements, local SOS console, guards rosters."
    },
    {
      role: "Resident",
      portal: "Mobile App",
      email: "example@user.com",
      pass: "Example@123456",
      desc: "Unit occupant — bookings, service tickets, dynamic gate passes, Panic SOS, billing receipt downloads."
    },
    {
      role: "Security Guard",
      portal: "Mobile App",
      email: "security@singh.com",
      pass: "Security@12345",
      desc: "Gate gatekeeper — visitor check-ins, deliveries logs, helper tracking, instant Panic SOS alarm flashes."
    },
    {
      role: "Accountant",
      portal: "Mobile App",
      email: "uiiwer@gmail.com",
      pass: "N/A (Quick Access)",
      desc: "Financial manager — invoicing registries, dues logs, cash receipt adjustments, ledger compilation."
    }
  ];

  const specs = [
    {
      num: 1,
      category: "Global SaaS Control",
      title: "Super Admin Platform Provisioning",
      reqs: [
        "Dynamic onboarding workflow creating isolated MongoDB directories per society in under 5 seconds.",
        "Subscription tiers management (Trial, Standard, Premium) controlling active resident quotas.",
        "Real-time society suspension and activation status flags."
      ]
    },
    {
      num: 2,
      category: "Society Administration",
      title: "Wings & Flat Structures Configuration",
      reqs: [
        "Recursive multi-tier building structure setup (Towers ➔ Wings ➔ Floors ➔ Flats).",
        "Banking coordinate inputs and merchant profile integrations (Razorpay, UPI handles).",
        "Administrative approvals panel for pending resident profiles and KYC uploads."
      ]
    },
    {
      num: 3,
      category: "Resident Management",
      title: "Flat Occupancy & Household Roster",
      reqs: [
        "Tracking occupancy state classifications: Owner Occupied, Tenant Occupied, or Vacant.",
        "Household member registration and custom guest entry approval boundaries.",
        "Automated KYC state validations (Approved, Rejected, Pending verification)."
      ]
    },
    {
      num: 4,
      category: "Gate Security",
      title: "Smart Visitor Entry Registration",
      reqs: [
        "Guards record visitor name, phone contact, snapshot capture, and vehicle digits at the gate.",
        "Visitor cataloging: Guest, Delivery agent, Service vendor, Utilities, and Helpers.",
        "Dynamic push warning dispatcher asking residents for entry confirmation."
      ]
    },
    {
      num: 5,
      category: "Gate Security",
      title: "QR Code Gate Passes",
      reqs: [
        "Residents generate gate passes with specific time windows.",
        "Guard scanner decodes pass and checks authorization in real time.",
        "Automatic check-in logs generated, notifying flats immediately."
      ]
    },
    {
      num: 6,
      category: "Gate Security",
      title: "Vehicle Audits & Parking Allocations",
      reqs: [
        "Direct mapping of slots to flat directories to avoid conflicts.",
        "Visitor vehicle parking allocation limit tracking.",
        "RFID windshield integration ready for automatic gate lifts."
      ]
    },
    {
      num: 7,
      category: "Operations",
      title: "Plumbing & Electrical Ticket Desks",
      reqs: [
        "Residents file maintenance tickets, upload defect snapshots, and set priority.",
        "Automatic dispatching of plumbers, electricians, or carpenters.",
        "Active board mapping state progress: Open ➔ Assigned ➔ In Progress ➔ Resolved ➔ Closed."
      ]
    },
    {
      num: 8,
      category: "Finance",
      title: "Periodic Maintenance Billing",
      reqs: [
        "Configuring monthly, quarterly, or annual invoices.",
        "Automated bulk invoice compiler with PDF receipt generation.",
        "Late fee interest penalty scheduler based on grace period margins."
      ]
    },
    {
      num: 9,
      category: "Finance",
      title: "Razorpay & Cashfree Checkout Gateways",
      reqs: [
        "Supports online transactions via UPI, Debit/Credit Cards, Net Banking.",
        "Instant ledger reconciliation updating payment records from outstanding to paid.",
        "Secure callback APIs enforcing TLS/SSL encryptions."
      ]
    },
    {
      num: 10,
      category: "Finance",
      title: "Double-Entry General Ledger",
      reqs: [
        "Automatic entries recorded for maintenance billing, helper dues, and facility rentals.",
        "Society expense tracker logging utility expenditures and housekeeping wages.",
        "Auditable income statements and balance sheets compiled per fiscal quarter."
      ]
    },
    {
      num: 11,
      category: "Operations",
      title: "Notice Board Broadcasting Multiplex",
      reqs: [
        "Categorized announcements (Urgent water alert, general bulletin, AGM invitation).",
        "Dispatches notices over Mobile Push notification banners, emails, and WhatsApp groups.",
        "Auditable logs tracking dispatch history."
      ]
    },
    {
      num: 12,
      category: "Operations",
      title: "Unified In-App Chat Messenger",
      reqs: [
        "Instant direct chats connecting Residents with the Society Admin or Gate guards.",
        "Broadcast channels supporting administrative warning dispatches.",
        "Local cached databases allowing offline chat index lookups."
      ]
    },
    {
      num: 13,
      category: "Operations",
      title: "Staff & Guard Roster Controls",
      reqs: [
        "Guard roster builders managing active shifts.",
        "ID documentation tracking and background validation state checkers.",
        "Shift check-in and exit timestamps logged with hours counters."
      ]
    },
    {
      num: 14,
      category: "Operations",
      title: "Daily Domestic Helper Roster",
      reqs: [
        "Maintains checked maids, drivers, cooks, and babysitters database.",
        "Helper scans RFID/QR card on gate entry to trigger flat notification alerts.",
        "Daily attendance sheet compilation showing check-in/out summaries."
      ]
    },
    {
      num: 15,
      category: "Operations",
      title: "Shared Amenity Calendars",
      reqs: [
        "Book Clubhouse, Swimming Pool, Gym, Sports Courts, or Community halls.",
        "Conflict blockout logic protecting slots from duplicate bookings.",
        "Automatic booking payment checkouts for chargeable facilities."
      ]
    },
    {
      num: 16,
      category: "Operations",
      title: "AGM Meeting RSVPs",
      reqs: [
        "Roster management for cultural events, annual AGMs, and committee voting.",
        "Tracks participant RSVP volumes and headcount check-ins."
      ]
    },
    {
      num: 17,
      category: "Operations",
      title: "Secure Document Vault Archives",
      reqs: [
        "AWS S3 integrated storage holding Bye-laws, audit reports, and NOC agreements.",
        "Strict access controls restricting files based on roles (Admin only vs. General)."
      ]
    },
    {
      num: 18,
      category: "Operations",
      title: "1-Click Fail-Safe Panic SOS System",
      reqs: [
        "Mobile Panic SOS alerts immediate guard buzzer alarms.",
        "Security guard terminal triggers high-pitched sirens displaying resident flat lookups.",
        "Automatic SMS alerts dispatched to pre-configured family emergency contacts."
      ]
    },
    {
      num: 19,
      category: "Global SaaS Control",
      title: "Society Feature Flags Dashboard",
      reqs: [
        "Super Admin console to toggle modular packages (SOS, Marketplace, Chat).",
        "Instantly activates/deactivates specific portal menus per society dynamically."
      ]
    },
    {
      num: 20,
      category: "Global SaaS Control",
      title: "Super Admin AWS Cost Audits",
      reqs: [
        "Visual analytics tracking daily cloud costs breakdown (EC2, S3, RDS, CloudFront).",
        "Predictive cost scaling calculators for monthly SaaS platform operations."
      ]
    }
  ];

  // Print simulation
  const handlePrint = () => {
    window.print();
  };

  const filteredSpecs = specs.filter((s) => {
    const matchesSearch =
      s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.reqs.some((r) => r.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory =
      activeCategory === "all" ||
      s.category.toLowerCase().includes(activeCategory.toLowerCase());
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="w-full flex flex-col bg-white font-poppins min-h-screen">
      
      {/* ================= HERO HEADER ================= */}
      <section className="relative pt-24 pb-16 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-24 bg-[#F4F8F6] border-b border-[#E2ECE7]">
        <div className="max-w-[1680px] mx-auto px-5 sm:px-8 lg:px-16 xl:px-24">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="max-w-[900px] text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#061c12] text-[#10B981] mb-6 shadow-sm border border-emerald-950">
                <FileText size={12} className="text-[#10B981]" />
                <span className="text-[10px] font-bold uppercase tracking-[2px]">PRODUCT SPECIFICATION</span>
              </div>
              <h1
                className="text-4xl sm:text-5xl font-bold tracking-tight text-[#121414] leading-[115%] mb-4"
                style={{ fontFamily: '"Syne", sans-serif' }}
              >
                Software Requirement Document (SRD)
              </h1>
              <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
                Review Gate360's formal 26-module core SaaS feature specifications, platform roles directory, database segregation protocols, and security indexes.
              </p>
            </div>
            
            <button
              onClick={handlePrint}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#059669] text-white hover:opacity-90 rounded-xl font-bold text-xs uppercase tracking-wider transition cursor-pointer self-start lg:self-center shadow-sm"
            >
              <Printer size={15} />
              <span>Print Handout</span>
            </button>
          </div>
        </div>
      </section>

      {/* ================= ROLES & CREDENTIALS ================= */}
      <section className="w-full py-12 bg-white border-b border-[#E9E9E9]">
        <div className="max-w-[1680px] mx-auto px-5 sm:px-8 lg:px-16 xl:px-24">
          <div className="flex items-center gap-2 mb-8">
            <Key className="text-[#059669]" size={20} />
            <h2 className="text-2xl font-bold text-[#121414]" style={{ fontFamily: '"Syne", sans-serif' }}>
              Platform Roles & Access Credentials
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-6">
            {roles.map((r) => (
              <div key={r.role} className="bg-[#F4F8F6] border border-[#E2ECE7] rounded-2xl p-6 shadow-sm flex flex-col justify-between hover:border-[#059669] transition">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-bold text-[#121414] font-poppins">{r.role}</span>
                    <span className="text-[9px] font-bold bg-[#061c12] text-[#10B981] border border-emerald-950 px-1.5 py-0.5 rounded">{r.portal}</span>
                  </div>
                  <p className="text-neutral-500 text-xs leading-relaxed mb-6 font-poppins">{r.desc}</p>
                </div>

                <div className="bg-white border border-[#E2ECE7] rounded-xl p-3.5 space-y-1.5 text-[11px] font-poppins text-neutral-700">
                  <div className="flex justify-between items-center">
                    <span className="text-neutral-400">Email:</span>
                    <span className="font-semibold select-all text-neutral-800">{r.email}</span>
                  </div>
                  <div className="flex justify-between items-center border-t border-neutral-100 pt-1.5">
                    <span className="text-neutral-400">Password:</span>
                    <span className="font-semibold select-all text-neutral-800">{r.pass}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= COMPREHENSIVE REQUIREMENTS EXPLORER ================= */}
      <section className="w-full py-16 bg-[#F4F8F6] flex-grow">
        <div className="max-w-[1680px] mx-auto px-5 sm:px-8 lg:px-16 xl:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Filter Sidebar */}
            <div className="lg:col-span-3 lg:sticky lg:top-24 space-y-6">
              
              {/* Search */}
              <div className="bg-white border border-[#E2ECE7] rounded-2xl p-5 shadow-sm">
                <span className="text-xs font-bold text-neutral-500 block mb-3 uppercase tracking-wider">Search Specs</span>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search requirements..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-[#F4F8F6] border border-[#E2ECE7] rounded-xl py-2.5 pl-9 pr-3 text-xs focus:outline-none focus:border-[#059669]"
                  />
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" size={14} />
                </div>
              </div>

              {/* Categories */}
              <div className="bg-white border border-[#E2ECE7] rounded-2xl p-5 shadow-sm">
                <span className="text-xs font-bold text-neutral-500 block mb-4 uppercase tracking-wider">Spec Categories</span>
                <div className="flex flex-col gap-1.5 text-xs">
                  {[
                    { id: "all", label: "Show All Specs" },
                    { id: "saas", label: "Global SaaS Control" },
                    { id: "society", label: "Society Setup" },
                    { id: "security", label: "Gate Security" },
                    { id: "finance", label: "Finance & Invoices" },
                    { id: "ops", label: "Operations & SOS" }
                  ].map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setActiveCategory(cat.id)}
                      className={`text-left px-3 py-2 rounded-lg font-bold transition cursor-pointer ${
                        activeCategory === cat.id
                          ? "bg-[#059669] text-white"
                          : "text-neutral-600 hover:bg-neutral-50"
                      }`}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Alert Info */}
              <div className="bg-white border border-[#E2ECE7] rounded-2xl p-5 shadow-sm flex gap-3">
                <Info size={18} className="text-[#059669] shrink-0 mt-0.5" />
                <span className="text-[11px] text-neutral-500 leading-normal">
                  These operational specifications represent the baseline required core logic that is fully simulated inside the Gate360 Demo Portal.
                </span>
              </div>
            </div>

            {/* Right Column: Requirements Cards */}
            <div className="lg:col-span-9 space-y-6">
              
              <div className="flex items-center gap-2 mb-6 border-b border-[#E2ECE7] pb-4">
                <Compass className="text-[#059669]" size={20} />
                <span className="font-bold text-sm text-neutral-500 uppercase tracking-widest font-poppins">
                  Requirement Specifications Sheets ({filteredSpecs.length})
                </span>
              </div>

              {filteredSpecs.length > 0 ? (
                <div className="space-y-6">
                  {filteredSpecs.map((spec) => (
                    <div key={spec.num} className="bg-white border border-[#E2ECE7] rounded-3xl p-6 sm:p-8 shadow-sm hover:border-[#059669] transition">
                      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#E2ECE7]/60 pb-4 mb-5">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-[#F4F8F6] text-[#059669] font-extrabold text-xs flex items-center justify-center border border-[#E2ECE7]">
                            {spec.num}
                          </div>
                          <h3 className="text-lg font-bold text-[#121414] font-poppins">{spec.title}</h3>
                        </div>
                        <span className="text-[9px] font-bold bg-[#F4F8F6] border border-[#E2ECE7] text-neutral-400 px-2 py-0.5 rounded uppercase tracking-wider">
                          {spec.category}
                        </span>
                      </div>

                      <ul className="space-y-3.5">
                        {spec.reqs.map((req, i) => (
                          <li key={i} className="flex gap-3 items-start text-xs sm:text-sm text-neutral-600 font-poppins">
                            <CheckCircle2 size={16} className="text-[#059669] shrink-0 mt-0.5" />
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-20 bg-white border border-[#E9E9E9] rounded-3xl p-8">
                  <span className="text-neutral-400 font-bold block mb-2">No Requirements Match Your Criteria</span>
                  <p className="text-neutral-500 text-sm max-w-[400px] mx-auto leading-relaxed">
                    Adjust your query filter or category tags to explore target sections.
                  </p>
                </div>
              )}
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

import { useState } from "react";
import { useNavigate } from "react-router-dom";
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
  FileCheck2
} from "lucide-react";

export default function Services() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", label: "All 26 Modules" },
    { id: "security", label: "Gate & Visitor Security" },
    { id: "finance", label: "Billing & Ledger" },
    { id: "ops", label: "Operations & SOS" },
    { id: "saas", label: "SaaS & Multi-Tenant Core" }
  ];

  const modules = [
    // Category: security
    {
      id: 1,
      category: "security",
      icon: Smartphone,
      title: "Visitor Entry Registration",
      desc: "Instant digitization of visitor names, phone contacts, photo captures, and vehicle numbers. Completely replaces traditional paper gate registers."
    },
    {
      id: 2,
      category: "security",
      icon: ShieldCheck,
      title: "QR Code Visitor Passes",
      desc: "Residents generate digital passes with strict start and end dates. Security scans passes at the gate for automated entry clearance."
    },
    {
      id: 3,
      category: "security",
      icon: Radio,
      title: "OTP Verification Flows",
      desc: "Unannounced visitors are authenticated using fast OTP gate requests to verify identity and target flat authorization."
    },
    {
      id: 4,
      category: "security",
      icon: Users,
      title: "Domestic Helper Database",
      desc: "Maintains verified rosters for drivers, maids, cooks, and babysitters, tracking check-in logs and notifying residents dynamically."
    },
    {
      id: 5,
      category: "security",
      icon: Lock,
      title: "Global Blacklist Guard",
      desc: "A centralized ban directory instantly alerting guards if suspended individuals, rowdy vendors, or blacklisted staff attempt entry."
    },
    {
      id: 6,
      category: "security",
      icon: ShieldCheck,
      title: "Parking Allocations",
      desc: "Maps flat numbers to parking slots and allows guards to check vehicle plates immediately to resolve unauthorized slot parking."
    },
    {
      id: 7,
      category: "security",
      icon: Zap,
      title: "Move-In & Out Clearances",
      desc: "Online society NOC request portal for residents. Guards get clear dashboards stating moving status and active approvals."
    },
    
    // Category: finance
    {
      id: 8,
      category: "finance",
      icon: DollarSign,
      title: "Maintenance Billing Engine",
      desc: "Configure monthly, quarterly, or annual billing cycles. Computes flat rates, area ratios, and automatically sends invoices."
    },
    {
      id: 9,
      category: "finance",
      icon: CreditCard,
      title: "Razorpay & Cashfree Checkouts",
      desc: "Secured payment gateways supporting UPI, Net Banking, Credit Cards, and Debit Cards for instant digital dues settlements."
    },
    {
      id: 10,
      category: "finance",
      icon: ClipboardList,
      title: "Double-Entry General Ledger",
      desc: "Accountant panel records all maintenance collections, miscellaneous income, and utility payments for automated balance sheets."
    },
    {
      id: 11,
      category: "finance",
      icon: FileCheck2,
      title: "Dynamic Late Fee Calculations",
      desc: "Calculates interest penalties automatically based on grace periods and specific community late payment rule policies."
    },
    {
      id: 12,
      category: "finance",
      icon: Sparkles,
      title: "GST Invoice Compiler",
      desc: "Input society GSTIN details to generate and compile serial tax invoices and print-ready PDF payment receipts."
    },
    {
      id: 13,
      category: "finance",
      icon: DollarSign,
      title: "Expense Log Book",
      desc: "Society admins log vendor contracts, housekeeping salaries, utility bills, and asset maintenance expenses for audits."
    },

    // Category: ops
    {
      id: 14,
      category: "ops",
      icon: ShieldAlert,
      title: "1-Click SOS Panic System",
      desc: "Immediate resident distress trigger. Flashes red emergency notifications and sounds auditory alarms at the Guard Terminal."
    },
    {
      id: 15,
      category: "ops",
      icon: ClipboardList,
      title: "Complaint Ticket Dispatcher",
      desc: "Residents file maintenance tickets snap-shotting defects. Admins route tickets (Electrical, Plumbing) with progress tracking boards."
    },
    {
      id: 16,
      category: "ops",
      icon: Mail,
      title: "Dynamic Notice Broadcasts",
      desc: "Post categorized bulletins (General, Urgent, AGM alerts) across Mobile Push notifications, emails, and WhatsApp groups."
    },
    {
      id: 17,
      category: "ops",
      icon: Users,
      title: "Staff Shift Attendance",
      desc: "Digital gate attendance checking for guards, gardeners, sweepers, and plumbers, complete with hours reporting."
    },
    {
      id: 18,
      category: "ops",
      icon: Clock,
      title: "Amenity Calendars",
      desc: "Interactive slots reservation for Gym, Swimming Pool, Clubhouse, and Community halls with conflict prevention."
    },
    {
      id: 19,
      category: "ops",
      icon: Users,
      title: "Event RSVP Managers",
      desc: "Organize cultural events, society meetings, and AGMs. Track RSVP headcounts and invite external vendors."
    },
    {
      id: 20,
      category: "ops",
      icon: ClipboardList,
      title: "Secure Document Archives",
      desc: "Cloud storage for Bye-laws, NOC directories, audit report PDFs, and circulars with role-based access shields."
    },
    {
      id: 21,
      category: "ops",
      icon: Radio,
      title: "In-App Chat Channels",
      desc: "Encourages real-time dialog between Society Admins, Security Guards, and Residents directly inside the platform."
    },

    // Category: saas
    {
      id: 22,
      category: "saas",
      icon: Layers,
      title: "Multi-Tenant Cloud Tenant DB",
      desc: "A single solid codebase isolating thousands of societies with separate DB collections enforcing the 'X-Society-Id' tenant index."
    },
    {
      id: 23,
      category: "saas",
      icon: Sliders,
      title: "Society Feature Flag Control",
      desc: "Super Admin can toggle specific modules (Marketplace, Chat, SOS, Parking) on/off per society based on active plans."
    },
    {
      id: 24,
      category: "saas",
      icon: Clock,
      title: "AWS Infrastructure Analytics",
      desc: "Detailed cloud expense trends. Tracks EC2, S3, CloudFront, and DB costs in live Super Admin charts."
    },
    {
      id: 25,
      category: "saas",
      icon: Users,
      title: "Global Search Roster",
      desc: "Super Admin directory search filters across all registered flat owners, guards, and society admin records network-wide."
    },
    {
      id: 26,
      category: "saas",
      icon: Smartphone,
      title: "Dedicated Guard & Resident Portals",
      desc: "Optimized mobile layout interfaces for residents' daily conveniences and guards' gate scanning speed."
    }
  ];

  // Filter modules based on search and category
  const filteredModules = modules.filter((m) => {
    const matchesSearch =
      m.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.desc.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === "all" || m.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="w-full flex flex-col bg-white">
      {/* ================= HERO ================= */}
      <section className="relative pt-24 pb-16 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-24 bg-[#F4F8F6] border-b border-[#E2ECE7]">
        <div className="max-w-[1680px] mx-auto px-5 sm:px-8 lg:px-16 xl:px-24 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#061c12] text-[#10B981] mb-6 shadow-sm border border-emerald-950">
            <Sparkles size={12} />
            <span className="text-[10px] font-bold uppercase tracking-[2px] font-poppins">PLATFORM FEATURES</span>
          </div>

          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#121414] leading-[115%] mb-6"
            style={{ fontFamily: '"Syne", sans-serif' }}
          >
            The Complete 26-Module SaaS Spec.
          </h1>

          <p className="max-w-[800px] mx-auto text-base sm:text-lg text-neutral-600 leading-[170%] font-poppins mb-10">
            Gate360 is engineered as an exhaustive housing complex solution. Search and filter our feature blocks below to understand how the platform automates society operations.
          </p>

          {/* Search Box */}
          <div className="max-w-[500px] mx-auto relative mb-6">
            <input
              type="text"
              placeholder="Search for any module (e.g. SOS, Payment, QR)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-[#E9E9E9] rounded-xl py-3.5 pl-11 pr-4 text-sm font-poppins text-[#121414] focus:outline-none focus:border-[#059669] transition-all shadow-sm placeholder:text-neutral-400"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400" size={16} />
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap items-center justify-center gap-2 max-w-[800px] mx-auto">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition cursor-pointer ${
                  activeCategory === cat.id
                    ? "bg-[#059669] text-white shadow-sm border border-[#059669]"
                    : "bg-white text-neutral-600 border border-[#E9E9E9] hover:bg-neutral-50"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ================= MODULES GRID ================= */}
      <section className="w-full py-16 sm:py-24 bg-white">
        <div className="max-w-[1680px] mx-auto px-5 sm:px-8 lg:px-16 xl:px-24">
          
          <div className="flex justify-between items-center mb-10 border-b border-[#E9E9E9] pb-4">
            <span className="text-xs font-bold text-neutral-500 uppercase tracking-widest font-poppins">
              Displaying {filteredModules.length} Modules
            </span>
            <span className="text-xs text-[#059669] font-bold font-poppins cursor-pointer hover:underline" onClick={() => { setSearchQuery(""); setActiveCategory("all"); }}>
              Reset Filters
            </span>
          </div>

          {filteredModules.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {filteredModules.map((m) => {
                const Icon = m.icon;
                return (
                  <div
                    key={m.id}
                    className="border border-[#E2ECE7] rounded-2xl p-8 bg-[#F4F8F6] hover:border-[#059669] hover:-translate-y-1 transition-all duration-300 flex flex-col group"
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-10 h-10 bg-white rounded-lg border border-[#E9E9E9] text-[#121414] flex items-center justify-center group-hover:bg-[#059669] group-hover:text-white transition">
                        <Icon size={18} />
                      </div>
                      <span className="text-[10px] font-bold bg-white border border-[#E9E9E9] px-2 py-0.5 rounded uppercase tracking-wider text-neutral-400 font-poppins">
                        {m.category}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-[#121414] mb-3 font-poppins">
                      {m.title}
                    </h3>
                    
                    <p className="text-neutral-500 text-xs sm:text-sm leading-[165%] font-poppins font-normal flex-grow">
                      {m.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="w-full text-center py-20 bg-[#F4F8F6] border border-[#E2ECE7] rounded-2xl p-8">
              <span className="text-neutral-400 block mb-3 font-poppins font-semibold text-lg">No Feature Modules Found</span>
              <p className="text-neutral-500 text-sm max-w-[400px] mx-auto font-poppins">
                Try modifying your query or category selection to locate the target features.
              </p>
            </div>
          )}

        </div>
      </section>

      {/* ================= PDF HANDOUT BOARD CTA ================= */}
      <section className="w-full py-16 sm:py-24 bg-[#061c12] text-white overflow-hidden relative border-t border-emerald-950">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50%] h-[50%] bg-[#10B981]/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-[1680px] mx-auto px-5 sm:px-8 lg:px-16 xl:px-24 relative z-10 text-center">
          <div className="max-w-[800px] mx-auto">
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[3px] text-[#10B981] block mb-4 font-poppins">
              HANDOUT FOR COMMITTEES & INVESTORS
            </span>
            <h2
              className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-[115%] mb-6 text-white"
              style={{ fontFamily: '"Syne", sans-serif' }}
            >
              Need a Formal Software Requirement Document?
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base leading-[170%] mb-10 font-poppins">
              We have compiled a professional, thorough SRD containing all 26 feature blocks, user roles, security indices, and database architecture. Access the viewer below to show it at society board meetings.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => navigate("/srd")}
                className="w-full sm:w-auto min-w-[220px] h-[56px] bg-[#10B981] text-[#061c12] hover:opacity-90 rounded-xl flex items-center justify-center gap-2 font-bold text-xs uppercase tracking-wider transition cursor-pointer"
              >
                <FileCheck2 size={16} />
                <span>Open SRD Viewer</span>
              </button>

              <button
                onClick={() => navigate("/demo")}
                className="w-full sm:w-auto min-w-[220px] h-[56px] bg-transparent border border-emerald-800 hover:bg-emerald-900 rounded-xl flex items-center justify-center gap-2 font-bold text-xs uppercase tracking-wider transition cursor-pointer text-white"
              >
                <span>Launch Demo Portal</span>
                <ArrowRight size={15} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Stub for Lock icon not imported
const Lock = ({ size = 18, ...props }) => (
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
    <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);

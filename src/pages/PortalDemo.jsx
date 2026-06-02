import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  ShieldCheck,
  ShieldAlert,
  Smartphone,
  Users,
  CreditCard,
  Layers,
  ArrowRight,
  Sparkles,
  Search,
  Bell,
  Trash2,
  DollarSign,
  TrendingUp,
  FileCheck2,
  CheckCircle2,
  Lock,
  Megaphone,
  Radio,
  Sliders,
  Send,
  UserCheck2,
  Calendar,
  AlertTriangle,
  Play,
  Moon,
  Sun,
  LogOut,
  ChevronDown,
  Building2,
  Wrench,
  Car,
  Package,
  AlertOctagon,
  EyeOff,
  ClipboardList,
  FolderLock,
  ShoppingBag,
  Briefcase,
  ExternalLink,
  ChevronRight,
  Plus,
  Clock,
  Heart,
  MessageSquare,
  ThumbsUp,
  Award,
  Phone,
  BriefcaseConveyorBelt,
  FileText,
} from "lucide-react";

export default function PortalDemo() {
  const navigate = useNavigate();
  const [activeMenu, setActiveMenu] = useState("dashboard");
  const [themeMode, setThemeMode] = useState("light");
  const [collapsedCategories, setCollapsedCategories] = useState({
    ops: false,
    security: false,
    comm: false,
    residents: false,
    marketplace: false,
    professional: false,
  });

  // Checkout & Alert Modal States
  const [checkoutModal, setCheckoutModal] = useState(false);
  const [activeInvoice, setActiveInvoice] = useState(null);

  // Shared Simulated State Index
  const [residentsCount, setResidentsCount] = useState(23);
  const [societies, setSocieties] = useState([
    {
      id: "WCS-101",
      name: "Windsor Castle Cooperative Society",
      status: "Active",
      plan: "Enterprise Tier",
      flatsCount: 450,
      enabledFlags: ["sos", "billing", "visitor", "chat", "marketplace", "real-estate", "job-board", "polls"],
    },
  ]);

  const [preApprovedCodes, setPreApprovedCodes] = useState([
    {
      code: "V-4820",
      name: "Rohan Verma",
      flat: "B-202",
      vehicle: "MH-02-AB-1234",
      purpose: "Dinner Guest",
      status: "Pending",
    },
    {
      code: "V-1024",
      name: "Suresh Patil (Electrician)",
      flat: "A-102",
      vehicle: "N/A",
      purpose: "Electric Maintenance",
      status: "Pending",
    },
  ]);

  const [sosLogs, setSosLogs] = useState([]);
  const [invoices, setInvoices] = useState([
    {
      id: "INV-2940",
      flat: "B-202",
      period: "May 2026",
      amount: 4500,
      status: "Pending",
      resident: "mohitkumar143680@gmail.com",
    },
    {
      id: "INV-1804",
      flat: "A-102",
      period: "May 2026",
      amount: 3200,
      status: "Paid",
      resident: "example@user.com",
    },
  ]);

  const [complaints, setComplaints] = useState([
    {
      id: "COMP-101",
      title: "Washbasin leak in bathroom",
      desc: "Water is dripping from the main pipe underneath the sink.",
      flat: "B-202",
      category: "plumbing",
      priority: "HIGH",
      status: "OPEN",
      residentName: "Mohit Singh",
      date: "May 28, 2026",
    },
    {
      id: "COMP-102",
      title: "Common corridor corridor bulb flickering",
      desc: "The LED tube light outside A-102 keeps flashing.",
      flat: "A-102",
      category: "electrical",
      priority: "MEDIUM",
      status: "IN PROGRESS",
      residentName: "Suresh Patil",
      date: "May 27, 2026",
    },
  ]);

  const [chatMessages, setChatMessages] = useState([
    {
      from: "admin",
      to: "resident",
      text: "Hi Mohit, your plumbing complaint has been assigned to Ramesh. He will visit at 3 PM today.",
      time: "11:45 AM",
    },
  ]);

  // ENTERPRISE TIER STATE: Product Marketplace
  const [marketplaceListings, setMarketplaceListings] = useState([
    {
      id: 1,
      title: "Pre-loved Wooden Study Desk",
      price: 1800,
      flat: "C-104",
      desc: "Solid teak wood study table in excellent condition.",
      category: "Furniture",
      seller: "Amit Saxena",
      contact: "+91 98230 49182",
    },
    {
      id: 2,
      title: "Ergonomic Office Chair",
      price: 2500,
      flat: "B-202",
      desc: "Adjustable height, mesh back, perfect for work from home.",
      category: "Furniture",
      seller: "Mohit Singh",
      contact: "+91 91234 56789",
    },
    {
      id: 3,
      title: "Philips Air Fryer (Rarely Used)",
      price: 3200,
      flat: "A-405",
      desc: "4L capacity, perfect working condition, only 6 months old.",
      category: "Appliances",
      seller: "Neha Sharma",
      contact: "+91 98765 43210",
    }
  ]);

  // ENTERPRISE TIER STATE: Real Estate Properties
  const [properties, setProperties] = useState([
    {
      id: "prop-1",
      title: "Sleek 3 BHK Semi-Furnished Apartment",
      price: "₹85,000 / Month",
      flat: "A-1204",
      type: "Rent",
      size: "1850 Sq.Ft.",
      parking: "1 Reserved Space",
      agent: "Anil Kapoor",
      contact: "+91 98450 12345",
      desc: "East-facing, pool view, high floor with modular kitchen and spacious balconies."
    },
    {
      id: "prop-2",
      title: "Spacious 2 BHK Premium Corner Flat",
      price: "₹1.45 Cr",
      flat: "B-605",
      type: "Sale",
      size: "1200 Sq.Ft.",
      parking: "1 Reserved Space",
      agent: "Sunil Grover",
      contact: "+91 99123 99482",
      desc: "Ready to move, fully wooden flooring in master bedroom, gated security."
    }
  ]);

  // ENTERPRISE TIER STATE: Business Directory
  const [businesses, setBusinesses] = useState([
    {
      id: "biz-1",
      name: "Green Grocer Organic Store",
      category: "Supermarket",
      location: "Commercial Shop #3, Gate 1",
      timing: "8:00 AM - 9:30 PM",
      rating: "4.8",
      contact: "+91 98980 91823",
      discount: "5% off for residents"
    },
    {
      id: "biz-2",
      name: "Express Laundry & Dry Cleaners",
      category: "Laundry",
      location: "Basement Level 1",
      timing: "9:00 AM - 8:00 PM",
      rating: "4.5",
      contact: "+91 98321 00234",
      discount: "Free home delivery"
    },
    {
      id: "biz-3",
      name: "QuickFix Electricals & Hardware",
      category: "Hardware",
      location: "Commercial Shop #7, Gate 2",
      timing: "10:00 AM - 8:30 PM",
      rating: "4.6",
      contact: "+91 91234 98765",
      discount: "10% off service charge"
    }
  ]);

  // ENTERPRISE TIER STATE: Job Postings
  const [jobs, setJobs] = useState([
    {
      id: "job-1",
      title: "Part-time Python Tutor for Grade 10 Student",
      salary: "₹8,000 / Month",
      timing: "Mon-Wed-Fri, 6 PM - 7 PM",
      flat: "B-501",
      postedBy: "Dr. Alok Sen",
      applicants: 3,
      desc: "Looking for an engineering student or developer who can teach Python programming basics."
    },
    {
      id: "job-2",
      title: "Weekend Dog Walker & Caretaker",
      salary: "₹3,500 / Month",
      timing: "Sat-Sun, Morning & Evening Walks",
      flat: "A-902",
      postedBy: "Preeti Desai",
      applicants: 1,
      desc: "Need a friendly person to walk our 2-year old Golden Retriever on weekends and feed him."
    }
  ]);

  const [jobApplications, setJobApplications] = useState([
    { jobId: "job-1", applicantName: "Rohan Verma", flat: "B-202", qualification: "B.Tech Student", status: "Applied" }
  ]);

  // ENTERPRISE TIER STATE: Opinion Polls
  const [polls, setPolls] = useState([
    {
      id: "poll-1",
      question: "Install EV charging stations in the visitor parking area?",
      options: [
        { text: "Yes, immediately", votes: 42 },
        { text: "Yes, but with shared cost", votes: 28 },
        { text: "No, waste of resources", votes: 15 }
      ],
      voted: false,
      totalVotes: 85,
    },
    {
      id: "poll-2",
      question: "Change swimming pool hours during summers (6 AM to 10 PM)?",
      options: [
        { text: "Agree", votes: 56 },
        { text: "Disagree", votes: 12 },
        { text: "Keep existing hours", votes: 8 }
      ],
      voted: false,
      totalVotes: 76,
    }
  ]);

  // ENTERPRISE TIER STATE: Community Events
  const [events, setEvents] = useState([
    {
      id: "evt-1",
      title: "Monsoon Rain Dance Festival 2026",
      date: "June 15, 2026",
      time: "4:00 PM - 8:00 PM",
      location: "Main Clubhouse Lawn",
      price: 150,
      rsvps: 124,
      userRsvped: false,
      desc: "Get ready for the ultimate society celebration with live DJ, organic colors, and rain showers!"
    },
    {
      id: "evt-2",
      title: "Yoga & Mindfulness Workshop",
      date: "June 21, 2026",
      time: "6:30 AM - 8:00 AM",
      location: "Central Park Gazebo",
      price: 0,
      rsvps: 45,
      userRsvped: true,
      desc: "International Yoga Day celebration with certified instructor. Bring your own mats."
    }
  ]);

  // ENTERPRISE TIER STATE: Community Blogs
  const [blogs, setBlogs] = useState([
    {
      id: "blog-1",
      title: "10 Tips to Conserve Water in High-Rise Buildings",
      author: "Mohit Singh (Flat B-202)",
      date: "May 29, 2026",
      category: "Eco-Living",
      likes: 24,
      comments: 6,
      desc: "Simple daily habits like installing aerators on taps and reuse of RO filter waste water can save hundreds of liters..."
    },
    {
      id: "blog-2",
      title: "Highlights from our Annual Sports Meet 2026",
      author: "Sports Committee",
      date: "May 15, 2026",
      category: "Community",
      likes: 58,
      comments: 14,
      desc: "What a spectacular turnout! Over 200 kids and adults participated in the sprints, football shootout, and table tennis championship..."
    }
  ]);

  // SOCIETY TIER STATE: Society Notices
  const [notices, setNotices] = useState([
    {
      id: "not-1",
      title: "Scheduled Power Interruption - June 5",
      date: "June 2, 2026",
      category: "Maintenance",
      importance: "High",
      desc: "Grid maintenance by Tata Power. Backup generators will supply lifts and common areas only from 10:00 AM to 2:00 PM."
    },
    {
      id: "not-2",
      title: "Water Tank Cleaning Notice",
      date: "May 30, 2026",
      category: "General",
      importance: "Medium",
      desc: "Overhead water tanks will be cleaned on June 8. Expect low pressure water supply during morning hours."
    }
  ]);

  // SOCIETY TIER STATE: Parking Incidents
  const [parkingIncidents, setParkingIncidents] = useState([
    {
      id: "inc-1",
      vehicle: "MH-02-CD-5678",
      spot: "B-42 (Assigned to B-201)",
      reporter: "Rohan Verma",
      status: "Guards Dispatched",
      date: "Today, 10:15 AM",
      desc: "Unknown SUV parked illegally in my designated parking bay."
    }
  ]);

  // SOCIETY TIER STATE: Parking Vehicles List
  const [parkingVehicles, setParkingVehicles] = useState([
    { flat: "B-202", vehicle: "MH-02-AB-1234", owner: "Mohit Singh", type: "Car", slot: "B-10" },
    { flat: "A-102", vehicle: "MH-02-XY-9876", owner: "Suresh Patil", type: "Bike", slot: "A-15" },
    { flat: "C-104", vehicle: "MH-02-QQ-4321", owner: "Amit Saxena", type: "Car", slot: "C-05" }
  ]);

  // SOCIETY TIER STATE: Daily Domestic Help Registry
  const [dailyHelp, setDailyHelp] = useState([
    { id: "dh-1", name: "Kamla Bai", role: "Maid / Cooking", flatCount: 4, rating: "4.8", checkedIn: "Yes, 07:45 AM" },
    { id: "dh-2", name: "Ramesh Kumar", role: "Driver", flatCount: 2, rating: "4.5", checkedIn: "No" },
    { id: "dh-3", name: "Sunita Devi", role: "Baby Sitter", flatCount: 1, rating: "4.9", checkedIn: "Yes, 08:15 AM" }
  ]);

  // SOCIETY TIER STATE: Deliveries List
  const [deliveries, setDeliveries] = useState([
    { id: "del-1", company: "Amazon", packetCode: "AMZ-993", flat: "B-202", status: "At Gate", time: "10:30 AM" },
    { id: "del-2", company: "Zomato", packetCode: "ZOM-102", flat: "C-104", status: "Delivered", time: "09:15 AM" }
  ]);

  // Audio references for SOS Panic Sound
  const audioCtxRef = useRef(null);
  const oscillatorRef = useRef(null);

  const startAlertBeeper = () => {
    try {
      if (!audioCtxRef.current) {
        audioCtxRef.current = new (
          window.AudioContext || window.webkitAudioContext
        )();
      }
      if (audioCtxRef.current.state === "suspended") {
        audioCtxRef.current.resume();
      }

      const ctx = audioCtxRef.current;
      const osc = ctx.createOscillator();
      const gainNode = ctx.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(440, ctx.currentTime);
      osc.frequency.linearRampToValueAtTime(880, ctx.currentTime + 0.3);
      osc.frequency.linearRampToValueAtTime(440, ctx.currentTime + 0.6);
      osc.loop = true;

      gainNode.gain.setValueAtTime(0.08, ctx.currentTime);
      osc.connect(gainNode);
      gainNode.connect(ctx.destination);
      osc.start();

      oscillatorRef.current = osc;
    } catch (e) {
      console.warn("Audio alert restricted by browser privacy policies.", e);
    }
  };

  const stopAlertBeeper = () => {
    try {
      if (oscillatorRef.current) {
        oscillatorRef.current.stop();
        oscillatorRef.current.disconnect();
        oscillatorRef.current = null;
      }
    } catch (e) {
      console.error(e);
    }
  };

  // Form Input States
  const [newGuestName, setNewGuestName] = useState("");
  const [newGuestFlat, setNewGuestFlat] = useState("B-202");
  const [newGuestVehicle, setNewGuestVehicle] = useState("");
  const [newGuestPurpose, setNewGuestPurpose] = useState("Guest");

  const [newComplaintCategory, setNewComplaintCategory] = useState("cleaning");
  const [newComplaintTitle, setNewComplaintTitle] = useState("");
  const [newComplaintDesc, setNewComplaintDesc] = useState("");

  const [newChatText, setNewChatText] = useState("");
  const [newMarketplaceTitle, setNewMarketplaceTitle] = useState("");
  const [newMarketplacePrice, setNewMarketplacePrice] = useState("");
  const [newMarketplaceDesc, setNewMarketplaceDesc] = useState("");
  const [newMarketplaceCat, setNewMarketplaceCat] = useState("Furniture");

  // Additional New Form Inputs
  const [newPropTitle, setNewPropTitle] = useState("");
  const [newPropPrice, setNewPropPrice] = useState("");
  const [newPropType, setNewPropType] = useState("Rent");
  const [newPropSize, setNewPropSize] = useState("");
  const [newPropDesc, setNewPropDesc] = useState("");

  const [newJobTitle, setNewJobTitle] = useState("");
  const [newJobSalary, setNewJobSalary] = useState("");
  const [newJobDesc, setNewJobDesc] = useState("");

  const [newNoticeTitle, setNewNoticeTitle] = useState("");
  const [newNoticeDesc, setNewNoticeDesc] = useState("");
  const [newNoticeImportance, setNewNoticeImportance] = useState("Medium");
  const [newNoticeCategory, setNewNoticeCategory] = useState("General");

  const [newIncidentVehicle, setNewIncidentVehicle] = useState("");
  const [newIncidentSpot, setNewIncidentSpot] = useState("");
  const [newIncidentDesc, setNewIncidentDesc] = useState("");

  const [newBlogTitle, setNewBlogTitle] = useState("");
  const [newBlogCat, setNewBlogCat] = useState("Community");
  const [newBlogDesc, setNewBlogDesc] = useState("");

  const [scanCodeText, setScanCodeText] = useState("");
  const [scanFeedback, setScanFeedback] = useState(null);

  // Auto-terminate sirens on exit
  useEffect(() => {
    return () => stopAlertBeeper();
  }, []);

  const toggleCategory = (cat) => {
    setCollapsedCategories((prev) => ({
      ...prev,
      [cat]: !prev[cat],
    }));
  };

  // SOS Resident Trigger
  const triggerSosPanic = () => {
    const newAlert = {
      id: Math.random().toString(),
      flat: "B-202",
      residentName: "Mohit Singh",
      phone: "+91 79 7710 5170",
      time: new Date().toLocaleTimeString(),
      status: "Triggered",
    };
    setSosLogs([newAlert, ...sosLogs]);
    startAlertBeeper();
    alert(
      "CRITICAL ALARM ACTIVATED: SOS has been dispatched. Guards and Administrators have been alerted.",
    );
  };

  // Pre-approved pass generator
  const handleCreatePass = (e) => {
    e.preventDefault();
    if (!newGuestName) return;
    const code = `V-${Math.floor(1000 + Math.random() * 9000)}`;
    setPreApprovedCodes([
      {
        code,
        name: newGuestName,
        flat: newGuestFlat,
        vehicle: newGuestVehicle || "N/A",
        purpose: newGuestPurpose,
        status: "Pending",
      },
      ...preApprovedCodes,
    ]);
    setNewGuestName("");
    setNewGuestVehicle("");
    alert(
      `Pre-approved code created successfully! Code: ${code}. Share it with your visitor.`,
    );
  };

  // Payment simulated confirm
  const confirmCheckoutPayment = () => {
    setInvoices(
      invoices.map((inv) =>
        inv.id === activeInvoice.id ? { ...inv, status: "Paid" } : inv,
      ),
    );
    setCheckoutModal(false);
    setActiveInvoice(null);
    alert(
      "Payment checkout completed successfully! Official PDF invoice ledger is updated.",
    );
  };

  const handleCreateComplaint = (e) => {
    e.preventDefault();
    if (!newComplaintTitle || !newComplaintDesc) return;
    const newId = `COMP-${Math.floor(100 + Math.random() * 900)}`;
    setComplaints([
      {
        id: newId,
        title: newComplaintTitle,
        desc: newComplaintDesc,
        flat: "B-202",
        category: newComplaintCategory,
        priority: "HIGH",
        status: "OPEN",
        residentName: "Mohit Singh",
        date: "Today",
      },
      ...complaints,
    ]);
    setNewComplaintTitle("");
    setNewComplaintDesc("");
    setActiveMenu("dashboard");
    alert("Complaint lodged successfully. Displayed on live admin desks.");
  };

  const handleValidatePass = (e) => {
    e.preventDefault();
    if (!scanCodeText) return;
    const pass = preApprovedCodes.find(
      (p) => p.code.toUpperCase() === scanCodeText.toUpperCase(),
    );
    if (pass) {
      if (pass.status === "Checked In") {
        setScanFeedback({
          success: false,
          msg: `Code ${scanCodeText} was already checked in.`,
        });
      } else {
        setPreApprovedCodes(
          preApprovedCodes.map((p) =>
            p.code.toUpperCase() === scanCodeText.toUpperCase()
              ? { ...p, status: "Checked In" }
              : p,
          ),
        );
        setScanFeedback({
          success: true,
          msg: `ACCESS GRANTED: Approved ${pass.name} for flat ${pass.flat} (${pass.purpose}).`,
        });
      }
    } else {
      setScanFeedback({
        success: false,
        msg: `INVALID CODE: ${scanCodeText} was not found.`,
      });
    }
  };

  const acknowledgeSos = (id) => {
    setSosLogs(
      sosLogs.map((s) => (s.id === id ? { ...s, status: "Acknowledged" } : s)),
    );
    stopAlertBeeper();
  };

  // Add mock residents
  const incrementResidents = () => {
    setResidentsCount((prev) => prev + 1);
  };

  return (
    <div
      className={`min-h-screen flex ${themeMode === "light" ? "bg-[#f8fafc] text-slate-800" : "bg-slate-900 text-slate-200"}`}
      style={{ fontFamily: '"Plus Jakarta Sans", "Poppins", sans-serif' }}
    >
      {/* ============================================================== */}
      {/* 1. LEFT SIDEBAR NAVIGATION */}
      {/* ============================================================== */}
      <aside className="w-[280px] bg-white border-r border-[#e9e9e9] flex flex-col justify-between shrink-0 font-medium z-30 select-none shadow-sm">
        <div className="flex flex-col flex-1 overflow-y-auto">
          {/* Logo Brand Header */}
          <div className="px-6 py-5 border-b border-[#f1f1f1] flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#062417] to-[#0D5C3A] flex items-center justify-center shadow-sm">
              <ShieldCheck size={22} className="text-[#10B981]" />
            </div>
            <div className="flex flex-col">
              <span className="text-base font-extrabold tracking-tight text-slate-900 font-syne uppercase">
                Gate<span className="text-[#059669]">360</span>
              </span>
              <span className="text-[9px] font-bold tracking-[0.15em] text-[#998F81] uppercase -mt-0.5 font-poppins">
                Admin Dashboard
              </span>
            </div>
          </div>

          {/* Menus List */}
          <div className="p-4 space-y-4 text-xs tracking-wide">
            {/* Dashboard Pill */}
            <button
              onClick={() => setActiveMenu("dashboard")}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold transition text-left cursor-pointer ${
                activeMenu === "dashboard"
                  ? "bg-[#0da58e] text-white shadow-md shadow-[#0da58e]/10"
                  : "text-slate-600 hover:bg-[#FAF9F6]"
              }`}
            >
              <Smartphone size={16} />
              <span>Dashboard</span>
            </button>

            {/* Category: Society Operations */}
            <div className="space-y-1">
              <button
                onClick={() => toggleCategory("ops")}
                className="w-full flex items-center justify-between px-3 py-2 text-slate-400 font-bold uppercase text-[9px] tracking-[2px] transition hover:text-slate-900 cursor-pointer"
              >
                <span className="flex items-center gap-1.5">
                  <Building2 size={12} /> Society Operations
                </span>
                <ChevronDown
                  size={10}
                  className={`transition ${collapsedCategories.ops ? "-rotate-90" : ""}`}
                />
              </button>

              {!collapsedCategories.ops && (
                <div className="pl-3.5 space-y-0.5 border-l border-[#e9e9e9]/80 ml-2.5 pt-1">
                  {[
                    {
                      id: "society-info",
                      label: "Society Info",
                      icon: Building2,
                      isEnterprise: false,
                    },
                    {
                      id: "bill-management",
                      label: "Bill Management",
                      icon: CreditCard,
                      isEnterprise: false,
                    },
                    {
                      id: "service-requests",
                      label: "Service Requests",
                      icon: Wrench,
                      isEnterprise: false,
                    },
                    {
                      id: "amenities-booking",
                      label: "Amenities Booking",
                      icon: Calendar,
                      isEnterprise: false,
                    },
                    {
                      id: "parking-management",
                      label: "Parking Management",
                      icon: Car,
                      isEnterprise: false,
                    },
                  ].map((sub) => {
                    const SubIcon = sub.icon;
                    const active = activeMenu === sub.id;
                    return (
                      <button
                        key={sub.id}
                        onClick={() => setActiveMenu(sub.id)}
                        className={`w-full flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-left transition cursor-pointer font-semibold ${
                          active
                            ? "bg-[#FAF8F3] text-[#059669]"
                            : "text-slate-600 hover:bg-neutral-50"
                        }`}
                      >
                        <SubIcon
                          size={14}
                          className={
                            active ? "text-[#059669]" : "text-slate-400"
                          }
                        />
                        <span className="flex-1">{sub.label}</span>
                        {sub.isEnterprise && (
                          <span className="text-[7px] font-extrabold uppercase px-1 py-0.2 rounded bg-gradient-to-r from-purple-500 to-indigo-600 text-white tracking-widest shrink-0 scale-90 shadow-sm">✨ ENT</span>
                        )}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Category: Security & Access */}
            <div className="space-y-1">
              <button
                onClick={() => toggleCategory("security")}
                className="w-full flex items-center justify-between px-3 py-2 text-slate-400 font-bold uppercase text-[9px] tracking-[2px] transition hover:text-slate-900 cursor-pointer"
              >
                <span className="flex items-center gap-1.5">
                  <ShieldCheck size={12} /> Security & Access
                </span>
                <ChevronDown
                  size={10}
                  className={`transition ${collapsedCategories.security ? "-rotate-90" : ""}`}
                />
              </button>

              {!collapsedCategories.security && (
                <div className="pl-3.5 space-y-0.5 border-l border-[#e9e9e9]/80 ml-2.5 pt-1">
                  {[
                    { id: "sos", label: "SOS Console", icon: Radio, isEnterprise: false },
                    {
                      id: "security-mgmt",
                      label: "Security Management",
                      icon: ShieldCheck,
                      isEnterprise: false,
                    },
                    { id: "visitors", label: "Visitors Scanner", icon: Users, isEnterprise: false },
                    { id: "deliveries", label: "Deliveries", icon: Package, isEnterprise: false },
                    {
                      id: "parking-incidents",
                      label: "Parking Incidents",
                      icon: AlertTriangle,
                      isEnterprise: false,
                    },
                    {
                      id: "blacklisted",
                      label: "Blacklisted DB",
                      icon: EyeOff,
                      isEnterprise: false,
                    },
                  ].map((sub) => {
                    const SubIcon = sub.icon;
                    const active = activeMenu === sub.id;
                    return (
                      <button
                        key={sub.id}
                        onClick={() => setActiveMenu(sub.id)}
                        className={`w-full flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-left transition cursor-pointer font-semibold ${
                          active
                            ? "bg-[#FAF8F3] text-[#059669]"
                            : "text-slate-600 hover:bg-neutral-50"
                        }`}
                      >
                        <SubIcon
                          size={14}
                          className={
                            active ? "text-[#059669]" : "text-slate-400"
                          }
                        />
                        <span className="flex-1">{sub.label}</span>
                        {sub.isEnterprise && (
                          <span className="text-[7px] font-extrabold uppercase px-1 py-0.2 rounded bg-gradient-to-r from-purple-500 to-indigo-600 text-white tracking-widest shrink-0 scale-90 shadow-sm">✨ ENT</span>
                        )}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Category: Communication Hub */}
            <div className="space-y-1">
              <button
                onClick={() => toggleCategory("comm")}
                className="w-full flex items-center justify-between px-3 py-2 text-slate-400 font-bold uppercase text-[9px] tracking-[2px] transition hover:text-slate-900 cursor-pointer"
              >
                <span className="flex items-center gap-1.5">
                  <Megaphone size={12} /> Communication Hub
                </span>
                <ChevronDown
                  size={10}
                  className={`transition ${collapsedCategories.comm ? "-rotate-90" : ""}`}
                />
              </button>

              {!collapsedCategories.comm && (
                <div className="pl-3.5 space-y-0.5 border-l border-[#e9e9e9]/80 ml-2.5 pt-1">
                  {[
                    {
                      id: "notices",
                      label: "Notices Broadcast",
                      icon: Megaphone,
                      isEnterprise: false,
                    },
                    {
                      id: "complaints",
                      label: "Complaints Portal",
                      icon: ClipboardList,
                      isEnterprise: false,
                    },
                    { id: "polls", label: "Opinion Polls", icon: Sliders, isEnterprise: true },
                    {
                      id: "events",
                      label: "Events Coordinator",
                      icon: Calendar,
                      isEnterprise: true,
                    },
                    {
                      id: "report-issues",
                      label: "Report Issues",
                      icon: AlertOctagon,
                      isEnterprise: false,
                    },
                    { id: "blogs", label: "Community Blogs", icon: Sparkles, isEnterprise: true },
                  ].map((sub) => {
                    const SubIcon = sub.icon;
                    const active = activeMenu === sub.id;
                    return (
                      <button
                        key={sub.id}
                        onClick={() => setActiveMenu(sub.id)}
                        className={`w-full flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-left transition cursor-pointer font-semibold ${
                          active
                            ? "bg-[#FAF8F3] text-[#059669]"
                            : "text-slate-600 hover:bg-neutral-50"
                        }`}
                      >
                        <SubIcon
                          size={14}
                          className={
                            active ? "text-[#059669]" : "text-slate-400"
                          }
                        />
                        <span className="flex-1">{sub.label}</span>
                        {sub.isEnterprise && (
                          <span className="text-[7px] font-extrabold uppercase px-1 py-0.2 rounded bg-gradient-to-r from-purple-500 to-indigo-600 text-white tracking-widest shrink-0 scale-90 shadow-sm">✨ ENT</span>
                        )}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Category: Resident & Staff */}
            <div className="space-y-1">
              <button
                onClick={() => toggleCategory("residents")}
                className="w-full flex items-center justify-between px-3 py-2 text-slate-400 font-bold uppercase text-[9px] tracking-[2px] transition hover:text-slate-900 cursor-pointer"
              >
                <span className="flex items-center gap-1.5">
                  <Users size={12} /> Resident & Staff
                </span>
                <ChevronDown
                  size={10}
                  className={`transition ${collapsedCategories.residents ? "-rotate-90" : ""}`}
                />
              </button>

              {!collapsedCategories.residents && (
                <div className="pl-3.5 space-y-0.5 border-l border-[#e9e9e9]/80 ml-2.5 pt-1">
                  {[
                    { id: "residents-mgmt", label: "Residents", icon: Users, isEnterprise: false },
                    {
                      id: "committee-oversight",
                      label: "Management Committee",
                      icon: FolderLock,
                      isEnterprise: false,
                    },
                    {
                      id: "staff-attendance",
                      label: "Staff Attendance",
                      icon: CheckCircle2,
                      isEnterprise: false,
                    },
                    { id: "daily-help", label: "Daily-Help", icon: Clock, isEnterprise: false },
                  ].map((sub) => {
                    const SubIcon = sub.icon;
                    const active = activeMenu === sub.id;
                    return (
                      <button
                        key={sub.id}
                        onClick={() => setActiveMenu(sub.id)}
                        className={`w-full flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-left transition cursor-pointer font-semibold ${
                          active
                            ? "bg-[#FAF8F3] text-[#059669]"
                            : "text-slate-600 hover:bg-neutral-50"
                        }`}
                      >
                        <SubIcon
                          size={14}
                          className={
                            active ? "text-[#059669]" : "text-slate-400"
                          }
                        />
                        <span className="flex-1">{sub.label}</span>
                        {sub.isEnterprise && (
                          <span className="text-[7px] font-extrabold uppercase px-1 py-0.2 rounded bg-gradient-to-r from-purple-500 to-indigo-600 text-white tracking-widest shrink-0 scale-90 shadow-sm">✨ ENT</span>
                        )}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Category: Marketplace */}
            <div className="space-y-1">
              <button
                onClick={() => toggleCategory("marketplace")}
                className="w-full flex items-center justify-between px-3 py-2 text-slate-400 font-bold uppercase text-[9px] tracking-[2px] transition hover:text-slate-900 cursor-pointer"
              >
                <span className="flex items-center gap-1.5">
                  <ShoppingBag size={12} /> Marketplace
                </span>
                <ChevronDown
                  size={10}
                  className={`transition ${collapsedCategories.marketplace ? "-rotate-90" : ""}`}
                />
              </button>

              {!collapsedCategories.marketplace && (
                <div className="pl-3.5 space-y-0.5 border-l border-[#e9e9e9]/80 ml-2.5 pt-1">
                  {[
                    {
                      id: "product-market",
                      label: "Product Market",
                      icon: ShoppingBag,
                      isEnterprise: true,
                    },
                    {
                      id: "real-estate",
                      label: "Real Estate",
                      icon: Building2,
                      isEnterprise: true,
                    },
                  ].map((sub) => {
                    const SubIcon = sub.icon;
                    const active = activeMenu === sub.id;
                    return (
                      <button
                        key={sub.id}
                        onClick={() => setActiveMenu(sub.id)}
                        className={`w-full flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-left transition cursor-pointer font-semibold ${
                          active
                            ? "bg-[#FAF8F3] text-[#059669]"
                            : "text-slate-600 hover:bg-neutral-50"
                        }`}
                      >
                        <SubIcon
                          size={14}
                          className={
                            active ? "text-[#059669]" : "text-slate-400"
                          }
                        />
                        <span className="flex-1">{sub.label}</span>
                        {sub.isEnterprise && (
                          <span className="text-[7px] font-extrabold uppercase px-1 py-0.2 rounded bg-gradient-to-r from-purple-500 to-indigo-600 text-white tracking-widest shrink-0 scale-90 shadow-sm">✨ ENT</span>
                        )}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Category: Professional Hub */}
            <div className="space-y-1">
              <button
                onClick={() => toggleCategory("professional")}
                className="w-full flex items-center justify-between px-3 py-2 text-slate-400 font-bold uppercase text-[9px] tracking-[2px] transition hover:text-slate-900 cursor-pointer"
              >
                <span className="flex items-center gap-1.5">
                  <Briefcase size={12} /> Professional Hub
                </span>
                <ChevronDown
                  size={10}
                  className={`transition ${collapsedCategories.professional ? "-rotate-90" : ""}`}
                />
              </button>

              {!collapsedCategories.professional && (
                <div className="pl-3.5 space-y-0.5 border-l border-[#e9e9e9]/80 ml-2.5 pt-1">
                  {[
                    {
                      id: "biz-directory",
                      label: "Business Directory",
                      icon: ClipboardList,
                      isEnterprise: true,
                    },
                    { id: "job-board", label: "Job Board", icon: Briefcase, isEnterprise: true },
                  ].map((sub) => {
                    const SubIcon = sub.icon;
                    const active = activeMenu === sub.id;
                    return (
                      <button
                        key={sub.id}
                        onClick={() => setActiveMenu(sub.id)}
                        className={`w-full flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-left transition cursor-pointer font-semibold ${
                          active
                            ? "bg-[#FAF8F3] text-[#059669]"
                            : "text-slate-600 hover:bg-neutral-50"
                        }`}
                      >
                        <SubIcon
                          size={14}
                          className={
                            active ? "text-[#059669]" : "text-slate-400"
                          }
                        />
                        <span className="flex-1">{sub.label}</span>
                        {sub.isEnterprise && (
                          <span className="text-[7px] font-extrabold uppercase px-1 py-0.2 rounded bg-gradient-to-r from-purple-500 to-indigo-600 text-white tracking-widest shrink-0 scale-90 shadow-sm">✨ ENT</span>
                        )}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Sidebar Footer info */}
        <div className="p-4 border-t border-[#f1f1f1] text-[10px] text-slate-400 text-center font-semibold font-poppins tracking-wider bg-neutral-50">
          <span>GATE360 CORE SAAS v1.0</span>
        </div>
      </aside>

      {/* ============================================================== */}
      {/* 2. MAIN CONTAINER PANEL */}
      {/* ============================================================== */}
      <div className="flex-1 flex flex-col min-w-0 overflow-x-hidden">
        {/* Top Header Bar */}
        <header className="h-[74px] bg-white border-b border-[#e9e9e9] flex items-center justify-between px-6 shrink-0 z-20 shadow-sm select-none">
          <div className="flex items-center gap-2 font-bold font-syne text-[#059669] text-sm">
            <span>INTEGRATE</span>
            <span className="text-slate-400 font-normal">/</span>
            <span className="text-slate-900 font-semibold text-xs tracking-wider font-poppins">
              Admin Dashboard
            </span>
          </div>

          <div className="flex items-center gap-3.5">
            {/* SOS Trigger Pill button */}
            <button
              onClick={triggerSosPanic}
              className="flex items-center justify-center gap-1.5 bg-[#ef4444] text-white px-3.5 py-1.5 rounded-full text-xs font-bold shadow-md hover:bg-red-600 active:scale-95 cursor-pointer"
            >
              <ShieldAlert size={14} className="animate-pulse" />
              <span>SOS</span>
            </button>

            {/* Notice quick trigger */}
            <button
              onClick={() =>
                alert("Creating a general notice circular for residents...")
              }
              className="flex items-center justify-center gap-1.5 bg-[#0da58e] text-white px-3.5 py-1.5 rounded-full text-xs font-bold shadow-sm hover:opacity-90 active:scale-95 cursor-pointer"
            >
              <Megaphone size={14} />
              <span>NOTICE</span>
            </button>

            {/* Theme Toggle */}
            <button
              onClick={() =>
                setThemeMode(themeMode === "light" ? "dark" : "light")
              }
              className="p-2 rounded-xl text-slate-400 hover:text-slate-800 transition hover:bg-neutral-50"
            >
              {themeMode === "light" ? <Moon size={18} /> : <Sun size={18} />}
            </button>

            {/* User Profile Info Card */}
            <div className="flex items-center gap-3 border-l border-[#f1f1f1] pl-4">
              <div className="w-10 h-10 rounded-full bg-[#10b981]/10 border border-[#10b981]/20 flex items-center justify-center text-[#059669] font-extrabold text-sm shadow-inner">
                M
              </div>
              <div className="hidden sm:flex flex-col text-left">
                <span className="text-xs font-bold text-slate-950 font-poppins">
                  Mohit Singh
                </span>
                <span className="text-[9px] text-[#998F81] font-semibold uppercase tracking-wider">
                  Administrator
                </span>
              </div>
            </div>

            <button
              onClick={() => navigate("/")}
              className="p-2 rounded-xl text-slate-400 hover:text-slate-800 hover:bg-neutral-50 flex items-center justify-center border border-[#e9e9e9] transition"
              title="Logout"
            >
              <LogOut size={16} />
            </button>
          </div>
        </header>

        {/* SOS Log alert bar */}
        {sosLogs.some((s) => s.status === "Triggered") && (
          <div className="bg-red-50 border-b border-red-200 py-3 text-center px-6 text-xs sm:text-sm font-bold text-red-800 flex items-center justify-center gap-3 animate-pulse">
            <ShieldAlert size={16} className="animate-bounce" />
            <span>
              SOS ACTIVE: Mohit Singh in Flat B-202 triggered Panic Alert!
            </span>
            <button
              onClick={() => acknowledgeSos(sosLogs[0].id)}
              className="px-2.5 py-1 bg-red-600 text-white rounded text-[10px] uppercase font-bold hover:bg-red-700 transition cursor-pointer"
            >
              Dismiss
            </button>
          </div>
        )}

        {/* Content Body Workspace */}
        <main className="flex-grow p-6 md:p-8 overflow-y-auto">
          {/* ============================================================== */}
          {/* A. RECREATED DASHBOARD HOME */}
          {/* ============================================================== */}
          {activeMenu === "dashboard" && (
            <div className="space-y-6 max-w-[1400px] mx-auto animate-fade-in">
              {/* Welcome Teal Banner card */}
              <div className="bg-[#10b981] rounded-3xl p-8 text-white relative overflow-hidden shadow-md flex flex-col justify-center text-left">
                <div className="absolute top-1/2 right-10 -translate-y-1/2 opacity-10 pointer-events-none">
                  <ShieldCheck size={180} />
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight font-poppins">
                  Welcome back, Mohit Singh!
                </h2>
                <p className="text-white/80 text-xs sm:text-sm mt-1.5 font-poppins font-normal">
                  Here's what's happening in your society today.
                </p>
              </div>

              {/* Statistics row widgets */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    value: residentsCount,
                    label: "Total Residents",
                    color: "text-blue-600",
                    bg: "bg-blue-50",
                    icon: Users,
                  },
                  {
                    value: complaints.length + 18,
                    label: "Total Complaints",
                    color: "text-purple-600",
                    bg: "bg-purple-50",
                    icon: ClipboardList,
                  },
                  {
                    value:
                      complaints.filter((c) => c.status === "IN PROGRESS")
                        .length + 7,
                    label: "In Progress",
                    color: "text-amber-500",
                    bg: "bg-amber-50",
                    icon: Clock,
                  },
                  {
                    value:
                      complaints.filter((c) => c.status === "RESOLVED").length +
                      2,
                    label: "Resolved",
                    color: "text-emerald-600",
                    bg: "bg-emerald-50",
                    icon: CheckCircle2,
                  },
                ].map((stat) => {
                  const StatIcon = stat.icon;
                  return (
                    <div
                      key={stat.label}
                      className="bg-white border border-[#e9e9e9] rounded-2xl p-6 shadow-sm flex items-center justify-between hover:border-slate-300 transition"
                    >
                      <div className="text-left">
                        <span className="text-[11px] font-bold text-slate-400 block uppercase tracking-wider mb-2 font-poppins">
                          {stat.label}
                        </span>
                        <span className="text-3xl font-extrabold text-slate-900 leading-none">
                          {stat.value}
                        </span>
                      </div>
                      <div
                        className={`w-12 h-12 rounded-2xl ${stat.bg} ${stat.color} flex items-center justify-center shrink-0`}
                      >
                        <StatIcon size={20} />
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Two-Column Grid: Recent Complaints & Quick Actions */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Recent Complaints (Left Column) */}
                <div className="lg:col-span-8 bg-white border border-[#e9e9e9] rounded-3xl p-6 shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-center border-b border-[#f1f1f1] pb-4 mb-5">
                      <div className="text-left">
                        <h3 className="text-lg font-bold text-slate-900 font-poppins">
                          Recent Complaints
                        </h3>
                        <p className="text-neutral-400 text-xs mt-0.5">
                          Latest issues from residents
                        </p>
                      </div>
                      <button
                        onClick={() => setActiveMenu("complaints")}
                        className="text-xs font-bold text-[#059669] bg-[#F4F8F6] border border-[#E2ECE7] hover:bg-[#E2ECE7] px-3.5 py-1.5 rounded-xl transition cursor-pointer flex items-center gap-1.5"
                      >
                        <span>View All</span>
                        <ArrowRight size={12} />
                      </button>
                    </div>

                    <div className="space-y-4">
                      {complaints.map((c) => (
                        <div
                          key={c.id}
                          className="border border-[#e9e9e9]/70 rounded-2xl p-5 bg-[#F4F8F6]/20 hover:border-[#059669]/60 hover:bg-[#FAF9F6]/25 transition flex items-center justify-between text-left"
                        >
                          <div className="space-y-2">
                            <span className="text-sm font-extrabold text-slate-950 font-poppins block">
                              {c.title}
                            </span>
                            <span className="text-slate-500 text-xs block italic leading-relaxed">
                              "{c.desc}"
                            </span>

                            {/* Badges row */}
                            <div className="flex flex-wrap items-center gap-1.5 mt-2">
                              <span
                                className={`text-[9px] font-bold px-2 py-0.5 rounded uppercase tracking-wider ${
                                  c.status === "OPEN"
                                    ? "bg-blue-50 text-blue-600 border border-blue-100"
                                    : "bg-slate-100 text-slate-600 border border-slate-200"
                                }`}
                              >
                                {c.status}
                              </span>
                              <span className="text-[9px] font-bold bg-orange-50 text-orange-600 border border-orange-100 px-2 py-0.5 rounded uppercase tracking-wider">
                                {c.priority}
                              </span>
                              <span className="text-[9px] font-bold bg-neutral-100 text-slate-500 border border-slate-200 px-2 py-0.5 rounded uppercase tracking-wider">
                                {c.category}
                              </span>
                            </div>

                            <span className="text-[10px] text-slate-400 block pt-1">
                              {c.residentName} • Flat: {c.flat} •{" "}
                              <span className="font-semibold text-slate-400">
                                {c.date}
                              </span>
                            </span>
                          </div>

                          <button
                            onClick={() => {
                              setActiveMenu("service-requests");
                              alert(
                                `Dispatching help team to solve: "${c.title}" at Flat ${c.flat}.`,
                              );
                            }}
                            className="w-8 h-8 rounded-full bg-white border border-[#e9e9e9] hover:bg-[#FAF9F6] text-[#059669] flex items-center justify-center shadow-sm shrink-0 transition"
                          >
                            <ArrowRight size={14} />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Quick Actions (Right Column) */}
                <div className="lg:col-span-4 bg-white border border-[#e9e9e9] rounded-3xl p-6 shadow-sm">
                  <div className="border-b border-[#f1f1f1] pb-4 mb-5 text-left">
                    <h3 className="text-lg font-bold text-slate-900 font-poppins">
                      Quick Actions
                    </h3>
                    <p className="text-neutral-400 text-xs mt-0.5">
                      Manage your society
                    </p>
                  </div>

                  <ul className="space-y-3">
                    {[
                      {
                        label: "Society Details",
                        to: "society-info",
                        bg: "bg-blue-50 text-blue-600",
                      },
                      {
                        label: "Manage Residents",
                        to: "residents-mgmt",
                        bg: "bg-emerald-50 text-emerald-600",
                      },
                      {
                        label: "All Complaints",
                        to: "complaints",
                        bg: "bg-amber-50 text-amber-600",
                      },
                      {
                        label: "Send Notices",
                        to: "notices",
                        bg: "bg-purple-50 text-purple-600",
                      },
                      {
                        label: "Manage Visitors",
                        to: "visitors",
                        bg: "bg-blue-50 text-blue-600",
                      },
                      {
                        label: "Blacklisted",
                        to: "blacklisted",
                        bg: "bg-red-50 text-red-600",
                      },
                    ].map((act) => (
                      <li key={act.label}>
                        <button
                          onClick={() => setActiveMenu(act.to)}
                          className="w-full flex items-center justify-between p-3.5 bg-[#F4F8F6]/20 border border-[#e9e9e9]/80 rounded-xl hover:border-[#059669]/40 hover:bg-[#FAF9F6]/40 transition text-left cursor-pointer font-bold text-slate-800 text-xs font-poppins"
                        >
                          <div className="flex items-center gap-3">
                            <div
                              className={`w-8 h-8 rounded-lg ${act.bg} flex items-center justify-center shrink-0`}
                            >
                              <Building2 size={14} />
                            </div>
                            <span>{act.label}</span>
                          </div>
                          <ChevronRight size={14} className="text-slate-400" />
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* ============================================================== */}
          {/* B. BILL MANAGEMENT */}
          {/* ============================================================== */}
          {activeMenu === "bill-management" && (
            <div className="space-y-6 max-w-[1400px] mx-auto text-left animate-fade-in">
              <div className="border-b border-[#e9e9e9] pb-4">
                <h2 className="text-2xl font-bold font-syne text-[#059669]">
                  Maintenance Billing Desk
                </h2>
                <p className="text-neutral-400 text-xs">
                  Raise invoices, configure automatic billing grace periods, and
                  verify payments.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                <div className="lg:col-span-5 bg-white border border-[#e9e9e9] rounded-3xl p-6 shadow-sm flex flex-col justify-between">
                  <div className="space-y-5">
                    <span className="text-[10px] font-bold tracking-[3px] text-[#059669] uppercase block">
                      Collection Stats
                    </span>
                    <div>
                      <div className="flex justify-between text-xs font-bold text-slate-600 mb-1.5">
                        <span>Total Collection Rates (May 2026)</span>
                        <span>76%</span>
                      </div>
                      <div className="w-full bg-[#f1f5f9] h-3 rounded-full overflow-hidden border border-[#e9e9e9]">
                        <div
                          className="bg-[#059669] h-full rounded-full"
                          style={{ width: "76%" }}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#f1f1f1]">
                      <div>
                        <span className="text-[9px] text-neutral-400 block uppercase font-bold">
                          Outstanding Dues
                        </span>
                        <span className="text-lg font-extrabold text-amber-500">
                          ₹45,500
                        </span>
                      </div>
                      <div>
                        <span className="text-[9px] text-neutral-400 block uppercase font-bold">
                          Dues Settle Collections
                        </span>
                        <span className="text-lg font-extrabold text-emerald-600">
                          ₹1,44,200
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#F4F8F6] border border-[#E2ECE7] rounded-2xl p-4 text-xs mt-6 space-y-1.5">
                    <span className="font-bold text-slate-700 block mb-1">
                      Standard Society Fee Configs
                    </span>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Flat Rate:</span>
                      <span className="font-bold text-slate-800">
                        ₹4,500 / Month
                      </span>
                    </div>
                    <div className="flex justify-between border-t border-[#e2ece7]/60 pt-1.5">
                      <span className="text-slate-500">Grace Limit:</span>
                      <span className="font-bold text-slate-800">
                        10 Days Grace
                      </span>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-7 bg-white border border-[#e9e9e9] rounded-3xl p-6 shadow-sm">
                  <span className="text-[10px] font-bold tracking-[3px] text-[#059669] uppercase block mb-4">
                    Invoicing registries
                  </span>
                  <div className="space-y-4">
                    {invoices.map((inv) => (
                      <div
                        key={inv.id}
                        className="bg-[#FAF9F6] border border-[#e9e9e9] rounded-2xl p-4 flex flex-wrap justify-between items-center gap-3"
                      >
                        <div className="text-left">
                          <span className="text-sm font-bold text-slate-900 block font-poppins">
                            Flat {inv.flat} ({inv.period})
                          </span>
                          <span className="text-xs text-neutral-400 block mt-0.5">
                            Dues amount: ₹{inv.amount} • Resident:{" "}
                            {inv.resident}
                          </span>
                          <span className="text-[9px] text-slate-500 block">
                            Invoice Reference ID: {inv.id}
                          </span>
                        </div>

                        <div className="flex items-center gap-2.5">
                          <span
                            className={`text-[9px] font-bold px-2 py-0.5 rounded border ${
                              inv.status === "Paid"
                                ? "bg-emerald-50 text-emerald-600 border-emerald-100"
                                : "bg-amber-50 text-amber-600 border-amber-100"
                            }`}
                          >
                            {inv.status}
                          </span>

                          {inv.status === "Pending" ? (
                            <button
                              onClick={() => handlePayInvoice(inv)}
                              className="px-3.5 py-1.5 bg-[#059669] hover:bg-[#047857] text-white font-bold text-[10px] uppercase rounded-xl transition cursor-pointer"
                            >
                              Collect Dues
                            </button>
                          ) : (
                            <a
                              href={`data:text/plain;charset=utf-8,${encodeURIComponent(`GATE360 LEDGER INVOICE\nWindsor Castle Society\nFlat ${inv.flat}\nAmount Paid: INR ${inv.amount}\nPeriod: ${inv.period}\nStatus: Settled`)}`}
                              download={`Invoice-${inv.id}.txt`}
                              className="px-3.5 py-1.5 bg-slate-800 border border-slate-700 hover:bg-slate-700 text-white font-bold text-[10px] uppercase rounded-xl transition text-center"
                            >
                              Download Receipt
                            </a>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ============================================================== */}
          {/* C. SERVICE REQUESTS & COMPLAINTS WORKFLOWS */}
          {/* ============================================================== */}
          {activeMenu === "service-requests" && (
            <div className="space-y-6 max-w-[1400px] mx-auto text-left animate-fade-in">
              <div className="border-b border-[#e9e9e9] pb-4">
                <h2 className="text-2xl font-bold font-syne text-[#059669]">
                  Complaints & Help Tickets Dispatcher
                </h2>
                <p className="text-neutral-400 text-xs">
                  Assign support plumbers, carpenters, or gardeners to resolve
                  community complaints.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* raise form */}
                <div className="lg:col-span-5 bg-white border border-[#e9e9e9] rounded-3xl p-6 shadow-sm">
                  <span className="text-[10px] font-bold tracking-[3px] text-[#059669] uppercase block mb-4">
                    Lodge Support Ticket
                  </span>
                  <form onSubmit={handleCreateComplaint} className="space-y-4">
                    <div className="flex flex-col">
                      <label className="text-[10px] font-bold text-slate-400 mb-1.5 uppercase">
                        Complaint Title
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Washbasin pipe leakage"
                        value={newComplaintTitle}
                        onChange={(e) => setNewComplaintTitle(e.target.value)}
                        className="bg-[#FAF9F6] border border-[#e9e9e9] rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-[#059669]"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="text-[10px] font-bold text-slate-400 mb-1.5 uppercase">
                        Category
                      </label>
                      <select
                        value={newComplaintCategory}
                        onChange={(e) =>
                          setNewComplaintCategory(e.target.value)
                        }
                        className="bg-[#FAF9F6] border border-[#e9e9e9] rounded-xl px-4 py-2.5 text-xs focus:outline-none"
                      >
                        <option value="cleaning">
                          Cleaning / Housekeeping
                        </option>
                        <option value="plumbing">Plumbing Alerts</option>
                        <option value="electrical">Electrical Alerts</option>
                        <option value="parking">Parking Incident</option>
                      </select>
                    </div>
                    <div className="flex flex-col">
                      <label className="text-[10px] font-bold text-slate-400 mb-1.5 uppercase">
                        Brief Details
                      </label>
                      <textarea
                        required
                        placeholder="Input operational details..."
                        value={newComplaintDesc}
                        onChange={(e) => setNewComplaintDesc(e.target.value)}
                        rows="3"
                        className="bg-[#FAF9F6] border border-[#e9e9e9] rounded-xl px-4 py-2.5 text-xs focus:outline-none"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-[#059669] text-white font-bold py-2.5 rounded-xl text-xs uppercase cursor-pointer transition hover:opacity-90"
                    >
                      Submit Ticket
                    </button>
                  </form>
                </div>

                {/* active lists */}
                <div className="lg:col-span-7 bg-white border border-[#e9e9e9] rounded-3xl p-6 shadow-sm">
                  <span className="text-[10px] font-bold tracking-[3px] text-[#059669] uppercase block mb-4">
                    Active Support Logs
                  </span>
                  <div className="space-y-4">
                    {complaints.map((c) => (
                      <div
                        key={c.id}
                        className="border border-[#e9e9e9] rounded-2xl p-4 bg-[#FAF9F6]/20"
                      >
                        <div className="flex justify-between items-start border-b border-[#e9e9e9]/60 pb-2.5 mb-2">
                          <div>
                            <span className="text-sm font-bold text-slate-900 block font-poppins">
                              {c.title}
                            </span>
                            <span className="text-[9px] text-slate-400 block uppercase font-bold mt-0.5">
                              {c.category} • Flat {c.flat}
                            </span>
                          </div>
                          <span className="text-[9px] font-bold bg-[#FAF9F6] border border-[#e9e9e9] text-amber-600 px-2 py-0.5 rounded font-poppins">
                            {c.status}
                          </span>
                        </div>
                        <p className="text-neutral-500 text-xs italic">
                          "{c.desc}"
                        </p>

                        <div className="flex justify-between items-center text-[10px] pt-3 border-t border-[#e9e9e9]/40 mt-3 text-slate-500">
                          <span>
                            Technician:{" "}
                            <strong className="text-slate-800">
                              {c.assignedTo || "Ramesh (Plumber)"}
                            </strong>
                          </span>
                          {c.status !== "RESOLVED" && (
                            <button
                              onClick={() => {
                                setComplaints(
                                  complaints.map((item) =>
                                    item.id === c.id
                                      ? { ...item, status: "RESOLVED" }
                                      : item,
                                  ),
                                );
                                alert(
                                  "Technician workflow updated to RESOLVED.",
                                );
                              }}
                              className="px-2.5 py-1 bg-white border border-[#e9e9e9] hover:bg-[#FAF9F6] text-[#059669] font-bold rounded cursor-pointer"
                            >
                              Complete Work
                            </button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ============================================================== */}
          {/* D. EXPECTED VISITORS SCANNER */}
          {/* ============================================================== */}
          {activeMenu === "visitors" && (
            <div className="space-y-6 max-w-[1400px] mx-auto text-left animate-fade-in">
              <div className="border-b border-[#e9e9e9] pb-4">
                <h2 className="text-2xl font-bold font-syne text-[#059669]">
                  Gate Pass & Visitors Scanner
                </h2>
                <p className="text-neutral-400 text-xs">
                  Verify pre-approved entry codes and scans visitor QR slips.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-5 bg-white border border-[#e9e9e9] rounded-3xl p-6 shadow-sm">
                  <span className="text-[10px] font-bold tracking-[3px] text-[#059669] uppercase block mb-4">
                    Scanner QR Decoder
                  </span>
                  <form onSubmit={handleValidatePass} className="space-y-4">
                    <div className="flex flex-col">
                      <label className="text-[10px] font-bold text-slate-400 mb-1.5 uppercase">
                        Enter Entry Pass digits
                      </label>
                      <div className="flex gap-2">
                        <input
                          type="text"
                          placeholder="e.g. V-4820"
                          value={scanCodeText}
                          onChange={(e) => setScanCodeText(e.target.value)}
                          className="bg-[#FAF9F6] border border-[#e9e9e9] rounded-xl px-4 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-[#059669] flex-grow"
                        />
                        <button
                          type="submit"
                          className="px-5 bg-[#059669] text-white font-bold text-xs uppercase rounded-xl cursor-pointer"
                        >
                          SCAN
                        </button>
                      </div>
                    </div>
                  </form>

                  {scanFeedback && (
                    <div
                      className={`p-4 rounded-2xl border text-xs leading-normal font-semibold mt-4 ${
                        scanFeedback.success
                          ? "bg-emerald-50 border-emerald-200 text-emerald-800"
                          : "bg-red-50 border-red-200 text-red-800"
                      }`}
                    >
                      {scanFeedback.msg}
                    </div>
                  )}
                </div>

                <div className="lg:col-span-7 bg-white border border-[#e9e9e9] rounded-3xl p-6 shadow-sm">
                  <span className="text-[10px] font-bold tracking-[3px] text-[#059669] uppercase block mb-4 font-poppins">
                    Expected Passes
                  </span>
                  <div className="space-y-3">
                    {preApprovedCodes.map((p) => (
                      <div
                        key={p.code}
                        className="flex justify-between items-center text-xs bg-[#FAF9F6] border border-[#e9e9e9] p-3 rounded-2xl"
                      >
                        <div>
                          <span className="font-bold text-slate-900 block">
                            {p.name}
                          </span>
                          <span className="text-[10px] text-slate-500 block">
                            Flat {p.flat} • Vehicle: {p.vehicle} • {p.purpose}
                          </span>
                        </div>

                        <div className="flex items-center gap-3">
                          <span className="font-mono font-bold text-[#059669] text-sm select-all">
                            {p.code}
                          </span>
                          <span
                            className={`text-[8px] font-bold px-2 py-0.5 rounded border ${
                              p.status === "Checked In"
                                ? "bg-emerald-50 text-emerald-600 border-emerald-100"
                                : "bg-amber-50 text-amber-600 border-amber-100"
                            }`}
                          >
                            {p.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ============================================================== */}
          {/* E. AMENITIES BOOKING CALENDAR */}
          {/* ============================================================== */}
          {activeMenu === "amenities-booking" && (
            <div className="space-y-6 max-w-[1400px] mx-auto text-left animate-fade-in">
              <div className="border-b border-[#e9e9e9] pb-4">
                <h2 className="text-2xl font-bold font-syne text-[#059669]">
                  Shared Amenity Reservations
                </h2>
                <p className="text-neutral-400 text-xs">
                  Verify clubhouse, swimming pool, and sports court booking
                  schedules.
                </p>
              </div>

              <div className="bg-white border border-[#e9e9e9] rounded-3xl p-6 shadow-sm text-center py-20 flex flex-col items-center">
                <Calendar
                  size={48}
                  className="text-[#059669] mb-4 animate-pulse"
                />
                <h3 className="text-xl font-bold text-slate-900 font-poppins">
                  Interactive Booking Calendar
                </h3>
                <p className="text-neutral-500 text-xs max-w-[500px] leading-relaxed mt-2 mb-6">
                  Select available clubhouse slots and check conflicting dates.
                  Fully integrated with payment checkouts.
                </p>

                <button
                  onClick={() =>
                    alert(
                      "Launching dynamic reservation scheduler for flats...",
                    )
                  }
                  className="px-6 py-2.5 bg-[#059669] hover:bg-[#047857] text-white font-bold text-xs uppercase tracking-wider rounded-xl transition cursor-pointer shadow-sm"
                >
                  Create Reservation
                </button>
              </div>
            </div>
          )}

          {/* ============================================================== */}
          {/* F. RESIDENTS MANAGEMENT */}
          {/* ============================================================== */}
          {activeMenu === "residents-mgmt" && (
            <div className="space-y-6 max-w-[1400px] mx-auto text-left animate-fade-in">
              <div className="border-b border-[#e9e9e9] pb-4">
                <h2 className="text-2xl font-bold font-syne text-[#059669]">
                  Cooperative Residents Directory
                </h2>
                <p className="text-neutral-400 text-xs">
                  Register and search verified society flat occupants, tenants,
                  and committee directors.
                </p>
              </div>

              <div className="bg-white border border-[#e9e9e9] rounded-3xl p-6 shadow-sm space-y-6">
                <div className="flex justify-between items-center flex-wrap gap-3 pb-4 border-b border-[#f1f1f1]">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-widest font-poppins">
                    Roster Total: {residentsCount} Verified Members
                  </span>

                  <button
                    onClick={incrementResidents}
                    className="px-4 py-2 bg-[#059669] text-white font-bold text-xs uppercase tracking-wider rounded-xl hover:opacity-90 transition cursor-pointer flex items-center gap-1.5"
                  >
                    <Plus size={14} />
                    <span>Add Resident</span>
                  </button>
                </div>

                <div className="space-y-3.5">
                  {[
                    {
                      name: "Mohit Singh",
                      flat: "B-202",
                      role: "Committee Chairman",
                      email: "mohitsingh@gmail.com",
                    },
                    {
                      name: "Rohan Verma",
                      flat: "B-202",
                      role: "Resident Owner",
                      email: "rohan@gmail.com",
                    },
                    {
                      name: "Amit Saxena",
                      flat: "C-104",
                      role: "Tenant Occupant",
                      email: "amit.saxena@gmail.com",
                    },
                  ].map((res, i) => (
                    <div
                      key={i}
                      className="flex justify-between items-center text-xs bg-[#FAF9F6] border border-[#e9e9e9] p-3.5 rounded-2xl"
                    >
                      <div>
                        <span className="font-bold text-slate-900 block">
                          {res.name}
                        </span>
                        <span className="text-[10px] text-slate-500 block">
                          Flat {res.flat} • {res.email}
                        </span>
                      </div>
                      <span className="text-[9px] font-bold bg-[#FAF9F6] border border-[#e9e9e9] text-[#059669] px-2 py-0.5 rounded font-poppins">
                        {res.role}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ============================================================== */}
          {/* G. BLACKLISTED DATABASE */}
          {/* ============================================================== */}
          {activeMenu === "blacklisted" && (
            <div className="space-y-6 max-w-[1400px] mx-auto text-left animate-fade-in">
              <div className="border-b border-[#e9e9e9] pb-4">
                <h2 className="text-2xl font-bold font-syne text-[#059669]">
                  Global Blacklisted Database
                </h2>
                <p className="text-neutral-400 text-xs">
                  Blocked vendors, suspended helpers, and banned delivery codes
                  flagged globally.
                </p>
              </div>

              <div className="bg-white border border-[#e9e9e9] rounded-3xl p-6 shadow-sm text-center py-20 flex flex-col items-center">
                <AlertOctagon
                  size={48}
                  className="text-red-600 mb-4 animate-bounce"
                />
                <h3 className="text-xl font-bold text-slate-900 font-poppins">
                  Banned Vendor Directory
                </h3>
                <p className="text-neutral-500 text-xs max-w-[500px] leading-relaxed mt-2 mb-6">
                  Guards validate IDs at entry points. Suspended personnel are
                  flagged globally and denied access.
                </p>
                <div className="space-y-3.5 w-full max-w-[500px]">
                  <div className="flex justify-between items-center text-xs bg-red-50 border border-red-200 p-3 rounded-2xl text-red-800 font-semibold pr-4">
                    <span>Rahul Shah (Delivery Agent)</span>
                    <span className="text-[9px] font-bold bg-red-600 text-white px-2 py-0.5 rounded">
                      BANNED
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-xs bg-red-50 border border-red-200 p-3 rounded-2xl text-red-800 font-semibold pr-4">
                    <span>Ramesh Verma (Daily helper)</span>
                    <span className="text-[9px] font-bold bg-red-600 text-white px-2 py-0.5 rounded">
                      SUSPENDED
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ============================================================== */}
          {/* H. SOCIETY INFO (SOCIETY TIER) */}
          {/* ============================================================== */}
          {activeMenu === "society-info" && (
            <div className="space-y-6 max-w-[1400px] mx-auto text-left animate-fade-in">
              <div className="border-b border-[#e9e9e9] pb-4 flex justify-between items-center">
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="text-2xl font-bold font-syne text-[#059669]">Society Information</h2>
                    <span className="text-[9px] font-extrabold uppercase px-2 py-0.5 rounded bg-emerald-50 text-emerald-600 border border-emerald-200 tracking-wider">SOCIETY TIER</span>
                  </div>
                  <p className="text-neutral-400 text-xs">Registry records, infrastructure metrics, and management stats.</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white border border-[#e9e9e9] rounded-3xl p-6 shadow-sm space-y-4">
                  <span className="text-[10px] font-extrabold tracking-[2px] text-[#059669] uppercase block">General Statistics</span>
                  <div className="space-y-2.5 text-xs text-slate-600">
                    <div className="flex justify-between border-b border-[#f1f1f1] pb-2"><span>Total Wings:</span><strong className="text-slate-800">4 Wings (A, B, C, D)</strong></div>
                    <div className="flex justify-between border-b border-[#f1f1f1] pb-2"><span>Total Apartments:</span><strong className="text-slate-800">450 Flats</strong></div>
                    <div className="flex justify-between border-b border-[#f1f1f1] pb-2"><span>Occupancy Rate:</span><strong className="text-slate-800">92% Occupied</strong></div>
                    <div className="flex justify-between"><span>Constructed In:</span><strong className="text-slate-800">2018 (RERA Verified)</strong></div>
                  </div>
                </div>

                <div className="bg-white border border-[#e9e9e9] rounded-3xl p-6 shadow-sm space-y-4">
                  <span className="text-[10px] font-extrabold tracking-[2px] text-[#059669] uppercase block">Utilities Status</span>
                  <div className="space-y-2.5 text-xs text-slate-600">
                    <div className="flex justify-between border-b border-[#f1f1f1] pb-2"><span>Water Source:</span><strong className="text-emerald-600">Municipal + Borewell (Active)</strong></div>
                    <div className="flex justify-between border-b border-[#f1f1f1] pb-2"><span>Power Backup:</span><strong className="text-emerald-600">2x 500kVA Cummins DG</strong></div>
                    <div className="flex justify-between border-b border-[#f1f1f1] pb-2"><span>EV Chargers:</span><strong className="text-slate-800">6 Bays (Visitor Zone)</strong></div>
                    <div className="flex justify-between"><span>Rainwater Harvesting:</span><strong className="text-emerald-600">Active (100% capacity)</strong></div>
                  </div>
                </div>

                <div className="bg-white border border-[#e9e9e9] rounded-3xl p-6 shadow-sm space-y-4">
                  <span className="text-[10px] font-extrabold tracking-[2px] text-[#059669] uppercase block">Gate Security</span>
                  <div className="space-y-2.5 text-xs text-slate-600">
                    <div className="flex justify-between border-b border-[#f1f1f1] pb-2"><span>Active Security Staff:</span><strong className="text-slate-800">12 Guards (3 Shifts)</strong></div>
                    <div className="flex justify-between border-b border-[#f1f1f1] pb-2"><span>CCTV Coverage:</span><strong className="text-slate-800">184 Live HD Cameras</strong></div>
                    <div className="flex justify-between border-b border-[#f1f1f1] pb-2"><span>Emergency Response:</span><strong className="text-[#ef4444] font-bold">100m Siren Interlink</strong></div>
                    <div className="flex justify-between"><span>Automated Boombar:</span><strong className="text-emerald-600">RFID Interfaced</strong></div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ============================================================== */}
          {/* I. SOCIETY PARKING & INCIDENTS (SOCIETY TIER) */}
          {/* ============================================================== */}
          {activeMenu === "parking-management" && (
            <div className="space-y-6 max-w-[1400px] mx-auto text-left animate-fade-in">
              <div className="border-b border-[#e9e9e9] pb-4 flex justify-between items-center">
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="text-2xl font-bold font-syne text-[#059669]">Society Parking Registry</h2>
                    <span className="text-[9px] font-extrabold uppercase px-2 py-0.5 rounded bg-emerald-50 text-emerald-600 border border-emerald-200 tracking-wider">SOCIETY TIER</span>
                  </div>
                  <p className="text-neutral-400 text-xs">Verify allocated slots and track standard resident vehicle logs.</p>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-8 bg-white border border-[#e9e9e9] rounded-3xl p-6 shadow-sm">
                  <span className="text-[10px] font-extrabold tracking-[2px] text-[#059669] uppercase block mb-4">Allocated Resident Vehicles</span>
                  <div className="space-y-3.5">
                    {parkingVehicles.map((v, i) => (
                      <div key={i} className="flex justify-between items-center text-xs bg-[#FAF9F6] border border-[#e9e9e9] p-4 rounded-2xl">
                        <div>
                          <strong className="text-slate-900 block text-sm">{v.vehicle}</strong>
                          <span className="text-slate-500 text-[10px] block mt-0.5">Owner: {v.owner} • Flat: {v.flat} • Type: {v.type}</span>
                        </div>
                        <span className="text-[10px] font-extrabold bg-[#059669]/10 text-[#059669] px-3 py-1 rounded-xl">Slot {v.slot}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-4 bg-white border border-[#e9e9e9] rounded-3xl p-6 shadow-sm space-y-4">
                  <span className="text-[10px] font-extrabold tracking-[2px] text-[#ef4444] uppercase block">Report Parking Incident</span>
                  <form onSubmit={(e) => {
                    e.preventDefault();
                    if (!newIncidentVehicle || !newIncidentSpot) return;
                    const newInc = {
                      id: `inc-${Math.floor(100 + Math.random() * 900)}`,
                      vehicle: newIncidentVehicle,
                      spot: newIncidentSpot,
                      reporter: "Mohit Singh",
                      status: "Guards Dispatched",
                      date: "Just Now",
                      desc: newIncidentDesc || "Vehicle parked incorrectly or blocking another slot."
                    };
                    setParkingIncidents([newInc, ...parkingIncidents]);
                    setNewIncidentVehicle("");
                    setNewIncidentSpot("");
                    setNewIncidentDesc("");
                    alert("Parking violation reported successfully! Guards dispatched to location.");
                  }} className="space-y-4">
                    <div className="flex flex-col">
                      <label className="text-[9px] font-bold text-slate-400 mb-1 uppercase">Offending Vehicle Plate</label>
                      <input type="text" required placeholder="e.g. MH-02-ZZ-8899" value={newIncidentVehicle} onChange={(e)=>setNewIncidentVehicle(e.target.value)} className="bg-[#FAF9F6] border border-[#e9e9e9] rounded-xl px-4 py-2 text-xs focus:outline-none" />
                    </div>
                    <div className="flex flex-col">
                      <label className="text-[9px] font-bold text-slate-400 mb-1 uppercase">Parking Spot Affected</label>
                      <input type="text" required placeholder="e.g. Slot C-12" value={newIncidentSpot} onChange={(e)=>setNewIncidentSpot(e.target.value)} className="bg-[#FAF9F6] border border-[#e9e9e9] rounded-xl px-4 py-2 text-xs focus:outline-none" />
                    </div>
                    <div className="flex flex-col">
                      <label className="text-[9px] font-bold text-slate-400 mb-1 uppercase">Quick details</label>
                      <textarea placeholder="e.g. Blocking my exit..." value={newIncidentDesc} onChange={(e)=>setNewIncidentDesc(e.target.value)} className="bg-[#FAF9F6] border border-[#e9e9e9] rounded-xl px-4 py-2 text-xs focus:outline-none" rows="2"></textarea>
                    </div>
                    <button type="submit" className="w-full bg-[#ef4444] text-white py-2 rounded-xl text-xs font-bold uppercase transition hover:bg-red-600">Dispatch Guard Alarm</button>
                  </form>
                </div>
              </div>
            </div>
          )}

          {/* ============================================================== */}
          {/* J. PARKING INCIDENTS MONITOR (SOCIETY TIER) */}
          {/* ============================================================== */}
          {activeMenu === "parking-incidents" && (
            <div className="space-y-6 max-w-[1400px] mx-auto text-left animate-fade-in">
              <div className="border-b border-[#e9e9e9] pb-4 flex justify-between items-center">
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="text-2xl font-bold font-syne text-[#059669]">Parking Incidents Console</h2>
                    <span className="text-[9px] font-extrabold uppercase px-2 py-0.5 rounded bg-emerald-50 text-emerald-600 border border-emerald-200 tracking-wider">SOCIETY TIER</span>
                  </div>
                  <p className="text-neutral-400 text-xs">Verify unresolved vehicle blockages and wrong-parking reports.</p>
                </div>
              </div>

              <div className="bg-white border border-[#e9e9e9] rounded-3xl p-6 shadow-sm">
                <span className="text-[10px] font-extrabold tracking-[2px] text-[#059669] uppercase block mb-4">Active Incidents Log</span>
                <div className="space-y-4">
                  {parkingIncidents.length === 0 ? (
                    <div className="text-center py-10 text-slate-400 font-semibold text-xs">No active violations reported. Well done Windsor Castle!</div>
                  ) : (
                    parkingIncidents.map((inc) => (
                      <div key={inc.id} className="border border-red-100 rounded-2xl p-5 bg-red-50/10 flex justify-between items-center flex-wrap gap-4 text-left">
                        <div className="space-y-2">
                          <div className="flex items-center gap-2.5">
                            <span className="text-sm font-extrabold text-slate-900 font-poppins">{inc.vehicle}</span>
                            <span className="bg-red-100 text-red-600 border border-red-200 px-2 py-0.5 text-[9px] font-bold rounded uppercase tracking-wider">{inc.status}</span>
                          </div>
                          <p className="text-xs text-slate-600 italic">"{inc.desc}"</p>
                          <span className="text-[10px] text-slate-400 block">Reported at Spot: <strong className="text-slate-800">{inc.spot}</strong> • By {inc.reporter} • {inc.date}</span>
                        </div>

                        <button onClick={()=>{
                          setParkingIncidents(parkingIncidents.filter(i=>i.id !== inc.id));
                          alert("Violation resolved. Guards cleared the vehicle from slot.");
                        }} className="px-3.5 py-1.5 bg-white border border-[#e9e9e9] hover:bg-[#FAF9F6] text-emerald-600 font-bold rounded-xl text-xs uppercase cursor-pointer">Mark Resolved</button>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>
          )}

          {/* ============================================================== */}
          {/* K. DELIVERIES LOG (SOCIETY TIER) */}
          {/* ============================================================== */}
          {activeMenu === "deliveries" && (
            <div className="space-y-6 max-w-[1400px] mx-auto text-left animate-fade-in">
              <div className="border-b border-[#e9e9e9] pb-4 flex justify-between items-center">
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="text-2xl font-bold font-syne text-[#059669]">Delivery Hub Dispatch</h2>
                    <span className="text-[9px] font-extrabold uppercase px-2 py-0.5 rounded bg-emerald-50 text-emerald-600 border border-emerald-200 tracking-wider">SOCIETY TIER</span>
                  </div>
                  <p className="text-neutral-400 text-xs">Verify packets, courier agents, and handovers at the main gate.</p>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-8 bg-white border border-[#e9e9e9] rounded-3xl p-6 shadow-sm">
                  <span className="text-[10px] font-extrabold tracking-[2px] text-[#059669] uppercase block mb-4 font-poppins">Gate Packet Registries</span>
                  <div className="space-y-3">
                    {deliveries.map((del) => (
                      <div key={del.id} className="flex justify-between items-center bg-[#FAF9F6] border border-[#e9e9e9] p-4 rounded-2xl text-xs">
                        <div>
                          <strong className="text-slate-900 block text-sm">{del.company} Courier</strong>
                          <span className="text-slate-500 text-[10px] block mt-0.5">Packet ID: {del.packetCode} • Destination Flat: {del.flat} • Time: {del.time}</span>
                        </div>

                        <div className="flex items-center gap-2.5">
                          <span className={`px-2 py-0.5 rounded text-[9px] font-extrabold uppercase tracking-wide border ${
                            del.status === "Delivered" ? "bg-emerald-50 text-emerald-600 border-emerald-200" : "bg-blue-50 text-blue-600 border-blue-200"
                          }`}>{del.status}</span>
                          {del.status !== "Delivered" && (
                            <button onClick={()=>{
                              setDeliveries(deliveries.map(d=>d.id === del.id ? {...d, status: "Delivered"}: d));
                              alert("Resident has accepted and signed for the package.");
                            }} className="px-2.5 py-1 bg-white hover:bg-neutral-50 text-slate-800 font-bold border border-[#e9e9e9] rounded-lg">Deliver</button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-4 bg-white border border-[#e9e9e9] rounded-3xl p-6 shadow-sm">
                  <span className="text-[10px] font-extrabold tracking-[2px] text-[#059669] uppercase block mb-4">Register Incoming Packet</span>
                  <form onSubmit={(e)=>{
                    e.preventDefault();
                    const comp = e.target.comp.value;
                    const code = e.target.code.value;
                    const flat = e.target.flat.value;
                    if(!comp || !code) return;
                    setDeliveries([{
                      id: `del-${Math.floor(100+Math.random()*900)}`,
                      company: comp,
                      packetCode: code,
                      flat: flat,
                      status: "At Gate",
                      time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
                    }, ...deliveries]);
                    e.target.reset();
                    alert("Packet registered at gate. Delivery notice pinged to flat.");
                  }} className="space-y-4">
                    <div className="flex flex-col">
                      <label className="text-[9px] font-bold text-slate-400 mb-1 uppercase">Courier Company</label>
                      <input type="text" name="comp" required placeholder="e.g. Amazon, BlueDart, DTDC" className="bg-[#FAF9F6] border border-[#e9e9e9] rounded-xl px-4 py-2 text-xs focus:outline-none" />
                    </div>
                    <div className="flex flex-col">
                      <label className="text-[9px] font-bold text-slate-400 mb-1 uppercase">Tracking / Packet Code</label>
                      <input type="text" name="code" required placeholder="e.g. AMZ-8820" className="bg-[#FAF9F6] border border-[#e9e9e9] rounded-xl px-4 py-2 text-xs focus:outline-none" />
                    </div>
                    <div className="flex flex-col">
                      <label className="text-[9px] font-bold text-slate-400 mb-1 uppercase">Delivery Flat</label>
                      <input type="text" name="flat" defaultValue="B-202" className="bg-[#FAF9F6] border border-[#e9e9e9] rounded-xl px-4 py-2 text-xs focus:outline-none" />
                    </div>
                    <button type="submit" className="w-full bg-[#059669] text-white py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition hover:opacity-90">Verify Packet</button>
                  </form>
                </div>
              </div>
            </div>
          )}

          {/* ============================================================== */}
          {/* L. NOTICE BOARD BROADCASTS (SOCIETY TIER) */}
          {/* ============================================================== */}
          {activeMenu === "notices" && (
            <div className="space-y-6 max-w-[1400px] mx-auto text-left animate-fade-in">
              <div className="border-b border-[#e9e9e9] pb-4 flex justify-between items-center">
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="text-2xl font-bold font-syne text-[#059669]">Society Notice Circulars</h2>
                    <span className="text-[9px] font-extrabold uppercase px-2 py-0.5 rounded bg-emerald-50 text-emerald-600 border border-emerald-200 tracking-wider">SOCIETY TIER</span>
                  </div>
                  <p className="text-neutral-400 text-xs">Publish official announcements and rules to Windsor Castle residents.</p>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-8 space-y-4">
                  {notices.map((not) => (
                    <div key={not.id} className="bg-white border border-[#e9e9e9] rounded-3xl p-6 shadow-sm space-y-3 hover:border-[#059669]/40 transition text-left">
                      <div className="flex justify-between items-center flex-wrap gap-2">
                        <span className="text-sm font-extrabold text-slate-900 font-poppins block">{not.title}</span>
                        <div className="flex items-center gap-1.5">
                          <span className={`text-[8px] font-bold px-2 py-0.5 rounded uppercase ${
                            not.importance === "High" ? "bg-red-50 text-red-600 border border-red-100" : "bg-slate-100 text-slate-600 border border-slate-200"
                          }`}>{not.importance} Priority</span>
                          <span className="text-[8px] font-bold bg-[#FAF9F6] border border-[#e9e9e9] text-[#059669] px-2 py-0.5 rounded uppercase">{not.category}</span>
                        </div>
                      </div>
                      <p className="text-xs text-slate-500 leading-relaxed font-normal">{not.desc}</p>
                      <div className="text-[10px] text-slate-400 border-t border-[#f1f1f1] pt-3 flex justify-between font-semibold">
                        <span>Windsor Castle Admin Desk</span>
                        <span>{not.date}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="lg:col-span-4 bg-white border border-[#e9e9e9] rounded-3xl p-6 shadow-sm">
                  <span className="text-[10px] font-extrabold tracking-[2px] text-[#059669] uppercase block mb-4">Post Official notice</span>
                  <form onSubmit={(e)=>{
                    e.preventDefault();
                    if(!newNoticeTitle || !newNoticeDesc) return;
                    setNotices([{
                      id: `not-${Math.floor(100+Math.random()*900)}`,
                      title: newNoticeTitle,
                      desc: newNoticeDesc,
                      importance: newNoticeImportance,
                      category: newNoticeCategory,
                      date: new Date().toLocaleDateString('en-US', {month: 'short', day: 'numeric', year: 'numeric'})
                    }, ...notices]);
                    setNewNoticeTitle("");
                    setNewNoticeDesc("");
                    alert("Official Notice posted and broadcasted to all residents' app feeds successfully!");
                  }} className="space-y-4">
                    <div className="flex flex-col">
                      <label className="text-[9px] font-bold text-slate-400 mb-1 uppercase">Notice Title</label>
                      <input type="text" required placeholder="e.g. Independence Day celebrations" value={newNoticeTitle} onChange={(e)=>setNewNoticeTitle(e.target.value)} className="bg-[#FAF9F6] border border-[#e9e9e9] rounded-xl px-4 py-2.5 text-xs focus:outline-none" />
                    </div>
                    <div className="flex gap-2">
                      <div className="flex flex-col w-1/2">
                        <label className="text-[9px] font-bold text-slate-400 mb-1 uppercase">Importance</label>
                        <select value={newNoticeImportance} onChange={(e)=>setNewNoticeImportance(e.target.value)} className="bg-[#FAF9F6] border border-[#e9e9e9] rounded-xl px-4 py-2 text-xs focus:outline-none">
                          <option value="High">High</option>
                          <option value="Medium">Medium</option>
                          <option value="Low">Low</option>
                        </select>
                      </div>
                      <div className="flex flex-col w-1/2">
                        <label className="text-[9px] font-bold text-slate-400 mb-1 uppercase">Category</label>
                        <select value={newNoticeCategory} onChange={(e)=>setNewNoticeCategory(e.target.value)} className="bg-[#FAF9F6] border border-[#e9e9e9] rounded-xl px-4 py-2 text-xs focus:outline-none">
                          <option value="General">General</option>
                          <option value="Maintenance">Maintenance</option>
                          <option value="Security">Security</option>
                        </select>
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <label className="text-[9px] font-bold text-slate-400 mb-1 uppercase">Circular details</label>
                      <textarea required placeholder="Notice body details..." value={newNoticeDesc} onChange={(e)=>newNoticeDesc(e.target.value)} className="bg-[#FAF9F6] border border-[#e9e9e9] rounded-xl px-4 py-2.5 text-xs focus:outline-none" rows="4"></textarea>
                    </div>
                    <button type="submit" className="w-full bg-[#059669] text-white py-2.5 rounded-xl text-xs font-bold uppercase transition hover:opacity-90">Post & Ping Residents</button>
                  </form>
                </div>
              </div>
            </div>
          )}

          {/* ============================================================== */}
          {/* M. COMPLAINTS GENERAL VIEW (SOCIETY TIER) */}
          {/* ============================================================== */}
          {activeMenu === "complaints" && (
            <div className="space-y-6 max-w-[1400px] mx-auto text-left animate-fade-in">
              <div className="border-b border-[#e9e9e9] pb-4 flex justify-between items-center">
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="text-2xl font-bold font-syne text-[#059669]">Complaints Desk Registry</h2>
                    <span className="text-[9px] font-extrabold uppercase px-2 py-0.5 rounded bg-emerald-50 text-emerald-600 border border-emerald-200 tracking-wider">SOCIETY TIER</span>
                  </div>
                  <p className="text-neutral-400 text-xs">Verify residents' registered technical issues and track resolution timelines.</p>
                </div>
              </div>

              <div className="bg-white border border-[#e9e9e9] rounded-3xl p-6 shadow-sm space-y-4">
                <span className="text-[10px] font-extrabold tracking-[2px] text-[#059669] uppercase block font-poppins">All Registered Complaints</span>
                <div className="space-y-4">
                  {complaints.map((c) => (
                    <div key={c.id} className="border border-[#e9e9e9]/80 rounded-2xl p-5 bg-[#FAF9F6]/20 hover:border-[#059669]/40 transition text-left flex justify-between items-center gap-4 flex-wrap">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <strong className="text-slate-950 font-poppins text-sm block">{c.title}</strong>
                          <span className={`text-[8px] font-extrabold border px-2 py-0.2 rounded uppercase ${
                            c.status === "OPEN" ? "bg-blue-50 text-blue-600 border-blue-200" : "bg-emerald-50 text-emerald-600 border-emerald-200"
                          }`}>{c.status}</span>
                        </div>
                        <p className="text-slate-500 text-xs italic">"{c.desc}"</p>
                        <span className="text-[10px] text-slate-400 block pt-1 font-semibold">LODGED BY: {c.residentName} • Flat {c.flat} • Category: {c.category} • {c.date}</span>
                      </div>

                      {c.status !== "RESOLVED" && (
                        <button onClick={()=>{
                          setComplaints(complaints.map(item => item.id === c.id ? {...item, status: "RESOLVED"}: item));
                          alert("Ticket marked as RESOLVED. Resident has been notified.");
                        }} className="px-3.5 py-1.5 bg-[#059669] text-white font-bold rounded-xl text-xs uppercase cursor-pointer transition hover:bg-[#047857]">Close Ticket</button>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ============================================================== */}
          {/* N. REPORT ISSUES PORTAL (SOCIETY TIER) */}
          {/* ============================================================== */}
          {activeMenu === "report-issues" && (
            <div className="space-y-6 max-w-[1400px] mx-auto text-left animate-fade-in">
              <div className="border-b border-[#e9e9e9] pb-4 flex justify-between items-center">
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="text-2xl font-bold font-syne text-[#059669]">Infrastructure Hazard Reporter</h2>
                    <span className="text-[9px] font-extrabold uppercase px-2 py-0.5 rounded bg-emerald-50 text-emerald-600 border border-emerald-200 tracking-wider">SOCIETY TIER</span>
                  </div>
                  <p className="text-neutral-400 text-xs">Direct reporting lines for water waste, lift faults, and security hazards.</p>
                </div>
              </div>

              <div className="bg-white border border-[#e9e9e9] rounded-3xl p-8 shadow-sm flex flex-col justify-center items-center text-center py-16">
                <AlertOctagon size={48} className="text-[#059669] mb-4 animate-bounce" />
                <h3 className="text-xl font-bold text-slate-900 font-poppins">Emergency Hazard Reporter</h3>
                <p className="text-neutral-500 text-xs max-w-[500px] leading-relaxed mt-2 mb-6">
                  Spotted a water leakage in basement? Corridor blockages? Use this prompt portal. Reports bypass typical ticketing lines and immediately alert the on-duty engineer or guards.
                </p>

                <div className="flex gap-4">
                  <button onClick={()=>{
                    alert("EMERGENCY FAULT ALARM TRIGGED: Maintenance technicians notified to inspect elevator lifts.");
                  }} className="px-5 py-2.5 bg-[#ef4444] text-white font-bold text-xs uppercase tracking-wider rounded-xl transition cursor-pointer hover:bg-red-600 shadow-sm">Report Lift Malfault</button>
                  <button onClick={()=>{
                    alert("EMERGENCY PLUMBING PIN: Water valve leak reported. Basement repair team dispatched.");
                  }} className="px-5 py-2.5 bg-amber-500 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition cursor-pointer hover:bg-amber-600 shadow-sm">Report Basement Leakage</button>
                </div>
              </div>
            </div>
          )}

          {/* ============================================================== */}
          {/* O. MANAGEMENT COMMITTEE (SOCIETY TIER) */}
          {/* ============================================================== */}
          {activeMenu === "committee-oversight" && (
            <div className="space-y-6 max-w-[1400px] mx-auto text-left animate-fade-in">
              <div className="border-b border-[#e9e9e9] pb-4 flex justify-between items-center">
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="text-2xl font-bold font-syne text-[#059669]">Management Board Committee</h2>
                    <span className="text-[9px] font-extrabold uppercase px-2 py-0.5 rounded bg-emerald-50 text-emerald-600 border border-emerald-200 tracking-wider">SOCIETY TIER</span>
                  </div>
                  <p className="text-neutral-400 text-xs">Verify executive directors, board designations, and official contact sheets.</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { name: "Mohit Singh", designation: "President & Chairman", flat: "B-202", contact: "+91 99881 22345", responsibilities: "Overall Operations, Finance Signatory" },
                  { name: "Srinivas Rao", designation: "General Secretary", flat: "A-504", contact: "+91 98450 91823", responsibilities: "Registries, Regulatory Compliance, Vendor Contracts" },
                  { name: "Neha Deshmukh", designation: "Treasurer", flat: "C-102", contact: "+91 91234 56789", responsibilities: "Audit Logs, Maintenance Billing, Taxes & Bank Ledger" },
                ].map((com, idx) => (
                  <div key={idx} className="bg-white border border-[#e9e9e9] rounded-3xl p-6 shadow-sm text-left flex flex-col justify-between hover:border-[#059669]/40 transition">
                    <div className="space-y-3">
                      <div className="w-12 h-12 rounded-2xl bg-[#059669]/10 text-[#059669] flex items-center justify-center font-black text-lg shadow-inner">
                        {com.name[0]}
                      </div>
                      <div>
                        <strong className="text-slate-900 block text-base font-poppins">{com.name}</strong>
                        <span className="text-[#059669] font-bold text-xs uppercase tracking-wider block mt-0.5">{com.designation}</span>
                        <span className="text-neutral-400 text-[10px] block mt-0.5">Flat: {com.flat} • Contact: {com.contact}</span>
                      </div>
                      <p className="text-slate-500 text-xs font-normal border-t border-[#f1f1f1] pt-2 mt-2 leading-relaxed">Scope: "{com.responsibilities}"</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ============================================================== */}
          {/* P. STAFF ATTENDANCE CHECK-IN (SOCIETY TIER) */}
          {/* ============================================================== */}
          {activeMenu === "staff-attendance" && (
            <div className="space-y-6 max-w-[1400px] mx-auto text-left animate-fade-in">
              <div className="border-b border-[#e9e9e9] pb-4 flex justify-between items-center">
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="text-2xl font-bold font-syne text-[#059669]">Guard & Staff Attendance Registry</h2>
                    <span className="text-[9px] font-extrabold uppercase px-2 py-0.5 rounded bg-emerald-50 text-emerald-600 border border-emerald-200 tracking-wider">SOCIETY TIER</span>
                  </div>
                  <p className="text-neutral-400 text-xs">Verify shifts, active guard check-ins, and biometric rosters.</p>
                </div>
              </div>

              <div className="bg-white border border-[#e9e9e9] rounded-3xl p-6 shadow-sm space-y-4">
                <span className="text-[10px] font-extrabold tracking-[2px] text-[#059669] uppercase block font-poppins">On-Duty Security Staff Shift Log</span>
                <div className="space-y-3.5">
                  {[
                    { name: "Gupta Singh", shift: "Morning Shift (6 AM - 2 PM)", status: "Active Checked In", time: "05:55 AM" },
                    { name: "Karan Bahadur", shift: "Morning Shift (6 AM - 2 PM)", status: "Active Checked In", time: "05:58 AM" },
                    { name: "Ramesh Thapa", shift: "Evening Shift (2 PM - 10 PM)", status: "Pending Shift", time: "N/A" }
                  ].map((staff, idx) => (
                    <div key={idx} className="flex justify-between items-center text-xs bg-[#FAF9F6] border border-[#e9e9e9] p-4 rounded-2xl text-left">
                      <div>
                        <strong className="text-slate-900 block font-poppins text-sm">{staff.name}</strong>
                        <span className="text-slate-500 text-[10px] block mt-0.5">Shift Duty: {staff.shift}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-slate-500 text-[10px]">Punch Time: {staff.time}</span>
                        <span className={`text-[8px] font-bold px-2 py-0.5 rounded uppercase ${
                          staff.status.includes("Active") ? "bg-emerald-50 text-emerald-600 border border-emerald-100" : "bg-slate-100 text-slate-500 border border-slate-200"
                        }`}>{staff.status}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ============================================================== */}
          {/* Q. DAILY DOMESTIC HELPMATES (SOCIETY TIER) */}
          {/* ============================================================== */}
          {activeMenu === "daily-help" && (
            <div className="space-y-6 max-w-[1400px] mx-auto text-left animate-fade-in">
              <div className="border-b border-[#e9e9e9] pb-4 flex justify-between items-center">
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="text-2xl font-bold font-syne text-[#059669]">Domestic Daily-Helper Directory</h2>
                    <span className="text-[9px] font-extrabold uppercase px-2 py-0.5 rounded bg-emerald-50 text-emerald-600 border border-emerald-200 tracking-wider">SOCIETY TIER</span>
                  </div>
                  <p className="text-neutral-400 text-xs">Registry logs of verified maids, cooks, and drivers checked in today.</p>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-8 bg-white border border-[#e9e9e9] rounded-3xl p-6 shadow-sm">
                  <span className="text-[10px] font-extrabold tracking-[2px] text-[#059669] uppercase block mb-4 font-poppins">Domestic Helper Listings</span>
                  <div className="space-y-3.5">
                    {dailyHelp.map((dh) => (
                      <div key={dh.id} className="flex justify-between items-center text-xs bg-[#FAF9F6] border border-[#e9e9e9] p-4 rounded-2xl text-left">
                        <div>
                          <strong className="text-slate-900 block text-sm">{dh.name}</strong>
                          <span className="text-slate-500 text-[10px] block mt-0.5">Role Scope: {dh.role} • Registered flats: {dh.flatCount} • Rating: ⭐ {dh.rating}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-slate-400 text-[10px]">Today Check-in:</span>
                          <span className={`px-2.5 py-0.5 rounded border text-[9px] font-extrabold uppercase ${
                            dh.checkedIn.includes("Yes") ? "bg-emerald-50 text-emerald-600 border-emerald-200" : "bg-slate-100 text-slate-500 border-slate-200"
                          }`}>{dh.checkedIn}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-4 bg-white border border-[#e9e9e9] rounded-3xl p-6 shadow-sm">
                  <span className="text-[10px] font-extrabold tracking-[2px] text-[#059669] uppercase block mb-4">Register New Helper</span>
                  <form onSubmit={(e)=>{
                    e.preventDefault();
                    const name = e.target.hname.value;
                    const role = e.target.hrole.value;
                    if(!name) return;
                    setDailyHelp([{
                      id: `dh-${Math.floor(100+Math.random()*900)}`,
                      name: name,
                      role: role,
                      flatCount: 1,
                      rating: "5.0",
                      checkedIn: "Yes, Just Now"
                    }, ...dailyHelp]);
                    e.target.reset();
                    alert("Helper registered and access card ID issued.");
                  }} className="space-y-4">
                    <div className="flex flex-col">
                      <label className="text-[9px] font-bold text-slate-400 mb-1 uppercase">Full Name</label>
                      <input type="text" name="hname" required placeholder="e.g. Ramesh Singh" className="bg-[#FAF9F6] border border-[#e9e9e9] rounded-xl px-4 py-2 text-xs focus:outline-none" />
                    </div>
                    <div className="flex flex-col">
                      <label className="text-[9px] font-bold text-slate-400 mb-1 uppercase">Role Category Scope</label>
                      <select name="hrole" className="bg-[#FAF9F6] border border-[#e9e9e9] rounded-xl px-4 py-2 text-xs focus:outline-none">
                        <option value="Maid / Cooking">Maid / Cooking</option>
                        <option value="Driver">Driver / Chauffeur</option>
                        <option value="Baby Sitter">Baby Sitter / Nanny</option>
                      </select>
                    </div>
                    <button type="submit" className="w-full bg-[#059669] text-white py-2 rounded-xl text-xs font-bold uppercase transition hover:opacity-95">Biometric Register</button>
                  </form>
                </div>
              </div>
            </div>
          )}

          {/* ============================================================== */}
          {/* R. PRODUCT MARKETPLACE (ENTERPRISE TIER) */}
          {/* ============================================================== */}
          {activeMenu === "product-market" && (
            <div className="space-y-6 max-w-[1400px] mx-auto text-left animate-fade-in">
              <div className="border-b border-[#e9e9e9] pb-4 flex justify-between items-center">
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="text-2xl font-bold font-syne text-[#4f46e5]">Product Marketplace</h2>
                    <span className="text-[9px] font-extrabold uppercase px-2 py-0.5 rounded bg-purple-50 text-indigo-600 border border-indigo-200 tracking-wider shadow-inner">👑 ENTERPRISE TIER</span>
                  </div>
                  <p className="text-neutral-400 text-xs">Buy and sell pre-loved goods locally with fellow Windsor Castle residents.</p>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {marketplaceListings.map((prod) => (
                    <div key={prod.id} className="bg-white border border-[#e9e9e9] rounded-3xl p-5 shadow-sm hover:border-[#4f46e5]/40 transition text-left flex flex-col justify-between space-y-4">
                      <div>
                        <div className="flex justify-between items-start">
                          <span className="text-xs font-bold bg-[#faf8f3] text-indigo-600 border border-indigo-100 px-2.5 py-0.5 rounded-lg">{prod.category}</span>
                          <span className="text-sm font-extrabold text-indigo-700">₹{prod.price}</span>
                        </div>
                        <h4 className="text-base font-extrabold text-slate-900 font-poppins mt-2">{prod.title}</h4>
                        <p className="text-xs text-slate-500 mt-1 leading-relaxed">{prod.desc}</p>
                      </div>

                      <div className="border-t border-[#f1f1f1] pt-3.5 flex justify-between items-center text-[10px] text-slate-400 font-semibold">
                        <div>
                          <span className="block text-slate-600">Seller: {prod.seller} ({prod.flat})</span>
                          <span className="block mt-0.5 text-indigo-500 font-mono select-all">📞 {prod.contact}</span>
                        </div>
                        <button onClick={()=>{
                          alert(`Contacting seller ${prod.seller} at Flat ${prod.flat} for item "${prod.title}". Connecting on secure interlink call.`);
                        }} className="px-3 py-1.5 bg-[#4f46e5] text-white font-bold rounded-xl hover:opacity-90 transition shadow-sm">Contact</button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="lg:col-span-4 bg-white border border-[#e9e9e9] rounded-3xl p-6 shadow-sm">
                  <span className="text-[10px] font-extrabold tracking-[2px] text-[#4f46e5] uppercase block mb-4">Add For Sale Listing</span>
                  <form onSubmit={(e)=>{
                    e.preventDefault();
                    if(!newMarketplaceTitle || !newMarketplacePrice) return;
                    setMarketplaceListings([{
                      id: Date.now(),
                      title: newMarketplaceTitle,
                      price: parseInt(newMarketplacePrice),
                      flat: "B-202",
                      desc: newMarketplaceDesc || "Pre-loved item in excellent condition.",
                      category: newMarketplaceCat,
                      seller: "Mohit Singh",
                      contact: "+91 91234 56789"
                    }, ...marketplaceListings]);
                    setNewMarketplaceTitle("");
                    setNewMarketplacePrice("");
                    setNewMarketplaceDesc("");
                    alert("Pre-loved listing successfully broadcasted to society marketplace!");
                  }} className="space-y-4">
                    <div className="flex flex-col">
                      <label className="text-[9px] font-bold text-slate-400 mb-1 uppercase">Item Title</label>
                      <input type="text" required placeholder="e.g. Mountain Bike 24-Speed" value={newMarketplaceTitle} onChange={(e)=>setNewMarketplaceTitle(e.target.value)} className="bg-[#FAF9F6] border border-[#e9e9e9] rounded-xl px-4 py-2 text-xs focus:outline-none" />
                    </div>
                    <div className="flex gap-2">
                      <div className="flex flex-col w-1/2">
                        <label className="text-[9px] font-bold text-slate-400 mb-1 uppercase">Price (INR)</label>
                        <input type="number" required placeholder="e.g. 3500" value={newMarketplacePrice} onChange={(e)=>setNewMarketplacePrice(e.target.value)} className="bg-[#FAF9F6] border border-[#e9e9e9] rounded-xl px-4 py-2 text-xs focus:outline-none" />
                      </div>
                      <div className="flex flex-col w-1/2">
                        <label className="text-[9px] font-bold text-slate-400 mb-1 uppercase">Category</label>
                        <select value={newMarketplaceCat} onChange={(e)=>setNewMarketplaceCat(e.target.value)} className="bg-[#FAF9F6] border border-[#e9e9e9] rounded-xl px-4 py-2 text-xs focus:outline-none">
                          <option value="Furniture">Furniture</option>
                          <option value="Appliances">Appliances</option>
                          <option value="Electronics">Electronics</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <label className="text-[9px] font-bold text-slate-400 mb-1 uppercase">Description</label>
                      <textarea required placeholder="Mention purchase year, condition..." value={newMarketplaceDesc} onChange={(e)=>setNewMarketplaceDesc(e.target.value)} className="bg-[#FAF9F6] border border-[#e9e9e9] rounded-xl px-4 py-2.5 text-xs focus:outline-none" rows="3"></textarea>
                    </div>
                    <button type="submit" className="w-full bg-[#4f46e5] text-white py-2.5 rounded-xl text-xs font-bold uppercase transition hover:opacity-90 shadow-sm">Post Sale Notice</button>
                  </form>
                </div>
              </div>
            </div>
          )}

          {/* ============================================================== */}
          {/* S. REAL ESTATE BOARD (ENTERPRISE TIER) */}
          {/* ============================================================== */}
          {activeMenu === "real-estate" && (
            <div className="space-y-6 max-w-[1400px] mx-auto text-left animate-fade-in">
              <div className="border-b border-[#e9e9e9] pb-4 flex justify-between items-center">
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="text-2xl font-bold font-syne text-[#4f46e5]">Real Estate & Properties Board</h2>
                    <span className="text-[9px] font-extrabold uppercase px-2 py-0.5 rounded bg-purple-50 text-indigo-600 border border-indigo-200 tracking-wider shadow-inner">👑 ENTERPRISE TIER</span>
                  </div>
                  <p className="text-neutral-400 text-xs">Verify verified brokerages, flat listings for rent, sale or lease.</p>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-8 space-y-4">
                  {properties.map((prop) => (
                    <div key={prop.id} className="bg-white border border-[#e9e9e9] rounded-3xl p-6 shadow-sm hover:border-[#4f46e5]/40 transition text-left flex justify-between items-stretch gap-6 flex-wrap">
                      <div className="flex-1 space-y-2.5">
                        <div className="flex items-center gap-2">
                          <span className={`text-[8px] font-bold px-2 py-0.5 rounded uppercase border ${
                            prop.type === "Rent" ? "bg-emerald-50 text-emerald-600 border-emerald-100" : "bg-blue-50 text-blue-600 border-blue-100"
                          }`}>{prop.type}</span>
                          <span className="text-slate-400 text-[10px]">Flat {prop.flat} • {prop.size}</span>
                        </div>
                        <h4 className="text-base font-extrabold text-slate-900 font-poppins">{prop.title}</h4>
                        <p className="text-xs text-slate-500 font-normal leading-relaxed">{prop.desc}</p>
                        <div className="text-[10px] text-slate-400 pt-1 font-semibold">Allocated Parking: {prop.parking} • Posted by secure agent: {prop.agent}</div>
                      </div>

                      <div className="flex flex-col justify-between items-end shrink-0 border-l border-[#f1f1f1] pl-6 text-right">
                        <div>
                          <span className="text-[9px] text-slate-400 uppercase font-bold block">Asking Rate</span>
                          <span className="text-lg font-black text-indigo-600 leading-none">{prop.price}</span>
                        </div>
                        <button onClick={()=>{
                          alert(`Assigning verified property coordinator for apartment ${prop.flat}. Representative ${prop.agent} will call you back.`);
                        }} className="px-4 py-2 bg-[#4f46e5] text-white font-bold rounded-xl text-xs uppercase hover:opacity-90 transition shadow-sm mt-4">Schedule Visit</button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="lg:col-span-4 bg-white border border-[#e9e9e9] rounded-3xl p-6 shadow-sm">
                  <span className="text-[10px] font-extrabold tracking-[2px] text-[#4f46e5] uppercase block mb-4">Post Property Listing</span>
                  <form onSubmit={(e)=>{
                    e.preventDefault();
                    if(!newPropTitle || !newPropPrice) return;
                    setProperties([{
                      id: `prop-${Date.now()}`,
                      title: newPropTitle,
                      price: newPropPrice,
                      flat: "B-202",
                      type: newPropType,
                      size: newPropSize || "1400 Sq.Ft.",
                      parking: "1 Reserved Space",
                      agent: "Mohit Singh (Owner)",
                      contact: "+91 91234 56789",
                      desc: newPropDesc || "Luxury modular setup, excellent society ventilation."
                    }, ...properties]);
                    setNewPropTitle("");
                    setNewPropPrice("");
                    setNewPropSize("");
                    setNewPropDesc("");
                    alert("Real estate listing posted! Visible under society broker registry.");
                  }} className="space-y-4">
                    <div className="flex flex-col">
                      <label className="text-[9px] font-bold text-slate-400 mb-1 uppercase">Listing Title</label>
                      <input type="text" required placeholder="e.g. Spacious 3 BHK Modular Flat" value={newPropTitle} onChange={(e)=>setNewPropTitle(e.target.value)} className="bg-[#FAF9F6] border border-[#e9e9e9] rounded-xl px-4 py-2 text-xs focus:outline-none" />
                    </div>
                    <div className="flex gap-2">
                      <div className="flex flex-col w-1/2">
                        <label className="text-[9px] font-bold text-slate-400 mb-1 uppercase">Deal Type</label>
                        <select value={newPropType} onChange={(e)=>setNewPropType(e.target.value)} className="bg-[#FAF9F6] border border-[#e9e9e9] rounded-xl px-4 py-2 text-xs focus:outline-none">
                          <option value="Rent">Rent</option>
                          <option value="Sale">Sale</option>
                        </select>
                      </div>
                      <div className="flex flex-col w-1/2">
                        <label className="text-[9px] font-bold text-slate-400 mb-1 uppercase">Sq. Feet</label>
                        <input type="text" placeholder="e.g. 1500 Sq.Ft." value={newPropSize} onChange={(e)=>setNewPropSize(e.target.value)} className="bg-[#FAF9F6] border border-[#e9e9e9] rounded-xl px-4 py-2 text-xs focus:outline-none" />
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <label className="text-[9px] font-bold text-slate-400 mb-1 uppercase">Price Details</label>
                      <input type="text" required placeholder="e.g. ₹60,000 / Month or ₹1.5 Cr" value={newPropPrice} onChange={(e)=>setNewPropPrice(e.target.value)} className="bg-[#FAF9F6] border border-[#e9e9e9] rounded-xl px-4 py-2 text-xs focus:outline-none" />
                    </div>
                    <div className="flex flex-col">
                      <label className="text-[9px] font-bold text-slate-400 mb-1 uppercase">Listing Details</label>
                      <textarea required placeholder="Mention floor number, direction..." value={newPropDesc} onChange={(e)=>setNewPropDesc(e.target.value)} className="bg-[#FAF9F6] border border-[#e9e9e9] rounded-xl px-4 py-2.5 text-xs focus:outline-none" rows="3"></textarea>
                    </div>
                    <button type="submit" className="w-full bg-[#4f46e5] text-white py-2.5 rounded-xl text-xs font-bold uppercase transition hover:opacity-90 shadow-sm">Post Listing</button>
                  </form>
                </div>
              </div>
            </div>
          )}

          {/* ============================================================== */}
          {/* T. BUSINESS DIRECTORY (ENTERPRISE TIER) */}
          {/* ============================================================== */}
          {activeMenu === "biz-directory" && (
            <div className="space-y-6 max-w-[1400px] mx-auto text-left animate-fade-in">
              <div className="border-b border-[#e9e9e9] pb-4 flex justify-between items-center">
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="text-2xl font-bold font-syne text-[#4f46e5]">Business Directory</h2>
                    <span className="text-[9px] font-extrabold uppercase px-2 py-0.5 rounded bg-purple-50 text-indigo-600 border border-indigo-200 tracking-wider shadow-inner">👑 ENTERPRISE TIER</span>
                  </div>
                  <p className="text-neutral-400 text-xs">Verify local commercial vendors, dry cleaners, and in-house convenience stores.</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {businesses.map((biz) => (
                  <div key={biz.id} className="bg-white border border-[#e9e9e9] rounded-3xl p-6 shadow-sm flex flex-col justify-between space-y-4 hover:border-[#4f46e5]/40 transition text-left">
                    <div className="space-y-2">
                      <div className="flex justify-between items-start">
                        <span className="text-[9px] font-extrabold bg-[#faf8f3] text-indigo-600 border border-indigo-100 px-2 py-0.5 rounded">{biz.category}</span>
                        <span className="text-xs font-bold text-amber-500">⭐ {biz.rating}</span>
                      </div>
                      <h4 className="text-base font-extrabold text-slate-900 font-poppins">{biz.name}</h4>
                      <div className="space-y-1 text-slate-500 text-xs font-normal">
                        <p>📍 Location: {biz.location}</p>
                        <p>⏰ Timings: {biz.timing}</p>
                        {biz.discount && <p className="text-emerald-600 font-bold">✨ Offer: {biz.discount}</p>}
                      </div>
                    </div>

                    <div className="border-t border-[#f1f1f1] pt-3 flex justify-between items-center text-[10px] font-semibold text-slate-400">
                      <span className="font-mono text-indigo-500">{biz.contact}</span>
                      <button onClick={()=>{
                        alert(`Calling ${biz.name} at ${biz.contact}. Intercom interface dialing.`);
                      }} className="px-3.5 py-1.5 bg-[#4f46e5] text-white rounded-xl uppercase transition hover:opacity-90 shadow-sm text-[9px] font-bold">Order Now</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ============================================================== */}
          {/* U. JOB BOARD (ENTERPRISE TIER) */}
          {/* ============================================================== */}
          {activeMenu === "job-board" && (
            <div className="space-y-6 max-w-[1400px] mx-auto text-left animate-fade-in">
              <div className="border-b border-[#e9e9e9] pb-4 flex justify-between items-center">
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="text-2xl font-bold font-syne text-[#4f46e5]">Job Board & Internships</h2>
                    <span className="text-[9px] font-extrabold uppercase px-2 py-0.5 rounded bg-purple-50 text-indigo-600 border border-indigo-200 tracking-wider shadow-inner">👑 ENTERPRISE TIER</span>
                  </div>
                  <p className="text-neutral-400 text-xs">Register part-time tutoring, accounting or babysitting vacancies and apply within society.</p>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-8 space-y-4">
                  <span className="text-[10px] font-extrabold tracking-[2px] text-[#4f46e5] uppercase block font-poppins">Active Vacancies</span>
                  {jobs.map((job) => (
                    <div key={job.id} className="bg-white border border-[#e9e9e9] rounded-3xl p-6 shadow-sm hover:border-[#4f46e5]/40 transition text-left flex justify-between items-stretch gap-6 flex-wrap">
                      <div className="flex-1 space-y-2.5">
                        <div className="flex justify-between items-start">
                          <span className="text-sm font-extrabold text-slate-900 font-poppins">{job.title}</span>
                          <span className="text-sm font-black text-indigo-600">{job.salary}</span>
                        </div>
                        <p className="text-xs text-slate-500 font-normal leading-relaxed">{job.desc}</p>
                        <div className="text-[10px] text-slate-400 font-semibold pt-1">
                          Timing slots: {job.timing} • Posted by Flat {job.flat} ({job.postedBy})
                        </div>
                        
                        {/* Application check */}
                        {jobApplications.some(app=>app.jobId === job.id) && (
                          <div className="bg-indigo-50/50 border border-indigo-100 p-2 rounded-xl text-[10px] text-indigo-700 font-semibold flex items-center gap-1.5 mt-2">
                            <span className="w-2.5 h-2.5 rounded-full bg-indigo-500 animate-pulse"></span>
                            <span>Applied: Your resume bio has been shared with {job.postedBy}. Status: Reviewing.</span>
                          </div>
                        )}
                      </div>

                      <div className="flex flex-col justify-end shrink-0 pl-6 border-l border-[#f1f1f1]">
                        <button disabled={jobApplications.some(app=>app.jobId === job.id)} onClick={()=>{
                          setJobApplications([{
                            jobId: job.id,
                            applicantName: "Mohit Singh",
                            flat: "B-202",
                            qualification: "Resident Admin Bio",
                            status: "Applied"
                          }, ...jobApplications]);
                          alert(`Application submitted successfully to Flat ${job.flat}! Seller has received your CV profile.`);
                        }} className={`px-4 py-2 font-bold rounded-xl text-xs uppercase transition shadow-sm ${
                          jobApplications.some(app=>app.jobId === job.id) 
                            ? "bg-slate-100 text-slate-400 border border-slate-200 cursor-not-allowed" 
                            : "bg-[#4f46e5] text-white hover:opacity-90"
                        }`}>{jobApplications.some(app=>app.jobId === job.id) ? "Applied" : "Apply Now"}</button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="lg:col-span-4 bg-white border border-[#e9e9e9] rounded-3xl p-6 shadow-sm">
                  <span className="text-[10px] font-extrabold tracking-[2px] text-[#4f46e5] uppercase block mb-4">Post Local Job Notice</span>
                  <form onSubmit={(e)=>{
                    e.preventDefault();
                    if(!newJobTitle || !newJobSalary) return;
                    setJobs([{
                      id: `job-${Date.now()}`,
                      title: newJobTitle,
                      salary: newJobSalary,
                      timing: "Flexible slots",
                      flat: "B-202",
                      postedBy: "Mohit Singh",
                      applicants: 0,
                      desc: newJobDesc || "Babysitting or home management support needed."
                    }, ...jobs]);
                    setNewJobTitle("");
                    setNewJobSalary("");
                    setNewJobDesc("");
                    alert("Job vacancy published under professional board hub!");
                  }} className="space-y-4">
                    <div className="flex flex-col">
                      <label className="text-[9px] font-bold text-slate-400 mb-1 uppercase">Job Title</label>
                      <input type="text" required placeholder="e.g. Maths Tutor Grade 8" value={newJobTitle} onChange={(e)=>setNewJobTitle(e.target.value)} className="bg-[#FAF9F6] border border-[#e9e9e9] rounded-xl px-4 py-2 text-xs focus:outline-none" />
                    </div>
                    <div className="flex flex-col">
                      <label className="text-[9px] font-bold text-slate-400 mb-1 uppercase">Monthly Budget (INR)</label>
                      <input type="text" required placeholder="e.g. ₹5,000 / Month" value={newJobSalary} onChange={(e)=>setNewJobSalary(e.target.value)} className="bg-[#FAF9F6] border border-[#e9e9e9] rounded-xl px-4 py-2 text-xs focus:outline-none" />
                    </div>
                    <div className="flex flex-col">
                      <label className="text-[9px] font-bold text-slate-400 mb-1 uppercase">Scope details</label>
                      <textarea required placeholder="Specify hours, expectations..." value={newJobDesc} onChange={(e)=>setNewJobDesc(e.target.value)} className="bg-[#FAF9F6] border border-[#e9e9e9] rounded-xl px-4 py-2.5 text-xs focus:outline-none" rows="4"></textarea>
                    </div>
                    <button type="submit" className="w-full bg-[#4f46e5] text-white py-2.5 rounded-xl text-xs font-bold uppercase transition hover:opacity-90 shadow-sm">Publish Vacancy</button>
                  </form>
                </div>
              </div>
            </div>
          )}

          {/* ============================================================== */}
          {/* V. OPINION POLLS (ENTERPRISE TIER) */}
          {/* ============================================================== */}
          {activeMenu === "polls" && (
            <div className="space-y-6 max-w-[1400px] mx-auto text-left animate-fade-in">
              <div className="border-b border-[#e9e9e9] pb-4 flex justify-between items-center">
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="text-2xl font-bold font-syne text-[#4f46e5]">Opinion Polls & Voting</h2>
                    <span className="text-[9px] font-extrabold uppercase px-2 py-0.5 rounded bg-purple-50 text-indigo-600 border border-indigo-200 tracking-wider shadow-inner">👑 ENTERPRISE TIER</span>
                  </div>
                  <p className="text-neutral-400 text-xs">Cast votes on critical society decisions and watch real-time dynamic charts.</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                {polls.map((poll) => {
                  const total = poll.options.reduce((acc, curr)=>acc + curr.votes, 0);
                  return (
                    <div key={poll.id} className="bg-white border border-[#e9e9e9] rounded-3xl p-6 shadow-sm space-y-5 text-left">
                      <span className="text-[10px] font-extrabold text-indigo-500 uppercase tracking-widest block font-poppins">Windsor Castle Ballot</span>
                      <h4 className="text-base font-extrabold text-slate-900 font-poppins">{poll.question}</h4>
                      
                      <div className="space-y-3.5">
                        {poll.options.map((opt, idx) => {
                          const pct = total > 0 ? Math.round((opt.votes / total) * 100) : 0;
                          return (
                            <div key={idx} className="space-y-1.5">
                              <button disabled={poll.voted} onClick={()=>{
                                setPolls(polls.map(p=>p.id === poll.id ? {
                                  ...p,
                                  voted: true,
                                  options: p.options.map((o, i)=>i === idx ? {...o, votes: o.votes + 1}: o)
                                }: p));
                                alert("Thank you! Your vote has been securely recorded on the ledger.");
                              }} className={`w-full flex justify-between items-center p-3 rounded-2xl border text-xs font-semibold transition text-left cursor-pointer ${
                                poll.voted ? "bg-slate-50 border-neutral-200 text-slate-700" : "bg-[#faf9f6]/20 border-neutral-200 hover:border-indigo-500 hover:bg-neutral-50"
                              }`}>
                                <span>{opt.text}</span>
                                <span className="font-mono text-indigo-600">{opt.votes} ({pct}%)</span>
                              </button>
                              
                              {/* Dynamic progress bar chart */}
                              {poll.voted && (
                                <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden border border-[#e9e9e9]/40">
                                  <div className="bg-indigo-500 h-full rounded-full transition-all duration-500" style={{width: `${pct}%`}}></div>
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>

                      <div className="border-t border-[#f1f1f1] pt-3.5 text-[10px] text-slate-400 font-bold uppercase tracking-wider flex justify-between">
                        <span>Ballot Status: {poll.voted ? "Vote Casted" : "Active Open"}</span>
                        <span>Total Ballots: {total} votes</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* ============================================================== */}
          {/* W. COMMUNITY EVENTS (ENTERPRISE TIER) */}
          {/* ============================================================== */}
          {activeMenu === "events" && (
            <div className="space-y-6 max-w-[1400px] mx-auto text-left animate-fade-in">
              <div className="border-b border-[#e9e9e9] pb-4 flex justify-between items-center">
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="text-2xl font-bold font-syne text-[#4f46e5]">Events Coordinator</h2>
                    <span className="text-[9px] font-extrabold uppercase px-2 py-0.5 rounded bg-purple-50 text-indigo-600 border border-indigo-200 tracking-wider shadow-inner">👑 ENTERPRISE TIER</span>
                  </div>
                  <p className="text-neutral-400 text-xs">Verify upcoming celebrations and dynamic festival ticket reservations.</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
                {events.map((evt) => (
                  <div key={evt.id} className="bg-white border border-[#e9e9e9] rounded-3xl p-6 shadow-sm flex flex-col justify-between space-y-4 hover:border-[#4f46e5]/40 transition text-left">
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-[10px] font-extrabold text-indigo-500 uppercase tracking-widest block font-poppins">{evt.date}</span>
                        <span className="bg-[#FAF8F3] text-indigo-700 font-extrabold border border-indigo-100 px-2.5 py-0.5 text-[10px] rounded-lg">
                          {evt.price === 0 ? "FREE ENTRY" : `₹${evt.price} / Family`}
                        </span>
                      </div>
                      <h4 className="text-lg font-extrabold text-slate-900 font-poppins">{evt.title}</h4>
                      <p className="text-xs text-slate-500 leading-relaxed font-normal">{evt.desc}</p>
                      
                      <div className="space-y-1 text-[11px] font-semibold text-slate-400 border-t border-[#f1f1f1] pt-3.5">
                        <p>🕒 Hours: <span className="text-slate-700">{evt.time}</span></p>
                        <p>📍 Location Slot: <span className="text-slate-700">{evt.location}</span></p>
                        <p>🔥 Live RSVPs: <span className="text-[#059669] font-bold">{evt.rsvps} Families</span></p>
                      </div>
                    </div>

                    <button onClick={()=>{
                      setEvents(events.map(e=>e.id === evt.id ? {
                        ...e,
                        userRsvped: true,
                        rsvps: e.userRsvped ? e.rsvps : e.rsvps + 1
                      }: e));
                      alert(`RSVP Confirmed! ${evt.title} passes have been added to your digital card ledger.`);
                    }} className={`w-full py-2.5 font-bold uppercase rounded-xl text-xs tracking-wider transition ${
                      evt.userRsvped 
                        ? "bg-emerald-50 text-emerald-600 border border-emerald-200" 
                        : "bg-[#4f46e5] text-white hover:opacity-90 shadow-sm cursor-pointer"
                    }`}>{evt.userRsvped ? "RSVP Confirmed (Pass Issued) ✓" : "Book Tickets"}</button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ============================================================== */}
          {/* X. COMMUNITY BLOGS (ENTERPRISE TIER) */}
          {/* ============================================================== */}
          {activeMenu === "blogs" && (
            <div className="space-y-6 max-w-[1400px] mx-auto text-left animate-fade-in">
              <div className="border-b border-[#e9e9e9] pb-4 flex justify-between items-center">
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="text-2xl font-bold font-syne text-[#4f46e5]">Community Blogs & Stories</h2>
                    <span className="text-[9px] font-extrabold uppercase px-2 py-0.5 rounded bg-purple-50 text-indigo-600 border border-indigo-200 tracking-wider shadow-inner">👑 ENTERPRISE TIER</span>
                  </div>
                  <p className="text-neutral-400 text-xs">Read articles, eco-tips, and local reviews written by Windsor Castle residents.</p>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-8 space-y-6">
                  {blogs.map((blog) => (
                    <div key={blog.id} className="bg-white border border-[#e9e9e9] rounded-3xl p-6 shadow-sm space-y-3.5 hover:border-[#4f46e5]/40 transition text-left">
                      <div className="flex justify-between items-center">
                        <span className="text-[10px] font-extrabold text-indigo-500 uppercase tracking-widest font-poppins">{blog.category}</span>
                        <span className="text-neutral-400 text-[10px]">{blog.date}</span>
                      </div>
                      <h4 className="text-lg font-extrabold text-slate-900 font-poppins">{blog.title}</h4>
                      <p className="text-xs text-slate-500 leading-relaxed font-normal">{blog.desc}</p>
                      
                      <div className="border-t border-[#f1f1f1] pt-3.5 flex justify-between items-center text-[10px] font-bold text-slate-400">
                        <span>By {blog.author}</span>
                        <div className="flex items-center gap-4">
                          <button onClick={()=>{
                            setBlogs(blogs.map(b=>b.id === blog.id ? {...b, likes: b.likes + 1}: b));
                          }} className="flex items-center gap-1 hover:text-indigo-600 transition">❤️ {blog.likes} Likes</button>
                          <span>💬 {blog.comments} Comments</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="lg:col-span-4 bg-white border border-[#e9e9e9] rounded-3xl p-6 shadow-sm">
                  <span className="text-[10px] font-extrabold tracking-[2px] text-[#4f46e5] uppercase block mb-4">Post Community Blog</span>
                  <form onSubmit={(e)=>{
                    e.preventDefault();
                    if(!newBlogTitle || !newBlogDesc) return;
                    setBlogs([{
                      id: Date.now(),
                      title: newBlogTitle,
                      author: "Mohit Singh (Flat B-202)",
                      date: "Today",
                      category: newBlogCat,
                      likes: 1,
                      comments: 0,
                      desc: newBlogDesc
                    }, ...blogs]);
                    setNewBlogTitle("");
                    setNewBlogDesc("");
                    alert("Your article was posted successfully to the community network feed!");
                  }} className="space-y-4">
                    <div className="flex flex-col">
                      <label className="text-[9px] font-bold text-slate-400 mb-1 uppercase">Blog Title</label>
                      <input type="text" required placeholder="e.g. Stray dog management solutions" value={newBlogTitle} onChange={(e)=>setNewBlogTitle(e.target.value)} className="bg-[#FAF9F6] border border-[#e9e9e9] rounded-xl px-4 py-2 text-xs focus:outline-none" />
                    </div>
                    <div className="flex flex-col">
                      <label className="text-[9px] font-bold text-slate-400 mb-1 uppercase">Blog Category</label>
                      <select value={newBlogCat} onChange={(e)=>setNewBlogCat(e.target.value)} className="bg-[#FAF9F6] border border-[#e9e9e9] rounded-xl px-4 py-2 text-xs focus:outline-none">
                        <option value="Community">Community</option>
                        <option value="Eco-Living">Eco-Living</option>
                        <option value="General Advice">General Advice</option>
                      </select>
                    </div>
                    <div className="flex flex-col">
                      <label className="text-[9px] font-bold text-slate-400 mb-1 uppercase">Blog Content</label>
                      <textarea required placeholder="Write your thoughts..." value={newBlogDesc} onChange={(e)=>setNewBlogDesc(e.target.value)} className="bg-[#FAF9F6] border border-[#e9e9e9] rounded-xl px-4 py-2.5 text-xs focus:outline-none" rows="6"></textarea>
                    </div>
                    <button type="submit" className="w-full bg-[#4f46e5] text-white py-2.5 rounded-xl text-xs font-bold uppercase transition hover:opacity-90 shadow-sm">Publish Article</button>
                  </form>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>

      {/* ========================================== */}
      {/* CHECKOUT SIMULATION MODAL */}
      {/* ========================================== */}
      {checkoutModal && activeInvoice && (
        <div className="fixed inset-0 z-[100] bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-6 select-none">
          <div className="bg-white border border-[#E9E9E9] rounded-3xl p-8 max-w-[460px] w-full text-slate-900 shadow-2xl relative space-y-6">
            <span className="text-[10px] font-bold tracking-[3px] text-[#059669] uppercase block">
              RAZORPAY UPI CHECKOUT
            </span>

            <div className="border-b border-slate-100 pb-4 text-left">
              <span className="text-xs text-neutral-400 block font-poppins">
                Windsor Castle Maintenance Dues
              </span>
              <h3 className="text-2xl font-bold text-slate-950 font-poppins mt-1">
                INR {activeInvoice.amount}.00
              </h3>
              <span className="text-[10px] text-neutral-400 block mt-1">
                Invoice ID: {activeInvoice.id} • Period: {activeInvoice.period}
              </span>
            </div>

            {/* Simulated QR block */}
            <div className="flex flex-col items-center justify-center p-6 bg-slate-50 rounded-2xl border border-neutral-100">
              <div className="w-40 h-40 bg-white border-2 border-neutral-200 rounded-xl p-3 flex items-center justify-center shadow-inner mb-3">
                {/* Dynamic Stylized QR Mock */}
                <div className="grid grid-cols-5 gap-2 w-full h-full opacity-80">
                  <div className="bg-[#061c12] rounded-sm" />
                  <div className="bg-[#061c12] rounded-sm" />
                  <div className="bg-neutral-100 rounded-sm" />
                  <div className="bg-[#061c12] rounded-sm" />
                  <div className="bg-[#061c12] rounded-sm" />
                  <div className="bg-[#061c12] rounded-sm" />
                  <div className="bg-neutral-100 rounded-sm" />
                  <div className="bg-[#061c12] rounded-sm" />
                  <div className="bg-neutral-100 rounded-sm" />
                  <div className="bg-[#061c12] rounded-sm" />
                  <div className="bg-neutral-100 rounded-sm" />
                  <div className="bg-[#061c12] rounded-sm" />
                  <div className="bg-neutral-100 rounded-sm" />
                  <div className="bg-[#061c12] rounded-sm" />
                  <div className="bg-neutral-100 rounded-sm" />
                  <div className="bg-[#061c12] rounded-sm" />
                  <div className="bg-neutral-100 rounded-sm" />
                  <div className="bg-[#061c12] rounded-sm" />
                  <div className="bg-neutral-100 rounded-sm" />
                  <div className="bg-[#061c12] rounded-sm" />
                  <div className="bg-[#061c12] rounded-sm" />
                  <div className="bg-[#061c12] rounded-sm" />
                  <div className="bg-neutral-100 rounded-sm" />
                  <div className="bg-[#061c12] rounded-sm" />
                  <div className="bg-[#061c12] rounded-sm" />
                </div>
              </div>
              <span className="text-[10px] text-neutral-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
                <Play size={10} className="fill-[#059669] text-[#059669]" />{" "}
                Scan using BHIM / PhonePe / Paytm
              </span>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setCheckoutModal(false)}
                className="w-1/2 py-3 border border-neutral-300 hover:bg-neutral-50 rounded-xl text-xs font-bold uppercase tracking-wider text-slate-700 transition cursor-pointer"
              >
                Cancel Payment
              </button>
              <button
                onClick={confirmCheckoutPayment}
                className="w-1/2 py-3 bg-[#059669] hover:opacity-90 rounded-xl text-xs font-bold uppercase tracking-wider text-white transition cursor-pointer shadow-sm"
              >
                Simulate Success
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

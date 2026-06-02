import { useState } from "react";
import {
  ShieldCheck,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Clock,
  CheckCircle,
  Building2,
  Sparkles,
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
    <div className="w-full flex flex-col bg-white font-poppins">
      {/* ================= HERO HEADER ================= */}
      <section className="relative pt-24 pb-16 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-24 bg-[#F4F8F6] border-b border-[#E2ECE7]">
        <div className="max-w-[1680px] mx-auto px-5 sm:px-8 lg:px-16 xl:px-24 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#061c12] text-[#10B981] mb-6 shadow-sm border border-emerald-950">
            <Calendar size={12} className="text-[#10B981]" />
            <span className="text-[10px] font-bold uppercase tracking-[2px] font-poppins">
              BOOK A DEMO
            </span>
          </div>

          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#121414] leading-[115%] mb-6"
            style={{ fontFamily: '"Syne", sans-serif' }}
          >
            Bring Gate360 to Your Committee.
          </h1>

          <p className="max-w-[800px] mx-auto text-base sm:text-lg text-neutral-600 leading-[170%]">
            Schedule a dedicated, interactive product presentation with our
            community engineering architects. Learn how Gate360 can elevate
            safety and simplify accounting for your apartments.
          </p>
        </div>
      </section>

      {/* ================= CONTENT BODY ================= */}
      <section className="w-full py-16 sm:py-24 bg-white">
        <div className="max-w-[1680px] mx-auto px-5 sm:px-8 lg:px-16 xl:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 max-w-[1400px] mx-auto items-stretch">
            {/* Left Column: Office Contacts */}
            <div className="lg:col-span-5 flex flex-col justify-between bg-[#F4F8F6] border border-[#E2ECE7] rounded-3xl p-8 lg:p-10">
              <div>
                <span className="text-[10px] font-bold tracking-[3px] text-[#059669] uppercase block mb-3">
                  CORPORATE HEADQUARTERS
                </span>
                <h3 className="text-2xl font-bold text-[#121414] mb-6 font-poppins">
                  Gate360 Headquarters
                </h3>

                <ul className="space-y-8">
                  {/* Address */}
                  <li className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-xl bg-white border border-[#E2ECE7] flex items-center justify-center text-[#121414] shrink-0 shadow-sm">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-neutral-400 block mb-1 uppercase">
                        Head Office Address
                      </span>
                      <span className="text-neutral-700 text-sm sm:text-base leading-relaxed">
                        Gate360 SaaS Ltd,
                        <br />
                        Amir Industrial Estate, 209, Sun Mill Compound,
                        <br />
                        opposite Phoenix Mall, Parel, Mumbai, Maharashtra 400013
                      </span>
                    </div>
                  </li>

                  {/* Phone */}
                  <li className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-xl bg-white border border-[#E2ECE7] flex items-center justify-center text-[#121414] shrink-0 shadow-sm">
                      <Phone size={18} />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-neutral-400 block mb-1 uppercase">
                        Cooperative Helpline
                      </span>
                      <a
                        href="tel:+917738048925"
                        className="text-neutral-700 font-semibold hover:text-[#059669] text-sm sm:text-base transition"
                      >
                        +91 79 7710 5170
                      </a>
                    </div>
                  </li>

                  {/* Email */}
                  <li className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-xl bg-white border border-[#E2ECE7] flex items-center justify-center text-[#121414] shrink-0 shadow-sm">
                      <Mail size={18} />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-neutral-400 block mb-1 uppercase">
                        Support Desk
                      </span>
                      <a
                        href="mailto:support@gate360.in"
                        className="text-neutral-700 font-semibold hover:text-[#059669] text-sm sm:text-base transition"
                      >
                        support@gate360.in
                      </a>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Decorative Trust Badge */}
              <div className="mt-12 pt-8 border-t border-[#E2ECE7] flex items-center gap-3">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center border border-[#E2ECE7] text-[#059669] shrink-0 shadow-sm">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <span className="text-xs font-bold text-[#121414] block">
                    ISO 27001 Certified SaaS
                  </span>
                  <span className="text-[10px] text-neutral-400">
                    Guaranteed 99.9% uptime & strict data schema segregation
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Dynamic Scheduler Form */}
            <div className="lg:col-span-7 bg-white border border-[#E9E9E9] rounded-3xl p-8 lg:p-10 shadow-sm flex flex-col justify-center">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <span className="text-[10px] font-bold tracking-[3px] text-[#059669] uppercase block">
                    SCHEDULER ENGINE
                  </span>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="flex flex-col">
                      <label className="text-xs font-bold text-neutral-600 mb-1.5 uppercase">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Vinod kumar "
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="bg-[#F4F8F6] border border-[#E2ECE7] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#059669]"
                      />
                    </div>

                    {/* Email */}
                    <div className="flex flex-col">
                      <label className="text-xs font-bold text-neutral-600 mb-1.5 uppercase">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="vinodku4848@gmail.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="bg-[#F4F8F6] border border-[#E2ECE7] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#059669]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Phone */}
                    <div className="flex flex-col">
                      <label className="text-xs font-bold text-neutral-600 mb-1.5 uppercase">
                        Mobile Number
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 79 7710 5170"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="bg-[#F4F8F6] border border-[#E2ECE7] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#059669]"
                      />
                    </div>

                    {/* Society Name */}
                    <div className="flex flex-col">
                      <label className="text-xs font-bold text-neutral-600 mb-1.5 uppercase">
                        Gated Society Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Windsor Castle Cooperative Housing Society"
                        value={formData.societyName}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            societyName: e.target.value,
                          })
                        }
                        className="bg-[#F4F8F6] border border-[#E2ECE7] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#059669]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Unit/Flat Size */}
                    <div className="flex flex-col">
                      <label className="text-xs font-bold text-neutral-600 mb-1.5 uppercase">
                        Approx. Flats/Units Count
                      </label>
                      <select
                        value={formData.flatCount}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            flatCount: e.target.value,
                          })
                        }
                        className="bg-[#F4F8F6] border border-[#E2ECE7] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#059669]"
                      >
                        <option value="<50">Less than 50 Flats</option>
                        <option value="50-150">50 - 150 Flats</option>
                        <option value="150-250">150 - 250 Flats</option>
                        <option value="250+">More than 250 Flats</option>
                      </select>
                    </div>

                    {/* Target Booking Date */}
                    <div className="flex flex-col">
                      <label className="text-xs font-bold text-neutral-600 mb-1.5 uppercase">
                        Preferred Demo Date
                      </label>
                      <input
                        type="date"
                        required
                        value={formData.date}
                        onChange={(e) =>
                          setFormData({ ...formData, date: e.target.value })
                        }
                        className="bg-[#F4F8F6] border border-[#E2ECE7] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#059669]"
                      />
                    </div>
                  </div>

                  {/* Modules of Interest */}
                  <div className="flex flex-col">
                    <label className="text-xs font-bold text-neutral-600 mb-2 uppercase">
                      Target Modules of Interest
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {[
                        "Gate Security",
                        "Billing Hub",
                        "SOS Panic Alerts",
                        "Account Roster",
                      ].map((m) => {
                        const checked = formData.modules.includes(m);
                        return (
                          <button
                            key={m}
                            type="button"
                            onClick={() => toggleModule(m)}
                            className={`py-2 rounded-xl text-[11px] font-bold border transition cursor-pointer ${
                              checked
                                ? "bg-[#059669] text-white border-[#059669]"
                                : "bg-[#F4F8F6] text-neutral-600 border-[#E2ECE7] hover:bg-neutral-50"
                            }`}
                          >
                            {m}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="w-full h-[52px] bg-[#059669] text-white hover:opacity-90 rounded-xl flex items-center justify-center gap-2 font-bold text-xs uppercase tracking-wider transition cursor-pointer shadow-sm"
                  >
                    <Sparkles size={14} />
                    <span>Confirm Slot Booking</span>
                  </button>
                </form>
              ) : (
                <div className="text-center py-10 flex flex-col items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 border border-emerald-200 flex items-center justify-center mb-6 shadow-sm">
                    <CheckCircle size={32} />
                  </div>

                  <h3 className="text-3xl font-extrabold text-[#121414] font-poppins mb-3">
                    Demo Presentation Booked!
                  </h3>
                  <p className="text-neutral-500 text-sm max-w-[480px] mx-auto leading-relaxed font-poppins mb-8">
                    Congratulations <strong>{formData.name}</strong>, our
                    society security engineer will reach out to you at{" "}
                    <strong>{formData.email}</strong> or{" "}
                    <strong>{formData.phone}</strong> to confirm your slot for{" "}
                    <strong>{formData.societyName}</strong> (
                    {formData.flatCount} units) on {formData.date}.
                  </p>

                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="h-[46px] px-8 bg-[#059669] text-white hover:opacity-90 rounded-xl font-bold text-xs uppercase tracking-wider transition cursor-pointer shadow-sm"
                  >
                    Schedule Another Presentation
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

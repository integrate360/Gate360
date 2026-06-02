import re

file_path = r"c:\Users\Dell\Desktop\vinod\Gate360\src\pages\PortalDemo.jsx"

with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# Let's define the new sidebar content we want to inject
new_sidebar = """            {/* Category: Society Operations */}
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
                    { id: "society-info", label: "Society Info", icon: Building2, isEnterprise: false },
                    { id: "bill-management", label: "Bill Management", icon: CreditCard, isEnterprise: false },
                    { id: "service-requests", label: "Service Requests", icon: Wrench, isEnterprise: false },
                    { id: "amenities-booking", label: "Amenities Booking", icon: Calendar, isEnterprise: false },
                    { id: "parking-management", label: "Parking Management", icon: Car, isEnterprise: false },
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
                          className={active ? "text-[#059669]" : "text-slate-400"}
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
                    { id: "security-mgmt", label: "Security Management", icon: ShieldCheck, isEnterprise: false },
                    { id: "visitors", label: "Visitors Scanner", icon: Users, isEnterprise: false },
                    { id: "deliveries", label: "Deliveries", icon: Package, isEnterprise: false },
                    { id: "parking-incidents", label: "Parking Incidents", icon: AlertTriangle, isEnterprise: false },
                    { id: "blacklisted", label: "Blacklisted DB", icon: EyeOff, isEnterprise: false },
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
                          className={active ? "text-[#059669]" : "text-slate-400"}
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
                    { id: "notices", label: "Notices Broadcast", icon: Megaphone, isEnterprise: false },
                    { id: "complaints", label: "Complaints Portal", icon: ClipboardList, isEnterprise: false },
                    { id: "polls", label: "Opinion Polls", icon: Sliders, isEnterprise: true },
                    { id: "events", label: "Events Coordinator", icon: Calendar, isEnterprise: true },
                    { id: "report-issues", label: "Report Issues", icon: AlertOctagon, isEnterprise: false },
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
                          className={active ? "text-[#059669]" : "text-slate-400"}
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
                    { id: "committee-oversight", label: "Management Committee", icon: FolderLock, isEnterprise: false },
                    { id: "staff-attendance", label: "Staff Attendance", icon: CheckCircle2, isEnterprise: false },
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
                          className={active ? "text-[#059669]" : "text-slate-400"}
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
                    { id: "product-market", label: "Product Market", icon: ShoppingBag, isEnterprise: true },
                    { id: "real-estate", label: "Real Estate", icon: Building2, isEnterprise: true },
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
                          className={active ? "text-[#059669]" : "text-slate-400"}
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
                    { id: "biz-directory", label: "Business Directory", icon: ClipboardList, isEnterprise: true },
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
                          className={active ? "text-[#059669]" : "text-slate-400"}
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
            </div>"""

# Find the start of society operations and replace up to end of professional hub
pattern = r"\s*\{\/\* Category: Society Operations \*\/\}.*?\{\/\* Category: Professional Hub \*\/\}.*?<\/div>\s*\}\s*<\/div>\s*\}\s*<\/div>"
match = re.search(r"\{\/\* Category: Society Operations \*\/\}.*?\{\/\* Category: Professional Hub \*\/\}.*?<\/div>\s*\}\s*<\/div>", content, re.DOTALL)

if match:
    # Let's perform string replacement
    sidebar_orig = match.group(0)
    # The replacement sidebar structure ends with the outer closing structure
    new_sidebar_full = new_sidebar + "\n            </div>"
    # Replacing
    content = content.replace(sidebar_orig, new_sidebar_full)
    with open(file_path, "w", encoding="utf-8") as f:
        f.write(content)
    print("Sidebar replaced successfully!")
else:
    print("Error: Could not locate sidebar structure via regex.")

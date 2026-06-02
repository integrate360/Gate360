import { ShieldCheck, Heart, Users, Target, ShieldAlert, Award } from "lucide-react";

export default function About() {
  return (
    <div className="w-full flex flex-col bg-white">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-24 bg-[#f4f8fa] border-b border-[#e2edf8]">
        <div className="max-w-[1680px] mx-auto px-5 sm:px-8 lg:px-16 xl:px-24 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#2e74e6] mb-6 shadow-sm border border-[#2e74e6]/20">
            <ShieldCheck size={12} />
            <span className="text-[10px] font-bold uppercase tracking-[2px] font-poppins">ABOUT GATE360</span>
          </div>
          
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#121414] leading-[115%] mb-6"
            style={{ fontFamily: '"Poppins", sans-serif' }}
          >
            Empowering Safer, Smarter <br className="hidden sm:block" />
            Gated Communities.
          </h1>
          
          <p className="max-w-[800px] mx-auto text-base sm:text-lg text-neutral-600 leading-[170%] font-poppins">
            We are dedicated to building a zero-leakage, frictionless operating system for housing societies, gated complexes, and residential townships across India. By connecting residents, security staff, accountants, and administrators, we facilitate seamless safety and accounting.
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="w-full py-16 sm:py-24 bg-white">
        <div className="max-w-[1680px] mx-auto px-5 sm:px-8 lg:px-16 xl:px-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 max-w-[1300px] mx-auto">
            
            {/* Vision */}
            <div className="flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-[#f4f8fa] border border-[#e2edf8] flex items-center justify-center text-[#2e74e6] mb-6">
                <Target size={22} />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#121414] font-poppins mb-4">Our Vision</h2>
              <p className="text-neutral-600 text-sm sm:text-base leading-[170%] font-poppins font-normal">
                To become the primary trust infrastructure for gated living in India. We envision residential ecosystems where physical log registers are completely replaced by biometric and cryptographic digital check-ins, manual ledger calculations are automated into instant accounting sheets, and emergency distress signals receive help in under three seconds.
              </p>
            </div>

            {/* Mission */}
            <div className="flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-[#f4f8fa] border border-[#e2edf8] flex items-center justify-center text-[#2e74e6] mb-6">
                <ShieldAlert size={22} />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#121414] font-poppins mb-4">Our Mission</h2>
              <p className="text-neutral-600 text-sm sm:text-base leading-[170%] font-poppins font-normal">
                To build high-performance, robust, and accessible multi-tenant SaaS tools that housing committee executives can deploy in minutes. We aim to equip security guards at the gate with high-latency, offline-resilient alert terminals, while offering residents simple, secure portals to handle invoicing payments and visitor passes without friction.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="w-full py-16 sm:py-24 bg-[#f4f8fa] border-t border-b border-[#e2edf8]">
        <div className="max-w-[1680px] mx-auto px-5 sm:px-8 lg:px-16 xl:px-24">
          <div className="text-center max-w-[800px] mx-auto mb-16">
            <span className="text-[11px] font-bold tracking-[3px] text-[#2e74e6] uppercase block mb-3 font-poppins">OUR CORE VALUES</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#121414]" style={{ fontFamily: '"Poppins", sans-serif' }}>What Guides Gate360</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: ShieldCheck,
                title: "Fail-Safe Safety",
                desc: "We treat safety as an absolute. Our Panic SOS dispatch alerts are architected with maximum failover redundancy to guarantee immediate guard awareness."
              },
              {
                icon: Users,
                title: "Unified Collaboration",
                desc: "Residents, administrative boards, guards, and accounting heads have specific dashboards, ensuring quick task handoffs and communication."
              },
              {
                icon: Heart,
                title: "Data Integrity & Privacy",
                desc: "We enforce strict tenant separation contexts inside our database, ensuring no crossover of proprietary society rosters or financial transactions."
              },
              {
                icon: Award,
                title: "SaaS Scalability",
                desc: "We provide high-impact cloud capabilities including Razorpay checkouts, AWS cost audits, and SMS gateways packaged in plans for communities of all sizes."
              }
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white border border-[#e2edf8] rounded-2xl p-6 hover:border-[#2e74e6] transition-all shadow-sm">
                <div className="w-10 h-10 rounded-lg bg-[#f4f8fa] text-[#2e74e6] flex items-center justify-center mb-5 border border-[#e2edf8]">
                  <Icon size={18} />
                </div>
                <h3 className="text-lg font-bold text-[#121414] mb-2 font-poppins">{title}</h3>
                <p className="text-neutral-500 text-xs sm:text-sm leading-[160%] font-poppins">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

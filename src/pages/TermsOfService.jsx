import React from "react";

export default function TermsOfService() {
  return (
    <div className="w-full bg-[#f4f8fa] py-12 sm:py-20 text-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Document Card */}
        <div className="bg-white rounded-3xl border border-gray-200/80 p-8 sm:p-12 lg:p-16 shadow-sm">
          {/* Header */}
          <div className="border-b border-[#2e74e6]/20 pb-8 mb-10">
            <span
              className="text-[12px] sm:text-[13px] font-semibold tracking-[2px] uppercase mb-3 inline-block"
              style={{
                color: "#2e74e6",
                fontFamily: '"Poppins", sans-serif',
              }}
            >
              LEGAL DOCUMENT
            </span>
            <h1
              className="text-3xl sm:text-4xl font-bold tracking-tight text-[#121414] mb-4"
              style={{ fontFamily: '"Poppins", sans-serif' }}
            >
              Terms of Service
            </h1>
            <p
              className="text-sm text-[#5C5A54] font-medium"
              style={{ fontFamily: '"Poppins", sans-serif' }}
            >
              Last Updated: May 30, 2026
            </p>
          </div>

          {/* Content */}
          <div
            className="space-y-8 text-[15px] sm:text-[16px] leading-[180%] text-neutral-600"
            style={{ fontFamily: '"Poppins", sans-serif' }}
          >
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-[#121414] tracking-tight">
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing or using the services provided by Gate360 SaaS Ltd.
                ("Gate360," "we," "our," or "us") via gate360.in or through our
                Guard and Resident portals, you agree to comply with and be bound by
                these Terms of Service. If you do not agree, please do not use our
                society management software or billing systems.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-[#121414] tracking-tight">
                2. Description of Services
              </h2>
              <p>
                Gate360 provides a cloud-hosted, multi-tenant society operating
                system for residential flat committees, gated communities, and
                townships. Our services include a centralized Society Admin
                Console, high-vigilance Guard Terminals (with pre-approved QR
                pass scanning and auditory Panic SOS alerts), a Resident
                Convenience Portal, double-entry financial ledger accounting
                tools, late fee calculation policies, and local classifieds
                marketplaces.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-[#121414] tracking-tight">
                3. Roster Directory & Security Guard Check-ins
              </h2>
              <p>When utilizing Gate360's check-in systems, you agree to:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  Provide accurate, verified flat owner records and resident
                  roster details.
                </li>
                <li>
                  Ensure that all visitor QR pre-approvals are created in good
                  faith for legitimate guests or verified vendors.
                </li>
                <li>
                  Abide by safety rules, respecting blacklisted vendor databases
                  and tower access regulations logged by local committees.
                </li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-[#121414] tracking-tight">
                4. Billing Ledgers & Late Fee Penalties
              </h2>
              <p>
                Housing society administrative committees use Gate360 to
                automate quarterly maintenance billing, collect GST invoices,
                and reconcile utility expenses. Residents are responsible for
                paying maintenance dues through integrated payment checkouts.
                Late fees are automatically computed based on the specific grace
                periods and policies set by your society's board.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-[#121414] tracking-tight">
                5. Intellectual Property
              </h2>
              <p>
                The designs, typographic logos, software requirements documents
                (SRD), isolated multi-tenant database architectures, 1-Click SOS
                panic dispatch triggers, and proprietary dashboard UI widgets
                displayed on this portal are the property of Gate360 SaaS Ltd.
                and are protected by applicable trademark and copyright laws.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-[#121414] tracking-tight">
                6. Limitation of Liability
              </h2>
              <p>
                Under no circumstances shall Gate360 SaaS Ltd. be liable for any
                direct, indirect, incidental, or consequential damages resulting
                from local cellular signal dropouts impacting Panic SOS routing,
                local internet outages affecting visitor QR code scanners, or
                disputed late fee calculations logged by society accountants.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-[#121414] tracking-tight">
                7. Contact Information
              </h2>
              <p>
                For any questions regarding these Terms of Service or to inquire
                about subscription standard and premium packages, please reach
                us at:
                <br />
                <strong className="text-neutral-800">Email:</strong>{" "}
                <a
                  href="mailto:support@gate360.in"
                  className="text-[#2e74e6] font-semibold hover:underline"
                >
                  support@gate360.in
                </a>
                <br />
                <strong className="text-neutral-800">Office:</strong> Gate360
                SaaS Ltd, Amir Industrial Estate, 209, Sun Mill Compound,
                opposite Phoenix Mall, Parel, Mumbai, Maharashtra 400013
                <br />
                <strong className="text-neutral-800">Phone:</strong> +91 79 7710
                5170
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

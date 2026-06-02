import React from "react";

export default function PrivacyPolicy() {
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
              Privacy Policy
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
                1. Introduction
              </h2>
              <p>
                Welcome to Gate360 SaaS Ltd. ("Gate360," "we," "our," or "us").
                We are committed to protecting your personal information and
                your right to privacy. This Privacy Policy governs our data
                protection practices for the gate360.in platform and all
                associated housing society management services, visitor scanning
                applications, SOS Panic systems, and resident portals.
              </p>
              <p>
                If you have any questions or concerns about our policy, or our
                practices with regards to your personal information, please
                contact our community compliance team at{" "}
                <a
                  href="mailto:support@gate360.in"
                  className="text-[#2e74e6] font-semibold hover:underline"
                >
                  support@gate360.in
                </a>
                .
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-[#121414] tracking-tight">
                2. Information We Collect
              </h2>
              <p>
                We collect personal information that you or your housing
                society's administrative committee voluntarily provide to us
                when onboarding onto the Gate360 platform, registering resident
                flat lists, logging domestic helper profiles, scheduling
                facility bookings, or checking in at gates.
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Resident Profile details:</strong> Full name, email
                  address, mobile number (+91 79 7710 5170), tower name, block
                  number, and flat/unit identifier.
                </li>
                <li>
                  <strong>Visitor & Guest Logs:</strong> Visitor names, contact
                  details, vehicle registration license plates, purpose of
                  visit, and host resident clearances.
                </li>
                <li>
                  <strong>Staff & Helpers Directory:</strong> Verified profiles
                  for drivers, maids, cooks, gardeners, and guards (including
                  check-in timestamp logs and shift durations).
                </li>
                <li>
                  <strong>Billing & Transactional Metadata:</strong> Society
                  dues balances, ledger reports, and checkout metadata (payment
                  processing is securely handled via Razorpay, Cashfree, or UPI;
                  we do not store raw card credentials).
                </li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-[#121414] tracking-tight">
                3. How We Use Your Information
              </h2>
              <p>
                We process your information based on legitimate business
                interests, the fulfillment of our multi-tenant SaaS contract
                with your housing society, compliance with security regulations,
                and/or your consent. This includes:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  To provide, operate, and maintain our cloud-hosted society
                  management platform, Guard Terminals, and Resident dashboards.
                </li>
                <li>
                  To execute instantaneous 1-Click Panic SOS alert routing,
                  sounding auditory siren warnings on Guard consoles and
                  dispatching alert SMS messages in under 3 seconds.
                </li>
                <li>
                  To generate pre-approved visitor passes and facilitate fast QR
                  code scanning check-ins at entry towers.
                </li>
                <li>
                  To compile GST-compliant quarterly maintenance statements and
                  manage digital society ledger sheets.
                </li>
                <li>
                  To protect the platform against security threats, rowdy vendor
                  intrusions, and blacklist directory violations.
                </li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-[#121414] tracking-tight">
                4. Multi-Tenant Logical Database Segregation
              </h2>
              <p>
                Gate360 is built on an enterprise-grade multitenancy cloud
                model. All resident directories, guest logs, and accounting
                sheets are protected by strict logical database segregation. Our
                backend query middleware automatically enforces the unique{" "}
                <strong>X-Society-Id</strong> context filter on every single
                database transaction, ensuring no proprietary data is ever
                exposed to other societies.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-[#121414] tracking-tight">
                5. Data Retention & Guard Logs
              </h2>
              <p>
                We retain visitor records and security scan files strictly for
                safety audits and compliance with housing complex regulations.
                Administrative committees can configure custom log auto-deletion
                rules (e.g., clearing visitor details after 180 days) depending
                on local society bye-laws.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-[#121414] tracking-tight">
                6. Your Rights & Choices
              </h2>
              <p>
                As a resident or committee executive, you have the right to
                request access to the personal data we hold, modify details in
                the flatowner directory, or delete profiles (subject to society
                administrative approval for outstanding billing collections). To
                submit requests, please contact our support desk at{" "}
                <a
                  href="mailto:support@gate360.in"
                  className="text-[#2e74e6] font-semibold hover:underline"
                >
                  support@gate360.in
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

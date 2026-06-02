import React from "react";
import { Phone, Mail, Calendar } from "lucide-react";
import heroBg from "../../assets/image.png";

export default function ContactHero() {
  return (
    <section
      className="
        relative
        h-screen
        lg:h-[94vh]
        min-h-[680px]
        max-h-[1080px]
        overflow-hidden
      "
      style={{ backgroundColor: "#0D0E0F" }}
    >
      {/* ================= Background ================= */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Elite Education Architectural Concept"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* ===== Main Overlay ===== */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(18,20,20,1) 0%, rgba(18,20,20,0.60) 50%, rgba(18,20,20,0.40) 100%)",
          }}
        />

        {/* ===== Left Dark Overlay ===== */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(18,20,20,0.78) 0%, rgba(18,20,20,0.38) 45%, rgba(18,20,20,0.12) 100%)",
          }}
        />
      </div>

      {/* ================= Main Content ================= */}
      <div className="relative z-20 w-full h-full px-5 sm:px-8 md:px-10 lg:px-16 xl:px-24">
        {/* ================= Hero Area ================= */}
        <div className="h-full flex items-center">
          {/* ================= Grid ================= */}
          <div
            className="
              w-full
              grid lg:grid-cols-12
              gap-10 lg:gap-8 xl:gap-12
              items-center
            "
          >
            {/* ================= LEFT ================= */}
            <div
              className="
                lg:col-span-8
                text-center lg:text-left
                mx-auto lg:mx-0
              "
            >
              {/* ================= Eyebrow ================= */}
              <div className="mb-[22px] sm:mb-[26px]">
                <span
                  style={{
                    fontFamily: '"Poppins", sans-serif',
                    fontWeight: 500,
                    letterSpacing: "2px",
                    color: "#E5C484",
                  }}
                  className="
                    text-[12px]
                    sm:text-[14px]
                    leading-[14px]
                    uppercase
                  "
                >
                  GET IN TOUCH
                </span>
              </div>

              {/* ================= Heading ================= */}
              <div className="mb-[18px] sm:mb-[22px]">
                <h1
                  style={{
                    fontFamily: '"Poppins", sans-serif',
                    fontWeight: 600,
                  }}
                  className="
                    text-[34px]
                    sm:text-[42px]
                    lg:text-[48px]
                    xl:text-[54px]
                    2xl:text-[60px]
                    leading-[118%]
                    lg:leading-[64px]
                    tracking-[-1px]
                    text-[#F5F5F5]
                  "
                >
                  We're Here to Help You Build
                </h1>

                <h1
                  style={{
                    fontFamily: '"Poppins", sans-serif',
                    fontWeight: 600,
                    background:
                      "linear-gradient(90deg, #E5C484 0%, #C8A96B 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                  className="
                    text-[34px]
                    sm:text-[42px]
                    lg:text-[48px]
                    xl:text-[54px]
                    2xl:text-[60px]
                    leading-[118%]
                    lg:leading-[64px]
                    tracking-[-1px]
                  "
                >
                  Better Institutions.
                </h1>
              </div>

              {/* ================= Description ================= */}
              <p
                className="
                  max-w-[620px]
                  mx-auto lg:mx-0
                  mb-[30px]
                  sm:mb-[38px]
                  text-[15px]
                  sm:text-[16px]
                  lg:text-[17px]
                  leading-[180%]
                  lg:leading-[32px]
                  text-[rgba(255,255,255,0.78)]
                "
                style={{
                  fontFamily: '"Poppins", sans-serif',
                  fontWeight: 400,
                }}
              >
                Have questions or ready to start your school setup journey? Our
                team of veteran academic consultants is just a message away.
              </p>

              {/* ================= Contact Info ================= */}
              <div
                className="
                  flex flex-col sm:flex-row
                  items-start
                  sm:items-center
                  lg:items-start
                  justify-center lg:justify-start
                  gap-6 sm:gap-10 lg:gap-12
                  mt-8
                  w-full
                "
              >
                {/* ================= Phone ================= */}
                <div className="flex items-center gap-4 w-full sm:w-auto">
                  <div
                    className="
                      w-11 h-11
                      rounded-full
                      border border-[#E5C484]/25
                      bg-[#E5C484]/5
                      flex items-center justify-center
                      text-[#E5C484]
                      shrink-0
                    "
                  >
                    <Phone className="h-5 w-5" strokeWidth={1.5} />
                  </div>

                  <div className="flex flex-col justify-center text-left">
                    <p
                      className="
                        text-[11px]
                        uppercase
                        tracking-[2px]
                        text-gray-500
                        font-semibold
                        mb-1
                        leading-none
                      "
                      style={{
                        fontFamily: '"Poppins", sans-serif',
                      }}
                    >
                      CALL US
                    </p>

                    <a
                      href="tel:+917738048925"
                      className="
                        text-white
                        hover:text-[#E5C484]
                        font-medium
                        text-[15px]
                        lg:text-[17px]
                        leading-none
                        transition-colors
                        duration-200
                      "
                      style={{
                        fontFamily: '"Poppins", sans-serif',
                      }}
                    >
                      +91 79 7710 5170
                    </a>
                  </div>
                </div>

                {/* ================= Email ================= */}
                <div className="flex items-center gap-4 w-full sm:w-auto">
                  <div
                    className="
                      w-11 h-11
                      rounded-full
                      border border-[#E5C484]/25
                      bg-[#E5C484]/5
                      flex items-center justify-center
                      text-[#E5C484]
                      shrink-0
                    "
                  >
                    <Mail className="h-5 w-5" strokeWidth={1.5} />
                  </div>

                  <div className="flex flex-col justify-center text-left">
                    <p
                      className="
                        text-[11px]
                        uppercase
                        tracking-[2px]
                        text-gray-500
                        font-semibold
                        mb-1
                        leading-none
                      "
                      style={{
                        fontFamily: '"Poppins", sans-serif',
                      }}
                    >
                      EMAIL US
                    </p>

                    <a
                      href="mailto:support@eduwizer.com"
                      className="
                        text-white
                        hover:text-[#E5C484]
                        font-medium
                        text-[15px]
                        lg:text-[17px]
                        leading-none
                        transition-colors
                        duration-200
                      "
                      style={{
                        fontFamily: '"Poppins", sans-serif',
                      }}
                    >
                      support@eduwizer.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* ================= RIGHT CARD ================= */}
            <div
              className="
                lg:col-span-4
                lg:justify-self-end
                w-full
                max-w-[480px]
                mx-auto
              "
            >
              <div
                className="
                  relative
                  overflow-hidden
                  rounded-[24px]
                  border border-[#E5C484]/15
                  bg-black/40
                  backdrop-blur-md
                  p-6 lg:p-7
                "
              >
                {/* ================= Glow ================= */}
                <div className="absolute -top-20 -right-20 w-48 h-48 bg-[#E5C484]/10 rounded-full blur-3xl pointer-events-none"></div>

                {/* ================= Card Content ================= */}
                <div
                  className="
                    relative z-10
                    flex flex-col
                    gap-4
                    items-start
                  "
                >
                  {/* ================= Icon ================= */}
                  <div
                    className="
                      w-10 h-10
                      rounded-xl
                      bg-[#E5C484]/10
                      border border-[#E5C484]/20
                      flex items-center justify-center
                      text-[#E5C484]
                      shrink-0
                    "
                  >
                    <Calendar className="h-4 w-4" strokeWidth={1.5} />
                  </div>

                  {/* ================= Text ================= */}
                  <div className="flex-1 w-full">
                    <h3
                      style={{
                        fontFamily: '"Poppins", sans-serif',
                        fontWeight: 600,
                      }}
                      className="
                        text-[22px]
                        sm:text-[26px]
                        lg:text-[22px]
                        xl:text-[26px]
                        leading-[130%]
                        tracking-[-0.5px]
                        text-white
                        mb-2
                      "
                    >
                      Book a Free Consultation
                    </h3>

                    <p
                      className="
                        text-[14px]
                        sm:text-[15px]
                        lg:text-[14px]
                        xl:text-[15px]
                        leading-[170%]
                        text-[rgba(255,255,255,0.65)]
                        mb-0
                      "
                      style={{
                        fontFamily: '"Poppins", sans-serif',
                        fontWeight: 400,
                      }}
                    >
                      Schedule a 30-min strategy call with our education experts
                      to discuss your vision.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* ================= END RIGHT CARD ================= */}
          </div>
        </div>
      </div>
    </section>
  );
}

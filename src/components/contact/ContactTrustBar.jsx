import React from "react";
import { Clock, Users, Shield, Calendar } from "lucide-react";

export default function ContactTrustBar() {
  const features = [
    {
      Icon: Clock,
      title: "Quick Response",
      description: "We reply within 24 hours",
    },
    {
      Icon: Users,
      title: "Expert Guidance",
      description: "Talk to school setup veterans",
    },
    {
      Icon: Shield,
      title: "100% Confidential",
      description: "Your information is safe",
    },
    {
      Icon: Calendar,
      title: "Free Consultation",
      description: "No obligation, just advice",
    },
  ];

  return (
    <section className="py-7 sm:py-8 lg:py-5 border-y border-[#E5C484]/15 bg-[#17181A] text-white overflow-hidden">
      <div className="max-w-[1680px] mx-auto px-5 sm:px-8 lg:px-16 xl:px-20">
        {/* GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6 2xl:gap-8">
          {features.map(({ Icon, title, description }, index) => (
            <div
              key={index}
              className="
                relative
                flex flex-col
                items-center
                text-center
                rounded-2xl
                border border-[#E5C484]/10
                bg-[#1C1D20]
                px-4 py-3
                lg:px-5 lg:py-2
                2xl:px-6
                sm:border-0
                sm:bg-transparent
                transition-all duration-300
              "
            >
              {/* Icon */}
              <div
                className="
                  w-11 h-11
                  sm:w-12 sm:h-12
                  lg:w-10 lg:h-10
                  2xl:w-11 2xl:h-11
                  rounded-full
                  flex items-center justify-center
                  bg-[#E5C484]/10
                  border border-[#E5C484]/15
                  mb-2 lg:mb-3
                  shrink-0
                "
              >
                <Icon
                  className="
                    h-5 w-5
                    sm:h-6 sm:w-6
                    lg:h-5 lg:w-5
                    text-[#E5C484]
                  "
                  strokeWidth={1.5}
                />
              </div>

              {/* Content */}
              <div className="w-full">
                {/* Title */}
                <h4
                  className="
                    font-semibold
                    text-[13px]
                    sm:text-[14px]
                    lg:text-[14px]
                    2xl:text-[15px]
                    tracking-[1.8px]
                    uppercase
                    text-white
                    leading-[1.4]
                    mb-1
                  "
                  style={{
                    fontFamily: '"Poppins", sans-serif',
                  }}
                >
                  {title}
                </h4>

                {/* Description */}
                <p
                  className="
                    text-[13px]
                    sm:text-[14px]
                    lg:text-[14px]
                    2xl:text-[15px]
                    leading-[24px]
                    lg:leading-[26px]
                    2xl:leading-[28px]
                    text-[#8B93A1]
                    max-w-[220px]
                    mx-auto
                  "
                  style={{
                    fontFamily: '"Poppins", sans-serif',
                    fontWeight: 400,
                  }}
                >
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

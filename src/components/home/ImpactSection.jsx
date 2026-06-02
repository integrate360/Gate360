import React from "react";
import { Sparkles } from "lucide-react";
import msmeLogo from "../../assets/MSME (1).png";
import forbesLogo from "../../assets/Forbes (1).png";
import etLogo from "../../assets/The Economic Times (1).png";
import assochamLogo from "../../assets/ASSOCHAM (1).png";
import educationworldLogo from "../../assets/EducationWorld (1).png";
import businessTimesLogo from "../../assets/ChatGPT_Image_May_22__2026__02_10_33_PM-removebg-preview.png";

const achievements = [
  {
    logo: msmeLogo,
    title: "MSME REGISTERED\n& CERTIFIED",
    logoHeight: "82px",
  },
  {
    logo: forbesLogo,
    title: "FEATURED IN\nFORBES INDIA",
    logoHeight: "70px",
  },
  {
    logo: etLogo,
    title: "RECOGNIZED BY THE\nECONOMIC TIMES",
    logoHeight: "68px",
  },
  {
    logo: assochamLogo,
    title: "EDUCATION EXCELLENCE\nPARTNER",
    logoHeight: "75px",
  },
  {
    logo: educationworldLogo,
    title: "AWARDED FOR EXCELLENCE\nIN EDUCATION",
    logoHeight: "65px",
  },
  {
    logo: businessTimesLogo,
    title: "FEATURED IN\nBUSINESS TIMES",
    logoHeight: "70px",
  },
];

const ImpactSection = () => {
  return (
    <section className="w-full bg-[#F7F4EF] overflow-hidden">
      <div className="w-full max-w-[1680px] mx-auto px-5 sm:px-8 lg:px-16 xl:px-20 py-16 sm:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-16 items-start lg:items-center">
          {/* ================= LEFT CONTENT ================= */}
          <div
            className="
              lg:col-span-4
              flex flex-col
              items-center lg:items-start
              text-center lg:text-left
            "
          >
            {/* Eyebrow */}
            <span
              className="
                inline-flex
                items-center
                gap-2
                mb-[22px]
                text-[12px]
                sm:text-[14px]
                font-medium
                tracking-[2px]
                uppercase
              "
              style={{
                color: "#C8A96B",
                fontFamily: '"Poppins", sans-serif',
              }}
            >
              <Sparkles size={15} strokeWidth={2.5} />
              OUR IMPACT
            </span>

            {/* Heading */}
            <h2
              className="
                font-semibold
                mb-[22px]
                text-[34px]
                sm:text-[42px]
                lg:text-[52px]
                xl:text-[56px]
                2xl:text-[60px]
                leading-[118%]
                lg:leading-[64px]
                tracking-[-1px]
                text-[#121414]
              "
              style={{
                fontFamily: '"Poppins", sans-serif',
              }}
            >
              Trusted.
              <br />
              Respected.
              <br />
              <span
                style={{
                  background:
                    "linear-gradient(90deg, #D5B584 0%, #BE9B5F 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Recognized.
              </span>
            </h2>

            {/* Description */}
            <p
              className="
                text-[15px]
                sm:text-[16px]
                lg:text-[17px]
                leading-[180%]
                lg:leading-[32px]
                text-[#5C5A54]
                max-w-[520px]
                mx-auto lg:mx-0
                mb-2
              "
              style={{
                fontFamily: '"Poppins", sans-serif',
                fontWeight: 400,
              }}
            >
              Our partnerships and achievements reflect our commitment to
              transforming education and building the institutions of tomorrow
              across global landscapes.
            </p>
          </div>

          {/* ================= RIGHT LOGOS ================= */}
          <div
            className="
              lg:col-span-8
              grid
              grid-cols-2
              sm:grid-cols-3
              lg:grid-cols-4
              gap-x-6
              sm:gap-x-8
              xl:gap-x-10
              gap-y-10
              sm:gap-y-12
              mt-2 lg:mt-0
              w-full
              items-start
            "
          >
            {achievements.map((item, index) => (
              <div
                key={index}
                className="
                  flex flex-col
                  items-center
                  text-center
                  group
                  min-w-0
                "
              >
                {/* ================= LOGO BOX ================= */}
                <div
                  className="
                    h-[72px]
                    sm:h-[84px]
                    lg:h-[90px]
                    w-full
                    flex items-end justify-center
                    mb-4
                  "
                >
                  <img
                    src={item.logo}
                    alt={item.title.replace("\n", " ")}
                    style={{
                      maxHeight: item.logoHeight,
                      width: "auto",
                    }}
                    className="
                      max-w-full
                      object-contain
                      transition-transform
                      duration-300
                      group-hover:scale-105
                    "
                  />
                </div>

                {/* ================= TEXT ================= */}
                <p
                  className="
                    text-[#5C5A54]
                    text-[10px]
                    sm:text-[11px]
                    lg:text-[12px]
                    font-medium
                    leading-[160%]
                    tracking-[1.5px]
                    uppercase
                  "
                  style={{
                    fontFamily: '"Poppins", sans-serif',
                  }}
                >
                  {item.title.split("\n").map((line, i) => (
                    <span
                      key={i}
                      className="block whitespace-normal sm:whitespace-nowrap"
                    >
                      {line}
                    </span>
                  ))}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;

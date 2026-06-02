import { Link } from "react-router-dom";
import { Play, MoveRight } from "lucide-react";
import heroBg from "../../assets/image.png";

const stats = [
  { value: "8+", label: "Years of Excellence" },
  { value: "150+", label: "Institutions Partnered" },
  { value: "12+", label: "Countries Presence" },
  { value: "100%", label: "Commitment to Impact" },
];

export default function HeroSection() {
  return (
    <section
      className="w-full flex flex-col overflow-hidden"
      style={{ backgroundColor: "#0D0E0F" }}
    >
      {/* ================= HERO ================= */}
      <div
        className="
          relative
          h-screen
          lg:h-[94vh]
          min-h-[720px]
          max-h-[1080px]
          overflow-hidden
        "
      >
        {/* ================= Background ================= */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroBg}
            alt="Hero Background"
            className="w-full h-full object-cover object-center"
          />

          {/* Main Overlay */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(13,14,15,0.52) 0%, rgba(13,14,15,0.82) 70%, rgba(13,14,15,1) 100%)",
            }}
          />

          {/* Side Overlay */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, rgba(13,14,15,0.55) 0%, rgba(13,14,15,0.18) 45%, rgba(13,14,15,0.10) 100%)",
            }}
          />
        </div>

        {/* ================= Content ================= */}
        <div
          className="
            relative z-10
            h-full
            w-full
            max-w-[1680px]
            mx-auto
            flex flex-col
            items-center justify-center
            text-center
            px-5 sm:px-8 lg:px-16 xl:px-20
          "
        >
          {/* ================= Eyebrow ================= */}
          <span
            className="
              text-[12px]
              sm:text-[14px]
              font-medium
              uppercase
              tracking-[2px]
              mb-[22px]
              sm:mb-[26px]
            "
            style={{
              color: "#E5C484",
              fontFamily: '"Poppins", sans-serif',
            }}
          >
            END TO END SOLUTIONS
          </span>

          {/* ================= Heading ================= */}
          <div className="max-w-[1280px] mx-auto mb-[18px] sm:mb-[22px] overflow-visible">
            {/* WHITE */}
            <h1
              className="
                font-semibold
                text-[34px]
                sm:text-[42px]
                lg:text-[52px]
                xl:text-[56px]
                2xl:text-[60px]
                leading-[118%]
                lg:leading-[64px]
                tracking-[-1px]
                px-[0.04em]
                text-[#F5F5F5]
              "
              style={{
                fontFamily: '"Poppins", sans-serif',
              }}
            >
              Building Stronger Institutions.
            </h1>

            {/* GOLD */}
            <h1
              className="
                font-semibold
                text-[34px]
                sm:text-[42px]
                lg:text-[52px]
                xl:text-[56px]
                2xl:text-[60px]
                leading-[118%]
                lg:leading-[64px]
                tracking-[-1px]
                px-[0.04em]
              "
              style={{
                fontFamily: '"Poppins", sans-serif',
                background: "linear-gradient(90deg, #E5C484 0%, #C8A96B 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Creating Better Futures.
            </h1>
          </div>

          {/* ================= Description ================= */}
          <p
            className="
              w-full
              max-w-[760px]
              mx-auto
              mb-[30px]
              sm:mb-[38px]
              text-[15px]
              sm:text-[16px]
              lg:text-[17px]
              leading-[180%]
              lg:leading-[32px]
              text-[rgba(255,255,255,0.78)]
              px-1
            "
            style={{
              fontFamily: '"Poppins", sans-serif',
              fontWeight: 400,
            }}
          >
            NG Eduwizer Global Services Ltd. provides strategic solutions for
            school startup, institutional growth, academic operations, and
            educational leadership.
          </p>

          {/* ================= Buttons ================= */}
          <div
            className="
              flex flex-col
              sm:flex-row
              items-center justify-center
              gap-4 sm:gap-5
              w-full
              sm:w-auto
            "
          >
            {/* Primary */}
            <Link
              to="/services"
              className="
                w-full sm:w-auto
                min-w-[250px]
                h-[54px]
                sm:h-[56px]
                flex items-center justify-center
                gap-3
                px-8
                text-[13px]
                sm:text-[14px]
                font-medium
                uppercase
                tracking-[2px]
                transition-all duration-300
                hover:opacity-90
                active:scale-[0.98]
                group
              "
              style={{
                backgroundColor: "#E5C484",
                color: "#121414",
                fontFamily: '"Poppins", sans-serif',
              }}
            >
              Explore Our Solutions
              <MoveRight
                size={18}
                strokeWidth={2}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

            {/* Secondary */}
            <a
              href="https://www.youtube.com/watch?v=Y3He6I-umv0"
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex items-center justify-center
                gap-3
                text-[13px]
                sm:text-[14px]
                font-medium
                uppercase
                tracking-[2px]
                transition-colors duration-300
                hover:text-[#E5C484]
                group
                cursor-pointer
              "
              style={{
                color: "#D0C5B5",
                fontFamily: '"Poppins", sans-serif',
              }}
            >
              <span
                className="
                  w-12 h-12
                  rounded-full
                  flex items-center justify-center
                  border
                  transition-all duration-300
                  group-hover:border-[#E5C484]
                  group-hover:bg-[rgba(229,196,132,0.08)]
                "
                style={{
                  borderColor: "rgba(229,196,132,0.35)",
                }}
              >
                <Play
                  size={16}
                  strokeWidth={1.5}
                  className="text-[#E5C484] fill-[#E5C484]"
                />
              </span>
              Watch Our Story
            </a>
          </div>
        </div>
      </div>

      {/* ================= STATS ================= */}
      <div
        className="w-full border-t border-b"
        style={{
          backgroundColor: "#0D0E0F",
          borderColor: "#222324",
        }}
      >
        {/* MOBILE */}
        <div className="lg:hidden">
          <div className="grid grid-cols-2">
            {stats.map(({ value, label }, i) => (
              <div
                key={label}
                className={`
                  flex flex-col
                  items-center justify-center
                  text-center

                  py-7 px-4

                  border-[#222324]

                  ${i % 2 !== 1 ? "border-r" : ""}
                  ${i < 2 ? "border-b" : ""}
                `}
              >
                <span
                  className="font-semibold leading-none mb-2"
                  style={{
                    fontSize: "34px",
                    color: "#E5C484",
                    fontFamily: '"Poppins", sans-serif',
                  }}
                >
                  {value}
                </span>

                <span
                  className="
                    text-[10px]
                    font-medium
                    tracking-[0.16em]
                    uppercase
                    leading-[160%]
                  "
                  style={{
                    color: "#998F81",
                    fontFamily: '"Poppins", sans-serif',
                  }}
                >
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* DESKTOP */}
        <div
          className="
            hidden lg:grid
            grid-cols-4
            max-w-[1680px]
            mx-auto
            px-5 sm:px-8 lg:px-16 xl:px-20
          "
        >
          {stats.map(({ value, label }, i) => (
            <div
              key={label}
              className={`
                flex flex-col
                items-center justify-center
                text-center
                py-10 xl:py-12
                px-4
                ${i !== stats.length - 1 ? "border-r border-[#222324]" : ""}
              `}
            >
              <span
                className="
                  font-semibold
                  leading-none
                  mb-3
                  text-[44px]
                  xl:text-[52px]
                "
                style={{
                  color: "#E5C484",
                  fontFamily: '"Poppins", sans-serif',
                }}
              >
                {value}
              </span>

              <span
                className="
                  text-[11px]
                  xl:text-[12px]
                  font-medium
                  tracking-[0.22em]
                  uppercase
                "
                style={{
                  color: "#998F81",
                  fontFamily: '"Poppins", sans-serif',
                }}
              >
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

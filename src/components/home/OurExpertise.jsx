import {
  Building2,
  Settings2,
  UserPlus,
  ClipboardCheck,
  GraduationCap,
  Globe,
  ArrowUpRight,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function OurExpertise() {
  const expertiseCards = [
    {
      icon: Building2,
      title: "School Setup & Establishment",
      description:
        "End-to-end support in setting up new institutions with strategic planning and flawless execution.",
    },
    {
      icon: Settings2,
      title: "School Management",
      description:
        "Comprehensive management solutions for efficient daily operations and sustainable institutional growth.",
    },
    {
      icon: UserPlus,
      title: "Recruitment & Leadership Hiring",
      description:
        "Specialized leadership hiring and academic recruitment tailored for elite institutions of all sizes.",
      externalUrl: "https://www.eduwizer.com/",
    },
    {
      icon: ClipboardCheck,
      title: "Academic Audit & Consulting",
      description:
        "Data-driven academic audits and professional consulting to enhance school performance and student outcomes.",
    },
    {
      icon: GraduationCap,
      title: "Teacher Training & Development",
      description:
        "Empowering educators through world class training modules and professional development programs.",
    },
    {
      icon: Globe,
      title: "Global Education Support",
      description:
        "Study abroad guidance, strategic international partnerships, and global admission ecosystem support.",
    },
  ];

  return (
    <section className="w-full relative bg-[#F7F4EF] py-20 lg:py-24 overflow-hidden font-poppins">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-[#D4AF37] blur-3xl" />
        <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-[#000000] blur-3xl" />
      </div>

      <div className="w-full max-w-[1680px] mx-auto px-5 sm:px-8 lg:px-16 xl:px-20 relative z-10">
        {/* ================= Heading ================= */}
        <div className="text-center mb-16 lg:mb-20">
          {/* Eyebrow */}
          <span
            className="
              inline-flex
              items-center
              gap-2
              uppercase
              tracking-[2px]
              text-[12px]
              sm:text-[14px]
              font-medium
              mb-[22px]
            "
            style={{
              color: "#C8A96B",
              fontFamily: '"Poppins", sans-serif',
            }}
          >
            <GraduationCap size={15} strokeWidth={2.5} />
            OUR EXPERTISE
          </span>

          {/* Heading */}
          <h2
            className="
    text-[#111111]
    font-semibold
    leading-[118%]
    tracking-[-0.5px]
    text-[28px]
    sm:text-[42px]
    lg:text-[52px]
    xl:text-[56px]
    2xl:text-[60px]
    max-w-[340px]
    sm:max-w-[900px]
    mx-auto
  "
            style={{
              fontFamily: '"Poppins", sans-serif',
            }}
          >
            {/* MOBILE */}
            <span className="sm:hidden">
              Complete Solutions
              <br />
              for the{" "}
              <span
                style={{
                  background:
                    "linear-gradient(90deg, #C9A86A 0%, #B89355 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Education Ecosystem
              </span>
            </span>

            {/* DESKTOP */}
            <span className="hidden sm:block">
              Complete Solutions for the
              <br />
              <span
                style={{
                  background:
                    "linear-gradient(90deg, #C9A86A 0%, #B89355 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Education Ecosystem
              </span>
            </span>
          </h2>

          {/* Divider */}
          <div className="w-20 h-[2px] bg-[#C9A86A] mx-auto mt-8 rounded-full" />
        </div>

        {/* ================= Cards ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7 xl:gap-8">
          {expertiseCards.map((card, index) => {
            const Icon = card.icon;

            return (
              <div
                key={index}
                className="
                  group
                  relative
                  bg-[#FAF8F3]
                  border border-[#E8DED0]
                  p-8 lg:p-10
                  min-h-[300px]
                  lg:min-h-[320px]
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)]
                  hover:border-[#C9A86A]
                  overflow-hidden
                "
              >
                {/* Hover Gradient */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-[#ffffff] to-[#f8f1e6]" />

                {/* Content */}
                <div className="relative z-10 flex flex-col h-full">
                  {/* Icon */}
                  <div
                    className="
                      w-14 h-14
                      rounded-full
                      bg-[#F3E7D3]
                      flex items-center justify-center
                      mb-7
                      group-hover:scale-110
                      transition-transform duration-500
                    "
                  >
                    <Icon
                      size={26}
                      strokeWidth={1.8}
                      className="text-[#C9A86A]"
                    />
                  </div>

                  {/* Title */}
                  <h3
                    className="
                      text-[24px]
                      sm:text-[26px]
                      lg:text-[30px]
                      leading-[125%]
                      tracking-[-0.5px]
                      font-semibold
                      text-[#111111]
                      mb-4
                    "
                    style={{
                      fontFamily: '"Poppins", sans-serif',
                    }}
                  >
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="
                      text-[15px]
                      sm:text-[16px]
                      lg:text-[17px]
                      leading-[180%]
                      lg:leading-[32px]
                      text-[#6A6965]
                      mb-8
                    "
                    style={{
                      fontFamily: '"Poppins", sans-serif',
                      fontWeight: 400,
                    }}
                  >
                    {card.description}
                  </p>

                  {/* Learn More */}
                  {card.externalUrl ? (
                    <a
                      href={card.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        mt-auto
                        inline-flex
                        items-center
                        gap-2
                        text-[#C9A86A]
                        font-medium
                        text-[13px]
                        sm:text-[14px]
                        uppercase
                        tracking-[2px]
                        group/link
                      "
                      style={{
                        fontFamily: '"Poppins", sans-serif',
                      }}
                    >
                      Learn More
                      <span className="transition-transform duration-300 group-hover/link:translate-x-1">
                        →
                      </span>
                    </a>
                  ) : (
                    <Link
                      to="/services"
                      className="
                        mt-auto
                        inline-flex
                        items-center
                        gap-2
                        text-[#C9A86A]
                        font-medium
                        text-[13px]
                        sm:text-[14px]
                        uppercase
                        tracking-[2px]
                        group/link
                      "
                      style={{
                        fontFamily: '"Poppins", sans-serif',
                      }}
                    >
                      Learn More
                      <span className="transition-transform duration-300 group-hover/link:translate-x-1">
                        →
                      </span>
                    </Link>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* ================= Bottom Button ================= */}
        <div className="flex justify-center mt-14 lg:mt-16">
          <Link
            to="/services"
            className="
              group
              bg-[#111111]
              hover:bg-[#1A1A1A]
              text-[#C8A96B]
              px-9 sm:px-10
              h-[54px] sm:h-[58px]
              uppercase
              tracking-[2px]
              text-[13px]
              sm:text-[14px]
              font-medium
              inline-flex
              items-center
              gap-3
              transition-all
              duration-300
              hover:scale-[1.02]
            "
            style={{
              fontFamily: '"Poppins", sans-serif',
            }}
          >
            Discover All Services
            <ArrowUpRight
              size={18}
              className="
                text-[#C8A96B]
                transition-transform
                duration-300
                group-hover:translate-x-1
                group-hover:-translate-y-1
              "
            />
          </Link>
        </div>
      </div>
    </section>
  );
}

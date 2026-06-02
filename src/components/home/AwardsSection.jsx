import React, { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Award, Trophy, Star, Medal } from "lucide-react";

import award1 from "../../assets/award1 (1).png";
import award2 from "../../assets/award1 (2).png";
import award3 from "../../assets/award1 (3).png";
import award4 from "../../assets/award1 (4).png";
import award5 from "../../assets/award1 (5).png";
import award6 from "../../assets/award1 (6).png";
import award7 from "../../assets/award1 (7).png";
import award8 from "../../assets/award1 (8).png";

const awards = [
  {
    image: award1,
    title: "Astral Global Awards 2025",
    subtitle: "Best School of Navi Mumbai",
    icon: Trophy,
  },
  {
    image: award2,
    title: "Astral Global Awards 2024",
    subtitle: "Rising Star Award of the Year",
    icon: Star,
  },
  {
    image: award8,
    title: "Astral Global Awards 2025",
    subtitle: "Integrity Award – Season 5",
    icon: Medal,
  },
  {
    image: award4,
    title: "International Achievers Award 2020",
    subtitle: "Outstanding Contribution to Education",
    icon: Medal,
    fit: "contain",
  },
  {
    image: award5,
    title: "Lifetime Achiever's Award",
    subtitle: "Pioneering Educational Innovation",
    icon: Trophy,
    fit: "contain",
  },
  {
    image: award6,
    title: "International Achievers Award 2020",
    subtitle: "Organized in Association with Dubai",
    icon: Star,
  },
  {
    image: award7,
    title: "Youth Politician Award",
    subtitle: "Empowering the Next Generation",
    icon: Award,
  },
  {
    image: award3,
    title: "प्रोtsahaan – Aster Global Awards",
    subtitle: "An Award for Excellent Educators",
    icon: Award,
  },
];

const AwardsSection = () => {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 5);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 5);

    const card = el.querySelector("[data-award-card]");
    if (!card) return;
    const cardWidth = card.offsetWidth;
    const gap = 24;
    const newIndex = Math.round(el.scrollLeft / (cardWidth + gap));
    setActiveIndex(Math.min(newIndex, awards.length - 1));
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener("scroll", checkScroll, { passive: true });
    window.addEventListener("resize", checkScroll);
    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, []);

  const scroll = (direction) => {
    const el = scrollRef.current;
    if (!el) return;
    const card = el.querySelector("[data-award-card]");
    const cardWidth = card?.offsetWidth || 380;
    const gap = 24;
    const scrollAmount = cardWidth + gap;
    el.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="awards-recognition"
      className="w-full relative overflow-hidden"
      style={{ backgroundColor: "#0F1012" }}
    >
      {/* Background decorative elements */}
      <div
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        style={{ overflow: "hidden" }}
      >
        <div
          className="absolute -top-[200px] -right-[200px] w-[500px] h-[500px] rounded-full opacity-[0.04]"
          style={{
            background: "radial-gradient(circle, #E5C484 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute -bottom-[150px] -left-[150px] w-[400px] h-[400px] rounded-full opacity-[0.04]"
          style={{
            background: "radial-gradient(circle, #E5C484 0%, transparent 70%)",
          }}
        />
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(229,196,132,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(229,196,132,0.3) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="w-full px-5 sm:px-8 lg:px-16 xl:px-24 py-16 sm:py-20 lg:py-28 relative z-10">
        {/* ── Section Header ── */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 lg:gap-10 mb-12 sm:mb-14 lg:mb-16">
          <div className="flex flex-col items-start text-left max-w-[860px]">
            {/* Eyebrow */}
            <span
              className="
                inline-flex items-center gap-2
                mb-5
                text-[11px]
                sm:text-[12px]
                font-semibold
                tracking-[0.3em]
                uppercase
              "
              style={{
                color: "#C8A96B",
                fontFamily: '"Poppins", sans-serif'
              }}
            >
              <Award size={14} strokeWidth={2.5} />
              Awards & Recognition
            </span>

            {/* Heading */}
            <h2
              className="
                font-bold
                leading-[1.15]
                text-[28px]
                sm:text-[36px]
                md:text-[42px]
                lg:text-[48px]
              "
              style={{
                color: "#FFFFFF",
                letterSpacing: "-0.02em",
                fontFamily: '"Poppins", sans-serif',
              }}
            >
              Celebrating{" "}
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #E5C484 0%, #D4A855 50%, #E5C484 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Excellence
              </span>{" "}
              through prestigious global awards
            </h2>

            {/* Subtitle */}
            <p
              className="
                mt-5
                leading-[1.8]
                text-[14px]
                sm:text-[15px]
                lg:text-[16px]
                max-w-[750px]
              "
              style={{
                color: "#999388",
                fontFamily: '"Poppins", sans-serif',
              }}
            >
              Featuring: Astral Global Awards <span className="mx-2 text-[#C8A96B] font-bold">|</span> प्रोtsahaan <span className="mx-2 text-[#C8A96B] font-bold">|</span> International Achiever’s Awards
            </p>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className="
                w-12 h-12 sm:w-[52px] sm:h-[52px]
                rounded-full
                flex items-center justify-center
                border
                transition-all duration-300
                cursor-pointer
                disabled:cursor-not-allowed
              "
              style={{
                backgroundColor: canScrollLeft
                  ? "rgba(229,196,132,0.1)"
                  : "rgba(255,255,255,0.03)",
                borderColor: canScrollLeft
                  ? "rgba(229,196,132,0.3)"
                  : "rgba(255,255,255,0.08)",
                color: canScrollLeft ? "#E5C484" : "rgba(255,255,255,0.2)",
              }}
              aria-label="Scroll left"
            >
              <ChevronLeft size={20} strokeWidth={2} />
            </button>

            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className="
                w-12 h-12 sm:w-[52px] sm:h-[52px]
                rounded-full
                flex items-center justify-center
                border
                transition-all duration-300
                cursor-pointer
                disabled:cursor-not-allowed
              "
              style={{
                backgroundColor: canScrollRight
                  ? "rgba(229,196,132,0.1)"
                  : "rgba(255,255,255,0.03)",
                borderColor: canScrollRight
                  ? "rgba(229,196,132,0.3)"
                  : "rgba(255,255,255,0.08)",
                color: canScrollRight ? "#E5C484" : "rgba(255,255,255,0.2)",
              }}
              aria-label="Scroll right"
            >
              <ChevronRight size={20} strokeWidth={2} />
            </button>
          </div>
        </div>

        {/* ── Awards Carousel ── */}
        <div
          ref={scrollRef}
          className="
            flex
            gap-5 sm:gap-6
            overflow-x-auto
            scroll-smooth
            pb-6
          "
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            WebkitOverflowScrolling: "touch",
            scrollSnapType: "x mandatory",
          }}
        >
          {awards.map((award, index) => {
            const IconComponent = award.icon;
            return (
              <a
                key={index}
                href="https://www.eduwizer.com/events-blogs"
                target="_blank"
                rel="noopener noreferrer"
                data-award-card
                className="
                  group
                  shrink-0
                  w-[300px] sm:w-[360px] lg:w-[400px]
                  rounded-[16px] sm:rounded-[20px]
                  border
                  flex flex-col
                  transition-all duration-500
                  relative
                  overflow-hidden
                  cursor-pointer
                  no-underline
                "
                style={{
                  backgroundColor: "rgba(255,255,255,0.025)",
                  borderColor: "rgba(255,255,255,0.06)",
                  scrollSnapAlign: "start",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor =
                    "rgba(229,196,132,0.04)";
                  e.currentTarget.style.borderColor =
                    "rgba(229,196,132,0.18)";
                  e.currentTarget.style.transform = "translateY(-6px)";
                  e.currentTarget.style.boxShadow =
                    "0 24px 64px rgba(0,0,0,0.35), 0 0 48px rgba(229,196,132,0.06)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor =
                    "rgba(255,255,255,0.025)";
                  e.currentTarget.style.borderColor =
                    "rgba(255,255,255,0.06)";
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                {/* Glow accent on hover */}
                <div
                  className="
                    absolute top-0 left-0 w-full h-[2px]
                    opacity-0 group-hover:opacity-100
                    transition-opacity duration-500
                    z-10
                  "
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, #E5C484, transparent)",
                  }}
                />

                {/* Award Image */}
                <div
                  className="
                    relative
                    w-full
                    aspect-[4/5]
                    overflow-hidden
                    bg-[#18191b]
                  "
                >
                  <img
                    src={award.image}
                    alt={award.title}
                    className={`
                      w-full h-full
                      transition-transform duration-700
                      group-hover:scale-105
                      ${award.fit === "contain" ? "object-contain bg-black" : "object-cover object-top"}
                    `}
                  />

                  {/* Gradient overlay at bottom of image */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(15,16,18,0.85) 0%, rgba(15,16,18,0.3) 30%, transparent 65%)",
                    }}
                  />

                  {/* Title & subtitle overlaid on bottom of image */}
                  <div className="absolute bottom-0 left-0 right-0 px-5 sm:px-6 pb-6 sm:pb-7 z-10">
                    <h3
                      className="
                        font-semibold
                        text-[15px] sm:text-[16px] lg:text-[17px]
                        leading-[1.4]
                        mb-2
                      "
                      style={{
                        color: "#FFFFFF",
                        fontFamily: '"Poppins", sans-serif',
                      }}
                    >
                      {award.title}
                    </h3>
                    <p
                      className="
                        text-[12px] sm:text-[13px]
                        leading-[1.65]
                      "
                      style={{
                        color: "#C4B89A",
                        fontFamily: '"Poppins", sans-serif',
                      }}
                    >
                   {award.subtitle}
                    </p>
                  </div>
                </div>
              </a>
            );
          })}
        </div>

        {/* ── Dot Indicators ── */}
        <div className="flex items-center justify-center gap-2 mt-8 sm:mt-10">
          {awards.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                const el = scrollRef.current;
                if (!el) return;
                const card = el.querySelector("[data-award-card]");
                if (!card) return;
                const cardWidth = card.offsetWidth;
                const gap = 24;
                el.scrollTo({
                  left: index * (cardWidth + gap),
                  behavior: "smooth",
                });
              }}
              className="
                transition-all duration-300
                rounded-full
                cursor-pointer
              "
              style={{
                width: activeIndex === index ? "28px" : "8px",
                height: "8px",
                backgroundColor:
                  activeIndex === index
                    ? "#E5C484"
                    : "rgba(255,255,255,0.12)",
              }}
              aria-label={`Go to award ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Hide scrollbar CSS */}
      <style>{`
        #awards-recognition .overflow-x-auto::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default AwardsSection;

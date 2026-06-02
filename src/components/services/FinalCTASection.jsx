import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function FinalCTASection() {
  return (
    <section className="relative overflow-hidden bg-[#0D0E0F] py-28 lg:py-36">
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[-120px] left-[-80px] w-[420px] h-[420px] bg-[#C8A96B]/10 blur-[140px] rounded-full" />
        <div className="absolute bottom-[-180px] right-[-100px] w-[480px] h-[480px] bg-[#C8A96B]/10 blur-[160px] rounded-full" />
      </div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="h-full w-full bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>

      <div className="relative z-10 max-w-[1150px] mx-auto px-6 text-center">
        {/* Small Label */}
        <span className="inline-block uppercase tracking-[2px] text-[#E5C484] text-[14px] font-semibold mb-6">
          Global Education Excellence
        </span>

        {/* Main Heading */}
        <h2 className="font-poppins font-semibold text-[#F5F5F5] leading-[1.2] tracking-[-1.5px] text-[36px] md:text-[54px] lg:text-[64px] max-w-[1100px] mx-auto">
          Ready to Architect
          <br />
          the Future of{" "}
          <span className="text-[#C8A96B] italic font-medium font-serif">Education?</span>
        </h2>

        {/* Description */}
        <p className="mt-8 text-[#D0C5B5] text-[16px] sm:text-[18px] leading-[1.8] max-w-[760px] mx-auto font-normal">
          Join the ranks of the world’s most prestigious institutions.
          <br className="hidden sm:block" />
          Your journey toward academic excellence begins with a strategic
          consultation.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mt-12">
          {/* Primary Button */}
          <Link
            to="/contact"
            className="
              group
              relative
              flex
              items-center
              justify-center
              gap-3
              bg-[#C8A96B]
              hover:bg-[#E5C484]
              text-[#402D00]
              px-10
              h-[56px]
              min-w-[280px]
              uppercase
              tracking-[2px]
              text-[15px]
              font-semibold
              transition-all
              duration-300
              rounded-[4px]
              shadow-[0_10px_40px_rgba(200,169,107,0.15)]
            "
          >
            Request Prospectus
            <ArrowUpRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>

          {/* Secondary Button */}
          <Link
            to="/contact"
            className="
              group
              relative
              flex
              items-center
              justify-center
              gap-3
              border
              border-[#C8A96B]/50
              hover:border-[#C8A96B]
              text-[#C8A96B]
              hover:bg-[#C8A96B]
              hover:text-[#402D00]
              px-10
              h-[56px]
              min-w-[280px]
              uppercase
              tracking-[2px]
              text-[15px]
              font-semibold
              transition-all
              duration-300
              rounded-[4px]
              backdrop-blur-sm
            "
          >
            Contact Advisory Team
            <ArrowUpRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}

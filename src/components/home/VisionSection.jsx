// import React from "react";
// import { Eye, ShieldCheck, Award, ArrowRight } from "lucide-react";
// import eduwizerLogo from "../../assets/eduwizer_logo.png";

// const VisionSection = () => {
//   return (
//     <section
//       id="our-vision"
//       className="w-full"
//       style={{ backgroundColor: "#17181A" }}
//     >
//       {/* ── Outer wrapper with responsive padding ── */}
//       <div className="w-full px-5 sm:px-8 lg:px-16 xl:px-24 py-16 sm:py-20 lg:py-24">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
//           {/* ── LEFT CONTENT (7 cols on lg) ── */}
//           <div className="lg:col-span-7 flex flex-col items-start text-left">
//             {/* Eyebrow */}
//             <span
//               className="inline-block mb-4 text-[11px] font-semibold tracking-[0.35em] uppercase"
//               style={{ color: "#E5C484" }}
//             >
//               Our Vision
//             </span>

//             {/* Heading */}
//             <h2
//               className="font-bold leading-[1.2] mb-6"
//               style={{
//                 fontSize: "clamp(28px, 4.5vw, 44px)",
//                 color: "#FFFFFF",
//                 letterSpacing: "-0.01em",
//               }}
//             >
//               Empowering Institutions.
//               <br />
//               Enriching <span style={{ color: "#E5C484" }}>Education.</span>
//             </h2>

//             {/* Description */}
//             <p
//               className="leading-[1.75] mb-8"
//               style={{
//                 fontSize: "clamp(13.5px, 1.6vw, 15px)",
//                 color: "#998F81",
//               }}
//             >
//               NG Eduwizor Global Services Ltd. is a Mumbai-based MNC with global
//               operations across Dubai, Canada, Singapore, China &amp; Europe. We
//               set up schools, build institutional excellence, and serve as
//               growth partners &amp; managers for many schools across India.
//             </p>

//             {/* Features (3-column layout on sm+, stacked on mobile) */}
//             <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10 w-full">
//               {/* Feature 1 */}
//               <div className="flex items-start gap-2.5">
//                 <span
//                   className="shrink-0 mt-[3px]"
//                   style={{ color: "#E5C484" }}
//                 >
//                   <Eye size={18} strokeWidth={1.8} />
//                 </span>
//                 <span
//                   className="text-[13px] sm:text-[13.5px] font-medium leading-[1.5]"
//                   style={{ color: "#FFFFFF" }}
//                 >
//                   Vision-Driven
//                   <br />
//                   Approach
//                 </span>
//               </div>

//               {/* Feature 2 */}
//               <div className="flex items-start gap-2.5">
//                 <span
//                   className="shrink-0 mt-[3px]"
//                   style={{ color: "#E5C484" }}
//                 >
//                   <ShieldCheck size={18} strokeWidth={1.8} />
//                 </span>
//                 <span
//                   className="text-[13px] sm:text-[13.5px] font-medium leading-[1.5]"
//                   style={{ color: "#FFFFFF" }}
//                 >
//                   Result-Oriented
//                   <br />
//                   Solutions
//                 </span>
//               </div>

//               {/* Feature 3 */}
//               <div className="flex items-start gap-2.5">
//                 <span
//                   className="shrink-0 mt-[3px]"
//                   style={{ color: "#E5C484" }}
//                 >
//                   <Award size={18} strokeWidth={1.8} />
//                 </span>
//                 <span
//                   className="text-[13px] sm:text-[13.5px] font-medium leading-[1.5]"
//                   style={{ color: "#FFFFFF" }}
//                 >
//                   Trusted by Leaders
//                   <br />
//                   in Education
//                 </span>
//               </div>
//             </div>

//             {/* CTA Button */}
//             <button
//               className="flex items-center gap-3 px-7 py-3 text-[12.5px] font-semibold
//                          tracking-[0.1em] uppercase transition-all duration-200
//                          hover:opacity-90 active:scale-95 group rounded-[3px]"
//               style={{ backgroundColor: "#E5C484", color: "#121414" }}
//             >
//               Know More About Us
//               <ArrowRight
//                 size={16}
//                 strokeWidth={2.2}
//                 className="group-hover:translate-x-1 transition-transform duration-200"
//               />
//             </button>
//           </div>

//           {/* ── RIGHT IMAGE (5 cols on lg) ── */}
//           <div className="lg:col-span-5 relative flex justify-center lg:justify-end w-full mt-6 lg:mt-0">
//             <div className="relative w-full max-w-[620px]">
//               {/* Meeting Image */}
//               <img
//                 src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop"
//                 alt="NG Eduwizor leadership meeting"
//                 className="w-full aspect-[16/10.5] object-cover rounded-[24px]"
//               />

//               {/* Glassmorphism Overlay Card */}
//               <div
//                 className="absolute -bottom-5 left-4 sm:left-[-20%] right-4 sm:right-auto
//                            backdrop-blur-md border rounded-[12px] p-4.5
//                            flex items-center gap-3.5 shadow-2xl"
//                 style={{
//                   backgroundColor: "rgba(13,14,15,0.72)",
//                   borderColor: "rgba(255,255,255,0.08)",
//                 }}
//               >
//                 {/* Logo Frame */}
//                 <div
//                   className="w-12 h-12 rounded-[6px] shrink-0 flex items-center justify-center p-1"
//                   style={{
//                     backgroundColor: "rgba(13,14,15,0.95)",
//                     border: "1px solid rgba(229,196,132,0.2)",
//                   }}
//                 >
//                   <img
//                     src={eduwizerLogo}
//                     alt=""
//                     className="w-full h-full object-contain"
//                     style={{ mixBlendMode: "screen" }}
//                   />
//                 </div>

//                 {/* Card Text */}
//                 <div className="flex flex-col text-left">
//                   <p className="text-[12.5px] font-medium leading-[1.5] text-white">
//                     Growth Partner &amp;
//                     <br />
//                     Manager of Many
//                     <br />
//                     Schools Across India
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default VisionSection;
import React from "react";
import { Eye, ShieldCheck, Award, ArrowRight } from "lucide-react";
import eduwizerLogo from "../../assets/eduwizer_logo.png";

const VisionSection = () => {
  return (
    <section
      id="our-vision"
      className="w-full"
      style={{ backgroundColor: "#17181A" }}
    >
      <div className="w-full px-5 sm:px-8 lg:px-16 xl:px-24 py-16 sm:py-20 lg:py-24">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

          {/* LEFT */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">

            <span
              className="
                inline-block
                mb-4
                text-[11px]
                sm:text-[12px]
                font-semibold
                tracking-[0.35em]
                uppercase
              "
              style={{
                color: "#C8A96B",
                fontFamily: '"Poppins", sans-serif'
              }}
            >
              Our Vision
            </span>

            <h2
              className="
                font-bold
                leading-[1.2]
                mb-6
                text-[30px]
                sm:text-[38px]
                md:text-[42px]
                lg:text-[44px]
              "
              style={{
                color: "#FFFFFF",
                letterSpacing: "-0.01em",
              }}
            >
              Empowering Institutions.
              <br />
              Enriching <span style={{ color: "#E5C484" }}>Education.</span>
            </h2>

            <p
              className="
                leading-[1.9]
                mb-8
                text-[14px]
                sm:text-[15px]
              "
              style={{
                color: "#998F81",
              }}
            >
              NG Eduwizor Global Services Ltd. is a Mumbai-based MNC with global
              operations across Dubai, Canada, Singapore, China & Europe. We
              set up schools, build institutional excellence, and serve as
              growth partners & managers for many schools across India.
            </p>

            {/* FEATURES */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10 w-full">

              <div className="flex items-start gap-2.5">
                <span
                  className="shrink-0 mt-[3px]"
                  style={{ color: "#E5C484" }}
                >
                  <Eye size={18} strokeWidth={1.8} />
                </span>

                <span
                  className="text-[13px] sm:text-[13.5px] font-medium leading-[1.5]"
                  style={{ color: "#FFFFFF" }}
                >
                  Vision-Driven
                  <br />
                  Approach
                </span>
              </div>

              <div className="flex items-start gap-2.5">
                <span
                  className="shrink-0 mt-[3px]"
                  style={{ color: "#E5C484" }}
                >
                  <ShieldCheck size={18} strokeWidth={1.8} />
                </span>

                <span
                  className="text-[13px] sm:text-[13.5px] font-medium leading-[1.5]"
                  style={{ color: "#FFFFFF" }}
                >
                  Result-Oriented
                  <br />
                  Solutions
                </span>
              </div>

              <div className="flex items-start gap-2.5">
                <span
                  className="shrink-0 mt-[3px]"
                  style={{ color: "#E5C484" }}
                >
                  <Award size={18} strokeWidth={1.8} />
                </span>

                <span
                  className="text-[13px] sm:text-[13.5px] font-medium leading-[1.5]"
                  style={{ color: "#FFFFFF" }}
                >
                  Trusted by Leaders
                  <br />
                  in Education
                </span>
              </div>
            </div>

            {/* BUTTON */}
            <button
              className="
                flex
                items-center
                gap-3
                px-6 sm:px-7
                py-3
                text-[12px] sm:text-[12.5px]
                font-semibold
                tracking-[0.1em]
                uppercase
                transition-all
                duration-200
                hover:opacity-90
                active:scale-95
                group
                rounded-[3px]
              "
              style={{
                backgroundColor: "#E5C484",
                color: "#121414",
              }}
            >
              Know More About Us

              <ArrowRight
                size={16}
                strokeWidth={2.2}
                className="group-hover:translate-x-1 transition-transform duration-200"
              />
            </button>
          </div>

          {/* RIGHT IMAGE */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end w-full mt-6 lg:mt-0">

            <div className="relative w-full max-w-[620px]">

              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop"
                alt="NG Eduwizor leadership meeting"
                className="
                  w-full
                  aspect-[16/10.5]
                  object-cover
                  rounded-[24px]
                "
              />

              {/* Overlay Card */}
              <div
                className="
                  absolute
                  -bottom-5
                  left-4
                  sm:left-[-20%]
                  right-4
                  sm:right-auto
                  backdrop-blur-md
                  border
                  rounded-[12px]
                  p-4
                  flex
                  items-center
                  gap-3.5
                  shadow-2xl
                "
                style={{
                  backgroundColor: "rgba(13,14,15,0.72)",
                  borderColor: "rgba(255,255,255,0.08)",
                }}
              >

                <div
                  className="
                    w-12
                    h-12
                    rounded-[6px]
                    shrink-0
                    flex
                    items-center
                    justify-center
                    p-1
                  "
                  style={{
                    backgroundColor: "rgba(13,14,15,0.95)",
                    border: "1px solid rgba(229,196,132,0.2)",
                  }}
                >
                  <img
                    src={eduwizerLogo}
                    alt=""
                    className="w-full h-full object-contain"
                    style={{ mixBlendMode: "screen" }}
                  />
                </div>

                <div className="flex flex-col text-left">
                  <p className="text-[12px] sm:text-[12.5px] font-medium leading-[1.5] text-white">
                    Growth Partner &
                    <br />
                    Manager of Many
                    <br />
                    Schools Across India
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
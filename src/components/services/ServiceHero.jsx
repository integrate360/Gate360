// import React from "react";

// const ServiceHero = () => {
//   return (
//     <section
//       className="relative min-h-[85vh] flex items-center overflow-hidden"
//       style={{ backgroundColor: "#0D0E0F" }}
//     >
//       {/* Background Image & Dual Gradient Overlays for realistic contrast */}
//       <div className="absolute inset-0 z-0">
//         <img
//           className="w-full h-full object-cover opacity-35"
//           src="https://lh3.googleusercontent.com/aida-public/AB6AXuDIH7vnI6r7xj__0DOuu0FO89Hi5HTCTvp2knfQQkvRk4mElsoK-6e2z6yIi3Asfg74rdAD3tLX7cg5qwGn4RV5aMyRWUjiEj-Yc1SEGo0oVO6G6gKZO0WRU3JaJqIKobdF4me_fs9RCaU3VBVX-57gAf44UlNfGzoN7ADe3FWf8AeE9WDyUISjUS2BHvOPw6YF-qdvLJSKLcqYqb3ozMzvM4K771fZ1oRIce7M0dt3ONwqR1O8BxvUVRBfHnQYAjmoCfbMQyrAnAE"
//           alt="Educational Institution"
//         />
//         {/* Horizontal overlay for text readability */}
//         <div
//           className="absolute inset-0 z-10"
//           style={{
//             background:
//               "linear-gradient(to right, rgba(13,14,15,0.95) 0%, rgba(13,14,15,0.8) 50%, rgba(13,14,15,0.3) 100%)",
//           }}
//         />
//         {/* Vertical overlay for bottom blend */}
//         <div
//           className="absolute inset-0 z-10"
//           style={{
//             background:
//               "linear-gradient(to bottom, rgba(13,14,15,0.2) 0%, rgba(13,14,15,0.85) 75%, rgba(13,14,15,1) 100%)",
//           }}
//         />
//       </div>

//       {/* Hero Content Container */}
//       <div className="relative z-20 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 w-full pt-36 pb-20">
//         <div className="flex flex-col gap-6 max-w-3xl">

//           {/* Breadcrumb matching design */}
//           <div className="flex items-center gap-2 text-[#E5C484] text-[10px] font-semibold tracking-[0.3em] uppercase">
//             <span>HOME</span>
//             <span className="text-[9px] opacity-60">›</span>
//             <span>OUR SERVICES</span>
//           </div>

//           {/* Heading */}
//           <h1
//             className="text-white font-bold leading-[1.1] tracking-tight"
//             style={{
//               fontSize: "clamp(36px, 5.2vw, 68px)",
//             }}
//           >
//             Complete Solutions for <br />
//             <span style={{ color: "#E5C484" }}>Stronger Institutions.</span>
//           </h1>

//           {/* Description */}
//           <p
//             className="text-base sm:text-lg leading-relaxed max-w-2xl"
//             style={{ color: "#998F81" }}
//           >
//             From school setup to leadership development, we provide end-to-end
//             solutions that help institutions build a strong foundation, drive
//             excellence, and create a lasting impact.
//           </p>

//           {/* Thin horizontal line */}
//           <div className="h-[1px] w-12 bg-[#E5C484]/40 my-3"></div>

//           {/* Stats Grid */}
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-6">

//             {/* Stat 1 */}
//             <div className="flex flex-col gap-1 border-l border-[#E5C484]/20 pl-6">
//               <span className="text-[40px] md:text-[48px] font-serif font-medium text-[#E5C484]">
//                 6+
//               </span>
//               <span className="text-[10px] font-semibold tracking-[0.18em] uppercase text-[#998F81]">
//                 Years of Excellence
//               </span>
//             </div>

//             {/* Stat 2 */}
//             <div className="flex flex-col gap-1 border-l border-[#E5C484]/20 pl-6">
//               <span className="text-[40px] md:text-[48px] font-serif font-medium text-[#E5C484]">
//                 250+
//               </span>
//               <span className="text-[10px] font-semibold tracking-[0.18em] uppercase text-[#998F81]">
//                 Institutions Partnered
//               </span>
//             </div>

//             {/* Stat 3 */}
//             <div className="flex flex-col gap-1 border-l border-[#E5C484]/20 pl-6">
//               <span className="text-[40px] md:text-[48px] font-serif font-medium text-[#E5C484]">
//                 12+
//               </span>
//               <span className="text-[10px] font-semibold tracking-[0.18em] uppercase text-[#998F81]">
//                 Countries Presence
//               </span>
//             </div>

//             {/* Stat 4 */}
//             <div className="flex flex-col gap-1 border-l border-[#E5C484]/20 pl-6">
//               <span className="text-[40px] md:text-[48px] font-serif font-medium text-[#E5C484]">
//                 100%
//               </span>
//               <span className="text-[10px] font-semibold tracking-[0.18em] uppercase text-[#998F81]">
//                 Commitment to Impact
//               </span>
//             </div>

//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ServiceHero;

// import React from "react";
// import { ArrowRight } from "lucide-react";

// const ServiceHero = () => {
//   return (
//     <section
//       className="relative min-h-screen overflow-hidden"
//       style={{ backgroundColor: "#0D0E0F" }}
//     >
//       {/* ================= Background ================= */}
//       <div className="absolute inset-0 z-0">
//         <img
//           src="https://lh3.googleusercontent.com/aida-public/AB6AXuDIH7vnI6r7xj__0DOuu0FO89Hi5HTCTvp2knfQQkvRk4mElsoK-6e2z6yIi3Asfg74rdAD3tLX7cg5qwGn4RV5aMyRWUjiEj-Yc1SEGo0oVO6G6gKZO0WRU3JaJqIKobdF4me_fs9RCaU3VBVX-57gAf44UlNfGzoN7ADe3FWf8AeE9WDyUISjUS2BHvOPw6YF-qdvLJSKLcqYqb3ozMzvM4K771fZ1oRIce7M0dt3ONwqR1O8BxvUVRBfHnQYAjmoCfbMQyrAnAE"
//           alt="Educational Institution"
//           className="absolute inset-0 w-full h-full object-cover"
//         />

//         {/* ===== Main Overlay ===== */}
//         <div
//           className="absolute inset-0"
//           style={{
//             background:
//               "linear-gradient(180deg, rgba(18,20,20,1) 0%, rgba(18,20,20,0.60) 50%, rgba(18,20,20,0.40) 100%)",
//           }}
//         />

//         {/* ===== Left Dark Overlay ===== */}
//         <div
//           className="absolute inset-0"
//           style={{
//             background:
//               "linear-gradient(90deg, rgba(18,20,20,0.72) 0%, rgba(18,20,20,0.28) 45%, rgba(18,20,20,0.08) 100%)",
//           }}
//         />
//       </div>

//       {/* ================= Main Content Container ================= */}
//       <div className="relative z-20 w-full px-5 sm:px-8 lg:px-16 xl:px-24">

//         {/* ================= Hero Area ================= */}
//         <div className="min-h-[800px] flex items-center">

//           {/* ================= Fixed Width Content ================= */}
//           <div className="w-full max-w-[1080px] lg:translate-y-[12px]">

//             {/* ================= Breadcrumb ================= */}
//             <div className="mb-[28px] flex items-center gap-[8px]">
//               <span
//                 style={{
//                   fontFamily: '"Poppins", sans-serif',
//                   fontWeight: 500,
//                   fontSize: "14px",
//                   lineHeight: "14px",
//                   letterSpacing: "2px",
//                   color: "#E5C484",
//                 }}
//               >
//                 HOME
//               </span>

//               <span
//                 style={{
//                   fontFamily: '"Poppins", sans-serif',
//                   fontWeight: 500,
//                   fontSize: "14px",
//                   lineHeight: "14px",
//                   color: "rgba(255,255,255,0.7)",
//                 }}
//               >
//                 /
//               </span>

//               <span
//                 style={{
//                   fontFamily: '"Poppins", sans-serif',
//                   fontWeight: 500,
//                   fontSize: "14px",
//                   lineHeight: "14px",
//                   letterSpacing: "2px",
//                   color: "rgba(255,255,255,0.92)",
//                 }}
//               >
//                 SERVICES
//               </span>
//             </div>

//             {/* ================= Heading ================= */}
//             <div className="mb-[24px]">

//               <h1
//                 style={{
//                   fontFamily: '"Poppins", sans-serif',
//                   fontWeight: 600,
//                   fontSize: "74px",
//                   lineHeight: "90px",
//                   letterSpacing: "-1.44px",
//                   color: "#F5F5F5",
//                 }}
//               >
//                 Comprehensive Solutions
//               </h1>

//               <h1
//                 style={{
//                   fontFamily: '"Poppins", sans-serif',
//                   fontWeight: 600,
//                   fontSize: "74px",
//                   lineHeight: "90px",
//                   letterSpacing: "-1.44px",
//                   background:
//                     "linear-gradient(90deg, #E5C484 0%, #C8A96B 100%)",
//                   WebkitBackgroundClip: "text",
//                   WebkitTextFillColor: "transparent",
//                 }}
//               >
//                 For Educational Excellence
//               </h1>
//             </div>

//             {/* ================= Description ================= */}
//             <p
//               className="max-w-[620px] mb-[40px]"
//               style={{
//                 fontFamily: '"Poppins", sans-serif',
//                 fontWeight: 400,
//                 fontSize: "18px",
//                 lineHeight: "38px",
//                 color: "rgba(255,255,255,0.78)",
//               }}
//             >
//               Architecting world-class educational institutions from vision to
//               reality. We provide the strategic blueprint, regulatory expertise,
//               and elite operational framework required to launch prestigious
//               global schools.
//             </p>

//             {/* ================= CTA ================= */}
//             <button
//               className="h-[56px] px-[40px]
//                          flex items-center justify-center gap-[8px]
//                          transition-all duration-300 hover:opacity-90"
//               style={{
//                 backgroundColor: "#C8A96B",
//               }}
//             >
//               <span
//                 style={{
//                   fontFamily: '"Poppins", sans-serif',
//                   fontWeight: 500,
//                   fontSize: "16px",
//                   lineHeight: "16px",
//                   letterSpacing: "2px",
//                   textTransform: "uppercase",
//                   color: "#402D00",
//                 }}
//               >
//                 Begin Your Legacy
//               </span>

//               <ArrowRight
//                 size={22}
//                 strokeWidth={1.8}
//                 color="#402D00"
//               />
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ServiceHero;
import React from "react";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ServiceHero = () => {
  const navigate = useNavigate();
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
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDIH7vnI6r7xj__0DOuu0FO89Hi5HTCTvp2knfQQkvRk4mElsoK-6e2z6yIi3Asfg74rdAD3tLX7cg5qwGn4RV5aMyRWUjiEj-Yc1SEGo0oVO6G6gKZO0WRU3JaJqIKobdF4me_fs9RCaU3VBVX-57gAf44UlNfGzoN7ADe3FWf8AeE9WDyUISjUS2BHvOPw6YF-qdvLJSKLcqYqb3ozMzvM4K771fZ1oRIce7M0dt3ONwqR1O8BxvUVRBfHnQYAjmoCfbMQyrAnAE"
          alt="Educational Institution"
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
              "linear-gradient(90deg, rgba(18,20,20,0.72) 0%, rgba(18,20,20,0.28) 45%, rgba(18,20,20,0.08) 100%)",
          }}
        />
      </div>

      {/* ================= Main Content Container ================= */}
      <div className="relative z-20 w-full h-full px-5 sm:px-8 md:px-10 lg:px-16 xl:px-24">

        {/* ================= Hero Area ================= */}
        <div className="h-full flex items-center">

          {/* ================= Fixed Width Content ================= */}
          <div
            className="
              w-full
              max-w-[1080px]
              pt-[90px]
              sm:pt-[96px]
              lg:pt-[82px]
              xl:pt-[70px]
              2xl:pt-0
            "
          >

            {/* ================= Breadcrumb ================= */}
            <div className="mb-[22px] sm:mb-[26px] flex items-center gap-[8px] flex-wrap">
              <span
                style={{
                  fontFamily: '"Poppins", sans-serif',
                  fontWeight: 500,
                  letterSpacing: "2px",
                  color: "#E5C484",
                }}
                className="text-[12px] sm:text-[14px] leading-[14px]"
              >
                HOME
              </span>

              <span
                style={{
                  fontFamily: '"Poppins", sans-serif',
                  fontWeight: 500,
                  color: "rgba(255,255,255,0.7)",
                }}
                className="text-[12px] sm:text-[14px] leading-[14px]"
              >
                /
              </span>

              <span
                style={{
                  fontFamily: '"Poppins", sans-serif',
                  fontWeight: 500,
                  letterSpacing: "2px",
                  color: "rgba(255,255,255,0.92)",
                }}
                className="text-[12px] sm:text-[14px] leading-[14px]"
              >
                SERVICES
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
                  lg:text-[52px]
                  xl:text-[56px]
                  2xl:text-[60px]
                  leading-[118%]
                  lg:leading-[64px]
                  tracking-[-1px]
                  text-[#F5F5F5]
                "
              >
                Comprehensive Solutions
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
                  lg:text-[52px]
                  xl:text-[56px]
                  2xl:text-[60px]
                  leading-[118%]
                  lg:leading-[64px]
                  tracking-[-1px]
                "
              >
                For Educational Excellence
              </h1>
            </div>

            {/* ================= Description ================= */}
            <p
              className="
                max-w-[620px]
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
              Architecting world-class educational institutions from vision to
              reality. We provide the strategic blueprint, regulatory expertise,
              and elite operational framework required to launch prestigious
              global schools.
            </p>

            {/* ================= CTA ================= */}
            <button
              onClick={() => navigate("/contact")}
              className="
                h-[54px]
                sm:h-[56px]
                w-full
                sm:w-fit
                px-[28px]
                sm:px-[40px]
                flex items-center justify-center gap-[8px]
                transition-all duration-300 hover:opacity-90
                cursor-pointer
              "
              style={{
                backgroundColor: "#C8A96B",
              }}
            >
              <span
                style={{
                  fontFamily: '"Poppins", sans-serif',
                  fontWeight: 500,
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  color: "#402D00",
                }}
                className="text-[13px] sm:text-[16px]"
              >
                Begin Your Legacy
              </span>

              <ArrowRight
                size={20}
                strokeWidth={1.8}
                color="#402D00"
              />
            </button>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;
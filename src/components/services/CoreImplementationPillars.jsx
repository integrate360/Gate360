// import React from "react";
// import {
//   ClipboardList,
//   Compass,
//   BookOpen,
//   Gavel,
//   Users,
//   Megaphone,
// } from "lucide-react";

// const pillars = [
//   {
//     icon: ClipboardList,
//     title: "Feasibility Study",
//     description:
//       "Deep market analysis, financial modeling, and demand forecasting to ensure long-term viability.",
//   },
//   {
//     icon: Compass,
//     title: "Infrastructure Planning",
//     description:
//       "Designing spaces that inspire learning, from smart labs to high-performance athletic facilities.",
//   },
//   {
//     icon: BookOpen,
//     title: "Curriculum Design",
//     description:
//       "Developing bespoke academic frameworks that meet international standards and local requirements.",
//   },
//   {
//     icon: Gavel,
//     title: "Regulatory Compliance",
//     description:
//       "Navigating legal hurdles and government approvals with localized expertise in 20+ regions.",
//   },
//   {
//     icon: Users,
//     title: "Recruitment",
//     description:
//       "Sourcing world-class leaders and educators through our global network of top-tier talent.",
//   },
//   {
//     icon: Megaphone,
//     title: "Branding & Marketing",
//     description:
//       "Positioning your institution as a premier destination to attract elite students and families.",
//   },
// ];

// const CoreImplementationPillars = () => {
//   return (
//     <section
//       className="w-full overflow-hidden"
//       style={{
//         background: "#050608",
//       }}
//     >
//       {/* ================= SECTION WRAPPER ================= */}
//       <div className="w-full px-5 sm:px-8 lg:px-16 xl:px-24 py-[88px]">

//         {/* ================= TOP CONTENT ================= */}
//         <div className="max-w-[760px] mx-auto text-center mb-[72px]">

//           {/* HEADING */}
//           <h2
//             className="
//               text-[34px]
//               sm:text-[42px]
//               lg:text-[48px]
//             "
//             style={{
//               fontFamily: '"Poppins", sans-serif',
//               fontWeight: 600,
//               lineHeight: "1.2",
//               letterSpacing: "-1.5px",
//               color: "#E3E2E2",
//             }}
//           >
//             Core Implementation{" "}
//             <span style={{ color: "#C8A96B" }}>
//               Pillars
//             </span>
//           </h2>

//           {/* DESCRIPTION */}
//           <p
//             className="mx-auto mt-[14px] max-w-[640px]"
//             style={{
//               fontFamily: '"Poppins", sans-serif',
//               fontWeight: 400,
//               fontSize: "18px",
//               lineHeight: "32px",
//               color: "#D0C5B5",
//             }}
//           >
//             Comprehensive end-to-end consulting for institutions
//             that refuse to compromise on quality.
//           </p>
//         </div>

//         {/* ================= GRID ================= */}
//         <div
//           className="
//             grid
//             grid-cols-1
//             md:grid-cols-2
//             xl:grid-cols-3
//             gap-[32px]
//           "
//         >
//           {pillars.map((item, index) => {
//             const Icon = item.icon;

//             return (
//               <div
//                 key={index}
//                 className="
//                   relative
//                   overflow-hidden
//                   rounded-[4px]
//                   border
//                   transition-all
//                   duration-300
//                   hover:-translate-y-1
//                 "
//                 style={{
//                   background: "#292A2A",
//                   borderColor: "rgba(77,70,58,0.30)",
//                   minHeight: "340px",
//                 }}
//               >
//                 {/* CARD INNER */}
//                 <div className="px-[40px] pt-[40px] pb-[44px] h-full flex flex-col">

//                   {/* ICON BOX */}
//                   <div
//                     className="
//                       w-[56px]
//                       h-[56px]
//                       rounded-[4px]
//                       flex
//                       items-center
//                       justify-center
//                       mb-[32px]
//                     "
//                     style={{
//                       background: "rgba(200,169,107,0.10)",
//                     }}
//                   >
//                     <Icon
//                       size={24}
//                       strokeWidth={1.8}
//                       color="#C8A96B"
//                     />
//                   </div>

//                   {/* TITLE */}
//                   <h3
//                     className="
//                       text-[32px]
//                       mb-[18px]
//                     "
//                     style={{
//                       fontFamily: '"Poppins", sans-serif',
//                       fontWeight: 500,
//                       lineHeight: "1.15",
//                       letterSpacing: "-1px",
//                       color: "#E3E2E2",
//                     }}
//                   >
//                     {item.title}
//                   </h3>

//                   {/* DESCRIPTION */}
//                   <p
//                     style={{
//                       fontFamily: '"Poppins", sans-serif',
//                       fontWeight: 400,
//                       fontSize: "16px",
//                       lineHeight: "34px",
//                       color: "#D0C5B5",
//                     }}
//                   >
//                     {item.description}
//                   </p>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CoreImplementationPillars;
import React from "react";
import {
  ClipboardList,
  Compass,
  BookOpen,
  Gavel,
  Users,
  Megaphone,
} from "lucide-react";

const pillars = [
  {
    icon: ClipboardList,
    title: "Feasibility Study",
    description:
      "Deep market analysis, financial modeling, and demand forecasting to ensure long-term viability.",
  },
  {
    icon: Compass,
    title: "Infrastructure Planning",
    description:
      "Designing spaces that inspire learning, from smart labs to high-performance athletic facilities.",
  },
  {
    icon: BookOpen,
    title: "Curriculum Design",
    description:
      "Developing bespoke academic frameworks that meet international standards and local requirements.",
  },
  {
    icon: Gavel,
    title: "Regulatory Compliance",
    description:
      "Navigating legal hurdles and government approvals with localized expertise in 20+ regions.",
  },
  {
    icon: Users,
    title: "Recruitment",
    description:
      "Sourcing world-class leaders and educators through our global network of top-tier talent.",
  },
  {
    icon: Megaphone,
    title: "Branding & Marketing",
    description:
      "Positioning your institution as a premier destination to attract elite students and families.",
  },
];

const CoreImplementationPillars = () => {
  return (
    <section
      className="w-full overflow-hidden"
      style={{
        background: "#050608",
      }}
    >
      {/* ================= SECTION WRAPPER ================= */}
      <div
        className="
          w-full
          px-5
          sm:px-8
          lg:px-16
          xl:px-24
          py-[70px]
          sm:py-[80px]
          lg:py-[88px]
        "
      >

        {/* ================= TOP CONTENT ================= */}
        <div
          className="
            max-w-[760px]
            mx-auto
            text-center
            mb-[52px]
            sm:mb-[60px]
            lg:mb-[72px]
          "
        >

          {/* HEADING */}
          <h2
            className="
              text-[28px]
              sm:text-[34px]
              lg:text-[40px]
            "
            style={{
              fontFamily: '"Poppins", sans-serif',
              fontWeight: 600,
              lineHeight: "1.15",
              letterSpacing: "-1px",
              color: "#E3E2E2",
            }}
          >
            Core Implementation{" "}
            <span style={{ color: "#C8A96B" }}>
              Pillars
            </span>
          </h2>

          {/* DESCRIPTION */}
          <p
            className="
              mx-auto
              mt-[12px]
              max-w-[640px]
              px-2
              sm:px-0
            "
            style={{
              fontFamily: '"Poppins", sans-serif',
              fontWeight: 400,
              fontSize: window.innerWidth < 640 ? "15px" : "16px",
              lineHeight: window.innerWidth < 640 ? "28px" : "30px",
              color: "#D0C5B5",
            }}
          >
            Comprehensive end-to-end consulting for institutions
            that refuse to compromise on quality.
          </p>
        </div>

        {/* ================= GRID ================= */}
        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            xl:grid-cols-3
            gap-[22px]
            sm:gap-[26px]
            lg:gap-[28px]
          "
        >
          {pillars.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="
                  relative
                  overflow-hidden
                  rounded-[4px]
                  border
                  transition-all
                  duration-300
                  hover:-translate-y-1
                "
                style={{
                  background: "#292A2A",
                  borderColor: "rgba(77,70,58,0.30)",
                  minHeight: window.innerWidth < 640 ? "280px" : "300px",
                }}
              >
                {/* CARD INNER */}
                <div
                  className="
                    px-[24px]
                    sm:px-[32px]
                    lg:px-[34px]
                    pt-[28px]
                    sm:pt-[34px]
                    lg:pt-[36px]
                    pb-[32px]
                    lg:pb-[36px]
                    h-full
                    flex
                    flex-col
                  "
                >

                  {/* ICON BOX */}
                  <div
                    className="
                      w-[50px]
                      h-[50px]
                      sm:w-[54px]
                      sm:h-[54px]
                      rounded-[4px]
                      flex
                      items-center
                      justify-center
                      mb-[24px]
                      sm:mb-[28px]
                    "
                    style={{
                      background: "rgba(200,169,107,0.10)",
                    }}
                  >
                    <Icon
                      size={22}
                      strokeWidth={1.8}
                      color="#C8A96B"
                    />
                  </div>

                  {/* TITLE */}
                  <h3
                    className="
                      text-[24px]
                      sm:text-[28px]
                      lg:text-[28px]
                      mb-[14px]
                    "
                    style={{
                      fontFamily: '"Poppins", sans-serif',
                      fontWeight: 500,
                      lineHeight: "1.15",
                      letterSpacing: "-0.5px",
                      color: "#E3E2E2",
                    }}
                  >
                    {item.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p
                    className="
                      text-[14px]
                      sm:text-[15px]
                      lg:text-[15px]
                    "
                    style={{
                      fontFamily: '"Poppins", sans-serif',
                      fontWeight: 400,
                      lineHeight: "30px",
                      color: "#D0C5B5",
                    }}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CoreImplementationPillars;
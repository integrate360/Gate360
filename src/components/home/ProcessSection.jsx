// import React from "react";
// import {
//   MessageCircle,
//   ClipboardList,
//   Building2,
//   Users,
//   BookOpen,
//   Rocket,
// } from "lucide-react";

// const processSteps = [
//   {
//     icon: MessageCircle,
//     title: "01. Consultation",
//     subtitle: "Requirement Analysis",
//   },
//   {
//     icon: ClipboardList,
//     title: "02. Planning",
//     subtitle: "Detailed Roadmap",
//   },
//   {
//     icon: Building2,
//     title: "03. Infrastructure",
//     subtitle: "Campus Design",
//   },
//   {
//     icon: Users,
//     title: "04. Recruitment",
//     subtitle: "Talent Acquisition",
//   },
//   {
//     icon: BookOpen,
//     title: "05. Academics",
//     subtitle: "Pedagogy Design",
//   },
//   {
//     icon: Rocket,
//     title: "06. Launch",
//     subtitle: "Operations Go-Live",
//     active: true,
//   },
// ];

// const ProcessSection = () => {
//   return (
//     <section
//       id="process"
//       className="w-full relative overflow-hidden bg-[#0B0C0C] py-[120px]"
//     >
//       <div className="w-full px-5 sm:px-8 lg:px-16 xl:px-24">
//         {/* HEADING */}
//         <div className="text-center mb-24">
//           <span className="text-[#E5C484] uppercase tracking-[5px] text-[14px] font-semibold block mb-4">
//             How We Work
//           </span>

//           <h2 className="text-white text-[48px] leading-[56px] font-semibold font-serif">
//             Our Step-by-Step School Setup Process
//           </h2>
//         </div>

//         {/* PROCESS WRAPPER */}
//         <div className="relative">
//           {/* TIMELINE LINE */}
//           <div className="hidden lg:block absolute top-12 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#E5C484] to-transparent" />

//           {/* STEPS */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-12 relative z-10">
//             {processSteps.map((step, index) => {
//               const Icon = step.icon;

//               return (
//                 <div key={index} className="text-center">
//                   {/* ICON BOX */}
//                   <div
//                     className={`
//                       w-24 h-24 rounded-full mx-auto mb-6
//                       flex items-center justify-center
//                       border-2 border-[#E5C484]/40
//                       shadow-lg transition-all duration-300
//                       ${
//                         step.active
//                           ? "bg-[#E5C484] shadow-[0_0_30px_rgba(212,166,61,0.4)]"
//                           : "bg-white backdrop-blur-xl"
//                       }
//                     `}
//                   >
//                     <Icon
//                       size={34}
//                       className={
//                         step.active ? "text-[#071B3B]" : "text-[#E5C484]"
//                       }
//                       strokeWidth={2}
//                     />
//                   </div>

//                   {/* TITLE */}
//                   <h4 className="text-white text-[15px] font-semibold mb-2 tracking-wide">
//                     {step.title}
//                   </h4>

//                   {/* SUBTITLE */}
//                   <p className="text-[#A5B4CB] text-sm">{step.subtitle}</p>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProcessSection;

import React from "react";
import {
  MessageCircle,
  ClipboardList,
  Building2,
  Users,
  BookOpen,
  Rocket,
  Workflow,
} from "lucide-react";

const processSteps = [
  {
    icon: MessageCircle,
    title: "01. Consultation",
    subtitle: "Requirement Analysis",
  },
  {
    icon: ClipboardList,
    title: "02. Planning",
    subtitle: "Detailed Roadmap",
  },
  {
    icon: Building2,
    title: "03. Infrastructure",
    subtitle: "Campus Design",
  },
  {
    icon: Users,
    title: "04. Recruitment",
    subtitle: "Talent Acquisition",
  },
  {
    icon: BookOpen,
    title: "05. Academics",
    subtitle: "Curriculum Framing",
  },
  {
    icon: Rocket,
    title: "06. Launch",
    subtitle: "Operations Go-Live",
    active: true,
  },
];

const ProcessSection = () => {
  return (
    <section
      id="process"
      className="
        w-full
        relative
        overflow-hidden
        bg-[#0B0C0C]
        py-[80px]
        sm:py-[100px]
        lg:py-[120px]
      "
    >
      <div className="w-full px-5 sm:px-8 lg:px-16 xl:px-24">

        {/* ================= HEADING ================= */}
        <div className="text-center mb-16 sm:mb-20 lg:mb-24">

          <span
            className="
              inline-flex
              items-center
              gap-2
              uppercase
              tracking-[4px]
              sm:tracking-[5px]
              text-[12px]
              sm:text-[14px]
              font-semibold
              mb-4
            "
            style={{
              color: "#C8A96B",
              fontFamily: '"Poppins", sans-serif'
            }}
          >
            <Workflow size={15} strokeWidth={2.5} />
            How We Work
          </span>

          <h2
            className="
              text-white
              text-[30px]
              sm:text-[38px]
              md:text-[42px]
              lg:text-[48px]
              leading-[1.2]
              lg:leading-[56px]
              font-semibold
              font-serif
              max-w-[980px]
              mx-auto
            "
          >
            Our Step-by-Step School Setup Process
          </h2>
        </div>

        {/* ================= PROCESS WRAPPER ================= */}
        <div className="relative">

          {/* ================= DESKTOP HORIZONTAL LINE ================= */}
          <div
            className="
              hidden
              lg:block
              absolute
              top-12
              left-0
              w-full
              h-[2px]
              bg-gradient-to-r
              from-transparent
              via-[#E5C484]
              to-transparent
            "
          />

          {/* ================= MOBILE / TABLET VERTICAL LINE ================= */}
          <div
            className="
    lg:hidden
    absolute
    top-0
    bottom-0
    left-[18%]
    sm:left-[22%]
    w-[2px]
    bg-gradient-to-b
    from-transparent
    via-[#E5C484]
    to-transparent
    opacity-70
  "
          />

          {/* ================= STEPS ================= */}
          <div
            className="
              relative
              z-10
              grid
              grid-cols-1
              sm:grid-cols-2
              md:grid-cols-3
              lg:grid-cols-6
              gap-y-14
              sm:gap-y-16
              gap-x-8
              lg:gap-12
            "
          >
            {processSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div
                  key={index}
                  className="
                    relative
                    lg:text-center
                  "
                >

                  {/* ================= MOBILE / TABLET LAYOUT ================= */}
                  <div
                    className="
                      flex
                      lg:hidden
                      items-center
                      justify-center
                      gap-6
                      w-full
                    "
                  >

                    {/* ================= ICON ================= */}
                    <div
                      className={`
                        relative
                        z-10
                        shrink-0
                        w-20
                        h-20
                        rounded-full
                        flex
                        items-center
                        justify-center
                        border-2
                        border-[#E5C484]/40
                        shadow-lg
                        transition-all
                        duration-300
                        ${step.active
                          ? "bg-[#E5C484] shadow-[0_0_30px_rgba(212,166,61,0.4)]"
                          : "bg-white backdrop-blur-xl"
                        }
                      `}
                    >
                      <Icon
                        size={28}
                        className={
                          step.active
                            ? "text-[#071B3B]"
                            : "text-[#E5C484]"
                        }
                        strokeWidth={2}
                      />
                    </div>

                    {/* ================= TEXT ================= */}
                    <div
                      className="
                        flex
                        flex-col
                        justify-center
                        text-left
                        min-w-[180px]
                      "
                    >

                      <h4
                        className="
                          text-white
                          text-[18px]
                          sm:text-[20px]
                          font-semibold
                          mb-2
                          tracking-wide
                          leading-tight
                        "
                      >
                        {step.title}
                      </h4>

                      <p
                        className="
                          text-[#A5B4CB]
                          text-[15px]
                          sm:text-[16px]
                          leading-[1.6]
                        "
                      >
                        {step.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* ================= DESKTOP LAYOUT ================= */}
                  <div
                    className="
                      hidden
                      lg:flex
                      flex-col
                      items-center
                      text-center
                    "
                  >

                    {/* ================= ICON ================= */}
                    <div
                      className={`
                        relative
                        z-10
                        w-24
                        h-24
                        rounded-full
                        mx-auto
                        mb-6
                        flex
                        items-center
                        justify-center
                        border-2
                        border-[#E5C484]/40
                        shadow-lg
                        transition-all
                        duration-300
                        ${step.active
                          ? "bg-[#E5C484] shadow-[0_0_30px_rgba(212,166,61,0.4)]"
                          : "bg-white backdrop-blur-xl"
                        }
                      `}
                    >
                      <Icon
                        size={34}
                        className={
                          step.active
                            ? "text-[#071B3B]"
                            : "text-[#E5C484]"
                        }
                        strokeWidth={2}
                      />
                    </div>

                    {/* ================= TITLE ================= */}
                    <h4
                      className="
                        text-white
                        text-[15px]
                        font-semibold
                        mb-2
                        tracking-wide
                      "
                    >
                      {step.title}
                    </h4>

                    {/* ================= SUBTITLE ================= */}
                    <p
                      className="
                        text-[#A5B4CB]
                        text-sm
                        leading-[1.6]
                      "
                    >
                      {step.subtitle}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
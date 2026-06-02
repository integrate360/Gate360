// import React from "react";
// import { Star, ArrowLeft, ArrowRight } from "lucide-react";

// const testimonials = [
//   {
//     name: "Dr. Arvind Mehta",
//     role: "Principal, Global Heights School",
//     image:
//       "https://lh3.googleusercontent.com/aida-public/AB6AXuDuEEjQuimwhlxb5uZS8Ob1xHkp_n-Bo-lZ6kAfBJ_Wv1DUnRZkjr6oS9tv6LQ74TQVEU0iCUXIxrwYQngglOYhLvRTUS4DI0QEn5B5EpklvtG6eQlHSVrRW_yNIh45CijaV89KGadFAirq1pBV9LUptMWUMOxz918uRxliC8Wf_sAnSvXK9CmLcVibPkHef_5dK-hxEeOgquzVIi5OSiyQtr63bgnWXvQH0z_1Nu206T9_Jd0vul7dUMMKoMaeJkoUFo7FhsOWTV4",
//     review:
//       "Eduwizer's comprehensive strategy allowed us to launch our international school 6 months ahead of schedule with full CBSE affiliation secured.",
//   },
//   {
//     name: "Sarah Thompson",
//     role: "Founder, Beacon Academy",
//     image:
//       "https://lh3.googleusercontent.com/aida-public/AB6AXuBKf3LdLoML6dJJ_hCVEOjySq87nr7bRsLkbEa21UeaZ5dZkwlyZKnDaNw7A2q3U7vhWttJpyuNe97KJrw9n0rcInzyu0MbiXe4oVEftHB45Gxe2l-vsL0hPUCqq0PHeR0Y7BjrBgzuc0emGdRHfQx_yFHgiSX0vraBAKpfulLiICHyMdJC9y6s8EWu5gsEVk9i-s4oxAkG-zefo-COetkTnkYWt5OIYoLFvQvKntaJfHq343jeKdTaJ_rIHKkNRrT0CkF3A686jRI",
//     review:
//       "Their recruitment process is unmatched. We were able to find a world-class leadership team that truly understands our unique pedagogical vision.",
//   },
//   {
//     name: "Robert Chen",
//     role: "Chairman, Elite Public School",
//     image:
//       "https://lh3.googleusercontent.com/aida-public/AB6AXuBHP92RpbFA7g7aqzMREeSKMN7dphHR_I4wHnTj7ZTguhn1_Cpws6pAwbPjI9ruim-pRWJVmTt_v-I-dh49hCEh6uoLi_VkRbbe13yA8oRvDkisPrFMpT9Yy8Lscw78myyuDLUSyy-JGBUuba8L_Z19IBYQ2gkFU4ed4ZrfdRDlNRGL2OS4O07Rh-Ho-TMBpmWU4Gx172W9MQMQ-7HRSzv45-2pYMcIIyt1sRnd3PCy6uYV2uYPK8tpv8LY3u5_3xvvprwki0oorHc",
//     review:
//       "From architectural layouts to ERP systems, every detail was handled with professional precision. Truly an elite consultancy service.",
//   },
//   {
//     name: "Dr. Meera Krishnan",
//     role: "Director, Silver Oaks International",
//     image:
//       "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150",
//     review:
//       "The school management framework provided by Eduwizer optimized our operations, reducing overhead costs by 20% while elevating student enrollment.",
//   },
//   {
//     name: "David Vance",
//     role: "Head of School, Oakridge Academy",
//     image:
//       "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150",
//     review:
//       "Their academic audits identified critical improvement areas in our curriculum delivery. The consulting advice was practical and highly impactful.",
//   },
//   {
//     name: "Alisha Kapoor",
//     role: "Trustee, Vanguard Global Schools",
//     image:
//       "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=150",
//     review:
//       "Partnering with Eduwizer for our teacher training modules refreshed our pedagogy. Our educators now bring world-class inquiry methods into their classrooms.",
//   },
// ];

// const TestimonialsSection = () => {
//   const scrollRef = React.useRef(null);

//   const scroll = (direction) => {
//     if (scrollRef.current) {
//       const cardWidth = scrollRef.current.firstChild.offsetWidth + 32; // card width + gap
//       const scrollAmount = direction === "left" ? -cardWidth : cardWidth;
//       scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
//     }
//   };

//   return (
//     <>
//       <style dangerouslySetInnerHTML={{ __html: `
//         .no-scrollbar::-webkit-scrollbar {
//           display: none;
//         }
//         .no-scrollbar {
//           -ms-overflow-style: none;
//           scrollbar-width: none;
//         }
//         @media (min-width: 1500px) {
//           .testimonial-card {
//             width: calc(25% - 24px) !important;
//             padding: 24px 20px !important;
//             min-height: 290px !important;
//           }
//           .testimonial-card .testimonial-text {
//             font-size: 13.5px !important;
//             line-height: 1.55 !important;
//             margin-bottom: 16px !important;
//           }
//           .testimonial-card .testimonial-stars {
//             margin-bottom: 12px !important;
//           }
//         }
//       ` }} />
//       <section id="testimonials" className="w-full bg-[#F7F4EF]">
//         <div className="w-full px-5 sm:px-8 lg:px-16 xl:px-24 py-16 sm:py-20 lg:py-24">
//           {/* HEADING */}
//           <div className="text-center mb-12 sm:mb-16">
//             <span
//               className="inline-block mb-4 text-[11px] font-semibold tracking-[0.35em] uppercase"
//               style={{ color: "#E5C484" }}
//             >
//               Success Stories
//             </span>

//             <h2
//               className="font-semibold text-center leading-[1.2] mb-6"
//               style={{
//                 fontSize: "clamp(30px, 4.5vw, 44px)",
//                 color: "#0B0B0B",
//                 letterSpacing: "-0.5px",
//               }}
//             >
//               Voices of Institutional Leaders
//             </h2>
//           </div>

//           {/* CARDS WITH LEFT/RIGHT BUTTONS */}
//           <div className="relative px-4 sm:px-12">
//             {/* Left Button */}
//             <button
//               onClick={() => scroll("left")}
//               className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-[#EAEAEE] hover:bg-[#D5B584] text-[#121414] hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer border border-[#E0DCD5]"
//               aria-label="Previous Testimonial"
//             >
//               <ArrowLeft size={18} strokeWidth={2} />
//             </button>

//             {/* Scroll Container */}
//             <div
//               ref={scrollRef}
//               className="flex overflow-x-auto gap-6 sm:gap-8 snap-x snap-mandatory scroll-smooth no-scrollbar py-6"
//             >
//               {testimonials.map((item, index) => (
//                 <div
//                   key={index}
//                   className="
//                     w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] testimonial-card
//                     flex-shrink-0
//                     snap-center
//                     relative
//                     bg-white
//                     border border-[#EAEAEE]
//                     rounded-[20px]
//                     p-8 sm:p-10
//                     shadow-[0_4px_25px_rgba(0,0,0,0.02)]
//                     transition-all
//                     duration-300
//                     hover:-translate-y-1.5
//                     hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)]
//                     flex flex-col
//                     justify-between
//                     min-h-[340px]
//                   "
//                 >
//                   <div>
//                     {/* STARS */}
//                     <div className="flex items-center gap-1 mb-6 testimonial-stars">
//                       {[...Array(5)].map((_, i) => (
//                         <Star
//                           key={i}
//                           size={17}
//                           fill="none"
//                           stroke="#E5C484"
//                           strokeWidth={2}
//                         />
//                       ))}
//                     </div>

//                     {/* REVIEW */}
//                     <p
//                       className="text-[#3A3A3A] leading-[1.75] italic mb-8 font-normal text-left testimonial-text"
//                       style={{ fontSize: "clamp(14px, 1.6vw, 15.5px)" }}
//                     >
//                       "{item.review}"
//                     </p>
//                   </div>

//                   {/* USER */}
//                   <div className="flex items-center gap-4 mt-auto">
//                     <img
//                       src={item.image}
//                       alt={item.name}
//                       className="w-12 h-12 rounded-full object-cover border border-black/5"
//                     />

//                     <div className="text-left">
//                       <h4 className="text-[#0B0B0B] text-[14.5px] font-bold leading-tight">
//                         {item.name}
//                       </h4>

//                       <p className="text-[#6E6E6E] text-[12px] leading-normal mt-0.5">
//                         {item.role}
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Right Button */}
//             <button
//               onClick={() => scroll("right")}
//               className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-[#EAEAEE] hover:bg-[#D5B584] text-[#121414] hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer border border-[#E0DCD5]"
//               aria-label="Next Testimonial"
//             >
//               <ArrowRight size={18} strokeWidth={2} />
//             </button>
//           </div>
//         </div>
//       </section>
//       <section className="w-full bg-[#0B0C0C] py-12 sm:py-14">
//         <div className="w-full px-5 sm:px-8 lg:px-16 xl:px-24 grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-6">
//           {/* Item 1 */}
//           <div className="text-center">
//             <h2 className="text-[#E5C484] text-[28px] sm:text-[32px] font-medium tracking-tight mb-1">
//               500+
//             </h2>
//             <p className="text-[#E5C484] text-[9.5px] sm:text-[10.5px] font-semibold tracking-[0.24em] uppercase opacity-85">
//               Schools Impacted
//             </p>
//           </div>

//           {/* Item 2 */}
//           <div className="text-center">
//             <h2 className="text-[#E5C484] text-[28px] sm:text-[32px] font-medium tracking-tight mb-1">
//               50K+
//             </h2>
//             <p className="text-[#E5C484] text-[9.5px] sm:text-[10.5px] font-semibold tracking-[0.24em] uppercase opacity-85">
//               Students Empowered
//             </p>
//           </div>

//           {/* Item 3 */}
//           <div className="text-center">
//             <h2 className="text-[#E5C484] text-[28px] sm:text-[32px] font-medium tracking-tight mb-1">
//               30+
//             </h2>
//             <p className="text-[#E5C484] text-[9.5px] sm:text-[10.5px] font-semibold tracking-[0.24em] uppercase opacity-85">
//               Awards & Recognitions
//             </p>
//           </div>

//           {/* Item 4 */}
//           <div className="text-center">
//             <h2 className="text-[#E5C484] text-[28px] sm:text-[32px] font-medium tracking-tight mb-1">
//               20+
//             </h2>
//             <p className="text-[#E5C484] text-[9.5px] sm:text-[10.5px] font-semibold tracking-[0.24em] uppercase opacity-85">
//               Industry Partnerships
//             </p>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default TestimonialsSection;
import React from "react";
import { Star, ArrowLeft, ArrowRight } from "lucide-react";

const testimonials = [
  {
    name: "Dr. Arvind Mehta",
    role: "Principal, Global Heights School",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDuEEjQuimwhlxb5uZS8Ob1xHkp_n-Bo-lZ6kAfBJ_Wv1DUnRZkjr6oS9tv6LQ74TQVEU0iCUXIxrwYQngglOYhLvRTUS4DI0QEn5B5EpklvtG6eQlHSVrRW_yNIh45CijaV89KGadFAirq1pBV9LUptMWUMOxz918uRxliC8Wf_sAnSvXK9CmLcVibPkHef_5dK-hxEeOgquzVIi5OSiyQtr63bgnWXvQH0z_1Nu206T9_Jd0vul7dUMMKoMaeJkoUFo7FhsOWTV4",
    review:
      "Eduwizer's comprehensive strategy allowed us to launch our international school 6 months ahead of schedule with full CBSE affiliation secured.",
  },
  {
    name: "Sarah Thompson",
    role: "Founder, Beacon Academy",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBKf3LdLoML6dJJ_hCVEOjySq87nr7bRsLkbEa21UeaZ5dZkwlyZKnDaNw7A2q3U7vhWttJpyuNe97KJrw9n0rcInzyu0MbiXe4oVEftHB45Gxe2l-vsL0hPUCqq0PHeR0Y7BjrBgzuc0emGdRHfQx_yFHgiSX0vraBAKpfulLiICHyMdJC9y6s8EWu5gsEVk9i-s4oxAkG-zefo-COetkTnkYWt5OIYoLFvQvKntaJfHq343jeKdTaJ_rIHKkNRrT0CkF3A686jRI",
    review:
      "Their recruitment process is unmatched. We were able to find a world-class leadership team that truly understands our unique pedagogical vision.",
  },
  {
    name: "Robert Chen",
    role: "Chairman, Elite Public School",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBHP92RpbFA7g7aqzMREeSKMN7dphHR_I4wHnTj7ZTguhn1_Cpws6pAwbPjI9ruim-pRWJVmTt_v-I-dh49hCEh6uoLi_VkRbbe13yA8oRvDkisPrFMpT9Yy8Lscw78myyuDLUSyy-JGBUuba8L_Z19IBYQ2gkFU4ed4ZrfdRDlNRGL2OS4O07Rh-Ho-TMBpmWU4Gx172W9MQMQ-7HRSzv45-2pYMcIIyt1sRnd3PCy6uYV2uYPK8tpv8LY3u5_3xvvprwki0oorHc",
    review:
      "From architectural layouts to ERP systems, every detail was handled with professional precision. Truly an elite consultancy service.",
  },
  {
    name: "Dr. Meera Krishnan",
    role: "Director, Silver Oaks International",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150",
    review:
      "The school management framework provided by Eduwizer optimized our operations, reducing overhead costs by 20% while elevating student enrollment.",
  },
  {
    name: "David Vance",
    role: "Head of School, Oakridge Academy",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150",
    review:
      "Their academic audits identified critical improvement areas in our curriculum delivery. The consulting advice was practical and highly impactful.",
  },
  {
    name: "Alisha Kapoor",
    role: "Trustee, Vanguard Global Schools",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=150",
    review:
      "Partnering with Eduwizer for our teacher training modules refreshed our pedagogy. Our educators now bring world-class inquiry methods into their classrooms.",
  },
];

const TestimonialsSection = () => {
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const cardWidth =
        scrollRef.current.firstChild.offsetWidth + 32;

      const scrollAmount =
        direction === "left"
          ? -cardWidth
          : cardWidth;

      scrollRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            .no-scrollbar::-webkit-scrollbar {
              display: none;
            }

            .no-scrollbar {
              -ms-overflow-style: none;
              scrollbar-width: none;
            }

            @media (min-width: 1500px) {
              .testimonial-card {
                width: calc(25% - 24px) !important;
                padding: 24px 20px !important;
                min-height: 290px !important;
              }

              .testimonial-card .testimonial-text {
                font-size: 13.5px !important;
                line-height: 1.55 !important;
                margin-bottom: 16px !important;
              }

              .testimonial-card .testimonial-stars {
                margin-bottom: 12px !important;
              }
            }
          `,
        }}
      />

      {/* ================= TESTIMONIALS ================= */}
      <section id="testimonials" className="w-full bg-[#F7F4EF]">

        <div
          className="
            w-full
            px-5
            sm:px-8
            lg:px-16
            xl:px-24
            py-16
            sm:py-20
            lg:py-24
          "
        >

          {/* ================= HEADING ================= */}
          <div className="text-center mb-12 sm:mb-14 lg:mb-16">

            <span
              className="
                inline-flex
                items-center
                gap-2
                mb-5
                text-[11px]
                sm:text-[12px]
                font-bold
                tracking-[0.25em]
                uppercase
              "
              style={{
                color: "#C8A96B",
                fontFamily: '"Poppins", sans-serif'
              }}
            >
              <Star size={13} strokeWidth={2.5} />
              Testimonials
            </span>

            <h2
              className="
                font-semibold
                text-center
                leading-[1.2]
                mb-6
              "
              style={{
                fontSize: "clamp(28px, 4vw, 44px)",
                color: "#0B0B0B",
                letterSpacing: "-0.5px",
              }}
            >
              Voices of Institutional Leaders
            </h2>
          </div>

          {/* ================= CARDS ================= */}
          <div className="relative px-0 sm:px-10 lg:px-12">

            {/* LEFT BUTTON */}
            <button
              onClick={() => scroll("left")}
              className="
                absolute
                left-0
                top-1/2
                -translate-y-1/2
                z-10
                hidden
                sm:flex
                w-10
                h-10
                lg:w-11
                lg:h-11
                rounded-full
                bg-[#EAEAEE]
                hover:bg-[#D5B584]
                text-[#121414]
                hover:text-white
                items-center
                justify-center
                transition-all
                duration-300
                shadow-sm
                hover:shadow-md
                cursor-pointer
                border
                border-[#E0DCD5]
              "
              aria-label="Previous Testimonial"
            >
              <ArrowLeft size={18} strokeWidth={2} />
            </button>

            {/* SCROLL CONTAINER */}
            <div
              ref={scrollRef}
              className="
                flex
                overflow-x-auto
                gap-5
                sm:gap-6
                lg:gap-8
                snap-x
                snap-mandatory
                scroll-smooth
                no-scrollbar
                py-4
                sm:py-6
              "
            >

              {testimonials.map((item, index) => (
                <div
                  key={index}
                  className="
                    w-[92%]
                    sm:w-[calc(50%-12px)]
                    md:w-[calc(50%-16px)]
                    xl:w-[calc(33.333%-16px)]
                    testimonial-card
                    flex-shrink-0
                    snap-center
                    relative
                    bg-white
                    border
                    border-[#EAEAEE]
                    rounded-[20px]
                    p-6
                    sm:p-8
                    lg:p-10
                    shadow-[0_4px_25px_rgba(0,0,0,0.02)]
                    transition-all
                    duration-300
                    hover:-translate-y-1.5
                    hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)]
                    flex
                    flex-col
                    justify-between
                    min-h-[300px]
                    sm:min-h-[320px]
                    lg:min-h-[340px]
                  "
                >

                  <div>

                    {/* STARS */}
                    <div className="flex items-center gap-1 mb-5 sm:mb-6 testimonial-stars">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          fill="#C8A96B"
                          stroke="#C8A96B"
                          strokeWidth={2}
                        />
                      ))}
                    </div>

                    {/* REVIEW */}
                    <p
                      className="
                        text-[#3A3A3A]
                        leading-[1.75]
                        italic
                        mb-8
                        font-normal
                        text-left
                        testimonial-text
                      "
                      style={{
                        fontSize: "clamp(13.5px, 1.6vw, 15.5px)",
                      }}
                    >
                      "{item.review}"
                    </p>
                  </div>

                  {/* USER */}
                  <div className="flex items-center gap-4 mt-auto">

                    <img
                      src={item.image}
                      alt={item.name}
                      className="
                        w-11
                        h-11
                        sm:w-12
                        sm:h-12
                        rounded-full
                        object-cover
                        border
                        border-black/5
                      "
                    />

                    <div className="text-left">

                      <h4
                        className="
                          text-[#0B0B0B]
                          text-[14px]
                          sm:text-[14.5px]
                          font-bold
                          leading-tight
                        "
                      >
                        {item.name}
                      </h4>

                      <p
                        className="
                          text-[#6E6E6E]
                          text-[11px]
                          sm:text-[12px]
                          leading-normal
                          mt-0.5
                        "
                      >
                        {item.role}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* RIGHT BUTTON */}
            <button
              onClick={() => scroll("right")}
              className="
                absolute
                right-0
                top-1/2
                -translate-y-1/2
                z-10
                hidden
                sm:flex
                w-10
                h-10
                lg:w-11
                lg:h-11
                rounded-full
                bg-[#EAEAEE]
                hover:bg-[#D5B584]
                text-[#121414]
                hover:text-white
                items-center
                justify-center
                transition-all
                duration-300
                shadow-sm
                hover:shadow-md
                cursor-pointer
                border
                border-[#E0DCD5]
              "
              aria-label="Next Testimonial"
            >
              <ArrowRight size={18} strokeWidth={2} />
            </button>
          </div>
        </div>
      </section>

      {/* ================= STATS SECTION ================= */}
      <section className="w-full bg-[#0B0C0C] py-12 sm:py-14">

        <div
          className="
            w-full
            px-5
            sm:px-8
            lg:px-16
            xl:px-24
            grid
            grid-cols-2
            md:grid-cols-4
            gap-y-8
            gap-x-6
          "
        >

          {/* ITEM 1 */}
          <div className="text-center">
            <h2 className="text-[#E5C484] text-[26px] sm:text-[30px] lg:text-[32px] font-medium tracking-tight mb-1">
              500+
            </h2>

            <p className="text-[#E5C484] text-[9px] sm:text-[10px] lg:text-[10.5px] font-semibold tracking-[0.24em] uppercase opacity-85">
              Schools Impacted
            </p>
          </div>

          {/* ITEM 2 */}
          <div className="text-center">
            <h2 className="text-[#E5C484] text-[26px] sm:text-[30px] lg:text-[32px] font-medium tracking-tight mb-1">
              50K+
            </h2>

            <p className="text-[#E5C484] text-[9px] sm:text-[10px] lg:text-[10.5px] font-semibold tracking-[0.24em] uppercase opacity-85">
              Students Empowered
            </p>
          </div>

          {/* ITEM 3 */}
          <div className="text-center">
            <h2 className="text-[#E5C484] text-[26px] sm:text-[30px] lg:text-[32px] font-medium tracking-tight mb-1">
              30+
            </h2>

            <p className="text-[#E5C484] text-[9px] sm:text-[10px] lg:text-[10.5px] font-semibold tracking-[0.24em] uppercase opacity-85">
              Awards & Recognitions
            </p>
          </div>

          {/* ITEM 4 */}
          <div className="text-center">
            <h2 className="text-[#E5C484] text-[26px] sm:text-[30px] lg:text-[32px] font-medium tracking-tight mb-1">
              20+
            </h2>

            <p className="text-[#E5C484] text-[9px] sm:text-[10px] lg:text-[10.5px] font-semibold tracking-[0.24em] uppercase opacity-85">
              Industry Partnerships
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default TestimonialsSection;
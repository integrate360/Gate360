// import React from "react";
// import { ArrowRight } from "lucide-react";
// import NikkieGrover from "../../assets/DrNikkieGrover.png";

// const AboutUs = () => {
//     return (
//         <section className="w-full bg-[#F7F4EF] py-24 px-6 lg:px-20">
//             <div className="max-w-[1280px] mx-auto">
//                 <div className="flex flex-col lg:flex-row items-center gap-16">

//                     {/* Left Image */}
//                     <div className="w-full lg:w-[576px] flex-shrink-0">
//                         <img
//                             src={NikkieGrover}
//                             alt="Dr. Nikkie Grover"
//                             className="w-full h-[576px] object-cover rounded-[28px] shadow-[0_10px_30px_rgba(0,0,0,0.08)]"
//                         />
//                     </div>

//                     {/* Right Content */}
//                     <div className="w-full lg:max-w-[576px]">

//                         {/* Label */}
//                         <p className="text-[#D4B062] text-[15px] font-semibold tracking-[2px] uppercase mb-4">
//                             About Us
//                         </p>

//                         {/* Heading */}
//                         <h2 className="text-[#0F1720] text-[52px] leading-[62px] font-bold max-w-[560px] mb-8">
//                             We're On A Mission To Elevate Education
//                         </h2>

//                         {/* Paragraph */}
//                         <p className="text-[#3B3B3B] text-[18px] leading-[40px] font-normal mb-10">
//                             Globalization has transformed the education sector, creating a
//                             growing demand for quality educators worldwide. NG Eduwizer
//                             bridges this gap by providing a comprehensive educator database
//                             designed to connect institutions with the best teaching
//                             professionals through a seamless and systematic approach. As our
//                             tagline says, “The first comprehensive educator’s database
//                             portal.”
//                         </p>

//                         {/* Button */}
//                         <button className="h-[56px] px-10 rounded-[4px] bg-[#E5C484] hover:bg-[#dbb86f] transition-all duration-300 flex items-center gap-3 text-[#402D00] font-semibold text-[15px] tracking-[1px] uppercase mb-12">
//                             Know More
//                             <ArrowRight size={18} />
//                         </button>

//                         {/* Founder Info */}
//                         <div className="flex items-center gap-4">
//                             <img
//                                 src={NikkieGrover}
//                                 alt="Dr. Nikkie Grover"
//                                 className="w-[56px] h-[56px] rounded-full object-cover border-2 border-[#F2D055]"
//                             />

//                             <div>
//                                 <h4 className="text-[#081120] text-[28px] font-bold leading-none">
//                                     –Dr. Nikkie Grover, CEO
//                                 </h4>

//                                 <p className="text-[#2E2E2E] text-[16px] mt-2">
//                                     Your Partner in Educational Excellence
//                                 </p>
//                             </div>
//                         </div>

//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default AboutUs;

import React from "react";
import { ArrowRight } from "lucide-react";
import NikkieGrover from "../../assets/DrNikkieGrover.png";

const AboutUs = () => {
    return (
        <section className="w-full bg-[#F7F4EF] py-20 md:py-24 px-5 sm:px-6 lg:px-20">
            <div className="max-w-[1280px] mx-auto">

                <div
                    className="
                        flex
                        flex-col
                        lg:flex-row
                        items-center
                        justify-center
                        gap-12
                        md:gap-16
                        lg:gap-16
                    "
                >

                    {/* Left Image */}
                    <div
                        className="
                            w-full
                            max-w-[640px]
                            lg:w-[576px]
                            flex-shrink-0
                        "
                    >
                        <img
                            src={NikkieGrover}
                            alt="Dr. Nikkie Grover"
                            className="
                                w-full
                                h-[340px]
                                sm:h-[460px]
                                md:h-[540px]
                                lg:h-[576px]
                                object-cover
                                rounded-[28px]
                                shadow-[0_10px_30px_rgba(0,0,0,0.08)]
                            "
                        />
                    </div>

                    {/* Right Content */}
                    <div
                        className="
                            w-full
                            max-w-[640px]
                            lg:max-w-[576px]
                        "
                    >

                        {/* Label */}
                        <p className="text-[#D4B062] text-[14px] sm:text-[15px] font-semibold tracking-[2px] uppercase mb-4">
                            About Us
                        </p>

                        {/* Heading */}
                        <h2
                            className="
                                text-[#0F1720]
                                text-[32px]
                                sm:text-[38px]
                                md:text-[42px]
                                lg:text-[36px]
                                leading-[1.2]
                                font-bold
                                max-w-[560px]
                                mb-6
                                sm:mb-8
                            "
                        >
                            We're On A Mission To Elevate Education
                        </h2>

                        {/* Paragraph */}
                        <p
                            className="
                                text-[#3B3B3B]
                                text-[15px]
                                sm:text-[17px]
                                lg:text-[18px]
                                leading-[30px]
                                sm:leading-[36px]
                                lg:leading-[40px]
                                font-normal
                                mb-8
                                sm:mb-10
                            "
                        >
                            Globalization has transformed the education sector,
                            creating a growing demand for quality educators
                            worldwide. NG Eduwizer bridges this gap by providing
                            a comprehensive educator database designed to connect
                            institutions with the best teaching professionals
                            through a seamless and systematic approach. As our
                            tagline says, “The first comprehensive educator’s
                            database portal.”
                        </p>

                        {/* Button */}
                        <a
                            href="https://www.eduwizer.com/about-us"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex h-[54px] sm:h-[56px] px-8 sm:px-10 rounded-[4px] bg-[#E5C484] hover:bg-[#dbb86f] transition-all duration-300 items-center justify-center gap-3 text-[#402D00] font-semibold text-[14px] sm:text-[15px] tracking-[1px] uppercase mb-10 sm:mb-12 no-underline"
                        >
                            Know More
                            <ArrowRight size={18} />
                        </a>

                        {/* Founder Info */}
                        <div className="flex items-center gap-4">

                            <img
                                src={NikkieGrover}
                                alt="Dr. Nikkie Grover"
                                className="
                                    w-[52px]
                                    h-[52px]
                                    sm:w-[56px]
                                    sm:h-[56px]
                                    rounded-full
                                    object-cover
                                    border-2
                                    border-[#F2D055]
                                    flex-shrink-0
                                "
                            />

                            <div>
                                <h4
                                    className="
                                        text-[#081120]
                                        text-[17px]
                                        sm:text-[18px]
                                        lg:text-[18px]
                                        font-bold
                                        leading-tight
                                    "
                                >
                                    Dr. Nikkie Grover, Founder & CEO
                                </h4>

                                <p
                                    className="
                                        text-[#2E2E2E]
                                        text-[17px]
                                        sm:text-[18px]
                                        lg:text-[18px]
                                        mt-2
                                        leading-tight
                                    "
                                >
                                    Your Partner in Educational Excellence
                                </p>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
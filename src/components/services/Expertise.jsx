// import React from "react";
// import PrestigeLibrary from "../../assets/PrestigeLibrary.png";

// const stats = [
//     {
//         number: "100%",
//         label: "COMMITMENT TO IMPACT",
//     },
//     {
//         number: "150+",
//         label: "INSTITUTIONS SCALED",
//     },
//     {
//         number: "12+",
//         label: "COUNTRIES PRESENCE",
//     },
// ];

// const Expertise = () => {
//     return (
//         <section className="relative w-full bg-[#121414] overflow-hidden py-[120px]">
//             {/* Background Image */}
//             {/* Background Image */}
//             <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
//                 <img
//                     src={PrestigeLibrary}
//                     alt="Background"
//                     className="w-[760px] object-contain opacity-[0.14]"
//                 />
//             </div>

//             {/* Overlay */}
//             <div className="absolute inset-0 bg-[#121414]/78 z-0"></div>

//             {/* Content */}
//             <div className="relative z-20 max-w-[1280px] mx-auto px-8 lg:px-[32px]">

//                 {/* Heading Section */}
//                 <div className="max-w-[672px] mb-[72px]">
//                     <h2 className="text-white font-poppins font-semibold text-[64px] leading-[1.08] tracking-[-1.5px]">
//                         Unrivaled Expertise,
//                         <br />
//                         Global Reach
//                     </h2>

//                     <p className="mt-8 text-[#D0C5B5] font-poppins text-[20px] leading-[1.7] max-w-[660px]">
//                         We don't just build schools; we establish centers of human
//                         potential that last for generations.
//                     </p>
//                 </div>

//                 {/* Stats Cards */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//                     {stats.map((item, index) => (
//                         <div
//                             key={index}
//                             className="relative bg-[#292A2A] min-h-[190px] border-b-[4px] border-[#C8A96B] px-12 py-12 flex flex-col items-center justify-center text-center"
//                         >
//                             {/* Number */}
//                             <h3 className="text-[#E5C484] font-poppins font-semibold text-[64px] leading-none tracking-[-1px]">
//                                 {item.number}
//                             </h3>

//                             {/* Label */}
//                             <p className="mt-5 text-[#D0C5B5] text-[18px] tracking-[3px] font-medium">
//                                 {item.label}
//                             </p>

//                             {/* Subtle Gradient */}
//                             <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none"></div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Expertise;
import React from "react";
import PrestigeLibrary from "../../assets/PrestigeLibrary.png";

const stats = [
    {
        number: "100%",
        label: "COMMITMENT TO IMPACT",
    },
    {
        number: "150+",
        label: "INSTITUTIONS SCALED",
    },
    {
        number: "12+",
        label: "COUNTRIES PRESENCE",
    },
];

const Expertise = () => {
    return (
        <section className="relative w-full bg-[#121414] overflow-hidden py-[80px] sm:py-[100px] lg:py-[120px]">

            {/* Background Image */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
                <img
                    src={PrestigeLibrary}
                    alt="Background"
                    className="
                        w-[320px]
                        sm:w-[500px]
                        md:w-[620px]
                        lg:w-[760px]
                        object-contain
                        opacity-[0.14]
                    "
                />
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-[#121414]/78 z-0"></div>

            {/* Content */}
            <div className="relative z-20 max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-[32px]">

                {/* Heading Section */}
                <div className="max-w-[672px] mb-[50px] sm:mb-[64px] lg:mb-[72px]">

                    <h2
                        className="
                            text-white
                            font-poppins
                            font-semibold
                            text-[34px]
                            sm:text-[46px]
                            lg:text-[50px]
                            leading-[1.1]
                            tracking-[-1px]
                        "
                    >
                        Unrivaled Expertise,
                        <br />
                        Global Reach
                    </h2>

                    <p
                        className="
                            mt-6
                            sm:mt-7
                            lg:mt-8
                            text-[#D0C5B5]
                            font-poppins
                            text-[16px]
                            sm:text-[18px]
                            lg:text-[18px]
                            leading-[1.8]
                            max-w-[660px]
                        "
                    >
                        We don't just build schools; we establish centers of human
                        potential that last for generations.
                    </p>
                </div>

                {/* Stats Cards */}
                <div
                    className="
                        grid
                        grid-cols-1
                        md:grid-cols-2
                        lg:grid-cols-3
                        gap-5
                        sm:gap-6
                        lg:gap-8
                    "
                >
                    {stats.map((item, index) => (
                        <div
                            key={index}
                            className="
                                relative
                                bg-[#292A2A]
                                min-h-[160px]
                                sm:min-h-[175px]
                                lg:min-h-[190px]
                                border-b-[4px]
                                border-[#C8A96B]
                                px-6
                                sm:px-8
                                lg:px-10
                                py-8
                                sm:py-10
                                lg:py-12
                                flex
                                flex-col
                                items-center
                                justify-center
                                text-center
                            "
                        >

                            {/* Number */}
                            <h3
                                className="
                                    text-[#E5C484]
                                    font-poppins
                                    font-semibold
                                    text-[42px]
                                    sm:text-[50px]
                                    lg:text-[56px]
                                    leading-none
                                    tracking-[-1px]
                                "
                            >
                                {item.number}
                            </h3>

                            {/* Label */}
                            <p
                                className="
                                    mt-4
                                    sm:mt-5
                                    text-[#D0C5B5]
                                    text-[13px]
                                    sm:text-[15px]
                                    lg:text-[16px]
                                    tracking-[2px]
                                    sm:tracking-[3px]
                                    font-medium
                                    leading-[1.6]
                                "
                            >
                                {item.label}
                            </p>

                            {/* Subtle Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Expertise;
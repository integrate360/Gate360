import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
    {
        question: "What regions do you support for new school setups?",
        answer:
            "We support institutions globally including India, Dubai, Canada, Singapore, Europe, and emerging education markets worldwide.",
    },
    {
        question: "Can you help with existing school turnarounds?",
        answer:
            "Yes. We specialize in transforming underperforming institutions through operational restructuring, recruitment support, branding, and academic excellence strategies.",
    },
    {
        question: "How do you handle global teacher recruitment?",
        answer:
            "Our recruitment network connects schools with highly qualified educators through a streamlined screening, onboarding, and international placement process.",
    },
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="w-full bg-[#F7F4EF] py-[120px] px-6">
            <div className="max-w-[1280px] mx-auto flex flex-col items-center">
                {/* Heading */}
                <h2 className="text-[42px] md:text-[48px] font-semibold leading-[120%] text-center mb-[72px] text-[#111111]">
                    FAQ's
                </h2>

                {/* FAQ Wrapper */}
                <div className="w-full max-w-[768px] flex flex-col gap-4">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;

                        return (
                            <div
                                key={index}
                                className="bg-[#17181A] border border-[#4D463A]/30 rounded-[4px] overflow-hidden transition-all duration-300"
                            >
                                {/* Question */}
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full flex items-center justify-between px-7 py-7 text-left"
                                >
                                    <span className="text-white text-[20px] md:text-[22px] font-medium leading-[140%] pr-5">
                                        {faq.question}
                                    </span>

                                    <div className="text-[#C8A96B] flex-shrink-0">
                                        {isOpen ? (
                                            <Minus size={20} strokeWidth={2.4} />
                                        ) : (
                                            <Plus size={20} strokeWidth={2.4} />
                                        )}
                                    </div>
                                </button>

                                {/* Answer */}
                                <div
                                    className={`grid transition-all duration-500 ease-in-out ${isOpen
                                        ? "grid-rows-[1fr] opacity-100"
                                        : "grid-rows-[0fr] opacity-0"
                                        }`}
                                >
                                    <div className="overflow-hidden">
                                        <div className="px-7 pb-8">
                                            <p className="text-[#D2CEC8] text-[17px] leading-[180%]">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default FAQ;

import React from "react";
import { ArrowRight, Check } from "lucide-react";
import { useNavigate } from "react-router-dom";
import GlobalGraduation from '../../assets/GlobalGraduation.png';
import schoolSetup from '../../assets/schoolSetup.jpg';
import recruitment from '../../assets/recruitment.jpg';
import academicAudit from '../../assets/academicAudit.jpg';
import teacherTraining from '../../assets/teacherTraining.jpg';
import globalEducation from '../../assets/globalEducation.jpg';

const servicesData = [
  {
    id: "school-setup",
    number: "01",
    titlePart1: "School Setup &",
    titlePart2: "Establishment",
    description: "We help you build a strong foundation for a successful institution with strategic planning, infrastructure design, compliance, and operational setup.",
    bullets: [
      "Feasibility Study & Market Research",
      "Infrastructure & Campus Planning",
      "Legal Compliance & Accreditation",
      "Operational Setup & Policy Development"
    ],
    image: schoolSetup
  },
  {
    id: "school-management",
    number: "02",
    titlePart1: "School",
    titlePart2: "Management",
    description: "Our management solutions streamline operations and enhance efficiency, ensuring your institution runs smoothly and achieves sustainable growth.",
    bullets: [
      "Administrative & Financial Management",
      "Process Optimization & Digital Transformation",
      "Performance Monitoring & Reporting",
      "Strategic Planning & Growth Support"
    ],
    image: GlobalGraduation
  },
  {
    id: "recruitment",
    number: "03",
    titlePart1: "Recruitment &",
    titlePart2: "Leadership Hiring",
    description: "We connect you with exceptional educators and leaders who share your vision and drive student success.",
    bullets: [
      "Leadership Hiring (Director, Chancellor, Principal)",
      "Senior Position Recruitment",
      "Talent Assessment & Screening",
      "Onboarding & Induction Support"
    ],
    image: recruitment
  },
  {
    id: "academic-audit",
    number: "04",
    titlePart1: "Academic Audit &",
    titlePart2: "Consulting",
    description: "We evaluate, analyze, and enhance academic systems to ensure quality education and continuous improvement.",
    bullets: [
      "Academic Audit & Assessment",
      "Curriculum Review & Benchmarking",
      "Policy & Process Advisory",
      "Quality Assurance Framework"
    ],
    image: academicAudit
  },
  {
    id: "teacher-training",
    number: "05",
    titlePart1: "Teacher Training &",
    titlePart2: "Development",
    description: "Empowering educators with the right skills, mindset, and tools to inspire and create impact.",
    bullets: [
      "Customized Training Programs",
      "Teaching Pedagogy Workshops",
      "Continuous Professional Development",
      "Evaluation & Feedback Systems"
    ],
    image: teacherTraining
  },
  {
    id: "global-education",
    number: "06",
    titlePart1: "Global Education",
    titlePart2: "Support",
    description: "We help institutions and students navigate global opportunities and build international partnerships.",
    bullets: [
      "International Curriculum Guidance",
      "School Partnerships & Collaborations",
      "Student Exchange Programs",
      "Global Accreditation Support"
    ],
    image: globalEducation
  }
];

const ServiceDetailCard = () => {
  const navigate = useNavigate();
  return (
    <>
      {servicesData.map((service, index) => {
        const isDark = index % 2 === 1;

        const imageElement = (
          <div className={`lg:col-span-6 ${isDark ? 'pt-[26px]' : 'pt-[34px]'} w-full`}>
            <div
              className="relative w-full overflow-hidden rounded-[12px]"
              style={{
                height: "450px",
                background: "rgba(200,169,107,0.05)",
              }}
            >
              <img
                src={service.image}
                alt={`${service.titlePart1} ${service.titlePart2}`}
                className="w-full h-full object-cover"
                style={{ objectPosition: "center 33%" }}
              />
            </div>
          </div>
        );

        const contentElement = (
          <div className="lg:col-span-6 w-full flex justify-center lg:justify-start">
            <div className="w-full max-w-[584px]">
              {/* Top Badge */}
              <div className="flex items-center gap-[18px] mb-[26px]">
                <div
                  className="h-[32px] min-w-[58px] px-[16px] rounded-[6px] border flex items-center justify-center"
                  style={{
                    borderColor: "rgba(200,169,107,0.35)",
                    background: "rgba(200,169,107,0.05)",
                  }}
                >
                  <span
                    style={{
                      fontFamily: '"Poppins", sans-serif',
                      fontWeight: 500,
                      fontSize: "13px",
                      lineHeight: "13px",
                      color: "#C8A96B",
                    }}
                  >
                    {service.number}
                  </span>
                </div>
                <div
                  className="w-[52px] h-[1px]"
                  style={{
                    background: "rgba(200,169,107,0.28)",
                  }}
                />
              </div>

              {/* Heading */}
              <div className="mb-[22px]">
                <h2
                  className="text-[32px] sm:text-[40px] lg:text-[50px] leading-[1.05]"
                  style={{
                    fontFamily: '"Poppins", sans-serif',
                    fontWeight: 600,
                    letterSpacing: "-1.8px",
                    color: isDark ? "#FFFFFF" : "#171717",
                  }}
                >
                  {service.titlePart1}
                  <span className="block" style={{ color: "#C8A96B" }}>
                    {service.titlePart2}
                  </span>
                </h2>
              </div>

              {/* Description */}
              <p
                className="max-w-[512px] mb-[24px]"
                style={{
                  fontFamily: '"Poppins", sans-serif',
                  fontWeight: 400,
                  fontSize: "17px",
                  lineHeight: "34px",
                  color: isDark ? "rgba(255,255,255,0.72)" : "#5B5B5B",
                }}
              >
                {service.description}
              </p>

              {/* Features */}
              <div className="flex flex-col gap-[18px] mb-[30px]">
                {service.bullets.map((bullet, bIndex) => (
                  <div key={bIndex} className="flex items-center gap-[14px]">
                    <div
                      className="w-[28px] h-[28px] rounded-full flex items-center justify-center shrink-0"
                      style={{
                        background: "#C8A96B",
                      }}
                    >
                      <Check
                        size={13}
                        strokeWidth={3}
                        color={isDark ? "#17181A" : "#FFFFFF"}
                      />
                    </div>
                    <span
                      style={{
                        fontFamily: '"Poppins", sans-serif',
                        fontWeight: 400,
                        fontSize: "16px",
                        lineHeight: "16px",
                        color: isDark ? "rgba(255,255,255,0.88)" : "#3B3B3B",
                      }}
                    >
                      {bullet}
                    </span>
                  </div>
                ))}
              </div>

              {/* Button */}
              <button
                onClick={() => navigate("/contact")}
                className="h-[52px] px-[40px] rounded-[4px] flex items-center justify-center gap-[10px] transition-all duration-300 hover:opacity-90 cursor-pointer"
                style={{
                  background: isDark ? "#C8A96B" : "#303031",
                }}
              >
                <span
                  style={{
                    fontFamily: '"Poppins", sans-serif',
                    fontWeight: 500,
                    fontSize: "15px",
                    lineHeight: "15px",
                    color: isDark ? "#402D00" : "#FBF9F8",
                  }}
                >
                  Book Consultation
                </span>
                <ArrowRight
                  size={18}
                  strokeWidth={2}
                  color={isDark ? "#402D00" : "#FBF9F8"}
                />
              </button>
            </div>
          </div>
        );

        return (
          <section
            key={index}
            id={service.id}
            className="w-full overflow-hidden"
            style={{
              background: isDark ? "#17181A" : "#F7F4EF",
            }}
          >
            <div className="w-full px-5 sm:px-8 lg:px-16 xl:px-24 py-[80px]">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-x-[56px] items-start">
                {isDark ? (
                  <>
                    {contentElement}
                    {imageElement}
                  </>
                ) : (
                  <>
                    {imageElement}
                    {contentElement}
                  </>
                )}
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
};

export default ServiceDetailCard;
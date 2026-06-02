import React, { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

export default function ContactFormSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error'
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    setStatusMessage("");

    try {
      const apiBase = import.meta.env.VITE_API_URL || "http://localhost:5000";
      const response = await fetch(`${apiBase}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          subject: `Contact Form Submission from ${formData.name}`,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitStatus("success");
        setStatusMessage(
          "Thank you for your message! Our team will get back to you within 24 hours.",
        );
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        throw new Error(
          data.message || data.error || "Failed to deliver message.",
        );
      }
    } catch (error) {
      console.error("Contact form error:", error);
      setSubmitStatus("error");
      setStatusMessage(
        error.message ||
          "Unable to send your message at this time. Please try again later or email us directly.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#F8F6F2] relative text-black overflow-hidden">
      {/* ================= Container ================= */}
      <div className="w-full max-w-[1680px] mx-auto px-5 sm:px-8 lg:px-16 xl:px-20 grid lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
        {/* ================= LEFT CARD ================= */}
        <div
          className="
            lg:col-span-7
            bg-white
            rounded-[28px]
            p-6 sm:p-10 lg:p-12
            border border-gray-100
            shadow-sm
            flex flex-col justify-between
          "
        >
          <div>
            {/* ================= Heading ================= */}
            <div className="mb-10">
              {/* Eyebrow */}
              <span
                className="
                  inline-block
                  mb-[18px]
                  text-[12px]
                  sm:text-[14px]
                  font-medium
                  tracking-[2px]
                  uppercase
                "
                style={{
                  color: "#D5B584",
                  fontFamily: '"Poppins", sans-serif',
                }}
              >
                CONTACT US
              </span>

              {/* Title */}
              <h2
                className="
                  text-[#121414]
                  font-semibold
                  leading-[118%]
                  tracking-[-1px]
                  text-[34px]
                  sm:text-[42px]
                  lg:text-[52px]
                  xl:text-[56px]
                  mb-4
                "
                style={{
                  fontFamily: '"Poppins", sans-serif',
                }}
              >
                Send Us a Message
              </h2>

              {/* Description */}
              <p
                className="
                  text-[15px]
                  sm:text-[16px]
                  lg:text-[17px]
                  leading-[180%]
                  lg:leading-[32px]
                  text-[#5C5A54]
                  max-w-[620px]
                "
                style={{
                  fontFamily: '"Poppins", sans-serif',
                  fontWeight: 400,
                }}
              >
                Fill out the form below and our team will get back to you within
                24 hours.
              </p>
            </div>

            {/* ================= Form ================= */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {submitStatus && (
                <div
                  className={`p-4 rounded-xl text-[14px] leading-relaxed font-medium border transition-all ${
                    submitStatus === "success"
                      ? "bg-emerald-50 text-emerald-800 border-emerald-200"
                      : "bg-rose-50 text-rose-800 border-rose-200"
                  }`}
                  style={{ fontFamily: '"Poppins", sans-serif' }}
                >
                  {statusMessage}
                </div>
              )}
              {/* Name + Email */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* Full Name */}
                <div className="flex flex-col">
                  <label
                    className="
                      text-[11px]
                      sm:text-[12px]
                      font-medium
                      text-[#121414]
                      mb-2
                      uppercase
                      tracking-[2px]
                    "
                    style={{
                      fontFamily: '"Poppins", sans-serif',
                    }}
                  >
                    Full Name
                    <span className="text-red-500 ml-1">*</span>
                  </label>

                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className="
                      w-full
                      bg-[#F7F7F8]
                      border border-gray-200/85
                      rounded-xl
                      px-5
                      h-[58px]
                      focus:outline-none
                      focus:border-[#E5C484]
                      transition-colors
                      text-[#121414]
                      placeholder-[#9CA3AF]
                      text-[15px]
                    "
                    style={{
                      fontFamily: '"Poppins", sans-serif',
                    }}
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col">
                  <label
                    className="
                      text-[11px]
                      sm:text-[12px]
                      font-medium
                      text-[#121414]
                      mb-2
                      uppercase
                      tracking-[2px]
                    "
                    style={{
                      fontFamily: '"Poppins", sans-serif',
                    }}
                  >
                    Email Address
                    <span className="text-red-500 ml-1">*</span>
                  </label>

                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="
                      w-full
                      bg-[#F7F7F8]
                      border border-gray-200/85
                      rounded-xl
                      px-5
                      h-[58px]
                      focus:outline-none
                      focus:border-[#E5C484]
                      transition-colors
                      text-[#121414]
                      placeholder-[#9CA3AF]
                      text-[15px]
                    "
                    style={{
                      fontFamily: '"Poppins", sans-serif',
                    }}
                  />
                </div>
              </div>

              {/* Phone */}
              <div className="flex flex-col">
                <label
                  className="
                    text-[11px]
                    sm:text-[12px]
                    font-medium
                    text-[#121414]
                    mb-2
                    uppercase
                    tracking-[2px]
                  "
                  style={{
                    fontFamily: '"Poppins", sans-serif',
                  }}
                >
                  Phone Number
                  <span className="text-red-500 ml-1">*</span>
                </label>

                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 79 7710 5170"
                  className="
                    w-full
                    bg-[#F7F7F8]
                    border border-gray-200/85
                    rounded-xl
                    px-5
                    h-[58px]
                    focus:outline-none
                    focus:border-[#E5C484]
                    transition-colors
                    text-[#121414]
                    placeholder-[#9CA3AF]
                    text-[15px]
                  "
                  style={{
                    fontFamily: '"Poppins", sans-serif',
                  }}
                />
              </div>

              {/* Message */}
              <div className="flex flex-col">
                <label
                  className="
                    text-[11px]
                    sm:text-[12px]
                    font-medium
                    text-[#121414]
                    mb-2
                    uppercase
                    tracking-[2px]
                  "
                  style={{
                    fontFamily: '"Poppins", sans-serif',
                  }}
                >
                  Your Message
                  <span className="text-red-500 ml-1">*</span>
                </label>

                <textarea
                  name="message"
                  required
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can we help you?"
                  className="
                    w-full
                    bg-[#F7F7F8]
                    border border-gray-200/85
                    rounded-xl
                    p-5
                    focus:outline-none
                    focus:border-[#E5C484]
                    transition-colors
                    text-[#121414]
                    placeholder-[#9CA3AF]
                    text-[15px]
                    resize-none
                  "
                  style={{
                    fontFamily: '"Poppins", sans-serif',
                  }}
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="
                  bg-[#E5C484]
                  hover:opacity-90
                  active:scale-[0.98]
                  text-[#121414]
                  px-8
                  h-[56px]
                  rounded-xl
                  font-medium
                  transition-all
                  flex items-center
                  gap-3
                  w-fit
                  shadow-[0_4px_20px_rgba(229,196,132,0.15)]
                  cursor-pointer
                  text-[13px]
                  sm:text-[14px]
                  uppercase
                  tracking-[2px]
                  disabled:opacity-50
                  disabled:cursor-not-allowed
                "
                style={{
                  fontFamily: '"Poppins", sans-serif',
                }}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send
                  className={`h-4 w-4 rotate-45 ${isSubmitting ? "animate-pulse" : ""}`}
                />
              </button>
            </form>
          </div>
        </div>

        {/* ================= RIGHT CARD ================= */}
        <div
          className="
            lg:col-span-5
            bg-[#17181A]
            opacity-90
            rounded-[28px]
            p-6 sm:p-10 lg:p-12
            text-white
            flex flex-col justify-between
            shadow-xl
          "
        >
          <div>
            {/* Heading */}
            <h3
              className="
                text-[34px]
                sm:text-[42px]
                lg:text-[46px]
                leading-[118%]
                tracking-[-1px]
                font-semibold
                text-white
                mb-4
              "
              style={{
                fontFamily: '"Poppins", sans-serif',
              }}
            >
              Our Office
            </h3>

            {/* Description */}
            <p
              className="
                text-[15px]
                sm:text-[16px]
                lg:text-[17px]
                leading-[180%]
                lg:leading-[32px]
                text-[#9CA3AF]
                mb-10
                max-w-[420px]
              "
              style={{
                fontFamily: '"Poppins", sans-serif',
                fontWeight: 400,
              }}
            >
              Visit us or reach out through any of our official contact
              channels.
            </p>

            {/* ================= Info Items ================= */}
            <div className="space-y-8">
              {/* Head Office */}
              <div className="flex gap-5 items-start">
                <div className="w-12 h-12 rounded-full border border-[#E5C484]/20 bg-[#E5C484]/5 flex items-center justify-center text-[#E5C484] shrink-0">
                  <MapPin className="h-5 w-5" strokeWidth={1.5} />
                </div>

                <div>
                  <h4
                    className="
                      font-medium
                      text-white
                      mb-2
                      text-[18px]
                    "
                    style={{
                      fontFamily: '"Poppins", sans-serif',
                    }}
                  >
                    Head Office
                  </h4>

                  <address
                    className="
                      not-italic
                      text-[#E1E5ED]
                      text-[15px]
                      sm:text-[16px]
                      leading-[180%]
                    "
                    style={{
                      fontFamily: '"Poppins", sans-serif',
                    }}
                  >
                    Gate360 SaaS Ltd.
                    <br />
                    Amir Industrial Estate, 209, Sun Mill Compound,
                    <br />
                    opposite Phoenix Mall, Parel,
                    <br />
                    Mumbai, Maharashtra 400013
                  </address>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-5 items-start">
                <div className="w-12 h-12 rounded-full border border-[#E5C484]/20 bg-[#E5C484]/5 flex items-center justify-center text-[#E5C484] shrink-0">
                  <Phone className="h-5 w-5" strokeWidth={1.5} />
                </div>

                <div>
                  <h4
                    className="
                      font-medium
                      text-white
                      mb-2
                      text-[18px]
                    "
                    style={{
                      fontFamily: '"Poppins", sans-serif',
                    }}
                  >
                    Phone
                  </h4>

                  <a
                    href="tel:+917738048925"
                    className="
                      text-[#E1E5ED]
                      text-[15px]
                      sm:text-[16px]
                      hover:text-[#E5C484]
                      transition-colors
                    "
                    style={{
                      fontFamily: '"Poppins", sans-serif',
                    }}
                  >
                    +91 79 7710 5170
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-5 items-start">
                <div className="w-12 h-12 rounded-full border border-[#E5C484]/20 bg-[#E5C484]/5 flex items-center justify-center text-[#E5C484] shrink-0">
                  <Mail className="h-5 w-5" strokeWidth={1.5} />
                </div>

                <div>
                  <h4
                    className="
                      font-medium
                      text-white
                      mb-2
                      text-[18px]
                    "
                    style={{
                      fontFamily: '"Poppins", sans-serif',
                    }}
                  >
                    Email
                  </h4>

                  <a
                    href="mailto:support@eduwizer.com"
                    className="
                      text-[#E1E5ED]
                      text-[15px]
                      sm:text-[16px]
                      hover:text-[#E5C484]
                      transition-colors
                    "
                    style={{
                      fontFamily: '"Poppins", sans-serif',
                    }}
                  >
                    support@eduwizer.com
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex gap-5 items-start">
                <div className="w-12 h-12 rounded-full border border-[#E5C484]/20 bg-[#E5C484]/5 flex items-center justify-center text-[#E5C484] shrink-0">
                  <Clock className="h-5 w-5" strokeWidth={1.5} />
                </div>

                <div>
                  <h4
                    className="
                      font-medium
                      text-white
                      mb-2
                      text-[18px]
                    "
                    style={{
                      fontFamily: '"Poppins", sans-serif',
                    }}
                  >
                    Business Hours
                  </h4>

                  <p
                    className="
                      text-[#E1E5ED]
                      text-[15px]
                      sm:text-[16px]
                      leading-[180%]
                    "
                    style={{
                      fontFamily: '"Poppins", sans-serif',
                    }}
                  >
                    Mon – Sat: 9:30 AM – 6:30 PM
                  </p>

                  <p
                    className="
                      text-[#E1E5ED]
                      text-[15px]
                      sm:text-[16px]
                      leading-[180%]
                      mt-1
                    "
                    style={{
                      fontFamily: '"Poppins", sans-serif',
                    }}
                  >
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

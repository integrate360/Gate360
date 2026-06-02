import React from "react";
import { MapPin, Map } from "lucide-react";

export default function ContactMapSection() {
  return (
    <section className="relative h-[600px] w-full overflow-hidden bg-[#0D0E0F]">
      {/* Interactive Google Map Iframe */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.1873836371536!2d72.8228308761271!3d18.995029982928373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cef71dbd7eb3%3A0xe5a3c9be08ea9fc!2sHigh%20Street%20Phoenix!5e0!3m2!1sen!2sin!4v1717082430000!5m2!1sen!2sin"
        width="600"
        height="450"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        className="absolute inset-0 w-full h-full border-0 grayscale-[20%] brightness-[90%]"
      ></iframe>

      {/* Dark gradient overlay on the left for text/card readability */}
      {/* <div className="absolute inset-0 bg-gradient-to-r from-[#0D0E0F] via-[#0D0E0F]/45 to-transparent pointer-events-none"></div> */}

      {/* Glassmorphic Info Card Overlay */}
      <div className="absolute inset-y-0 left-0 flex items-center z-10 w-full">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 w-full">
          <div className="max-w-md bg-[#121414]/90 backdrop-blur-md border border-[#E5C484]/15 rounded-3xl p-8 sm:p-10 shadow-2xl">
            {/* Header Icon + Title */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-[#E5C484] flex items-center justify-center text-black shadow-[0_0_20px_rgba(229,196,132,0.4)] shrink-0">
                <MapPin className="w-5 h-5" strokeWidth={2} />
              </div>

              <h2 className="text-3xl font-semibold text-white">
                Find Us Here
              </h2>
            </div>

            {/* Description */}
            <p className="text-gray-400 text-sm leading-relaxed mb-8">
              We are located in the heart of the tech corridor. Easy to reach,
              always here for your vision.
            </p>

            {/* Address Details */}
            <div className="mb-8 flex items-start gap-3 text-white">
              <div className="mt-1">
                <MapPin className="w-5 h-5 text-[#E5C484]" strokeWidth={1.5} />
              </div>

              <address className="not-italic leading-relaxed text-sm md:text-base text-white/90">
                <p className="font-semibold text-white">Gate360 Headquarters</p>

                <p className="max-w-[260px] text-sm md:text-base text-white/75">
                  Amir Industrial Estate, 209, Sun Mill Compound, opposite Phoenix Mall, Parel,
                  Mumbai, Maharashtra 400013
                </p>
              </address>
            </div>

            {/* Get Directions Button */}
            <a
              href="https://maps.app.goo.gl/ENpi2A4CNtss61T96"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#E5C484] hover:opacity-90 active:scale-95 transition-all duration-200 text-black font-semibold px-6 py-3.5 rounded-xl text-sm"
            >
              Get Directions
              <Map className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

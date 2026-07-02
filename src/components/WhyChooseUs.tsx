"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const stats = [
  { label: "Equipements Used", value: 92 },
  { label: "Factories Production", value: 82 },
  { label: "Management & Services", value: 97 },
  { label: "Modern Technology", value: 73 },
  { label: "Certified Team", value: 87 },
];

const reasons = [
  "We Have Professional Workers",
  "On Time In Progress",
  "Friendly To Serve Customers",
  "Give The Best & Fair",
];

export default function WhyChooseUs() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !animated) setAnimated(true); },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [animated]);

  return (
    <section className="relative" ref={sectionRef}>
      {/* Full-width background image covering the entire section */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="https://pansaholding.com/wp-content/uploads/2023/10/oil-and-gas-processing-plant-.jpg"
          alt="Industrial background"
          fill
          className="object-cover object-center"
          unoptimized
        />
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(15, 28, 5, 0.78)" }} />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Top: centered heading area */}
        <div className="text-center pt-20 pb-16 px-6">
          <p className="font-bold text-xs uppercase tracking-widest mb-4" style={{ color: "#8fb030" }}>
            Why Choose Us
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white uppercase mb-5 leading-tight">
            Experience Work With<br />Global Industries
          </h2>
          <div className="w-16 h-1 mx-auto mb-6" style={{ backgroundColor: "#7f9e28" }} />
          <p className="text-gray-300 text-base leading-relaxed max-w-2xl mx-auto">
            Choose Pansa Holding N.V. for a commitment to excellence, a team of certified
            professionals, and industry-leading expertise, ensuring that your projects benefit
            from innovation, precision, and the proven success of our comprehensive industrial services.
          </p>
        </div>

        {/* Bottom: two side-by-side boxes â€” translateY(30%) to float with visible bg above */}
        <div className="max-w-7xl mx-auto px-6 pb-36" style={{ transform: "translateY(10%)" }}>
          <div className="grid grid-cols-1 lg:grid-cols-2">

            {/* Left: dark green semi-transparent box */}
            <div className="p-10 text-white" style={{ backgroundColor: "rgba(42, 62, 15, 0.96)" }}>
              <h3 className="text-xl font-bold uppercase mb-4 text-white tracking-wide">
                Are Always Ready To Serve
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                Pansa Group of Companies aspires to be the best provider of human resource &amp; industrial
                development, services and products in Suriname &amp; the region. Get in touch with our dedicated team.
              </p>

              <div className="space-y-3 mb-7">
                {reasons.map((r, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: "#8fb030" }}>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                    <span className="text-sm text-white font-medium">{r}</span>
                  </div>
                ))}
              </div>

              <a
                href="#contact"
                className="inline-block text-white text-xs font-bold uppercase tracking-widest px-8 py-3 mb-7 hover:opacity-90 transition-opacity"
                style={{ backgroundColor: "#7f9e28" }}
              >
                Contact Us
              </a>

              <div className="space-y-3 text-sm text-gray-300 border-t border-white/20 pt-5">
                <div className="flex items-start gap-3">
                  <svg className="w-4 h-4 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" style={{ color: "#8fb030" }}>
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <span>Address: Martin Luther King Highway km 23 Para - Suriname (South - America)</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-4 h-4 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" style={{ color: "#8fb030" }}>
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                  <span>Mon - Fri : 9:00 am - 5:00 pm</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-4 h-4 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" style={{ color: "#8fb030" }}>
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <div>
                    <div>Phone: (+597) 6802051 / (+597) 6802052</div>
                    <div>Mobile: (+597) 7698047 / (+597) 7698050</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: white expertise box */}
            <div className="bg-white p-10">
              <h3 className="text-lg font-bold uppercase tracking-wide mb-3" style={{ color: "#32592d" }}>
                This Is Our Expertise
              </h3>
              <div className="w-12 h-1 mb-5" style={{ backgroundColor: "#7f9e28" }} />
              <p className="text-gray-600 text-sm leading-relaxed mb-8">
                With a wealth of industry expertise, Pansa Holding N.V. stands as a trusted
                authority, providing clients with unparalleled insight, innovation, and strategic
                solutions to address the most complex challenges in diverse industrial sectors.
              </p>
              <div className="space-y-5">
                {stats.map((stat, i) => (
                  <div key={i}>
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-xs font-bold uppercase tracking-wider" style={{ color: "#32592d" }}>
                        {stat.label}
                      </span>
                      <span className="text-sm font-bold" style={{ color: "#7f9e28" }}>{stat.value}%</span>
                    </div>
                    <div className="h-1.5 bg-gray-100 overflow-hidden">
                      <div
                        className="h-full transition-all duration-1000 ease-out"
                        style={{
                          width: animated ? `${stat.value}%` : "0%",
                          backgroundColor: "#7f9e28",
                          transitionDelay: `${i * 150}ms`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

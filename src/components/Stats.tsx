"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { label: "Equipements Used", value: 92 },
  { label: "Factories Production", value: 82 },
  { label: "Management & Services", value: 97 },
  { label: "Modern Technology", value: 73 },
  { label: "Certified Team", value: 87 },
];

export default function Stats() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated) {
          setAnimated(true);
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [animated]);

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: text */}
          <div>
            <p className="font-semibold text-sm uppercase tracking-widest mb-2" style={{ color: "#7f9e28" }}>
              Skills &amp; Knowledge
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#32592d" }}>
              This Is Our Expertise
            </h2>
            <div className="w-16 h-1 mb-6" style={{ backgroundColor: "#7f9e28" }} />
            <p className="text-gray-600 leading-relaxed mb-4 text-sm">
              Pansa Group of Companies aspires to be the best provider of human resource &amp; industrial
              development, services and products in Suriname &amp; the region.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8 text-sm">
              Our certified team is always ready to serve with the latest modern technology, ensuring
              top-quality results for every project.
            </p>
            <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
              <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" style={{ color: "#7f9e28" }}>
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              Martin Luther King Highway km 23, Para - Suriname
            </div>
            <div className="flex items-center gap-4 text-sm text-gray-600 mb-8">
              <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" style={{ color: "#7f9e28" }}>
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              Mon - Fri: 9:00 am - 5:00 pm
            </div>
            <a
              href="#contact"
              className="inline-block text-white font-bold uppercase tracking-wider px-8 py-3 text-sm hover:opacity-90 transition-opacity"
              style={{ backgroundColor: "#7f9e28" }}
            >
              Are Always Ready To Serve
            </a>
          </div>

          {/* Right: progress bars */}
          <div className="space-y-6">
            {stats.map((stat, i) => (
              <div key={i}>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold text-sm" style={{ color: "#32592d" }}>{stat.label}</span>
                  <span className="font-bold text-sm" style={{ color: "#7f9e28" }}>{stat.value}%</span>
                </div>
                <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-1000 ease-out"
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
    </section>
  );
}

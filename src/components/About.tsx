"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setActive(true); },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!active) return;
    let c = 0;
    const timer = setInterval(() => {
      c += 1;
      if (c >= 49) { setCount(49); clearInterval(timer); }
      else setCount(c);
    }, 36);
    return () => clearInterval(timer);
  }, [active]);

  return (
    <section id="about" className="pb-20 bg-white" style={{ paddingTop: "160px" }} ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-stretch">

          {/* Column 1: Label + Heading + Text + Badge */}
          <div className="flex flex-col">
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#7f9e28" }}>
              About Company
            </p>
            <h2 className="text-3xl font-bold leading-tight mb-4 uppercase" style={{ color: "#32592d" }}>
              PANSA GROUP OF COMPANIES N.V.
            </h2>
            <div className="w-12 h-1 mb-5" style={{ backgroundColor: "#7f9e28" }} />
            <p className="text-gray-600 text-sm leading-relaxed mb-8 flex-1">
              Pansa Group of Companies N.V. is a diversified, innovative and dynamic
              holding company, consisting of <strong>Pansa Machine Shop N.V.</strong> (A.S.M.E. S &amp; U Stamp,
              NBIC R, VR, TO &amp; NB Stamp, SBB Certified), <strong>Commercial Contracting Company H.
              Pansa &amp; Sons N.V.</strong> (ISO 9001 and ISO 14001, Alcoa Certified) and the{" "}
              <strong>Pansa Industries N.V.</strong>
            </p>
            {/* Badge */}
            <div className="flex flex-col items-start gap-1">
              <svg viewBox="0 0 48 48" className="w-12 h-12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="24" cy="24" r="22" stroke="#7f9e28" strokeWidth="2"/>
                <path d="M24 10 L27 18 L36 18 L29 23 L32 32 L24 27 L16 32 L19 23 L12 18 L21 18 Z" fill="#7f9e28" opacity="0.8"/>
                <circle cx="24" cy="24" r="8" stroke="#7f9e28" strokeWidth="1.5" fill="none"/>
              </svg>
              <div className="text-4xl font-bold leading-none" style={{ color: "#32592d" }}>
                {count} <sup style={{ fontSize: "1.5rem", color: "#7f9e28" }}>+</sup>
              </div>
              <div className="text-sm text-gray-500">Years Experiences</div>
            </div>
          </div>

          {/* Column 2: Two stacked cards */}
          <div className="flex flex-col gap-4">
            {/* Facilities card (light) */}
            <div className="border border-gray-100 p-6 shadow-sm flex-1">
              <div className="mb-3" style={{ color: "#7f9e28" }}>
                <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-bold uppercase text-sm mb-2 tracking-wide" style={{ color: "#32592d" }}>
                Facilities
              </h3>
              <p className="text-gray-500 text-xs leading-relaxed mb-3">
                To accommodate our vision, mission and core values, the Pansa Group of Company has two
                separate...
              </p>
              <a href="#" className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wide" style={{ color: "#7f9e28" }}>
                Learn More &nbsp;â†’
              </a>
            </div>

            {/* Company History card (dark green) */}
            <div className="p-6 flex-1" style={{ backgroundColor: "#32592d" }}>
              <div className="mb-3" style={{ color: "#8fb030" }}>
                <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-bold uppercase text-sm mb-2 tracking-wide text-white">
                Company History
              </h3>
              <p className="text-xs leading-relaxed mb-3" style={{ color: "#c8d89a" }}>
                Pansa Group of Companies N.V. (Pansa Group) evolved from a one man company
                founded in 1975 ...
              </p>
              <a href="#" className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wide" style={{ color: "#8fb030" }}>
                Learn More &nbsp;â†’
              </a>
            </div>
          </div>

          {/* Columns 3+4: Large office/reception photo */}
          <div className="lg:col-span-2 relative min-h-[380px]">
            <Image
              src="https://pansaholding.com/wp-content/uploads/2023/10/16-landscape.jpeg"
              alt="Pansa Group reception"
              fill
              className="object-cover"
              unoptimized
            />
            {/* Video play button overlay */}
            <a
              href="https://www.youtube.com/watch?v=5BRWnIja1HY"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-4 right-4 w-12 h-12 flex items-center justify-center hover:opacity-90 transition-opacity"
              style={{ backgroundColor: "#8fb030" }}
            >
              <svg className="w-5 h-5 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}

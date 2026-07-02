"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const BASE = "https://pansaholding.com/wp-content/uploads/2023/10/";

const row2 = [
  { image: `${BASE}s3.jpg`, title: "Engineering, Procurement, Construction & Maintenance", description: "We are flexible, creative, inquisitive and innovative. We constantly develop...", href: "/services/engineering-procurement" },
  { image: `${BASE}s4.jpeg`, title: "Valve & Pump Maintenance and Machine Shop Works", description: "Control, butterfly, ball, plug and clarkson valves revision, pressure relief...", href: "/services/valve-pump-machine-shop" },
  { image: `${BASE}s5.jpeg`, title: "Industrial Maintenance and Plant Operation Services", description: "Preventive & risk based maintenance Machinery inspection...", href: "/services/industrial-maintenance" },
  { image: `${BASE}s6.jpeg`, title: "Human Resource Services", description: "Construction Management Services: Managers, Supervisors, Foremen, Coordinators for all construction works...", href: "/services/human-resource-services" },
];

const row3 = [
  { image: `${BASE}s7.jpg`, title: "Technical Vocational Training & Qualification", description: "Quality technical vocational training and demand-driven programs & Qualification (ASME, AWS, API, NIL, SBB, CANTA-CVQ, VCA)...", href: "/services/technical-vocational-training" },
  { image: `${BASE}s8.jpg`, title: "Health, Safety, Environment", description: "Pansa Group of Companies is committed to work according to the Health, Safety and Environmental standards, policies and regulations. Injuries occurring during...", href: "/services/health-safety-environment" },
];

const counters = [
  { value: 753, label: "Project Success" },
  { value: 579, label: "Our Equipments" },
  { value: 342, label: "Satisfied Clients" },
  { value: 231, label: "Industry Expertise" },
];

function useCounter(target: number, active: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let c = 0;
    const step = Math.ceil(target / 60);
    const timer = setInterval(() => {
      c = Math.min(c + step, target);
      setCount(c);
      if (c >= target) clearInterval(timer);
    }, 25);
    return () => clearInterval(timer);
  }, [active, target]);
  return count;
}

function Counter({ value, label, active }: { value: number; label: string; active: boolean }) {
  const n = useCounter(value, active);
  return (
    <div className="text-center py-10">
      <div className="text-5xl font-bold" style={{ color: "#32592d" }}>
        {n}<sup style={{ fontSize: "1.8rem", color: "#7f9e28" }}>+</sup>
      </div>
      <div className="text-sm text-gray-500 mt-2 uppercase tracking-wider">{label}</div>
    </div>
  );
}

function PhotoCard({ image, title, description, href = "#", dark = true }: { image: string; title: string; description: string; href?: string; dark?: boolean }) {
  return (
    <div className="relative overflow-hidden group" style={{ minHeight: "220px" }}>
      <Image src={image} alt={title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" unoptimized />
      <div className="absolute inset-0" style={{ backgroundColor: dark ? "rgba(20, 35, 5, 0.72)" : "rgba(20, 35, 5, 0.65)" }} />
      <div className="relative z-10 p-7 flex flex-col h-full" style={{ minHeight: "220px" }}>
        <h3 className="text-white font-bold uppercase text-sm leading-snug mb-3">{title}</h3>
        <p className="text-gray-300 text-xs leading-relaxed flex-1">{description}</p>
        <a href={href} className="mt-4 inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider hover:gap-2 transition-all" style={{ color: "#8fb030" }}>
          Learn More &nbsp;&rarr;
        </a>
      </div>
    </div>
  );
}

export default function Services() {
  const statsRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setActive(true); },
      { threshold: 0.3 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="pb-0 bg-white" style={{ paddingTop: "120px" }}>
      <div className="max-w-7xl mx-auto px-6">

        {/* Row 1: intro text + 2 photo cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 mb-0">

          {/* Intro text */}
          <div className="p-8 flex flex-col justify-center bg-white">
            <p className="font-bold text-xs uppercase tracking-widest mb-3" style={{ color: "#7f9e28" }}>Our Services</p>
            <h2 className="text-3xl font-bold uppercase leading-tight mb-4" style={{ color: "#32592d" }}>
              We Provide<br />Best Services
            </h2>
            <div className="w-12 h-1 mb-5" style={{ backgroundColor: "#7f9e28" }} />
            <p className="text-gray-500 text-xs uppercase leading-relaxed font-semibold tracking-wide">
              Your one stop window for human resource development and industrial services, fabrication &amp; manufacturing
            </p>
          </div>

          {/* Card 1 */}
          <PhotoCard
            image={`${BASE}s1.jpeg`}
            title="Manufacturing, Repair and Alteration of Power Boilers & Pressure Vessels"
            description="Pressure vessel & power boiler Tank construction, erection & repairs Alterations, repairs, revisions..."
            href="/services/power-boilers-pressure-vessels"
          />

          {/* Card 2 â€” lighter treatment */}
          <div className="relative overflow-hidden group border border-gray-100" style={{ minHeight: "220px" }}>
            <Image src={`${BASE}s2.jpeg`} alt="Fabrication" fill className="object-cover opacity-25 group-hover:opacity-40 transition-opacity duration-500" unoptimized />
            <div className="relative z-10 p-7 flex flex-col" style={{ minHeight: "220px" }}>
              <h3 className="font-bold uppercase text-sm leading-snug mb-3" style={{ color: "#32592d" }}>
                Fabrication of Steel Construction, Storage Tanks, Silo&apos;s, Cyclones
              </h3>
              <p className="text-gray-500 text-xs leading-relaxed flex-1">
                Steel and pipeline modification Pontoon construction Barge and dredge construction
              </p>
              <a href="/services/steel-fabrication" className="mt-4 inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider hover:gap-2 transition-all" style={{ color: "#7f9e28" }}>
                Learn More &nbsp;&rarr;
              </a>
            </div>
          </div>
        </div>

        {/* Row 2: 4 photo cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
          {row2.map((s, i) => (
            <PhotoCard key={i} image={s.image} title={s.title} description={s.description} href={s.href} />
          ))}
        </div>

        {/* Row 3: 2 photo cards + Explore More */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {row3.map((s, i) => (
            <PhotoCard key={i} image={s.image} title={s.title} description={s.description} href={s.href} />
          ))}

          {/* Explore More Services */}
          <div className="relative overflow-hidden group" style={{ minHeight: "220px" }}>
            <Image
              src={`${BASE}oil-and-gas-industry-refinery-at-twilight-factory-plant.jpg`}
              alt="Explore More"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              unoptimized
            />
            <div className="absolute inset-0" style={{ backgroundColor: "rgba(42, 62, 15, 0.85)" }} />
            <div className="relative z-10 p-8 flex flex-col items-center justify-center text-center h-full" style={{ minHeight: "220px" }}>
              <h3 className="text-white font-bold uppercase text-base mb-4">Explore More Services</h3>
              <p className="text-gray-300 text-xs leading-relaxed mb-6">
                PANSA GROUP OF COMPANIES N.V. offers a diverse range of services, from precise industrial maintenance to advanced vocational training, all geared towards ensuring your operational success
              </p>
              <a
                href="#contact"
                className="inline-block text-white text-xs font-bold uppercase tracking-widest px-8 py-3 hover:opacity-90 transition-opacity"
                style={{ backgroundColor: "#7f9e28" }}
              >
                All Services
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Stats counters strip */}
      <div ref={statsRef} className="border-t border-gray-100 mt-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-100">
            {counters.map((c, i) => (
              <Counter key={i} {...c} active={active} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

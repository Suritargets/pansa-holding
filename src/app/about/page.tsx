"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const BASE = "https://pansaholding.com/wp-content/uploads/2023/10/";

const coreValues = [
  {
    title: "Customer Focus",
    text: "We ensure that the customer is satisfied, by accurately identifying our customers' needs and desires so that we can meet them.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 15.803 7.5 7.5 0 0015.803 15.803z" />
      </svg>
    ),
  },
  {
    title: "Quality",
    text: "We provide high-quality services and products that meet national, regional and international standards & best practices.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 010 7.862 3.745 3.745 0 01-3.87.275 3.745 3.745 0 01-7.273 0 3.745 3.745 0 01-3.87-.275A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 010-7.862 3.746 3.746 0 013.87-.275 3.745 3.745 0 017.273 0 3.746 3.746 0 013.87.275A3.745 3.745 0 0121 12z" />
      </svg>
    ),
  },
  {
    title: "Innovation",
    text: "We are flexible, creative, dynamic and innovative. We constantly develop and improve the standards of excellence in everything we do.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
      </svg>
    ),
  },
  {
    title: "Excellence",
    text: "We do everything in excellence, from the initial contact with our customer to the delivery of our services and products.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    ),
  },
  {
    title: "Responsibility & Ownership",
    text: "We take responsibility individually and as a team for our behavior, actions, and results. We take ownership of our work.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
  },
  {
    title: "Health, Safety & Environment",
    text: "We work safely, promote wellness and protect the environment in all our operations and activities.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: "Collaboration & Teamwork",
    text: "Our team collaborates with customers by engaging in meaningful, honest, open and healthy discussions to find the best solutions.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
  {
    title: "Professionalism & Leadership",
    text: "As a team we work in a professional and respectful manner, as specialist in our field. We help and coach each other to identify and solve problems.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0" />
      </svg>
    ),
  },
];

const team = [
  { name: "Rogerio Boda", role: "Petrol Leader", photo: `${BASE}bearded-machine-operator-posing-for-photography-ZXF4DY3.jpg` },
  { name: "Kay Cunningham", role: "Petrol Handler", photo: `${BASE}professional-young-industrial-factory-woman-employ-BAG2MGU.jpg` },
  { name: "Juanita Javier", role: "Petrol Manager", photo: `${BASE}african-american-elderly-woman-worker-in-industria-C7W38XZ.jpg` },
  { name: "Fabricio Malo", role: "Petrol Operator", photo: `${BASE}joyful-male-engineer-standing-by-tractor-at-factor-B54T3VP.jpg` },
];

function CircularProgress({ pct, label }: { pct: number; label: string }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        let c = 0;
        const t = setInterval(() => { c = Math.min(c + 1, pct); setVal(c); if (c >= pct) clearInterval(t); }, 20);
      }
    }, { threshold: 0.5 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [pct]);
  const r = 40, circ = 2 * Math.PI * r;
  const offset = circ - (val / 100) * circ;
  return (
    <div ref={ref} className="flex flex-col items-center">
      <svg width="100" height="100" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r={r} fill="none" stroke="#e5e7eb" strokeWidth="8" />
        <circle cx="50" cy="50" r={r} fill="none" stroke="#7f9e28" strokeWidth="8"
          strokeDasharray={circ} strokeDashoffset={offset}
          strokeLinecap="round" transform="rotate(-90 50 50)"
          style={{ transition: "stroke-dashoffset 0.05s" }} />
        <text x="50" y="55" textAnchor="middle" fontSize="18" fontWeight="bold" fill="#32592d">{val}%</text>
      </svg>
      <p className="text-xs font-bold uppercase tracking-wide mt-2 text-center" style={{ color: "#32592d" }}>{label}</p>
    </div>
  );
}

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>

        {/* Hero banner */}
        <div className="relative w-full" style={{ height: "280px" }}>
          <Image src={`${BASE}about.jpeg`} alt="About" fill className="object-cover object-center" unoptimized priority />
          <div className="absolute inset-0" style={{ backgroundColor: "rgba(20, 35, 5, 0.78)" }} />
          <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 pt-16">
            <div className="text-xs text-gray-300 mb-3">
              <Link href="/" className="hover:text-white">Home</Link>
              <span className="mx-2">&#8250;</span>
              <span>About</span>
            </div>
            <h1 className="text-white text-4xl md:text-5xl font-bold uppercase tracking-wide"
              style={{ backgroundColor: "rgba(100,130,40,0.45)", padding: "10px 40px" }}>
              ABOUT
            </h1>
          </div>
        </div>

        {/* Intro: left text + right Vision/Mission */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

              {/* Left */}
              <div>
                <p className="font-bold text-xs uppercase tracking-widest mb-3" style={{ color: "#7f9e28" }}>About</p>
                <h2 className="text-3xl font-bold uppercase leading-tight mb-4" style={{ color: "#32592d" }}>
                  Pansa Group of<br />Companies N.V.
                </h2>
                <div className="w-12 h-1 mb-6" style={{ backgroundColor: "#7f9e28" }} />
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  Pansa Group of Companies N.V. is a diversified, innovative and dynamic holding company, consisting of <strong>Pansa Machine Shop N.V.</strong> (A.S.M.E. S &amp; U Stamp, NBIC R, VR, TO &amp; NB Stamp, SBB Certified), <strong>Commercial Contracting Company H. Pansa &amp; Sons N.V.</strong> (ISO 9001 and ISO 14001, Alcoa Certified) and the <strong>Pansa Industries N.V.</strong>
                </p>
                {/* Years badge */}
                <div className="inline-flex items-center gap-4 border border-gray-200 px-5 py-3">
                  <div className="text-center">
                    <div className="text-3xl font-bold leading-none" style={{ color: "#32592d" }}>49<sup style={{ color: "#7f9e28", fontSize: "1rem" }}>+</sup></div>
                    <div className="text-xs text-gray-500 uppercase tracking-wide mt-1">Years Experiences</div>
                  </div>
                  <div className="w-10 h-10 flex items-center justify-center" style={{ backgroundColor: "#7f9e28" }}>
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Right: Vision + Mission stacked */}
              <div className="space-y-4">
                <div className="p-8" style={{ backgroundColor: "#f5f5f5" }}>
                  <h3 className="font-bold uppercase text-sm mb-3" style={{ color: "#32592d" }}>Our Vision</h3>
                  <div className="w-8 h-0.5 mb-4" style={{ backgroundColor: "#7f9e28" }} />
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Pansa Group of Companies N.V. strives to be the best provider of human resource development, industrial mechanical maintenance and manufacturing services and products in Suriname and the region.
                  </p>
                </div>
                <div className="p-8 text-white" style={{ backgroundColor: "#32592d" }}>
                  <h3 className="font-bold uppercase text-sm mb-3 text-white">Our Mission</h3>
                  <div className="w-8 h-0.5 mb-4" style={{ backgroundColor: "#7f9e28" }} />
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Pansa Group of Companies N.V. is committed to provide its services and products based on quality, safety and environmental best practices, to meet the customers&apos; requirements and expectations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values â€” dark gradient bg */}
        <section className="py-16" style={{ background: "linear-gradient(180deg, #7a8f22cc 0%, #2d4a10cc 100%)", backgroundColor: "#32592d" }}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold uppercase text-white tracking-wide">Our Core Values</h2>
              <div className="w-16 h-1 mx-auto mt-4" style={{ backgroundColor: "#8fb030" }} />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
              {coreValues.map((v, i) => (
                <div key={i} className="p-6 text-center" style={{ backgroundColor: i < 4 ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.85)" }}>
                  <div className="flex justify-center mb-3" style={{ color: "#7f9e28" }}>{v.icon}</div>
                  <h3 className="font-bold uppercase text-xs mb-2 leading-snug" style={{ color: "#32592d" }}>{v.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{v.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Welcome section: photos left, text right */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

              {/* Left: stacked photos */}
              <div className="space-y-4">
                <div className="relative w-full overflow-hidden" style={{ height: "220px" }}>
                  <Image src={`${BASE}a1-circle.jpeg`} alt="CEO Maurino Pansa" fill className="object-cover object-top" unoptimized />
                </div>
                <div className="relative w-full overflow-hidden" style={{ height: "180px" }}>
                  <Image src={`${BASE}Picture1.jpg`} alt="Pansa Facilities" fill className="object-cover" unoptimized />
                </div>
                {/* Video placeholder */}
                <div className="relative w-full overflow-hidden" style={{ height: "160px" }}>
                  <Image src={`${BASE}s3.jpg`} alt="Pansa Video" fill className="object-cover" unoptimized />
                  <div className="absolute inset-0 flex items-center justify-center" style={{ backgroundColor: "rgba(20,35,5,0.6)" }}>
                    <div className="w-14 h-14 rounded-full border-2 border-white flex items-center justify-center">
                      <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                    <p className="absolute bottom-3 left-4 text-white text-xs font-semibold">Pansa Group Informercial Eng. Dub</p>
                  </div>
                </div>
              </div>

              {/* Right: text */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold uppercase leading-tight mb-4" style={{ color: "#32592d" }}>
                  Welcome to Pansa Group<br />of Companies N.V.
                </h2>
                <div className="w-12 h-1 mb-6" style={{ backgroundColor: "#7f9e28" }} />
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Pansa Group of Companies N.V. is a diversified, innovative and dynamic holding company, consisting of Pansa Machine Shop N.V. (A.S.M.E. S &amp; U Stamp, NBIC R, VR, TO &amp; NB Stamp, SBB Certified), Commercial Contracting Company H. Pansa &amp; Sons N.V. (ISO 9001 and ISO 14001, Alcoa Certified) and the Pansa Industries N.V. with a track record of more than 40 years in the industry.
                </p>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  The Pansa Group is specialized in manufacturing, engineering, procurement, construction, fabrication, industrial &amp; human resource services and development, with more than 300 highly qualified employees. Pansa Group is currently the best one stop window to provide human resource services and support of your industrial development projects in oil &amp; gas, mining, food processing, agriculture and energy sectors in Suriname &amp; the region.
                </p>
                <p className="font-bold text-sm mb-6" style={{ color: "#7f9e28" }}>â†’ CEO MAURINO PANSA â†’</p>

                {/* Facilities accordion-style */}
                <div className="border-t border-gray-200 pt-5 mb-4">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="font-bold uppercase text-sm" style={{ color: "#32592d" }}>Facilities</span>
                    <span style={{ color: "#7f9e28" }}>&#8250;</span>
                  </div>
                  <p className="text-gray-500 text-xs leading-relaxed">
                    To accommodate our vision, mission and core values, the Pansa Group of Company has two separate modern buildings. The main office, CCCHPS N.V., houses the human resource and finance departments, the meeting and training rooms. The PMS building consists of an ASME and NBIC certified state of the art Machine Shop and workshop area of approximately 2500 mÂ², with a 10 ton and a 5 ton overhead crane.
                  </p>
                </div>
                <a href="#history" className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider" style={{ color: "#7f9e28" }}>
                  â†’ Company History
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 24/7 Emergency */}
        <section className="relative py-20">
          <Image src={`${BASE}gas-industry-2.jpg`} alt="Emergency" fill className="object-cover" unoptimized />
          <div className="absolute inset-0" style={{ backgroundColor: "rgba(10,20,5,0.82)" }} />
          <div className="relative z-10 text-center px-6">
            <p className="font-bold text-xs uppercase tracking-widest mb-4" style={{ color: "#8fb030" }}>We&apos;re Ready Anytime</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white uppercase mb-4">
              We Are Available For 24/7<br />Emergency Services
            </h2>
            <div className="w-16 h-1 mx-auto mb-8" style={{ backgroundColor: "#7f9e28" }} />
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a href="mailto:info@pansaholding.com" className="flex items-center gap-2 text-sm text-white hover:text-[#8fb030] transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" style={{ color: "#8fb030" }}>
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                info@pansaholding.com
              </a>
              <a href="tel:+5977698047" className="flex items-center gap-2 text-sm text-white hover:text-[#8fb030] transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" style={{ color: "#8fb030" }}>
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                Phone: (+597) 6802051 / (+597) 6802052 | Mobile: (+597) 7698047 / (+597) 7698050
              </a>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

              {/* Left */}
              <div>
                <p className="font-bold text-xs uppercase tracking-widest mb-3" style={{ color: "#7f9e28" }}>Why Choose Us</p>
                <h2 className="text-3xl font-bold uppercase leading-tight mb-4" style={{ color: "#32592d" }}>
                  Properly Every Project
                </h2>
                <div className="w-12 h-1 mb-6" style={{ backgroundColor: "#7f9e28" }} />
                <p className="text-gray-600 text-sm leading-relaxed mb-8">
                  People should choose Pansa Holding N.V. for our unwavering commitment to excellence, industry-leading expertise, innovative solutions, and a proven track record of delivering unparalleled results in every facet of our comprehensive industrial services.
                </p>
                <div className="flex gap-10">
                  <CircularProgress pct={63} label="Certified Team" />
                  <CircularProgress pct={79} label="Project Success" />
                </div>
              </div>

              {/* Right: industrial photo */}
              <div className="relative" style={{ height: "380px" }}>
                <Image src={`${BASE}oil-refineries-1.jpg`} alt="Why Choose Us" fill className="object-cover" unoptimized />
              </div>
            </div>
          </div>
        </section>

        {/* Company History */}
        <section id="history" className="py-16" style={{ backgroundColor: "#f5f5f5" }}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-10">
              <p className="font-bold text-xs uppercase tracking-widest mb-3" style={{ color: "#7f9e28" }}>Since 1975</p>
              <h2 className="text-3xl font-bold uppercase" style={{ color: "#32592d" }}>Company History</h2>
              <div className="w-16 h-1 mx-auto mt-4" style={{ backgroundColor: "#7f9e28" }} />
            </div>
            <div className="max-w-4xl mx-auto text-gray-600 text-sm leading-relaxed space-y-4">
              <p>Pansa Group of Companies N.V. evolved from a one man company founded in 1975 by the late Mr. Humphrey Pansa and his wife &amp; business partner Mrs. Juliana Pansa-Papotto. The primary business back then was the supply of lumber products for the Suralco pot rooms (Alcoa).</p>
              <p>In 1989 the company expanded its services to the Suralco Alumina Refinery with industrial cleaning and manpower. In 1998 after the retirement of the founder, Mr. Maurino Pansa assumed management, certified and diversified the company by adding several other services such as industrial and mechanical maintenance, fabrication and welding.</p>
              <p>In 2008, the Pansa Group embarked on a major restructuring program with the objective of becoming the key provider of industrial engineered services geared towards the Surinamese and regional industries. Our long term vision was predicated on the significant natural and human resources and the low risk of conducting business in the region.</p>
              <p>Thanks to years of experience, expertise and diversification in the industrial service nationally and internationally, the Pansa Group is an innovative and dynamic group of companies that continues to grow and achieve their success in providing a wide range of services to the total Surinamese Industry and the region.</p>
            </div>
          </div>
        </section>

        {/* Meet Our Team */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <p className="font-bold text-xs uppercase tracking-widest mb-3" style={{ color: "#7f9e28" }}>Our Team</p>
              <h2 className="text-3xl font-bold uppercase" style={{ color: "#32592d" }}>Meet Our Team</h2>
              <div className="w-16 h-1 mx-auto mt-4" style={{ backgroundColor: "#7f9e28" }} />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map((m, i) => (
                <div key={i} className="bg-white text-center overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                  <div className="relative" style={{ height: "240px" }}>
                    <Image src={m.photo} alt={m.name} fill className="object-cover object-top" unoptimized />
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-sm uppercase" style={{ color: "#32592d" }}>{m.name}</h3>
                    <p className="text-xs mt-1" style={{ color: "#7f9e28" }}>{m.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}

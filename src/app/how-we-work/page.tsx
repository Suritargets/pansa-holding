"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const BASE = "https://pansaholding.com/wp-content/uploads/2023/10/";
const BASE2 = "https://pansaholding.com/wp-content/uploads/2023/11/";

const carouselImages = [
  { src: `${BASE2}4.jpeg`, alt: "Pansa Team" },
  { src: `${BASE2}22.jpeg`, alt: "Pansa Team" },
  { src: `${BASE2}27.jpeg`, alt: "Pansa Team" },
  { src: `${BASE2}44.jpeg`, alt: "Pansa Team" },
  { src: `${BASE2}45.jpeg`, alt: "Pansa Team" },
];

const certGallery = [
  `${BASE2}3.png`,
  `${BASE2}4.png`,
  `${BASE2}5-768x1086-1.png`,
  `${BASE2}6.png`,
  `${BASE2}a-scaled.jpg`,
  `${BASE2}b-768x1086-1.jpg`,
  `${BASE2}Picture1-1.jpg`,
  `${BASE2}sbb-certificaat-erkend-leerbedrijf2-scaled.jpg`,
];

const accordions = [
  {
    title: "Personnel Competency Development",
    items: [
      "ISO 9001:2015 and ISO 14001:2015 training program",
      "Health Safety & Environment training program",
      "ASME and NBIC training program",
      "Welding, Machining and Mechanical training program",
      "Electrical, Instrumentation and Valve maintenance and repair training program",
    ],
  },
  {
    title: "Standards & Certifications",
    intro: "Our business model of industrial development, services, maintenance & manufacturing is developed and maintained through:",
    items: [
      "Alliance with strategic business partners worldwide",
      "Strong institutional structure through personnel competency development",
      "Integration of technology and continuous improvement by innovation",
      "Implementing international quality standards to obtain qualifications and certifications e.g.:",
      "A.S.M.E. standards, N.B.I. standards, A.P.I. standards (Authorized by Hartford Steam Boiler inspection & insurance company)",
      "ISO 9001: 2015, ISO 14001: 2015 (Authorized by KIWA)",
    ],
  },
  {
    title: "Customers",
    content:
      "Pansa Group of Companies N.V. is committed to serving our customers, by providing them with quality, professional and timely services. Our clients include alumina plants, gold mining operations, energy facilities, petrochemical industries, and international design & contracting firms.",
  },
];

function Carousel() {
  const [current, setCurrent] = useState(0);
  return (
    <div className="relative overflow-hidden" style={{ aspectRatio: "4/3" }}>
      {carouselImages.map((img, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-500"
          style={{ opacity: i === current ? 1 : 0, zIndex: i === current ? 1 : 0 }}
        >
          <Image src={img.src} alt={img.alt} fill className="object-cover" unoptimized />
        </div>
      ))}
      {/* Arrows */}
      <button
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 flex items-center justify-center text-white"
        style={{ backgroundColor: "rgba(42,62,15,0.7)" }}
        onClick={() => setCurrent((c) => (c - 1 + carouselImages.length) % carouselImages.length)}
      >
        &#8249;
      </button>
      <button
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 flex items-center justify-center text-white"
        style={{ backgroundColor: "rgba(42,62,15,0.7)" }}
        onClick={() => setCurrent((c) => (c + 1) % carouselImages.length)}
      >
        &#8250;
      </button>
      {/* Dots */}
      <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2 z-10">
        {carouselImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className="w-2.5 h-2.5 rounded-full border border-white transition-colors"
            style={{ backgroundColor: i === current ? "#7f9e28" : "transparent" }}
          />
        ))}
      </div>
    </div>
  );
}

function Accordion({ title, items, content, intro }: { title: string; items?: string[]; content?: string; intro?: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-200 mb-2">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-3.5 text-left font-bold text-xs uppercase tracking-wide text-white"
        style={{ backgroundColor: open ? "#32592d" : "#32592d" }}
      >
        <span>{title}</span>
        <svg
          className="w-4 h-4 transition-transform flex-shrink-0"
          style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div className="px-5 py-4 bg-white">
          {intro && <p className="text-sm text-gray-600 leading-relaxed mb-3">{intro}</p>}
          {items ? (
            <ul className="space-y-2">
              {items.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: "#7f9e28" }} />
                  {item}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-gray-600 leading-relaxed">{content}</p>
          )}
        </div>
      )}
    </div>
  );
}

export default function HowWeWorkPage() {
  return (
    <>
      <Header />
      <main>

        {/* Hero banner */}
        <div className="relative w-full" style={{ height: "340px" }}>
          <Image
            src={`${BASE}oil-and-gas-processing-plant-.jpg`}
            alt="How We Work"
            fill
            className="object-cover object-center"
            unoptimized
            priority
          />
          <div className="absolute inset-0" style={{ backgroundColor: "rgba(20, 35, 5, 0.72)" }} />
          <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
            <div className="text-xs text-gray-300 mb-4">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span className="mx-2">&#8250;</span>
              <span>HOW WE WORK</span>
            </div>
            <div className="px-10 py-5" style={{ backgroundColor: "#32592d" }}>
              <h1 className="text-white text-3xl md:text-4xl font-bold uppercase tracking-wide">
                HOW WE WORK
              </h1>
              <div className="w-10 h-0.5 mx-auto mt-3" style={{ backgroundColor: "#7f9e28" }} />
            </div>
          </div>
        </div>

        {/* Main content */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

              {/* Left: carousel + certificate */}
              <div>
                <Carousel />
                <div className="mt-6 border border-gray-200 overflow-hidden">
                  <Image
                    src={`${BASE2}Certification.jpg`}
                    alt="Certificate of Achievement - H. Pansa & Sons NV"
                    width={600}
                    height={420}
                    className="w-full object-contain"
                    unoptimized
                  />
                </div>
              </div>

              {/* Right: heading + accordions */}
              <div>
                <p className="font-bold text-xs uppercase tracking-widest mb-3" style={{ color: "#7f9e28" }}>
                  How We Work
                </p>
                <h2 className="text-2xl md:text-3xl font-bold uppercase leading-tight mb-4" style={{ color: "#32592d" }}>
                  HOW WE WORK
                </h2>
                <div className="w-10 h-1 mb-6" style={{ backgroundColor: "#7f9e28" }} />
                <p className="text-gray-500 text-sm leading-relaxed mb-8">
                  We are the pioneers in providing industrial mechanical maintenance and manufacturing
                  services to the refining, mining, agriculture, food processing, tourism, waste
                  management &amp; recycling solutions and energy, oil &amp; gas sectors.
                  We are specialized in high-quality customized services &amp; products.
                </p>
                <div>
                  {accordions.map((acc, i) => (
                    <Accordion key={i} title={acc.title} items={acc.items} content={acc.content} intro={acc.intro} />
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* YouTube video */}
        <section className="py-12 bg-white">
          <div className="max-w-5xl mx-auto px-6">
            <div className="relative w-full" style={{ paddingBottom: "56.25%", height: 0 }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/wBmtqNurzP8"
                title="Pansa Algemeen After Movie"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </section>

        {/* Certificates gallery */}
        <section className="py-12 bg-white border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {certGallery.map((src, i) => (
                <div key={i} className="border border-gray-200 overflow-hidden flex items-center justify-center bg-gray-50" style={{ minHeight: "140px" }}>
                  <Image
                    src={src}
                    alt={`Certificate ${i + 1}`}
                    width={200}
                    height={140}
                    className="object-contain w-full h-full"
                    unoptimized
                  />
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

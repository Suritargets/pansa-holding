"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const BASE = "https://pansaholding.com/wp-content/uploads/2023/10/";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", subject: "", email: "", phone: "", message: "" });

  return (
    <>
      <Header />
      <main>

        {/* Hero banner */}
        <div className="relative w-full" style={{ height: "340px" }}>
          <Image
            src={`${BASE}s2.jpeg`}
            alt="Contact"
            fill
            className="object-cover object-center"
            unoptimized
            priority
          />
          <div className="absolute inset-0" style={{ backgroundColor: "rgba(20, 35, 5, 0.65)" }} />
          <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
            <div className="text-xs text-gray-300 mb-4">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span className="mx-2">&#8250;</span>
              <span>Contact</span>
            </div>
            <div className="px-14 py-5" style={{ backgroundColor: "#32592d" }}>
              <h1 className="text-white text-3xl md:text-4xl font-bold uppercase tracking-wide">
                CONTACT
              </h1>
              <div className="w-10 h-0.5 mx-auto mt-3" style={{ backgroundColor: "#7f9e28" }} />
            </div>
          </div>
        </div>

        {/* Intro section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <p className="text-center text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#7f9e28" }}>
              Get In Touch
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-6">
              {/* Left */}
              <div>
                <h2 className="text-2xl font-bold uppercase mb-4" style={{ color: "#32592d" }}>
                  Don&apos;t Hesitate To Contact Us
                </h2>
                <div className="w-10 h-1 mb-6" style={{ backgroundColor: "#7f9e28" }} />
                <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
                  <p>
                    The Pansa Group of Companies NV started in 1975 as a contracting company that provided
                    industrial maintenance and temporary labor.
                  </p>
                  <p>
                    The Pansa Group is a flexible, efficient and promising group of companies that continues
                    to grow and achieve their successes. We provide a wide range of services to the total
                    Surinamese &amp; regional industries.
                  </p>
                  <p>
                    Our Company is well recognized within Suriname &amp; the region by several institutions
                    including the Government and several State Agencies.
                  </p>
                </div>
              </div>

              {/* Right */}
              <div>
                <h2 className="text-2xl font-bold uppercase mb-4" style={{ color: "#32592d" }}>
                  Need Help?
                </h2>
                <div className="w-10 h-1 mb-6" style={{ backgroundColor: "#7f9e28" }} />
                <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
                  <p>
                    We work with International Qualifications and Certifications and are the leaders in our
                    field of services in Suriname &amp; the region. Our headquarter is located in the district
                    of Para, in The Republic of Suriname, in South America.
                  </p>
                  <p>
                    Pansa Group of Companies NV is an efficient, solid, transparent and certified holding
                    company on the road to a successful sustainable development future.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact info boxes */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0 mt-12">
              {/* Office */}
              <div className="flex items-start gap-4 p-8 border border-gray-200">
                <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full border-2" style={{ borderColor: "#7f9e28", color: "#7f9e28" }}>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold uppercase text-sm mb-2" style={{ color: "#32592d" }}>Our Office</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    Address: Martin Luther King Highway km 23 Para - Suriname (South - America)
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4 p-8 text-white" style={{ backgroundColor: "#32592d" }}>
                <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full border-2 border-white/40">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold uppercase text-sm mb-2">Our Phone</h4>
                  <p className="text-xs text-white/80 leading-relaxed">
                    Office hours from: 8.00 - 16.00<br />
                    323451 | 343613 | 343352<br />
                    (+597) 7698047/(+597) 7698050
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4 p-8 text-white" style={{ backgroundColor: "#7f9e28" }}>
                <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full border-2 border-white/40">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold uppercase text-sm mb-2">Our Email</h4>
                  <a href="mailto:info@pansaholding.com" className="text-xs text-white/90 hover:text-white transition-colors">
                    info@pansaholding.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map + Form section */}
        <section className="pb-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-gray-200">

              {/* Google Map */}
              <div style={{ minHeight: "400px" }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62737.44929408367!2d-55.35!3d5.8!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8d0fb46edb15d6c3%3A0x7f27ca06e24c31c3!2sPara%2C%20Suriname!5e0!3m2!1sen!2snl!4v1700000000000!5m2!1sen!2snl"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "400px", display: "block" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Pansa Group Location"
                />
              </div>

              {/* Contact form */}
              <div className="p-10">
                <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "#7f9e28" }}>
                  Let&apos;s Talk
                </p>
                <h2 className="text-2xl font-bold uppercase mb-6" style={{ color: "#32592d" }}>
                  Leave A Message
                </h2>

                <form className="space-y-4" onSubmit={e => e.preventDefault()}>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase mb-1 text-gray-600">Name</label>
                      <input
                        type="text"
                        placeholder="Full Name"
                        value={form.name}
                        onChange={e => setForm({ ...form, name: e.target.value })}
                        className="w-full border border-gray-300 px-3 py-2.5 text-xs focus:outline-none focus:border-[#7f9e28] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase mb-1 text-gray-600">Subject</label>
                      <input
                        type="text"
                        placeholder="Subject"
                        value={form.subject}
                        onChange={e => setForm({ ...form, subject: e.target.value })}
                        className="w-full border border-gray-300 px-3 py-2.5 text-xs focus:outline-none focus:border-[#7f9e28] transition-colors"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase mb-1 text-gray-600">Email</label>
                      <input
                        type="email"
                        placeholder="Your Email"
                        value={form.email}
                        onChange={e => setForm({ ...form, email: e.target.value })}
                        className="w-full border border-gray-300 px-3 py-2.5 text-xs focus:outline-none focus:border-[#7f9e28] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase mb-1 text-gray-600">Phone</label>
                      <input
                        type="tel"
                        placeholder="Your Phone"
                        value={form.phone}
                        onChange={e => setForm({ ...form, phone: e.target.value })}
                        className="w-full border border-gray-300 px-3 py-2.5 text-xs focus:outline-none focus:border-[#7f9e28] transition-colors"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase mb-1 text-gray-600">Message</label>
                    <textarea
                      placeholder="Your Comment"
                      rows={5}
                      value={form.message}
                      onChange={e => setForm({ ...form, message: e.target.value })}
                      className="w-full border border-gray-300 px-3 py-2.5 text-xs focus:outline-none focus:border-[#7f9e28] transition-colors resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3.5 text-white text-xs font-bold uppercase tracking-widest hover:opacity-90 transition-opacity"
                    style={{ backgroundColor: "#7f9e28" }}
                  >
                    Send Message
                  </button>
                </form>
              </div>

            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}

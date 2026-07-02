"use client";

import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your message! We will contact you soon.");
    setForm({ name: "", email: "", phone: "", service: "", message: "" });
  };

  return (
    <section id="contact" className="py-20" style={{ backgroundColor: "#32592d" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="font-semibold text-sm uppercase tracking-widest mb-2" style={{ color: "#8fb030" }}>
            Get In Touch
          </p>
          <h2 className="text-white text-3xl md:text-4xl font-bold mb-4">
            Contact Us
          </h2>
          <div className="w-16 h-1 mx-auto" style={{ backgroundColor: "#7f9e28" }} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact info */}
          <div className="text-white space-y-8">
            <h3 className="text-xl font-bold mb-6">Contact Information</h3>
            <div className="space-y-5">
              {[
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  ),
                  label: "Address",
                  content: "Martin Luther King Highway km 23\nPara - Suriname (South America)",
                },
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  ),
                  label: "Phone",
                  content: "323451 | 343613 | 343352\n(+597) 7698047 | (+597) 7698050",
                },
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  ),
                  label: "Email",
                  content: "info@pansaholding.com",
                },
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                  label: "Office Hours",
                  content: "Mon-Fri, 9:00 am - 5:00 pm",
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "#7f9e28" }}>
                    {item.icon}
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-gray-300 mb-1">{item.label}</div>
                    {item.content.split("\n").map((line, j) => (
                      <div key={j} className="text-white text-sm">{line}</div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="bg-white rounded-xl p-8 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold mb-1" style={{ color: "#32592d" }}>Name *</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="w-full border border-gray-200 rounded px-4 py-2.5 text-sm focus:outline-none transition-colors"
                  style={{ focusBorderColor: "#7f9e28" } as React.CSSProperties}
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1" style={{ color: "#32592d" }}>Email *</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="w-full border border-gray-200 rounded px-4 py-2.5 text-sm focus:outline-none transition-colors"
                  placeholder="your@email.com"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold mb-1" style={{ color: "#32592d" }}>Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full border border-gray-200 rounded px-4 py-2.5 text-sm focus:outline-none"
                  placeholder="+597 ..."
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1" style={{ color: "#32592d" }}>Service</label>
                <select
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  className="w-full border border-gray-200 rounded px-4 py-2.5 text-sm focus:outline-none bg-white"
                >
                  <option value="">Select a service</option>
                  <option>Engineering, Procurement & Construction</option>
                  <option>Fabrication of Steel Construction</option>
                  <option>Human Resource Services</option>
                  <option>Health, Safety, Environment</option>
                  <option>Industrial Maintenance</option>
                  <option>Power Boilers & Pressure Vessels</option>
                  <option>Technical Vocational Training</option>
                  <option>Valve & Pump Maintenance</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1" style={{ color: "#32592d" }}>Message *</label>
              <textarea
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={handleChange}
                className="w-full border border-gray-200 rounded px-4 py-2.5 text-sm focus:outline-none resize-none"
                placeholder="Tell us about your project..."
              />
            </div>
            <button
              type="submit"
              className="w-full text-white font-bold py-3 rounded hover:opacity-90 transition-opacity"
              style={{ backgroundColor: "#7f9e28" }}
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

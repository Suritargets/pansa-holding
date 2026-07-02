"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const serviceLinks = [
  { label: "Engineering, Procurement, Construction & Maintenance", href: "/services/engineering-procurement" },
  { label: "Fabrication of Steel Construction, Storage Tanks, Silo's, Cyclones", href: "/services/steel-fabrication" },
  { label: "Health, Safety, Environment", href: "/services/health-safety-environment" },
  { label: "Human Resource Services", href: "/services/human-resource-services" },
  { label: "Industrial Maintenance and Plant Operation Services", href: "/services/industrial-maintenance" },
  { label: "Manufacturing, Repair and Alteration of Power Boilers & Pressure Vessels", href: "/services/power-boilers-pressure-vessels" },
  { label: "Technical Vocational Training & Qualification", href: "/services/technical-vocational-training" },
  { label: "Valve & Pump Maintenance and Machine Shop Works", href: "/services/valve-pump-machine-shop" },
];

const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "How We Work", href: "/how-we-work" },
  { label: "Services", href: "/services", dropdown: true },
  { label: "Companies", href: "/companies" },
  { label: "Sustainability", href: "/#about" },
  { label: "Events", href: "/#about" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="w-full sticky top-0 z-50">
      {/* Top bar - dark forest green */}
      <div style={{ backgroundColor: "#32592d" }} className="text-white text-xs py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center flex-wrap gap-2">
          <div className="flex flex-wrap gap-4 items-center">
            <span className="flex items-center gap-1.5">
              <svg className="w-3 h-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              Phone: 323451 | 343613 | 343352 &nbsp; Mobile: (+597) 7698047 / (+597) 7698050
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <svg className="w-3 h-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            <a href="mailto:info@pansaholding.com" className="hover:text-yellow-300 transition-colors">
              info@pansaholding.com
            </a>
            {/* Social icons */}
            <div className="flex gap-2 ml-4">
              {["f", "t", "in", "li"].map((s, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-5 h-5 border border-white/40 rounded flex items-center justify-center hover:bg-white/20 transition-colors text-[10px] font-bold"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main nav - white */}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
          <Link href="/">
            <Image
              src="https://pansaholding.com/wp-content/uploads/2023/10/logo-pansa-group-zwart-letter.png"
              alt="Pansa Group Logo"
              width={160}
              height={50}
              className="object-contain h-12 w-auto"
              unoptimized
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-0">
            {navItems.map((item) =>
              item.dropdown ? (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <Link
                    href={item.href}
                    className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-[#7f9e28] transition-colors uppercase tracking-wide text-xs flex items-center gap-1"
                  >
                    {item.label}
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                  {servicesOpen && (
                    <div className="absolute left-0 top-full z-50 w-72 shadow-xl border-t-2" style={{ borderColor: "#7f9e28", backgroundColor: "#fff" }}>
                      {serviceLinks.map((s) => (
                        <Link
                          key={s.href}
                          href={s.href}
                          className="block px-5 py-3 text-xs text-gray-700 hover:text-white border-b border-gray-100 last:border-0 leading-snug"
                          style={{ transition: "background 0.15s" }}
                          onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#32592d")}
                          onMouseLeave={e => (e.currentTarget.style.backgroundColor = "")}
                        >
                          {s.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-[#7f9e28] transition-colors uppercase tracking-wide text-xs"
                >
                  {item.label}
                </Link>
              )
            )}
            {/* Contact Us button */}
            <Link
              href="/#contact"
              style={{ backgroundColor: "#7f9e28" }}
              className="ml-4 flex items-center gap-2 text-white text-xs font-bold px-4 py-3 hover:opacity-90 transition-opacity uppercase tracking-wide"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <div>
                <div>CONTACT US</div>
                <div className="text-[10px] font-normal opacity-80">Get in touch with us</div>
              </div>
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className="block w-6 h-0.5 bg-gray-700" />
            <span className="block w-6 h-0.5 bg-gray-700" />
            <span className="block w-6 h-0.5 bg-gray-700" />
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 px-4 py-2">
            {navItems.map((item) =>
              item.dropdown ? (
                <div key={item.label}>
                  <div className="py-2.5 text-sm font-bold text-gray-700 border-b border-gray-50 uppercase tracking-wide" style={{ color: "#32592d" }}>
                    Services
                  </div>
                  {serviceLinks.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      onClick={() => setMenuOpen(false)}
                      className="block py-2 pl-4 text-xs text-gray-600 hover:text-[#7f9e28] border-b border-gray-50 last:border-0 leading-snug"
                    >
                      &#8250; {s.label}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="block py-2.5 text-sm font-medium text-gray-700 hover:text-[#7f9e28] border-b border-gray-50 last:border-0 uppercase tracking-wide"
                >
                  {item.label}
                </Link>
              )
            )}
          </div>
        )}
      </nav>
    </header>
  );
}

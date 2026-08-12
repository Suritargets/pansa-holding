import Image from "next/image";
import Link from "next/link";

const col1 = [
  { label: "About Pansa Group of Companies N.V.", href: "/about" },
  { label: "How we work", href: "/how-we-work" },
  { label: "Sustainability", href: "/sustainability" },
  { label: "Events", href: "/events" },
  { label: "Contact", href: "/contact" },
];

const col2 = [
  { label: "About Pansa Machine Shop N.V.", href: "https://pansa-machinery.vercel.app/about-us", external: true },
  { label: "How we work", href: "https://pansa-machinery.vercel.app/how-we-work", external: true },
  { label: "Services & Products", href: "https://pansa-machinery.vercel.app/services-products", external: true },
  { label: "Contact", href: "https://pansa-machinery.vercel.app/contact-us", external: true },
];

const col3 = [
  { label: "About CCC H. Pansa & Sons N.V.", href: "https://hpsnv-website.vercel.app/about-us", external: true },
  { label: "Services", href: "https://hpsnv-website.vercel.app/services", external: true },
  { label: "Training", href: "https://hpsnv-website.vercel.app/training", external: true },
  { label: "Application registration", href: "https://hpsnv-website.vercel.app/application-registration", external: true },
  { label: "Contact", href: "https://hpsnv-website.vercel.app/contact", external: true },
];

const socials = [
  {
    title: "Facebook",
    href: "https://www.facebook.com/pansagroup/",
    path: "M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z",
  },
  {
    title: "Instagram",
    href: "https://www.instagram.com/pansaholding/",
    path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
  },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/company/40653366/",
    path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667h-3.554V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
  },
  {
    title: "YouTube",
    href: "https://www.youtube.com/channel/UClIVqfD71jK_1Uk63Rt3I7Q/featured",
    path: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z",
  },
];

function FooterCol({ title, links }: { title: string; links: { label: string; href: string; external?: boolean }[] }) {
  return (
    <div>
      <h4 className="font-bold text-xs uppercase tracking-widest text-white mb-3">{title}</h4>
      <div className="w-8 h-0.5 mb-4" style={{ backgroundColor: "#7f9e28" }} />
      <ul className="space-y-2.5">
        {links.map((l) => (
          <li key={l.label}>
            {l.external ? (
              <a href={l.href} target="_blank" rel="noopener noreferrer" className="group text-gray-400 text-sm hover:text-white transition-colors flex items-start gap-1.5">
                <span className="text-[10px] mt-0.5 transition-transform group-hover:translate-x-0.5" style={{ color: "#7f9e28" }}>›</span>
                {l.label}
              </a>
            ) : (
              <Link href={l.href} className="group text-gray-400 text-sm hover:text-white transition-colors flex items-start gap-1.5">
                <span className="text-[10px] mt-0.5 transition-transform group-hover:translate-x-0.5" style={{ color: "#7f9e28" }}>›</span>
                {l.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

function InfoRow({ icon, label, children }: { icon: React.ReactNode; label: string; children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-3">
      <div className="w-8 h-8 flex items-center justify-center rounded-full flex-shrink-0" style={{ backgroundColor: "rgba(127,158,40,0.15)", color: "#8fb030" }}>
        {icon}
      </div>
      <div>
        <div className="font-bold text-[11px] text-gray-300 uppercase tracking-widest mb-0.5">{label}</div>
        <div className="text-sm text-gray-400 leading-relaxed">{children}</div>
      </div>
    </div>
  );
}

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#2d3d10" }} className="text-white">
      {/* Accent top border */}
      <div className="h-1" style={{ backgroundColor: "#7f9e28" }} />

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-x-8 gap-y-12">

          {/* Brand + contact info */}
          <div className="sm:col-span-2 lg:col-span-4">
            <Image
              src="https://pansaholding.com/wp-content/uploads/2023/10/logo-pansa-group-wit.png"
              alt="Pansa Group"
              width={160}
              height={80}
              className="object-contain h-16 w-auto mb-6"
              unoptimized
            />
            <div className="space-y-5">
              <InfoRow
                label="Office"
                icon={
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                }
              >
                Martin Luther Kingweg km 23<br />Para - Suriname (South - America)
              </InfoRow>
              <InfoRow
                label="Support"
                icon={
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                }
              >
                <a href="mailto:info@pansaholding.com" className="hover:text-white transition-colors">
                  info@pansaholding.com
                </a>
              </InfoRow>
            </div>

            {/* Social icons */}
            <div className="flex gap-3 mt-7">
              {socials.map((s) => (
                <a
                  key={s.title}
                  href={s.href}
                  title={s.title}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-9 h-9 flex items-center justify-center rounded-full border border-white/15 bg-white/[0.04] hover:bg-[#7f9e28] hover:border-transparent transition-colors"
                >
                  <svg className="w-4 h-4 fill-gray-300 group-hover:fill-white transition-colors" viewBox="0 0 24 24">
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          <div className="lg:col-span-2">
            <FooterCol title="Pansa Group of Companies N.V." links={col1} />
          </div>
          <div className="lg:col-span-2">
            <FooterCol title="Pansa Machine Shop N.V." links={col2} />
          </div>
          <div className="lg:col-span-2">
            <FooterCol title="CCC H. Pansa & Sons N.V." links={col3} />
          </div>

          {/* More information */}
          <div className="lg:col-span-2">
            <h4 className="font-bold text-xs uppercase tracking-widest text-white mb-3">More Information</h4>
            <div className="w-8 h-0.5 mb-4" style={{ backgroundColor: "#7f9e28" }} />
            <div className="space-y-5">
              <InfoRow
                label="Phone"
                icon={
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                }
              >
                (+597) 323451
              </InfoRow>
              <InfoRow
                label="Mobile"
                icon={
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                  </svg>
                }
              >
                (+597) 7698051<br />(+597) 7698050
              </InfoRow>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10" style={{ backgroundColor: "#1f2a0b" }}>
        <div className="max-w-7xl mx-auto px-6 py-5 text-center text-xs text-gray-500">
          © 2019-{new Date().getFullYear()} Pansa Group of Companies N.V. All rights reserved, their respective logos, as well as company and product names used here, are trademarks of Pansa Holding and may not be used without permission.
          <div className="mt-1 font-semibold" style={{ color: "#7f9e28" }}>
            Design by Suritargets
          </div>
        </div>
      </div>
    </footer>
  );
}

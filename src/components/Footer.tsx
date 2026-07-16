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

function FooterCol({ title, links }: { title: string; links: { label: string; href: string; external?: boolean }[] }) {
  return (
    <div>
      <h4 className="font-bold text-xs uppercase tracking-widest text-white mb-3">{title}</h4>
      <div className="w-8 h-0.5 mb-4" style={{ backgroundColor: "#7f9e28" }} />
      <ul className="space-y-2">
        {links.map((l) => (
          <li key={l.label}>
            {l.external ? (
              <a href={l.href} target="_blank" rel="noopener noreferrer" className="text-gray-400 text-sm hover:text-white transition-colors flex items-center gap-1.5">
                <span className="text-[10px]" style={{ color: "#7f9e28" }}>›</span>
                {l.label}
              </a>
            ) : (
              <Link href={l.href} className="text-gray-400 text-sm hover:text-white transition-colors flex items-center gap-1.5">
                <span className="text-[10px]" style={{ color: "#7f9e28" }}>›</span>
                {l.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#2d3d10" }} className="text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* Brand + contact info */}
          <div className="lg:col-span-1">
            <Image
              src="https://pansaholding.com/wp-content/uploads/2023/10/logo-pansa-group-wit.png"
              alt="Pansa Group"
              width={160}
              height={80}
              className="object-contain h-16 w-auto mb-6"
              unoptimized
            />
            <div className="space-y-4 text-sm text-gray-400">
              <div>
                <div className="font-bold text-xs uppercase text-gray-300 mb-1 tracking-widest">Office</div>
                <p className="leading-relaxed">Martin Luther King Highway km 23<br />Para - Suriname (South - America)</p>
              </div>
              <div>
                <div className="font-bold text-xs uppercase text-gray-300 mb-1 tracking-widest">Support</div>
                <a href="mailto:info@pansaholding.com" className="hover:text-white transition-colors">
                  info@pansaholding.com
                </a>
              </div>
              {/* Social icons */}
              <div className="flex gap-3 pt-2">
                {[
                  { label: "f", title: "Facebook" },
                  { label: "t", title: "Twitter" },
                  { label: "in", title: "Instagram" },
                  { label: "li", title: "LinkedIn" },
                ].map((s) => (
                  <a
                    key={s.title}
                    href="#"
                    title={s.title}
                    className="w-8 h-8 flex items-center justify-center text-xs font-bold text-white hover:text-white transition-colors border border-white/20 hover:border-white/60"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Nav columns */}
          <FooterCol title="PANSA GROUP OF COMPANIES N.V." links={col1} />
          <FooterCol title="PANSA MACHINE SHOP N.V." links={col2} />
          <FooterCol title="CCC H. PANSA & SONS N.V." links={col3} />

          {/* More information */}
          <div>
            <h4 className="font-bold text-xs uppercase tracking-widest text-white mb-3">MORE INFORMATION</h4>
            <div className="w-8 h-0.5 mb-4" style={{ backgroundColor: "#7f9e28" }} />
            <div className="text-gray-400 text-sm space-y-3">
              <div>
                <div className="font-semibold text-xs text-gray-300 uppercase tracking-widest mb-1">Phone</div>
                <div>323451 | 343613 | 343352</div>
              </div>
              <div>
                <div className="font-semibold text-xs text-gray-300 uppercase tracking-widest mb-1">Mobile</div>
                <div>(+597) 7698047</div>
                <div>(+597) 7698050</div>
              </div>
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

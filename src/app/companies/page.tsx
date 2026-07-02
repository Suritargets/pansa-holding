import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const BASE = "https://pansaholding.com/wp-content/uploads/2023/10/";

const companies = [
  {
    name: "Pansa Machine Shop N.V.",
    description: "Pansa Machine Shop N.V. works according to the national, regional and international standards and codes in the field of mechanical engineering and manufacturing.",
    href: "#",
    style: "dark",
    icon: (
      <svg className="w-8 h-8 mb-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 15.5A3.5 3.5 0 018.5 12 3.5 3.5 0 0112 8.5a3.5 3.5 0 013.5 3.5 3.5 3.5 0 01-3.5 3.5m7.43-2.92c.04-.32.07-.64.07-.97s-.03-.66-.07-1l2.16-1.63c.19-.15.24-.42.12-.64l-2.05-3.55c-.12-.22-.39-.3-.61-.22l-2.55 1c-.53-.4-1.1-.73-1.72-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.62.25-1.19.59-1.72.98l-2.55-1c-.23-.09-.49 0-.61.22L2.2 8.82c-.13.22-.07.49.12.64l2.16 1.63c-.04.34-.07.67-.07 1s.03.65.07.97l-2.16 1.66c-.19.15-.24.42-.12.64l2.05 3.55c.12.22.39.3.61.22l2.55-1c.53.4 1.1.73 1.72.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.62-.25 1.19-.58 1.72-.98l2.55 1c.23.08.49 0 .61-.22l2.05-3.55c.12-.22.07-.49-.12-.64l-2.16-1.66z" />
      </svg>
    ),
  },
  {
    name: "Pansa Holding N.V.",
    description: "Pansa Group of Companies N.V. is a diversified, innovative and dynamic industrial holding company committed to excellence in all its operations.",
    href: "#",
    style: "light",
    icon: (
      <svg className="w-8 h-8 mb-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 3L2 12h3v8h14v-8h3L12 3zm0 2.7L19 12v7H5v-7l7-6.3zM10 14v4h4v-4h-4z" />
      </svg>
    ),
  },
  {
    name: "CCC H. Pansa & Sons N.V.",
    description: "The Commercial Contracting Company H. Pansa & Sons N.V. has been a cornerstone of industrial and commercial contracting services.",
    href: "#",
    style: "light",
    icon: (
      <svg className="w-8 h-8 mb-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
      </svg>
    ),
  },
  {
    name: "Pansa Industries N.V.",
    description: "Pansa Industries N.V. delivers advanced industrial solutions and manufacturing capabilities to serve a wide range of sectors across the region.",
    href: "#",
    style: "olive",
    icon: (
      <svg className="w-8 h-8 mb-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M21 6h-4V4a2 2 0 00-2-2H9a2 2 0 00-2 2v2H3a1 1 0 00-1 1v13a1 1 0 001 1h18a1 1 0 001-1V7a1 1 0 00-1-1zM9 4h6v2H9V4zm11 15H4V8h16v11z" />
        <path d="M6 10h2v7H6zm4 0h2v7h-2zm4 0h2v7h-2z" />
      </svg>
    ),
  },
  {
    name: "P²CET",
    description: "PUBLIC PRIVATE CENTER OF EXCELLENCE FOR TECHNOLOGY — advancing technical education and innovation for a skilled workforce.",
    href: "#",
    style: "dark",
    icon: (
      <svg className="w-8 h-8 mb-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 3a9 9 0 100 18A9 9 0 0012 3zm0 16a7 7 0 110-14 7 7 0 010 14zm-1-5h2v2h-2zm0-8h2v6h-2z" />
      </svg>
    ),
  },
];

const stats = [
  { value: "753", label: "Project Success" },
  { value: "579", label: "Our Equipments" },
  { value: "342", label: "Satisfied Clients" },
  { value: "231", label: "Industry Expertise" },
];

const stylemap = {
  dark:  { bg: "#32592d", text: "white", descColor: "rgba(255,255,255,0.85)", linkColor: "#c5d88a", iconColor: "#8fb030" },
  olive: { bg: "#7f9e28", text: "white", descColor: "rgba(255,255,255,0.85)", linkColor: "white", iconColor: "rgba(255,255,255,0.8)" },
  light: { bg: "#ffffff", text: "#32592d", descColor: "#6b7280", linkColor: "#7f9e28", iconColor: "#7f9e28" },
};

function CompanyCard({ name, description, href, style, icon }: typeof companies[0]) {
  const s = stylemap[style as keyof typeof stylemap];
  return (
    <div
      className="flex flex-col p-8 group"
      style={{
        backgroundColor: s.bg,
        border: style === "light" ? "1px solid #e5e7eb" : "none",
        minHeight: "260px",
      }}
    >
      <div style={{ color: s.iconColor }}>{icon}</div>
      <h3 className="font-bold uppercase text-sm leading-snug mb-2" style={{ color: s.text }}>
        {name}
      </h3>
      <div className="w-8 h-0.5 mb-4" style={{ backgroundColor: s.linkColor }} />
      <p className="text-xs leading-relaxed flex-1 mb-5" style={{ color: s.descColor }}>
        {description}
      </p>
      <Link
        href={href}
        className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider hover:gap-2 transition-all"
        style={{ color: s.linkColor }}
      >
        Learn More &nbsp;&rarr;
      </Link>
    </div>
  );
}

export default function CompaniesPage() {
  return (
    <>
      <Header />
      <main>

        {/* Hero banner */}
        <div className="relative w-full" style={{ height: "340px" }}>
          <Image
            src={`${BASE}industrial-zone-in-milazzo-town-on-sicily.jpg`}
            alt="Companies"
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
              <span>Companies</span>
            </div>
            <div className="px-14 py-5" style={{ backgroundColor: "#32592d" }}>
              <h1 className="text-white text-3xl md:text-4xl font-bold uppercase tracking-wide">
                COMPANIES
              </h1>
              <div className="w-10 h-0.5 mx-auto mt-3" style={{ backgroundColor: "#7f9e28" }} />
            </div>
          </div>
        </div>

        {/* Companies grid */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">

            {/* Row 1: Intro + 2 cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
              <div className="p-8 flex flex-col justify-center bg-white border border-gray-100">
                <p className="font-bold text-xs uppercase tracking-widest mb-3" style={{ color: "#7f9e28" }}>
                  Our Companies
                </p>
                <h2 className="text-2xl font-bold uppercase leading-tight mb-4" style={{ color: "#32592d" }}>
                  We Provide<br />Best Services
                </h2>
                <div className="w-10 h-1 mb-5" style={{ backgroundColor: "#7f9e28" }} />
                <p className="text-gray-500 text-xs leading-relaxed">
                  Pansa Group of Companies N.V. is a diversified industrial group
                  offering a wide range of services through its specialized subsidiaries.
                </p>
              </div>
              <CompanyCard {...companies[0]} />
              <CompanyCard {...companies[1]} />
            </div>

            {/* Row 2: 3 cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
              <CompanyCard {...companies[2]} />
              <CompanyCard {...companies[3]} />
              <CompanyCard {...companies[4]} />
            </div>

          </div>
        </section>

        {/* Stats section */}
        <section className="py-16 bg-white border-t border-gray-100">
          <div className="max-w-5xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-0 divide-x divide-gray-200">
              {stats.map((stat, i) => (
                <div key={i} className="flex flex-col items-center justify-center py-8 px-4 text-center">
                  <span className="text-4xl font-bold mb-1" style={{ color: "#32592d" }}>
                    {stat.value}
                    <span style={{ color: "#7f9e28" }}>+</span>
                  </span>
                  <span className="text-xs text-gray-500 uppercase tracking-wide">{stat.label}</span>
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

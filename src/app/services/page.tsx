import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const BASE = "https://pansaholding.com/wp-content/uploads/2023/10/";

const services = [
  {
    title: "Industrial Maintenance and Plant Operation Services",
    description: "Ensure the optimal performance of your industrial facilities with our comprehensive maintenance and operation solutions.",
    image: `${BASE}s5.jpeg`,
    href: "/services/industrial-maintenance",
    style: "dark",
  },
  {
    title: "Human Resource Services",
    description: "Unlock the full potential of your workforce with our customized human resource services designed to meet your staffing and talent needs.",
    image: `${BASE}s6.jpeg`,
    href: "/services/human-resource-services",
    style: "light",
  },
  {
    title: "Manufacturing, Repair and Alteration of Power Boilers & Pressure Vessels",
    description: "Trust our skilled professionals for precision manufacturing and reliable repair services.",
    image: `${BASE}s1.jpeg`,
    href: "/services/power-boilers-pressure-vessels",
    style: "light",
  },
  {
    title: "Health, Safety, Environment",
    description: "Prioritize safety and environmental compliance with our specialized services to safeguard your operations.",
    image: `${BASE}s8.jpg`,
    href: "/services/health-safety-environment",
    style: "olive",
  },
  {
    title: "Technical Vocational Training & Qualification",
    description: "Invest in the development of your team with our tailored training programs and qualification services.",
    image: `${BASE}s7.jpg`,
    href: "/services/technical-vocational-training",
    style: "dark",
  },
  {
    title: "Valve & Pump Maintenance and Machine Shop Works",
    description: "Keep your equipment in peak condition with our expert maintenance and machine shop services.",
    image: `${BASE}s4.jpeg`,
    href: "/services/valve-pump-machine-shop",
    style: "light",
  },
  {
    title: "Engineering, Procurement, Construction & Maintenance",
    description: "From conceptualization to maintenance, we offer end-to-end solutions for engineering projects.",
    image: `${BASE}s3.jpg`,
    href: "/services/engineering-procurement",
    style: "olive",
  },
  {
    title: "Fabrication of Steel Construction, Storage Tanks, Silo’s, Cyclones",
    description: "Rely on our expertise in steel fabrication for durable and efficient industrial structures.",
    image: `${BASE}s2.jpeg`,
    href: "/services/steel-fabrication",
    style: "dark",
  },
];

const stylemap = {
  dark:  { bg: "#32592d", text: "white", linkColor: "#c5d88a", border: "none" },
  olive: { bg: "#7f9e28", text: "white", linkColor: "white",   border: "none" },
  light: { bg: "#ffffff", text: "#32592d", linkColor: "#7f9e28", border: "1px solid #e5e7eb" },
};

function ServiceCard({ title, description, image, href, style }: typeof services[0]) {
  const s = stylemap[style as keyof typeof stylemap];
  return (
    <div
      className="relative flex flex-col p-8 group"
      style={{ backgroundColor: s.bg, border: s.border, minHeight: "280px" }}
    >
      {/* Subtle background image */}
      <div className="absolute inset-0 overflow-hidden opacity-10 group-hover:opacity-15 transition-opacity">
        <Image src={image} alt={title} fill className="object-cover" unoptimized />
      </div>
      <div className="relative z-10 flex flex-col h-full">
        <h3
          className="font-bold uppercase text-sm leading-snug mb-3"
          style={{ color: s.text }}
        >
          {title}
        </h3>
        <div className="w-8 h-0.5 mb-4" style={{ backgroundColor: s.linkColor }} />
        <p className="text-xs leading-relaxed flex-1 mb-5" style={{ color: style === "light" ? "#6b7280" : "rgba(255,255,255,0.85)" }}>
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
    </div>
  );
}

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main>

        {/* Hero banner */}
        <div className="relative w-full" style={{ height: "340px" }}>
          <Image
            src={`${BASE}industrial-zone-in-milazzo-town-on-sicily.jpg`}
            alt="Services"
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
              <span>Services</span>
            </div>
            <div className="px-14 py-5" style={{ backgroundColor: "#32592d" }}>
              <h1 className="text-white text-3xl md:text-4xl font-bold uppercase tracking-wide">
                SERVICES
              </h1>
              <div className="w-10 h-0.5 mx-auto mt-3" style={{ backgroundColor: "#7f9e28" }} />
            </div>
          </div>
        </div>

        {/* Services grid */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">

            {/* Row 1: Intro + 2 cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0 mb-0">

              {/* Intro */}
              <div className="p-8 flex flex-col justify-center bg-white border border-gray-100">
                <p className="font-bold text-xs uppercase tracking-widest mb-3" style={{ color: "#7f9e28" }}>
                  Our Services
                </p>
                <h2 className="text-2xl font-bold uppercase leading-tight mb-4" style={{ color: "#32592d" }}>
                  We Provide<br />Best Services
                </h2>
                <div className="w-10 h-1 mb-5" style={{ backgroundColor: "#7f9e28" }} />
                <p className="text-gray-500 text-xs leading-relaxed">
                  Pansa Group of Companies N.V. offers diverse industrial solutions,
                  from maintenance to training, ensuring excellence.
                </p>
              </div>

              {/* Card 1 & 2 */}
              <ServiceCard {...services[0]} />
              <ServiceCard {...services[1]} />
            </div>

            {/* Row 2: 3 cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
              <ServiceCard {...services[2]} />
              <ServiceCard {...services[3]} />
              <ServiceCard {...services[4]} />
            </div>

            {/* Row 3: 3 cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
              <ServiceCard {...services[5]} />
              <ServiceCard {...services[6]} />
              <ServiceCard {...services[7]} />
            </div>

          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}

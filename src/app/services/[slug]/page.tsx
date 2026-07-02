import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { services, getServiceBySlug } from "@/data/services";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  return (
    <>
      <Header />
      <main>

        {/* Hero banner */}
        <div className="relative w-full" style={{ height: "340px" }}>
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover object-center"
            unoptimized
            priority
          />
          <div className="absolute inset-0" style={{ backgroundColor: "rgba(20, 35, 5, 0.75)" }} />
          <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#8fb030" }}>
              Our Services
            </p>
            <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold uppercase leading-tight max-w-4xl">
              {service.title}
            </h1>
            <div className="w-16 h-1 mt-5" style={{ backgroundColor: "#7f9e28" }} />
          </div>
        </div>

        {/* Breadcrumb */}
        <div className="border-b border-gray-200" style={{ backgroundColor: "#f8f8f8" }}>
          <div className="max-w-7xl mx-auto px-6 py-3 flex items-center gap-2 text-xs text-gray-500">
            <Link href="/" className="hover:text-[#7f9e28] transition-colors">Home</Link>
            <span>›</span>
            <Link href="/#services" className="hover:text-[#7f9e28] transition-colors">Services</Link>
            <span>›</span>
            <span style={{ color: "#32592d" }}>{service.shortTitle}</span>
          </div>
        </div>

        {/* Content */}
        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

              {/* Main content */}
              <div className="lg:col-span-2">
                {/* Intro */}
                <p className="text-gray-600 leading-relaxed mb-8 text-base">
                  {service.intro}
                </p>

                {/* Service image */}
                <div className="relative w-full mb-10 overflow-hidden" style={{ height: "320px" }}>
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>

                {/* Sections */}
                <div className="space-y-8">
                  {service.sections.map((section, i) => (
                    <div key={i}>
                      <h3 className="font-bold text-base uppercase mb-2" style={{ color: "#32592d" }}>
                        {section.heading}
                      </h3>
                      <div className="w-8 h-0.5 mb-3" style={{ backgroundColor: "#7f9e28" }} />
                      <p className="text-gray-600 text-sm leading-relaxed">{section.text}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">

                {/* Service highlights */}
                {service.bullets.length > 0 && (
                  <div className="mb-8 p-7" style={{ backgroundColor: "#f5f5f5" }}>
                    <h4 className="font-bold uppercase text-sm mb-4" style={{ color: "#32592d" }}>
                      Service Highlights
                    </h4>
                    <div className="w-8 h-0.5 mb-5" style={{ backgroundColor: "#7f9e28" }} />
                    <ul className="space-y-3">
                      {service.bullets.map((b, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                          <span className="mt-1 flex-shrink-0 font-bold" style={{ color: "#7f9e28" }}>›</span>
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* All services list */}
                <div className="p-7" style={{ backgroundColor: "#32592d" }}>
                  <h4 className="font-bold uppercase text-sm text-white mb-4">All Services</h4>
                  <div className="w-8 h-0.5 mb-5" style={{ backgroundColor: "#7f9e28" }} />
                  <ul className="space-y-2">
                    {services.map((s) => (
                      <li key={s.slug}>
                        <Link
                          href={`/services/${s.slug}`}
                          className="flex items-start gap-2 text-xs py-1.5 border-b border-white/10 transition-colors hover:text-white"
                          style={{ color: s.slug === slug ? "#8fb030" : "#c5d0a0" }}
                        >
                          <span className="mt-0.5 flex-shrink-0" style={{ color: "#8fb030" }}>›</span>
                          {s.shortTitle}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Contact CTA */}
                <div className="mt-8 p-7 text-white" style={{ backgroundColor: "#7f9e28" }}>
                  <h4 className="font-bold uppercase text-sm mb-2">Get In Touch</h4>
                  <p className="text-xs leading-relaxed mb-4 text-white/80">
                    For more information about our services, contact our team today.
                  </p>
                  <Link
                    href="/#contact"
                    className="inline-block text-white text-xs font-bold uppercase tracking-wider px-6 py-2.5 border border-white hover:bg-white hover:text-[#7f9e28] transition-colors"
                  >
                    Contact Us
                  </Link>
                </div>

              </div>
            </div>
          </div>
        </div>

      </main>
      <Footer />
    </>
  );
}

export default function Hero() {
  return (
    <section id="home" className="relative w-full min-h-[90vh] flex items-center" style={{ paddingBottom: "120px" }}>
      {/* Background video */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover object-center"
        >
          <source src="https://pansaholding.com/wp-content/uploads/2023/10/intro-website_1.mp4" type="video/mp4" />
        </video>
        {/* Dark green overlay */}
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(42, 62, 15, 0.82)" }} />
      </div>

      {/* Content - centered */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-24 pb-16 text-center">
        <p className="text-sm font-medium tracking-widest mb-6 italic" style={{ color: "#c8d89a" }}>
          We work with International Qualifications and Certifications
        </p>
        <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-bold leading-none mb-3 uppercase tracking-tight">
          PANSA GROUP OF<br />COMPANIES N.V.
        </h1>
        <p className="text-2xl md:text-3xl font-semibold uppercase tracking-widest mb-8" style={{ color: "#8fb030" }}>
          THE MOVING FORCE OF THE INDUSTRIES
        </p>
        <div className="w-16 h-0.5 mx-auto mb-8" style={{ backgroundColor: "#8fb030" }} />
        <div className="flex flex-wrap gap-5 justify-center mt-4">
          <a
            href="#"
            style={{
              backgroundColor: "#8fb030",
              color: "white",
              padding: "16px 40px",
              fontWeight: "700",
              fontSize: "14px",
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              display: "inline-block",
              boxShadow: "0 4px 15px rgba(0,0,0,0.4)",
            }}
          >
            &#9654;&nbsp;&nbsp;Watch Video
          </a>
          <a
            href="#contact"
            style={{
              border: "3px solid white",
              color: "white",
              padding: "16px 40px",
              fontWeight: "700",
              fontSize: "14px",
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              display: "inline-block",
              boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
            }}
          >
            Contact Us
          </a>
        </div>
      </div>

      {/* Floating 3-panel bar â€” straddles hero and next section */}
      <div
        className="absolute left-0 right-0 z-30"
        style={{ bottom: 0, transform: "translateY(50%)" }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 shadow-2xl">

            {/* Panel 1: How can I help you â€” heading + description + explore link */}
            <div className="bg-white p-7 flex flex-col justify-between" style={{ minHeight: "200px" }}>
              <div>
                <h3 className="font-bold uppercase mb-3 flex items-center gap-1" style={{ color: "#32592d", fontSize: "13px" }}>
                  HOW CAN I HELP YOU? <span style={{ color: "#32592d" }}>&#8250;</span>
                </h3>
                <p className="text-gray-500 text-xs leading-relaxed">
                  We work with International Qualifications and Certifications and are the
                  leaders in our field of services in Suriname &amp; the region.
                </p>
              </div>
              <a href="#services" className="mt-5 inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider" style={{ color: "#7f9e28" }}>
                EXPLORE SERVICE &nbsp;&rarr;
              </a>
            </div>

            {/* Panel 2: All 8 services list */}
            <div className="bg-white p-7 hidden md:block border-l border-gray-100">
              <div className="text-xs space-y-2">
                {[
                  { label: "Industrial Maintenance and Plant Operation Services", href: "/services/industrial-maintenance" },
                  { label: "Human Resource Services", href: "/services/human-resource-services" },
                  { label: "Technical Vocational Training & Qualification", href: "/services/technical-vocational-training" },
                  { label: "Health, Safety, Environment", href: "/services/health-safety-environment" },
                  { label: "Manufacturing, Repair and Alteration of Power Boilers & Pressure Vessels", href: "/services/power-boilers-pressure-vessels" },
                  { label: "Fabrication of Steel Construction, Storage Tanks, Silo's, Cyclones", href: "/services/steel-fabrication" },
                  { label: "Engineering, Procurement, Construction & Maintenance", href: "/services/engineering-procurement" },
                  { label: "Valve & Pump Maintenance and Machine Shop Works", href: "/services/valve-pump-machine-shop" },
                ].map((s, i) => (
                  <a key={i} href={s.href} className="flex items-start gap-2 group">
                    <span className="flex-shrink-0 mt-0.5 font-bold" style={{ color: "#32592d", fontSize: "11px" }}>&#8250;</span>
                    <span className="text-gray-600 group-hover:text-[#7f9e28] transition-colors leading-snug">{s.label}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Panel 3: Request a quote */}
            <div className="p-7 text-white hidden md:block" style={{ backgroundColor: "#32592d" }}>
              <h3 className="font-bold uppercase mb-2" style={{ fontSize: "13px" }}>REQUEST FOR A QUOTES</h3>
              <p className="text-gray-300 text-xs leading-relaxed mb-5">
                For More Information. Get in Touch With Us
              </p>
              <div className="flex gap-0">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="flex-1 px-3 py-2.5 text-xs text-gray-800 outline-none min-w-0"
                />
                <button
                  className="px-4 py-2.5 text-white text-xs font-bold uppercase tracking-wider hover:opacity-90 transition-opacity flex-shrink-0"
                  style={{ backgroundColor: "#7f9e28" }}
                >
                  REQUEST
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";

const steps = [
  {
    title: "Select Your Services",
    description: "Selecting Pansa Group of Companies N.V. ensures access to a range of top-tier services, characterized by excellence, innovation, and a commitment to operational success.",
    icon: (
      /* wrench / tools cross */
      <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
        <path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-1.5 1.5 2.44 2.44 1.5-1.5a.75.75 0 0 1 1.06 1.06l-1.5 1.5.69.7A3.25 3.25 0 0 1 12 15.25a3.19 3.19 0 0 1-1.06-.18l-4.19 4.18a1.5 1.5 0 0 1-2.12-2.12l4.18-4.19A3.25 3.25 0 0 1 12 8.75c.37 0 .73.06 1.06.18l-.7-.69-1.5 1.5a.75.75 0 0 1-1.06-1.06l1.5-1.5L8.86 4.74l-1.5 1.5a.75.75 0 0 1-1.06-1.06l2-2a.75.75 0 0 1 1.06 0l2.5 2.5 1-1a.75.75 0 0 1 1.06 0l1 1 1-1a.75.75 0 0 1 1.06 1.06l-2 2z"/>
      </svg>
    ),
  },
  {
    title: "Complete Your Data",
    description: "Complete your data seamlessly with Pansa Group of Companies N.V., ensuring accuracy, efficiency, and comprehensive solutions for your information needs.",
    icon: (
      /* clipboard / form */
      <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
        <path fillRule="evenodd" d="M7 2a2 2 0 00-2 2v16a2 2 0 002 2h10a2 2 0 002-2V4a2 2 0 00-2-2H7zm0 2h10v16H7V4zm2 3a1 1 0 000 2h6a1 1 0 100-2H9zm0 4a1 1 0 000 2h6a1 1 0 100-2H9zm0 4a1 1 0 000 2h4a1 1 0 100-2H9z" clipRule="evenodd"/>
      </svg>
    ),
  },
  {
    title: "Make an Appointment",
    description: "Make an appointment with us at Pansa Group of Companies N.V. to explore tailored solutions, discuss your industrial needs, and embark on a journey towards operational excellence.",
    icon: (
      /* calendar with gear */
      <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v13a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm-2 6h16v11H4V8zm5 3a1 1 0 000 2h.01a1 1 0 000-2H9zm3 0a1 1 0 000 2h.01a1 1 0 000-2H12zm3 0a1 1 0 000 2h.01a1 1 0 000-2H15zm-6 3a1 1 0 000 2h.01a1 1 0 000-2H9zm3 0a1 1 0 000 2h.01a1 1 0 000-2H12z" clipRule="evenodd"/>
      </svg>
    ),
  },
  {
    title: "Get Amazing Services",
    description: "Experience excellence firsthand with Pansa Group of Companies N.V. â€“ where our commitment to delivering amazing services ensures your industrial needs are met with precision and innovation.",
    icon: (
      /* podium / award */
      <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
        <path d="M11 2a1 1 0 011 1v2h4a1 1 0 011 1v4a4 4 0 01-4 4H9a4 4 0 01-4-4V6a1 1 0 011-1h4V3a1 1 0 011-1zm-4 5v3a2 2 0 002 2h6a2 2 0 002-2V7H7z"/>
        <path d="M7 16h10v1a1 1 0 01-1 1h-1v2h1a1 1 0 010 2H8a1 1 0 010-2h1v-2H8a1 1 0 01-1-1v-1z"/>
      </svg>
    ),
  },
];

export default function HowWeWork() {
  return (
    <section id="how-we-work" className="py-20" style={{ backgroundColor: "#f5f5f5" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left: photo with decorative box + overlay text */}
          <div className="relative">
            {/* Decorative sage-green background box offset bottom-left */}
            <div
              className="absolute"
              style={{
                bottom: "-24px",
                left: "-24px",
                width: "55%",
                height: "55%",
                backgroundColor: "#b5c97a",
                zIndex: 0,
              }}
            />
            {/* Photo */}
            <div className="relative z-10" style={{ aspectRatio: "4/3" }}>
              <Image
                src="https://pansaholding.com/wp-content/uploads/2023/10/Lassen-ken-landscape.jpg"
                alt="How We Work"
                fill
                className="object-cover"
                unoptimized
              />
              {/* Bottom overlay text */}
              <div
                className="absolute bottom-0 left-0 right-0 p-6"
                style={{ backgroundColor: "rgba(30, 45, 8, 0.85)" }}
              >
                <p className="text-white font-bold text-base leading-snug mb-2">
                  Let&apos;s talk about how we stand<br />No. 01 position in the world!
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-widest hover:gap-2 transition-all"
                  style={{ color: "#8fb030" }}
                >
                  Read More &nbsp;&rarr;
                </a>
              </div>
            </div>
          </div>

          {/* Right: heading + 4 steps */}
          <div>
            <p className="font-bold text-xs uppercase tracking-widest mb-3" style={{ color: "#7f9e28" }}>
              How We Works
            </p>
            <h2 className="text-3xl md:text-4xl font-bold uppercase leading-tight mb-4" style={{ color: "#32592d" }}>
              We Constructed A Secure<br />Experience For You
            </h2>
            <div className="w-12 h-1 mb-5" style={{ backgroundColor: "#7f9e28" }} />
            <p className="text-gray-500 text-sm leading-relaxed mb-8">
              We are the pioneers in providing industrial mechanical maintenance and manufacturing services to the refining, mining, agriculture, food processing, tourism, waste management &amp; recycling solutions and energy, oil &amp; gas sectors. And we are specialized in high-quality customized services &amp; products.
            </p>

            {/* Steps with vertical dotted connector */}
            <div className="space-y-0">
              {steps.map((step, i) => (
                <div key={i} className="flex gap-5">
                  {/* Icon + vertical line */}
                  <div className="flex flex-col items-center">
                    <div
                      className="w-14 h-14 flex items-center justify-center flex-shrink-0 text-white"
                      style={{ backgroundColor: "#7f9e28" }}
                    >
                      {step.icon}
                    </div>
                    {i < steps.length - 1 && (
                      <div
                        className="w-px flex-1 my-1"
                        style={{ borderLeft: "2px dashed #c5d88a", minHeight: "24px" }}
                      />
                    )}
                  </div>
                  {/* Text */}
                  <div className="pb-7">
                    <h3 className="font-bold uppercase text-sm tracking-wide mb-1" style={{ color: "#32592d" }}>
                      {step.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

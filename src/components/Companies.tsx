import Image from "next/image";

const companies = [
  {
    name: "PANSA MACHINE SHOP N.V.",
    logo: "https://pansaholding.com/wp-content/uploads/2023/11/pmshop.jpg",
    certifications: ["ASME S & U Stamp", "NBIC Certified"],
    description:
      "Specialized in manufacturing, repair and alteration of power boilers & pressure vessels with internationally recognized ASME certifications.",
  },
  {
    name: "CCC H. PANSA & SONS N.V.",
    logo: "https://pansaholding.com/wp-content/uploads/2023/11/PansaSons-logo.jpg",
    certifications: ["ISO 9001", "ISO 14001", "Alcoa Certified"],
    description:
      "Engineering, procurement, construction & maintenance services with ISO certified quality management and environmental management systems.",
  },
  {
    name: "PANSA INDUSTRIES N.V.",
    logo: "https://pansaholding.com/wp-content/uploads/2023/11/Logos-tek_Pansa-Industries.jpg",
    certifications: ["Technical Vocational Training"],
    description:
      "Industrial services, plant operations, human resource development and technical vocational training programs for Suriname and the region.",
  },
];

export default function Companies() {
  return (
    <section id="companies" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="font-semibold text-sm uppercase tracking-widest mb-2" style={{ color: "#7f9e28" }}>
            Our Group
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#32592d" }}>
            Our Companies
          </h2>
          <div className="w-16 h-1 mx-auto mb-6" style={{ backgroundColor: "#7f9e28" }} />
          <p className="text-gray-500 max-w-2xl mx-auto">
            PANSA GROUP OF COMPANIES N.V. comprises three specialized subsidiary companies, each with
            their own area of expertise and internationally recognized certifications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {companies.map((company, i) => (
            <div
              key={i}
              className="border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow group"
            >
              <div className="bg-gray-50 h-40 flex items-center justify-center p-6">
                <Image
                  src={company.logo}
                  alt={company.name}
                  width={180}
                  height={80}
                  className="object-contain max-h-24 w-auto"
                  unoptimized
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-base mb-3 transition-colors" style={{ color: "#32592d" }}>
                  {company.name}
                </h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {company.certifications.map((cert, j) => (
                    <span
                      key={j}
                      className="text-white text-xs font-semibold px-2 py-1 rounded"
                      style={{ backgroundColor: "#7f9e28" }}
                    >
                      {cert}
                    </span>
                  ))}
                </div>
                <p className="text-gray-500 text-sm leading-relaxed">{company.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

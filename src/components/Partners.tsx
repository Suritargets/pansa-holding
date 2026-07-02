import Image from "next/image";

const partners = [
  { src: "https://pansaholding.com/wp-content/uploads/2023/11/pmshop.jpg", alt: "Pansa Machine Shop NV" },
  { src: "https://pansaholding.com/wp-content/uploads/2023/11/PansaSons-logo.jpg", alt: "CCC H. Pansa & Sons" },
  { src: "https://pansaholding.com/wp-content/uploads/2023/11/Logos-tek_Pansa-Industries.jpg", alt: "Pansa Industries NV" },
  { src: "https://pansaholding.com/wp-content/uploads/2023/11/7.png", alt: "Partner" },
  { src: "https://pansaholding.com/wp-content/uploads/2023/11/6-1.png", alt: "Partner" },
  { src: "https://pansaholding.com/wp-content/uploads/2023/11/5.png", alt: "Partner" },
  { src: "https://pansaholding.com/wp-content/uploads/2023/11/4.jpg", alt: "Partner" },
  { src: "https://pansaholding.com/wp-content/uploads/2023/11/3-1.png", alt: "Partner" },
  { src: "https://pansaholding.com/wp-content/uploads/2023/11/2.png", alt: "Partner" },
  { src: "https://pansaholding.com/wp-content/uploads/2023/11/2.jpg", alt: "Partner" },
  { src: "https://pansaholding.com/wp-content/uploads/2023/11/1.png", alt: "Partner" },
];

export default function Partners() {
  return (
    <section id="sustainability" className="py-16 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="font-bold text-xs uppercase tracking-widest mb-2" style={{ color: "#7f9e28" }}>
            our partners
          </p>
          <h2 className="text-2xl md:text-3xl font-bold mb-3" style={{ color: "#32592d" }}>
            some of are amazing partners
          </h2>
          <div className="w-16 h-1 mx-auto" style={{ backgroundColor: "#7f9e28" }} />
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-0 border border-gray-200">
          {partners.map((partner, i) => (
            <div
              key={i}
              className="border border-gray-200 bg-white hover:bg-gray-50 transition-colors flex items-center justify-center p-5"
              style={{ minHeight: "90px" }}
            >
              <Image
                src={partner.src}
                alt={partner.alt}
                width={120}
                height={60}
                className="object-contain max-h-12 w-auto"
                unoptimized
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

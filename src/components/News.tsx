import Image from "next/image";

const newsItems = [
  {
    image: "https://pansaholding.com/wp-content/uploads/2023/11/1-1024x575-1-1.jpg",
    date: "03 November 2023",
    category: "Events",
    title: "Pansa Road Show August 2017",
    excerpt: "The Pansa Group of Companies N.V. developed a road show to present our services and capabilities to potential partners and clients across the region.",
  },
  {
    image: "https://pansaholding.com/wp-content/uploads/2023/11/WhatsApp-Image-2019-06-18-at-12.38.52-1024x680-1.jpeg",
    date: "03 November 2023",
    category: "Events",
    title: "Suripop",
    excerpt: "In light of fostering community spirit and cultural engagement, Pansa Group proudly participated in Suripop, supporting local talent and culture.",
  },
  {
    image: "https://pansaholding.com/wp-content/uploads/2023/11/DSC_7544-1024x678-1.jpg",
    date: "03 November 2023",
    category: "Events",
    title: "National Fair of Suriname 2018",
    excerpt: "The purpose of the company participating in the National Fair was to showcase our capabilities, certifications and introduce ourselves to a wider audience.",
  },
  {
    image: "https://pansaholding.com/wp-content/uploads/2023/11/DSC05214-1024x575-1.jpg",
    date: "03 November 2023",
    category: "Events",
    title: "School visit from LBO George A. Kort school",
    excerpt: "The mechanical engineering students from the secondary technical school visited our facilities to learn about real-world industrial applications.",
  },
];

export default function News() {
  return (
    <section id="events" className="py-20" style={{ backgroundColor: "#f8f8f8" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="font-semibold text-sm uppercase tracking-widest mb-2" style={{ color: "#7f9e28" }}>
            Latest Updates
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#32592d" }}>
            News &amp; Article
          </h2>
          <div className="w-16 h-1 mx-auto" style={{ backgroundColor: "#7f9e28" }} />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {newsItems.map((item, i) => (
            <article key={i} className="bg-white shadow-sm hover:shadow-md transition-shadow group">
              <div className="relative overflow-hidden" style={{ height: "200px" }}>
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  unoptimized
                />
                <div className="absolute top-3 left-3 text-white text-xs font-bold uppercase px-2 py-1" style={{ backgroundColor: "#7f9e28" }}>
                  {item.category}
                </div>
              </div>
              <div className="p-5">
                <div className="text-gray-400 text-xs mb-2 flex items-center gap-1">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                  {item.date}
                </div>
                <h3 className="font-bold text-sm leading-snug mb-3 transition-colors group-hover:opacity-75" style={{ color: "#32592d" }}>
                  {item.title}
                </h3>
                <p className="text-gray-500 text-xs leading-relaxed mb-4 line-clamp-3">
                  {item.excerpt}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wide hover:gap-2 transition-all"
                  style={{ color: "#7f9e28" }}
                >
                  Read More
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

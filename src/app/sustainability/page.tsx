import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const BASE  = "https://pansaholding.com/wp-content/uploads/2023/10/";
const BASE2 = "https://pansaholding.com/wp-content/uploads/2023/11/";

const blogPosts = [
  {
    image: `${BASE2}Maranatha-Songfestival-2019.jpg`,
    category: "Sustainability",
    title: "Maranatha Songfestival 2019",
    href: "#",
  },
  {
    image: `${BASE2}DSC05443-1024x575-1.jpg`,
    category: "Sustainability",
    title: "Music Education Center (Muziek Educatie Lelydorp & Omgeving – MELO)",
    href: "#",
  },
  {
    image: `${BASE2}1-1024x575-1-1.jpg`,
    category: "Roadshow",
    title: "Pansa Road Show August 2017",
    href: "#",
  },
];

const recentPosts = [
  { title: "Pansa Road Show August 2017", date: "November 3, 2023", href: "#" },
  { title: "Suripop", date: "November 3, 2023", href: "#" },
  { title: "National Fair of Suriname 2018", date: "November 3, 2023", href: "#" },
];

const categories = ["Visits", "Sustainability", "Roadshow", "Events"];

export default function SustainabilityPage() {
  return (
    <>
      <Header />
      <main>

        {/* Hero banner */}
        <div className="relative w-full" style={{ height: "340px" }}>
          <Image
            src={`${BASE}industrial-zone-in-milazzo-town-on-sicily.jpg`}
            alt="Sustainability"
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
              <span>Sustainability</span>
            </div>
            <div className="px-14 py-5" style={{ backgroundColor: "#32592d" }}>
              <h1 className="text-white text-3xl md:text-4xl font-bold uppercase tracking-wide">
                SUSTAINABILITY
              </h1>
              <div className="w-10 h-0.5 mx-auto mt-3" style={{ backgroundColor: "#7f9e28" }} />
            </div>
          </div>
        </div>

        {/* Main content */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

              {/* Left: main article */}
              <div className="lg:col-span-2">

                {/* Main image */}
                <div className="relative w-full overflow-hidden mb-6" style={{ height: "320px" }}>
                  <Image
                    src={`${BASE2}DSC09120-1024x575-1.jpg`}
                    alt="Sustainable Community Development"
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>

                {/* Article */}
                <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "#32592d" }}>
                  Sustainable Community Development
                </p>

                <div className="space-y-4 text-sm text-gray-600 leading-relaxed mb-6">
                  <p>
                    Based on the Sustainable Development Goals of the United Nations, we promote
                    Sustainable Economic Growth and Employment, Quality Technical Vocational Training
                    and Lifelong Learning for All.
                  </p>
                  <p>
                    Sustainable economic growth will require communities to create the conditions
                    that allow people to have quality jobs that stimulate the economy while not
                    harming the environment.
                  </p>
                  <p>
                    To improve the quality of life, access to technical vocational training can help
                    equip the workforce population with the necessary tools to develop innovative
                    solutions to the problems, needs and demands in the communities.
                  </p>
                  <p className="text-xs text-gray-400">Source: www.un.org</p>
                  <p>The 4 focus areas of the Pansa Group of Companies are:</p>
                  <ul className="space-y-2 pl-2">
                    {[
                      "Empowering entrepreneurship",
                      "Culture preservation and enrichment",
                      "Education of the community",
                      "Promoting environmental awareness",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: "#7f9e28" }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Latest Blog */}
                <h2 className="text-xl font-bold uppercase mb-6 mt-10" style={{ color: "#32592d" }}>
                  Latest Blog
                </h2>
                <div className="space-y-8">
                  {blogPosts.map((post, i) => (
                    <div key={i} className="flex gap-5 items-start">
                      <div className="relative flex-shrink-0 overflow-hidden" style={{ width: "180px", height: "120px" }}>
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover"
                          unoptimized
                        />
                      </div>
                      <div className="flex flex-col justify-center">
                        <span className="text-xs font-bold uppercase mb-1" style={{ color: "#7f9e28" }}>
                          {post.category}
                        </span>
                        <h3 className="font-bold text-sm uppercase leading-snug mb-3" style={{ color: "#32592d" }}>
                          {post.title}
                        </h3>
                        <Link
                          href={post.href}
                          className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider"
                          style={{ color: "#7f9e28" }}
                        >
                          Read More &nbsp;&rarr;
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1 space-y-6">

                {/* Recent Posts */}
                <div className="p-6 border border-gray-200">
                  <h4 className="font-bold uppercase text-sm mb-4" style={{ color: "#32592d" }}>
                    Recent Posts
                  </h4>
                  <div className="w-8 h-0.5 mb-5" style={{ backgroundColor: "#7f9e28" }} />
                  <ul className="space-y-4">
                    {recentPosts.map((post, i) => (
                      <li key={i} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                        <Link href={post.href} className="text-xs font-medium hover:underline block mb-1" style={{ color: "#32592d" }}>
                          {post.title}
                        </Link>
                        <span className="text-xs text-gray-400 flex items-center gap-1">
                          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                          </svg>
                          {post.date}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Have Any Questions */}
                <div className="p-6 text-white" style={{ backgroundColor: "#32592d" }}>
                  <h4 className="font-bold uppercase text-sm mb-1">Have Any Questions?</h4>
                  <p className="text-xs text-white/70 mb-4">contact us</p>
                  <div className="relative w-full overflow-hidden mb-4" style={{ height: "100px" }}>
                    <Image
                      src={`${BASE}s5.jpeg`}
                      alt="Contact"
                      fill
                      className="object-cover opacity-40"
                      unoptimized
                    />
                  </div>
                  <div className="space-y-2 text-xs">
                    <p className="flex items-start gap-2">
                      <svg className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                      <span>Phone (+597) 6802051 (+597) 6802052<br />Mobile: (+597) 7698047 (+597) 7698050</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <svg className="w-3.5 h-3.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                      <a href="mailto:info@pansaholding.com" className="hover:underline">info@pansaholding.com</a>
                    </p>
                  </div>
                </div>

                {/* Categories */}
                <div className="p-6 border border-gray-200">
                  <h4 className="font-bold uppercase text-sm mb-4" style={{ color: "#32592d" }}>
                    Categories
                  </h4>
                  <div className="w-8 h-0.5 mb-5" style={{ backgroundColor: "#7f9e28" }} />
                  <ul className="space-y-2">
                    {categories.map((cat, i) => (
                      <li key={i}>
                        <Link
                          href="#"
                          className="flex items-center gap-2 text-xs text-gray-600 hover:text-[#7f9e28] transition-colors py-1"
                        >
                          <span style={{ color: "#7f9e28" }}>&#8250;</span>
                          {cat}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}

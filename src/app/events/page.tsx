import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const BASE  = "https://pansaholding.com/wp-content/uploads/2023/10/";
const BASE2 = "https://pansaholding.com/wp-content/uploads/2023/11/";

const blogPosts = [
  {
    image: `${BASE2}aftermovie-kkf-Bouw-en-woning-beurs-2019.mp4.00_00_50_19.Still001-1024x576-1.jpg`,
    title: "Building, Construction & Household Fair 2019",
    href: "#",
  },
  {
    image: `${BASE2}thailand-150x150-1.png`,
    title: "Visit Thailand",
    href: "#",
  },
  {
    image: `${BASE2}HC-PANSA.mp4.00_00_07_04.Still002-1024x576-1.jpg`,
    title: "Thailand Suriname Sport",
    href: "#",
  },
  {
    image: `${BASE2}DSC05214-1024x575-1.jpg`,
    title: "School Visit From the LBO George A. Kort School",
    href: "#",
  },
  {
    image: `${BASE2}DSC_7544-1024x678-1.jpg`,
    title: "National Fair of Suriname 2018",
    href: "#",
  },
  {
    image: `${BASE2}WhatsApp-Image-2019-06-18-at-12.38.52-1024x680-1.jpeg`,
    title: "Suripop",
    href: "#",
  },
];

const recentPosts = [
  { title: "Pansa Road Show August 2017", date: "November 3, 2023", href: "#" },
  { title: "Suripop", date: "November 3, 2023", href: "#" },
  { title: "National Fair of Suriname 2018", date: "November 3, 2023", href: "#" },
];

const categories = ["Visits", "Sustainability", "Roadshow", "Events"];

export default function EventsPage() {
  return (
    <>
      <Header />
      <main>

        {/* Hero banner */}
        <div className="relative w-full" style={{ height: "340px" }}>
          <Image
            src={`${BASE}industrial-zone-in-milazzo-town-on-sicily.jpg`}
            alt="Events"
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
              <span>Events</span>
            </div>
            <div className="px-14 py-5" style={{ backgroundColor: "#32592d" }}>
              <h1 className="text-white text-3xl md:text-4xl font-bold uppercase tracking-wide">
                EVENTS
              </h1>
              <div className="w-10 h-0.5 mx-auto mt-3" style={{ backgroundColor: "#7f9e28" }} />
            </div>
          </div>
        </div>

        {/* Main content */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

              {/* Left: blog grid */}
              <div className="lg:col-span-2">
                <h2 className="text-xl font-bold uppercase mb-8" style={{ color: "#32592d" }}>
                  Latest Blog
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {blogPosts.map((post, i) => (
                    <div key={i} className="flex flex-col">
                      <div className="relative overflow-hidden mb-3" style={{ height: "160px" }}>
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover hover:scale-105 transition-transform duration-300"
                          unoptimized
                        />
                      </div>
                      <h3
                        className="font-bold text-xs uppercase leading-snug mb-2"
                        style={{ color: "#32592d" }}
                      >
                        {post.title}
                      </h3>
                      <Link
                        href={post.href}
                        className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider mt-auto"
                        style={{ color: "#7f9e28" }}
                      >
                        Read More &nbsp;&rarr;
                      </Link>
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
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.042 11.042 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
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

import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { newsItems, getNewsBySlug } from "@/data/news";

export function generateStaticParams() {
  return newsItems.map((n) => ({ slug: n.slug }));
}

export default async function NewsDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = getNewsBySlug(slug);
  if (!item) notFound();

  return (
    <>
      <Header />
      <main>

        {/* Hero banner */}
        <div className="relative w-full" style={{ height: "340px" }}>
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover object-center"
            unoptimized
            priority
          />
          <div className="absolute inset-0" style={{ backgroundColor: "rgba(20, 35, 5, 0.75)" }} />
          <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#8fb030" }}>
              {item.category}
            </p>
            <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold uppercase leading-tight max-w-4xl">
              {item.title}
            </h1>
            <div className="w-16 h-1 mt-5" style={{ backgroundColor: "#7f9e28" }} />
          </div>
        </div>

        {/* Breadcrumb */}
        <div className="border-b border-gray-200" style={{ backgroundColor: "#f8f8f8" }}>
          <div className="max-w-7xl mx-auto px-6 py-3 flex items-center gap-2 text-xs text-gray-500">
            <Link href="/" className="hover:text-[#7f9e28] transition-colors">Home</Link>
            <span>›</span>
            <Link href="/#events" className="hover:text-[#7f9e28] transition-colors">News &amp; Article</Link>
            <span>›</span>
            <span style={{ color: "#32592d" }}>{item.title}</span>
          </div>
        </div>

        {/* Content */}
        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

              {/* Main content */}
              <div className="lg:col-span-2">
                <div className="text-gray-400 text-xs mb-4 flex items-center gap-1">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                  {item.date}
                </div>

                <div className="relative w-full mb-10 overflow-hidden" style={{ height: "320px" }}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>

                <div className="space-y-4">
                  {item.content.map((p, i) => (
                    <p key={i} className="text-gray-600 leading-relaxed text-base">{p}</p>
                  ))}
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">

                {/* Recent news list */}
                <div className="p-7" style={{ backgroundColor: "#32592d" }}>
                  <h4 className="font-bold uppercase text-sm text-white mb-4">Recent News</h4>
                  <div className="w-8 h-0.5 mb-5" style={{ backgroundColor: "#7f9e28" }} />
                  <ul className="space-y-2">
                    {newsItems.map((n) => (
                      <li key={n.slug}>
                        <Link
                          href={`/news/${n.slug}`}
                          className="flex items-start gap-2 text-xs py-1.5 border-b border-white/10 transition-colors hover:text-white"
                          style={{ color: n.slug === slug ? "#8fb030" : "#c5d0a0" }}
                        >
                          <span className="mt-0.5 flex-shrink-0" style={{ color: "#8fb030" }}>›</span>
                          {n.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Contact CTA */}
                <div className="mt-8 p-7 text-white" style={{ backgroundColor: "#7f9e28" }}>
                  <h4 className="font-bold uppercase text-sm mb-2">Get In Touch</h4>
                  <p className="text-xs leading-relaxed mb-4 text-white/80">
                    For more information, contact our team today.
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

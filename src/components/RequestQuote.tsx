export default function RequestQuote() {
  return (
    <section className="py-14" style={{ backgroundColor: "#32592d" }}>
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h2 className="text-white text-2xl md:text-3xl font-bold mb-1">
            Request For A Quotes
          </h2>
          <p className="text-gray-300 text-base">
            For More Information. Get in Touch With Us
          </p>
        </div>
        <a
          href="#contact"
          className="flex-shrink-0 text-white font-bold px-12 py-4 text-sm uppercase tracking-widest hover:opacity-90 transition-opacity"
          style={{ backgroundColor: "#7f9e28" }}
        >
          REQUEST
        </a>
      </div>
    </section>
  );
}

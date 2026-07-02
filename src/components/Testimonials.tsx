import Image from "next/image";

const testimonials = [
  {
    name: "Luciana Freya",
    role: "Entrepreneur",
    photo: "https://pansaholding.com/wp-content/uploads/2023/10/E4Z6KX9-300x300.jpg",
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    name: "Trevor Hart",
    role: "CEO Bciaga",
    photo: "https://pansaholding.com/wp-content/uploads/2023/10/user-2-2x-300x300.jpg",
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    name: "Alya Allison",
    role: "Businesswoman",
    photo: "https://pansaholding.com/wp-content/uploads/2023/10/user-4-2x-300x300.jpg",
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials">

      {/* Banner: full-width background image with heading */}
      <div className="relative overflow-hidden" style={{ minHeight: "280px" }}>
        <Image
          src="https://pansaholding.com/wp-content/uploads/2023/10/industrial-zone-in-milazzo-town-on-sicily.jpg"
          alt="Testimonials background"
          fill
          className="object-cover object-center"
          unoptimized
        />
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(10, 18, 30, 0.72)" }} />
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-20">
          <p className="font-bold text-xs uppercase tracking-widest mb-4" style={{ color: "#8fb030" }}>
            Testimonials
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase text-white leading-tight">
            We Will Always Ready To Serve You
          </h2>
          <div className="w-16 h-1 mt-5" style={{ backgroundColor: "#7f9e28" }} />
        </div>
      </div>


    </section>
  );
}

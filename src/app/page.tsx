import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import WhyChooseUs from "@/components/WhyChooseUs";
import HowWeWork from "@/components/HowWeWork";
import Testimonials from "@/components/Testimonials";
import News from "@/components/News";
import Partners from "@/components/Partners";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <WhyChooseUs />
        <Services />
        <HowWeWork />
        <Testimonials />
        <News />
        <Partners />
      </main>
      <Footer />
    </>
  );
}

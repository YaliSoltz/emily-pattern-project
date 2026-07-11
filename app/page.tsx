import Hero from "@/components/Hero";
import About from "@/components/About";
import GalleryCarousel from "@/components/GalleryCarousel";
import Collage from "@/components/Collage";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <GalleryCarousel />
      <Collage />
      <Footer />
    </main>
  );
}

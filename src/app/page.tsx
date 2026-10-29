import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Introduction } from "@/components/sections/Introduction";
import { Services } from "@/components/sections/Services";
import { About } from "@/components/sections/About";
import { Team } from "@/components/sections/Team";
import { Gallery } from "@/components/sections/Gallery";
import { Manifesto } from "@/components/sections/Manifesto";
import { Location } from "@/components/sections/Location";
import { BookingProvider } from "@/components/ui/BookingProvider";
import { Marquee } from "@/components/ui/Marquee";
import { Motion } from "@/components/ui/Motion";
export default function Home() {
  return (
    <BookingProvider>
      <a href="#conteudo" className="skip-link">
        Pular para o conteúdo
      </a>
      <Navbar />
      <main id="conteudo">
        <Hero />
        <Introduction />
        <Services />
        <About />
        <Marquee />
        <Team />
        <Gallery />
        <Manifesto />
        <Location />
      </main>
      <Footer />
      <Motion />
    </BookingProvider>
  );
}

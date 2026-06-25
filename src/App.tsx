import { Background } from "@/components/Background";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

import { Hero } from "@/sections/Hero";
import { Marquee } from "@/sections/Marquee";
import { Stats } from "@/sections/Stats";
import { About } from "@/sections/About";
import { Events } from "@/sections/Events";
import { Clubs } from "@/sections/Clubs";
import { Campus } from "@/sections/Campus";
import { Essentials } from "@/sections/Essentials";
import { Mentors } from "@/sections/Mentors";
import { Gallery } from "@/sections/Gallery";
import { Faq } from "@/sections/Faq";

export default function App() {
  return (
    <>
      {/* Fixed, behind-everything ambient backdrop */}
      <Background />

      {/* Reading-progress bar pinned to the very top */}
      <ScrollProgress />

      {/* Sticky navigation */}
      <Navbar />

      <main className="relative">
        <Hero />
        <Marquee />
        <Stats />
        <About />
        <Events />
        <Clubs />
        <Campus />
        <Essentials />
        <Mentors />
        <Gallery />
        <Faq />
      </main>

      <Footer />
    </>
  );
}

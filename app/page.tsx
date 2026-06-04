import Hero from "@/components/sections/Hero";
import Work from "@/components/sections/Work";
import Services from "@/components/sections/Services";
import About from "@/components/sections/About";
import Insights from "@/components/sections/Insights";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <Work />
      <Services />
      <About />
      <Insights />
      <Contact />
    </main>
  );
}

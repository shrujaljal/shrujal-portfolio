import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { HowIWork } from "@/components/HowIWork";
import { Impact } from "@/components/Impact";
import { Leadership } from "@/components/Leadership";
import { Navbar } from "@/components/Navbar";
import { Projects } from "@/components/Projects";
import { Recognition } from "@/components/Recognition";
import { RibbonBackground } from "@/components/RibbonBackground";

export default function Home() {
  return (
    <>
      <RibbonBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Recognition />
        <Impact />
        <Projects />
        <Leadership />
        <HowIWork />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

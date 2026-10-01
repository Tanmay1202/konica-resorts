import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ResortStory } from "@/components/ResortStory";
import { Stay } from "@/components/Stay";
import { Venues } from "@/components/Venues";
import { Dining } from "@/components/Dining";
import { Experience } from "@/components/Experience";
import { Gallery } from "@/components/Gallery";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ResortStory />
        <Stay />
        <Venues />
        <Dining />
        <Experience />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Credentials from "@/components/Credentials";
import Work from "@/components/Work";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import SmoothScroll from "@/components/SmoothScroll";

export default function Home() {
  return (
    <>
      <div className="grain"></div>
      <SmoothScroll />
      <Header />
      <main id="top">
        <Hero />
        <About />
        <Credentials />
        <Work />
        <Skills />
      </main>
      <Contact />
    </>
  );
}

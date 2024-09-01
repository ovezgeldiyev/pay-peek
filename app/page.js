import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Waitlist from "@/components/Waitlist";
import Image from "next/image";
import Hero from "./home/Hero";
import Market from "./home/Market";
import Mission from "./home/Mission";
import Careers from "./home/Careers";
import Support from "./home/Support";
import Peek from "./home/Peek";

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-[72px] lg:pt-[84px]">
        <Hero />
        <div
          className="relative top-[-72px] lg:top-[-84px]"
          id="statistics"
        ></div>
        <Market />
        <div className="relative top-[-72px] lg:top-[-84px]" id="mission"></div>
        <Mission />
        <div
          className="relative top-[-72px] lg:top-[-84px]"
          id="features"
        ></div>
        <Peek />
        <Careers />
        <Support />
        <div
          className="relative top-[-72px] lg:top-[-84px]"
          id="waitlist"
        ></div>
        <Waitlist />
      </main>
      <Footer />
    </>
  );
}

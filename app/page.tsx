"use client";
import About from "@/components/about";
import Footer from "@/components/footer";
import { Hero } from "@/components/Hero";
import Info from "@/components/info";
import SponsorshipHome from "@/components/Sponsorshiphome";
import { gsap } from "gsap";
import { useGSAP } from '@gsap/react'; 
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import What from "@/components/what";
import Schedule from "@/components/Schedule";
import Sponsor from "@/components/Sponsor";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
export default function Home() {
  useGSAP(() => {
    ScrollSmoother.create({
      smooth: 2,
      effects: true,
      smoothTouch: 1.5,
    content: "#smooth-content"
    });
  });
  return (
    <div id="smooth-content" className="bg-jwhite" >

      <Hero />
      <What />
      <Info />
      <Schedule />
      <Sponsor />
      <About />
      <Footer />
    </div>
  );
}

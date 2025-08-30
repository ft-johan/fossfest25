"use client";

import { gsap } from "gsap";

import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Navbar } from "./nav";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export function Hero() {


  return (
    <div className="relative w-full h-[100svh] overflow-hidden bg-jwhite ">
      <Navbar />
      {/* Blurred Circle Background */}
  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] rounded-full bg-joranage mt-5 z-20"></div>
      {/* Prism Background only for hero section */}
   
  
 
        {/* Hero Content */}
  <div  className="flex flex-col items-center justify-center h-full -m-10 px-4 text-center z-30 relative">
          <h1 data-speed="1.5" className="text-6xl md:text-9xl  font-jfont text-jblue font-bold mb-0.5 -mt-10">FOSS FEST 25</h1>
          <p data-speed="1.2" className="text-lg md:text-2xl text-white mb-6">27th September 2025 . Karunagappally</p>

          <button data-speed="1.2" className="px-6 py-2 rounded bg-jwhite text-white  dark:text-black font-medium text-base md:text-lg transition hover:scale-105">Coming Soon.....</button>
        </div>
    </div>
  );
}

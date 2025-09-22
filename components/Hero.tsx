"use client";

import { gsap } from "gsap";

import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextAnimate } from "@/components/ui/text-animate";
import { Navbar } from "./nav";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export function Hero() {


  return (
    <div className="relative w-full h-[100svh] overflow-hidden bg-jwhite ">
      {/* <Navbar /> */}
      {/* Blurred Circle Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] rounded-full bg-joranage -mt-10 z-20"></div>
      {/* Prism Background only for hero section */}

      {/* Hero Content */}
      <div className="flex flex-col items-center justify-center h-full -m-10 px-4 text-center z-30 relative">

        <h1 data-speed="1.2" className="text-6xl md:text-9xl  font-jfont text-jblue font-bold mb-0.5 mt-10"><TextAnimate animation="slideUp" by="character" delay={0.5} duration={1}>FOSS FEST 25</TextAnimate></h1>
        <h1 data-speed="1.3" className="text-3xl md:text-3xl  font-jfont text-jblue font-bold mb-0.5 "><TextAnimate animation="slideUp" by="word" delay={0.5} duration={1}>October 11 ,12 </TextAnimate></h1>

        <a href="https://konfhub.com/foss-fest-25"> <button data-speed="1.4" className="relative inline-flex h-12 md:h-14 lg:h-16 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 w-full max-w-xs md:max-w-sm lg:max-w-md mx-auto">
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-jwhite px-4 py-2 md:px-6 md:py-2 lg:px-8 lg:py-3 text-base md:text-lg lg:text-xl font-jfont hover:animate-pulse text-jblue backdrop-blur-3xl">
            Register Now
          </span>
        </button></a>
      </div>

      {/* boat.png in lower right corner 
      <div className="absolute bottom-32 right-4 z-20" style={{ pointerEvents: 'none' }}>
        <img data-lag="0.2" src="/boat.png" alt="Boat" className="h-auto" style={{ minHeight: '120px', maxHeight: '40vh' }} />
      </div>

      {/* dance.png in lower left corner 
      <div className="absolute bottom-10 left-72 z-20" style={{ pointerEvents: 'none' }}>
        <img data-lag="0.7" src="/dance.png" alt="Dance" className="h-auto" style={{ minHeight: '120px', maxHeight: '30vh' }} />
      </div>
      <div className="absolute bottom-4 left-4 z-10" style={{ pointerEvents: 'none' }}>
        <img data-speed="0.7" src="/net.png" alt="Dance" className="h-auto" style={{ minHeight: '120px', maxHeight: '35vh' }} />
      </div>
      */}
    </div>
  );
}

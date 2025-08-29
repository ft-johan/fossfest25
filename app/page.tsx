import About from "@/components/about";
import Footer from "@/components/footer";
import { Hero } from "@/components/Hero";
import Info from "@/components/info";
import SponsorshipHome from "@/components/Sponsorshiphome";
import { SmoothCursor } from "@/components/ui/smooth-cursor";

export default function Home() {
  return (
    <div className=" cursor-none" >
      <SmoothCursor />
      <Hero />
      <Info />
      <SponsorshipHome />
      <About />
      <Footer />
    </div>
  );
}

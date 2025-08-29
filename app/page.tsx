import About from "@/components/about";
import { Hero } from "@/components/Hero";
import Info from "@/components/info";
import SponsorshipHome from "@/components/Sponsorshiphome";

export default function Home() {
  return (
    <div >
      <Hero />
      <Info />
      <SponsorshipHome />
      <About />
    </div>
  );
}

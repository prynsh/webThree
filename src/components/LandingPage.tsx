import Topbar from "./Topbar";
import MarqueeComponent from "./Marquee";
import Gallery from "./NFTMarketPlace";
import LeaderBoard from "./LeaderBoard";
import Footer from "./Footer";
import LaserGrid from "./LaserGrid";
import HeroSection from "./HeroSection";

export default function LandingPage() {
  return (
    <section className="bg-[#00120A] text-white overflow-hidden">
      <Topbar />
      <HeroSection />
      <LaserGrid />
      <MarqueeComponent />
      <Gallery />
      <LeaderBoard />
      <Footer />
    </section>
  );
}

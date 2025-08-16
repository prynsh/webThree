import React from "react";
import { RetroGrid } from "./components/magicui/retro-grid";
import Topbar from "./components/Topbar";
import HeroSike from "./components/Hero";
import MarqueeComponent from "./components/Marquee";
import Gallery from "./components/NFTMarketPlace";
import LeaderBoard from "./components/LeaderBoard";
import Footer from "./components/Footer";
import LaserGrid from "./components/LaserGrid";

export default function Hero() {
  return (
    <section className="bg-[#00120A] text-white overflow-hidden">
      {/* ===== Top Bar ===== */}

      <Topbar/>
      <HeroSike/>
      <LaserGrid/>
        <MarqueeComponent/>
        <Gallery/>
        <LeaderBoard/>
        <Footer/>
    </section>
  );
}

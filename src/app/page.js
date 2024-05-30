import Bracnhes from "@/components/Branches";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import OpeningHours from "@/components/OpeningHours";

import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero />
      <div id="menu">
        <Menu />
      </div>
      <div id="branches">
        <Bracnhes />
      </div>
      <div id="openingHours">
        <OpeningHours />
      </div>
     
      <Footer />
    </div>
  );
}

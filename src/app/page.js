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
      <div id="brands">
        <Menu />
      </div>
      <div id="contacts">
        <Bracnhes />
      </div>
      <div id="opening-hours">
        <OpeningHours />
      </div>

      <Footer />
    </div>
  );
}

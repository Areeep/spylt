import gsap from "gsap";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Message from "./sections/Message";
import { ScrollTrigger, ScrollSmoother } from "gsap/all";
import Flavor from "./sections/Flavor";
import { useGSAP } from "@gsap/react";
import Nutrition from "./sections/Nutrition";
import Benefit from "./sections/Benefit";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

function App() {
  useGSAP(() => {
    ScrollSmoother.create({
      smooth: 3,
      effects: true,
    });
  });

  return (
    <main>
      <Navbar />

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <Hero />
          <Message />
          <Flavor />
          <Nutrition />
          <Benefit />
        </div>
      </div>
    </main>
  );
}

export default App;

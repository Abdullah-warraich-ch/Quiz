import React from "react";
import Header from "../Components/Header.jsx";
import Hero from "../Components/Hero.jsx";
import Properties from "../Components/Properties.jsx";
import Filter from "../Components/Filter.jsx";
import Info from "../Components/Info.jsx";
import Sliderr from "../Components/Slider.jsx";
import Faq from "../Components/Faq.jsx";
function LandingPage() {
  return (
    <div>
      <Header />
      <Hero />
      <Properties />
      <Filter />
      <Info />
      <Sliderr />
      <Faq />
      <div className="flex flex-col justify-center items-center gap-2 py-10 text-white/40">
        <p>© 2026 Quiz. All rights reserved.</p>
        <a href="https://github.com/Abdullah-warraich-ch/Quiz">
          <img
            src="/images/logos/github-logo.png"
            alt=""
            srcset=""
            className="h-5 text-white/40 hover:text-white/60"
            target="_blank"
          />
        </a>
      </div>
    </div>
  );
}

export default LandingPage;

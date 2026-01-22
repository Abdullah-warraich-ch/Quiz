import React from "react";
import Header from "../Components/Header.jsx";
import Hero from "../Components/Hero.jsx";
import Properties from "../Components/Properties.jsx";
import Filter from "../Components/Filter.jsx";
function LandingPage() {
  return (
    <div>
      <Header />
      <Hero />
      <Properties />
      <Filter />
    </div>
  );
}

export default LandingPage;

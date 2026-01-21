import React from "react";

function Hero() {
  return (
    <div className="max-w-[90%] m-auto">
      <div className="flex flex-col gap-7 items-center ">
        <span>Completely free to use</span>
        <h1 className="text-4xl font-medium text-center">
          Learn web development through{" "}
          <span className="text-primary">interactive quiz</span>
        </h1>
        <p className="text-center max-w-[95%]">
          Challenge yourself with over 1k+ carefully crafted questions across 12
          essential web development topics. Perfect your skills in HTML,
          JavaScript, React, and more - all from your mobile or desktop device,
          anytime, anywhere.
        </p>
        <div className="flex gap-3 w-full justify-end">
          <button className="font-medium">Select Filter</button>
          <button className="bg-primary text-black px-4 py-2 rounded font-medium">
            Play
          </button>
        </div>
      </div>

      
    </div>
  );
}

export default Hero;

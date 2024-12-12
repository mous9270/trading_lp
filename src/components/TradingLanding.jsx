import * as React from "react";
import { TestimonialCard } from "./TestimonialCard";
import TradingFeatures from "./TradingFeatures";

const testimonials = [
  {
    name: "Michael",
    image: "./src/assets/user.png",
    review: "\"I'm blown away by the results of these indicators, and how easy they are to use. I will pass my Prop account very soon!\"",
    stars: [true, true, true, true, false]
  },
  {
    name: "Seong",
    image: "./src/assets/user.png",
    review: "It's rare to find a team so dedicated to their community. It's been life-changing.\"",
    stars: [true, true, true, true, false]
  }
];

export function TradingLanding() {
  return (
    <div className="relative flex flex-col bg-white overflow-hidden">
      {/* Background grid positioned absolutely */}
      <img
        loading="lazy"
        src="./src/assets/grid.svg"
        className="absolute bottom-0 left-0 w-full h-48 object-cover"
        alt="Trading platform footer decoration"
      />
      
      <div className="relative z-10 flex flex-col w-full max-w-[1794px] mx-auto px-16 py-20 max-md:px-5 max-md:py-24">
        <div className="flex gap-5 max-md:flex-col">
          {/* Left Column */}
          <div className="flex flex-col w-[38%] max-md:w-full">
            <img
              loading="lazy"
              src="./src/assets/trustpilot.png"
              className="object-contain w-[180px] mb-6"
              alt="Trading platform logo"
            />
            <div className="flex flex-col pl-5 max-md:pl-5">
              <h1 className="text-8xl font-bold tracking-tighter leading-[86px] max-md:text-4xl max-md:leading-10">
                Level Up<br />Your Trading
              </h1>
              <div className="mt-6 text-2xl tracking-tight leading-10">
                Become Profitable in{" "}
                <span className="font-bold">30 Days</span> With Our{" "}
                <span className="font-bold text-green-700">Free Tools</span>
              </div>
              <TradingFeatures />
              <button className="w-full bg-gradient-to-br from-green-400 to-green-500 px-16 py-4 text-4xl font-bold text-white rounded-xl shadow-lg hover:opacity-95 transition-opacity duration-200 max-md:px-5">
                Claim Free Access
              </button>
              <div className="mt-10 flex gap-5 max-md:flex-col">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-6/12 max-md:w-full">
                    <TestimonialCard {...testimonial} />
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Right Column */}
          <div className="relative w-[62%] max-md:w-full mt-20">
            <img
              loading="lazy"
              src="./src/assets/hero.svg"
              className="object-contain w-full transform scale-125 -translate-x-20 translate-y-[-10%] max-md:transform-none"
              alt="Trading platform interface demonstration"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
import * as React from "react";
import { TestimonialCard } from "./TestimonialCard";

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
    <div className="flex overflow-hidden flex-col bg-green-400 rounded-md">
      <div className="flex flex-col w-full bg-white bg-blend-normal max-md:max-w-full">
        <div className="flex z-10 flex-col justify-center items-end px-16 py-40 w-full max-md:px-5 max-md:py-24 max-md:max-w-full">
          <div className="mb-0 w-full max-w-[1794px] max-md:mb-2.5 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col">
              <div className="flex flex-col w-[38%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow mt-10 max-md:mt-10 max-md:max-w-full">
                  <img
                    loading="lazy"
                    src="./src/assets/trustpilot.png"
                    className="object-contain max-w-full bg-blend-multiply aspect-[2.09] w-[180px]"
                    alt="Trading platform logo"
                  />
                  <div className="flex flex-col pl-5 mt-3.5 w-full max-md:pl-5 max-md:max-w-full">
                    <div className="self-start text-8xl font-bold tracking-tighter leading-[86px] max-md:max-w-full max-md:text-4xl max-md:leading-10">
                      Level Up
                      <br />
                      Your Trading
                    </div>
                    <div className="self-start mt-6 text-2xl tracking-tight leading-10 text-black max-md:max-w-full">
                      Become Profitable in{" "}
                      <span className="font-bold">30 Days</span> With Our{" "}
                      <span className="font-bold text-green-700">Free Tools</span>
                    </div>
                    <div className="flex flex-wrap gap-3.5 items-start mt-5 max-md:mr-2.5 max-md:max-w-full">
                      <div className="flex flex-col">
                        <img
                          loading="lazy"
                          src="./src/assets/bulb.svg"
                          className="object-contain aspect-[0.82] w-[23px]"
                          alt="Trading feature icon 1"
                        />
                        <img
                          loading="lazy"
                          src="./src/assets/bulb.svg"
                          className="object-contain mt-6 aspect-[0.82] w-[23px]"
                          alt="Trading feature icon 2"
                        />
                        <img
                          loading="lazy"
                          src="./src/assets/bulb.svg"
                          className="object-contain mt-6 aspect-[0.85] w-[23px]"
                          alt="Trading feature icon 3"
                        />
                      </div>
                      <div className="flex flex-col grow shrink-0 items-start pr-20 pb-16 pl-5 mt-2 text-2xl tracking-tight bg-white rounded-2xl basis-0 shadow-[0px_-431px_531px_rgba(16,96,52,0.17)] text-neutral-400 w-fit max-md:pr-5 max-md:max-w-full">
                        <div className="z-10 mt-0 leading-none max-md:max-w-full">
                          Instant access to TradingView Indicators
                        </div>
                        <div className="mt-5 leading-none">
                          Professional Trader Support Group
                        </div>
                        <div className="mt-3.5 leading-10">
                          Generate consistent Profits
                        </div>
                      </div>
                    </div>
                    <button className="w-full bg-gradient-to-br from-green-400 to-green-500 px-16 py-4 text-4xl font-bold text-white rounded-xl shadow-lg hover:opacity-95 transition-opacity duration-200 max-md:px-5 max-md:max-w-full">
  Claim Free Access
</button>
                    <div className="mt-10 max-md:max-w-full">
                      <div className="flex gap-5 max-md:flex-col">
                        {testimonials.map((testimonial, index) => (
                          <div key={index} className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                            <TestimonialCard {...testimonial} />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[62%] max-md:ml-0 max-md:w-full -mt-40">
                <img
                  loading="lazy"
                  src="./src/assets/hero.svg"
                  className="object-contain grow w-full rounded-none aspect-[1.22] max-md:mt-10 max-md:max-w-full"
                  alt="Trading platform interface demonstration"
                />
              </div>
            </div>
          </div>
        </div>
        <img
          loading="lazy"
          src="./src/assets/grid.svg"
          className="object-contain w-full aspect-[4.67] max-md:max-w-full"
          alt="Trading platform footer decoration"
        />
      </div>
    </div>
  );
}
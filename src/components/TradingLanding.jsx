import * as React from "react";
import { TestimonialCard } from "./TestimonialCard";

const testimonials = [
  {
    name: "Michael",
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/2f8e98b6efafd5f85a4eb0b9a48f9cd1d8a3d8c1f21e2c5026b2d20f4523f48e?placeholderIfAbsent=true&apiKey=16a30c8b59af423ebd21c38889ab0b6a",
    review: "\"I'm blown away by the results of these indicators, and how easy they are to use. I will pass my Prop account very soon!\"",
    stars: [true, true, true, true, false]
  },
  {
    name: "Seong",
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/57c49e74cad56bdc6bf605720c410493c3e55dcb671e56a6eda0c9795329b5ae?placeholderIfAbsent=true&apiKey=16a30c8b59af423ebd21c38889ab0b6a",
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
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/59cf74bc11276388d2c2102a5f76745e41abdb668b1e26e2eb0d79a3b52ac9af?placeholderIfAbsent=true&apiKey=16a30c8b59af423ebd21c38889ab0b6a"
                          className="object-contain aspect-[0.82] w-[23px]"
                          alt="Trading feature icon 1"
                        />
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/7eaaacb1c6a111eb7b10c0f9b0e81bc5918a338a3a5fb5cd7a7ccebca2101784?placeholderIfAbsent=true&apiKey=16a30c8b59af423ebd21c38889ab0b6a"
                          className="object-contain mt-6 aspect-[0.82] w-[23px]"
                          alt="Trading feature icon 2"
                        />
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/4382ce4e0cf6a0d567f00df61bb10dd50426f869e0c46fa173084bc1a5233c1e?placeholderIfAbsent=true&apiKey=16a30c8b59af423ebd21c38889ab0b6a"
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
                    <button className="px-16 pt-2 pb-5 text-5xl font-bold tracking-tight leading-none text-white rounded-xl max-md:px-5 max-md:max-w-full">
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
              <div className="flex flex-col ml-5 w-[62%] max-md:ml-0 max-md:w-full">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/234dab0a37b4233d3210696bbe158d8789df5d680e725a304ed3f8a6a15329d1?placeholderIfAbsent=true&apiKey=16a30c8b59af423ebd21c38889ab0b6a"
                  className="object-contain grow w-full rounded-none aspect-[1.22] max-md:mt-10 max-md:max-w-full"
                  alt="Trading platform interface demonstration"
                />
              </div>
            </div>
          </div>
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/3e08741daf5d52f506d11d71286182d1c68bc63bbf5432851bb5317a363d04e8?placeholderIfAbsent=true&apiKey=16a30c8b59af423ebd21c38889ab0b6a"
          className="object-contain w-full aspect-[4.67] max-md:max-w-full"
          alt="Trading platform footer decoration"
        />
      </div>
    </div>
  );
}
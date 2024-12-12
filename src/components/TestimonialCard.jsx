import * as React from "react";
import StarRating from "./StarRating";

export const TestimonialCard = ({ image, name, review, stars }) => {
  return (
    <div className="flex overflow-hidden flex-col px-7 py-6 mx-auto w-full bg-white rounded-xl border border-solid border-zinc-100 max-md:px-5 max-md:mt-3">
      <div className="flex gap-2.5 self-start">
        <img
          loading="lazy"
          src={image}
          className="object-contain shrink-0 self-start mt-1 rounded-full aspect-square w-[25px]"
          alt={`${name}'s profile picture`}
        />
        <div className="flex flex-col">
          <div className="text-sm font-bold tracking-normal leading-none text-black max-md:mr-1.5">
            {name}
          </div>
          <StarRating stars={stars} />
        </div>
      </div>
      <div className="mt-5 text-sm tracking-normal leading-5 text-black">
        {review}
      </div>
    </div>
  );
};
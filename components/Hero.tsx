import Image from "next/image";
import React from "react";
import Button from "./Button";

function Hero() {
  return (
    <section className="max-container padding-container flex flex-col xl:flex-row py-10 lg:py-20 pb-32 gap-20 md:gap-28 ">
      <div className="hero-map" />
      {/* Left Section */}
      <div className="relative flex flex-1 flex-col z-20 xl:w-1/2">
        <Image
          src="/camp.svg"
          alt="camp"
          width={50}
          height={50}
          className="absolute left-[-5px] top-[-30px] w-10 lg:w-[50px]"
        />
        <h1 className="bold-52 lg:bold-88">Putuk Truno Camp Area</h1>
        <p className="regular-16 mt-6 text-gray-400 xl:max-w-[520px]">
          We want to be on each of your journeys seeking the satisfication of
          seeing the incorruptible beauty of nature. We can help you on an
          adventure around the world in just one app
        </p>

        <div className="flex flex-wrap gap-4 my-11">
          <div className="flex items-center gap-2">
            {Array(5)
              .fill(2)
              .map((_, index) => (
                <Image
                  src="/star.svg"
                  key={index}
                  alt="star"
                  height={24}
                  width={24}
                />
              ))}
          </div>
          <p className="bold-16 lg:bold-20 text-blue-70">
            198k
            <span className="regular-16 lg:regular-20 ml-1">
              Excellent Reviews
            </span>
          </p>
        </div>
        <div className="flex flex-col w-full gap-3 sm:flex-row">
          <Button type="button" title="Download App" variant="btn_green" />
          <Button
            type="button"
            title="How we work?"
            icon="/play.svg"
            variant="btn_white_text"
          />
        </div>
      </div>
      <div className="relative flex flex-1 items-start">
        <div className="flex flex-col relative z-20 rounded-3xl gap-8 bg-gray-900 py-8 px-7 w-[268px]">
          <div className="flex flex-col">
            <div className="flex justify-between items-center">
              <p className="regular-16 text-gray-500">Location</p>
              <Image src="/close.svg" width={24} height={24} alt="close" />
            </div>
            <p className="bold-20 text-white">Aguas Catilenas</p>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex flex-col">
              <p className="regular-16 text-gray-500">Distance</p>
              <p className="bold-20 text-white">173.28 ml</p>
            </div>
            <div className="flex flex-col">
              <p className="regular-16 text-gray-500">Elevation</p>
              <p className="bold-20 text-white">2.040 km</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

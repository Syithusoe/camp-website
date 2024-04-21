import { PEOPLE_URL } from "@/constants";
import Image from "next/image";
import React from "react";

interface CampsiteProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  peopleJoined: string;
}

function Campsite({
  backgroundImage,
  title,
  subtitle,
  peopleJoined,
}: CampsiteProps) {
  return (
    <div
      className={`h-full w-full min-w-[1100px] ${backgroundImage} bg-cover bg-no-repeat lg:rounded-r-5xl xl:rounded-5xl`}
    >
      <div className="flex flex-col h-full justify-between items-start p-6 lg:px-20 lg:py-20">
        <div className="flex justify-center items-center gap-4">
          <div className="bg-green-500 rounded-full p-4">
            <Image src="/folded-map.svg" alt="map" height={28} width={28} />
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="bold-18 text-white">{title}</h4>
            <p className="regular-14 text-white">{subtitle}</p>
          </div>
        </div>
        <div className="flex justify-center items-center gap-6">
          <span className="flex -space-x-4 overflow-hidden">
            {PEOPLE_URL.map((url) => (
              <Image src={url} key={url} alt="people" width={52} height={52} />
            ))}
          </span>
          <p className="bold-18 md:bold-20 text-white">{peopleJoined}</p>
        </div>
      </div>
    </div>
  );
}

function Camp() {
  return (
    <section className="lg:mx-auto 2xl:max-w-[1440px] flex flex-col relative py-10 lg:py-20 lg:mb-10 xl:mb-20">
      <div className="hide-scrollbar flex h-[340px] w-full justify-start items-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]">
        <Campsite
          backgroundImage="bg-bg-img-1"
          title="Putuk Truno Camp"
          subtitle="Prigen, Pasuruan"
          peopleJoined="50+ Joined"
        />
        <Campsite
          backgroundImage="bg-bg-img-2"
          title="Mountain View Camp"
          subtitle="Somewhere in the forest"
          peopleJoined="50+ Joined"
        />
      </div>
      <div className="flex justify-end items-end mt-10 lg:-mt-60 lg:mr-6">
        <div className="bg-green-500 p-8 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl">
          <h2 className="regular-24 md:regular-32 xl:regular-64 text-white">
            <strong>Feeling Lost</strong> and Not Knowing The Way?
          </h2>
          <p className="regular-14 xl:regular-16 mt-5 text-white">
            Starting from the anxiety of the climbers when visiting a new
            climbing location, the possibility of getting lost is ver large.
            That's why we are here for those of you who want to start an
            adventure.
          </p>
          <Image
            src="/quote.svg"
            alt="camp-2"
            width={186}
            height={219}
            className="camp-quote"
          />
        </div>
      </div>
    </section>
  );
}

export default Camp;

import { FEATURES } from "@/constants";
import Image from "next/image";
import { features } from "process";
import React from "react";

interface FeatureProps {
  icon: string;
  title: string;
  variant: string;
  description: string;
}

function FeatureItem({ icon, title, description, variant }: FeatureProps) {
  return (
    <li className="flex flex-col flex-1 items-start w-full">
      <div className="rounded-full p-4 lg:p-7 bg-green-500">
        <Image src={icon} alt="icon" width={28} height={28} />
      </div>
      <h2 className="bold-20 lg:bold-32 mt-5 capitalize">{title}</h2>
      <p className="regular-16 mt-5 bg-white/80 text-gray-30 lg:mt-[30px] lg:bg-none">
        {description}
      </p>
    </li>
  );
}

function Features() {
  return (
    <section className="flex flex-col justify-center items-center bg-feature-bg bg-center bg-no-repeat overflow-hidden py-24">
      <div className="flex mx-auto max-w-[1440px] padding-container relative w-full justify-end">
        <div className="flex flex-1 lg:min-h-[900px] lg:max-w-[60%]">
          <Image
            src="/phone.png"
            alt="Phone"
            width={440}
            height={1000}
            className="feature-phone"
          />
        </div>
        <div className="z-20 flex flex-col w-full lg:max-w-[60%]">
          <h2 className="bold-40 lg:bold-64">Our Features</h2>
          <ul className="mt-10 grid gap-10 md:grid-cols-2 lg:gap-20">
            {FEATURES.map((feature) => (
              <FeatureItem
                key={feature.title}
                title={feature.title}
                icon={feature.icon}
                description={feature.description}
                variant={feature.variant}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Features;

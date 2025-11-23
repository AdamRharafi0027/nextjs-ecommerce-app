import React from "react";
import { ServicesData } from "@/data/ServicesData";
import ServicesCard from "@/components/ServicesCard/ServicesCard";
const ServicesSection = () => {
  return (
    <>
      <section className="text-center my-40">
        <h1 className="text-[#646B5D] playfair_font text-5xl -mt-25 lg:mt-40 md:text-6xl lg:text-8xl font-bold ">
          Our Services
        </h1>
        <div className="centred flex-wrap lg:gap-20 lg:px-100">
          {ServicesData.map((data, i) => (
            <ServicesCard key={i} data={data} />
          ))}
        </div>
      </section>
    </>
  );
};

export default ServicesSection;

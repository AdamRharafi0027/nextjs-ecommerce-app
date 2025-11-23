import { ServicesData } from "@/data/ServicesData"
import ServicesCards from "./ServicesCards"


const Services = () => {

    const servicesCard = ServicesData

  return (
    <>
    <section>
        <h1 className="text-5xl md:text-[12rem] playfair_font font-extrabold text-center text-[#646B5D] tracking-tight pt-10">Services</h1>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10 px-5 lg:px-60 mb-50">
          {servicesCard.map((card, i) => (
            <ServicesCards key={i} data={card} />
          ))}
        </div>
      </section>
    </>
  )
}

export default Services
import Image from "next/image";

const ServicesCards = ({ data }) => {
  return (
    <>
      <div
        className="
        max-w-sm w-80 centred flex-col bg-white rounded-2xl shadow-md 
        hover:shadow-xl transition-all duration-300 
        p-4 gap-4 mt-10 lg:w-100 
      "
      >
        <div className="w-full h-48 flex justify-center items-center bg-gray-50 rounded-xl overflow-hidden">
          <Image
            src={data.image}
            alt={data.title}
            width={200}
            height={200}
            className="object-contain h-full w-auto transition-transform duration-500 hover:scale-105"
          />
        </div>

        <h1 className="text-lg md:text-xl font-semibold text-[#646B5D] line-clamp-2">
          {data.title}
        </h1>

        <p className="text-sm md:text-base text-[##646B5D] line-clamp-3">
          {data.desc}
        </p>
      </div>
    </>
  );
};

export default ServicesCards;

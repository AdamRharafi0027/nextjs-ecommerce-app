import { ShoppingBag, Info ,  Heart, HeartPlus} from "lucide-react";
import Image from "next/image";
import React from "react";
import ButtonLayout from "../ui/ButtonLayout";

const Card = ({ product }) => {
  return (
    <div
      key={product.id}
      className=" playfair_font relative rounded-2xl  shadow-md hover:shadow-xl transition-all duration-300 bg-white overflow-hidden w-80 lg:w-100  "
    >
      <ButtonLayout className={"rounded-full! absolute right-8 top-5 lg:p-4 lg:right-5 lg:top-3"}>
        <HeartPlus />
      </ButtonLayout>

      <div className="flex justify-center bg-gray-50 p-4 lg:p-0 ">
        <Image
          src={product.images[0]}
          alt={product.title}
          width={270}
          height={200}
          className="rounded-lg object-cover lg:w-400 lg:rounded-md"
        />
      </div>

      <div className="px-4 pb-4 pt-5 text-[#646B5D] flex flex-col gap-5">
        <h1 className="text-lg lg:text-3xl  font-semibold line-clamp-2 text-start">
          {product.title}
        </h1>

        <div className="centred justify-around -mt-3 lg:mt-3">
          <h2 className="text-4xl font-bold ">
            ${product.price}
          </h2>

          <div className="flex items-center  gap-3">
            <ButtonLayout className={"lg:py-3 lg:px-10!"}>
              <ShoppingBag  />
            </ButtonLayout>

            <ButtonLayout className={"lg:py-3 lg:px-10!"}>
              <Info  />
            </ButtonLayout>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

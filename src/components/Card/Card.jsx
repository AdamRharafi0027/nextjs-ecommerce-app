import { ShoppingBag, Info, HeartPlus } from "lucide-react";
import Image from "next/image";
import ButtonLayout from "../ui/ButtonLayout";
import React from "react";

const Card = ({ product }) => {
  return (
    <div
      className="
        playfair_font relative rounded-2xl shadow-md hover:shadow-xl 
        transition-all duration-300 bg-white overflow-hidden
        w-[320px] lg:w-[380px] min-h-[480px] lg:min-h-[520px]
        flex flex-col
      "
    >
      {/* Favorite Button */}
      <ButtonLayout className="rounded-full! absolute right-5 top-4 lg:p-4">
        <HeartPlus />
      </ButtonLayout>

      {/* Image Wrapper */}
      <div className="w-full h-[220px] lg:h-[360px] bg-gray-50 flex justify-center items-center">
        <Image
          src={product.image}
          alt={product.title}
          width={300}
          height={260}
          className="object-contain w-full h-full"
        />
      </div>

      {/* Content */}
      <div className="px-5 pb-5 pt-6 text-[#646B5D] flex flex-col gap-5 flex-1">
        <h1 className="text-lg lg:text-2xl font-semibold line-clamp-2 text-start">
          {product.title}
        </h1>

        <div className="flex items-center justify-between mt-auto">
          <h2 className="text-3xl font-bold">${product.price}</h2>

          <div className="flex items-center gap-3">
            <ButtonLayout className="lg:py-3 lg:px-10!">
              <ShoppingBag />
            </ButtonLayout>

            <ButtonLayout className="lg:py-3 lg:px-10!">
              <Info />
            </ButtonLayout>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

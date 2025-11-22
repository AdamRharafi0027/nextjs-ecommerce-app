import Card from "@/components/Card/Card";
import ButtonLayout from "@/components/ui/ButtonLayout";
import React from "react";

const ProductsSliced = async () => {
  const url = "https://api.escuelajs.co/api/v1/products";
  const response = await fetch(url, { cache: "force-cache" });
  if (!response.ok) {
      return " ERROR IN FETCHING DATA ";
    }
    const products = await response.json();
  return (
    <>
      <section className="text-center mb-20">
        <h1 className="text-[#646B5D] playfair_font text-6xl -mt-25 lg:mt-40 md:text-6xl lg:text-8xl font-bold ">
          Products
        </h1>
         <div className="centred flex-wrap mt-10 gap-10 playfair_font">
           {products.slice(0,8).map((product)=>(<Card key={product.id} product={product} />))}
         </div>
         <ButtonLayout className={"rounded-full! py-3 px-15  mt-10"}>
          View ALL
         </ButtonLayout>
      </section>
    </>
  );
};

export default ProductsSliced;

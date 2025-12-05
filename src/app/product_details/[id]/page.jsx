"use client";

import { ChevronLeft } from "lucide-react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/features/cartSlice";
import { useParams } from "next/navigation";
const ProductDetails = () => {
 const {id} = useParams()

  const [product, setProduct] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const url = `https://fakestoreapi.com/products/${id}`; // ✅ dynamic id

    const fetchData = async () => {
      try {
        const response = await fetch(url, { cache: "force-cache" });
        if (!response.ok) {
          console.error("ERROR IN FETCHING DATA");
          return;
        }

        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.log("FETCH ERROR:", error);
      }
    };

    fetchData();
  }, [id]); // dependency
console.log(product)
  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };
  return (
    <section className="relative mt-8 mb-100">
      <button
        className="cursor-pointer  z-50 absolute left-20 flex gap-5 items-center text-3xl text-[#646B5D]"
        onClick={() => {
          window.history.back();
        }}
      >
        <ChevronLeft size={40} />
        Back
      </button>
      <div className="back-bg absolute w-180 h-490 -top-130 -left-70 bg-[#d9d9d9fd] rotate-15"></div>
      <div className="z-10 relative pt-20">
        <div className="card flex justify-center gap-30">
          {/* IMAGES */}
          <div>
            <img
              src={product.image}
              alt={product.title}
              width={500}
            />

            {/* THUMBNAILS */}
            <div className="flex justify-center items-center gap-10 pt-10">
              <img
                key={product.id}
                src={product.image}
                alt={product.title}
                width={100}
                className={`rounded-sm cursor-pointer border `}
              />
            </div>
          </div>

          {/* DETAILS */}
          <div className="text-[#646B5D] playfair">
            <h1 className="text-5xl w-200 font-bold">{product.title}</h1>
            <h2 className="text-7xl my-5">${product.price}</h2>
            <p className="w-160 mb-10">{product.description}</p>

            {/* QUANTITY */}
            <div className="flex gap-2 sm:gap-3 items-center font-sans mb-10">
              <button className="cursor-pointer bg-[#a7b3a2] hover:bg-[#a7b3a2b2] text-white rounded-lg px-4 py-1 text-4xl font-bold">
                +
              </button>
              <span className="text-4xl">66</span>
              <button className="cursor-pointer bg-[#a7b3a2] hover:bg-[#a7b3a2b2] text-white rounded-lg px-4 py-1 text-4xl font-bold">
                –
              </button>
            </div>

            {/* ADD TO CART + HEART */}
            <div className="flex items-center font-sans mb-10 gap-5">
              <button
                onClick={handleAddToCart}
                className="cursor-pointer bg-[#a7b3a2] hover:bg-[#a7b3a2b2] text-white rounded-lg px-8 py-4 text-3xl font-bold w-100"
              >
                Add to cart
              </button>
              {/* <button className="cursor-pointer bg-transparent border-2 border-[#646B5D] hover:bg-[#a7b3a2] text-[#646B5D] hover:text-white rounded-lg px-8 py-4 font-bold duration-300">
                {
                  favorite ? (
                    <Heart size={30} onClick={()=>{
                      setFavorite(false)
                      handleDeleteFavorite()
                    }} className="fill-red-400 text-red-400"  />

                  ) : (<HeartPlus onClick={()=>{
                setFavorite(true)
                    handleAddFavorite()
              }} size={30} />)
                }
              </button> */}
            </div>

            {/* BUY NOW */}
            <button className="cursor-pointer bg-[#a7b3a2] hover:bg-[#a7b3a2b2] text-white rounded-lg px-8 py-4 text-3xl font-bold w-130 font-sans">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;

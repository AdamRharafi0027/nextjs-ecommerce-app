'use client'

import Card from "@/components/Card/Card"
import { useSelector } from "react-redux"

const Favorites = () => {

const favorites = useSelector(state=>state.favorite.favorites)

  return (
    <>
        <section>
            <h1 className="text-5xl md:text-[12rem] playfair_font font-extrabold text-center text-[#646B5D] tracking-tight py-10">Favorites</h1>
         <div className="mt-20 flex flex-wrap gap-20 items-center justify-center px-[30px] pb-20">
       
          {  favorites.map((product) => (
              <Card key={product.id} product={product} />
            ))}

      </div>
        </section>
    </>
  )
}

export default Favorites
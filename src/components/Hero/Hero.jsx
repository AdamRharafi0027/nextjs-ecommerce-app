import Image from "next/image"
import hero_image from "../../../public/images/hero.png"

const Hero = () => {
  return (
    <>
        <div className="w-full h-[calc(100vh-3.75rem)] pt-15 flex flex-col items-center gap-15 relative">
            <p className="playfair_font text-[#646b5d] font-bold text-center text-3xl w-80">
              Style Delivered: Shop the Latest Trends in Fashion
            </p>
            <Image 
              src={hero_image}
              alt="hero image"
            />
        </div>
    </>
  )
}

export default Hero
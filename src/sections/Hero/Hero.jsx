import Image from "next/image"
import hero_image from "../../../public/images/hero.png"

const Hero = () => {
  return (
    <>
        <div className="w-full h-[calc(100vh-3.75rem)] pt-15 flex flex-col lg:flex-row  items-center gap-15 relative">
          <div className="hidden back-circles w-full h-screen -z-10 lg:block absolute lg:flex lg:flex-row items-center justify-between -mt-10 ">
                <div className="circle-left bg-[#A7B3A2] rounded-full h-100 w-100 -ml-40"></div>
                <div className="circle-right bg-[#A7B3A2] rounded-full h-230 w-230 -mr-60"></div>
            </div>
            <p className="playfair_font text-[#646b5d] font-bold text-center  text-3xl w-80 lg:text-start lg:text-9xl lg:w-[1000px] lg:ml-20 lg:leading-[170px]">
              Style Delivered: Shop the Latest Trends in Fashion
            </p>
            <Image 
              src={hero_image}
              alt="hero image"
              className="lg:w-[1500px] lg:absolute lg:-right-30 lg:-mr-70"
            />
        </div>
    </>
  )
}

export default Hero
import { AboutData } from "@/data/AboutData";
import AboutCards from "./AboutCards";

const About = () => {
  const aboutCards = AboutData;

  return (
    <>
      <section>
        <h1 className="text-5xl md:text-[12rem] playfair_font font-extrabold text-center text-[#646B5D] tracking-tight py-10">ABOUT US</h1>
        <p className="mt-6 px-4 lg:px-0 md:text-xl text-gray-600 text-center max-w-3xl mx-auto">
          We are a creative team passionate about making high-quality products
          accessible to everyone. Our mission is to combine modern design with
          quality at fair prices.
        </p>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10 px-5 lg:px-60 mb-50">
          {aboutCards.map((card, i) => (
            <AboutCards key={i} data={card} />
          ))}
        </div>
      </section>
    </>
  );
};

export default About;

const AboutCards = ({ data }) => {
  return (
    <>
          <div className="bg-white shadow-lg rounded-sm p-8 hover:shadow-2xl transition border-t-8 border-[#646B5D]">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">{data.title}</h2>
            <p className="text-gray-600 leading-relaxed">
              {data.desc}
            </p>
          </div>
    </>
);
};

export default AboutCards;

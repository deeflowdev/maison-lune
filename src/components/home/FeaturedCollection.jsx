const FeaturedCollection = ({ collections }) => {
  return (
    <section className="pt-18 px-8 pb-10 border-t border-[#d6ccc2]">
      <div className="grid md:grid-cols-3 gap-8">
        {collections.map((item) => (
          <div key={item.id} className="group">
            <div className="overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-100 object-cover group-hover:scale-105 transition duration-500"
              />
            </div>

            <p className="uppercase text-xs tracking-widest text-[#252422] pt-3">
              {item.category}
            </p>

            <h3 className="text-xl capitalize body-font py-2">{item.title}</h3>

            <p className="text-xs text-[#403d39] body-font">{item.subtitle}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedCollection;

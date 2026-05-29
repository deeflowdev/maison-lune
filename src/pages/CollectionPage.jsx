import { useParams, Link } from "react-router-dom";
import { products } from "../data/products";
import { collections } from "../data/collections";
import Breadcrumb from "../components/common/Breadcrumb";

const CollectionPage = () => {
  const { slug } = useParams();

  const collection = collections.find((c) => c.slug === slug);

  const filteredProducts = products.filter((p) => p.collection === slug);

  return (
    <section className="min-h-screen bg-[#fafaf9] px-6 md:px-12 py-20">
      {/* top meta */}
      <div className="max-w-6xl mx-auto mb-14">
        <p className="uppercase tracking-[0.3em] text-xs text-[#6b6b6b] mb-4">
          maison lune archive
        </p>

        <h1 className="text-4xl md:text-5xl capitalize text-[#2f2a25] leading-tight">
          {collection?.title}
        </h1>

        <p className="mt-4 text-sm md:text-base text-[#6b6b6b] max-w-2xl leading-relaxed">
          {collection?.subtitle}
        </p>

        
      </div>

      {/* products grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {filteredProducts.map((p) => (
          <div
            key={p.id}
            className="group bg-white/40 border border-[#e7e2dc] overflow-hidden hover:shadow-xl transition duration-500"
          >
            <div className="overflow-hidden">
              <img
                src={p.image}
                alt={p.name}
                className="w-full aspect-3/4 object-cover group-hover:scale-105 transition duration-700"
              />
            </div>

            <div className="p-5">
              <h2 className="text-sm uppercase tracking-wide text-[#2f2a25]">
                {p.name}
              </h2>

              <p className="mt-2 text-sm text-[#6b6b6b]">Rs. {p.price}</p>

              <div className="mt-4 h-px w-0 group-hover:w-full bg-[#c9bdb3] transition-all duration-500"></div>
            </div>
          </div>
        ))}
      </div>

      {/* empty state */}
      {filteredProducts.length === 0 && (
        <div className="text-center mt-20 text-[#8a8a8a]">
          no pieces available in this collection yet
        </div>
      )}
    </section>
  );
};

export default CollectionPage;

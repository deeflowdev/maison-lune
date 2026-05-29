import { Link } from "react-router-dom";

const FeaturedCollection = ({ collections }) => {
  const evening = collections.find((item) => item.id === 2);
  const minimal = collections.find((item) => item.id === 3);

  if (!evening || !minimal) return null;

  return (
    <section className="w-full">
      {/* SECTION 1 */}
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-20 grid md:grid-cols-2 gap-14 items-center">
        {/* text */}
        <div className="space-y-6">
          <span className="text-[10px] tracking-[0.35em] uppercase text-[#a15c38]">
            featured drop
          </span>

          <div className="space-y-3">
            <h2 className="text-4xl md:text-5xl font-light tracking-tight text-[#2a2522] leading-[1.1] uppercase">
              {evening.title}
            </h2>

            <div className="w-14 h-px bg-[#a15c38]/40"></div>
          </div>

          <p className="text-medium md:text-base text-[#6f5f55] leading-relaxed max-w-md">
            {evening.subtitle}
          </p>

          <p className="text-medium capitalize text-[#8a7a72] leading-relaxed max-w-sm text-nowrap">
            Designed for evenings that blur structure and softness.
          </p>
        </div>

        {/* image */}
        <div className="relative group">
          <div className="aspect-4/5 overflow-hidden">
            <img
              src={evening.image}
              alt={evening.title}
              className="w-full h-full object-cover transition duration-700 group-hover:scale-[1.03] brightness-105 contrast-105"
            />
          </div>

          <div className="absolute -top-4 -right-4 w-14 h-14 bg-[#ff6b6b]/80 mix-blend-multiply"></div>
          <div className="absolute -bottom-4 -left-4 w-14 h-14 bg-[#ff6b6b]/70 mix-blend-multiply"></div>

          <div className="absolute top-3 left-3 text-[10px] uppercase tracking-[0.3em] text-black/40">
            look 01
          </div>
        </div>
      </div>

      {/* SECTION 2 */}
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-20 grid md:grid-cols-2 gap-14 items-center">
        {/* image first on desktop */}
        <div className="relative md:order-1 order-2 group">
          <div className="aspect-4/5 overflow-hidden">
            <img
              src={minimal.image}
              alt={minimal.title}
              className="w-full h-full object-cover transition duration-700 group-hover:scale-[1.03] brightness-105 contrast-105"
            />
          </div>

          <div className="absolute -top-4 -right-4 w-16 h-16 bg-[#5b7cfa]/80 mix-blend-multiply"></div>
          <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-[#5b7cfa]/70 mix-blend-multiply"></div>

          <div className="absolute top-3 left-3 text-[10px] uppercase tracking-[0.3em] text-black/40">
            look 02
          </div>
        </div>

        {/* text */}
        <div className="space-y-6 md:order-2 order-1">
          <span className="text-[10px] tracking-[0.35em] uppercase text-[#5b7cfa]">
            signature edit
          </span>

          <div className="space-y-3">
            <h2 className="text-4xl md:text-5xl font-light tracking-tight text-[#2a2522] leading-[1.1] uppercase">
              {minimal.title}
            </h2>

            <div className="w-14 h-px bg-[#5b7cfa]/40"></div>
          </div>

          <p className="text-medium md:text-base text-[#6f5f55] leading-relaxed max-w-md">
            {minimal.subtitle}
          </p>

          <p className="text-medium text-nowrap capitalize text-[#8a7a72] leading-relaxed max-w-sm">
            minimalism refined into wearable silence.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollection;

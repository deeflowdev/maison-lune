import React from "react";

const Editorial = () => {
  return (
    <div className="bg-[#fafaff]">
      <section className="px-10 py-24 max-w-6xl mx-auto">
        {/* title block */}
        <div className="mb-16">
          <h1 className="text-5xl heading-font tracking-wide text-[#3d352f] mb-6">
            Editorial Archive
          </h1>

          <p className="text-sm text-[#6b6b6b] leading-relaxed max-w-2xl">
            A curated study of maison lune’s evolving visual language — where
            garments are not presented as products, but as fragments of
            atmosphere, memory, and constructed silence.
          </p>
        </div>

        {/* manifesto block */}
        <div className="border-l border-[#d6ccc2] pl-6 mb-20 space-y-4">
          <p className="text-sm text-[#6b6b6b] leading-relaxed">
            Each editorial exists as a response to restraint — an intentional
            withdrawal from excess, spectacle, and noise.
          </p>

          <p className="text-sm text-[#6b6b6b] leading-relaxed">
            What remains is form reduced to essence: silhouette, texture,
            proportion, and emotional weight.
          </p>

          <p className="text-sm text-[#6b6b6b] leading-relaxed">
            Maison Lune does not document fashion. it constructs stillness
            around it.
          </p>
        </div>

        {/* chapters */}
        <div className="space-y-20">
          <div>
            <h2 className="text-2xl heading-font mb-2 tracking-wide text-[#3d352f]">
              i. Restraint as foundation
            </h2>
            <p className="text-sm text-[#6b6b6b] leading-relaxed max-w-3xl">
              Design begins where excess ends. every element is questioned until
              only necessity remains. This is not minimalism as style, but as
              discipline — a refusal to add what does not belong.
            </p>
          </div>

          <div>
            <h2 className="text-2xl heading-font mb-2 tracking-wide text-[#3d352f]">
              ii. Silhouette as language
            </h2>
            <p className="text-sm text-[#6b6b6b] leading-relaxed max-w-3xl">
              Garments are treated as structure in motion. They do not decorate
              the body — they interpret it. Each line exists to define presence
              without demanding attention.
            </p>
          </div>

          <div>
            <h2 className="text-2xl heading-font mb-2 tracking-wide text-[#3d352f]">
              iii. Mood as construction
            </h2>
            <p className="text-sm text-[#6b6b6b] leading-relaxed max-w-3xl">
              Atmosphere is not an afterthought; it is engineered. Light, tone,
              and texture converge to create emotional stillness within visual
              form.
            </p>
          </div>

          <div>
            <h2 className="text-2xl heading-font mb-2 tracking-wide text-[#3d352f]">
              iv. Permanence over season
            </h2>
            <p className="text-sm text-[#6b6b6b] leading-relaxed max-w-3xl">
              Maison Lune rejects temporal urgency. Each piece is designed to
              resist obsolescence, existing outside the logic of trend cycles
              and seasonal expiration.
            </p>
          </div>
        </div>

        {/* visual grid */}
        <div className="grid md:grid-cols-3 gap-6 mt-20">
          <img
            className="w-full object-cover p-3 shadow"
            src="https://images.unsplash.com/photo-1779398763498-cf668c6dc725?q=80&w=387&auto=format&fit=crop"
          />
          <img
            className="w-full object-cover p-3 shadow"
            src="https://images.unsplash.com/photo-1630498279523-fc2a5e7216d3?q=80&w=387&auto=format&fit=crop"
          />
          <img
            className="w-full object-cover p-3 shadow"
            src="https://images.unsplash.com/photo-1768064854562-a5ab0b135290?q=80&w=387&auto=format&fit=crop"
          />
        </div>

        {/* closing line */}
        <div className="mt-24 text-center max-w-2xl mx-auto">
          <p className="text-sm text-[#3d352f] italic leading-relaxed">
            This is not a collection of clothes. It is a controlled language of
            restraint, translated through fabric, silence, and form.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Editorial;

import { Link } from "react-router-dom";

const Breadcrumb = ({ collection, pageLabel, path }) => {
  return (
    <div className="mt-6 flex gap-3 text-xs uppercase tracking-widest text-[#8a8a8a]">
      <Link to="/" className="hover:text-black transition">
        home
      </Link>

      <span>/</span>

      {collection && (
        <>
          <Link to="/collections" className="hover:text-black transition">
            collections
          </Link>

          <span>/</span>

          <span className="text-[#2f2a25]">{collection.title}</span>
        </>
      )}

      {!collection && pageLabel && (
        <span className="text-[#2f2a25]">{pageLabel}</span>
      )}
    </div>
  );
};

export default Breadcrumb;

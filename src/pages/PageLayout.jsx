import { useLocation } from "react-router-dom";
import { collections } from "../data/collections";
import Navbar from "../components/layout/Navbar"
import Footer from "../components/layout/Footer"
import Breadcrumb from "../components/common/Breadcrumb";

const PageLayout = ({ children }) => {
  const location = useLocation();
  const path = location.pathname;

  const slug = path.split("/")[2];

  const collection = collections.find((c) => c.slug === slug);

  const breadcrumbMap = {
    "/account": "account",
    "/faq": "faq",
    "/contact": "contact",
    "/shipping": "shipping",
    "/return": "returns",
    "/wishlist": "wishlist",
    "/cart": "cart",
    "/shop": "shop",
    "/collections": "collections",
    "/about": "about",
    "/new-in": "newin",
    "/editorial-banner": "editorialbanner",
    "/editorial": "editorial",
  };

  const pageLabel = breadcrumbMap[path];

  const showBreadcrumb = path !== "/";

  return (
    <div className="min-h-screen flex flex-col bg-[#fafaff]">
      <Navbar />

      <main className="flex-1">
        {showBreadcrumb && (
          <div className="max-w-6xl mx-auto px-6 md:px-12">
            <Breadcrumb
              collection={collection}
              pageLabel={pageLabel}
              path={path}
            />
          </div>
        )}

        {children}
      </main>

      <Footer />
    </div>
  );
};

export default PageLayout;
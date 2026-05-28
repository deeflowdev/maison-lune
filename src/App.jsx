import { Route, Routes } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Account from "./pages/Account";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Collections from "./pages/Collections";
import Editorial from "./pages/Editorial";
import About from "./pages/About";
import NewIn from "./pages/NewIn";
import Search from "./pages/Search";
import Wishlist from "./pages/Wishlist";
import Cart from "./components/cart/Cart";
import EditorialBanner from "./components/home/EditorialBanner";
import NotFound from "./pages/NotFound";
import Contact from "./components/information/Contact";
import Shipping from "./components/information/Shipping";
import Returns from "./components/information/Returns";
import FAQ from "./components/information/Faq";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#fafaff]">
      <Navbar />
      <>
        {/* all the pages */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/new-in" element={<NewIn />} />
          <Route path="/editorialbanner" element={<EditorialBanner />} />
          <Route path="/about" element={<About />} />
          <Route path="/editorial" element={<Editorial />} />

          <Route path="/search" element={<Search />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/account" element={<Account />} />

          <Route path="/contact" element={<Contact />} />
          <Route path="/shipping" element={<Shipping />} />
          <Route path="/return" element={<Returns />} />
          <Route path="/faq" element={<FAQ />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </>
      <Footer />
    </div>
  );
};

export default App;

// <div className="min-h-screen flex flex-col bg-[#fafaff]">

import { Route, Routes } from "react-router-dom";

import PageLayout from "./pages/PageLayout";

import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Collections from "./pages/Collections";
import CollectionPage from "./pages/CollectionPage";
import Editorial from "./pages/Editorial";
import About from "./pages/About";
import NewIn from "./pages/NewIn";
import Search from "./pages/Search";
import Wishlist from "./pages/Wishlist";
import Cart from "./components/cart/Cart";
import Account from "./pages/Account";
import Contact from "./components/information/Contact";
import Shipping from "./components/information/Shipping";
import Returns from "./components/information/Returns";
import FAQ from "./components/information/Faq";
import EditorialBanner from "./components/home/EditorialBanner";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <PageLayout className="min-h-screen flex flex-col bg-[#fafaff]">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/collection/:slug" element={<CollectionPage />} />
        <Route path="/new-in" element={<NewIn />} />
        <Route path="/editorial-banner" element={<EditorialBanner />} />
        <Route path="/editorial" element={<Editorial />} />
        <Route path="/about" element={<About />} />

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
    </PageLayout>
  );
};

export default App;
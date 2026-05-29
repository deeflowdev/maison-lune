import React from 'react'
import Hero from '../components/home/Hero';
import FeaturedCollection from '../components/home/FeaturedCollection';
import TrendingProducts from '../components/home/TrendingProducts';
import EditorialBanner from '../components/home/EditorialBanner';

//array object for the FeaturedCollection
const collections = [
  {
    id: 1,
    title: "new arrivals",
    subtitle:
      "timeless silhouettes crafted with refined structure and modern elegance.",
    image:
      "https://plus.unsplash.com/premium_photo-1760466051070-bb7ba235fbc9?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "collection",
  },

  {
    id: 2,
    title: "evening edit",
    subtitle:
      "elevated essentials designed for understated sophistication after dark.",
    image:
      "https://plus.unsplash.com/premium_photo-1726844813736-e1af819407e1?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "editorial",
  },

  {
    id: 3,
    title: "minimal essentials",
    subtitle:
      "soft tailoring and contemporary staples for effortless everyday dressing.",
    image:
      "https://plus.unsplash.com/premium_photo-1763556134867-292e288c753b?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "wardrobe",
  },
];

//array object for the TrendingProducts
const trendingProducts = [
  {
    id: 1,
    name: "structured blazer",
    price: "RS. 3,999",
    image:
      "https://i.pinimg.com/736x/c0/5c/cc/c05ccc7ed13a2c9adba6a400f329a611.jpg?w=1600&q=90&auto=format&fit=crop",
    badge: "trending",
  },
  {
    id: 2,
    name: "ribbed knit co-ord set",
    price: "RS. 2,199",
    image:
      "https://images.unsplash.com/photo-1726758149977-d73a19e34298?w=1600&q=90&auto=format&fit=crop",
    badge: "bestseller",
  },
  {
    id: 3,
    name: "soft blush summer shirt",
    price: "RS. 1,499",
    image:
      "https://i.pinimg.com/736x/55/e6/06/55e606c65e5327b5ab7e853d5f6dd692.jpg?w=1600&q=90&auto=format&fit=crop",
    badge: "new",
  },
];

const Home = () => {
  // console.log(collections);
  return (
    <div className="min-h-screen">
      <Hero />
      <FeaturedCollection collections={collections} />
      <TrendingProducts products={trendingProducts} />
      <EditorialBanner />
    </div>
  );
}

export default Home
import { BsDot } from "react-icons/bs";

import "./App.css";
import Header from "./components/Header";
import ProductCard from "./components/ProductCard";
import ProductCategories from "./components/ProductCategories";

const productsList = [
  {
    id: 1,
    img: "https://res.cloudinary.com/dzduqsp2x/image/upload/v1713012059/SIPR04018_01_1_m8skod.png",
    title: "The Brow Metro Movers",
    discountPrice: 4899,
    originalPrice: 8999,
  },
  {
    id: 2,
    img: "https://res.cloudinary.com/dzduqsp2x/image/upload/v1713012059/SIPR04031_01_1_c1p7dk.png",
    title: "The Metro Movers Black",
    discountPrice: 4899,
    originalPrice: 8999,
  },
  {
    id: 3,
    img: "https://res.cloudinary.com/dzduqsp2x/image/upload/v1713012059/SIPR04085_01_1_l66oqp.png",
    title: "The Metro Movers Black",
    discountPrice: 4899,
    originalPrice: 8999,
  },
  {
    id: 4,
    img: "https://res.cloudinary.com/dzduqsp2x/image/upload/v1713012059/SIPR04086_01_1_jsuds3.png",
    title: "The Metro Movers Black",
    discountPrice: 4899,
    originalPrice: 8999,
  },
  {
    id: 5,
    img: "https://res.cloudinary.com/dzduqsp2x/image/upload/v1713012059/SIPR04018_01_1_m8skod.png",
    title: "The Brow Metro Movers",
    discountPrice: 4899,
    originalPrice: 8999,
  },
  {
    id: 6,
    img: "https://res.cloudinary.com/dzduqsp2x/image/upload/v1713012059/SIPR04031_01_1_c1p7dk.png",
    title: "The Metro Movers Black",
    discountPrice: 4899,
    originalPrice: 8999,
  },
  {
    id: 7,
    img: "https://res.cloudinary.com/dzduqsp2x/image/upload/v1713012059/SIPR04085_01_1_l66oqp.png",
    title: "The Metro Movers Black",
    discountPrice: 4899,
    originalPrice: 8999,
  },
  {
    id: 8,
    img: "https://res.cloudinary.com/dzduqsp2x/image/upload/v1713012059/SIPR04086_01_1_jsuds3.png",
    title: "The Metro Movers Black",
    discountPrice: 4899,
    originalPrice: 8999,
  },
];

function App() {
  return (
    <div className="app">
      <Header />
      <ProductCategories />
      <div className="products-result-container">
        <div className="product-result-category-container">
          <p className="product-result-category-text">Bags</p>
          <BsDot className="product-result-category-text" />
          <p className="product-result-category-text">Backpacks</p>
        </div>
        <div className="product-result-category-count-container">
          <p className="product-result-category-text">13 products</p>
          <img
            src="https://res.cloudinary.com/dzduqsp2x/image/upload/v1713162863/Vector_4_rqhlve.png"
            alt="sort"
            className="product-result-category-sort-img"
          />
        </div>
      </div>
      <div className="product-list-container">
        <ul className="product-list">
          {productsList.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;

import { Header } from "./components/Layout/Header/Header";
import Categories from "./components/Layout/Categories";
import FoodMeals from "./components/Layout/Meals/FoodMeals";
import { useState } from "react";
import { items } from "./data";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [foodData, setFoodData] = useState(items);
  const [isCartShown, setIsCartShown] = useState(false);

  const allCategories = ["All", ...new Set(items.map((i) => i.category))];

  const handleFilterCategory = (cat) => {
    if (cat === "All") {
      setFoodData(items);
    } else {
      const newItems = items.filter((item) => item.category === cat);
      setFoodData(newItems);
    }
  };

  const handleFilterSearch = (word) => {
    if (word !== "") {
      const newItems = items.filter((item) => item.title === word);
      setFoodData(newItems);
    }
  };

  const handleShowCart = () => {
    setIsCartShown(true);
  };

  const handleHideCart = () => {
    setIsCartShown(false);
  };

  return (
    <CartProvider>
      {isCartShown && <Cart onHideCart={handleHideCart} />}
      <div className="w-screen h-screen overflow-x-hidden bg-gradient-to-tl from-gray-50 to-deep-orange-300">
        <div className=" mx-auto flex flex-col py-8 px-8 lg:py-3 lg:px-16 xl:px-48 ">
          <Header
            filterSearch={handleFilterSearch}
            onShowCart={handleShowCart}
          />

          <Categories
            filterCategory={handleFilterCategory}
            allCategories={allCategories}
          />

          <FoodMeals itemsData={foodData} />
        </div>
      </div>
    </CartProvider>
  );
}

export default App;

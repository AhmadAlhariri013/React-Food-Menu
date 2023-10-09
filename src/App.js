import { Header } from "./components/Header";
import Categories from "./components/Categories";
import FoodMeals from "./components/FoodMeals";
import { useState } from "react";
import { items } from "./data";

function App() {
  const [foodData, setFoodData] = useState(items);

  const allCategories = ["All", ...new Set(items.map((i) => i.category))];

  const filterCategory = (cat) => {
    if (cat === "All") {
      setFoodData(items);
    } else {
      const newItems = items.filter((item) => item.category === cat);
      setFoodData(newItems);
    }
  };

  const filterSearch = (word) => {
    if (word !== "") {
      const newItems = items.filter((item) => item.title === word);
      setFoodData(newItems);
    }
  };

  return (
    <div className="w-screen h-screen overflow-x-hidden bg-gradient-to-tl from-gray-50 to-deep-orange-300">
      <div className=" mx-auto flex flex-col py-8 px-8 lg:py-3 lg:px-16 xl:px-48 ">
        <Header filterSearch={filterSearch} />

        <Categories
          filterCategory={filterCategory}
          allCategories={allCategories}
        />

        <FoodMeals itemsData={foodData} />
      </div>
    </div>
  );
}

export default App;

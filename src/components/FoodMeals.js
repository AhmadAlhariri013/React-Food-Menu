import React from "react";
import MealCard from "./MealCard";
import { Zoom } from "react-awesome-reveal";

const FoodMeals = ({ itemsData }) => {
  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mt-5">
      <Zoom>
        {itemsData.length >= 1 ? (
          itemsData.map((item) => {
            return (
              <MealCard
                key={item.id}
                imgSrc={item.imgSrc}
                title={item.title}
                desc={item.desc}
              />
            );
          })
        ) : (
          <h3 className=" text-center grid col-span-3 text-3xl text-white">
            There is no meals right now{" "}
          </h3>
        )}
      </Zoom>
    </div>
  );
};

export default FoodMeals;

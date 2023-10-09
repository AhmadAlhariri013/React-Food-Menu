import { Button } from "@material-tailwind/react";
import React from "react";
import { JackInTheBox } from "react-awesome-reveal";
const Categories = ({ filterCategory, allCategories }) => {
  const onFilterHandler = (cat) => {
    filterCategory(cat);
  };
  return (
    <div className="flex flex-col justify-center items-center mt-5">
      <div className=" border-b-4 border-deep-orange-400 pb-1">
        <h2 className="text-center text-3xl font-bold text-gray-50 ">
          Food Menu
        </h2>
      </div>

      <div className="flex justify-center items-center gap-2 my-3">
        <JackInTheBox>
          {allCategories.length >= 1
            ? allCategories.map((cat, index) => {
                return (
                  <Button
                    key={index}
                    onClick={() => onFilterHandler(cat)}
                    className=" bg-blue-gray-50 text-deep-orange-500 hover:bg-gradient-to-l hover:from-deep-orange-100 hover:to-deep-orange-300 hover:text-gray-50 hover:transition-all hover:duration-300"
                  >
                    {cat}
                  </Button>
                );
              })
            : null}
        </JackInTheBox>
      </div>
    </div>
  );
};

export default Categories;

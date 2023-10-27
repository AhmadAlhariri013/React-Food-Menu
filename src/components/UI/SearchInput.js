import { Button, Input } from "@material-tailwind/react";
import React, { useState } from "react";

const SearchInput = ({ onSearch }) => {
  const [Value, setValue] = useState("");

  const handleSearchOnItem = (e) => {
    e.preventDefault();
    onSearch(Value);
    setValue("");
  };
  return (
    <form className="relative flex w-full gap-2 md:w-max">
      <Input
        type="search"
        onChange={(e) => setValue(e.target.value)}
        value={Value}
        label="Search here..."
        className="pr-20 border-solid border-2 focus:border-deep-orange-400 focus:outline-none"
        containerProps={{
          className: "min-w-[288px]",
        }}
      />
      <Button
        onClick={handleSearchOnItem}
        size="sm"
        className="!absolute right-1 top-1 rounded bg-deep-orange-500"
      >
        Search
      </Button>
    </form>
  );
};

export default SearchInput;

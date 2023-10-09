import { Navbar, Typography, Button, Input } from "@material-tailwind/react";
import { useState } from "react";

export function Header({ filterSearch }) {
  const [Value, setValue] = useState("");

  const onSearch = (e) => {
    e.preventDefault();
    filterSearch(Value);
    setValue("");
  };

  return (
    <Navbar className=" px-4 py-3">
      <div className="flex flex-wrap items-center justify-between gap-y-4 text-deep-orange-500">
        <Typography
          as="a"
          href="#"
          variant="h6"
          className="mr-4 ml-2 cursor-pointer py-1.5"
        >
          Cresbow
        </Typography>

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
            onClick={onSearch}
            size="sm"
            className="!absolute right-1 top-1 rounded bg-deep-orange-500"
          >
            Search
          </Button>
        </form>
      </div>
    </Navbar>
  );
}

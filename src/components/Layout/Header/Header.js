import { Navbar, Typography } from "@material-tailwind/react";
import HeaderCartButton from "./HeaderCartButton";
import SearchInput from "../../UI/SearchInput";

export function Header({ filterSearch, onShowCart }) {
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

        <SearchInput onSearch={filterSearch} />

        <HeaderCartButton onClick={onShowCart} />
      </div>
    </Navbar>
  );
}

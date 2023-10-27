import { useContext, useEffect, useState } from "react";
import CartIcon from "../../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../../../store/Cart-Context";

const HeaderCartButton = (props) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const cartCxt = useContext(CartContext);
  const { items } = cartCxt;
  const btnClasses = `${classes.button} ${
    btnIsHighlighted ? classes.bump : ""
  }`;

  const numberOfItems = cartCxt.items.reduce((currentNumber, item) => {
    return currentNumber + item.amount;
  }, 0);

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button
      onClick={props.onClick}
      className={` ${btnClasses} bg-deep-orange-400 text-deep-orange-500 hover:bg-gradient-to-l hover:from-deep-orange-100 hover:to-deep-orange-300 hover:text-gray-50 hover:transition-all hover:duration-300`}
    >
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={`${classes.badge} bg-deep-orange-600`}>
        {numberOfItems}
      </span>
    </button>
  );
};

export default HeaderCartButton;

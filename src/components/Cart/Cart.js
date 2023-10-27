import { useContext } from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import CartContext from "../../store/Cart-Context";

const Cart = (props) => {
  const cartCntx = useContext(CartContext);

  const totalAmount = `$${cartCntx.totalAmount.toFixed(2)}`;
  const hasItems = cartCntx.items.length > 0;

  const handleRemoveCartItem = (id) => {
    cartCntx.removeItem(id);
  };

  const handleAddCartItem = (item) => {
    cartCntx.addItem({ ...item, amount: 1 });
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCntx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={handleRemoveCartItem.bind(null, item.id)}
          onAdd={handleAddCartItem.bind(null, item)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClick={props.onHideCart}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onHideCart} className={classes["button--alt"]}>
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;

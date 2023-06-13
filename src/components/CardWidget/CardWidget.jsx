import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const CartWidget = () => {
  const itemCount = 5; // Número hardcodeado (para ejemplo)

  return (
    <div className="cart-widget">
      <FontAwesomeIcon icon={faShoppingCart} />
      <span className="cart-notification">{itemCount}</span>
    </div>
  );
};

export default CartWidget;

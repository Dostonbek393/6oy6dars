import { useGlobalContext } from "../hooks/useGlobalContext";
import { useState } from "react";

function Product({ d }) {
  const { dispatch, cart } = useGlobalContext();
  const { id, name, category, price, image } = d;
  const alreadyAdded = cart.find((d) => d.id == id);

  const [borderAdded, setBorderAdded] = useState(false);

  const handleAddToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      payload: { ...d, amount: 1 },
    });
    setBorderAdded(true);
  };

  return (
    <div className="desserts-card">
      <picture className={borderAdded ? "border-active" : ""}>
        {" "}
        <source media="(min-width:998px)" srcSet={image.desktop} />
        <source media="(min-width:800px)" srcSet={image.tablet} />
        <source media="(min-width:400px)" srcSet={image.mobile} />
        <img className="desserts-card-image" src={image.thumbnail} alt="" />
      </picture>

      <div className="buttons-wrapper">
        {!alreadyAdded && (
          <button onClick={handleAddToCart} className="btn add-to-card-btn">
            <span className="add-to-card-btn-wrapper">
              <img src="images/icon-add-to-cart.svg" alt="" />
              <span>Add to Cart</span>
            </span>
          </button>
        )}
        {alreadyAdded && (
          <div className="card-button">
            <button
              className="card-decrement"
              onClick={() => {
                if (alreadyAdded.amount == 1) {
                  dispatch({ type: "DELETE", payload: d.id });
                  setBorderAdded(false);
                } else {
                  dispatch({ type: "DECREMENT", payload: d.id });
                }
              }}
            >
              -
            </button>
            <h2> {alreadyAdded.amount} </h2>
            <button
              className="card-increment"
              onClick={() => dispatch({ type: "INCREMENT", payload: d.id })}
            >
              +
            </button>
          </div>
        )}
      </div>

      <div className="desserts-card-body">
        <p className="desserts-card-category">{category}</p>
        <h3 className="desserts-card-name">{name}</h3>
        <p className="desserts-card-price">${price}</p>
      </div>
    </div>
  );
}

export default Product;

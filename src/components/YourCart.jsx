import React, { useContext, useState } from "react";
import { GlobalContext } from "../content/GlobalContext";
import Modal from "./Modal";

function YourCart() {
  const [isModalOpen, setModalIsOpen] = useState(false);
  const { totalAmount, totalPrice, cart, dispatch } = useContext(GlobalContext);

  return (
    <div className="your-cart">
      <h1 className="your-amount">Your Cart ({totalAmount})</h1>
      <div className="cart-items">
        {cart.length > 0 ? (
          cart.map((item) => (
            <div key={item.id} className="cart-item">
              <div className="cart-item-details">
                <div>
                  <h3 className="cart-item-name">{item.name}</h3>
                  <p className="cart-item-price">
                    <span
                      style={{
                        color: "red",
                        fontWeight: 600,
                        paddingRight: "8px",
                      }}
                    >
                      {item.amount}X
                    </span>{" "}
                    @ ${item.price} ${item.price * item.amount}
                  </p>
                </div>

                <button
                  className="delete-button"
                  onClick={() => dispatch({ type: "DELETE", payload: item.id })}
                >
                  X
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>Your cart is empty</p>
        )}
      </div>

      <div className="your-price">
        <h2 className="your-total">Order Total</h2>
        <p className="your-prices">${totalPrice}</p>
      </div>
      <div className="your-neutral">
        <img src="/images/icon-carbon-neutral.svg" alt="icon-carbon-neutral" />
        <p className="your-carbon">
          This is a <b>carbon-neutral</b> delivery
        </p>
      </div>

      <button onClick={() => setModalIsOpen(true)} className="your-button">
        Confirm Order
      </button>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setModalIsOpen(false)}
        cart={cart}
        totalPrice={totalPrice}
      />
    </div>
  );
}

export default YourCart;

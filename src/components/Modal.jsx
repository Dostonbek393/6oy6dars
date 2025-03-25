function Modal({ isOpen, onClose, cart, totalPrice }) {
  if (!isOpen) return null;
  return (
    <div className="modal">
      <div className="modal-open">
        <img
          style={{ marginBottom: "24px" }}
          src="images/icon-order-confirmed.svg"
          alt="icon-order-confirmed"
        />
        <h1 className="modal-order">Order Confirmed</h1>
        <p className="modal-p">We hope you enjoy your food!</p>

        <div className="modal-cart-items">
          {cart.length > 0 ? (
            cart.map((item) => (
              <div key={item.id} className="modal-cart-item">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <img
                    src={item.image.thumbnail}
                    alt={item.name}
                    style={{
                      width: "48px",
                      height: "48px",
                      marginRight: "16px",
                      borderRadius: "4px",
                    }}
                  />
                  <div>
                    <h3
                      style={{
                        marginBottom: "8px",
                        fontWeight: "600",
                        fontSize: "14px",
                      }}
                    >
                      {item.name}
                    </h3>
                    <div>
                      <p className="modal-text">
                        <span
                          style={{
                            color: "red",
                            marginRight: "8px",
                            fontWeight: "600",
                            fontSize: "14px",
                          }}
                        >
                          {item.amount}X
                        </span>{" "}
                        @ ${item.price}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="modal-title">${item.price * item.amount}</div>
              </div>
            ))
          ) : (
            <p>No items in your order.</p>
          )}
          <div className="your-price">
            <h2 className="your-total">Order Total</h2>
            <p className="your-prices">${totalPrice}</p>
          </div>
        </div>

        <button className="modal-close" onClick={onClose}>
          Start New Order
        </button>
      </div>
    </div>
  );
}

export default Modal;

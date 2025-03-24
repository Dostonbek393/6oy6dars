import { useEffect, useReducer } from "react";
import { createContext } from "react";

export const GlobalContext = createContext();

const initalState = {
  cart: [],
  totalPrice: 0,
  totalAmount: 0,
};

const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, payload],
      };
    case "INCREMENT":
      return {
        ...state,
        cart: state.cart.map((d) => {
          if (d.id == payload) {
            return { ...d, amount: d.amount + 1 };
          } else {
            return d;
          }
        }),
      };
    case "DECREMENT":
      return {
        ...state,
        cart: state.cart.map((d) => {
          if (d.id == payload) {
            return { ...d, amount: d.amount - 1 };
          } else {
            return d;
          }
        }),
      };
    case "DELETE":
      return {
        ...state,
        cart: state.cart.filter((d) => d.id !== payload),
      };

    /*case "CALCULATE_TOTAL":
      let { totalAmount, totalPrice } = state.cart.reduce((acc, curVal) => {}, {
        totalAmount: 0,
        totalPrice: 0,
      });
      return {
        ...state,
        totalAmount,
        totalPrice,
      };*/
    default:
      return state;
  }
};

export const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initalState);

  useEffect(() => {
    dispatch({
      type: "CALCULATE_TOTAL",
    });
  }, [state.cart]);

  return (
    <GlobalContext.Provider value={{ ...state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};

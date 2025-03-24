import { useContext } from "react";
import { GlobalContext } from "../content/GlobalContext";

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);

  if (!context) {
    throw new Error(
      "useGlobalContext() ni biz GlobalContextProvider() ichida ishlatamiz shart !"
    );
  }

  return context;
};

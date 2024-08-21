"use client";
import { createContext, useContext, useState } from "react";

const data = { msg: "Hello" };

export const PopupContext = createContext(data);

export default function PopupContextProvider({ children }) {
  const [popupState, setPopupState] = useState({
    open: false,
    type: null,
    message: null,
  });

  return (
    <PopupContext.Provider value={{ popupState, setPopupState }}>
      {children}
    </PopupContext.Provider>
  );
}

export const usePopupState = () => useContext(PopupContext);

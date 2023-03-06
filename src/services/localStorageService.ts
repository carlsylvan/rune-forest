import { IRune } from "../models/IRune";

export const fetchFromLocalStorage = () => {
    const localStorageRunes = localStorage.getItem("localStorageRunes");
    return localStorageRunes ? JSON.parse(localStorageRunes) : [];
  };
  
  export const sendToLocalStorage = (runes: IRune[]) => {
      localStorage.setItem("localStorageRunes", JSON.stringify(runes));
  };
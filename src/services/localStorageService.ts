import { IRune } from "../models/IRune";

export const fetchFromLocalStorage = (): IRune[] => {
  const storedRunes = localStorage.getItem("localStorageRunes");
  if (storedRunes) {
    return JSON.parse(storedRunes) as IRune[];
  } else {
    return [];
  }
};

export const saveToLocalStorage = (rune: IRune) => {
    const localRunes: IRune[] = fetchFromLocalStorage();
    const updatedRunes = [...localRunes, rune];
    localStorage.setItem("localStorageRunes", JSON.stringify(updatedRunes));
  };
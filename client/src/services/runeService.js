export const URL = "http://localhost:3000";
import axios from "axios";

// export const getRunes = async () => {
//   let response = await fetch(URL + "/runes");
//   let data = await response.json();
//   return data;
// };

export const getRunes = async () => {
  return axios.get(URL + "/runes");
};

export const getRuneById = async (id) => {
  return axios.get(URL + "/runes/" + id);
};

export const writeRune = async (newRune) => {
  let response = await fetch(URL + "/runes", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newRune),
  });
  let data = await response.json();
  return data;
};

export const deleteRuneById = async (id) => {
  let response = await fetch(URL + "/runes/" + id, {
    method: "DELETE",
  });
  let data = await response.json();
  return data;
};

import axios from "axios";

export const URL = "http://localhost:3000";

export const getRunes = async () => {
  try {
    const response = await axios.get(URL + "/runes");
    return response.data;
  } catch (error) {
    console.error("Error fetching runes:", error);
    throw error;
  }
};

export const getRuneById = async (id) => {
  try {
    const response = await axios.get(URL + "/runes/" + id);
    return response.data;
  } catch (error) {
    console.error("Error fetching rune by ID:", error);
    throw error;
  }
};

export const writeRune = async (newRune) => {
  try {
    const response = await axios.post(URL + "/runes", newRune, {
      headers: { "Content-Type": "application/json" },
    });
    return response.data;
  } catch (error) {
    console.error("Error creating a new rune:", error);
    throw error;
  }
};

export const deleteRuneById = async (id) => {
  try {
    const response = await axios.delete(URL + "/runes/" + id);
    return response.data;
  } catch (error) {
    console.error("Error deleting rune by ID:", error);
    throw error;
  }
};

export const INCREMENT = "INCREMENT";
export const REMOVE_FIVE = "REMOVE_FIVE";
export const DECREMENT = "DECREMENT";
export const ADD_FIVE = "ADD_FIVE";
export const STORE_COUNTER = "STORE_COUNTER";
export const DELETE_COUNTER = "DELETE_COUNTER";

export const increment = () => {
  return { type: INCREMENT };
};

export const decrement = () => {
  return { type: DECREMENT };
};

export const addFive = (val) => {
  return { type: ADD_FIVE, payload: val };
};

export const removeFive = (val) => {
  return { type: REMOVE_FIVE, payload: val };
};

export const deleteCounter = (val) => {
  return { type: DELETE_COUNTER, id: val };
};

export const storeCounter = () => {
  return { type: STORE_COUNTER };
};

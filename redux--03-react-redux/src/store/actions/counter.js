import * as actionTypes from "./actionTypes";

export const increment = () => {
  return { type: actionTypes.INCREMENT };
};

export const decrement = () => {
  return { type: actionTypes.DECREMENT };
};

export const addFive = (val) => {
  return { type: actionTypes.ADD_FIVE, payload: val };
};

export const removeFive = (val) => {
  return { type: actionTypes.REMOVE_FIVE, payload: val };
};

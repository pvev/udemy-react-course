import actionTypes from "./actionTypes";

export const deleteCounter = (val) => {
  return { type: actionTypes.DELETE_COUNTER, id: val };
};

export const storeCounterSyn = () => {
  return { type: actionTypes.STORE_COUNTER };
};

export const storeCounter = () => {
  return (dispatch) => {
    setTimeout(() => dispatch(storeCounterSyn()), 3000);
  };
};

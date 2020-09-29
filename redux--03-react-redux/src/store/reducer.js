import * as actionTypes from "./actions";

const initialState = {
  counter: 0,
  results: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      return {
        ...state,
        counter: state.counter + 1,
      };
      break;

    case actionTypes.DECREMENT:
      if (state.counter <= 0) {
        break;
      }
      return {
        ...state,
        counter: state.counter - 1,
      };
      break;

    case actionTypes.ADD_FIVE:
      return {
        ...state,
        counter: state.counter + action.payload,
      };
      break;

    case actionTypes.REMOVE_FIVE:
      if (state.counter <= 0 || state.counter - 5 < 0) {
        break;
      }
      return {
        ...state,
        counter: state.counter - action.payload,
      };
      break;

    case actionTypes.STORE_COUNTER:
      return {
        ...state,
        results: state.results.concat({ id: new Date(), val: state.counter }),
      };
      break;

    case actionTypes.DELETE_COUNTER:
      return {
        ...state,
        results: state.results.filter((el) => {
          return el.id !== action.id;
        }),
      };
      break;

    default:
      break;
  }
  return state;
};

export default reducer;

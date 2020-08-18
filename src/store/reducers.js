import C from "../constants";

export const goal = (state = 10, action) =>
  action.type === C.SET_GOAL ? parseInt(action.payload) : state;

export const skiDay = (state = null, action) =>
  action.type === C.ADD_DAY ? action.payload : state;

// I need to add errors and clear errors, so a switch statement > ternary
export const errors = (state = [], action) => {
  switch (action.type) {
    case C.ADD_ERROR:
      //remember to not mutate the STATE!!!
      return [...state, action.payload];

    case C.CLEAR_ERROR:
      return state.filter((message, i) => i !== action.payload);
    default:
      return state;
  }
};

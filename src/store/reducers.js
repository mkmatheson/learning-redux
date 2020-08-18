import C from "../constants";

// an arrow function automatically returns whatever is on the other side of the arrow
export const goal = (state = 10, action) =>
  action.type === C.SET_GOAL ? parseInt(action.payload) : state;

export const skiDay = (state = null, action) =>
  action.type === C.ADD_DAY ? action.payload : state;

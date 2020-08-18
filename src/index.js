import C from "./constants";
import { allSkiDays } from "./store/reducers";

const state = [
  {
    resort: "Kirkwood",
    date: "2020-12-16",
    powder: true,
    backcountry: false,
  },
];

const action = {
  type: C.ADD_DAY,
  payload: {
    resort: "Boreal",
    date: "2020-12-13",
    // case to check for duplicate days
    // date: "2020-12-16",
    powder: true,
    backcountry: true,
  },
};

const nextState = allSkiDays(state, action);

console.log(`
    initial state: ${JSON.stringify(state)}
    action: ${JSON.stringify(action)}
    next state: ${JSON.stringify(nextState)}
`);

const removeAction = {
  type: C.REMOVE_DAY,
  payload: "2020-12-13",
};

const newState = allSkiDays(nextState, removeAction);

console.log(`
    action: ${JSON.stringify(removeAction)}
    next state: ${JSON.stringify(newState)}
`);

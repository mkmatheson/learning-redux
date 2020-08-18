import C from "./constants";
import { skiDay } from "./store/reducers";

const state = null;

const action = {
  type: C.ADD_DAY,
  payload: {
    resort: "Brighton",
    date: "2020-12-31",
    powder: true,
    backcountry: false,
  },
};

const nextState = skiDay(state, action);

console.log(`
    initial state: ${state}
    action: ${JSON.stringify(action)}
    next state: ${JSON.stringify(nextState)}

`);

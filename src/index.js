import C from "./constants";
import { errors } from "./store/reducers";

const state = ["user not authorized", "server feed not found"];

const action = {
  type: C.ADD_ERROR,
  payload: "cannot connect to server",
};

const nextState = errors(state, action);

console.log(`
    initial state: ${JSON.stringify(state)}
    action: ${JSON.stringify(action)}
    next state: ${JSON.stringify(nextState)}
`);

const clearAction = {
  type: C.CLEAR_ERROR,
  payload: 0,
};

const stateAfterCleared = errors(nextState, clearAction);

console.log(`
    action: ${JSON.stringify(action)}
    new state: ${JSON.stringify(stateAfterCleared)}
`);

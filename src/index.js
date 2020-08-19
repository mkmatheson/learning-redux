import C from "./constants";
import appReducer from "./store/reducers";
import initialState from "./initialState.json";
import { createStore } from "redux";

const store = createStore(appReducer);

console.log("initial state", store.getState());

store.dispatch({
  type: C.ADD_DAY,
  payload: {
    resort: "Snowbird",
    date: "2020-09-09",
    powder: false,
    backcountry: true,
  },
});

console.log("next state", store.getState());

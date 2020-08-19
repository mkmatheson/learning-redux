import C from "../constants";
import appReducer from "./reducers";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

//middleware requires creating a function that returns a function that returns a function
// this higher order function is set up to handle asynchronicity
const consoleMessages = (store) => {
  return (next) => {
    return (action) => {
      let result;

      console.groupCollapsed(`dispatching action => ${action.type}`);
      console.log("ski days", store.getState().allSkiDays.length);

      result = next(action);

      let { allSkiDays, goal, errors, resortNames } = store.getState();

      console.log(`
      
        ski days: ${allSkiDays.length}
        goal: ${goal}
        fetch: ${resortNames.fetching}
        suggestions: ${resortNames.suggestions}
        errors: ${errors.length}

      `);

      console.groupEnd();

      return result;
    };
  };
};

export default (initialState = {}) => {
  //   return createStore(appReducer, initialState);
  return applyMiddleware(thunk, consoleMessages)(createStore)(
    appReducer,
    initialState
  );
};

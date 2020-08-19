import C from "../constants";
import expect from "expect";
import { fetching } from "../store/reducers";

const action = {
  type: C.FETCH_RESORT_NAMES,
};

//initial fetching state is false, but sending the FETCH_RESORT_NAMES action
// should return a state of true
const state = false;
const expectedState = true;

const actualState = fetching(state, action);

expect(actualState).toEqual(expectedState);

console.log(`

    Challenge A: FETCH_RESORT_NAMES PASSED!!!


`);

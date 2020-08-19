import storeFactory from "./store";
import { randomGoals } from "./actions";

const store = storeFactory();

store.dispatch(randomGoals());

//this won't run because it's async
store.dispatch(randomGoals());

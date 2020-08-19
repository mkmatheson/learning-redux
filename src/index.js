import storeFactory from "./store";
import { addDay, removeDay, setGoal } from "./actions";

const store = storeFactory();

store.dispatch(
  //powder and backcountry default to false
  addDay("Heavenly", "2020-02-02")
);

store.dispatch(removeDay("2020-02-02"));

store.dispatch(setGoal(55));

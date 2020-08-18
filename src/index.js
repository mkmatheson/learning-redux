import C from "./constants";
import { allSkiDays, goal } from "./initialState.json";

//remember that backticks preserve white space

console.log(`

    Ski Day Counter
    ================
    The goal is ${goal} days.
    Initially the state holds ${allSkiDays.length} ski days.

    Constants (actions)
    ---------------------
    ${Object.keys(C).join("\n     ")}

`);

import C from "./constants";

//add app logic here

export function addDay(resort, date, powder = false, backcountry = false) {
  return {
    type: C.ADD_DAY,
    payload: { resort, date, powder, backcountry },
  };
}

export const removeDay = (date) => {
  return {
    type: C.REMOVE_DAY,
    payload: date,
  };
};

//I don't need a return statement here because an arrow function
//returns whatever is on the other side of the arrow
export const setGoal = (goal) => ({ type: C.SET_GOAL, payload: goal });

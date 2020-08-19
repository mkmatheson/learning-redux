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

export const setGoal = (goal) => ({ type: C.SET_GOAL, payload: goal });

export const addError = (error) => ({ type: C.ADD_ERROR, payload: error });

export const clearError = (index) => ({ type: C.CLEAR_ERROR, payload: index });

export const changeSuggestions = (newSuggestions) => ({
  type: C.CHANGE_SUGGESTIONS,
  payload: newSuggestions,
});

export const clearSuggestions = () => ({
  type: C.CLEAR_SUGGESTIONS,
});

// thunks are also functions
// thunks don't return objects directly
// thunks return other functions
export const randomGoals = () => (dispatch, getState) => {
  if (!getState().resortNames.fetching) {
    dispatch({
      type: C.FETCH_RESORT_NAMES,
    });

    setTimeout(() => {
      dispatch({
        type: C.CANCEL_FETCHING,
      });
    }, 1500);
  }
};

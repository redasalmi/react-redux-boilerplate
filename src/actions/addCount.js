import { COUNT_UP, COUNT_DOWN, RESET_COUNT } from "./actionTypes";

export const addCount = () => dispatch => {
  dispatch({
    type: COUNT_UP
  });
};

export const subCount = () => dispatch => {
  dispatch({
    type: COUNT_DOWN
  });
};

export const resetCount = () => dispatch => {
  dispatch({
    type: RESET_COUNT
  });
};

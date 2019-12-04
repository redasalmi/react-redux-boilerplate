import { COUNT_UP, COUNT_DOWN, RESET_COUNT } from "../actions/actionTypes";

const initialState = {
  count: 0
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case COUNT_UP:
      return { ...state, count: state.count + 1 };
    case COUNT_DOWN:
      return { ...state, count: state.count - 1 };
    case RESET_COUNT:
      return { ...state, count: 0 };
    default:
      return state;
  }
};

export default rootReducer;
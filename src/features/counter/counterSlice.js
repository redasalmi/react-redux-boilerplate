import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter',

  initialState: {
    count: 0,
    loading: false,
  },

  reducers: {
    addCount: (state) => {
      state.count += 1;
    },

    subCount: (state) => {
      state.count -= 1;
    },

    resetCount: (state) => {
      state.count = 0;
    },

    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { addCount, subCount, resetCount, setLoading } =
  counterSlice.actions;

const handleCountAsync = (dispatch, action) => {
  dispatch(setLoading(true));

  setTimeout(() => {
    dispatch(action);
    dispatch(setLoading(false));
  }, 3000);
};

export const addCountAsync = () => async (dispatch) => {
  handleCountAsync(dispatch, addCount());
};

export const subCountAsync = () => async (dispatch) => {
  handleCountAsync(dispatch, subCount());
};

export const resetCountAsync = () => async (dispatch) => {
  handleCountAsync(dispatch, resetCount());
};

export default counterSlice.reducer;

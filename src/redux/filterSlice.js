import { createSlice } from '@reduxjs/toolkit';

const initialState = '';

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilter: {
      reducer(state, action) {
        state = action.payload;
      },
      prepare: value => {
        return {
          payload: value,
        };
      },
    },
  },
});

export const { setFilter } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;

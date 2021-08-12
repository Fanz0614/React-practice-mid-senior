import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [{ input1: '', details: '', field: '', input4: '' }],
};

export const listSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    addOne(state, action) {
      state.value = [...state.value, action.payload];
    },
   
  },
});

export const { addOne } = listSlice.actions;

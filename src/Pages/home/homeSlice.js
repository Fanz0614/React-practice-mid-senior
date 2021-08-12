import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: [
    { locale: 'EN-US', value: '', rollbackvalue: '' },
    { locale: 'ZH-CN', value: '', rollbackvalue: '' },
  ],
  description: [
    { locale: 'EN-US', value: '', rollbackvalue: '' },
    { locale: 'ZH-CN', value: '', rollbackvalue: '' },
  ],
};


export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    handleForm(state, action) {
      const result = state[action.payload.field].find(
        (obj) => obj.locale === action.payload.locale
      );

      result.value = action.payload.value;
      switch(action.payload.name){
          case 'left':
              result.rollbackvalue=action.payload.value
              break;
        default:
            
      }
    },
  },
});

export const { handleForm } = appSlice.actions;

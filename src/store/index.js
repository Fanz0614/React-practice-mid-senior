import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { appSlice } from '../Pages/home/homeSlice';
import { listSlice } from '../Pages/list/listSlice';

const rootReducer = combineReducers({
  details: appSlice.reducer,
  listdetails: listSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

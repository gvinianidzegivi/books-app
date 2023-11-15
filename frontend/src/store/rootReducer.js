import { combineReducers } from '@reduxjs/toolkit';
import { themeReducer } from './slice';

const rootReducer = combineReducers({
  reducer: themeReducer,
});

export default rootReducer;

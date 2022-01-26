import { configureStore } from '@reduxjs/toolkit';
import modelReducer from '../feature/modelSlice';
export const store = configureStore({
  reducer: {
    model: modelReducer,
  },
});

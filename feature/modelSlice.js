import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  model: false,
};

export const modelSlice = createSlice({
  name: 'model',
  initialState,
  reducers: {
    openSignModel: (state) => {
      state.model = true;
    },
    closeSingModel: (state) => {
      state.model = false;
    },
  },
});

export const { openSignModel, closeSingModel } = modelSlice.actions;

export default modelSlice.reducer;

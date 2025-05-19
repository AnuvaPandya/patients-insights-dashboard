import { configureStore } from '@reduxjs/toolkit';
import patientReducer from './features/patients/patientSlice';

export const store = configureStore({
  reducer: {
    patients: patientReducer,
  },
});

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPatients = createAsyncThunk('patients/fetchPatients', async () => {
  const res = await axios.get('http://localhost:3001/patients');
  return res.data;
});

const patientSlice = createSlice({
  name: 'patients',
  initialState: { list: [], loading: false },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchPatients.pending, state => { state.loading = true; })
      .addCase(fetchPatients.fulfilled, (state, action) => {
        state.list = action.payload;
        state.loading = false;
      });
  }
});

export default patientSlice.reducer;

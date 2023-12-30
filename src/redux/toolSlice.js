import { createSlice } from '@reduxjs/toolkit';


export const toolSlice = createSlice({
    name: 'tool',
    initialState: {
      power: true,
      bank: 'Heater Kit',
      volume: 0.3,
      display: '',
    },
    reducers: {
      setPower: (state) => {
        state.power = !state.power;
      },
      setBank: (state, action) => {
        state.bank = action.payload;
      },
      setVolume: (state, action) => {
        state.volume = action.payload;
      },
      setDisplay: (state, action) => {
        state.display = action.payload;
      },
    },
});

export const {setPower, setBank, setVolume, setDisplay} = toolSlice.actions;
export default toolSlice.reducer;
import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  value: ['Amber']
}

export const reservationsSlice = createSlice({
  name: "reservations",
  initialState: initialState,
  reducers: {
    addReservation: (state, action) => {
      const { payload } = action
      state.value.push(payload)
    },
    removeReservation: (state, action) => {
      const { payload } = action
      state.value.splice(payload, 1)
    }
  }
})

export const { addReservation, removeReservation } = reservationsSlice.actions

export default reservationsSlice.reducer
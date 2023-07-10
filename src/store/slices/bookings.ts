import { createSlice } from "@reduxjs/toolkit"
import { fetchBookings } from "../thunks/fetchBookings"

export interface BookingInstance {
  id: string
  startDate: Date
  endDate: Date
  port: string
  boat: string
}

export interface BookingsState {
  bookings: BookingInstance[]
  status: "idle" | "loading" | "failed"
}

const initialState: BookingsState = {
  status: "idle",
  bookings: [],
}

export const bookingsSlice = createSlice({
  name: "bookings",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBookings.pending, (state) => {
        state.status = "loading"
      })
      .addCase(fetchBookings.fulfilled, (state, action) => {
        state.status = "idle"
        state.bookings = action.payload.map((booking) => {
          return {
            id: booking._id,
            startDate: booking.startDate,
            endDate: booking.endDate,
            port: booking.port,
            boat: booking.boat,
          }
        })
      })
      .addCase(fetchBookings.rejected, (state) => {
        state.status = "failed"
      })
  },
})

export default bookingsSlice.reducer

import { createSlice } from "@reduxjs/toolkit"
import { fetchBookings } from "../thunks/fetchBookings"
import { createBooking } from "../thunks/createBooking"

export interface BookingInstance {
  id: string
  startDate: string
  endDate: string
  port: string
  boat: string
}

export interface BookingsState {
  bookings: BookingInstance[]
  status: "idle" | "loading" | "failed" | "initial"
}

const initialState: BookingsState = {
  status: "initial",
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

      .addCase(createBooking.pending, (state) => {
        state.status = "loading"
      })

      .addCase(createBooking.fulfilled, (state, action) => {
        state.status = "idle"

        const newBooking = {
          id: action.payload._id,
          startDate: action.payload.startDate,
          endDate: action.payload.endDate,
          port: action.payload.port,
          boat: action.payload.boat,
        }

        state.bookings.push(newBooking)
      })

      .addCase(createBooking.rejected, (state) => {
        state.status = "failed"
      })
  },
})

export default bookingsSlice.reducer

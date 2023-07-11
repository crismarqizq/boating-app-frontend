import axios from "axios"
import { createAsyncThunk } from "@reduxjs/toolkit"

const BASE_URL = "http://localhost:8080"

type CreateBookingResponse = {
  _id: string
  _v: number
  startDate: string
  endDate: string
  user: string
  boat: string
  port: string
}

const createBooking = createAsyncThunk(
  "bookings/register",
  async (payload: {
    startDate: Date
    endDate: Date
    boat: string
    port: string
  }) => {
    const response = await axios.post(`${BASE_URL}/bookings`, payload)
    return response.data as CreateBookingResponse
  },
)
export { createBooking }

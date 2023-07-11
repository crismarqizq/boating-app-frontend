import axios from "axios"
import { createAsyncThunk } from "@reduxjs/toolkit"

const BASE_URL = "http://localhost:8080"

type BookingResponse = {
  _id: string
  _v: number
  startDate: string
  endDate: string
  user: string
  boat: string
  port: string
}

const fetchBookings = createAsyncThunk(
  "bookings/fetch",
  async (): Promise<BookingResponse[]> => {
    const response = await axios.get(`${BASE_URL}/bookings`)
    return response.data as BookingResponse[]
  },
)

export { fetchBookings }

import axios from "axios"
import { createAsyncThunk } from "@reduxjs/toolkit"

const BASE_URL = "http://localhost:8080"

const deleteBooking = createAsyncThunk(
  "bookings/delete",
  async (bookingId: string) => {
    await axios.delete(`${BASE_URL}/bookings/${bookingId}`)
    return bookingId
  },
)
export { deleteBooking }

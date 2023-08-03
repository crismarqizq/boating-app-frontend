import axios from "axios"
import { createAsyncThunk } from "@reduxjs/toolkit"

const BASE_URL = "http://localhost:8080"

const editBooking = createAsyncThunk(
  "bookings/edit",
  async (bookingInfo: any) => {
    const response = await axios.patch(
      `${BASE_URL}/bookings/${bookingInfo.id}`,
      bookingInfo,
    )
    return response.data
  },
)
export { editBooking }

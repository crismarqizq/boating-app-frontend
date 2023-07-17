import axios from "axios"
import { createAsyncThunk } from "@reduxjs/toolkit"

const BASE_URL = "http://localhost:8080"

const deleteBoat = createAsyncThunk("boats/delete", async (boatId: string) => {
  await axios.delete(`${BASE_URL}/boats/${boatId}`)
  return boatId
})
export { deleteBoat }

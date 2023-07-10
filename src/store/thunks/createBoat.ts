import axios from "axios"
import { createAsyncThunk } from "@reduxjs/toolkit"

const BASE_URL = "http://localhost:8080"
type CreateBoatResponse = {
  _id: string
  _v: number
  name: string
  beam: number
  flag: string
  draft: number
  sail: Boolean
  length: number
  regNumber: string
  owner: string
}

const createBoat = createAsyncThunk(
  "boats/register",
  async (payload: {
    name: string
    flag: string
    regNumber: string
    sail: Boolean
    length: number
    beam: number
    draft: number
  }) => {
    const response = await axios.post(`${BASE_URL}/boats`, payload)
    return response.data as CreateBoatResponse
  },
)
export { createBoat }

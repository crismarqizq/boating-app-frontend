import axios from "axios"
import { createAsyncThunk } from "@reduxjs/toolkit"

const BASE_URL = "http://localhost:8080"

type BoatResponse = {
  _id: string
  _v: number
  name: string
  beam: number
  flag: string
  draft: number
  sail: boolean
  length: number
  regNumber: string
  owner: string
}

const fetchBoats = createAsyncThunk(
  "boats/fetch",
  async (): Promise<BoatResponse[]> => {
    const response = await axios.get(`${BASE_URL}/boats`)
    return response.data as BoatResponse[]
  },
)

export { fetchBoats }

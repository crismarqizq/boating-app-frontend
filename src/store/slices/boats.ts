import { createSlice } from "@reduxjs/toolkit"
import { fetchBoats } from "../thunks/fetchBoats"

export interface BoatInstance {
  name: string
  flag: string
  regNumber: string
  sail: boolean
  length: number
  beam: number
  draft: number
}

export interface BoatsState {
  boats: BoatInstance[]
  status: "idle" | "loading" | "failed"
}

const initialState: BoatsState = {
  status: "idle",
  boats: [],
}

export const boatsSlice = createSlice({
  name: "boats",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBoats.pending, (state) => {
        state.status = "loading"
      })
      .addCase(fetchBoats.fulfilled, (state, action) => {
        state.status = "idle"
        state.boats = action.payload.map((boat) => {
          return {
            name: boat.name,
            flag: boat.flag,
            regNumber: boat.regNumber,
            sail: boat.sail,
            length: boat.length,
            beam: boat.beam,
            draft: boat.draft,
          }
        })
      })
      .addCase(fetchBoats.rejected, (state) => {
        state.status = "failed"
      })
  },
})

export default boatsSlice.reducer

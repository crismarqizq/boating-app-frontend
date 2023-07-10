import { createSlice } from "@reduxjs/toolkit"
import { fetchBoats } from "../thunks/fetchBoats"
import { createBoat } from "../thunks/createBoat"

export interface BoatInstance {
  id: string
  name: string
  flag: string
  regNumber: string
  sail: Boolean
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
            id: boat._id,
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
      .addCase(createBoat.pending, (state) => {
        state.status = "loading"
      })
      .addCase(createBoat.fulfilled, (state, action) => {
        state.status = "idle"

        const newBoat = {
          id: action.payload._id,
          name: action.payload.name,
          flag: action.payload.flag,
          regNumber: action.payload.regNumber,
          sail: action.payload.sail,
          length: action.payload.length,
          beam: action.payload.beam,
          draft: action.payload.draft,
        }

        state.boats.push(newBoat)
      })
      .addCase(createBoat.rejected, (state) => {
        state.status = "failed"
      })
  },
})

export default boatsSlice.reducer
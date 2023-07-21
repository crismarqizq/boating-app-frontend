import axios from "axios"
import { createAsyncThunk } from "@reduxjs/toolkit"

const BASE_URL = "http://localhost:8080"

const editBoat = createAsyncThunk("boats/edit", async (boatInfo: any) => {
  console.log(`Edoiting boatID: ${boatInfo.id}`)
  const response = await axios.patch(
    `${BASE_URL}/boats/${boatInfo.id}`,
    boatInfo,
  )
  return response.data
})
export { editBoat }

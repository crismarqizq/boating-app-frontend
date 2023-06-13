import axios from "axios"
import { createAsyncThunk } from "@reduxjs/toolkit"

const BASE_URL = "http://localhost:8080"

const fetchPorts = createAsyncThunk("ports/fetch", async () => {
  const response = await axios.get(`${BASE_URL}/ports`)

  return response.data
})

export { fetchPorts }

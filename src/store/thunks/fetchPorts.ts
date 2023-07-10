import axios from "axios"
import { createAsyncThunk } from "@reduxjs/toolkit"

const BASE_URL = "http://localhost:8080"

const fetchPorts = createAsyncThunk(
  "ports/fetch",
  async (withWeather: boolean = true) => {
    let weatherParam = ""

    if (withWeather) {
      weatherParam = "?weather=true"
    }

    const response = await axios.get(`${BASE_URL}/ports${weatherParam}`)

    return response.data
  },
)

export { fetchPorts }

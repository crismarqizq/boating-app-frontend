import axios from "axios"
import { createAsyncThunk } from "@reduxjs/toolkit"

const BASE_URL = "http://localhost:8080"

type RegisterResponse = {
  info: any
  token: { value: string }
}

const registerUser = createAsyncThunk(
  "users/register",
  async (payload: any): Promise<RegisterResponse> => {
    try {
      const response = await axios.post(`${BASE_URL}/register`, payload)

      const registerResponse = response.data as RegisterResponse
      return registerResponse
    } catch (error) {
      console.error("Error registering new user")
      throw new Error("Error registering new user")
    }
  },
)

export { registerUser }

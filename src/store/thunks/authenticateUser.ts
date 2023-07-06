import axios from "axios"
import { createAsyncThunk } from "@reduxjs/toolkit"

const BASE_URL = "http://localhost:8080"

// Data prototype {email: aaa@bb.com, password: abcd}

type AuthenticationResponse = {
  info: any
  token: { value: string }
}

const authenticateUser = createAsyncThunk(
  "users/auth",
  async (payload: {
    email: string
    password: string
  }): Promise<AuthenticationResponse> => {
    try {
      const response = await axios.post(`${BASE_URL}/auth`, payload)

      const authResponse = response.data as AuthenticationResponse
      return authResponse
    } catch (error) {
      console.error("Error while loging in")
      throw new Error("Error while logging in")
    }
  },
)

export { authenticateUser }

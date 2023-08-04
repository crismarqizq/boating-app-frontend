import { createSlice } from "@reduxjs/toolkit"
import { authenticateUser } from "../thunks/authenticateUser"
import axios from "axios"
import { registerUser } from "../thunks/registerUser"

export interface AuthInstance {
  info: { name: string; surname: string; email: string; id: string }
  token: { value: string }
}

export interface AuthState {
  auth: AuthInstance | null
  status: "idle" | "loading" | "failed"
  isAuthenticated: boolean
}

const initialState: AuthState = {
  isAuthenticated: false,
  status: "idle",
  auth: null,
}

const authDataString = localStorage.getItem("authData")

if (authDataString) {
  const authDataObject = JSON.parse(authDataString)
  initialState.status = "idle"
  initialState.isAuthenticated = true
  initialState.auth = authDataObject
  axios.defaults.headers.common[
    "Authorization"
  ] = `Bearer ${initialState.auth?.token.value}`
}

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(authenticateUser.pending, (state) => {
        state.status = "loading"
      })
      .addCase(authenticateUser.fulfilled, (state, action) => {
        state.status = "idle"
        state.isAuthenticated = true
        state.auth = {
          info: action.payload.info,
          token: { value: action.payload.token.value },
        }

        localStorage.setItem("authData", JSON.stringify(state.auth))
        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${state.auth.token.value}`
      })
      .addCase(authenticateUser.rejected, (state) => {
        state.status = "failed"
        state.auth = null
      })
      .addCase(registerUser.pending, (state) => {
        state.status = "loading"
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.status = "idle"
        state.isAuthenticated = true
        state.auth = {
          info: action.payload.info,
          token: { value: action.payload.token.value },
        }

        localStorage.setItem("authData", JSON.stringify(state.auth))
        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${state.auth.token.value}`
      })
      .addCase(registerUser.rejected, (state) => {
        state.status = "failed"
        state.auth = null
      })
  },
})

export default authSlice.reducer

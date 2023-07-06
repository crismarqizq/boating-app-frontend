import { createSlice } from "@reduxjs/toolkit"

export interface UserInstance {
  _id: string
  name: string
  surname: string
  birthDate: Date
  idNumber: string
  email: string
  contactNumber: string
  address: {
    street: string
    postalCode: string
    city: string
    country: string
  }
  password: string
}

export interface UserState {
  users: UserInstance[]
  status: "idle" | "loading" | "failed"
}

const initialState: UserState = {
  status: "idle",
  users: [],
}

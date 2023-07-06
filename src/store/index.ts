import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import portsReducer from "./slices/ports"
import authReducer from "./slices/auth"
import boatsReducer from "./slices/boats"
import bookingsReducer from "./slices/bookings"

export const store = configureStore({
  reducer: {
    ports: portsReducer,
    auth: authReducer,
    boats: boatsReducer,
    bookings: bookingsReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>

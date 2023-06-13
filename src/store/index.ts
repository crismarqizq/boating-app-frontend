import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import portsReducer from "./slices/ports"

export const store = configureStore({
  reducer: {
    ports: portsReducer,
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

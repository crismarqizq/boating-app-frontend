import { Navigate, Route, Routes } from "react-router-dom"
import { BrowserRouter as Router } from "react-router-dom"
import "./App.css"
import Login from "./pages/Login"
import Register from "./pages/register/Register"
import Boats from "./pages/boats/Boats"
import Bookings from "./pages/bookings/Bookings"
import { useAppDispatch, useAppSelector } from "./app/hooks"
import Dashboard from "./pages/layouts/dashboard"
import PortsList from "./components/portsList"
import { useEffect } from "react"
import { fetchBoats } from "./store/thunks/fetchBoats"
import { fetchPorts } from "./store/thunks/fetchPorts"
import { fetchBookings } from "./store/thunks/fetchBookings"

function App() {
  const dispatch = useAppDispatch()

  const isAuthenticated = useAppSelector((state) => {
    return state.auth.isAuthenticated
  })

  const portsListStatus = useAppSelector((state) => {
    return state.ports.status
  })

  useEffect(() => {
    if (isAuthenticated && portsListStatus === "initial") {
      dispatch(fetchPorts(true))
      dispatch(fetchBoats())
      dispatch(fetchBookings())
    }
  }, [dispatch, isAuthenticated, portsListStatus])

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            isAuthenticated ? <Dashboard /> : <Navigate replace to="/login" />
          }
        >
          <Route
            path="ports"
            element={
              isAuthenticated ? <PortsList /> : <Navigate replace to="/login" />
            }
          />
          <Route
            path="boats"
            element={
              isAuthenticated ? <Boats /> : <Navigate replace to="/login" />
            }
          />
          <Route
            path="bookings"
            element={
              isAuthenticated ? <Bookings /> : <Navigate replace to="/login" />
            }
          />
          {/* <Route
            path="settings"
            element={
              isAuthenticated ? <Settings /> : <Navigate replace to="/login" />
            }
          /> */}
        </Route>
        <Route
          path="/login"
          element={
            isAuthenticated ? <Navigate replace to="/ports" /> : <Login />
          }
        />
        <Route
          path="/register"
          element={
            isAuthenticated ? <Navigate replace to="/ports" /> : <Register />
          }
        />
      </Routes>
    </Router>
  )
}

export default App

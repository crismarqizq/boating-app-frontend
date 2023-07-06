import { Navigate, Route, Routes } from "react-router-dom"
import { BrowserRouter as Router } from "react-router-dom"
import "./App.css"
import HomePage from "./pages/home/HomePage"
import Login from "./pages/Login"
import Boats from "./pages/boats/Boats"
import Bookings from "./pages/bookings/Bookings"

function App() {
  return (
    <div className="App">
      {/* TODO: Import router */}
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/boats" element={<Boats />} />
          <Route path="/bookings" element={<Bookings />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App

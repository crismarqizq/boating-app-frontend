import { Navigate, Route, Routes } from "react-router-dom"
import { BrowserRouter as Router } from "react-router-dom"
import "./App.css"
import HomePage from "./pages/home/HomePage"

function App() {
  return (
    <div className="App">
      {/* TODO: Import router */}
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App

import { Outlet } from "react-router-dom"
import Navbar from "../../components/navbar"

/**
 * Create dummy component that structure the app layout.
 * Always showing the navbar and changing
 * the main componentbased on router
 *
 */

function Dashboard() {
  return (
    <>
      <Navbar></Navbar>
      <Outlet />
    </>
  )
}

export default Dashboard

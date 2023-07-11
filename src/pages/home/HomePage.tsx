// Define/import layout
// Import and use needed components (ports list)

import Navbar from "../../components/navbar"
import PortsList from "../../components/portsList"

function HomePage() {
  return (
    <main>
      <Navbar></Navbar>
      <PortsList></PortsList>
    </main>
  )
}

export default HomePage

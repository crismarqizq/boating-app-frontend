// Define/import layout
// Import and use needed components (ports list)

import Navbar from "../../components/navbar"
import PortsList from "../../components/portsList"

function HomePage() {
  return (
    <main>
      <div>
        <Navbar></Navbar>
        <PortsList></PortsList>
      </div>
    </main>
  )
}

export default HomePage

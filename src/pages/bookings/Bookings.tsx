import { useAppSelector } from "../../app/hooks"
import BookingsList from "../../components/bookingsList"

import BookingForm from "../../components/bookingForm"
import { useEffect, useState } from "react"

function Bookings() {
  const [readyToLoad, setReadyToLoad] = useState(false)

  const { bookings, status } = useAppSelector((state) => {
    return state.bookings
  })

  const { portsStatus, boatsStatus } = useAppSelector((state) => {
    return { portsStatus: state.ports.status, boatsStatus: state.boats.status }
  })

  useEffect(() => {
    if (boatsStatus === "idle" && portsStatus === "idle" && status === "idle") {
      setReadyToLoad(true)
    }
  }, [readyToLoad, portsStatus, boatsStatus, status])

  return (
    <main className="w-screen min-h-screen bg-bone pt-10 flex justify-center">
      <div className="flex flex-col items-center w-11/12">
        <div className="w-full">
          <h2 className="mb-4 font-bold text-xl"> Your bookings</h2>
          {!readyToLoad && <div>Loading...</div>}
          {readyToLoad && <BookingsList bookingsList={bookings}></BookingsList>}
        </div>
        <div className="flex w-11/12 my-10">
          <BookingForm></BookingForm>
        </div>
      </div>
    </main>
  )
}

export default Bookings

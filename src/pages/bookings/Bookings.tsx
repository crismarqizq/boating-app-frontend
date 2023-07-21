import { useAppSelector } from "../../app/hooks"
import BookingsList from "../../components/bookingsList"

import BookingForm from "../../components/bookingForm"
import { useEffect, useState } from "react"
import { BookingInstance } from "../../store/slices/bookings"

function Bookings() {
  const [readyToLoad, setReadyToLoad] = useState(false)
  const [isBookingFormVisible, setIsBookingFormVisible] = useState(false)
  const [editableBookingInfo, setEditableBookingInfo] = useState(
    {} as BookingInstance,
  )

  const { bookings, status } = useAppSelector((state) => {
    return state.bookings
  })

  const { portsStatus, boatsStatus } = useAppSelector((state) => {
    return { portsStatus: state.ports.status, boatsStatus: state.boats.status }
  })

  const triggerNewBookingCreation = () => {
    setIsBookingFormVisible(true)
  }
  const hideForm = (event: any) => {
    event.preventDefault()
    setIsBookingFormVisible(false)
    setEditableBookingInfo(null)
  }

  const onUpdateBookingRequest = (bookingId: string) => {
    console.log("received update")
  }
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
          {readyToLoad && (
            <BookingsList
              bookingsList={bookings}
              onUpdateBookingRequest={onUpdateBookingRequest}
            ></BookingsList>
          )}
        </div>

        <div className="flex w-11/12 my-10">
          {!isBookingFormVisible && (
            <div className="flex w-full justify-end">
              <button
                className="px-3 py-1.5 mt-4 bg-midgreen text-bone 
                                font-medium text-xs leading-tight uppercase rounded shadow-md
                                hover:bg-blue-700 hover:shadow-lg"
                onClick={triggerNewBookingCreation}
              >
                Add new booking to my list
              </button>
            </div>
          )}

          {isBookingFormVisible && <BookingForm onDiscard={hideForm} />}
        </div>
      </div>
    </main>
  )
}

export default Bookings

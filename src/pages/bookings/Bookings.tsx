import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import BookingsList from "../../components/bookingsList"
import { fetchBookings } from "../../store/thunks/fetchBookings"

function Bookings() {
  const dispatch = useAppDispatch()

  const { bookings, status } = useAppSelector((state) => {
    return state.bookings
  })

  useEffect(() => {
    dispatch(fetchBookings())
  }, [dispatch])
  return (
    <main className="w-screen min-h-screen bg-bone pt-10 flex justify-center">
      <div className="flex flex-col items-center w-11/12">
        <div className="w-full">
          <h2 className="mb-4 font-bold text-xl"> Your bookings</h2>
          {status === "failed" && <div>There was an error</div>}
          {status === "loading" && <div>Loading...</div>}
          <BookingsList bookingsList={bookings}></BookingsList>
        </div>
      </div>
    </main>
  )
}

export default Bookings

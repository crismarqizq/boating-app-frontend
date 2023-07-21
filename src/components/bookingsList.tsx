import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { BookingInstance } from "../store/slices/bookings"
import { faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons"
import { useAppDispatch, useAppSelector } from "../app/hooks"
import { deleteBooking } from "../store/thunks/deleteBooking"

type componentProps = {
  bookingsList: BookingInstance[]
  onUpdateBookingRequest: any
}

function BookingsList({
  bookingsList,
  onUpdateBookingRequest,
}: componentProps) {
  const dispatch = useAppDispatch()
  const ports = useAppSelector((state) => {
    return state.ports.ports
  })
  const boats = useAppSelector((state) => {
    return state.boats.boats
  })

  const resolvePortNameById = (portId: string): string => {
    const filteredPorts = ports.filter((p) => {
      return portId === p._id
    })

    if (!filteredPorts.length) {
      return portId
    }

    const port = filteredPorts[0]
    return port.name
  }

  const resolveBoatNameById = (boatId: string): string => {
    const filteredBoats = boats.filter((b) => {
      return boatId === b.id
    })

    if (!filteredBoats.length) {
      return boatId
    }

    const boat = filteredBoats[0]
    return boat.name
  }

  const deleteSelectedBooking = (bookingId: string) => {
    dispatch(deleteBooking(bookingId))
  }
  const editSelectedBooking = (bookingId: string) => {
    onUpdateBookingRequest(bookingId)
  }

  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full">
              <thead className="bg-white border-b">
                <tr>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    From
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    To
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Port
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Boat
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {bookingsList.map((booking) => (
                  <tr
                    key={booking.id}
                    className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100"
                  >
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      {new Date(booking.startDate).toLocaleDateString()}
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      {new Date(booking.endDate).toLocaleDateString()}
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      {resolvePortNameById(booking.port)}
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      {resolveBoatNameById(booking.boat)}
                    </td>

                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap flex justify-center">
                      <button
                        type="button"
                        className="px-6 py-2.5 bg-darkblue text-bone
                                                            font-medium text-xs leading-tight uppercase rounded shadow-md
                                                            hover:bg-blue-700 hover:shadow-lg
                                                            focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
                                                            active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                        onClick={(e) => editSelectedBooking(booking.id)}
                      >
                        <FontAwesomeIcon icon={faPenToSquare} />
                      </button>
                      <button
                        type="button"
                        className="px-6 py-2.5 ml-2 bg-darkblue text-bone
                                                            font-medium text-xs leading-tight uppercase rounded shadow-md
                                                            hover:bg-blue-700 hover:shadow-lg
                                                            focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
                                                            active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                        data-bs-toggle="modal"
                        data-bs-target="#confirmDeleteModal"
                        onClick={(e) => {
                          deleteSelectedBooking(booking.id)
                        }}
                      >
                        <FontAwesomeIcon icon={faTrashCan} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
export default BookingsList

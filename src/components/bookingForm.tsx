import { useEffect, useState } from "react"
import { useAppDispatch, useAppSelector } from "../app/hooks"
import { createBooking } from "../store/thunks/createBooking"
import { editBooking } from "../store/thunks/editBooking"

type componentProps = {
  bookingInfo: any
  onFinish: any
  onDiscard: any
}

function BookingForm({ bookingInfo, onFinish, onDiscard }: componentProps) {
  const [isEditMode, setIsEditMode] = useState(false)

  let startDate = new Date()
  let endDate = new Date()

  const dispatch = useAppDispatch()

  const { ports } = useAppSelector((state) => {
    return state.ports
  })

  const { boats } = useAppSelector((state) => {
    return state.boats
  })

  const updateStartDate = (event: any) => {
    const eventStartDate = new Date(event.value)

    if (eventStartDate.getTime() > startDate.getTime()) {
      console.log("Selected a valid start date")
      startDate = eventStartDate
    } else {
      console.log("error uodating start date")
    }
  }

  const updateEndDate = (event: any) => {
    const eventEndDate = new Date(event.value)

    if (eventEndDate.getTime() > startDate.getTime()) {
      console.log("Selected a valid start date")
      endDate = eventEndDate
    } else {
      console.log("error uodating start date")
    }
  }

  const saveForm = (event: any) => {
    event.preventDefault()

    const form = event.target

    const boat = form.boat.value
    const port = form.port.value

    const data = { startDate, endDate, boat, port }

    if (isEditMode) {
      console.log("editing")
      dispatch(editBooking({ id: bookingInfo.id, ...data }))
    } else {
      console.log("creating")

      dispatch(createBooking(data))
    }
    onFinish()
  }
  useEffect(() => {
    if (Object.keys(bookingInfo).length) {
      console.log("mounted component with booking info keys present")

      setIsEditMode(true)
    } else {
      console.log("booking form mounted in create mode")
    }
  }, [bookingInfo])

  return (
    <div className="flex justify-center min-w-full">
      <div className="block p-6 rounded-lg shadow-lg bg-white min-w-full">
        <form onSubmit={saveForm}>
          <div className="flex justify-center">
            <div className="flex-col w-1/2 mr-4">
              <div className="form-group mb-6">
                <div
                  className="datepicker relative form-floating mb-3 xl:w-96"
                  data-mdb-toggle-button="false"
                >
                  <label htmlFor="floatingInput" className="text-gray-700">
                    Select arrival date
                  </label>
                  <input
                    type="date"
                    className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Select a date"
                    data-mdb-toggle="datepicker"
                    onChange={(e) => {
                      updateStartDate(e.target)
                    }}
                  />
                </div>
              </div>
              <div className="form-group mb-6">
                <div
                  className="datepicker relative form-floating mb-3 xl:w-96"
                  data-mdb-toggle-button="false"
                >
                  <label htmlFor="floatingInput" className="text-gray-700">
                    Select departure date
                  </label>
                  <input
                    type="date"
                    className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Select a date"
                    data-mdb-toggle="datepicker"
                    onChange={(e) => {
                      updateEndDate(e.target)
                    }}
                  />
                </div>
              </div>
              <div className="form-group mb-6">
                <label
                  htmlFor="portInput"
                  className="form-label inline-block mb-2 text-gray-700"
                >
                  Where would you like to stay?
                </label>
                <select
                  className="form-select appearance-none block
                            w-full px-3 py-1.5 text-base font-normal
                            text-gray-700  bg-white bg-clip-padding bg-no-repeat
                            border border-solid border-gray-300 rounded transition
                            ease-in-out  m-0
                            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="portInput"
                  name="port"
                  aria-label="Port selector"
                >
                  {ports.map((port) => (
                    <option key={port._id} value={port._id}>
                      {" "}
                      {port.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group mb-6">
                <label
                  htmlFor="userBoatInput"
                  className="form-label inline-block mb-2 text-gray-700"
                >
                  Which boat are you travelling with?
                </label>
                <select
                  className="form-select appearance-none
                            block w-full
                            px-3  py-1.5
                            text-base  font-normal
                            text-gray-700 bg-white bg-clip-padding bg-no-repeat
                            border border-solid border-gray-300  rounded   transition
                            ease-in-out m-0
                            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="userBoatInput"
                  name="boat"
                  aria-label="Boat selector"
                >
                  {boats.map((boat) => (
                    <option key={boat.id} value={boat.id}>
                      {" "}
                      {boat.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="flex-col w-1/2"></div>
          </div>
          <div className="flex justify-end w-full">
            <button
              type="button"
              className="px-6 py-2.5 bg-darkblue text-white font-medium text-xs leading-tight uppercase 
                            rounded shadow-md hover:shadow-lg focus:shadow-lg 
                            focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out"
              onClick={onDiscard}
            >
              Discard
            </button>
            <button
              type="submit"
              className="px-6 py-2.5 ml-2 bg-midgreen text-white font-medium text-xs leading-tight uppercase 
                            rounded shadow-md hover:shadow-lg focus:shadow-lg 
                            focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out"
            >
              Save/Add
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
export default BookingForm

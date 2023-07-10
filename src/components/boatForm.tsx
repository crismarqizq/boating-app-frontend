import { useAppDispatch } from "../app/hooks"
import { createBoat } from "../store/thunks/createBoat"
import "./styles/BoatForm.css"

function BoatForm() {
  const dispatch = useAppDispatch()

  const saveForm = (event: any) => {
    event.preventDefault()
    const form = event.target

    const isSailboat = form.sail.checked

    const name = form.boatName.value
    const flag = form.flag.value
    const regNumber = form.regNumber.value
    const sail = isSailboat
    const length = form.length.value
    const beam = form.beam.value
    const draft = form.draft.value

    const data = { name, flag, regNumber, sail, length, beam, draft }

    dispatch(createBoat(data))
  }

  return (
    <div className="flex justify-center min-w-full">
      <div className="block p-6 rounded-lg shadow-lg bg-white min-w-full">
        <form onSubmit={saveForm}>
          <div className="flex justify-center">
            <div className="flex-col w-1/2 mr-4">
              <div className="form-group mb-6">
                <label
                  htmlFor="nameInput"
                  className="form-label inline-block mb-2 text-gray-700"
                >
                  Boat name
                </label>
                <input
                  type="text"
                  className="form-control  block w-full px-3 py-1.5 text-base font-normal 
                                    text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 
                                    rounded transition ease-in-out m-0 focus:text-gray-700 
                                    focus:outline-none"
                  id="nameInput"
                  name="boatName"
                  placeholder="Enter boat's name"
                />
              </div>
              <div className="form-group mb-6">
                <label
                  htmlFor="boatFlagInput"
                  className="form-label inline-block mb-2 text-gray-700"
                >
                  Flag
                </label>
                <input
                  type="text"
                  className="form-control block w-full px-3 py-1.5 text-base 
                                    font-normal text-gray-700 bg-white bg-clip-padding border border-solid
                                    border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:outline-none"
                  id="boatFlagInput"
                  name="flag"
                  placeholder="Registration flag"
                />
              </div>
              <div className="form-group mb-6">
                <label
                  htmlFor="regNumberInput"
                  className="form-label inline-block mb-2 text-gray-700"
                >
                  Registration number
                </label>
                <input
                  type="text"
                  className="form-control block w-full px-3 py-1.5
                                    text-base font-normal text-gray-700 bg-white bg-clip-padding border 
                                    border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:outline-none"
                  id="regNumberInput"
                  name="regNumber"
                  placeholder="Registration number"
                />
              </div>

              <div className="form-group mb-6">
                <div className="form-check form-switch">
                  <label
                    className="form-check-label inline-block text-gray-800"
                    htmlFor="flexSwitchCheckChecked"
                  >
                    Sailboat
                  </label>
                  <input
                    className="form-check-input appearance-none w-9 -ml-10 rounded-full float-left 
                                                h-5 align-top bg-no-repeat bg-contain bg-gray-300 
                                                focus:outline-none cursor-pointer shadow-sm"
                    type="checkbox"
                    role="switch"
                    id="sailInput"
                    name="sail"
                  />
                </div>
              </div>
            </div>
            <div className="flex-col w-1/2">
              <div className="form-group mb-6">
                <label
                  htmlFor="lengthInput"
                  className="form-label inline-block mb-2 text-gray-700"
                >
                  Length (m)
                </label>
                <input
                  type="number"
                  step="any"
                  min="0"
                  className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding
                                        border border-solid border-gray-300 rounded transition ease-in-out m-0
                                        focus:text-gray-700 focus:outline-none"
                  id="lengthInput"
                  name="length"
                  placeholder="Length in meters"
                />
              </div>
              <div className="form-group mb-6">
                <label
                  htmlFor="beamInput"
                  className="form-label inline-block mb-2 text-gray-700"
                >
                  Beam (m)
                </label>
                <input
                  type="number"
                  step="any"
                  min="0"
                  className="form-control block  w-full  px-3  py-1.5  text-base  font-normal
                                        text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition
                                        ease-in-out m-0
                                        focus:text-gray-700 focus:outline-none"
                  id="beamInput"
                  name="beam"
                  placeholder="Beam in meters"
                />
              </div>
              <div className="form-group mb-6">
                <label
                  htmlFor="draftInput"
                  className="form-label inline-block mb-2 text-gray-700"
                >
                  Draft (m)
                </label>
                <input
                  type="number"
                  step="any"
                  min="0"
                  className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700
                                        bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0
                                        focus:text-gray-700 focus:outline-none"
                  id="draftInput"
                  name="draft"
                  placeholder="Draft in meters"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-end w-full">
            {/* <button
              type="button"
              className="px-6 py-2.5 bg-darkblue text-white font-medium text-xs leading-tight uppercase 
                            rounded shadow-md hover:shadow-lg focus:shadow-lg 
                            focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out"
            >
              Discard
            </button> */}
            <button
              type="submit"
              className="px-6 py-2.5 ml-2 bg-midgreen text-white font-medium text-xs leading-tight uppercase 
                            rounded shadow-md hover:shadow-lg focus:shadow-lg 
                            focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out"
            >
              Add/Save
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
export default BoatForm

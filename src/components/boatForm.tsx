import { useEffect, useState } from "react"
import { useAppDispatch } from "../app/hooks"
import { BoatInstance } from "../store/slices/boats"
import { createBoat } from "../store/thunks/createBoat"
import "./styles/BoatForm.css"
import { editBoat } from "../store/thunks/editBoat"

type componentProps = {
  boatInfo: BoatInstance
  onFinish: any
  onDiscard: any
}

function BoatForm({ boatInfo, onFinish, onDiscard }: componentProps) {
  const [isEditMode, setIsEditMode] = useState(false)
  const [formValues, setFormValues] = useState({
    name: "",
    flag: "",
    regNumber: "",
    sail: false,
    length: "",
    beam: "",
    draft: "",
  } as any)
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

    if (isEditMode) {
      dispatch(editBoat({ id: boatInfo.id, ...data }))
    } else {
      dispatch(createBoat(data))
    }

    onFinish()
  }

  useEffect(() => {
    if (Object.keys(boatInfo).length) {
      setIsEditMode(true)
      setFormValues(boatInfo)
    } else {
      console.log("BoatForm mounted in create mode")
    }
  }, [boatInfo])

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
                  defaultValue={formValues.name}
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
                  defaultValue={formValues.flag}
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
                  defaultValue={formValues.regNumber}
                />
              </div>
              <div className="form-group mb-6">
                <div className="form-check form-switch">
                  <label
                    className="inline-block pl-[0.15rem] hover:cursor-pointer"
                    htmlFor="flexSwitchCheckDefault"
                  >
                    Sailboat
                  </label>
                  <input
                    className="mr-2 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-neutral-300 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-midblue checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-midblue checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-midblue checked:focus:bg-midblue checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-neutral-600 dark:after:bg-neutral-400 dark:checked:bg-midblue dark:checked:after:bg-midblue dark:focus:before:shadow-[3px_-1px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca]"
                    type="checkbox"
                    role="switch"
                    id="sailInput"
                    name="sail"
                    defaultChecked={formValues.sail}
                    disabled={isEditMode}
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
                  defaultValue={formValues.length}
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
                  defaultValue={formValues.beam}
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
                  defaultValue={formValues.draft}
                />
              </div>
            </div>
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
              {isEditMode ? "Save Changes" : "Add boat"}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
export default BoatForm

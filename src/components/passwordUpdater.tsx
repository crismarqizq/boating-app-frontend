import updateUserSettings from "../API/updateUserSettings"
import { useState } from "react"
import Toast from "./ui/toast"
import SuccessToast from "./ui/successToast"

type componentProps = {
  userInfo: any
}
function PasswordUpdater({ userInfo }: componentProps) {
  const [isToastActive, setIsToastActive] = useState(false)
  const [toastMessage, setToastMessage] = useState("")
  const [isSuccessToastActive, setIsSuccessToastActive] = useState(false)
  const [successToastMessage, setSuccessToastMessage] = useState("")

  const savePassword = async (event: any) => {
    event.preventDefault()

    const form = event.target

    let firstPassword = form.firstPassword.value
    let secondPassword = form.secondPassword.value
    if (!firstPassword.length || firstPassword.length < 6) {
      setToastMessage("Please, enter new password, minimum 6 characters")
      setIsToastActive(true)
      // error toast

      console.log("no password provided")
      return
    }

    if (firstPassword !== secondPassword) {
      setToastMessage("Passwords don't match")
      setIsToastActive(true)

      console.log("password dont match")
      return
    }

    const modifications = {
      password: firstPassword,
    }
    await updateUserSettings(userInfo._id, modifications)
    let successMessage = "Password updated succesfully"
    setSuccessToastMessage(successMessage)
    setIsSuccessToastActive(true)
  }
  const closeToast = () => {
    setIsToastActive(false)
  }
  const closeSuccessToast = () => {
    setIsSuccessToastActive(false)
  }

  return (
    <div className="block p-6 rounded-lg shadow-lg bg-white min-w-full">
      {isToastActive && <Toast message={toastMessage} onClose={closeToast} />}
      {isSuccessToastActive && (
        <SuccessToast
          message={successToastMessage}
          onClose={closeSuccessToast}
        />
      )}
      <form onSubmit={savePassword}>
        <div className="grid grid-cols-2 gap-4 ">
          <div className="form-group mb-6">
            <label
              htmlFor="passwordInput"
              className="form-label inline-block mb-2 text-gray-700"
            >
              New password
            </label>
            <input
              type="password"
              className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding
              border border-solid border-gray-300  rounded  transition  ease-in-out  m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="firstPassword"
              name="firstPassword"
              placeholder="Insert a new password if you want to change it"
            />
          </div>
          <div className="form-group mb-6">
            <label
              htmlFor="passwordInput2"
              className="form-label inline-block mb-2 text-gray-700"
            >
              Repeat new password
            </label>
            <input
              type="password"
              className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding
            border border-solid border-gray-300  rounded  transition  ease-in-out  m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="secondPassword"
              name="secondPassword"
              placeholder="Repeat new password"
            />
          </div>
        </div>
        <div className="flex justify-end w-full mb-4">
          <button
            type="submit"
            className=" px-6 py-2.5 bg-midgreen 
                            text-white font-medium text-xs leading-tight 
                            uppercase rounded shadow-md hover:bg-blue-700 
                            hover:shadow-lg focus:bg-blue-700 focus:shadow-lg 
                            focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150
                            ease-in-out"
          >
            Save new password
          </button>
        </div>
      </form>
    </div>
  )
}
export default PasswordUpdater

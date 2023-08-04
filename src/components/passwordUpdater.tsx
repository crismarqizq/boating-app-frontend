import updateUserSettings from "../API/updateUserSettings"

type componentProps = {
  userInfo: any
}
function PasswordUpdater({ userInfo }: componentProps) {
  const savePassword = async (event: any) => {
    event.preventDefault()

    const form = event.target

    let firstPassword = form.firstPassword.value
    let secondPassword = form.secondPassword.value
    if (!firstPassword.length || firstPassword.length < 6) {
      // error toast

      console.log("no password provided")
      return
    }

    if (firstPassword !== secondPassword) {
      // error toast

      console.log("password dont match")
      return
    }
    // if everything ok call api and change password
    const modifications = {
      password: firstPassword,
    }
    await updateUserSettings(userInfo._id, modifications)
  }

  return (
    <div className="block p-6 rounded-lg shadow-lg bg-white min-w-full">
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

import { Link, useNavigate } from "react-router-dom"
import { useAppDispatch } from "../../app/hooks"
import { registerUser } from "../../store/thunks/registerUser"
import Toast from "../../components/ui/toast"
import { useState } from "react"
function Register() {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const [isToastActive, setIsToastActive] = useState(false)
  const [toastMessage, setToastMessage] = useState("")

  const handleSubmit = async (event: any) => {
    event.preventDefault()
    const form = event.target

    const name = form.firstName.value
    const surname = form.surname.value
    const birthDate = form.birthDate.value
    const idNumber = form.idNumber.value
    const contactNumber = form.phone.value
    const email = form.email.value
    const password = form.password.value
    const street = form.address.value
    const postalCode = form.postalCode.value
    const city = form.city.value
    const country = form.country.value

    const registrationData = {
      name,
      surname,
      birthDate: new Date(birthDate),
      idNumber,
      contactNumber,
      email,
      password,
      address: {
        street,
        postalCode,
        city,
        country,
      },
    }

    try {
      await dispatch(registerUser(registrationData))
      navigate("/ports")
    } catch (error: any) {
      if (error.response) {
        // It's an AXIOS error
        let reason = "Invalid request: "
        if (error.response.status >= 500) {
          reason = "Server error: "
        }
        const toastMessage = reason + error.response.data.message

        setToastMessage(toastMessage)
        setIsToastActive(true)
      } else {
        // Generic error
        console.error("Generic error: ", error)
        setToastMessage(error.message)
        setIsToastActive(true)
      }
      console.log("error while registering user")
    }
  }
  const closeToast = () => {
    setIsToastActive(false)
  }
  return (
    <main className="h-screen w-screen flex flex-row items-center justify-center">
      {isToastActive && (
        <Toast message={toastMessage} onClose={closeToast} /*timeout={6000}*/ />
      )}
      <div className="w-5/12 h-screen flex flex-col justify-center items-center bg-gray-800">
        <div className="register-form bg-bone flex p-4">
          <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
            <form onSubmit={handleSubmit}>
              <>
                <div className="form-group mb-6">
                  <label
                    htmlFor="firstNameInput"
                    className="form-label inline-block mb-2 text-gray-700"
                  >
                    First name
                  </label>
                  <input
                    type="name"
                    className="form-control 
                                    block w-full px-3 py-1.5 text-base font-normal 
                                    text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 
                                    rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 
                                    focus:outline-none"
                    id="firstNameInput"
                    name="firstName"
                    placeholder="Enter name"
                  />
                </div>
                <div className="form-group mb-6">
                  <label
                    htmlFor="surnameInput"
                    className="form-label inline-block mb-2 text-gray-700"
                  >
                    Surname
                  </label>
                  <input
                    type="surname"
                    className="form-control 
                                    block w-full px-3 py-1.5 text-base font-normal 
                                    text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 
                                    rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 
                                    focus:outline-none"
                    id="surnameInput"
                    name="surname"
                    placeholder="Enter surname"
                  />
                </div>
                <div className="form-group mb-6">
                  <label htmlFor="floatingInput" className="text-gray-700">
                    Select your birthdate
                  </label>
                  <div
                    className="datepicker relative form-floating mb-3 xl:w-72"
                    data-mdb-toggle-button="false"
                  >
                    <input
                      type="date"
                      name="birthDate"
                      className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      placeholder="Select your birthdate"
                      data-mdb-toggle="datepicker"
                    />
                  </div>
                </div>
                <div className="form-group mb-6">
                  <label
                    htmlFor="idNumberInput"
                    className="form-label inline-block mb-2 text-gray-700"
                  >
                    Identification Number
                  </label>
                  <input
                    type="passport"
                    className="form-control 
                                    block w-full px-3 py-1.5 text-base font-normal 
                                    text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 
                                    rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 
                                    focus:outline-none"
                    id="idNumberInput"
                    name="idNumber"
                    placeholder="Enter ID number"
                  />
                </div>

                <div className="form-group mb-6">
                  <label
                    htmlFor="phoneInput"
                    className="form-label inline-block mb-2 text-gray-700"
                  >
                    Phone number
                  </label>
                  <input
                    type="telephone"
                    className="form-control 
                                    block w-full px-3 py-1.5 text-base font-normal 
                                    text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 
                                    rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 
                                    focus:outline-none"
                    id="phoneInput"
                    name="phone"
                    placeholder="Enter phone number"
                  />
                </div>
                <div className="form-group mb-6">
                  <label
                    htmlFor="emailInput"
                    className="form-label inline-block mb-2 text-gray-700"
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control 
                                    block w-full px-3 py-1.5 text-base font-normal 
                                    text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 
                                    rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 
                                    focus:outline-none"
                    id="emailInput"
                    name="email"
                    placeholder="Enter email"
                  />
                </div>

                <div className="form-group mb-6">
                  <label
                    htmlFor="passwordInput"
                    className="form-label inline-block mb-2 text-gray-700"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding
                                        border border-solid border-gray-300 rounded transition ease-in-out m-0
                                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="passwordInput"
                    name="password"
                    placeholder="Min. 6 characters"
                  />
                </div>
              </>

              <>
                <div className="form-group mb-6">
                  <label
                    htmlFor="addressInput"
                    className="form-label inline-block mb-2 text-gray-700"
                  >
                    Street
                  </label>
                  <input
                    type="address"
                    className="form-control 
                                    block w-full px-3 py-1.5 text-base font-normal 
                                    text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 
                                    rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 
                                    focus:outline-none"
                    id="addressInput"
                    name="address"
                    placeholder="Enter your address"
                  />
                </div>
                <div className="form-group mb-6">
                  <label
                    htmlFor="postalCodeInput"
                    className="form-label inline-block mb-2 text-gray-700"
                  >
                    Postal code
                  </label>
                  <input
                    type="postcode"
                    className="form-control 
                                    block w-full px-3 py-1.5 text-base font-normal 
                                    text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 
                                    rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 
                                    focus:outline-none"
                    id="postalCodeInput"
                    name="postalCode"
                    placeholder="Enter your postal code"
                  />
                </div>
                <div className="form-group mb-6">
                  <label
                    htmlFor="cityInput"
                    className="form-label inline-block mb-2 text-gray-700"
                  >
                    City
                  </label>
                  <input
                    type="city"
                    className="form-control 
                                    block w-full px-3 py-1.5 text-base font-normal 
                                    text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 
                                    rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 
                                    focus:outline-none"
                    id="cityInput"
                    name="city"
                    placeholder="Enter your city"
                  />
                </div>
                <div className="form-group mb-6">
                  <label
                    htmlFor="countryInput"
                    className="form-label inline-block mb-2 text-gray-700"
                  >
                    Country
                  </label>
                  <input
                    type="city"
                    className="form-control 
                                    block w-full px-3 py-1.5 text-base font-normal 
                                    text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 
                                    rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 
                                    focus:outline-none"
                    id="countryInput"
                    name="country"
                    placeholder="Enter your country"
                  />
                </div>

                {/* <button
                  type="button"
                  className=" px-3 py-1.5 bg-midgreen text-bone w-full
                                                            font-medium text-xs leading-tight uppercase rounded shadow-md
                                                            hover:bg-blue-700 hover:shadow-lg"
                >
                  Previous step
                </button> */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full px-6 py-2.5 bg-midgreen 
                                    text-white font-medium text-xs leading-tight 
                                    uppercase rounded shadow-md hover:bg-blue-700 
                                    hover:shadow-lg focus:bg-blue-700 focus:shadow-lg 
                                    focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150
                                    ease-in-out"
                  >
                    Register
                  </button>
                </div>

                <div>
                  <Link to="/login" className="underline">
                    Already have an account?
                  </Link>
                </div>
              </>
            </form>
          </div>
        </div>
      </div>
      <div
        className="login-background-image w-7/12 h-screen bg-cover bg-center"
        style={{ backgroundImage: "url(/login/background.jpg)" }}
      ></div>
    </main>
  )
}

export default Register

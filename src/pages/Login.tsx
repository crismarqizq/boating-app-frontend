import { Link, useNavigate } from "react-router-dom"
import { useAppDispatch } from "../app/hooks"
import { authenticateUser } from "../store/thunks/authenticateUser"
import Toast from "../components/ui/toast"
import { useState } from "react"

function Login() {
  const [isToastActive, setIsToastActive] = useState(false)
  const [toastMessage, setToastMessage] = useState("")
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const handleSubmit = async (event: any) => {
    event.preventDefault()

    const form = event.target

    const email = form.email.value
    const password = form.password.value

    const data = { email, password }

    try {
      await dispatch(authenticateUser(data))

      // If login was successful, update basic state slices, used everywhere else in this application
      //FIXME: delete after initializing state in App component
      // dispatch(fetchPorts(true))
      // dispatch(fetchBoats())
      // dispatch(fetchBookings())

      // Redirect user to homepage
      navigate("/ports")

      // TODO: redirect user to previous page
    } catch (error: any) {
      setToastMessage("error")
      setIsToastActive(true)
      console.error("Error while trying to log in")
    }
  }
  const closeToast = () => {
    setIsToastActive(false)
  }

  return (
    <>
      <main className="h-screen w-screen flex flex-row items-center justify-center">
        {isToastActive && <Toast message={toastMessage} onClose={closeToast} />}
        <div className="w-5/12 h-screen flex flex-col justify-center items-center bg-gray-800">
          <div className="block p-6 rounded-lg shadow-lg bg-bone max-w-sm">
            <form onSubmit={handleSubmit}>
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
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                ></input>
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
                  className="form-control block
                                        w-full
                                        px-3
                                        py-1.5
                                        text-base
                                        font-normal
                                        text-gray-700
                                        bg-white bg-clip-padding
                                        border border-solid border-gray-300
                                        rounded
                                        transition
                                        ease-in-out
                                        m-0
                                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="passwordInput"
                  name="password"
                  placeholder="Password"
                ></input>
              </div>

              <button
                type="submit"
                className="w-full
                                    px-6
                                    py-2.5
                                    bg-midgreen
                                    text-white
                                    font-medium
                                    text-xs
                                    leading-tight
                                    uppercase
                                    rounded
                                    shadow-md
                                    hover:bg-blue-700 hover:shadow-lg
                                    focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
                                    active:bg-blue-800 active:shadow-lg
                                    transition
                                    duration-150
                                    ease-in-out"
              >
                Sign in
              </button>
              <span className="mr-1">
                <Link to={"/register"} className="underline">
                  Need an account?
                </Link>
              </span>
            </form>
          </div>
        </div>
        <div
          className="login-background-image w-7/12 h-screen bg-cover bg-center"
          style={{ backgroundImage: "url(/login/background.jpg)" }}
        ></div>
      </main>
    </>
  )
}

export default Login

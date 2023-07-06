import { useAppDispatch } from "../app/hooks"
import { authenticateUser } from "../store/thunks/authenticateUser"
function Login() {
  const dispatch = useAppDispatch()

  const handleSubmit = (event: any) => {
    event.preventDefault()

    const form = event.target

    const email = form.email.value
    const password = form.password.value

    const data = { email, password }

    dispatch(authenticateUser(data))
  }

  return (
    <>
      <main className="h-screen w-screen flex flex-row items-center justify-center">
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

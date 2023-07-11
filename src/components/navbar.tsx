import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser, faWater } from "@fortawesome/free-solid-svg-icons"
import { useAppSelector } from "../app/hooks"
import { Link, useNavigate } from "react-router-dom"

function Navbar() {
  const navigate = useNavigate()

  const { auth, status } = useAppSelector((state) => {
    return state.auth
  })

  return (
    <nav className="relative w-full flex flex-wrap items-center justify-between py-4 bg-darkblue text-white hover:text-gray-100 focus:text-gray-200 shadow-lg navbar navbar-expand-lg navbar-light">
      <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">
        <button
          className="navbar-toggler text-white border-0 1hover:shadow-none hover:no-underline py-2 px-2.5 bg-transparent focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FontAwesomeIcon icon={faWater} />
        </button>
        {/* <div
          className="collapse navbar-collapse flex-grow items-center"
          id="navbarSupportedContent"
        > */}
        <Link to={"/ports"} className="nav-link" aria-current="page">
          <span className="text-xl">
            {" "}
            <FontAwesomeIcon icon={faWater} />
          </span>
        </Link>
        <ul className="navbar-nav flex flex-col pl-0 list-style-none mr-auto">
          <li className="nav-item px-2">
            <Link to={"/boats"} className="nav-link " aria-current="page">
              Boats
            </Link>
          </li>
          <li className="nav-item px-2">
            <Link to={"/bookings"} className="nav-link" aria-current="page">
              Bookings
            </Link>
          </li>
        </ul>
        <div className="flex justify-center">
          <div>
            {status === "idle" && <div>Hello {auth?.info.name}</div>}

            <div className="dropdown relative">
              <button
                className="dropdown-toggle px-6 py-3.5 bg-blue-600 text-white font-medium text-xl leading-tight uppercase rounded shadow-md
                                                  hover:bg-blue-700 hover:shadow-lg
                                                    focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
                                                    active:bg-blue-800 active:shadow-lg active:text-white transition duration-150 ease-in-out flex
                                                    items-center whitespace-nowrap "
                type="button"
                id="dropdownMenuButton1d"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <FontAwesomeIcon icon={faUser} />
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </nav>
  )
}

export default Navbar

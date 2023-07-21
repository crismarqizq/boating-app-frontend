import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faGear,
  faRightFromBracket,
  faUser,
  faWater,
} from "@fortawesome/free-solid-svg-icons"
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
        <ul className="navbar-nav flex flex-row pl-0 list-style-none mr-auto">
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
        <div className="flex flex-row justify-center">
          <div>{status === "idle" && <div>Hello {auth?.info.name}</div>}</div>
          <div>
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
              <ul
                className="dropdown-menu min-w-max absolute hidden bg-white text-base z-50 float-left py-2 list-none text-left  rounded-lg shadow-lg mt-1 bg-clip-padding border-none"
                aria-labelledby="dropdownMenuButton1d"
              >
                <li className=" dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100">
                  <Link
                    to={"/settings"}
                    className="nav-link"
                    aria-current="page"
                  >
                    {" "}
                    <FontAwesomeIcon icon={faGear} /> Settings
                  </Link>
                </li>

                <hr className="h-0 my-2 border border-solid border-t-0 border-gray-700 opacity-25" />
                <li className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100">
                  <FontAwesomeIcon icon={faRightFromBracket} /> Logout
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </nav>
  )
}

export default Navbar

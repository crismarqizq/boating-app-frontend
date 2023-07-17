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
          <div className="dropdown relative">
            <button
              className="flex items-center whitespace-nowrap rounded bg-darkblue px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] motion-reduce:transition-none dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
              type="button"
              id="dropdownMenuButton1"
              data-te-dropdown-toggle-ref
              aria-expanded="false"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              <FontAwesomeIcon icon={faUser} />
            </button>

            <ul
              className="absolute z-[1000] float-left m-0 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block"
              aria-labelledby="dropdownMenuButton1"
              data-te-dropdown-menu-ref
            >
              <li>
                <a
                  className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                  href="/settings"
                  data-te-dropdown-item-ref
                >
                  <FontAwesomeIcon icon={faGear} /> Settings
                </a>
              </li>

              <li className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100">
                <a
                  className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                  href="logout"
                  data-te-dropdown-item-ref
                >
                  <FontAwesomeIcon icon={faRightFromBracket} /> Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* </div> */}
    </nav>
  )
}

export default Navbar

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faRightFromBracket, faWater } from "@fortawesome/free-solid-svg-icons"
import { useAppDispatch, useAppSelector } from "../app/hooks"
import { Link, useNavigate } from "react-router-dom"
import { logout } from "../store/slices/auth"

function Navbar() {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const { auth, status } = useAppSelector((state) => {
    return state.auth
  })

  const logoutHandler = () => {
    dispatch(logout())
    navigate("/login")
  }

  return (
    <nav className="relative w-full flex flex-wrap items-center justify-between py-4 bg-darkblue text-white hover:text-gray-100 focus:text-gray-200 shadow-lg navbar navbar-expand-lg navbar-light">
      <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">
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
          <li className="nav-item px-2">
            <Link to={"/settings"} className="nav-link" aria-current="page">
              Settings
            </Link>
          </li>
        </ul>
        <div>
          {status === "idle" && (
            <div className="font-bold">Hello {auth?.info.name}</div>
          )}
        </div>

        <div className="flex justify-center">
          <div></div>
          <button className="nav-item px-6" onClick={logoutHandler}>
            <FontAwesomeIcon icon={faRightFromBracket} />
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

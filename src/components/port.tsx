import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { PortInstance } from "../store/slices/ports"
import {
  faDroplet,
  faTemperatureThreeQuarters,
  faWind,
} from "@fortawesome/free-solid-svg-icons"
import PortFacilities from "./portFacilities"
import { useNavigate } from "react-router-dom"

type componentProps = {
  portInfo: PortInstance
}

function Port({ portInfo }: componentProps) {
  const navigate = useNavigate()
  function convertToDms(dd: number, isLng: boolean) {
    var dir = dd < 0 ? (isLng ? "W" : "S") : isLng ? "E" : "N"

    var absDd = Math.abs(dd)
    var deg = absDd | 0
    var frac = absDd - deg
    var min = (frac * 60) | 0
    var sec = frac * 3600 - min * 60
    // Round it to 2 decimal points.
    sec = Math.round(sec * 100) / 100
    return deg + "°" + min + "'" + sec + '"' + dir
  }
  function createNewBooking() {
    navigate("/bookings")
  }

  return (
    <div className="flex flex-col  bg-white font-sans shadow-md">
      <div
        className="h-60 bg-cover bg-center"
        style={{ backgroundImage: `url(${portInfo.imagePath})` }}
      ></div>
      <div className="flex flex-col h-full justify-between">
        <div className="p-6">
          <div className="flex flex-col items-center">
            <h2 className="text-darkblue font-bold text-lg">{portInfo.name}</h2>
            <div>
              <div>
                <div className="text-midblue font-thin">
                  <span className="ml-1"></span>{" "}
                  {convertToDms(portInfo.coordinates[0], false)}
                  <span className="ml-1"></span>
                  {convertToDms(portInfo.coordinates[1], true)}
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-full">
            <div className="flex flex-col w-1/2">
              <span className="text-midblue font-semibold">Address:</span>
              <ul className="text-midblue font-thin">
                <li>{portInfo.street}</li>
                <li>{portInfo.postalCode}</li>
                <li>{portInfo.town}</li>
                <li>{portInfo.city}</li>
              </ul>
              <span className="text-midblue font-semibold">
                Contact Number:
              </span>
              <p className="text-midblue font-thin">{portInfo.contactNumber}</p>
              <span className="text-midblue font-semibold">VHF channel:</span>
              <p className="text-midblue font-thin">{portInfo.VHF}</p>
              <span className="text-midblue font-semibold">Berths: </span>
              <p className="text-midblue font-thin">{portInfo.berths}</p>
            </div>
            <div className="flex flex-col justify-end items-end w-1/2">
              <span className="text-midblue font-semibold"></span>
              <ul className="text-midblue font-thin">
                <li>
                  <FontAwesomeIcon icon={faTemperatureThreeQuarters} />
                  <span className="ml-1"></span>
                  {portInfo.weather?.temperature} ºC
                </li>
                <li>
                  <FontAwesomeIcon icon={faWind} />
                  <span className="ml-1"></span>
                  {portInfo.weather?.windSpeed}
                  <span className="ml-1"></span>
                  knots
                </li>
                <li>
                  <FontAwesomeIcon icon={faDroplet} />
                  <span className="ml-1"></span>
                  {portInfo.weather?.humidity} %
                </li>
                <li> {portInfo.weather?.main}</li>
                <img
                  alt="Port Weather icon"
                  src={`http://openweathermap.org/img/wn/${portInfo.weather?.icon}@2x.png`}
                  height="60px"
                  width="60px"
                />
              </ul>
            </div>
          </div>
          <div>
            <span className="text-midblue font-semibold">Facilities</span>
            <PortFacilities extended={false} facilities={portInfo.facilities} />
          </div>
        </div>
        <div className="justify-self-end">
          <button
            onClick={createNewBooking}
            className="bg-midgreen text-white text-md p-2 w-full "
          >
            Book now
          </button>
        </div>
      </div>
    </div>
  )
}

export default Port

import { PortInstance } from "../store/slices/ports"

function Port(portInfo: PortInstance) {
  function convertToDms(dd, isLng) {
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
  return (
    <div className="flex flex-col  bg-white font-sans shadow-md">
      <div className="h-60 bg-cover bg-center">Port image</div>
      <div>
        <h2 className="text-darkblue font-bold text-lg">{portInfo.name}</h2>
        <div className="text-midblue font-thin">
          <span className="ml-1"></span>{" "}
          {convertToDms(portInfo.coordinates[0], false)}
          <span className="ml-1"></span>
          {convertToDms(portInfo.coordinates[1], true)}
        </div>
      </div>
      <div className="flex flex-col w-1/2">
        <span className="text-midblue font-semibold">Address</span>
      </div>
      <div className="text-midblue font-semibold">Some other relative info</div>
    </div>
  )
}

export default Port

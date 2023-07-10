import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faRestroom,
  faPersonSwimming,
  faUtensils,
  faSoap,
  faSquareParking,
  faDumbbell,
  faGasPump,
  faCableCar,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons"

type componentProps = {
  facilities: Array<string>
  extended: Boolean
}

type facilitiesMap = {
  [facilityName: string]: IconDefinition
}

function PortFacilities({ facilities, extended }: componentProps) {
  const facilitiesMap: facilitiesMap = {
    wc: faRestroom,
    swim: faPersonSwimming,
    restaurant: faUtensils,
    laundry: faSoap,
    parking: faSquareParking,
    gym: faDumbbell,
    gas: faGasPump,
    travel: faCableCar,
  }

  const getFAComponent = (iconReference: IconDefinition, keyIndex: number) => {
    return (
      <FontAwesomeIcon
        icon={iconReference}
        key={keyIndex}
        className="ml-3 text-midblue"
      />
    )
  }

  return (
    <div className="m-2">
      {facilities.map((facility, i) => {
        return getFAComponent(facilitiesMap[facility], i)
      })}
    </div>
  )
}

export default PortFacilities

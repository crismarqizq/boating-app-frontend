import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useAppSelector } from "../app/hooks"
import Port from "./port"
import { faDharmachakra } from "@fortawesome/free-solid-svg-icons"

function PortsList() {
  const { ports, status } = useAppSelector((state) => {
    return state.ports
  })

  return (
    <div className="w-full">
      {status === "failed" && <div>There was an error</div>}
      {status === "loading" && (
        <div className="flex justify-center items-center">
          <div
            className="animate-spin mt-16"
            style={{ animation: "spin 4s linear infinite" }}
            role="status"
          >
            <FontAwesomeIcon
              icon={faDharmachakra}
              className="text-6xl text-darkblue"
            />
            <span className="visually-hidden"></span>
          </div>
        </div>
      )}
      <div className="grid gap-10 grid-cols-3 p-4">
        {ports.length &&
          ports.map((port) => <Port key={port._id} portInfo={port}></Port>)}
      </div>
    </div>
  )
}

export default PortsList

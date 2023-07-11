import { useAppSelector } from "../app/hooks"
import Port from "./port"

function PortsList() {
  const { ports, status } = useAppSelector((state) => {
    return state.ports
  })

  return (
    <div className="w-full">
      <div className="grid gap-10 grid-cols-3 p-4">
        {status === "failed" && <div>There was an error</div>}
        {status === "loading" && <div>Loading...</div>}
        {ports.length &&
          ports.map((port) => <Port key={port._id} portInfo={port}></Port>)}
      </div>
    </div>
  )
}

export default PortsList

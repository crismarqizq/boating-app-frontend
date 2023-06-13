import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../app/hooks"
import { fetchPorts } from "../store/thunks/fetchPorts"
import Port from "./Port"

function PortsList() {
  const dispatch = useAppDispatch()

  const { ports, status } = useAppSelector((state) => {
    return state.ports
  })

  useEffect(() => {
    dispatch(fetchPorts())
  }, [dispatch])

  return (
    <div>
      <div className="grid gap-10 grid-cols-3 p-4">
        {status === "failed" && <div>There was an error</div>}
        {status === "loading" && <div>Loading...</div>}
        {ports.length &&
          ports.map((port) => <Port key={port._id} portInfo={port}></Port>)}
        {/* <Port></Port> */}
      </div>
    </div>
  )
}

export default PortsList

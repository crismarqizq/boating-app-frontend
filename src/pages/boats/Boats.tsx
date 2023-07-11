import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { fetchBoats } from "../../store/thunks/fetchBoats"
import BoatsList from "../../components/boatsList"
import BoatForm from "../../components/boatForm"

function Boats() {
  // const dispatch = useAppDispatch()

  const { boats, status } = useAppSelector((state) => {
    return state.boats
  })

  // useEffect(() => {
  //   dispatch(fetchBoats())
  // }, [dispatch])

  return (
    <main className="w-screen min-h-screen bg-bone pt-10 flex justify-center">
      <div className="flex flex-col items-center w-11/12">
        <div className="w-full">
          <h2 className="mb-4 font-bold text-xl">Your boats</h2>
          <div className="grid gap-10 grid-cols-3 p-4">
            {status === "failed" && <div>There was an error</div>}
            {status === "loading" && <div>Loading...</div>}
            <BoatsList boatsList={boats}></BoatsList>
          </div>

          <div className="flex w-11/12 my-10">
            <BoatForm></BoatForm>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Boats

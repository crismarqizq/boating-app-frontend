import { useEffect, useState } from "react"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { fetchBoats } from "../../store/thunks/fetchBoats"
import BoatsList from "../../components/boatsList"
import BoatForm from "../../components/boatForm"
import { BoatInstance } from "../../store/slices/boats"

function Boats() {
  // const dispatch = useAppDispatch()

  const { boats, status } = useAppSelector((state) => {
    return state.boats
  })

  const [isBoatFormVisible, setisBoatFormVisible] = useState(false)
  const [editableBoatInfo, setEditableBoatInfo] = useState({} as BoatInstance)

  const triggerNewBoatCreation = () => {
    setisBoatFormVisible(true)
  }

  const onUpdateBoatRequest = (boatId: string) => {
    console.log("Received update event for boat", boatId)
    const boatInfo = boats.filter((boat) => boat.id === boatId)
    if (boatInfo.length) {
      setEditableBoatInfo(boatInfo[0])
      setisBoatFormVisible(true)
    }
  }

  const onFormFinish = () => {
    setisBoatFormVisible(false)
  }
  const hideForm = (event: any) => {
    setisBoatFormVisible(false)
  }

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
            {boats.length ? (
              <BoatsList
                boatsList={boats}
                onUpdateBoatRequest={onUpdateBoatRequest}
              ></BoatsList>
            ) : (
              <div className="mb-4 font-medium">
                You have no boats. Start adding your first boat
              </div>
            )}
          </div>

          {!isBoatFormVisible && (
            <div className="flex w-full justify-end">
              <button
                className="px-3 py-1.5 mt-4 bg-midgreen text-bone 
                                font-medium text-xs leading-tight uppercase rounded shadow-md
                                hover:bg-blue-700 hover:shadow-lg"
                onClick={triggerNewBoatCreation}
              >
                Add new boat to my list
              </button>
            </div>
          )}

          <div className="flex w-11/12 my-10">
            {isBoatFormVisible && (
              <BoatForm
                boatInfo={editableBoatInfo}
                onFinish={onFormFinish}
                onDiscard={hideForm}
              />
            )}
          </div>
        </div>
      </div>
    </main>
  )
}

export default Boats

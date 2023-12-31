import { faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons"
import { BoatInstance } from "../store/slices/boats"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { deleteBoat } from "../store/thunks/deleteBoat"
import { useAppDispatch } from "../app/hooks"

type componentProps = {
  boatsList: BoatInstance[]
  onUpdateBoatRequest: any
}

function BoatsList({ boatsList, onUpdateBoatRequest }: componentProps) {
  const dispatch = useAppDispatch()

  const deleteSelectedBoat = (boatId: string) => {
    dispatch(deleteBoat(boatId))
  }

  const editSelectedBoat = (boatId: string) => {
    onUpdateBoatRequest(boatId)
  }

  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full">
              <thead className="bg-white border-b">
                <tr>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Flag
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Register Number
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Sailboat
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Length
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Beam
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Draft
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-center"
                  >
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {boatsList.map((boat) => (
                  <tr
                    key={boat.id}
                    className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100"
                  >
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      {boat.name}
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      {boat.flag}
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      {boat.regNumber}
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      {boat.sail ? "Yes" : "No"}
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      {boat.length}
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      {boat.beam}
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      {boat.draft}
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap flex justify-center">
                      <button
                        type="button"
                        className="px-6 py-2.5 bg-darkblue text-bone
                                                            font-medium text-xs leading-tight uppercase rounded shadow-md
                                                            hover:bg-blue-700 hover:shadow-lg
                                                            focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
                                                            active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                        onClick={(e) => editSelectedBoat(boat.id)}
                      >
                        <FontAwesomeIcon icon={faPenToSquare} />
                      </button>
                      <button
                        type="button"
                        className="px-6 py-2.5 ml-2 bg-darkblue text-bone
                                                            font-medium text-xs leading-tight uppercase rounded shadow-md
                                                            hover:bg-blue-700 hover:shadow-lg
                                                            focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
                                                            active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                        data-bs-toggle="modal"
                        data-bs-target="#confirmDeleteModal"
                        onClick={(e) => {
                          deleteSelectedBoat(boat.id)
                        }}
                      >
                        <FontAwesomeIcon icon={faTrashCan} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
export default BoatsList

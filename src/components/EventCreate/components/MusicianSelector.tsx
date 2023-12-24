import { useContext, useState } from "react"
import { musicians } from "../../../seedData"
import type { Musician } from "../../../types/GigTypes"
import { addMusician } from "../utils/helpers"
import { CreateGigContext } from "../context/CreateGigContext"

import { isMusician } from "../utils/typeGuards"
import { addMusicianAfterConfirm } from "../utils/helpers"

const MusicianSelector = () => {
  const { gigForm, setGigForm } = useContext(CreateGigContext)
  const [addDuplicateModal, setAddDuplicateModal] = useState<boolean>(false)
  const [musicianToAdd, setMusicianToAdd] = useState<Musician>({} as Musician)

  const handleAddMusician = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    let result: Musician[] | Musician | "Duplicate" = addMusician(e, gigForm)

    console.log("result", result)

    if (isMusician(result)) {
      setAddDuplicateModal(true)
      setMusicianToAdd(result)
    }

    if (Array.isArray(result) && isMusician(result[0])) {
      console.log("result", result)
      setGigForm({ ...gigForm, selectedMusicians: result })
    }
  }

  const handleAddMusicianAfterConfirm = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    console.log("musicianToAdd", musicianToAdd)

    let result: Musician[] | undefined = addMusicianAfterConfirm(
      e,
      musicianToAdd,
      gigForm
    )

    console.log("result", result)

    if (Array.isArray(result) && isMusician(result[0])) {
      setGigForm({ ...gigForm, selectedMusicians: result })
      setAddDuplicateModal(false)
    } else {
      setAddDuplicateModal(false)
    }
  }

  return (
    <div>
      {gigForm.instrumentation.map((instrument) => (
        <div>
          <label>Add {instrument}</label>
          <select
            className="border border-black"
            onChange={(e) => handleAddMusician(e)}
          >
            {" "}
            <option>Select {instrument}</option>
            {musicians.map(
              (musician, index) =>
                musician.instrument === instrument && (
                  <option key={index} value={musician.name}>
                    {musician.name}
                  </option>
                )
            )}
          </select>
        </div>
      ))}
     {addDuplicateModal && (
  <div>
    <label htmlFor="yes">Yes</label>
    <input
      onChange={(e) => handleAddMusicianAfterConfirm(e)}
      type="radio"
      name="yes"
      value="yes"
    />
    <label htmlFor="no">No</label>
    <input
      onChange={(e) => handleAddMusicianAfterConfirm(e)}
      type="radio"
      name="no"
      value="no"
    />
  </div>
)}
    </div>
  )
}
export default MusicianSelector

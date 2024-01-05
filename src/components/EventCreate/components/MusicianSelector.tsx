import { useContext, useState } from "react"
import { musicians } from "../../../seedData"
import type { Musician } from "../../../types/GigTypes"
import { addMusician } from "../utils/helpers"
import { CreateGigContext } from "../context/CreateGigContext"
import { isMusician } from "../utils/typeGuards"
import { addMusicianAfterConfirm } from "../utils/helpers"
import toast, { Toaster } from "react-hot-toast"
import { ConfirmationDialog } from "../../ConfirmationDialog/ConfirmationDialog"

const MusicianSelector = () => {
  const { gigForm, setGigForm } = useContext(CreateGigContext)
  const [addDuplicateModal, setAddDuplicateModal] = useState<boolean>(false)
  const [musicianToAdd, setMusicianToAdd] = useState<Musician>({} as Musician)

  const findAddedMusician = (musicianName: string) => {
    return musicians.find((musician) => musician.name === musicianName)
  }

  const handleAddMusician = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    const result: Musician[] | Musician | "Duplicate" = addMusician(e, gigForm)

    const addedMusician = findAddedMusician(e.target.value)

    if (isMusician(result)) {
      setAddDuplicateModal(true)
      setMusicianToAdd(result)
    }

    if (Array.isArray(result) && isMusician(result[0])) {
      setGigForm({ ...gigForm, selectedMusicians: result })
      if (addedMusician) {
        toast.success(
          `${addedMusician.name} (${addedMusician.instrument}) was added to the gig!`
        )
      }
    }
  }

  const handleAddMusicianAfterConfirm = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const result: Musician[] | undefined = addMusicianAfterConfirm(
      e,
      musicianToAdd,
      gigForm
    )

    if (Array.isArray(result) && isMusician(result[0])) {
      setGigForm({ ...gigForm, selectedMusicians: result })
      setAddDuplicateModal(false)
    } else {
      setAddDuplicateModal(false)
    }

    const addedMusician = findAddedMusician(musicianToAdd.name)

    if (addedMusician) {
      if (e.target.value === "yes") {
        toast.success(
          `${addedMusician.name} (${addedMusician.instrument}) was added to the gig!`
        )
      }

      if (e.target.value === "no") {
        toast.error(
          `${addedMusician.name} (${addedMusician.instrument}) was NOT added to the gig!`
        )
      }
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
      <Toaster />
      <ConfirmationDialog
        message={`Are you sure you want to add another ${musicianToAdd.instrument}?`}
        boolState={addDuplicateModal}
        setBoolFalse={() => setAddDuplicateModal(false)}
        action={(e: React.ChangeEvent<HTMLInputElement> | undefined) => {
          e && handleAddMusicianAfterConfirm(e)
        }}
      />
    </div>
  )
}
export default MusicianSelector

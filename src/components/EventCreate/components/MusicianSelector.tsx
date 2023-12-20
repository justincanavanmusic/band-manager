import { useContext, useState } from "react"
import { musicians } from "../../../seedData"
import type { Musician } from "../../../types/GigTypes"
import { addMusician } from "../utils/helpers"
import { CreateGigContext } from "../context/CreateGigContext"
import { Instrument } from "../../../types/GigTypes"
import { isInstrument } from "../utils/typeGuards"

const MusicianSelector = () => {
  const { gigForm, setGigForm } = useContext(CreateGigContext)
  const [addDuplicateModal, setAddDuplicateModal] = useState<boolean>(false)

  const handleAddMusician = (e: React.ChangeEvent<HTMLSelectElement>) => {
    let result: Musician[] | Instrument | "Duplicate" = addMusician(e, gigForm)

    if (isInstrument(result)) {
      setAddDuplicateModal(true)
    }

    if (Array.isArray(result)) {
      setGigForm({ ...gigForm, selectedMusicians: result })
    }
  }

  return gigForm.instrumentation.map((instrument) => (
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
      {addDuplicateModal && (
        <div>
          <label htmlFor="yes">Yes</label>
          <input type="radio" name="yes" value="yes" />
          <label htmlFor="no">No</label>
          <input type="radio" name="no" value="no" />
        </div>
      )}
    </div>
  ))
}
export default MusicianSelector

import { useContext } from "react"
import { musicians } from "../../../seedData"
import type { Musician } from "../../../types/GigTypes"
import { addMusician } from "../utils/helpers"
import { CreateGigContext } from "../context/CreateGigContext"


const MusicianSelector = () => {
  const { gigForm, setGigForm } = useContext(CreateGigContext)

  const handleAddMusician = (e: React.ChangeEvent<HTMLSelectElement>) => {

    let result: Musician[] | undefined = addMusician(e, gigForm)
    if (result) {
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
    </div>
  ))
}
export default MusicianSelector

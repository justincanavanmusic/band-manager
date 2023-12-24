import { useContext } from "react"
import { CreateGigContext } from "../context/CreateGigContext"
import type { Instrument } from "../../../types/GigTypes"
import { addInstrumentToArr } from "../utils/helpers"
import { instruments } from "../../../types/GigTypes"

const InstrumentSelector = () => {
  const { gigForm, setGigForm } = useContext(CreateGigContext)

  const addInstrument = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target
    const newValue = value as Instrument

    if (gigForm.instrumentation.includes(newValue)) {
      return
      //modal if instrument is already included
    }

    let newInstArr: Instrument[] = addInstrumentToArr(
      newValue,
      gigForm.instrumentation
    )

    setGigForm({ ...gigForm, instrumentation: newInstArr })
  }

  return (
    <>
      <label>
        Instrumentation:
        <select
          className="border border-black"
          name="instrumentation"
          onChange={(e) => addInstrument(e)}
        >
          <option value="">Select an instrument</option>
          {instruments.map((instrument) => (
            <option key={`${instrument}-select`} value={instrument}>
              {instrument}
            </option>
          ))}
        </select>
      </label>
    </>
  )
}
export default InstrumentSelector

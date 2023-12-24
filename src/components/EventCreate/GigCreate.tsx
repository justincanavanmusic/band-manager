import { useState, useEffect } from "react"
import { musicians } from "../../seedData"
import {
  instruments,
  GigForm,
  Instrument,
  Musician,
} from "../../types/GigTypes"
import { addInstrumentToArr, checkInstrumentation } from "./utils/helpers"
import { CreateGigContext } from "./context/CreateGigContext"
import MusicianSelector from "./components/MusicianSelector"
import DateSelector from "./components/DateSelector"
import { parseDate } from "./utils/parseDate"

const GigCreate = () => {
  const [gigForm, setGigForm] = useState<GigForm>({
    clientName: "",
    date: new Date(),
    startTime: "",
    instrumentation: [],
    selectedMusicians: [],
  })

  useEffect(() => {
    console.log("gigForm", gigForm)
  }, [gigForm])

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

  const handleChange: (e: any) => void = (e) => {
    const { name, value } = e.target
    setGigForm((prevFormData: GigForm) => ({
      ...prevFormData,
      [name]: value,
    }))
  }

  const handleSubmit: (e: any) => void = (e) => {
    e.preventDefault()

    let areInstrumentsCovered: boolean | (boolean | string[])[] =
      checkInstrumentation(gigForm.instrumentation, gigForm.selectedMusicians)

    if (areInstrumentsCovered === true) {
      console.log("send data")
      //do mutation, onSuccess, form submitted
      console.log("Form submitted:", gigForm)
    } else {
      if (Array.isArray(areInstrumentsCovered[1])) {
        let neededInstruments: string = areInstrumentsCovered[1]
          .toString()
          .split(",")
          .join(", ")

        //send modal to user, tell them what instruments are needed

        console.log(`Please make sure to add ${neededInstruments}`)
      }
    }
  }

  console.log(parseDate(gigForm.date))

  return (
    <CreateGigContext.Provider
      value={{
        gigForm,
        setGigForm,
        handleChange,
      }}
    >
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <DateSelector />

          <label>
            Instrumentation:
            <select
              className="border border-black"
              name="instrumentation"
              // value={gigForm.instrumentation}
              // onChange={handleChange}
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
          <br />
          {gigForm.instrumentation.length > 0 && <MusicianSelector />}

          <br />
          <button className="border border-black w-24" type="submit">
            Submit
          </button>
          {/* User Selections */}
          <div className="flex flex-col mt-8">
            <span>Date: {parseDate(gigForm.date)} </span>
            <span>Start Time: {gigForm.startTime}</span>
            <span>
              Instrumentation:{" "}
              {gigForm.instrumentation.map((instrument: Instrument) => (
                <span className="">{instrument} - </span>
              ))}
            </span>
            <span>
              Musicians:{" "}
              {gigForm.selectedMusicians.map((musician: Musician) => (
                <div>
                  <span className="">{musician.name} - </span>
                  <span className="">{musician.instrument} - </span>
                </div>
              ))}
            </span>
          </div>
        </div>
      </form>
    </CreateGigContext.Provider>
  )
}

export default GigCreate

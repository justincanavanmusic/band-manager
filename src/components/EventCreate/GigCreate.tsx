import { useState, useEffect } from "react"
import { musicians } from "../../seedData"
import {
  instruments,
  GigForm,
  Instrument,
  Musician,
} from "../../types/GigTypes"
import {
  addMusician,
  addInstrumentToArr,
  checkInstrumentation,
} from "./utils/helpers"
import { CreateGigContext } from "./context/CreateGigContext"
import MusicianSelector from "./components/MusicianSelector"

const GigCreate = () => {
  const [gigForm, setGigForm] = useState<GigForm>({
    clientName: "",
    date: "",
    startTime: "",
    instrumentation: [],
    selectedMusicians: [],
  })

  useEffect(() => {
    console.log("selectedMusicians", gigForm.selectedMusicians)
  }, [gigForm.selectedMusicians])

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

    let areInstrumentsCovered = checkInstrumentation(
      gigForm.instrumentation,
      gigForm.selectedMusicians
    )

    if (areInstrumentsCovered) {
      console.log("send data")
      //do mutation
    } else {
      //send modal to user
    }

    console.log("Form submitted:", gigForm)
  }

  return (
    <CreateGigContext.Provider
      value={{
        gigForm,
        setGigForm,
      }}
    >
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <label>
            Date:
            <input
              className="border border-black"
              type="text"
              name="date"
              value={gigForm.date}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Start Time:
            <input
              className="border border-black"
              type="text"
              name="startTime"
              value={gigForm.startTime}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Instrumentation:
            <select
              className="border border-black"
              name="instrumentation"
              value={gigForm.instrumentation}
              // onChange={handleChange}
              onChange={(e) => addInstrument(e)}
            >
              <option value="">Select an instrument</option>
              {instruments.map((instrument) => (
                <option value={instrument}>{instrument}</option>
              ))}
            </select>
          </label>
          <br />
          {gigForm.instrumentation.length > 0 &&
            <MusicianSelector/>
            }

          <br />
          <button className="border border-black w-24" type="submit">
            Submit
          </button>
          {/* User Selections */}
          <div className="flex flex-col mt-8">
            <span>Date: {gigForm.date}</span>
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

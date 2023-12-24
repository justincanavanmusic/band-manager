import { useState, useEffect } from "react"

import { GigForm } from "../../types/GigTypes"
import { checkInstrumentation } from "./utils/helpers"
import { CreateGigContext } from "./context/CreateGigContext"
import MusicianSelector from "./components/MusicianSelector"
import DateSelector from "./components/DateSelector"
import IcsInvite from "../IcsInvite/IcsInvite"
import GigInfo from "./components/GigInfo"
import InstrumentSelector from "./components/InstrumentSelector"
import EventLocationInput from "./components/EventLocationInput"

const GigCreate = () => {
  const [gigForm, setGigForm] = useState<GigForm>({
    name: "",
    location: "",
    startTime: new Date(),
    endTime: new Date(),
    instrumentation: [],
    selectedMusicians: [],
  })

  useEffect(() => {
    console.log("gigForm", gigForm)
  }, [gigForm])

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
          <EventLocationInput />
          <DateSelector />
          <InstrumentSelector />
          <br />
          {gigForm.instrumentation.length > 0 && <MusicianSelector />}

          <br />
          <button className="border border-black w-24" type="submit">
            Submit
          </button>
          <GigInfo />
          <IcsInvite />
        </div>
      </form>
    </CreateGigContext.Provider>
  )
}

export default GigCreate

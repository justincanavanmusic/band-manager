import { useContext } from "react"
import { CreateGigContext } from "../context/CreateGigContext"
import { areDatesTheSame, parseDate } from "../utils/dateTime"
import type { Instrument, Musician } from "../../../types/GigTypes"

const GigInfo = () => {
  const { gigForm, setGigForm } = useContext(CreateGigContext)

  const removeMusician = (selectedMusician: Musician) => {
    let filteredMusicians = gigForm.selectedMusicians.filter(
      (musician) => musician !== selectedMusician
    )

    setGigForm({
      ...gigForm,
      selectedMusicians: filteredMusicians,
    })
  }

  const removeInstrument = (selectedInstrument: Instrument) => {
    let filteredInstruments = gigForm.instrumentation.filter(
      (instrument) => selectedInstrument !== instrument
    )
    setGigForm({
      ...gigForm,
      instrumentation: filteredInstruments,
    })
  }

  return (
    <div className="flex flex-col mt-8">
      <span>
        {areDatesTheSame(gigForm.startTime, gigForm.endTime)
          ? "Date: "
          : "Start Date: "}{" "}
        {parseDate(gigForm.startTime).parsedDate}{" "}
      </span>
      <span>Start Time: {parseDate(gigForm.startTime).parsedTime}</span>
      {!areDatesTheSame(gigForm.startTime, gigForm.endTime) && (
        <>
          <br></br>

          <span>End Date: {parseDate(gigForm.endTime).parsedDate} </span>
        </>
      )}
      <span>End Time: {parseDate(gigForm.endTime).parsedTime}</span>
      <br></br>
      <span>
        Instrumentation:{" "}
        {gigForm.instrumentation.map((instrument: Instrument) => (
          <div>
            <span className="">{instrument} - </span>
            <button onClick={() => removeInstrument(instrument)}>X</button>
          </div>
        ))}
      </span>
      <span>
        Musicians:{" "}
        {gigForm.selectedMusicians.map((musician: Musician) => (
          <div>
            <span className="">{musician.name} - </span>
            <span className="">{musician.instrument} - </span>
            <button onClick={() => removeMusician(musician)}>X</button>
          </div>
        ))}
      </span>
    </div>
  )
}
export default GigInfo

import { useContext } from "react"
import { CreateGigContext } from "../context/CreateGigContext"
import { areDatesTheSame, parseDate } from "../utils/dateTime"
import type { Instrument, Musician } from "../../../types/GigTypes"
import toast, {Toaster} from "react-hot-toast"


const GigInfo = () => {
  const { gigForm, setGigForm } = useContext(CreateGigContext)

  const removeMusician = (selectedMusician: Musician) => {
    const filteredMusicians = gigForm.selectedMusicians.filter(
      (musician) => musician !== selectedMusician
    )

    setGigForm({
      ...gigForm,
      selectedMusicians: filteredMusicians,
    })

    toast.error(
      `${selectedMusician.name} (${selectedMusician.instrument}) was removed from the gig!`
    )
  }

  const removeInstrument = (selectedInstrument: Instrument) => {
    const filteredInstruments = gigForm.instrumentation.filter(
      (instrument) => selectedInstrument !== instrument
    )

    const filteredMusicians = gigForm.selectedMusicians.filter((musician)=> musician.instrument !== selectedInstrument )

    setGigForm({
      ...gigForm,
      instrumentation: filteredInstruments,
      selectedMusicians: filteredMusicians
    })


    toast.error(
      ` ${selectedInstrument} was removed from the gig!`
    )

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
      <br></br>
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
      <Toaster />
    </div>
  )
  
}
export default GigInfo

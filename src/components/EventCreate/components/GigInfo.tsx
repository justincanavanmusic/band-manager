import { useContext } from "react"
import { CreateGigContext } from "../context/CreateGigContext"
import { areDatesTheSame, parseDate } from "../utils/dateTime"
import type { Instrument, Musician } from "../../../types/GigTypes"

const GigInfo = () => {
  const { gigForm } = useContext(CreateGigContext)

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
  )
}
export default GigInfo

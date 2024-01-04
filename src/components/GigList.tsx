import { useState } from "react"
import { gigList } from "../seedData"
import { parseDate } from "./EventCreate/utils/dateTime"

const EventList = () => {
  const [viewMusicians, setViewMusicians] = useState<boolean>(false)
  const [eventTargetIndexArr, setEventTargetIndexArr] = useState<number[]>([])

  const showHideMusicians = (index: number): void => {
    if (eventTargetIndexArr.length === 0) {
      setEventTargetIndexArr([...eventTargetIndexArr, index])
      if (!viewMusicians) {
        setViewMusicians(true)
      }
    }

    if (!eventTargetIndexArr.includes(index)) {
      setEventTargetIndexArr([...eventTargetIndexArr, index])
    }

    if (eventTargetIndexArr.includes(index)) {
      let filteredArr = eventTargetIndexArr.filter((target) => target !== index)
      setEventTargetIndexArr(filteredArr)
    }
  }

  return (
    <div className="flex flex-col gap-8">
      <h2 className="mb-4 text-[2rem]">Upcoming Events</h2>
      {gigList.map((gig, index) => (
        <div className="flex flex-col">
          <span>Date: {parseDate(gig.startTime).parsedDate}</span>
          <span>Location: {gig.location}</span>
          <span>Pay: {gig.payPerPerson}</span>
          <button
            onClick={() => showHideMusicians(index)}
            className="border w-[8rem]"
          >
            {viewMusicians && eventTargetIndexArr?.includes(index)
              ? "Hide Musician List"
              : "View Musician List"}
          </button>
          {viewMusicians && eventTargetIndexArr?.includes(index) && (
            <div className="">
              {gig.selectedMusicians.map((musician) => (
                <div className="flex">
                  <p>{musician.name}</p>
                  <p>{musician.instrument}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default EventList

import { useState } from "react"
import { musicians } from "../seedData"
import { eventList } from "../seedData"

const EventList = () => {
  const [viewMusicians, setViewMusicians] = useState<boolean>(false)
  const [eventTargetIndex, setEventTargetIndex] = useState<null | number>(null)

  const showHideMusicians = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    index: number
  ) => {
    setEventTargetIndex(index)
    console.log("e", e.target)
    console.log("index", index)
    viewMusicians ? setViewMusicians(false) : setViewMusicians(true)
  }

  return (
    <div className="flex flex-col gap-8">
      <h2 className="mb-4 text-[2rem]">Events</h2>
      {eventList.map((event, index) => (
        <div className="flex flex-col">
          <span>Date: {event.date}</span>
          <span>Location: {event.location}</span>
          <span>Pay: {event.pay}</span>
          <button
            onClick={(e) => showHideMusicians(e, index)}
            className="border w-[8rem]"
          >
            {viewMusicians && eventTargetIndex === index
              ? "Hide Musician List"
              : "View Musician List"}
          </button>
          {viewMusicians && eventTargetIndex === index && (
            <div className="">
              {event.musicians.map((musician) => (
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

import { useState } from "react"
import { musicians } from "../seedData"
import { eventList } from "../seedData"

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
      {eventList.map((event, index) => (
        <div className="flex flex-col">
          <span>Date: {event.date}</span>
          <span>Location: {event.location}</span>
          <span>Pay: {event.pay}</span>
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

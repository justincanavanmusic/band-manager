import { useContext } from "react"
import { CreateGigContext } from "../context/CreateGigContext"

const EventLocationInput = () => {
  const { handleChange } = useContext(CreateGigContext)

  return (
    <>
      <label>
        Event Name:
        <input
          className="border"
          type="text"
          onChange={(e) => handleChange(e)}
          name="name"
        ></input>
      </label>
      <label>
        Location:
        <input
          className="border"
          type="text"
          onChange={(e) => handleChange(e)}
          name="location"
        ></input>
      </label>
    </>
  )
}

export default EventLocationInput

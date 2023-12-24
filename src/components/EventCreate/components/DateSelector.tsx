import { CreateGigContext } from "../context/CreateGigContext"
import { useContext } from "react"
import DateTimePicker from "../../DateTimePicker/DateTimePicker"

const DateSelector = () => {
  const { gigForm, handleChange } = useContext(CreateGigContext)

  return (
    <div>
      <label>
        Date:
        <DateTimePicker />
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
    </div>
  )
}

export default DateSelector

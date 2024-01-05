import DateTimePicker from "../../DateTimePicker/DateTimePicker"

const startOrEnd = ["Start Date", "End Date"]

const DateSelector = () => {
  return (
    <div className="mt-8">
      {startOrEnd.map((selection, index) => (
        <label>
          {selection}

          <DateTimePicker
            index={index}
          />
        </label>
      ))}

      <br></br>
    </div>
  )
}

export default DateSelector

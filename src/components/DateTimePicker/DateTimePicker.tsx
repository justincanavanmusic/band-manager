import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import { CreateGigContext } from "../EventCreate/context/CreateGigContext"
import { useContext } from "react"
import { compareTimes } from "../EventCreate/utils/dateTime"

type DateTimeProps = {
  index?: number
}

const DateTimePicker: React.FC<DateTimeProps> = ({ index }) => {
  const { gigForm, setGigForm } = useContext(CreateGigContext)

  const handleDateChange = (date: Date) => {
    if (index === 0) {
      setGigForm({
        ...gigForm,
        startTime: date,
      })
    } else {
      setGigForm({
        ...gigForm,
        endTime: date,
      })
    }
  }

  return (
    <div>
      <DatePicker
        className={
          compareTimes(gigForm.startTime, gigForm.endTime)
            ? "border border-green-500"
            : "border border-red-500"
        }
        showIcon
        showTimeSelect
        timeIntervals={15}
        dateFormat="MM/dd/yyyy h:mm aa"
        selected={index === 0 ? gigForm.startTime : gigForm.endTime}
        onChange={(date) => {
          date instanceof Date && handleDateChange(date)
        }}
      />
    </div>
  )
}

export default DateTimePicker

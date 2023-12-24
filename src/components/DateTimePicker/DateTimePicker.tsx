import { useState } from "react"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import { CreateGigContext } from "../EventCreate/context/CreateGigContext"
import { useContext } from "react"

const DateTimePicker = () => {
  const { gigForm, setGigForm } = useContext(CreateGigContext)

  const handleDateChange = (date: Date) => {
    setGigForm({
      ...gigForm,
      date
    })
  }

  return (
    <div>
      <DatePicker
        selected={gigForm.date}
        onChange={(date) => {
          date instanceof Date && handleDateChange(date)
        }}
      />
    </div>
  )
}

export default DateTimePicker

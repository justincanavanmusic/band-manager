import { useState } from "react"
import { musicians } from "../../seedData"
import { instruments, EventForm, Instrument } from "../../types/EventTypes"
import { addMusician, addInstrumentToArr } from "./utils/helpers"

const EventCreate = () => {
  const addInstrument = (e) => {
    const { value } = e.target
    const newValue = value as Instrument

    if (formData.instrumentation.includes(e.target.value)) {
      return
      //modal if instrument is already included
    }

    let result: Instrument[] = addInstrumentToArr(
      newValue,
      formData.instrumentation
    )

    setFormData({ ...formData, instrumentation: result })
  }

  const [formData, setFormData] = useState<EventForm>({
    clientName: "",
    date: "",
    startTime: "",
    // instrumentation: ["Drums", "Keyboards", "Bass", "Vocals"],
    instrumentation: [],
    selectedMusicians: [],
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevFormData: EventForm) => ({
      ...prevFormData,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col">
        <label>
          Client Name:
          <input
            className="border border-black"
            type="text"
            name="clientName"
            value={formData.clientName}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Date:
          <input
            className="border border-black"
            type="text"
            name="date"
            value={formData.date}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Start Time:
          <input
            className="border border-black"
            type="text"
            name="startTime"
            value={formData.startTime}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Instrumentation Needed:
          <select
            className="border border-black"
            name="instrumentation"
            value={formData.instrumentation}
            // onChange={handleChange}
            onChange={(e) => addInstrument(e)}
          >
            <option value="">Select an instrument</option>
            {instruments.map((instrument) => (
              <option value={instrument}>{instrument}</option>
            ))}
          </select>
        </label>
        <br />
        {/* <label>
          Add Musician:
          <select
            className="border border-black"
            name="selectedMusician"
            value={formData.selectedMusicians}
            onChange={handleChange}
          >
            <option value="">Select a Musician</option>
            {musicians.map((musician, index) => (
              <option onClick={(e)=>addMusician(e)} key={index} value={musician.name}>
                {musician.name + " - " + musician.instrument}
              </option>
            ))}
          </select>
        </label> */}
        <br />
        <button className="border border-black w-24" type="submit">
          Submit
        </button>
        {/* User Selections */}
        <div className="flex flex-col mt-8">
          <span>Client Name: {formData.clientName}</span>
          <span>Date: {formData.date}</span>
          <span>Start Time: {formData.startTime}</span>
          <span>
            Instrumentation:{" "}
            {formData.instrumentation.map((instrument: Instrument) => (
              <span className="">{instrument} - </span>
            ))}
          </span>
        </div>
      </div>
    </form>
  )
}

export default EventCreate

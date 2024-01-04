import { AddToCalendarButton } from "add-to-calendar-button-react"
import { CreateGigContext } from "../EventCreate/context/CreateGigContext"
import { useContext } from "react"
import { parseDate } from "../EventCreate/utils/dateTime"

const IcsInvite = () => {
  const { gigForm } = useContext(CreateGigContext)
  let parsedStartForCal = parseDate(gigForm.startTime).parsedDateForCal
  let parsedEndForCal = parseDate(gigForm.endTime).parsedDateForCal


  return (
    <AddToCalendarButton
    //location
      name={gigForm.name}
      // organizer="Justin Canavan|justincanavanmusic@gmail.com"
      options={["Apple", "Google", 'iCal','Outlook.com','Yahoo']}
      location={gigForm.location}
      startDate={parsedStartForCal}
      endDate={parsedEndForCal}
      startTime={parseDate(gigForm.startTime).parsedTimeForCal}
      endTime={parseDate(gigForm.endTime).parsedTimeForCal}
      timeZone="America/Chicago"

    ></AddToCalendarButton>
  )
}

export default IcsInvite

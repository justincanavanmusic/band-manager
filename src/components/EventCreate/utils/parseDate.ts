import { DateTime } from "luxon"

export const parseDate = (date: Date) => {
  let luxonDateTime = DateTime.fromJSDate(date)
  let dateTimeCST = luxonDateTime.setZone("America/Chicago")
  let dayOfWeek = dateTimeCST.weekdayLong

  let timeZone = dateTimeCST.offsetNameShort

  let parsedDate =
    dayOfWeek + ", " + dateTimeCST.toLocaleString() + ", " + timeZone

  return parsedDate
}

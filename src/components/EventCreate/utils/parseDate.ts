import { DateTime } from "luxon"

const parseHour = (hour: number) => {
  if (hour > 12) {
    hour = hour - 12
    if (hour < 10) {
      return `0${hour}`
    } else {
      return hour
    }
  }
  if (hour === 0) {
    return "12"
  } else {
    return hour
  }
}

const parseMinute = (minute: number) => {
  if (minute < 10) {
    return `0${minute}`
  } else {
    return minute
  }
}

const getAmOrPm = (hour: number) => {
  if (hour <= 11) {
    return "AM"
  } else {
    return "PM"
  }
}

export const parseDate = (date: Date) => {
  let luxonDateTime = DateTime.fromJSDate(date)
  let dateTimeCST = luxonDateTime.setZone("America/Chicago")
  let dayOfWeek = dateTimeCST.weekdayLong
  let hour = dateTimeCST.hour
  let minute = dateTimeCST.minute

  console.log("dateTimeCST", dateTimeCST)

  let timeZone = dateTimeCST.offsetNameShort
  let amOrPm = getAmOrPm(hour)

  let parsedTime =
    parseHour(hour) + ":" + parseMinute(minute) + " " + amOrPm + ", " + timeZone

  console.log("parsedTime", parsedTime)

  let parsedDate =
    dayOfWeek + ", " + dateTimeCST.toLocaleString()

  return { parsedDate, parsedTime }
}

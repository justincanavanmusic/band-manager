import { DateTime } from "luxon"

const addZeroToHour = (hour: number) => {
  if (hour < 10) {
    return `0${hour}`
  } else {
    return hour
  }
}

export const compareTimes = (startTime: Date, endTime: Date) => {
  if (new Date(startTime) < new Date(endTime)) {
    // console.log("start time is valid", startTime, endTime)
    return true
  } else {
    // console.log("start time is invalid", startTime, endTime)
    return false
  }
}

const parseHour = (hour: number) => {
  if (hour > 12) {
    hour = hour - 12
    let isThereZero = addZeroToHour(hour)
    return isThereZero
  } else {
    if (hour === 0) {
      return "12"
    }
    let isThereZero = addZeroToHour(hour)
    return isThereZero
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
  let timeZone = dateTimeCST.offsetNameShort
  let year = dateTimeCST.year
  let month = dateTimeCST.month
  let day = dateTimeCST.day

  let amOrPm = getAmOrPm(hour)

  let parsedTime =
    parseHour(hour) + ":" + parseMinute(minute) + " " + amOrPm + ", " + timeZone

  let parsedDate = dayOfWeek + ", " + dateTimeCST.toLocaleString()

  let parsedTimeForCal = parseHour(hour) + ":" + parseMinute(minute)
  let parsedDateForCal = `${year}-${parseMinute(month)}-${parseMinute(day)}`

  return { parsedDate, parsedTime, parsedTimeForCal, parsedDateForCal }
}

export const areDatesTheSame = (startTime: Date, endTime: Date) => {
  if (parseDate(startTime).parsedDate === parseDate(endTime).parsedDate) {
    return true
  } else {
    return false
  }
}

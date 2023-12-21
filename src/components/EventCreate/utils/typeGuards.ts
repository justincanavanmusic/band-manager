import { Instrument, Musician } from "../../../types/GigTypes"

export const isInstrument = (param: any): param is Instrument => {
  return (
    param === "Guitar" ||
    param === "Bass" ||
    param === "Keyboards" ||
    param === "Drums" ||
    param === "Saxophone" ||
    param === "Trumpet" ||
    param === "Trombone" ||
    param === "Vocals"
  )
}

export const isMusician = (param: any): param is Musician => {
  return (
    typeof param === "object" &&
    param !== null &&
    "name" in param &&
    "instrument" in param
  )
}

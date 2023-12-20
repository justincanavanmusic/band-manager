import { Instrument } from "../../../types/GigTypes"

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
  );
}

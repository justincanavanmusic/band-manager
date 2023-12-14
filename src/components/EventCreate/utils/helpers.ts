import { Instrument } from "../../../types/EventTypes"

export const addInstrumentToArr = (eTarget: Instrument, arr: Instrument[]) => {
  let arrPlusNew: Instrument[] = [...arr, eTarget]


  return arrPlusNew
}

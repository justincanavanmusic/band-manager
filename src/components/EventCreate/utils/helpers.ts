import { GigForm, Instrument, Musician } from "../../../types/GigTypes"
import { musicians } from "../../../seedData"
import { isInstrument } from "./typeGuards"

export const addInstrumentToArr = (eTarget: Instrument, arr: Instrument[]) => {
  let arrPlusNew: Instrument[] = [...arr, eTarget]

  return arrPlusNew
}

export const addMusician = (
  e: React.ChangeEvent<HTMLSelectElement>,
  form: GigForm
) => {
  const { value } = e.target
  let result: Musician[] = musicians.filter(
    (musician) => musician.name === value
  )

  let addedMusician: Musician = result[0]

  if (form.selectedMusicians.includes(addedMusician)) {
    console.log("modal - this musician is already on the gig!")

    //modal - this musician is already on the gig!
    return "Duplicate"
  }
  let isThisInstrumentPresent: (Instrument | "")[] = []
  if (form.selectedMusicians) {
    isThisInstrumentPresent = form.selectedMusicians.map((musician) => {
      if (musician.instrument === addedMusician.instrument) {
        return musician.instrument
      } else {
        return ""
      }
    })
  }

  if (isInstrument(isThisInstrumentPresent[0])) {
    console.log(
      `confirmation modal - are you sure you want to add another ${addedMusician.instrument}?`
    )
    return isThisInstrumentPresent[0]
  } else {
    let arrPlusNew: Musician[] = [...form.selectedMusicians, addedMusician]
    console.log(`${addedMusician.name} (${addedMusician.instrument}) is added!`)

    return arrPlusNew
  }
}

export const checkInstrumentation = (
  instruments: Instrument[],
  musicians: Musician[]
) => {
  const instrumentObj: { [key: string]: string | null } = {}

  instruments.forEach(
    (instrument) => (instrumentObj[instrument.toLowerCase()] = null)
  )

  for (let i = 0; i < instruments.length; i++) {
    for (let j = 0; j < musicians.length; j++) {
      if (instruments[i].includes(musicians[j].instrument)) {
        let instrumentKey = instruments[i].toLowerCase()
        instrumentObj[instrumentKey] = musicians[j].name
      } else {
        null
      }
    }
  }

  let values = Object.values(instrumentObj)
  let instArr = Object.entries(instrumentObj)
  let result = values.filter((value) => value !== null)

  let neededInstruments: string[] = []

  instArr.map((inst) => {
    let key = inst[0]
    let value = inst[1]

    if (value === null) {
      neededInstruments.push(key)
    }
    console.log("neededInstruments", neededInstruments)
    return neededInstruments
  })

  if (result.length === instruments.length) {
    return true
  } else {
    return [false, neededInstruments]
  }
}

import { GigForm, Instrument, Musician } from "../../../types/GigTypes"
import { musicians } from "../../../seedData"
import { isInstrument } from "./typeGuards"

export const addInstrumentToArr = (eTarget: Instrument, arr: Instrument[]) => {
  const arrPlusNew: Instrument[] = [...arr, eTarget]

  return arrPlusNew
}

export const addMusician = (
  e: React.ChangeEvent<HTMLSelectElement>,
  form: GigForm
) => {
  const { value } = e.target
  const result: Musician[] = musicians.filter(
    (musician) => musician.name === value
  )

  const addedMusician: Musician = result[0]

  if (form.selectedMusicians.includes(addedMusician)) {
    console.log("modal - this musician is already on the gig!")

    //modal - this musician is already on the gig!
    return "Duplicate"
  }
  let isThisInstrumentPresent: Instrument | false = false
  if (form.selectedMusicians) {
    const result = form.selectedMusicians.find(
      (musician) => musician.instrument === addedMusician.instrument
    )

    if (result) {
      isThisInstrumentPresent = addedMusician.instrument
    } else {
      isThisInstrumentPresent = false
    }
  }

  if (isInstrument(isThisInstrumentPresent)) {
    console.log(
      `confirmation modal - are you sure you want to add another ${addedMusician.instrument}?`
    )
    return addedMusician
  } else {

    const arrPlusNew: Musician[] = [...form.selectedMusicians, addedMusician]
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
        const instrumentKey = instruments[i].toLowerCase()
        instrumentObj[instrumentKey] = musicians[j].name
      } else {
        null
      }
    }
  }

  const values = Object.values(instrumentObj)
  const instArr = Object.entries(instrumentObj)
  const result = values.filter((value) => value !== null)

  const neededInstruments: string[] = []

  instArr.map((inst) => {
    const key = inst[0]
    const value = inst[1]

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

export const addMusicianAfterConfirm = (
  e: React.ChangeEvent<HTMLInputElement>,
  addedMusician: Musician,
  form: GigForm
) => {
  const { value } = e.target
  if (value === "no") {
    return
  } else {
    const arrPlusNew: Musician[] = [...form.selectedMusicians, addedMusician]
    console.log(`${addedMusician.name} (${addedMusician.instrument}) is added!`)

    return arrPlusNew
  }
}

import { GigForm, Instrument, Musician } from "../../../types/GigTypes"
import { musicians } from "../../../seedData"

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
      return 
    }

    if(form.instrumentation.includes(addedMusician.instrument)) {
      //`confirmation modal - are you sure you want to add another ${addedMusician.instrument}?`
        console.log(`confirmation modal - are you sure you want to add another ${addedMusician.instrument}?`)
    }

  let arrPlusNew: Musician[] = [...form.selectedMusicians, addedMusician]

  return arrPlusNew
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
  let result = values.filter((value) => value !== null)

  if (result.length === instruments.length) {
    return true
  } else {
    return false
  }
}

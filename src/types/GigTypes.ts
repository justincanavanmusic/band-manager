// export type Gig = {
//   date: Date
//   location: string
//   pay: string
//   musicians: Musician[]
//   instruments: Instrument[]
// }

export type Gig = {
  name: string
  // date: Date
  startTime: Date
  endTime: Date
  location: string
  instrumentation: Instrument[]
  selectedMusicians: Musician[]
  payPerPerson: string
}

export type Musician = {
  name: string
  instrument: Instrument
  phoneNumber: string
  email: string
}

// type Location = {
//   address: "",
//   city: "",
//   state: "",
//   zipCode: "",

// }

export type GigForm = {
  name: string
  // date: Date
  startTime: Date
  endTime: Date
  location: string
  instrumentation: Instrument[]
  selectedMusicians: Musician[]
  payPerPerson: string
}

export type Instrument =
  | "Guitar"
  | "Bass"
  | "Keyboards"
  | "Drums"
  | "Saxophone"
  | "Trumpet"
  | "Trombone"
  | "Vocals"

export const instruments: Instrument[] = [
  "Guitar",
  "Bass",
  "Keyboards",
  "Drums",
  "Saxophone",
  "Trumpet",
  "Trombone",
  "Vocals",
]

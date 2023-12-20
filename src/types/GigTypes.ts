export type Gig = {
  date: string
  location: string
  pay: string
  musicians: Musician[]
  instruments: Instrument[]
}

export type Musician = {
  name: string
  instrument: Instrument
}

export type GigForm = {
    clientName: string
    date: string
    startTime: string
    instrumentation: Instrument[]
    selectedMusicians: Musician[]
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
  ];

export type Event = {
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

export type Instrument = "Guitar" | "Bass" | "Keyboards" | "Drums" | "Saxophone" | "Trumpet" | "Trombone" | "Vocals";

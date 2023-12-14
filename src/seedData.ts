import type { Musician } from "./types/EventTypes";
import type {Event} from "./types/EventTypes"

export const musicians: Musician[] = [
    { name: "John Doe", instrument: "Guitar" },
    { name: "Jane Smith", instrument: "Keyboards" },
    { name: "Bob Johnson", instrument: "Saxophone" },
    { name: "Alice Davis", instrument: "Drums" },
    { name: "Chris Wilson", instrument: "Bass" },
    { name: "Eva White", instrument: "Trumpet" },
    { name: "David Lee", instrument: "Guitar" },
    { name: "Grace Miller", instrument: "Keyboards" },
    { name: "Sam Brown", instrument: "Saxophone" },
    { name: "Olivia Taylor", instrument: "Trombone" },
];

//client name
//start time
//end time
//cocktail hour
//ceremony

export const eventList: Event[] = [
    {
      date: "Apr 14, 2024 06:30 PM",
      location: "Concert Hall A",
      pay: "$1000",
      musicians: [musicians[0], musicians[1], musicians[2], musicians[4], musicians[8]],
      instruments: ["Guitar", "Keyboards", "Saxophone", "Bass", "Trombone"],
    },
    {
      date: "Feb 22, 2024 08:00 PM",
      location: "Jazz Club B",
      pay: "$800",
      musicians: [musicians[3], musicians[4], musicians[5], musicians[7], musicians[9]],
      instruments: ["Drums", "Bass", "Trumpet", "Keyboards", "Vocals"],
    },
    {
      date: "Mar 10, 2024 07:15 PM",
      location: "Community Center C",
      pay: "$1200",
      musicians: [musicians[6], musicians[7], musicians[2], musicians[3], musicians[5]],
      instruments: ["Guitar", "Keyboards", "Saxophone", "Drums", "Trumpet"],
    },
    {
      date: "Apr 05, 2024 09:00 PM",
      location: "Outdoor Festival D",
      pay: "$1500",
      musicians: [musicians[8], musicians[9], musicians[1], musicians[3], musicians[4]],
      instruments: ["Trombone", "Vocals", "Keyboards", "Drums", "Bass"],
    },
  ];

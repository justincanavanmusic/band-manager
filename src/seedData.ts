import type { Musician } from "./types/GigTypes";
import type {Gig} from "./types/GigTypes"

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
  { name: "Mike Anderson", instrument: "Vocals" },
  { name: "Sophie Green", instrument: "Bass" },
  { name: "Alex Turner", instrument: "Guitar" },
  { name: "Lily Martinez", instrument: "Keyboards" },
  { name: "Tom White", instrument: "Saxophone" },
  { name: "Emily Harris", instrument: "Drums" },
  { name: "Jack Robinson", instrument: "Trumpet" },
  { name: "Emma Davis", instrument: "Vocals" },
  { name: "Ryan Miller", instrument: "Bass" },
  { name: "Mia Johnson", instrument: "Guitar" },
  { name: "Noah Wilson", instrument: "Keyboards" },
  { name: "Sophia Lee", instrument: "Saxophone" },
  { name: "Daniel Brown", instrument: "Drums" },
  { name: "Ava Taylor", instrument: "Trumpet" },
  { name: "Logan Smith", instrument: "Vocals" },
  { name: "Zoe White", instrument: "Bass" },
  { name: "Ethan Taylor", instrument: "Guitar" },
  { name: "Isabella Martinez", instrument: "Keyboards" },
  { name: "Jackson Davis", instrument: "Saxophone" },
  { name: "Oliver Harris", instrument: "Drums" },
  { name: "Amelia Turner", instrument: "Trumpet" },
  { name: "William Green", instrument: "Vocals" },
  { name: "Natalie Anderson", instrument: "Bass" },
  { name: "Henry Wilson", instrument: "Guitar" },
  { name: "Chloe Robinson", instrument: "Keyboards" },
  { name: "Aiden Brown", instrument: "Saxophone" },
  { name: "Samantha Taylor", instrument: "Drums" },
  { name: "Elijah White", instrument: "Trumpet" },
  { name: "Avery Lee", instrument: "Vocals" },
  { name: "Grace Martinez", instrument: "Bass" },
  { name: "Liam Johnson", instrument: "Guitar" },
  { name: "Madison Davis", instrument: "Keyboards" },
  { name: "Carter Harris", instrument: "Saxophone" },
  { name: "Abigail Turner", instrument: "Drums" },
  { name: "Owen Smith", instrument: "Trumpet" },
  { name: "Ella Brown", instrument: "Vocals" },
  { name: "Nathan Taylor", instrument: "Bass" },
];

//client name
//start time
//end time
//cocktail hour
//ceremony

export const eventList: Gig[] = [
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

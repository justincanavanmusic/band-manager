import type { Musician } from "./types/GigTypes"
import type { Gig } from "./types/GigTypes"

export const musicians: Musician[] = [
  { name: "John Doe", instrument: "Guitar", phoneNumber: "123-456-7890", email: "john.doe@example.com" },
  { name: "Jane Smith", instrument: "Keyboards", phoneNumber: "234-567-8901", email: "jane.smith@example.com" },
  { name: "Bob Johnson", instrument: "Saxophone", phoneNumber: "345-678-9012", email: "bob.johnson@example.com" },
  { name: "Alice Davis", instrument: "Drums", phoneNumber: "456-789-0123", email: "alice.davis@example.com" },
  { name: "Chris Wilson", instrument: "Bass", phoneNumber: "567-890-1234", email: "chris.wilson@example.com" },
  { name: "Eva White", instrument: "Trumpet", phoneNumber: "678-901-2345", email: "eva.white@example.com" },
  { name: "David Lee", instrument: "Guitar", phoneNumber: "789-012-3456", email: "david.lee@example.com" },
  { name: "Grace Miller", instrument: "Keyboards", phoneNumber: "890-123-4567", email: "grace.miller@example.com" },
  { name: "Sam Brown", instrument: "Saxophone", phoneNumber: "901-234-5678", email: "sam.brown@example.com" },
  { name: "Olivia Taylor", instrument: "Trombone", phoneNumber: "012-345-6789", email: "olivia.taylor@example.com" },
  { name: "Mike Anderson", instrument: "Vocals", phoneNumber: "123-456-7890", email: "mike.anderson@example.com" },
  { name: "Sophie Green", instrument: "Bass", phoneNumber: "234-567-8901", email: "sophie.green@example.com" },
  { name: "Alex Turner", instrument: "Guitar", phoneNumber: "345-678-9012", email: "alex.turner@example.com" },
  { name: "Lily Martinez", instrument: "Keyboards", phoneNumber: "456-789-0123", email: "lily.martinez@example.com" },
  { name: "Tom White", instrument: "Saxophone", phoneNumber: "567-890-1234", email: "tom.white@example.com" },
  { name: "Emily Harris", instrument: "Drums", phoneNumber: "678-901-2345", email: "emily.harris@example.com" },
  { name: "Jack Robinson", instrument: "Trumpet", phoneNumber: "789-012-3456", email: "jack.robinson@example.com" },
  { name: "Emma Davis", instrument: "Vocals", phoneNumber: "890-123-4567", email: "emma.davis@example.com" },
  { name: "Ryan Miller", instrument: "Bass", phoneNumber: "901-234-5678", email: "ryan.miller@example.com" },
  { name: "Mia Johnson", instrument: "Guitar", phoneNumber: "012-345-6789", email: "mia.johnson@example.com" },
  { name: "Noah Wilson", instrument: "Keyboards", phoneNumber: "123-456-7890", email: "noah.wilson@example.com" },
  { name: "Sophia Lee", instrument: "Saxophone", phoneNumber: "234-567-8901", email: "sophia.lee@example.com" },
  { name: "Daniel Brown", instrument: "Drums", phoneNumber: "345-678-9012", email: "daniel.brown@example.com" },
  { name: "Ava Taylor", instrument: "Trumpet", phoneNumber: "456-789-0123", email: "ava.taylor@example.com" },
  { name: "Logan Smith", instrument: "Vocals", phoneNumber: "567-890-1234", email: "logan.smith@example.com" },
  { name: "Zoe White", instrument: "Bass", phoneNumber: "678-901-2345", email: "zoe.white@example.com" },
  { name: "Ethan Taylor", instrument: "Guitar", phoneNumber: "789-012-3456", email: "ethan.taylor@example.com" },
  { name: "Isabella Martinez", instrument: "Keyboards", phoneNumber: "890-123-4567", email: "isabella.martinez@example.com" },
  { name: "Jackson Davis", instrument: "Saxophone", phoneNumber: "901-234-5678", email: "jackson.davis@example.com" },
  { name: "Oliver Harris", instrument: "Drums", phoneNumber: "012-345-6789", email: "oliver.harris@example.com" },
  { name: "Amelia Turner", instrument: "Trumpet", phoneNumber: "123-456-7890", email: "amelia.turner@example.com" },
  { name: "William Green", instrument: "Vocals", phoneNumber: "234-567-8901", email: "william.green@example.com" },
  { name: "Natalie Anderson", instrument: "Bass", phoneNumber: "345-678-9012", email: "natalie.anderson@example.com" },
  { name: "Henry Wilson", instrument: "Guitar", phoneNumber: "456-789-0123", email: "henry.wilson@example.com" },
  { name: "Chloe Robinson", instrument: "Keyboards", phoneNumber: "567-890-1234", email: "chloe.robinson@example.com" },
  { name: "Aiden Brown", instrument: "Saxophone", phoneNumber: "678-901-2345", email: "aiden.brown@example.com" },
  { name: "Samantha Taylor", instrument: "Drums", phoneNumber: "789-012-3456", email: "samantha.taylor@example.com" },
  { name: "Elijah White", instrument: "Trumpet", phoneNumber: "890-123-4567", email: "elijah.white@example.com" },
  { name: "Avery Lee", instrument: "Vocals", phoneNumber: "901-234-5678", email: "avery.lee@example.com" },
  { name: "Grace Martinez", instrument: "Bass", phoneNumber: "012-345-6789", email: "grace.martinez@example.com" },
  { name: "Liam Johnson", instrument: "Guitar", phoneNumber: "123-456-7890", email: "liam.johnson@example.com" },
  { name: "Madison Davis", instrument: "Keyboards", phoneNumber: "234-567-8901", email: "madison.davis@example.com" },
  { name: "Carter Harris", instrument: "Saxophone", phoneNumber: "345-678-9012", email: "carter.harris@example.com" },
  { name: "Abigail Turner", instrument: "Drums", phoneNumber: "456-789-0123", email: "abigail.turner@example.com" },
  { name: "Owen Smith", instrument: "Trumpet", phoneNumber: "567-890-1234", email: "owen.smith@example.com" },
  { name: "Ella Brown", instrument: "Vocals", phoneNumber: "678-901-2345", email: "ella.brown@example.com" },
  { name: "Nathan Taylor", instrument: "Bass", phoneNumber: "789-012-3456", email: "nathan.taylor@example.com" },
];

export const gigList: Gig[] = [
  {
    name: "Concert at Concert Hall A",
    startTime: new Date("2024-04-14T18:30:00"),
    endTime: new Date("2024-04-14T23:59:59"),
    location: "Concert Hall A",
    instrumentation: ["Guitar", "Keyboards", "Saxophone", "Bass", "Trombone"],
    selectedMusicians: [
      musicians[0],
      musicians[1],
      musicians[2],
      musicians[4],
      musicians[8],
    ],
    payPerPerson: "$200",
  },
  {
    name: "Jazz Night at Jazz Club B",
    startTime: new Date("2024-02-22T20:00:00"),
    endTime: new Date("2024-02-22T23:59:59"),
    location: "Jazz Club B",
    instrumentation: ["Drums", "Bass", "Trumpet", "Keyboards", "Vocals"],
    selectedMusicians: [
      musicians[3],
      musicians[4],
      musicians[5],
      musicians[7],
      musicians[9],
    ],
    payPerPerson: "$160",
  },
  {
    name: "Community Jam at Community Center C",
    startTime: new Date("2024-03-10T19:15:00"),
    endTime: new Date("2024-03-10T23:59:59"),
    location: "Community Center C",
    instrumentation: ["Guitar", "Keyboards", "Saxophone", "Drums", "Trumpet"],
    selectedMusicians: [
      musicians[6],
      musicians[7],
      musicians[2],
      musicians[3],
      musicians[5],
    ],
    payPerPerson: "$240",
  },
  {
    name: "Outdoor Festival at Festival D",
    startTime: new Date("2024-04-05T21:00:00"),
    endTime: new Date("2024-04-05T23:59:59"),
    location: "Outdoor Festival D",
    instrumentation: ["Trombone", "Vocals", "Keyboards", "Drums", "Bass"],
    selectedMusicians: [
      musicians[8],
      musicians[9],
      musicians[1],
      musicians[3],
      musicians[4],
    ],
    payPerPerson: "$300",
  },
];
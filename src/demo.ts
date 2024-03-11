// CH1

// class Contact {
//   id;
//   name;
//   birthDate;
// }

// CH2
// let x: number
// let y: string
// let z: boolean
// let a: Date
// let b: string[]
// let c: any
// let d: string[]

// c = "hello"
// c = 123
// d = "Hello" as any

//interface
interface Contact extends Address {
  id: number,
  name: string,
  birthDate?: Date;
}

interface Address {
  line1?: string,
  line2?: string,
  province?: string,
  region?: string,
  postalCode?: string
}

let primaryContact: Contact = {
  // birthDate: new Date("01-01-1980"),
  id: 12345,
  name: "jamie johnson",
  postalCode: "123"
}


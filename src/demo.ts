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
// interface Contact extends Address {
//   id: number,
//   name: string,
//   birthDate?: Date;
// }

// interface Address {
//   line1?: string,
//   line2?: string,
//   province?: string,
//   region?: string,
//   postalCode?: string
// }

// let primaryContact: Contact = {
//   // birthDate: new Date("01-01-1980"),
//   id: 12345,
//   name: "jamie johnson",
//   postalCode: "123"
// }

//alias
/*
interface Contact {
  id: number,
  name: ContactName,
  birthDate?: Date;
  status: ContactStatus;
}

enum ContactStatus {
  Active = "active",
  Inactive = "inactive",
  New = "new"
}


let primaryContact: Contact = {
  birthDate: new Date("01-01-1980"),
  id: 12345,
  name: "jamie johnson",
  status: ContactStatus.Active,
}

type ContactName = string
*/

//functions
/*
interface Contact {
  id: number;
  name: string
  clone(name: string): Contact
}

function clone(source: Contact): Contact {
  return Object.apply({}, source);
}

const a: Contact = { id: 123, name: "Homer Simpson" };
const b = clone(a);

*/

//metatype using generics
/*
interface Contact {
  id: number;
  name: string
}
interface UserContact<TExternalId> {
  id: number;
  name: string,
  username: string,
  externalId: TExternalId,
  loadExternalId: Task<TExternalId>
}
function clone<T1, T2 extends T1>(source: T1): T2 {
  return Object.apply({}, source);
}

const a: Contact = { id: 123, name: "Homer Simpson" };
const b = clone<Contact, UserContact>(a);

const dateRange = { startDate: Date.now(), endDate: Date.now() }
const dateRangeCopy = clone(dateRange);
*/

type ContactName = string;

type ContactStatus = "active" | "inactive" | "new"

type ContactBirthDate = Date | number | string

interface Contact {
  id: number;
  name: ContactName;
  birthDate?: ContactBirthDate;
  status?: ContactStatus;
}

interface Address {
  line1: string;
  line2: string;
  province: string;
  region: string;
  postalCode: string;
}

type AddressableContact = Contact & Address

function getBirthDate(contact: Contact) {
  if (typeof contact.birthDate === "number") {
    return new Date(contact.birthDate);
  }
  else if (typeof contact.birthDate === "string") {
    return Date.parse(contact.birthDate)
  }
  else {
    return contact.birthDate
  }
}

let primaryContact: Contact = {
  id: 12345,
  name: "Jamie Johnson",
  status: "active"
}





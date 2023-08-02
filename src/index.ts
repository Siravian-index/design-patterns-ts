import { Database, Government } from "./patterns/creational/singleton";


// Singleton Pattern
const government = new Government("Colombian")
const government2 = new Government("Argentinian")

// console.log(government)
// console.log(government2)

const db = Database.getInstance()
const db2 = Database.getInstance()

// console.log(db)
// console.log(db2)


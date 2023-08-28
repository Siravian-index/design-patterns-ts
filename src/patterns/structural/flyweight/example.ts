import { Store } from "./flyweight";


const BOOK_TYPES = 2
const BOOKS_TO_INSERT = 10_000_000

function clientCode() {
  const store = new Store()
  
  for (let i = 0; i < BOOKS_TO_INSERT / BOOK_TYPES; i++) {
    // name and price varies
    // the other data is static
    store.storeBook("test", 200, "Action", "Publisher", "Stuff")
    store.storeBook("title", 200, "Fantasy", "Ingram", "More text")
  }

  // not fancy console.log
  console.log(`${BOOKS_TO_INSERT} Book inserted`)
  console.log("---------------------------------")
  console.log("Memory Usage:")
  console.log(`Book Size (20 bytes) * ${BOOKS_TO_INSERT} + BookTypes Size (30 bytes) * ${BOOK_TYPES}`)
  console.log("---------------------------------")
  console.log(`Total: ${Math.floor((BOOKS_TO_INSERT * 20 + BOOK_TYPES * 30) / 1024 / 1024)} MB (instead of ${(Math.floor(BOOKS_TO_INSERT * 50) / 1024 / 1024).toFixed(1)} MB)`)

}


clientCode()

// stores extrinsic data
export class Book {
  private name: string
  private price: number
  private type: BookType;

  constructor(name: string, price: number, type: BookType) {
    this.name = name
    this.price = price
    this.type = type
  }
}


// stores intrinsic data
class BookType {
  private type: string
  private distributor: string
  private otherData: string

  constructor(type: string, distributor: string, otherData: string) {
    this.type = type
    this.distributor = distributor
    this.otherData = otherData
  }
}


export class BookFactory {
  private static map = new Map<string, BookType>()

  static getBookType(type: string, distributor: string, otherData: string): BookType {
    if (!this.map.has(type)) {
      this.map.set(type, new BookType(type, distributor, otherData))
    }
    return this.map.get(type)!
  }
}


export class Store {
  private bookList: Book[] = []

  storeBook(name: string, price: number, type: string, distributor: string, otherData: string) {
    const bookType = BookFactory.getBookType(type, distributor, otherData)
    const book = new Book(name, price, bookType)
    this.bookList.push(book)
  }
}


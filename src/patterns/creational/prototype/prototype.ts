
interface Data {
  name: string
  info: {
    arr: number[]
  }
}

interface Clone {
  clone(): this
}

export class Document implements Clone {
  public data: Data

  constructor() {
    this.data = { name: "Original", info: { arr: [1, 2, 3] } }
  }

  clone(): this {
    return JSON.parse(JSON.stringify(this))
  }

}
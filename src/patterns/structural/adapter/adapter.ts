

export class PawnShop {
  buy(item: Item) {
    item.sell()
  }
}


export class Item {
  public currency = "USD"
  public price: number

  constructor(price: number) {
    this.price = price
  }

  sell() {
    console.log(`Sell item for ${this.price} US dollars`)
  }

}

export class EuropeanItem {
  public currency = "EUR"
  public price: number

  constructor(price: number) {
    this.price = price
  }

}

export class EuropeanItemAdapter extends Item {

  constructor(europeanItem: EuropeanItem) {
    super(europeanItem.price)
    this.convertCurrency(europeanItem.price)
  }

  private convertCurrency(amount: number) {
    // logic to convertCurrency
    this.price = amount * 1.20
  }

}



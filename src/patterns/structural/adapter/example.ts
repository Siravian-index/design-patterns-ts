import { EuropeanItem, EuropeanItemAdapter, Item, PawnShop } from "./adapter";


const shop = new PawnShop()
const item = new Item(50.0)
shop.buy(item)

const europeanItem = new EuropeanItem(30)
// shop.buy(europeanItem)  // fail to compile


const adapter = new EuropeanItemAdapter(europeanItem)
shop.buy(adapter)

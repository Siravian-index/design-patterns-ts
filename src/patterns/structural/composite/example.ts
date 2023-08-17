import { Product, Item, Box } from "./composite";


function clientCode(component: Product) {
  console.log(`Total: ${component.operation()}`);
}


const cart = new Box()
const foodBox = new Box()
const giftBox = new Box()
const pizza = new Item("Pizza", 8)
const orangeJuice = new Item("Orange Juice", 5)
const donut = new Item("Donut", 3)
foodBox.add(pizza)
foodBox.add(orangeJuice)
foodBox.add(donut)
const laptop = new Item("Laptop", 300)
const phone = new Item("Phone", 250)
giftBox.add(laptop)
giftBox.add(phone)
cart.add(foodBox)
cart.add(giftBox)
console.log("Cart Total:")
clientCode(cart)

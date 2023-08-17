import { Product, Item, Box } from "./composite";


function clientCode(component: Product) {
  console.log(`Total: ${component.operation()}`);
}


const simple = new Item("Tv", 150);
console.log('Client: I\'ve got a simple component:');
clientCode(simple);
console.log('');

const tree = new Box();
const branch1 = new Box();
branch1.add(new Item("Samsung phone", 80));
branch1.add(new Item("Plastic Bottle", 20));
const branch2 = new Box();
branch2.add(new Item("Laptop", 100));
tree.add(branch1);
tree.add(branch2);
console.log('Client: Now I\'ve got a composite tree:');
clientCode(tree);
console.log('');

function clientCode2(component1: Product, component2: Product) {

  if (component1.isComposite()) {
      component1.add(component2);
  }
  console.log(`Total: ${component1.operation()}`);

}

console.log('Client: I don\'t need to check the components classes even when managing the tree:');
clientCode2(tree, simple);
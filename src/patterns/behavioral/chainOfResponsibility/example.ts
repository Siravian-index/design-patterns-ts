import { DogHandler, Handler, MonkeyHandler, SquirrelHandler } from "./chain";

function clientCode(handler: Handler) {
  const foods = ['Nut', 'Banana', 'Cup of coffee'];

  for (const food of foods) {
      console.log(`Client: Who wants a ${food}?`);

      const result = handler.handle(food);
      if (result) {
          console.log(`  ${result}`);
      } else {
          console.log(`  ${food} was left untouched.`);
      }
  }
}


const monkey = new MonkeyHandler();
const squirrel = new SquirrelHandler();
const dog = new DogHandler();

monkey.setNext(squirrel).setNext(dog);


console.log('Chain: Monkey > Squirrel > Dog\n');
clientCode(monkey);
console.log('');

console.log('Subchain: Squirrel > Dog\n');
clientCode(squirrel);
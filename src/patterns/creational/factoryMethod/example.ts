import { KoreanRestaurant, MexicanRestaurant, Restaurant } from "./factoryMethod";


function example(creator: Restaurant) {
    console.log('Client: can use any restaurant');
    console.log(creator.listIngredients());
}

console.log('App: Launched with the MexicanRestaurant.');
example(new MexicanRestaurant("Taco"));
console.log('');

console.log('App: Launched with the KoreanRestaurant.');
example(new KoreanRestaurant("Korean Stew"));
import { ColombianRestaurant, KoreanRestaurant, MexicanRestaurant, Restaurant } from "./factoryMethod";


function example(creator: Restaurant) {
    console.log('Client: can use any restaurant');
    console.log(creator.previewDish());
}

console.log('App: Launched with the MexicanRestaurant.');
example(new MexicanRestaurant("Taco"));
console.log('');

console.log('App: Launched with the KoreanRestaurant.');
example(new KoreanRestaurant("Korean Stew"));
console.log('');

console.log('App: Launched with the ColombianRestaurant.');
example(new ColombianRestaurant("Bandeja Paisa"));
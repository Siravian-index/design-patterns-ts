abstract class Restaurant {
    order = ""
    public abstract factoryMethod(): Dish;

    public listIngredients(): string {
        const dish = this.factoryMethod();
        return `Ingredients: ${dish.listIngredients()}`;
    }
}


class MexicanRestaurant extends Restaurant {
    constructor(order: string) {
        super()
        this.order = order
    }

    public factoryMethod(): Dish {
        if (this.order === "Taco") {
            return new Taco();
        }
        throw new Error("Order not found")
    }
}

class KoreanRestaurant extends Restaurant {
    constructor(order: string) {
        super()
        this.order = order
    }
    public factoryMethod(): Dish {
        if (this.order === "Korean Stew") {
            return new KoreanStew();
        }
        throw new Error("Order not found")
    }
}

// Common interface
interface Dish {
    ingredients: string[]
    listIngredients(): string;
}

class Taco implements Dish {
    ingredients: string[];
    constructor() {
        this.ingredients = ["Beans", "Onion", "Pico de Gallo"]
    }
    public listIngredients(): string {
        return this.ingredients.join(", ");
    }
}

class KoreanStew implements Dish {
    ingredients: string[];
    constructor() {
        this.ingredients = ["Chicken Stock", "Tofu", "Mushrooms"]
    }
    public listIngredients(): string {
        return this.ingredients.join(", ")
    }
}

function clientCode(creator: Restaurant) {
    console.log('Client: can use any restaurant');
    console.log(creator.listIngredients());
}

console.log('App: Launched with the MexicanRestaurant.');
clientCode(new MexicanRestaurant("Taco"));
console.log('');

console.log('App: Launched with the KoreanRestaurant.');
clientCode(new KoreanRestaurant("Korean Stew"));
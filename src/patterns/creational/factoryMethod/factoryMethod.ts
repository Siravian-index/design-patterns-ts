export abstract class Restaurant {
    order = ""
    public abstract factoryMethod(): Dish;

    public previewDish(): string {
        const dish = this.factoryMethod();
        return `Ingredients: ${dish.listIngredients()}`;
    }
}


export class MexicanRestaurant extends Restaurant {
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

export class KoreanRestaurant extends Restaurant {
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

export class ColombianRestaurant extends Restaurant {
    constructor(order: string) {
        super()
        this.order = order
    }
    public factoryMethod(): Dish {
        if (this.order === "Bandeja Paisa") {
            return new BandejaPaisa()
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

class BandejaPaisa implements Dish {
    ingredients: string[];
    constructor() {
        this.ingredients = ["Beans", "Rice", "Chorizo"]
    }
    public listIngredients(): string {
        return this.ingredients.join(", ").concat("!")
    }
}

// factory
export default class Restaurant {
    static getDish(style: string): IDish {
        if (style === "Mexican") {
            return new MexicanDish()
        }

        if (style === "Korean") {
            return new KoreanDish()
        }

        return new Dish()
    }
}

// common interface
interface IDish {
    name: string
    price: number
    getReview: () => string
}

// standard base dish
class Dish implements IDish {
    public name: string
    public price: number

    constructor() {
        this.name = "Standard dish"
        this.price = 100
    }

    getReview() {
        return `The ${this.name} has a low price of ${this.price}!`
    }

    public getName(): string {
        return this.name
    }
}

// mexican dish
class MexicanDish extends Dish {
    constructor() {
        super()
        this.name = "Mexican Spicy Dish"
        this.price = 300
    }

    getReview(): string {
        return `The super ${this.name} will blow your mind! For only ${this.price}!`
    }

}
// korean dish
class KoreanDish extends Dish {
    constructor() {
        super()
        this.name = "Korean Stew"
        this.price = 290
    }

    getReview(): string {
        return `The centuries old ${this.name} for only ${this.price}! Kpop fans' favorite!`
    }
}
// italian dish
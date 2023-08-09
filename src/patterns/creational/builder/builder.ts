type Protein = "Chicken" | "Pork" | "Beef"
type Vegetable = "Onion" | "Lettuce" | "Tomato"
type Sauce = "Onion" | "Ketchup" | "Mayo"
type Wrapper = "Spicy bread" | "Onion bread" | "Standard bread"
type Ingredients = Protein | Vegetable | Sauce


interface Builder {
    addProtein(protein: Protein): void;
    addVegetable(vegetable: Vegetable): void;
    addSauce(sauce: Sauce): void;
    addWrapper(wrapper: Wrapper): void;
}

export class SandwichBuilder implements Builder {
    private product: Sandwich;

    constructor() {
        this.reset();
    }

    public reset(): void {
        this.product = new Sandwich();
    }

    addProtein(protein: Protein): void {
        this.product.parts.push(protein)
    }

    addVegetable(vegetable: Vegetable): void {
        this.product.parts.push(vegetable)
    }

    addSauce(sauce: Sauce): void {
        this.product.parts.push(sauce)
    }
    addWrapper(wrapper: Wrapper): void {
        if (this.product.wrapper) {
            return
        }
        this.product.wrapper = wrapper
    }

    public getProduct(): Sandwich {
        if (!this.product.wrapper) {
            throw new Error("Sandwich must have a base wrapper");
            
        }
        const result = this.product;
        this.reset();
        return result;
    }
}

class Sandwich {
    public parts: Ingredients[] = [];
    public wrapper: Wrapper

    public listParts(): void {
        console.log(`Product ingredients: ${this.wrapper} ${this.parts.join(', ')}\n`);
    }
}

export class SandwichDirector {
    public builder: SandwichBuilder

    addBuilder(builder: SandwichBuilder) {
        this.builder = builder
    }

    getSpicyChicken(): Sandwich {
        this.builder.addProtein("Chicken");
        this.builder.addWrapper("Spicy bread")
        this.builder.addSauce("Ketchup");
        return this.builder.getProduct()
    }

    getSuperSandwich(): Sandwich {
        this.builder.addWrapper("Onion bread")
        this.builder.addSauce("Ketchup")
        this.builder.addSauce("Mayo")
        this.builder.addVegetable("Lettuce")
        this.builder.addVegetable("Tomato")
        return this.builder.getProduct()
    }
}

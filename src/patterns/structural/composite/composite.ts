

export abstract class Product {
  protected parent!: Product | null;
  public setParent(parent: Product | null) {
    this.parent = parent;
  }

  public getParent(): Product | null {
    return this.parent;
  }

  public add(component: Product): void { }

  public remove(component: Product): void { }

  public isComposite(): boolean {
    return false;
  }
  public abstract operation(): number;
}

export class Item extends Product {
  public name: string
  public price: number
  constructor(name: string, price: number) {
    super()
    this.name = name
    this.price = price
  }
  public operation(): number {
    return this.price
  }
}

export class Box extends Product {
  protected children: Product[] = []

  public add(product: Product): void {
    this.children.push(product)
    product.setParent(this)
  }

  public remove(product: Product): void {
    const productIndex = this.children.indexOf(product);
    this.children.splice(productIndex, 1);

    product.setParent(null);
  }

  public isComposite(): boolean {
    return true;
  }

  public operation(): number {
    let total = 0;
    for (const child of this.children) {
      total += child.operation();
    }
    return total
  }
}
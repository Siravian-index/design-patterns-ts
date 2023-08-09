import { SandwichBuilder, SandwichDirector } from "./builder";

function clientCode(director: SandwichDirector) {
  const builder = new SandwichBuilder();
  director.addBuilder(builder)
  const spicySandwich = director.getSpicyChicken()
  spicySandwich.listParts()
  const superSandwich = director.getSuperSandwich()
  superSandwich.listParts()

}

clientCode(new SandwichDirector());
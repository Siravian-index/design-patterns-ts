import { House } from "./facade";

function clientCode(house: House) {
    house.turnSystemsOn()
    // do something
    house.shutdown()
}

clientCode(new House())
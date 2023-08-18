class ElectricSystem {
    private voltage: number
    setVoltage(voltage: number) {
        this.voltage = voltage
    }
    turnOn() { }

    turnOff() { }
}

class GasSystem {
    private provider: string
    setProvider(provider: string) {
        this.provider = provider
    }
    turnOn() { }

    turnOff() { }
}

// Facade
export class House {
    private electricSystem = new ElectricSystem()
    private gasSystem = new GasSystem()

    turnSystemsOn() {
        this.electricSystem.setVoltage(220)
        this.electricSystem.turnOn()
        this.gasSystem.setProvider("Gases de Occidente")
        this.gasSystem.turnOn()
        console.log("Systems ON")
    }

    shutdown() {
        this.electricSystem.turnOff()
        this.gasSystem.turnOff()
        console.log("Systems OFF")
    }
}
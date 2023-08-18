

export interface Component {
    operation(): string
}

export class Message implements Component {
    public msg: string
    constructor(msg: string) {
        this.msg = msg
    }

    operation(): string {
        return this.msg
    }

}

export class Decorator implements Component {
    protected component: Component
    constructor(component: Component) {
        this.component = component
    }

    operation(): string {
        return this.component.operation()
    }
}


export class MessageAlertDecorator extends Decorator {
    operation(): string {
        return `Important message: ${super.operation()}!!!`
    }
}

export class MessageUpperCaseDecorator extends Decorator {
    operation(): string {
        return super.operation().toUpperCase()
    }
}

export class MessageEncryptDecorator extends Decorator {
    operation(): string {
        return super.operation().split("").reverse().join("")
    }
}




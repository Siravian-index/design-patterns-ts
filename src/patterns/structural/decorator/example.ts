import { Component, Decorator, Message, MessageAlertDecorator, MessageEncryptDecorator, MessageUpperCaseDecorator } from "./decorator";

function clientCode(component: Component) {
    console.log(component.operation())
}

const simpleMsg = new Decorator(new Message("Testing"))
clientCode(simpleMsg)


const alertMsg = new MessageAlertDecorator(simpleMsg)
clientCode(alertMsg)


const upper = new MessageUpperCaseDecorator(alertMsg)
clientCode(upper)

const encrypted = new MessageEncryptDecorator(upper)
clientCode(encrypted)
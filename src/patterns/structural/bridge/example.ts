import { Radio, RemoteControl } from "./bridge";


const radio = new Radio()
console.log(radio)
const remote = new RemoteControl(radio)
remote.togglePower()
remote.volumeDown()
remote.volumeDown()
remote.volumeDown()
remote.volumeDown()
remote.volumeDown()
remote.volumeDown()

console.log(radio)

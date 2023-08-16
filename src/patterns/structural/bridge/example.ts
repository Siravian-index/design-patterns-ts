import { Radio, RemoteControl, RemoteControlWithMute } from "./bridge";

function main() {

  const radio = new Radio()
  console.log(radio)
  const remote = new RemoteControlWithMute(radio)
  remote.togglePower()
  remote.volumeUp()
  remote.volumeUp()
  remote.channelUp()
  remote.mute()
  console.log(radio)
}

main()


interface Device {
  isEnable(): boolean
  enable(): void
  disable(): void
  getVolume(): number
  setVolume(percentage: number): void
  getChannel(): number
  setChannel(channel: number): void
}

export class RemoteControl {
  protected device: Device

  constructor(device: Device) {
    this.device = device
  }

  togglePower() {
    if (this.device.isEnable()) {
      this.device.disable()
    } else {
      this.device.enable()
    }
  }

  volumeDown() {
    const MINUS = 10
    const prev = this.device.getVolume()
    this.device.setVolume(prev - MINUS)

  }
  volumeUp() {
    const PLUS = 10
    const prev = this.device.getVolume()
    this.device.setVolume(prev + PLUS)
  }

  channelDown() {
    const prev = this.device.getChannel()
    this.device.setChannel(prev - 1)
  }

  channelUp() {
    const prev = this.device.getChannel()
    this.device.setChannel(prev + 1)
  }


}

export class RemoteControlWithMute extends RemoteControl {
  constructor(device: Device) {
    super(device)
  }
  mute() {
    this.device.setVolume(0)
  }
}



export class Radio implements Device {
  private isOn: boolean = false
  private volume: number = 50
  private channel: number = 120

  isEnable(): boolean {
    return this.isOn
  }
  enable(): void {
    this.isOn = true
  }
  disable(): void {
    this.isOn = false
  }
  getVolume(): number {
    return this.volume
  }
  setVolume(percentage: number): void {
    if (percentage >= 0 && percentage <= 100) {
      this.volume = percentage
    }
  }
  getChannel(): number {
    return this.channel
  }
  setChannel(channel: number): void {
    if (channel >= 100 && channel <= 500) {
      this.channel = channel
    }
  }

}

export class TV implements Device{
  private isOn: boolean = false
  private volume: number = 20
  private channel: number = 1

  isEnable(): boolean {
    return this.isOn
  }
  enable(): void {
    this.isOn = true
  }
  disable(): void {
    this.isOn = false
  }
  getVolume(): number {
    return this.volume
  }
  setVolume(percentage: number): void {
    if (percentage >= 0 && percentage <= 100) {
      this.volume = percentage
    }
  }
  getChannel(): number {
    return this.channel
  }
  setChannel(channel: number): void {
    if (channel >= 1 && channel <= 50) {
      this.channel = channel
    }
  }
}
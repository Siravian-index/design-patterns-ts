import os from "node:os"
import { Button, CheckBox, GUIFactory, LinuxGUIFactory, WindowsGUIFactory } from "./abstractFactory";

class Application {
  private button: Button
  private factory: GUIFactory
  private checkBox: CheckBox

  constructor(factory: GUIFactory) {
    this.factory = factory
  }
  
  createUI() {
    this.button = this.factory.createButton()
    this.checkBox = this.factory.createCheckBox()
    this.button.paint()
    this.checkBox.paint()
  }

  handleOnClick() {
    this.button.onClick()
  }
}


function main() {
  const OS = os.platform()

  let factory: GUIFactory | null = null

  if (OS === "linux") {
    factory = new LinuxGUIFactory()
  } else if (OS === "win32") {
    factory = new WindowsGUIFactory()
  } else {
    throw new Error("OS not supported yet");
  }
  const app = new Application(factory)
  app.createUI()
  app.handleOnClick()
}

main()

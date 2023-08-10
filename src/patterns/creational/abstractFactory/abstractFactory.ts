
export interface Button {
  onClick(): void
  paint(): void
}

export interface CheckBox {
  onClick(): void
  paint(): void
}


export interface GUIFactory {
  createButton(): Button
  createCheckBox(): CheckBox
}


// concrete Button
class WindowsButton implements Button {
  onClick(): void {
    console.log("Click on windows btn")
  }
  paint(): void {
    console.log("render Windows Button")
  }
}

class LinuxButton implements Button {
  onClick(): void {
    console.log("Click on Linux btn <3")
  }
  paint(): void {
    console.log("render Linux Button")
  }
}

// concrete CheckBox
class WindowsCheckBox implements CheckBox {
  onClick(): void {
    console.log("Click on Windows CheckBox")
  }
  paint(): void {
    console.log("render Windows CheckBox")
  }
}

class LinuxCheckBox implements CheckBox {
  onClick(): void {
    console.log("Click on Linux CheckBox")
  }
  paint(): void {
    console.log("render Linux CheckBox")
  }
}


// concrete OS Factory
export class WindowsGUIFactory implements GUIFactory {
  createButton(): Button {
    return new WindowsButton()
  }
  createCheckBox(): CheckBox {
    return new WindowsCheckBox()
  }
}


export class LinuxGUIFactory implements GUIFactory {
  createButton(): Button {
    return new LinuxButton()
  }
  createCheckBox(): CheckBox {
    return new LinuxCheckBox()
  }
}
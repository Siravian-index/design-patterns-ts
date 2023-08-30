
export interface Handler {
  setNext(handle: Handler): Handler
  handle(request: string): string;
}

abstract class AbstractHandler implements Handler {
  private nextHandler: Handler

  setNext(handler: Handler): Handler {
    this.nextHandler = handler
    // handler1.setNext(handler2).setNext(handler3);
    return handler
  }

  handle(request: string): string {
      if (this.nextHandler) {
        return this.nextHandler.handle(request)
      }
      return ""
  }
}


export class MonkeyHandler extends AbstractHandler {
  public handle(request: string): string {
      if (request === 'Banana') {
          return `Monkey: I'll eat the ${request}.`;
      }
      return super.handle(request);

  }
}

export class SquirrelHandler extends AbstractHandler {
  public handle(request: string): string {
      if (request === 'Nut') {
          return `Squirrel: I'll eat the ${request}.`;
      }
      return super.handle(request);
  }
}

export class DogHandler extends AbstractHandler {
  public handle(request: string): string {
      if (request === 'MeatBall') {
          return `Dog: I'll eat the ${request}.`;
      }
      return super.handle(request);
  }
}
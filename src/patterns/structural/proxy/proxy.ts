export interface Internet {
  connectTo: (url: string) => void
}

export class RealInternet implements Internet {
  connectTo(url: string) {
    console.log(`Connecting to ${url}`)
  }
}

export class SchoolInternetProxy implements Internet {
  connectTo(url: string) {
    if (this.getForbiddenPages().includes(url)) {
      console.log(`Cannot access ${url} as it is blocked by the School network`)
      return
    }
    console.log(`Connecting to ${url}`)
  }

  private getForbiddenPages(): string[] {
    return ["facebook.com", "twitter.com", "etc.com"]
  }
}
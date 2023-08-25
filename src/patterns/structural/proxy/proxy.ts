export interface Internet {
  connectTo: (url: string) => void
}

export class RealInternet implements Internet {
  connectTo(url: string) {
    console.log(`Connecting to ${url}`)
  }
}

export class SchoolInternetProxy implements Internet {
  private service = new RealInternet()
  connectTo(url: string) {
    if (this.getForbiddenPages().includes(url)) {
      console.log(`Cannot access ${url} as it is blocked by the School network`)
      return
    }
    this.service.connectTo(url)
  }

  private getForbiddenPages(): string[] {
    return ["facebook.com", "twitter.com", "etc.com"]
  }
}


export class CacheInternetProxy implements Internet {
  private service = new RealInternet()
  private cache: Record<string, string> = {}

  connectTo(url: string) {
    if (this.cache[url]) {
      console.log(this.cache[url])
      return
    }
    this.service.connectTo(url)
    this.cache[url] = `Cached webpage ${url}`
  }

}
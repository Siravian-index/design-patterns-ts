import { CacheInternetProxy, Internet, RealInternet, SchoolInternetProxy } from "./proxy";

function clientCode(internet: Internet, url: string) {
  internet.connectTo(url)
  console.log("")
}

const internet = new RealInternet()

clientCode(internet, "facebook.com")

const schoolInternet = new SchoolInternetProxy()
clientCode(schoolInternet, "facebook.com")


const cacheInternet = new CacheInternetProxy()
clientCode(cacheInternet, "facebook.com")
clientCode(cacheInternet, "facebook.com")


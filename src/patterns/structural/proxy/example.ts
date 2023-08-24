import { Internet, RealInternet, SchoolInternetProxy } from "./proxy";

function clientCode(internet: Internet, url: string) {
  internet.connectTo(url)
  console.log("")
}

const internet = new RealInternet()

clientCode(internet, "google.com")

const schoolInternet = new SchoolInternetProxy()
clientCode(schoolInternet, "facebook.com")

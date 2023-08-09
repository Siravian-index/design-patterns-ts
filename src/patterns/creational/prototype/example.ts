import { Document } from "./prototype";

const doc = new Document()
const copy = doc.clone()

copy.data.name = "Copy"
copy.data.info.arr.push(5)
console.log(copy.data)
console.log(doc.data)

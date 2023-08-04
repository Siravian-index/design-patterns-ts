import Restaurant from "./simple/factoryMethod";


const koreanDish = Restaurant.getDish("Korean")
const mexicanDish = Restaurant.getDish("Mexican")


console.log(koreanDish.getReview())
console.log(mexicanDish.getReview())

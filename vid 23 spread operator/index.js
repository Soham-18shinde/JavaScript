//spread operator=... allows an iterable such as an array or string to be expanded into seperate elements (unpacks the elements)




/*let numbs=[1,2,3,4,5,6]
let maximum=Math.max(...numbs)
let minimum=Math.min(...numbs)
console.log(maximum)
console.log(minimum)*/

/*let username="soham shinde"
let letters=[...username].join("-")
console.log(letters)*/

let fruits=["apple","mango","banana"]
let newFruits=[...fruits] ///shallow copy
let vegetables=["spinach","brocoli","onion"]
let foods=[...fruits,...vegetables]
console.log(foods)
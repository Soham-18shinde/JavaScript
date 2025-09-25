

//.filter()= the filter method creates a new array by filtering out elements

/*let nums=[1,2,3,4,5,6,7,8]
let evenNums=nums.filter(isEven)
let oddNums=nums.filter(isOdd)

function isOdd(element){
    return element % 2 !=0
}

function isEven(element){
    return element % 2 ===0;
}

console.log(`The Odd Numbers are : ${oddNums}`)
console.log(`The Even Numbers are : ${evenNums}`)
*/



/*const ages=[16,18,56,18,45]
let underAge=ages.filter(belowAge)
let adults=ages.filter(isadult)
console.log(underAge)
console.log(adults)



function belowAge(element){
    return element < 18
}

function isadult(element){
    return element >=18;
}
*/



const fruits = ["apple","mango","pineapple","strawberry","pomogranate","kiwi","watermeleon"]
let tooLong=fruits.filter(aboveSix)
console.log(tooLong)

function aboveSix(element){
    return  element.length >=6
}

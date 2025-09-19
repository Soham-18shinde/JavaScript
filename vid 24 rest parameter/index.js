//rest parameter = (...rest) allows a function to work with a variable number of arguments  by bundling them into an array


//spread=expands an array into seperate elemnets
//rest=bundles seperate elements into an array



/*function fridge(...foods){
    console.log(foods)
}

let food1="burger"
let food2="pizza"
let food3="cake"
let food4="icecream"
let food5="chocolate"

fridge(food1,food2,food3,food4,food5)*/



function sum(...numbers){
    let result=0
    for(let number of numbers){
        result+=numbers
    }
    return result
}

const total=sum(1,6,3,6)
console.log(total)
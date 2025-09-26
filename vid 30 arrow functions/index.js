// arrow functions =  it is an concise way to write function expressions good for simple functions that you use only once

/*const bio = (name,age,course)=>{
    console.log(` hello my name is : ${name}`)
    console.log(` I am ${age} years old`)
    console.log(`I am currently doing ${course} course`)
}


bio("soham",19,"CSE")*/


/*setTimeout(()=>{
    console.log("Hello i am the second example")
},3000)*/



const nums= [1,2,3,4,5,6,7,8,9,10]

const squares =  nums.map((element)=>{
    return Math.pow(element,2)
})

const isOdd = nums.filter((element)=>{
    return element % 2 !=0
})

const isEven = nums.filter((element)=>{
    return element % 2==0
})

const total = nums.reduce((accumulator,element)=>{
    return accumulator + element
})


console.log(squares)
console.log(isOdd)
console.log(isEven)
console.log(total)
   
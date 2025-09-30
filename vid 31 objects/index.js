// object =  it is a collection of related properties and/ or methods(functions)
///          which can represent real world objects 
//             object = {key:value,
//                       function()}



const person = {
    firstName:"soham",
    lastName:"shinde",
    age:30,
    isEmployed:false,
    sayHello:()=>{
        console.log("hi i am soham")
    }
}

console.log(person.firstName)
console.log(person.lastName)
console.log(person.age)
console.log(person.isEmployed)
person.sayHello()